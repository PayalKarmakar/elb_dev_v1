import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostReviews } from "../../../feature/postSlice";
import customFetch from "../../../utils/customFetch";

const PostReviews = ({ postSlug }) => {
  let id = postSlug.postId;
  const { postReviews } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      const response = await customFetch.get(`/website/post/reviews/${id}`);
      console.log(response);
      // setProduct(response.data.data.rows[0]); // Assuming your API response structure
      dispatch(setPostReviews(response?.data?.data?.rows[0]));
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  console.log(postReviews);
  return (
    <div>
      <div className="pt-80">
        <h3 className="service-details-title text-dark-200 fw-bold mb-30">
          Reviews
        </h3>
        <div className="d-flex flex-column flex-md-row gap-4 mb-4">
          <div className="bg-white service-review-count p-4 rounded-3 d-flex flex-column justify-content-center align-items-center">
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
                    style={{ width: "40%" }}
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
                    style={{ width: "40%" }}
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
                    style={{ width: "40%" }}
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
                    style={{ width: "40%" }}
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
                    style={{ width: "40%" }}
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
                There are many variations of passages of Lorem Ipsum available,
                but the our as majoritys have su alteration in some form, by
                injected humour, or randomised words which don't.
              </p>
              <div className="d-flex align-items-center buyer-info pb-30 justify-content-between mt-4">
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

            <div className="seller-reply ps-5 d-flex align-items-center gap-3 pt-30">
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
                There are many variations of passages of Lorem Ipsum available,
                but the our as majoritys have su alteration in some form, by
                injected humour, or randomised words which don't.
              </p>
              <div className="d-flex align-items-center buyer-info justify-content-between mt-4">
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
                There are many variations of passages of Lorem Ipsum available,
                but the our as majoritys have su alteration in some form, by
                injected humour, or randomised words which don't.
              </p>
              <div className="d-flex align-items-center buyer-info justify-content-between mt-4">
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
              th="1.5"
              ap="round"
              oin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PostReviews;
