import React, { useState, useEffect, useCallback, useRef } from "react";
import customFetch from "../../../utils/customFetch";
import { nanoid } from "nanoid";
import { FaRegHeart } from "react-icons/fa";
import PostReviews from "./PostReviews";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setPostsDetails } from "../../../feature/postSlice";

const PostDetailsLeft = ({ postSlug }) => {
  const id = postSlug.postId;
  const { postDetails } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await customFetch.get(`/website/post/${id}`);

        dispatch(setPostsDetails(response?.data?.data?.rows[0]));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="bg-white service-details-content">
        <div className="row row-gap-4 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
          {selectedImage !== null ? (
            <div className="full-image-container">
              <img
                src={selectedImage}
                alt="Full Size Image"
                className="full-image"
              />
            </div>
          ) : (
            postDetails?.image?.map((img, i) => {
              if (img.is_cover) {
                return (
                  <article key={i}>
                    <div
                      className="service-card bg-white"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="linear"
                    >
                      <div className="position-relative">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}/${
                            img.image_path
                          }`}
                          className="recently-view-card-img w-100"
                          alt={"Post Image"}
                        />
                      </div>
                      <div className="position-relative">
                        <button className="service-card-wishlist-btn">
                          <FaRegHeart />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }
            })
          )}
        </div>

        <section className="py-110">
          <div className="container">
            <div className="row row-cols-xl-3">
              <div className="swiper-nav-btn mt-6">
                <button onClick={handlePrev} className="swiper-button-prev">
                  <IoChevronBack />
                </button>
              </div>

              <Swiper
                spaceBetween={8}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 1000 }}
                ref={sliderRef}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {postDetails?.image?.map((img, i) => (
                  <SwiperSlide key={nanoid()}>
                    <article key={i}>
                      <div
                        className="service-card bg-white"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                      >
                        <div className="position-relative">
                          <img
                            src={`${import.meta.env.VITE_BASE_URL}/${
                              img.image_path
                            }`}
                            onClick={() =>
                              handleClick(
                                `${import.meta.env.VITE_BASE_URL}/${
                                  img.image_path
                                }`
                              )
                            }
                            width={200}
                            height={150}
                            className="recently-view-card-img w-10"
                            alt={"Post Image"}
                          />
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-nav-btn mt-6">
                <button onClick={handleNext} className="swiper-button-next">
                  <IoChevronForward />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-40">
          <h2 className="service-details-title fw-bold mb-4">
            {postDetails.title}
          </h2>
          <h3 className="service-details-subtitle fw-bold mb-3">
            About this Product
          </h3>
          <p className="text-dark-200 mb-4">{postDetails.description}</p>

          <p className="py-4"></p>
          <div className="row">
            <div className="col-md-6">
              <h3 className="service-details-subtitle fw-bold mb-3">Price</h3>
              <p className="text-dark-200 mb-4">{postDetails.price}</p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-semibold text-dark-300 text-18 fw-semibold mb-4">
                Product Details :
              </h4>
              {postDetails?.sub_cat?.map((item) => (
                <div key={nanoid()}>
                  <p className="text-dark-200">{`${item.category}, `}</p>
                </div>
              ))}
              <p className="text-dark-200">{postDetails.category}</p>
            </div>
          </div>
        </div>
      </div>

      <PostReviews postSlug={{ postId: id }} />
    </>
  );
};

export default PostDetailsLeft;
