import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/website/img/job/product-1.jpg"; // Default image for fallback
import "react-multi-carousel/lib/styles.css";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setFeaturedPosts } from "../../../feature/postSlice";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";

const FeaturedProducts = () => {
  const { featuredPosts } = useSelector((store) => store.posts);
  const sliderRef = useRef(null);

  // const dispatch = useDispatch();
  // const fetchData = async () => {
  //   try {
  //     const response = await customFetch.get(`/website/featured-posts`);
  //     dispatch(setFeaturedPosts(response?.data?.data?.rows));
  //   } catch (error) {
  //     splitErrors(error?.response?.data?.msg);
  //     return error;
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const renderFeaturedPosts = () => {
    return featuredPosts.map((i) => {
      let imgSrc = i.image_path ? i.image_path : product1;

      return (
        <SwiperSlide key={nanoid()}>
          <Link to="#" className="text-decoration-none">
            <article className="swiper-slide">
              <div className="job-post bg-offWhite position-relative">
                <div className="job-type-badge position-absolute d-flex flex-column gap-2">
                  <p className="job-type-badge-primary">{i.title}</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="job-post-icon">
                    <img src={imgSrc} alt={i.title} />
                  </div>
                  <p className="job-post-subtitle fw-bold">{i.title}</p>
                  <p className="job-post-subtitle fw-bold">{`₹${i.price}`}</p>
                  <h3 className="job-post-title fw-semibold">
                    <span className="text-decoration-none">
                      {i.description}
                    </span>
                  </h3>
                </div>
              </div>
            </article>
          </Link>
        </SwiperSlide>
      );
    });
  };

  return (
    <section className="py-110">
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
            spaceBetween={50}
            slidesPerView={4}
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
