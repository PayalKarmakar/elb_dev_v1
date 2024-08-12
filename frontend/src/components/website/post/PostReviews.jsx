import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostReviews } from "../../../feature/postSlice";
import customFetch from "../../../utils/customFetch";
import { FaStar } from "react-icons/fa";

const PostReviews = ({ postSlug }) => {
  let id = postSlug.postId;
  const { postReviews } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      const response = await customFetch.get(`/website/post/reviews/${id}`);
      // console.log(response?.data?.data?.rows);
      // setProduct(response.data.data.rows[0]); // Assuming your API response structure
      dispatch(
        setPostReviews({
          reviews: response.data.data,
          stars: response.data.stars,
        })
      );
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  let itemReviewArr = [];
  let averageReview = 0;
  let totalReview = 0;

  if (postReviews.reviews?.rows?.length > 0) {
    postReviews.reviews?.rows?.map((item) => {
      itemReviewArr.push(item.reviews);
    });
    const sumWithInitial = itemReviewArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    averageReview = (sumWithInitial / itemReviewArr.length).toFixed(2); // Adjust precision as needed
    totalReview = itemReviewArr.length;
  }

  const renderReview = () => {
    postReviews.reviews?.rows?.map((item) => {
      return (
        <div className="review-card bg-white">
          <div>
            <div className="d-flex justify-content-between mb-3">
              <FaStar />
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
      );
    });
  };
  return (
    <div>
      <div className="pt-80">
        <h3 className="service-details-title text-dark-200 fw-bold mb-30">
          Reviews
        </h3>
        <div className="d-flex flex-column flex-md-row gap-4 mb-4">
          <div className="bg-white service-review-count p-4 rounded-3 d-flex flex-column justify-content-center align-items-center">
            <h4 className="service-details-subtitle fw-bold mb-1">
              {averageReview}
            </h4>
            <p className="fw-semibold text-dark-300 text-18 text-dark-200">
              {`${totalReview} Reviews`}
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
                  <span className="fs-6 text-dark-200">
                    {" "}
                    ({postReviews.stars?.rows[0].fivestar}){" "}
                  </span>
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
                  <span className="fs-6 text-dark-200">
                    {" "}
                    ({postReviews.stars?.rows[0].fourstar}){" "}
                  </span>
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
                  <span className="fs-6 text-dark-200">
                    {" "}
                    ({postReviews.stars?.rows[0].threestar}){" "}
                  </span>
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
                  <span className="fs-6 text-dark-200">
                    {" "}
                    ({postReviews.stars?.rows[0].twostar}){" "}
                  </span>
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
                  <span className="fs-6 text-dark-200">
                    {" "}
                    ({postReviews.stars?.rows[0].onestar}){" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-4">{renderReview()}</div>
      </div>

      {/* <div className="pt-60">
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
      </div> */}
    </div>
  );
};

export default PostReviews;
