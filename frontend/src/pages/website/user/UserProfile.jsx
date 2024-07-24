import React, { useEffect } from "react";
import customFetch from "../../../utils/customFetch";
import { useDispatch, useSelector } from "react-redux";
import { setAllStates } from "../../../feature/masters/locationSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { allStates } = useSelector((store) => store.locations);

  const fetchState = async () => {
    const getStates = await customFetch.get(`/website/get-allstates`);
    dispatch(setAllStates(getStates?.data?.data?.rows));
  };
  useEffect(() => {
    fetchState();
  }, []);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <form>
            <div className="d-flex flex-column gap-4">
              {/* <!-- Profile Info --> */}
              <div className="profile-info-card">
                {/* <!-- Header --> */}
                <div className="profile-info-header">
                  <h4 className="text-18 fw-semibold header-text">
                    Profile Info
                  </h4>
                </div>
                <div className="profile-info-body bg-white">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="fname" className="form-label">
                          First Name
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Mansa"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="lname" className="form-label">
                          Last Name
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Musa"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-container">
                        <label for="email" className="form-label">
                          Email Address
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label for="description" className="form-label">
                        Description
                        <span className="text-lime-300">*</span>
                      </label>
                      <div className="w-editor-wrapper">
                        <div id="toolbar"></div>
                        <div id="editor"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="category" className="form-label">
                          Town/City
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="city"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          <option value="0">New York</option>
                          <option value="1">Berlin</option>
                          <option value="2">Tokyo</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="state" className="form-label">
                          State
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="state"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          <option value="0">Los Angels</option>
                          <option value="1">San Fransisco</option>
                          <option value="2">Atoa</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-container">
                        <label for="country" className="form-label">
                          Country
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="country"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          {/* <option value="0">USA</option> */}
                          <option value="1" selected>
                            INDIA
                          </option>
                          {/* <option value="2">BD</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="designation" className="form-label">
                          Your Designation
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          id="designation"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="rate" className="form-label">
                          Hourly Rate
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          id="rate"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="gender" className="form-label">
                          Gender
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="gender"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          <option value="0">Male</option>
                          <option value="1">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="language" className="form-label">
                          Language
                        </label>
                        <input
                          id="language"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Education Info --> */}
              <div className="profile-info-card">
                {/* <!-- Header --> */}
                <div className="profile-info-header">
                  <h4 className="text-18 fw-semibold header-text">
                    Education Info
                  </h4>
                </div>
                <div className="profile-info-body bg-white">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-container">
                        <label for="institute" className="form-label">
                          Institution
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          id="institute"
                          className="form-control shadow-none"
                          placeholder="University of Oxford"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-container">
                        <label for="degree" className="form-label">
                          Degree
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          id="degree"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="BSC in Engineering"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-container">
                        <label for="major" className="form-label">
                          Major
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Computer Science"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="startdate" className="form-label">
                          Start Date
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          id="startdate"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="17.02.2020"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label for="startdate" className="form-label">
                          End Date
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          id="enddate"
                          type="text"
                          className="form-control shadow-none"
                          placeholder="17.02.2024"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Profile Info --> */}
              <div className="profile-info-card">
                {/* <!-- Header --> */}
                <div className="profile-info-header">
                  <h4 className="text-18 fw-semibold header-text">Skills</h4>
                </div>
                <div className="profile-info-body bg-white">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-container">
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Type Here"
                        />
                      </div>
                      <div className="skill-cloud mt-4 d-flex align-items-center gap-3 flex-wrap">
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          UI/UX Design
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          Logo Design
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          Figma Design
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          App Design
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          Website Development
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          XD
                        </span>
                        <span className="skill-cloud-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.214855 0.714855C0.501329 0.428382 0.965796 0.428382 1.25227 0.714855L3.5 2.96259L5.74773 0.714856C6.0342 0.428382 6.49867 0.428382 6.78514 0.714856C7.07162 1.00133 7.07162 1.4658 6.78514 1.75227L4.53741 4L6.78514 6.24773C7.07162 6.5342 7.07162 6.99867 6.78514 7.28514C6.49867 7.57162 6.0342 7.57162 5.74773 7.28514L3.5 5.03741L1.25227 7.28514C0.965796 7.57162 0.50133 7.57162 0.214856 7.28514C-0.0716182 6.99867 -0.0716181 6.5342 0.214856 6.24773L2.46259 4L0.214855 1.75227C-0.0716185 1.4658 -0.0716185 1.00133 0.214855 0.714855Z"
                              fill="#907386"
                            />
                          </svg>
                          Flayer Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Submit Btn --> */}
              <div className="d-flex align-items-center gap-4">
                <button className="w-btn-secondary-lg">
                  Save Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M9 9L13 5M13 5L9 1M13 5L1 5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="text-danger text-decoration-underline">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
