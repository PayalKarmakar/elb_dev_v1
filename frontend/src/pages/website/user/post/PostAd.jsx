import React from "react";
import PostCreate from "../../../../components/website/user/post/PostCreate";
import Sidebar from "../../../../components/website/user/UserSidebar";
import PostNav from "../../../../components/website/user/post/PostNav";

const UserPostAd = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        {/* <PostNav /> */}
        <PostCreate />
      </div>
    </>
  );
};

export default UserPostAd;
