import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import BtnSpinner from "../../BtnSpinner";

const PostSubmitBtn = ({ text, className, isLoading }) => {
  return (
    <button
      type="submit"
      className={className || "w-btn-secondary-lg"}
      disabled={isLoading}
    >
      {isLoading && <BtnSpinner />}
      {text || `Add post`}
      <MdArrowRightAlt size={26} className="ms-1" />
    </button>
  );
};

export default PostSubmitBtn;
