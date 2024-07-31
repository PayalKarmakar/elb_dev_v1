import { nanoid } from "nanoid";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import fakeImage from "../../../assets/website/img/paperwork.jpg";

const ProductCard = ({ post }) => {
  return (
    <article key={nanoid()} className="my-3">
      <Link to={`/posts/${post.slug}`} className="text-decoration-none">
        <div
          className="service-card bg-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <div className="position-relative">
            {post.images.length > 0 ? (
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  post.images[0].image_url
                }`}
                className="recently-view-card-img w-100"
                alt={post.title}
              />
            ) : (
              <img
                src={fakeImage}
                className="recently-view-card-img w-100"
                alt={post.title}
              />
            )}

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
              {post.title.length > 20
                ? post.title.substr(0, 20) + ` ...`
                : post.title || "Brote - Cleaning Service Elementor"}
            </h3>
            <div className="d-flex align-items-center service-card-author">
              <img
                src="assets/img/avatar/u-sm-1.png"
                className="service-card-author-img"
                alt="Author Image"
              />
              <Link to={`#`} className="service-card-author-name">
                {`${post.seller_first_name} ${post.seller_last_name}`}
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
