import React, { useState, useEffect, useCallback, useRef } from "react";
import customFetch from "../../../utils/customFetch";
import { nanoid } from "nanoid";
import { FaRegHeart } from "react-icons/fa";
import PostReviews from "./PostReviews";
import PostDetailsRight from "./PostDetailsRight";
import product1 from "../../../assets/website/img/job/product-1.jpg"; // Default image for fallback
import "swiper/css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const PostDetailsLeft = ({ postSlug }) => {
  let id = postSlug.postId;
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [product, setProduct] = useState(null); // State to store product data

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await customFetch.get(`/website/post/${id}`);
        setProduct(response.data.data.rows[0]); // Assuming your API response structure
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch data whenever id changes

  if (!product) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  const postSlideImages = () => {
    return (
      <Swiper
        spaceBetween={50}
        loop={true}
        ref={sliderRef}
        className="mySwiper"
      >
        {product.image.map((images) => (
          <SwiperSlide key={nanoid()}>
            <div className="swiper-slide">
              <div className="job-details-slider-img">
                <img
                  key={images.id}
                  src={`${import.meta.env.VITE_BASE_URL}/${images.image_path}`}
                  className="img-fluid w-90"
                />
              </div>
              <div className="row row-gap-4 justify-content-center row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
                {product.image.map((img, i) => {
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
                            className="recently-view-card-img w-20"
                            alt={"Post Image"}
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  // const postSlideUnderImg = () => {
  //   return (
  //     <Swiper
  //       spaceBetween={50}
  //       loop={true}
  //       ref={sliderRef}
  //       className="mySwiper"
  //     >
  //       {product.image.map((images) => {
  //         console.log(images.image_path);
  //         return (
  //           <SwiperSlide key={nanoid()}>
  //             <div className="swiper-slide">
  //               <div className="job-details-slider-img-thumb">
  //                 <img
  //                   key={images.id}
  //                   src={`${import.meta.env.VITE_BASE_URL}/${
  //                     images.image_path
  //                   }`}
  //                   className="img-fluid w-20"
  //                 />
  //               </div>
  //             </div>
  //           </SwiperSlide>
  //         );
  //       })}
  //     </Swiper>
  //   );
  // };

  return (
    <>
      <div className="bg-white service-details-content">
        <div className="swiper mySwiper2 mb-3">
          <div className="swiper-wrapper">{postSlideImages()}</div>

          <div className="swiper-nav-btn">
            <button onClick={handlePrev} className="swiper-button-prev">
              <IoChevronBack />
            </button>
            <button onClick={handleNext} className="swiper-button-next">
              <IoChevronForward />
            </button>
          </div>
        </div>

        <div className="mt-40">
          <h2 className="service-details-title fw-bold mb-4">
            I will build responsive WordPress website design and ecommerce
            website
          </h2>
          <h3 className="service-details-subtitle fw-bold mb-3">
            About this gig
          </h3>
          <p className="text-dark-200 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <h4 className="fw-semibold text-dark-300 text-18 fw-semibold mb-2">
            Services I provide:
          </h4>
          <ul className="list-group list-group-numbered border-0">
            <li className="list-group-item border-0 p-0">Website Design</li>
            <li className="list-group-item border-0 p-0">Mobile App Design</li>
            <li className="list-group-item border-0 p-0">Brochure Design</li>
            <li className="list-group-item border-0 p-0">
              Business Card Design
            </li>
            <li className="list-group-item border-0 p-0">Flyer Design</li>
          </ul>
          <p className="py-4">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <h4 className="fw-semibold text-dark-300 text-18 fw-semibold mb-4">
            App type:
          </h4>
          <p className="text-dark-200">Business, Food & drink,</p>
          <p className="text-dark-200">Graphics & design</p>
          <p className="pt-4">
            Let's connect today to discuss your site needs. Together, we'll
            create an attractive and pretty site that you'll be proud of. Your
            dream website is just a message away!
          </p>
        </div>
      </div>

      <PostReviews postSlug={{ postId: id }} />
    </>
  );
};

export default PostDetailsLeft;
