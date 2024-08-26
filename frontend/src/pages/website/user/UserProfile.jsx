import { useEffect, useState } from "react";
import customFetch from "../../../utils/customFetch";

import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { store } from "../../../store";
import { Getaddress } from "../../../components";
import { toast } from "react-toastify";
import { splitErrors } from "../../../utils/showErrors";
import { FaRegTrashCan } from "react-icons/fa6";

const UserProfile = () => {
  document.title = `Profile | ${import.meta.env.VITE_APP_TITLE}`;

  const { currentUser } = store.getState().currentUser;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    mobile: "",
    profile_img: null,
    address: "",
    pincode: "",
    bio: "",
    po: "",
    dist: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const getProfileInfo = await customFetch.get(
          `/website/get-profile/${currentUser.uuid}`
        );

        if (getProfileInfo?.data?.data?.rows.length > 0) {
          const profile = getProfileInfo.data.data.rows[0];
          setFormData({
            fname: currentUser.first_name,
            lname: currentUser.last_name,
            email: currentUser.email,
            mobile: currentUser.mobile,
            profile_img: currentUser.profile_img,
            gender: profile.gender || "",
            address: profile.address || "",
            pincode: profile.pincode || "",
            bio: profile.bio || "",
            po: profile.locality || "",
            dist: profile.district || "",
            state: profile.state || "",
          });
        } else {
          setFormData({
            fname: currentUser.first_name,
            lname: currentUser.last_name,
            email: currentUser.email,
            mobile: currentUser.mobile,
            profile_img: currentUser.profile_img,
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, [currentUser.uuid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/webp",
    ];
    const file = e.target.files[0];
    if (!validMimeTypes.includes(file.type)) {
      toast.error(`Image should be JPG, JPEG, PNG, GIF, or WEBP type`);
      return;
    }
    if (file.size > 100 * 1024) {
      toast.error(`Image size cannot be more than 100 KB`);
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile_img: file,
    }));
  };

  const deleteImage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile_img: null,
    }));
  };

  const loopImg = () => {
    // Check if the image is an uploaded file or a newly selected file
    if (!formData.profile_img) return null;

    const isUploadedFile = typeof formData.profile_img === "string";
    const imageUrl = isUploadedFile
      ? `${import.meta.env.VITE_BASE_URL}/${formData.profile_img}`
      : URL.createObjectURL(formData.profile_img);

    return (
      <div className="position-relative gig-media-thumb overflow-hidden">
        <img src={imageUrl} className="img-fluid" alt="Profile" />
        <button
          type="button"
          className="gig-img-delete-btn"
          onClick={deleteImage}
        >
          <FaRegTrashCan size={13} className="text-white" />
        </button>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // If the file is present, append it to the formData
    if (formData.profile_img) {
      formData.append("profile_img", formData.profile_img);
    }

    try {
      const response = await customFetch.post(
        `/users/update-user/${currentUser.uuid}/${currentUser.id}`,
        formData
      );
      toast.success(`Profile Updated`);
      navigate(`/${currentUser.slug}/dashboard`);
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      console.log(error);
      return null;
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <form
            autoComplete="off"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column gap-4">
              <div className="profile-info-card">
                <div className="profile-info-header">
                  <h4 className="text-18 fw-semibold header-text">
                    Profile Info
                  </h4>
                </div>
                <div className="profile-info-body bg-white">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="fname" className="form-label">
                          First Name
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Name"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="lname" className="form-label">
                          Last Name
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Last Name"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-container">
                        <label htmlFor="gender" className="form-label">
                          Gender
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="gender"
                          autoComplete="off"
                          className="form-select shadow-none"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="">- Select -</option>
                          <option value="0">Male</option>
                          <option value="1">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-container">
                        <label htmlFor="email" className="form-label">
                          Email Address
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-container">
                        <label htmlFor="mobile" className="form-label">
                          Mobile
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-container">
                        <label htmlFor="address" className="form-label">
                          Address
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <Getaddress
                      pincode={formData?.pincode}
                      po={formData?.po}
                      state={formData?.state}
                      dist={formData?.dist}
                      onPincodeChange={(pincode) =>
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          pincode,
                        }))
                      }
                    />

                    <div className="col-md-4">
                      <div className="form-container">
                        <label htmlFor="country" className="form-label">
                          Country
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="country"
                          autoComplete="off"
                          name="country"
                          className="form-select shadow-none"
                          value="1"
                          readOnly
                        >
                          <option value="1">INDIA</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="bio" className="form-label">
                        Tell Us Something About Yourself
                      </label>
                      <textarea
                        id="bio"
                        className="w-editor-wrapper"
                        rows={2}
                        style={{ resize: "none" }}
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gig-info-card">
                <div className="gig-info-header">
                  <h4 className="text-18 fw-semibold text-white">
                    Drop your pic & make your profile pop!
                  </h4>
                </div>
                <div className="gig-info-body bg-white">
                  <p className="text-dark-200 mb-2">Profile Picture</p>
                  <div className="d-flex flex-wrap gap-3">
                    <div>
                      <label
                        htmlFor="profile-img"
                        className="border text-center gig-file-upload"
                      >
                        <img
                          src="assets/img/dashboard/gigs/gallery-icon.png"
                          alt="Upload"
                        />
                        <p className="text-dark-200">Max.Size 500KB</p>
                        <input
                          className="d-none"
                          type="file"
                          name="profile_img"
                          id="profile-img"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    {loopImg()}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <button type="submit" className="w-btn-secondary-lg">
                  Save Now
                  <FaLongArrowAltRight />
                </button>
                {/* <button className="text-danger text-decoration-underline">
                  Cancel
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
