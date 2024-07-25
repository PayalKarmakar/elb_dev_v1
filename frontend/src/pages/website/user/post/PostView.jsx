import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { decParam } from "../../../../utils/functions";
import PostHero from "../../../../components/website/post/PostHero";
import PostReviews from "../../../../components/website/post/PostReviews";
import PostDetailsRight from "../../../../components/website/post/PostDetailsRight";
import PostDetailsLeft from "../../../../components/website/post/PostDetailsLeft";

const PostView = () => {
  let { id } = useParams(); // Get id parameter from URL
  let postId = decParam(id);

  return (
    <>
      <PostHero />
      <section className="py-110 bg-offWhite">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <PostDetailsLeft postSlug={{ postId: postId }} />
            </div>
            <PostDetailsRight postSlug={{ postId: postId }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostView;
