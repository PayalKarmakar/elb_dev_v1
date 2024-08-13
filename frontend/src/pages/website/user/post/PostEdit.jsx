import { useLoaderData, useParams } from "react-router-dom";
import { decParam } from "../../../../utils/functions";
import { useEffect, useState } from "react";
import customFetch from "../../../../utils/customFetch";
import { splitErrors } from "../../../../utils/showErrors";
import { UserLocation } from "../../../../components";
import PostSubmitBtn from "../../../../components/admin/users/post/PostSubmitBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  getChildCategory,
  getFormFields,
} from "../../../../feature/masters/categorySlice";
import { nanoid } from "nanoid";

// Loader starts ------
export const loader = async ({ params }) => {
  const { id } = params;
  const postId = decParam(id);
  try {
    const response = await customFetch.get(`/users/my-single-post/${postId}`);
    return response.data;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return error;
  }
};

// Main component starts ------
const PostEdit = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const postId = decParam(id);
  const postData = data.rows[0];
  const { parentCategories, childCategories, formFields } = useSelector(
    (store) => store.categories
  );

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  document.title = `${postData.title} | ${import.meta.env.VITE_APP_TITLE}`;
  const [form, setForm] = useState({
    title: postData.title || "",
    description: postData.description || "",
    price: postData.price || "",
  });
  const [selectedCategory, setSelectedCategory] = useState(
    postData.cat_id || ""
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    postData.subcat_id || ""
  );
  const [dynamicFields, setDynamicFields] = useState([]);
  const [dynamicData, setDynamicData] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setDynamicFields(formFields || []);
  }, [formFields]);

  const onCategoryChange = (value) => {
    setSelectedCategory(value);
    dispatch(getChildCategory(+value));
  };

  const onSubCategoryChange = (value) => {
    setSelectedSubCategory(value);
    dispatch(getFormFields(+value));
  };

  const handleDbChange = (e) => {
    setDynamicData({
      ...dynamicData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getChildCategory(+postData.cat_id));
    if (postData?.subcat_id) onSubCategoryChange(postData?.subcat_id);
  }, [postData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      const response = await customFetch.patch(`/posts/posts/${postId}`);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-12">
        <form
          autoComplete="off"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="d-flex flex-column gap-4">
            <div className="gig-info-card">
              <div className="gig-info-header">
                <h4 className="text-18 fw-semibold text-white">
                  {postData.title}
                </h4>
              </div>
              <div className="gig-info-body bg-white">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="form-container">
                      <label className="form-label required">Title Name</label>
                      <input
                        type="text"
                        className="w-editor-wrapper"
                        placeholder="Product Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-container">
                      <label className="form-label required">Category</label>
                      <select
                        className="form-select shadow-none"
                        name="category"
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                      >
                        <option value="">- Select -</option>
                        {parentCategories.map((parent) => (
                          <option key={nanoid()} value={parent.id}>
                            {parent.category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-container">
                      <label className="form-label required">
                        Select SubCategory
                      </label>
                      <select
                        className="form-select shadow-none"
                        name="subCategory"
                        value={selectedSubCategory}
                        onChange={(e) => onSubCategoryChange(e.target.value)}
                      >
                        <option value="">- Select -</option>
                        {childCategories.map((child) => (
                          <option key={nanoid()} value={child.id}>
                            {child.category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <UserLocation postData={postData} />
                  <div className="col-12">
                    <label className="form-label required">Description</label>
                    <textarea
                      className="w-editor-wrapper"
                      rows={5}
                      style={{ resize: "none" }}
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-container">
                      <label className="form-label required">Price</label>
                      <input
                        type="number"
                        className="w-editor-wrapper"
                        placeholder=""
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {selectedSubCategory && dynamicFields.length > 0 && (
              <div className="row">
                <div className="col-xl-6 col-md-6 gig-info-card">
                  <div className="gig-info-header">
                    <h4 className="text-18 fw-semibold text-white">
                      New information
                    </h4>
                  </div>
                  <div className="gig-info-body bg-white">
                    <div className="row g-4">
                      {dynamicFields.map((field) => (
                        <div key={field.field_name} className="col-12">
                          <div className="form-container">
                            <label
                              className={`form-label ${
                                field.is_required ? "required" : ""
                              }`}
                              htmlFor={field.field_name}
                            >
                              {field.field_label}
                            </label>
                            {(field.field_type === "text" ||
                              field.field_type === "number") && (
                              <input
                                type={field.field_type}
                                className="w-editor-wrapper"
                                name={field.field_name}
                                id={field.field_name}
                                value={dynamicData[field.field_name] || ""}
                                onChange={handleDbChange}
                              />
                            )}
                            {field.field_type === "radio" && (
                              <div>
                                {field.options.map((option) => {
                                  const { option_id, option_value } = option;

                                  return (
                                    <label
                                      key={option_id}
                                      className="form-check form-check-inline"
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name={field.field_name}
                                        value={option_id}
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
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 gig-info-card">
                  <div className="gig-info-header">
                    <h4 className="text-18 fw-semibold text-white">
                      The information we have
                    </h4>
                  </div>
                  <div className="gig-info-body bg-white">
                    <div className="row g-4">
                      {postData?.attributes?.map((field) => {
                        return (
                          <div key={field.attr_name} className="col-12">
                            <div className="form-container">
                              <label
                                className={`form-label`}
                                htmlFor={field.attr_name}
                              >
                                {field.attr_name}
                              </label>
                              {(field.attr_type === "text" ||
                                field.attr_type === "number") && (
                                <span className="text-yellow">
                                  {field.attr_entry}
                                </span>
                              )}
                              {field.attr_type === "radio" && (
                                <div>
                                  <label className={`form-label`}>
                                    <span className="text-yellow">
                                      {field.attr_db_label}
                                    </span>
                                  </label>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="gig-info-card">
              <div className="gig-info-header">
                <h4 className="text-18 fw-semibold text-white">
                  Upload some cool images (max. 2)
                </h4>
              </div>
              <div className="gig-info-body bg-white">
                <p className="text-dark-200 mb-2">Gig Images</p>
                <div className="d-flex flex-wrap gap-3">
                  <div>
                    <label
                      htmlFor="gig-img"
                      className="border text-center gig-file-upload"
                    >
                      <img
                        src="assets/img/dashboard/gigs/gallery-icon.png"
                        alt=""
                      />
                      <p className="text-dark-200">Max.Size 500KB</p>
                      <input
                        className="d-none"
                        type="file"
                        multiple
                        name="image"
                        id="gig-img"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <PostSubmitBtn isLoading={false} text={`Save Changes`} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostEdit;
