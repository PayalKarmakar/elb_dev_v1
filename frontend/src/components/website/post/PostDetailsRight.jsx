import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import customFetch from "../../../utils/customFetch";
import { FaStar, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const PostDetailsRight = ({ postSlug }) => {
  const postId = postSlug.postId;

  const { postDetails } = useSelector((store) => store.posts);
  const { currentUser } = useSelector((store) => store.currentUser);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  useEffect(() => {
    const fetchUser = async () => {
      if (!postDetails.user_id) return; // Exit early if user_id is not available
      try {
        const response = await customFetch.get(
          `/website/post/user/${postDetails.user_id}`
        );
        setUser(response.data.data.rows[0]); // Assuming your API response structure
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [postDetails.user_id]); // Update dependency array to only include user_id

  const handleLoginCheck = useCallback(() => {
    if (!currentUser) {
      console.log("please login");
      navigate("/sign-in"); // Use navigate for programmatic navigation
    } else {
      console.log("already login");
    }
  }, [currentUser, navigate]);

  return (
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
                Price
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
                  <div className="d-flex mb-2 justify-content-between align-items-center">
                    <h4 className="package-name fw-semibold">Price</h4>
                    <h3 className="package-price fw-bold">
                      {postDetails.price}
                    </h3>
                  </div>
                  <p className="text-dark-200 fs-6">
                    Design, Redesign and revamp 4 to 5 sections of a basic
                    responsive website
                  </p>
                  <div className="d-flex align-items-center gap-4 pt-2 pb04">
                    <p className="package-title">2 Day Delivery</p>
                    <p className="package-title">3 Revisions</p>
                  </div>
                  <ul className="py-4">
                    <li className="fs-6 d-flex align-items-center gap-3 text-dark-200">
                      <TiTick />
                      Functional website
                    </li>
                  </ul>
                  <div className="mt-3">
                    <Link
                      to="#"
                      className="w-btn-secondary-lg text-decoration-none"
                      onClick={handleLoginCheck}
                    >
                      <MdPermContactCalendar
                        size={18}
                        style={{ borderRadius: "50%" }}
                      />
                      Order Now
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="freelancer-sidebar-card p-4 rounded-4 bg-white position-relative">
          <div className="job-type-badge position-absolute d-flex flex-column gap-2">
            <p className="job-type-badge-tertiary">Top Seller</p>
          </div>
          <div className="freelancer-sidebar-card-header border-bottom d-flex flex-column justify-content-center align-items-center py-4">
            <h3 className="fw-bold freelancer-name text-dark-300 mb-2">
              {`${user?.first_name} ${user?.last_name}`}
            </h3>
            <p className="text-dark-200 mb-1">UiUx Designer</p>
            <p>
              <FaStar />
              <span className="text-dark-300"> 4.9 </span>
              <span className="text-dark-200"> (399 Reviews)</span>
            </p>
          </div>
          <div className="d-flex gap-4 justify-content-between sidebar-rate-card p-4">
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
            <Link
              to="#"
              onClick={handleLoginCheck}
              className="w-btn-secondary-lg text-decoration-none"
            >
              <MdPermContactCalendar
                size={18}
                style={{ borderRadius: "50%" }}
              />
              Contact Me
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PostDetailsRight;
