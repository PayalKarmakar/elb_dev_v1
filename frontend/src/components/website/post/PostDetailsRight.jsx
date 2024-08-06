import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import customFetch from "../../../utils/customFetch";
import { FaStar, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { nanoid } from "nanoid";

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
        <div className="freelancer-sidebar-card p-4 rounded-4 bg-white position-relative">
          <div className="job-type-badge position-absolute d-flex flex-column gap-2">
            <p className="job-type-badge-tertiary">Top Seller</p>
          </div>
          <div className="freelancer-sidebar-card-header border-bottom d-flex flex-column justify-content-center align-items-center py-4">
            <img
              src="assets/img/freelancer/avatar-1.png"
              className="freelancer-avatar rounded-circle mb-4"
              alt=""
            />
            <h3 className="fw-bold freelancer-name text-dark-300 mb-2">
              {`${user?.first_name} ${user?.last_name}`}
            </h3>
            <p className="text-dark-200 mb-1">Seller</p>
            <p>
              <FaStar />
              <span className="text-dark-300"> 4.9 </span>
              <span className="text-dark-200"> (399 Reviews)</span>
            </p>
          </div>
          <div className="d-flex gap-4 justify-content-between sidebar-rate-card p-4">
            <div>
              <p className="text-dark-300">
                <b>Location</b>
              </p>
              {postDetails?.location?.map((item) => (
                <div key={nanoid()}>
                  <p className="text-dark-200">{`${item.city}, `}</p>
                  <p className="text-dark-200">{item.state}</p>
                </div>
              ))}
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
