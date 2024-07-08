import React, { useEffect, useState } from "react";
import { PageHeader, PageWrapper } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  getChildCategory,
  getFormFields,
} from "../../../feature/masters/categorySlice";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Main component starts ------
const PostAdd = () => {
  document.title = `Add New Post | ${import.meta.env.VITE_APP_TITLE}`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allCategories, childCategories, formFields } = useSelector(
    (store) => store.categories
  );

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [form, setForm] = useState({ title: "", description: "", price: "" });

  const [dynamicFields, setDynamicFields] = useState([]);
  const [dynamicData, setDynamicData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const parents = allCategories?.filter((i) => !i.parent_id);

  const onCategoryChange = (value) => {
    setSelectedCategory(value);
    dispatch(getChildCategory(Number(value)));
  };

  const onSubCategoryChange = (value) => {
    setSelectedSubCategory(value);
    dispatch(getFormFields(+value));
  };

  useEffect(() => {
    setDynamicFields(formFields || []);
  }, [formFields]);

  const handleDbChange = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post(`/posts/posts`, data);

      toast.success(`Post added`);
      navigate(`/admin/posts`);
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
                dynamicFields?.map((i) => {
                  return (
                    <div className="row row-cards" key={i.field_name}>
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
                            name={i.field_name}
                            id={i.field_name}
                            value={dynamicData[i.field_name] || ""}
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
                Submit
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

export default PostAdd;
