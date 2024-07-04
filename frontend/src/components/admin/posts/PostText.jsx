import React, { useState } from "react";

const PostText = ({ name, type, dbData, handleDbChange }) => {
  return (
    <>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        value={dbData}
        onChange={handleDbChange}
        // {...(type === "number" ? { min: 0 } : {})}
      />
    </>
  );
};

export default PostText;
