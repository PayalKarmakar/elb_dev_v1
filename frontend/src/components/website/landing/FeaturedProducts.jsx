import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/website/img/job/product-1.jpg"; // Default image for fallback
import "react-multi-carousel/lib/styles.css";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useSelector } from "react-redux";
import { encParam } from "../../../utils/functions";
import { FaRegHeart } from "react-icons/fa6";

const FeaturedProducts = () => {
  const { featuredPosts } = useSelector((store) => store.posts);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const renderFeaturedPosts = () => {
    // let path = "";
    return featuredPosts.map((i) => {
      const imgSrc = i.image_path
        ? `${import.meta.env.VITE_BASE_URL}/${i.image_path}`
        : product1;
      const postTitle =
        i.title.length > 15 ? i.title.substring(0, 15) + "..." : i.title;
      return (
        <SwiperSlide key={nanoid()}>
          <Link
            to={`/post/${encParam(String(i.id))}`}
            className="text-decoration-none"
          >
            <article className="swiper-slide">
              <div className="job-post bg-offWhite position-relative">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="job-post-icon">
                    <img
                      src={imgSrc}
                      className="w-100 feature-product-img-min-height"
                    />
                    <button class="service-card-wishlist-btn">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="job-post-subtitle fw-bold">{postTitle}</p>
                  <p className="job-post-subtitle fw-bold">{`₹${i.price}`}</p>
                  {/* <h3 className="job-post-title fw-semibold">
                    <span className="text-decoration-none">
                      {i.description && i.description.length > 20
                        ? i.description.substr(0, 20) + ` ...`
                        : i.description}
                    </span>
                  </h3> */}
                </div>
              </div>
            </article>
          </Link>
        </SwiperSlide>
      );
    });
  };

  return (
    <section className="py-60">
      <div className="container">
        <div className="row mb-40 justify-content-between align-items-end">
          <div className="col-md-auto">
            <h2 className="fw-bold section-title">Featured Products</h2>
            <p className="section-desc">Get some best-selling Products</p>
          </div>
          <div className="col-md-auto position-relative mt-30 mt-md-0">
            <div className="carousel-button-group">
              <div className="d-flex gap-3">
                <button
                  onClick={handlePrev}
                  className="recentJobPrev swiper-prev"
                >
                  <IoChevronBack />
                </button>
                <button
                  onClick={handleNext}
                  className="recentJobNext swiper-next"
                >
                  <IoChevronForward />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper recentJob #swiper-container">
          <Swiper
            spaceBetween={25}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 3000 }}
            ref={sliderRef}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {renderFeaturedPosts()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
