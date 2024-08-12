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
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { encParam } from "../../../utils/functions";

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

  const handleMouseEnter = () => {
    sliderRef?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    sliderRef?.current?.swiper?.autoplay?.start();
  };

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
                    <button className="service-card-wishlist-btn">
                      <FaRegHeart />
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
        <div
          className="swiper recentJob #swiper-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
