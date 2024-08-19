import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import customFetch from "../../../utils/customFetch";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { nanoid } from "nanoid";

const PostDetailsRight = ({ postSlug }) => {
  const postId = postSlug.postId;

  const { postDetails } = useSelector((store) => store.posts);
  const { currentUser } = useSelector((store) => store.currentUser);
  const [user, setUser] = useState(null);
  const [emailSent, setEmailSent] = useState(false); // State to track if the email was sent
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!postDetails.user_id) return;
      try {
        const response = await customFetch.get(
          `/website/post/user/${postDetails.user_id}`
        );
        setUser(response.data.data.rows[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [postDetails.user_id]);
  console.log(currentUser);
  const handleLoginCheck = useCallback(async () => {
    if (!currentUser) {
      console.log("please login");
      navigate("/sign-in");
    } else {
      setIsLoading(true); // Start loading when button is clicked

      // Prepare email data
      const emailData = {
        buyer_to: currentUser.email,
        seller_to: user.email,
        subject: "Contact Request",
        seller_text: `Hello ${user?.first_name},\n\n${currentUser.first_name} ${currentUser.last_name} is interested in your services.Here contact details of ${currentUser.first_name} \n\n Mobile - ${currentUser.mobile}\n\n Email - ${currentUser.email}.\n\n Please get in touch!`,
        buyer_text: `Hello ${currentUser.first_name},\n\n you show interested in ${user.first_name} ${user.last_name}'s post. Here contact details of ${user.first_name} \n\n Mobile - ${user.mobile}\n\n Email - ${user.email}`,
        postId: postId,
        buyer_uid: currentUser.id,
        seller_uid: user.id,
      };

      try {
        // Send the email
        const response = await customFetch.post(
          "/website/send-email",
          emailData
        );
        if (response.status === 200) {
          console.log("Email sent successfully!");
          setEmailSent(true); // Update state when the email is successfully sent
        } else {
          console.error("Failed to send email.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false); // Stop loading after the operation is complete
      }
    }
  }, [currentUser, navigate, user, postId]);

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
            {emailSent ? (
              <>
                <p className="text-dark-200">{`${user?.mobile}`}</p>
                <p className="text-dark-200">{`${user?.email}`}</p>
              </>
            ) : (
              <Link
                to="#"
                onClick={handleLoginCheck}
                className="w-btn-secondary-lg text-decoration-none"
              >
                {isLoading ? (
                  <span>Loading...</span> // Display loading text or spinner
                ) : (
                  <>
                    <MdPermContactCalendar
                      size={18}
                      style={{ borderRadius: "50%" }}
                    />
                    Contact Me
                  </>
                )}
              </Link>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PostDetailsRight;
