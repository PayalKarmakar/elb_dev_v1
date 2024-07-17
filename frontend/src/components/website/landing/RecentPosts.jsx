import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import product1 from "../../../assets/website/img/job/product-1.jpg"; // Default image for fallback

const RecentPosts = () => {
  const { recentPosts } = useSelector((store) => store.posts);

  return (
    <section className="recently-view pb-110 bg-offWhite py-110">
      <div className="container">
        <div className="row justify-content-between align-items-end mb-40">
          <div className="col-auto">
            <h2 className="fw-bold section-title">Recent Posts</h2>
            <p className="section-desc">Get some Recent Posts</p>
          </div>
          <div className="col-auto mt-30 mt-md-0">
            <div className="d-flex justify-content-end">
              <Link to="/cat/all" className="w-btn-link">
                View more
                <span> </span>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 justify-content-center row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
          {recentPosts.map((post, index) => {
            const imgSrc = post.image_path
              ? `${import.meta.env.VITE_BASE_URL}/${post.image_path}`
              : product1;
            return (
              <article key={index}>
                <div
                  className="service-card bg-white"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="linear"
                >
                  <div className="position-relative">
                    <img
                      src={imgSrc}
                      className="recently-view-card-img w-100"
                      alt={post.title || "Post Image"}
                    />
                    <button className="service-card-wishlist-btn">
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className="service-card-content">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="job-post-subtitle fw-bold">
                          {`₹${post.price}`}
                        </h3>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <FaStar />
                        <span className="service-card-rating">4.8 (2k)</span>
                      </div>
                    </div>
                    <h3 className="service-card-title fw-semibold">
                      <Link href="service-details.html">
                        {post.title || "Brote - Cleaning Service Elementor"}
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center service-card-author">
                      <img
                        src={post.authorImage || "assets/img/avatar/u-sm-1.png"}
                        className="service-card-author-img"
                        alt={post.author || "Author Image"}
                      />
                      <Link
                        href="freelancer-details.html"
                        className="service-card-author-name"
                      >
                        {post.author || "Post BY"}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
