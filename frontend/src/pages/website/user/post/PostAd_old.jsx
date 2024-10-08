import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useNavigation } from "react-router-dom";
import {
  getChildCategory,
  getFormFields,
} from "../../../../feature/masters/categorySlice";
import { FaRegTrashCan } from "react-icons/fa6";
import PostSubmitBtn from "../../../../components/admin/users/post/PostSubmitBtn";
import { splitErrors } from "../../../../utils/showErrors";
import customFetch from "../../../../utils/customFetch";
import { toast } from "react-toastify";
import { UserLocation, WebsiteLoader } from "../../../../components";

// // Action starts ------
export const action = async ({ request }) => {
  let formData = await request.formData();
  return null;
  try {
    const response = await customFetch.post(`/posts/posts`, formData);
    toast.success(`Post created`);
    // return null;
    return redirect(`/`);
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    console.log(error);
    return null;
  }
};

// Main component starts ------
const PostAd = () => {
  document.title = `Add New Post | ${import.meta.env.VITE_APP_TITLE}`;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const { parentCategories, childCategories, formFields } = useSelector(
    (store) => store.categories
  );

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [postImages, setPostImages] = useState([]);

  const [dynamicFields, setDynamicFields] = useState([]);
  const [dynamicData, setDynamicData] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (value) => {
    setSelectedCategory(value);
    dispatch(getChildCategory(+value));
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

  const handleImageChange = (e) => {
    const file = e.target.files;

    if (file) {
      if (file?.name && !file?.type.startsWith("image/")) {
        toast.error(`Not an image`);
        return;
      }
      if (file?.name && file?.size > 500 * 1024) {
        toast.error(`Image size cannot be more than 500 KB`);
        return;
      }
      if (file?.name && postImages.length === 2) {
        toast.error(`Maximum 2 images can be uploaded`);
        return;
      }
    }

    const arr = [...postImages, ...file];
    setPostImages(arr);
  };

  const deleteImage = (key) => {
    const newArr = postImages.filter((i, index) => index !== key);
    setPostImages(newArr);
  };

  const loopImg = () => {
    return postImages?.map((img, index) => {
      return (
        <div
          key={nanoid()}
          className="position-relative gig-media-thumb overflow-hidden"
        >
          <img
            src={img ? URL.createObjectURL(img) : ""}
            className="img-fluid"
            alt=""
          />
          <button
            type="button"
            className="gig-img-delete-btn"
            onClick={() => deleteImage(index)}
          >
            <FaRegTrashCan size={13} className="text-white" />
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <Form autoComplete="off" method="POST" encType="multipart/form-data">
            <div className="d-flex flex-column gap-4">
              <div className="gig-info-card">
                <div className="gig-info-header">
                  <h4 className="text-18 fw-semibold text-white">Post info</h4>
                </div>
                <div className="gig-info-card">
                  <div className="gig-info-body bg-white">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="form-container">
                          <label className="form-label required">
                            Title Name
                          </label>
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
                          <label className="form-label required">
                            Category
                          </label>
                          <select
                            className="form-select shadow-none"
                            name="category"
                            value={selectedCategory}
                            onChange={(e) => onCategoryChange(e.target.value)}
                          >
                            <option value="">- Select -</option>
                            {parentCategories?.map((parent) => {
                              return (
                                <option key={nanoid()} value={parent.id}>
                                  {parent.category}
                                </option>
                              );
                            })}
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
                            onChange={(e) =>
                              onSubCategoryChange(e.target.value)
                            }
                          >
                            <option value="">- Select -</option>
                            {childCategories?.map((child) => {
                              return (
                                <option key={nanoid()} value={child.id}>
                                  {child.category}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <UserLocation />

                      <div className="col-12">
                        <label className="form-label required">
                          Description
                        </label>
                        <textarea
                          className="w-editor-wrapper"
                          rows={5}
                          style={{ resize: "none" }}
                          name="description"
                          value={form.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
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

                {selectedSubCategory && dynamicFields.length > 0 && (
                  <div className="gig-info-card">
                    <div className="gig-info-header">
                      <h4 className="text-18 fw-semibold text-white">
                        We will need a little more information
                      </h4>
                    </div>
                    <div className="gig-info-body bg-white">
                      <div className="row g-4">
                        {dynamicFields.map((field) => {
                          return (
                            <div key={field.field_name} className="col-12">
                              <div className="form-container">
                                <label
                                  className={`form-label ${
                                    field.is_required ? "required" : ""
                                  }`}
                                  htmlFor="category"
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
                                      const { option_id, option_value } =
                                        option;

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
                            onChange={(e) => handleImageChange(e ? e : null)}
                          />
                        </label>
                      </div>

                      {loopImg()}
                    </div>
                  </div>
                </div>

                <div className="gig-info-card">
                  <div className="gig-info-header">
                    <h4 className="text-18 fw-semibold text-white">
                      A video would be a nice touch to the post (not mandatory)
                    </h4>
                  </div>
                  <div className="gig-info-body bg-white">
                    <div className="d-flex gap-3 flex-wrap">
                      <div>
                        <label
                          htmlFor="gig-img"
                          className="border text-center gig-file-upload"
                        >
                          <img
                            src="assets/img/dashboard/gigs/gallery-icon.png"
                            alt=""
                          />
                          <p className="text-dark-200">Max.Size 300MB</p>
                          <input
                            className="d-none"
                            type="file"
                            name=""
                            id="gig-img"
                          />
                        </label>
                      </div>
                      <div className="position-relative gig-media-thumb">
                        <img
                          src="assets/img/dashboard/gigs/g-2.png"
                          className="img-fluid"
                          alt=""
                        />
                        <button className="gig-img-delete-btn">
                          <FaRegTrashCan size={13} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* <PostSubmitBtn isLoading={isLoading} text={`Add post`} /> */}
                  <PostSubmitBtn isLoading={false} text={`Add post`} />
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PostAd;
