import React, { useEffect, useState } from "react";
import { PageHeader, PageWrapper } from "../../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  getChildCategory,
  getFormFields,
} from "../../../feature/masters/categorySlice";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { decParam } from "../../../utils/functions";

const getLocalData = () => {
  const info = localStorage.getItem("post");
  return JSON.parse(info);
};

const PostEdit = () => {
  document.title = `Edit Details of ${getLocalData().title} | ${
    import.meta.env.VITE_APP_TITLE
  }`;

  // ------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = id && decParam(id);

  // Store ------
  const { allCategories, childCategories, formFields } = useSelector(
    (store) => store.categories
  );

  // States ------
  const [localData, setLocalData] = useState(postId ? getLocalData() : {});
  const [selectedCategory, setSelectedCategory] = useState(
    localData ? localData.cat_id : ""
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    localData ? localData.subcat_id : ""
  );
  const [form, setForm] = useState({
    title: localData ? localData.title : "",
    description: localData ? localData?.description : "",
    price: localData ? localData.price : "",
  });

  const [dynamicFields, setDynamicFields] = useState([]);
  const [dynamicData, setDynamicData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  // Handle on change ------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (value) => {
    const newCat = +value || localData.cat_id;
    setSelectedCategory(newCat);
    dispatch(getChildCategory(newCat));
  };

  const onSubCategoryChange = (value) => {
    const newSubCat = +value || localData.subcat_id;
    setSelectedSubCategory(newSubCat);
    dispatch(getFormFields(newSubCat));
  };

  const parents = allCategories?.filter((i) => !i.parent_id);

  // UseEffect ------
  useEffect(() => {
    dispatch(getChildCategory(selectedCategory));

    const dbFormFields = async () => {
      try {
        const response = await customFetch.get(
          `/masters/form-fields-with-options/${
            selectedSubCategory || localData.subcat_id
          }`
        );
        setDynamicFields(response?.data?.data?.rows || []);
      } catch (error) {
        splitErrors(error?.response?.data?.msg);
        console.log(error);
      }
    };
    dbFormFields();

    const dbData = localData?.attr?.map((data) => {
      return { [data.attr_id]: data.attr_db_value || data.attr_entry };
    });

    setDynamicData(dbData);
  }, [formFields]);

  const handleDbChange = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };

  // Form Submit ------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post(`/posts/posts`, data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };

  const removeLocalPost = () => {
    localStorage.removeItem("post");
    navigate(`../`);
  };

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <PageHeader title={`Add new post`} />
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <button
                    type="button"
                    className="btn btn-success d-none d-sm-inline-block me-2"
                    onClick={removeLocalPost}
                  >
                    Back to list
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageWrapper>
        <div className="card">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="row row-cards">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="category">
                    Select category
                  </label>
                  <select
                    className="form-select"
                    name="category"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                  >
                    <option value="">Select</option>
                    {parents?.map((i) => {
                      return (
                        <option key={nanoid()} value={i.id}>
                          {i.category}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {childCategories.length > +0 && (
                  <div className="col-md-6">
                    <label
                      className="form-label required"
                      htmlFor="subCategory"
                    >
                      Select sub-category
                    </label>
                    <select
                      className="form-select"
                      name="subCategory"
                      id="subCategory"
                      value={selectedSubCategory}
                      onChange={(e) => onSubCategoryChange(e.target.value)}
                    >
                      <option value="">Select</option>
                      {childCategories?.map((i) => {
                        return (
                          <option key={nanoid()} value={i.id}>
                            {i.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>

              <div className="row row-cards">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="category">
                    Enter a fitting title for your post
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label required" htmlFor="category">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    value={form.price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row row-cards">
                <div className="col-md-6">
                  <label className="form-label required" htmlFor="category">
                    A brief description would help the buyer
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    value={form.description || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {selectedSubCategory &&
                dynamicFields?.map((i, index) => {
                  return (
                    <div className="row row-cards" key={i.id}>
                      <div className="col-md-6">
                        <label
                          className={`form-label ${
                            i.is_required ? "required" : ""
                          }`}
                          htmlFor="category"
                        >
                          {i.field_label}
                        </label>
                        {(i.field_type === "text" ||
                          i.field_type === "number") && (
                          <input
                            type={i.field_type}
                            className="form-control"
                            name={i.id}
                            id={i.id}
                            value={dynamicData[i.id] || ""}
                            onChange={handleDbChange}
                          />
                        )}

                        {i.field_type === "radio" && (
                          <div>
                            {i.options.map((option) => {
                              const { option_id, option_value } = option;

                              return (
                                <label
                                  key={option_id}
                                  className="form-check form-check-inline"
                                >
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name={i.field_name}
                                    value={option_id}
                                    checked={dynamicData[i.id] || ""}
                                    onChange={handleDbChange}
                                  />
                                  <span className="form-check-label">
                                    {option_value}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success">
                Save changes
              </button>
              <button type="button" className="btn btn-secondary ms-3">
                Reset
              </button>
            </div>
          </form>
        </div>
      </PageWrapper>
    </>
  );
};

export default PostEdit;
