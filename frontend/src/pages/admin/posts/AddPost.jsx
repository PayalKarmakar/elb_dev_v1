import React from "react";
import { PageWrapper } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

const AddPost = () => {
  document.title = `Add New Post | ${import.meta.env.VITE_APP_TITLE}`;
  const dispatch = useDispatch();
  const { parentCategories } = useSelector((store) => store.categories);

  return (
    <PageWrapper>
      <form autoComplete="off">
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="">Category</label>
            <select className="form-select" name="category" id="category">
              <option value="">Select</option>
              {parentCategories?.map((i) => {
                return (
                  <option key={nanoid()} value={i.id}>
                    {i.category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Sub-category</label>
            <select className="form-select" name="subCategory" id="subCategory">
              <option value="">Select</option>
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="">Description</label>
            <textarea
              className="form-control"
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>
      </form>
    </PageWrapper>
  );
};

export default AddPost;
