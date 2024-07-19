import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import customFetch from '../../../../utils/customFetch';
import product1 from "../../../../assets/website/img/job/product-1.jpg"; // Default image for fallback


const PostView = () => {
    const { id } = useParams(); // Get id parameter from URL
    const [product, setProduct] = useState(null); // State to store product data

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await customFetch.get(`/website/post/${id}`);
                setProduct(response.data.data.rows[0]); // Assuming your API response structure
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]); // Fetch data whenever id changes

    if (!product) {
        return <div>Loading...</div>; // Show loading message until data is fetched
    }
    console.log(product);

    return (
        <>
<main>
      <section 
                className="w-breadcrumb-area"
                style={{
                    background: "url('assets/img/common/breadcrumb-bg.png') no-repeat center center/cover"
                }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div
                      className="position-relative z-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="linear"
                    >
                      <h2 className="section-title-light mb-2">Service Details</h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb w-breadcrumb">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">
                            Services Details
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
      </section>
      
      <section className="py-110 bg-offWhite">
          <div className="container">
            <div className="row">
            
              <div className="col-xl-9">
                
                <div className="bg-white service-details-content">
                  <div className="swiper mySwiper2 mb-3">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="job-details-slider-img">
                           <img
                              src={product.image_path || product1}
                              className="recently-view-card-img w-100"
                              alt={product.title || "Post Image"}
                            />
                        </div>
                      </div>
                       <div className="swiper-slide">
                        <div className="job-details-slider-img">
                          <img
                             src={product.image_path || product1}
                            className="img-fluid w-100"
                            alt={product.title || "Post Image"}
                          />
                        </div>
                        
                      </div>
                      <div className="swiper-slide">
                        <div className="job-details-slider-img">
                          <img
                             src={product.image_path || product1}
                            className="img-fluid w-100"
                            alt={product.title || "Post Image"}
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="job-details-slider-img">
                          <img
                             src={product.image_path || product1}
                            className="img-fluid w-100"
                            alt={product.title || "Post Image"}
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="job-details-slider-img">
                          <img
                             src={product.image_path || product1}
                            className="img-fluid w-100"
                            alt={product.title || "Post Image"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-nav-btn">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                  <div thumbsSlider="" className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="job-details-slider-img-thumb"></div>
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                           src={product.image_path || product1}
                          className="img-fluid w-20"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-40">
                    <h2 className="service-details-title fw-bold mb-4">
                     {product.title}
                    </h2>
                    <h3 className="service-details-subtitle fw-bold mb-3">
                      About this Product
                    </h3>
                    <p className="text-dark-200 mb-4">
                       {product.description}
                    </p>
                    <h4
                      className="fw-semibold text-dark-300 text-18 fw-semibold mb-2"
                    >
                      Interesting Features:
                    </h4>
                    <ul className="list-group list-group-numbered border-0">
                      <li className="list-group-item border-0 p-0">Website Design</li>
                      <li className="list-group-item border-0 p-0">
                        Mobile App Design
                      </li>
                      <li className="list-group-item border-0 p-0">
                        Brochure Design
                      </li>
                    </ul>
                    <p className="py-4">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in their
                      infancy. Various versions have evolved over the years,
                      sometimes by accident, sometimes on purpose (injected humour
                      and the like).
                    </p>
                    <h4
                      className="fw-semibold text-dark-300 text-18 fw-semibold mb-4"
                    >
                      Product type:
                    </h4>
                    <p className="text-dark-200">{product.category}</p>
                    <p className="pt-4">
                      Let's connect today to discuss your site needs. Together,
                      we'll create an attractive and pretty site that you'll be
                      proud of. Your dream website is just a message away!
                    </p>
                  </div>
                </div>
              
                <div className="pt-80">
                  <h3 className="service-details-title text-dark-200 fw-bold mb-30">
                    Add Extra
                  </h3>
                  <div className="d-grid gap-3">
                  
                    <div
                      className="p-3 bg-white d-flex flex-column flex-md-row align-items-md-center justify-content-between rounded-2"
                    >
                      <div>
                        <div
                          className="d-flex flex-column flex-md-row align-items-md-center gap-3"
                        >
                          <div>
                            <img
                              className="rounded-3 img-fluid"
                              src="assets/img/services/service-ex-1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="fw-semibold text-dark-300 text-18 mb-2">
                              Do data entry, web research, PDF to excel, virtual
                              assistant
                            </h4>
                            <p className="mb-3 text-dark-200">
                              Sagittis scelerisque nulla cursus in enim
                              consectetur quam
                            </p>
                            <div className="d-inline-flex gap-2 align-items-center">
                              <input
                                type="checkbox"
                                className="form-check m-0"
                                name="checkbox"
                                id="1"
                              />
                              <label for="1">2 Pages Design</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="service-details-title fw-bold">$120</h3>
                      </div>
                    </div>
                  
                    <div
                      className="p-3 bg-white d-flex flex-column flex-md-row align-items-md-center justify-content-between rounded-2"
                    >
                      <div>
                        <div
                          className="d-flex flex-column flex-md-row align-items-md-center gap-3"
                        >
                          <div>
                            <img
                              className="rounded-3"
                              src="assets/img/services/service-ex-2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="fw-semibold text-dark-300 text-18 mb-2">
                              Do data entry, web research, PDF to excel, virtual
                              assistant
                            </h4>
                            <p className="mb-3 text-dark-200">
                              Sagittis scelerisque nulla cursus in enim
                              consectetur quam
                            </p>
                            <div className="d-inline-flex gap-2 align-items-center">
                              <input
                                type="checkbox"
                                className="form-check m-0"
                                name="checkbox"
                                id="1"
                              />
                              <label for="1">2 Pages Design</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="service-details-title fw-bold">$120</h3>
                      </div>
                    </div>
                    
                    <div
                      className="p-3 bg-white d-flex flex-column flex-md-row align-items-md-center justify-content-between rounded-2"
                    >
                      <div>
                        <div
                          className="d-flex flex-column flex-md-row align-items-md-center gap-3"
                        >
                          <div>
                            <img
                              className="rounded-3"
                              src="assets/img/services/service-ex-3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="fw-semibold text-dark-300 text-18 mb-2">
                              Integrations settings — Untitled UI Design System
                            </h4>
                            <p className="mb-3 text-dark-200">
                              Sagittis scelerisque nulla cursus in enim
                              consectetur quam
                            </p>
                            <div className="d-inline-flex gap-2 align-items-center">
                              <input
                                type="checkbox"
                                className="form-check m-0"
                                name="checkbox"
                                id="1"
                              />
                              <label for="1">2 Pages Design</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="service-details-title fw-bold">$120</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="service-details-title text-dark-200 fw-bold mb-30">
                  Reviews
                </h3>
                <div className="d-flex flex-column flex-md-row gap-4 mb-4">
                  <div
                    className="bg-white service-review-count p-4 rounded-3 d-flex flex-column justify-content-center align-items-center"
                  >
                    <h4 className="service-details-subtitle fw-bold mb-1">4.96</h4>
                    <p className="fw-semibold text-dark-300 text-18 text-dark-200">
                      141 Reviews
                    </p>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-grid gap-3">
                      <div className="d-flex gap-4 align-items-center">
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-300">5 Star</span>
                        </div>
                        <div className="position-relative review-progress-wrapper">
                          <div
                            className="review-progress-bar"
                            style={{width: `40%` }}
                          ></div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-200"> (70) </span>
                        </div>
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-300">4 Star</span>
                        </div>
                        <div className="position-relative review-progress-wrapper">
                          <div
                            className="review-progress-bar"
                            style={{width: `40%` }}
                          ></div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-200"> (51) </span>
                        </div>
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-300">3 Star</span>
                        </div>
                        <div className="position-relative review-progress-wrapper">
                          <div
                            className="review-progress-bar"
                            style={{width: `40%` }}
                          ></div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-200"> (03) </span>
                        </div>
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-300">2 Star</span>
                        </div>
                        <div className="position-relative review-progress-wrapper">
                          <div
                            className="review-progress-bar"
                            style={{width: `40%` }}
                          ></div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-200"> (15) </span>
                        </div>
                      </div>
                      <div className="d-flex gap-4 align-items-center">
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-300">1 Star</span>
                        </div>
                        <div className="position-relative review-progress-wrapper">
                          <div
                            className="review-progress-bar"
                            style={{width: `40%` }}
                          ></div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="fs-6 text-dark-200"> (30) </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  
                  <div className="review-card bg-white">
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="144"
                          height="20"
                          viewBox="0 0 144 20"
                          fill="none"
                        >
                          <path
                            d="M10.0311 0C9.60363 0 9.17613 0.2305 8.95488 0.695408L6.50617 5.86799L1.0275 6.69623C0.0450172 6.84469 -0.348727 8.10658 0.363762 8.82933L4.32745 12.8533L3.38997 18.5377C3.22122 19.5574 4.25245 20.3348 5.12994 19.8543L10.0311 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M9.96888 0C10.3964 0 10.8239 0.2305 11.0451 0.695408L13.4938 5.86799L18.9725 6.69623C19.955 6.84469 20.3487 8.10658 19.6362 8.82933L15.6725 12.8533L16.61 18.5377C16.7788 19.5574 15.7475 20.3348 14.8701 19.8543L9.96888 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.9432 0C40.5157 0 40.0882 0.2305 39.867 0.695408L37.4183 5.86799L31.9396 6.69623C30.9571 6.84469 30.5634 8.10658 31.2759 8.82933L35.2396 12.8533L34.3021 18.5377C34.1333 19.5574 35.1646 20.3348 36.0421 19.8543L40.9432 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.881 0C41.3085 0 41.736 0.2305 41.9572 0.695408L44.4059 5.86799L49.8846 6.69623C50.8671 6.84469 51.2608 8.10658 50.5483 8.82933L46.5847 12.8533L47.5221 18.5377C47.6909 19.5574 46.6597 20.3348 45.7822 19.8543L40.881 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.8514 0C71.4239 0 70.9964 0.2305 70.7752 0.695408L68.3265 5.86799L62.8478 6.69623C61.8653 6.84469 61.4716 8.10658 62.1841 8.82933L66.1478 12.8533L65.2103 18.5377C65.0415 19.5574 66.0728 20.3348 66.9503 19.8543L71.8514 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.7892 0C72.2167 0 72.6442 0.2305 72.8654 0.695408L75.3141 5.86799L80.7928 6.69623C81.7753 6.84469 82.169 8.10658 81.4566 8.82933L77.4929 12.8533L78.4303 18.5377C78.5991 19.5574 77.5679 20.3348 76.6904 19.8543L71.7892 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.76 0C102.332 0 101.905 0.2305 101.683 0.695408L99.2347 5.86799L93.756 6.69623C92.7735 6.84469 92.3798 8.10658 93.0923 8.82933L97.056 12.8533L96.1185 18.5377C95.9497 19.5574 96.981 20.3348 97.8585 19.8543L102.76 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.697 0C103.125 0 103.552 0.2305 103.774 0.695408L106.222 5.86799L111.701 6.69623C112.683 6.84469 113.077 8.10658 112.365 8.82933L108.401 12.8533L109.339 18.5377C109.507 19.5574 108.476 20.3348 107.599 19.8543L102.697 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.668 0C133.24 0 132.813 0.2305 132.592 0.695408L130.143 5.86799L124.664 6.69623C123.682 6.84469 123.288 8.10658 124 8.82933L127.964 12.8533L127.027 18.5377C126.858 19.5574 127.889 20.3348 128.767 19.8543L133.668 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.606 0C134.033 0 134.461 0.2305 134.682 0.695408L137.131 5.86799L142.609 6.69623C143.592 6.84469 143.985 8.10658 143.273 8.82933L139.309 12.8533L140.247 18.5377C140.415 19.5574 139.384 20.3348 138.507 19.8543L133.606 17.1742V0Z"
                            fill="#22BE0D"
                          />
                        </svg>
                        <span className="text-dark-200 fs-6">2 days ago</span>
                      </div>
                      <p className="text-dark-200 fs-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the our as majoritys have su alteration
                        in some form, by injected humour, or randomised words
                        which don't.
                      </p>
                      <div
                        className="d-flex align-items-center buyer-info pb-30 justify-content-between mt-4"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div>
                            <img
                              src="assets/img/services/av-1.png"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-18 text-dark-300 fw-semibold">
                              Siddik
                            </h4>
                            <p className="text-dark-200 fs-6">United Kingdom</p>
                          </div>
                        </div>
                        <div>
                          <button className="reply-btn">Reply</button>
                        </div>
                      </div>
                    </div>
                    
                    <div
                      className="seller-reply ps-5 d-flex align-items-center gap-3 pt-30"
                    >
                      <img
                        src="assets/img/services/s-av-1.png"
                        className="rounded-circle"
                        alt=""
                      />
                      <p className="text-dark-200 fs-6">
                        Thank you so much for valuable Opinion
                      </p>
                    </div>
                  </div>
                
                  <div className="review-card bg-white">
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="144"
                          height="20"
                          viewBox="0 0 144 20"
                          fill="none"
                        >
                          <path
                            d="M10.0311 0C9.60363 0 9.17613 0.2305 8.95488 0.695408L6.50617 5.86799L1.0275 6.69623C0.0450172 6.84469 -0.348727 8.10658 0.363762 8.82933L4.32745 12.8533L3.38997 18.5377C3.22122 19.5574 4.25245 20.3348 5.12994 19.8543L10.0311 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M9.96888 0C10.3964 0 10.8239 0.2305 11.0451 0.695408L13.4938 5.86799L18.9725 6.69623C19.955 6.84469 20.3487 8.10658 19.6362 8.82933L15.6725 12.8533L16.61 18.5377C16.7788 19.5574 15.7475 20.3348 14.8701 19.8543L9.96888 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.9432 0C40.5157 0 40.0882 0.2305 39.867 0.695408L37.4183 5.86799L31.9396 6.69623C30.9571 6.84469 30.5634 8.10658 31.2759 8.82933L35.2396 12.8533L34.3021 18.5377C34.1333 19.5574 35.1646 20.3348 36.0421 19.8543L40.9432 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.881 0C41.3085 0 41.736 0.2305 41.9572 0.695408L44.4059 5.86799L49.8846 6.69623C50.8671 6.84469 51.2608 8.10658 50.5483 8.82933L46.5847 12.8533L47.5221 18.5377C47.6909 19.5574 46.6597 20.3348 45.7822 19.8543L40.881 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.8514 0C71.4239 0 70.9964 0.2305 70.7752 0.695408L68.3265 5.86799L62.8478 6.69623C61.8653 6.84469 61.4716 8.10658 62.1841 8.82933L66.1478 12.8533L65.2103 18.5377C65.0415 19.5574 66.0728 20.3348 66.9503 19.8543L71.8514 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.7892 0C72.2167 0 72.6442 0.2305 72.8654 0.695408L75.3141 5.86799L80.7928 6.69623C81.7753 6.84469 82.169 8.10658 81.4566 8.82933L77.4929 12.8533L78.4303 18.5377C78.5991 19.5574 77.5679 20.3348 76.6904 19.8543L71.7892 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.76 0C102.332 0 101.905 0.2305 101.683 0.695408L99.2347 5.86799L93.756 6.69623C92.7735 6.84469 92.3798 8.10658 93.0923 8.82933L97.056 12.8533L96.1185 18.5377C95.9497 19.5574 96.981 20.3348 97.8585 19.8543L102.76 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.697 0C103.125 0 103.552 0.2305 103.774 0.695408L106.222 5.86799L111.701 6.69623C112.683 6.84469 113.077 8.10658 112.365 8.82933L108.401 12.8533L109.339 18.5377C109.507 19.5574 108.476 20.3348 107.599 19.8543L102.697 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.668 0C133.24 0 132.813 0.2305 132.592 0.695408L130.143 5.86799L124.664 6.69623C123.682 6.84469 123.288 8.10658 124 8.82933L127.964 12.8533L127.027 18.5377C126.858 19.5574 127.889 20.3348 128.767 19.8543L133.668 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.606 0C134.033 0 134.461 0.2305 134.682 0.695408L137.131 5.86799L142.609 6.69623C143.592 6.84469 143.985 8.10658 143.273 8.82933L139.309 12.8533L140.247 18.5377C140.415 19.5574 139.384 20.3348 138.507 19.8543L133.606 17.1742V0Z"
                            fill="#22BE0D"
                          />
                        </svg>
                        <span className="text-dark-200 fs-6">2 days ago</span>
                      </div>
                      <p className="text-dark-200 fs-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the our as majoritys have su alteration
                        in some form, by injected humour, or randomised words
                        which don't.
                      </p>
                      <div
                        className="d-flex align-items-center buyer-info justify-content-between mt-4"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div>
                            <img
                              src="assets/img/services/av-2.png"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-18 text-dark-300 fw-semibold">
                              Samuel Jhon
                            </h4>
                            <p className="text-dark-200 fs-6">Tunisia</p>
                          </div>
                        </div>
                        <div>
                          <button className="reply-btn">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="review-card bg-white">
                    <div>
                      <div className="d-flex justify-content-between mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="144"
                          height="20"
                          viewBox="0 0 144 20"
                          fill="none"
                        >
                          <path
                            d="M10.0311 0C9.60363 0 9.17613 0.2305 8.95488 0.695408L6.50617 5.86799L1.0275 6.69623C0.0450172 6.84469 -0.348727 8.10658 0.363762 8.82933L4.32745 12.8533L3.38997 18.5377C3.22122 19.5574 4.25245 20.3348 5.12994 19.8543L10.0311 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M9.96888 0C10.3964 0 10.8239 0.2305 11.0451 0.695408L13.4938 5.86799L18.9725 6.69623C19.955 6.84469 20.3487 8.10658 19.6362 8.82933L15.6725 12.8533L16.61 18.5377C16.7788 19.5574 15.7475 20.3348 14.8701 19.8543L9.96888 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.9432 0C40.5157 0 40.0882 0.2305 39.867 0.695408L37.4183 5.86799L31.9396 6.69623C30.9571 6.84469 30.5634 8.10658 31.2759 8.82933L35.2396 12.8533L34.3021 18.5377C34.1333 19.5574 35.1646 20.3348 36.0421 19.8543L40.9432 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M40.881 0C41.3085 0 41.736 0.2305 41.9572 0.695408L44.4059 5.86799L49.8846 6.69623C50.8671 6.84469 51.2608 8.10658 50.5483 8.82933L46.5847 12.8533L47.5221 18.5377C47.6909 19.5574 46.6597 20.3348 45.7822 19.8543L40.881 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.8514 0C71.4239 0 70.9964 0.2305 70.7752 0.695408L68.3265 5.86799L62.8478 6.69623C61.8653 6.84469 61.4716 8.10658 62.1841 8.82933L66.1478 12.8533L65.2103 18.5377C65.0415 19.5574 66.0728 20.3348 66.9503 19.8543L71.8514 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M71.7892 0C72.2167 0 72.6442 0.2305 72.8654 0.695408L75.3141 5.86799L80.7928 6.69623C81.7753 6.84469 82.169 8.10658 81.4566 8.82933L77.4929 12.8533L78.4303 18.5377C78.5991 19.5574 77.5679 20.3348 76.6904 19.8543L71.7892 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.76 0C102.332 0 101.905 0.2305 101.683 0.695408L99.2347 5.86799L93.756 6.69623C92.7735 6.84469 92.3798 8.10658 93.0923 8.82933L97.056 12.8533L96.1185 18.5377C95.9497 19.5574 96.981 20.3348 97.8585 19.8543L102.76 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M102.697 0C103.125 0 103.552 0.2305 103.774 0.695408L106.222 5.86799L111.701 6.69623C112.683 6.84469 113.077 8.10658 112.365 8.82933L108.401 12.8533L109.339 18.5377C109.507 19.5574 108.476 20.3348 107.599 19.8543L102.697 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.668 0C133.24 0 132.813 0.2305 132.592 0.695408L130.143 5.86799L124.664 6.69623C123.682 6.84469 123.288 8.10658 124 8.82933L127.964 12.8533L127.027 18.5377C126.858 19.5574 127.889 20.3348 128.767 19.8543L133.668 17.1742V0Z"
                            fill="#22BE0D"
                          />
                          <path
                            d="M133.606 0C134.033 0 134.461 0.2305 134.682 0.695408L137.131 5.86799L142.609 6.69623C143.592 6.84469 143.985 8.10658 143.273 8.82933L139.309 12.8533L140.247 18.5377C140.415 19.5574 139.384 20.3348 138.507 19.8543L133.606 17.1742V0Z"
                            fill="#22BE0D"
                          />
                        </svg>
                        <span className="text-dark-200 fs-6">2 days ago</span>
                      </div>
                      <p className="text-dark-200 fs-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the our as majoritys have su alteration
                        in some form, by injected humour, or randomised words
                        which don't.
                      </p>
                      <div
                        className="d-flex align-items-center buyer-info justify-content-between mt-4"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div>
                            <img
                              src="assets/img/services/av-3.png"
                              className="rounded-circle"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="text-18 text-dark-300 fw-semibold">
                              Benja Barham
                            </h4>
                            <p className="text-dark-200 fs-6">Netherlands</p>
                          </div>
                        </div>
                        <div>
                          <button className="reply-btn">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="pt-60">
                    <a href="#" className="w-btn-secondary-lg d-inline">
                      See More Review
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9L13 5M13 5L9 1M13 5L1 5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                </div>
              </div>
            
              <div className="col-xl-3 mt-30 mt-xl-0">
                <aside className="d-flex flex-column gap-4">
                  <div>
                    <nav>
                      <div
                        className="nav package-tabs d-flex gap-4 justify-content-between align-items-center"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="package-tab-btn active"
                          id="nav-basic-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-basic"
                          type="button"
                          role="tab"
                          aria-controls="nav-basic"
                          aria-selected="true"
                        >
                          Basic
                        </button>
                        <button
                          className="package-tab-btn"
                          id="nav-standard-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-standard"
                          type="button"
                          role="tab"
                          aria-controls="nav-standard"
                          aria-selected="false"
                        >
                          Standard
                        </button>
                        <button
                          className="package-tab-btn"
                          id="nav-premium-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-premium"
                          type="button"
                          role="tab"
                          aria-controls="nav-premium"
                          aria-selected="false"
                        >
                          Premium
                        </button>
                      </div>
                    </nav>
                    <div className="package-tab-content bg-white">
                      <div className="tab-content" id="nav-tabContent">
                      
                        <div
                          className="tab-pane fade show active"
                          id="nav-basic"
                          role="tabpanel"
                          aria-labelledby="nav-basic-tab"
                          tabIndex="0"
                        >
                          <div>
                            <div
                              className="d-flex mb-2 justify-content-between align-items-center"
                            >
                              <h4 className="package-name fw-semibold">Basic</h4>
                              <h3 className="package-price fw-bold">{`₹${product.price}`}</h3>
                            </div>
                            <p className="text-dark-200 fs-6">
                              Design, Redesign and revamp 4 to 5 sections of a
                              basic responsive website
                            </p>
                            <div
                              className="d-flex align-items-center gap-4 pt-2 pb04"
                            >
                              <p className="package-title">
                              
                                2 Day Delivery
                              </p>
                              <p className="package-title">
                              
                                3 Revisions
                              </p>
                            </div>
                            <ul className="py-4">
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Functional website
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Pages 5
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Responsive design
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Source file
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Content upload
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Speed optimization
                              </li>
                            </ul>
                            <div className="mt-3">
                              <a
                                href="#"
                                className="w-btn-secondary-xl"
                                data-bs-toggle="modal"
                                data-bs-target="#buyModal"
                              >
                                Order Now
                                <svg
                                  width="14"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        <div
                          className="tab-pane fade"
                          id="nav-standard"
                          role="tabpanel"
                          aria-labelledby="nav-standard-tab"
                          tabIndex="0"
                        >
                          <div>
                            <div
                              className="d-flex mb-2 justify-content-between align-items-center"
                            >
                              <h4 className="package-name fw-semibold">Standard</h4>
                              <h3 className="package-price fw-bold">$700</h3>
                            </div>
                            <p className="text-dark-200 fs-6">
                              Design, Redesign and revamp 4 to 5 sections of a
                              basic responsive website
                            </p>
                            <div
                              className="d-flex align-items-center gap-4 pt-2 pb04"
                            >
                              <p className="package-title">
                                
                                2 Day Delivery
                              </p>
                              <p className="package-title">
                              
                                3 Revisions
                              </p>
                            </div>
                            <ul className="py-4">
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Functional website
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Pages 5
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Responsive design
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Source file
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Content upload
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Speed optimization
                              </li>
                            </ul>
                            <div className="mt-3">
                              <a href="#" className="w-btn-secondary-xl">
                                Order Now
                                <svg
                                  width="14"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      
                        <div
                          className="tab-pane fade"
                          id="nav-premium"
                          role="tabpanel"
                          aria-labelledby="nav-premium-tab"
                          tabIndex="0"
                        >
                          <div>
                            <div
                              className="d-flex mb-2 justify-content-between align-items-center"
                            >
                              <h4 className="package-name fw-semibold">Premium</h4>
                              <h3 className="package-price fw-bold">$900</h3>
                            </div>
                            <p className="text-dark-200 fs-6">
                              Design, Redesign and revamp 4 to 5 sections of a
                              basic responsive website
                            </p>
                            <div
                              className="d-flex align-items-center gap-4 pt-2 pb04"
                            >
                              <p className="package-title">
                                
                                2 Day Delivery
                              </p>
                              <p className="package-title">
                              
                                3 Revisions
                              </p>
                            </div>
                            <ul className="py-4">
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Functional website
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Pages 5
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Responsive design
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Source file
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Content upload
                              </li>
                              <li
                                className="fs-6 d-flex align-items-center gap-3 text-dark-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    rx="7"
                                    fill="#EDEBE7"
                                  />
                                  <path
                                    d="M10.9989 4.56984C11.0104 4.74646 10.9288 4.88498 10.8005 5.00444C9.44356 6.26706 8.08607 7.52917 6.72804 8.79076C6.43121 9.06522 6.10773 9.07037 5.8109 8.80209C5.26037 8.30466 4.71781 7.79934 4.18322 7.28612C4.12574 7.2337 4.07992 7.17091 4.04845 7.10145C4.01699 7.03199 4.00052 6.95727 4.00001 6.88169C3.99951 6.80612 4.01497 6.7312 4.0455 6.66138C4.07603 6.59155 4.12101 6.52821 4.17778 6.4751C4.40938 6.25368 4.7758 6.24441 5.03403 6.4751C5.33956 6.74338 5.63204 7.02659 5.92724 7.30363C6.25941 7.61259 6.25887 7.61259 6.60137 7.2959C7.68178 6.29109 8.76237 5.28749 9.84314 4.28508C9.92373 4.20401 10.0151 4.13322 10.115 4.07447C10.2055 4.02511 10.3083 3.99942 10.4127 4.00001C10.5172 4.0006 10.6196 4.02747 10.7095 4.07785C10.7995 4.12824 10.8736 4.20034 10.9245 4.28678C10.9753 4.37322 11.001 4.47091 10.9989 4.56984Z"
                                    fill="#06131C"
                                  /></svg
                                >Speed optimization
                              </li>
                            </ul>
                            <div className="mt-3">
                              <a href="#" className="w-btn-secondary-xl">
                                Order Now
                                <svg
                                  width="14"
                                  height="10"
                                  viewBox="0 0 14 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div
                    className="freelancer-sidebar-card p-4 rounded-4 bg-white position-relative"
                  >
                    <div
                      className="job-type-badge position-absolute d-flex flex-column gap-2"
                    >
                      <p className="job-type-badge-tertiary">Top Seller</p>
                      <p className="job-type-badge-secondary">$90/hr</p>
                    </div>
                    <div
                      className="freelancer-sidebar-card-header border-bottom d-flex flex-column justify-content-center align-items-center py-4"
                    >
                      <img
                        src="assets/img/freelancer/avatar-1.png"
                        className="freelancer-avatar rounded-circle mb-4"
                        alt=""
                      />
                      <h3 className="fw-bold freelancer-name text-dark-300 mb-2">
                        Sufankho Jhon
                      </h3>
                      <p className="text-dark-200 mb-1">UiUx Designer</p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                        >
                          <path
                            d="M11.1141 4.15628C11.0407 3.92385 10.8406 3.75929 10.6048 3.73731L7.38803 3.43649L6.11676 0.370622C6.0229 0.145376 5.80934 0 5.57163 0C5.33392 0 5.12027 0.145376 5.02701 0.370622L3.75574 3.43649L0.538508 3.73731C0.302669 3.75973 0.102963 3.92429 0.0291678 4.15628C-0.0442024 4.3887 0.0235566 4.64364 0.201923 4.80478L2.63351 7.0011L1.91656 10.2539C1.8641 10.493 1.95422 10.7403 2.14687 10.8838C2.25042 10.9613 2.37208 11 2.49417 11C2.59908 11 2.70407 10.9713 2.79785 10.9135L5.57163 9.20504L8.3449 10.9135C8.54835 11.0387 8.80417 11.0272 8.99639 10.8838C9.18904 10.7403 9.27916 10.493 9.22671 10.2539L8.50975 7.0011L10.9413 4.80478C11.1196 4.64364 11.1875 4.38923 11.1141 4.15628Z"
                            fill="#06131C"
                          />
                        </svg>
                        <span className="text-dark-300">4.9 </span>
                        <span className="text-dark-200"> (399 Reviews)</span>
                      </p>
                    </div>
                    <div
                      className="d-flex gap-4 justify-content-between sidebar-rate-card p-4"
                    >
                      <div>
                        <p className="text-dark-300">Location</p>
                        <p className="text-dark-200">Dhaka</p>
                      </div>
                      <div>
                        <p className="text-dark-300">Rate</p>
                        <p className="text-dark-200">$90/hr</p>
                      </div>
                      <div>
                        <p className="text-dark-300">Jobs</p>
                        <p className="text-dark-200">560</p>
                      </div>
                    </div>
                    <div className="d-grid">
                      <a href="contact.html" className="w-btn-black-lg w-100">
                        Contact Me
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 9L13 5M13 5L9 1M13 5L1 5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
      </section>
        
      
      
    </main>
    </>
);
};

export default PostView;
