import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getChildCategory,
  getFormFields,
} from "../../../../feature/masters/categorySlice";
import { FaRegTrashCan } from "react-icons/fa6";
import PostSubmitBtn from "../../../../components/admin/users/post/PostSubmitBtn";
import { splitErrors } from "../../../../utils/showErrors";
import customFetch from "../../../../utils/customFetch";
import { toast } from "react-toastify";
import { UserLocation } from "../../../../components";

// Main component starts ------
const PostAd = () => {
  document.title = `Add New Post | ${import.meta.env.VITE_APP_TITLE}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { parentCategories, childCategories, formFields } = useSelector(
    (store) => store.categories
  );
  const { currentUser } = useSelector((store) => store.currentUser);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState(new Map());
  const [dynamicFields, setDynamicFields] = useState([]);
  const [dynamicData, setDynamicData] = useState({});

  useEffect(() => {
    setDynamicFields(formFields || []);
  }, [formFields]);

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

  const handleDbChange = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/webp",
    ]; // Example MIME types

    files.forEach((file) => {
      if (validMimeTypes.includes(file.type)) {
        // if (!file.type.startsWith("image/")) {
        //   toast.error(`Not an image`);
        //   return;
        // }
        if (
          !(file.type == "image/jpeg") &&
          !(file.type == "image/jpg") &&
          !(file.type == "image/png") &&
          !(file.type == "image/gif") &&
          !(file.type == "image/webp")
        ) {
          toast.error(`Image should be JPG or JPEG or PNG or GIF type`);
          return;
        }
        if (file.size > 500 * 1024) {
          toast.error(`Image size cannot be more than 500 KB`);
          return;
        }

        setPostImages((prevImages) => [...prevImages, file]);
        setSelectedImages((prevSelected) =>
          new Map(prevSelected).set(file.name, false)
        );
      } else {
        toast.error(`Not an image`);
        return;
      }
    });
  };

  const deleteImage = (index) => {
    setPostImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSelectedImages((prevSelected) => {
      const newSelected = new Map(prevSelected);
      newSelected.delete(postImages[index].name);
      return newSelected;
    });
  };

  const handleCheckboxChange = (name) => {
    setSelectedImages((prevSelected) => {
      const newSelected = new Map(prevSelected);
      newSelected.set(name, !newSelected.get(name));

      return newSelected;
    });
  };

  const loopImg = () => {
    return postImages.map((img, index) => (
      <div
        key={nanoid()}
        className="position-relative gig-media-thumb overflow-hidden"
      >
        <input
          type="radio"
          name="is_cover_image"
          className="form-check-input"
          value={img.name}
          checked={selectedImages.get(img.name) || false}
          onChange={() => handleCheckboxChange(img.name)}
        />
        <img src={URL.createObjectURL(img)} className="img-fluid" alt="" />
        <button
          type="button"
          className="gig-img-delete-btn"
          onClick={() => deleteImage(index)}
        >
          <FaRegTrashCan size={13} className="text-white" />
        </button>
      </div>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();

    // Append regular form data
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData.entries()) {
      if (key !== "image") {
        // Skip the 'image' key if it exists
        data.append(key, value);
      }
    }

    // Append images
    postImages.forEach((img) => {
      data.append(`image`, img); // Use a unique key for each image
    });

    selectedImages.forEach((selected, name) => {
      if (selected) {
        data.append("cover", name);
      }
    });
    // console.log(selectedImages);
    console.log(...data);
    try {
      const response = await customFetch.post(`/posts/posts`, data);
      console.log(response);
      toast.success(`Post created`);
      navigate(`/`);
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      console.log(error);
      return null;
    }
  };

  return (
    <>
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
                  <h4 className="text-18 fw-semibold text-white">Post info</h4>
                </div>
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
                    <UserLocation />
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
                <div className="gig-info-card">
                  <div className="gig-info-header">
                    <h4 className="text-18 fw-semibold text-white">
                      We will need a little more information
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
                          onChange={handleImageChange}
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
                        htmlFor="gig-video"
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
                          name="video"
                          id="gig-video"
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
                <PostSubmitBtn isLoading={false} text={`Add post`} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostAd;
