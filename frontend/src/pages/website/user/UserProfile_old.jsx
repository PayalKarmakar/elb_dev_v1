import React, { useEffect, useState } from "react";
import customFetch from "../../../utils/customFetch";
import { useDispatch, useSelector } from "react-redux";
import { setAllStates } from "../../../feature/masters/locationSlice";
import { Form } from "react-router-dom";
import { nanoid } from "nanoid";

const UserProfile = () => {
  document.title = `Profile | ${import.meta.env.VITE_APP_TITLE}`;
  const dispatch = useDispatch();
  const { allStates } = useSelector((store) => store.locations);

  const [selectedState, setselectedState] = useState([]);
  const [selectedCity, setselectedCity] = useState([]);

  const fetchState = async () => {
    try {
      const getStates = await customFetch.get(`/website/get-allstates`);
      dispatch(setAllStates(getStates?.data?.data?.rows));
    } catch (error) {
      console.log(error);
      setselectedState([]);
      setselectedCity([]);
    }
  };
  useEffect(() => {
    fetchState();
  }, []);

  const getCities = async (stateCode) => {
    try {
      const getallCities = await customFetch.get(
        `/website/get-cities/${stateCode}`
      );
      setselectedState(stateCode);
      setselectedCity(getallCities.data.data.rows);
    } catch (error) {
      console.log(error);
      setselectedState([]);
    }
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <Form method="post" autoComplete="off">
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
                        <label htmlFor="fname" className="form-label">
                          First Name
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Name"
                          name="fname"
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
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="gender" className="form-label">
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
                        <label htmlFor="email" className="form-label">
                          Email Address
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="example@email.com"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="email" className="form-label">
                          Mobile
                          <span className="text-lime-300">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control shadow-none"
                          name="mobile"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="country" className="form-label">
                          Country
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="country"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          <option value="1" selected>
                            INDIA
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="state" className="form-label">
                          State
                          <span className="text-lime-300">*</span>
                        </label>

                        <select
                          id="state"
                          name="state"
                          value={selectedState}
                          autoComplete="off"
                          className="form-select shadow-none"
                          onChange={(e) => getCities(e.target.value)}
                        >
                          <option value="">- Select -</option>
                          {allStates.map((i) => (
                            <option key={nanoid()} value={i.state_code}>
                              {i.state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-container">
                        <label htmlFor="category" className="form-label">
                          Town/City
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="city"
                          name="city"
                          autoComplete="off"
                          className="form-select shadow-none"
                        >
                          <option value="">- Select -</option>
                          {selectedCity?.map((city) => {
                            return (
                              <option key={nanoid()} value={city.id}>
                                {city.city}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="description" className="form-label">
                        Tell Us Something About Yourself
                      </label>
                      <div className="w-editor-wrapper">
                        <div id="toolbar"></div>
                        <div id="editor"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gig-info-card">
                <div className="gig-info-header">
                  <h4 className="text-18 fw-semibold text-white">
                    Drop your pic—make your profile pop!
                  </h4>
                </div>
                <div className="gig-info-body bg-white">
                  <p className="text-dark-200 mb-2">Profile Picture</p>
                  <div className="d-flex flex-wrap gap-3">
                    <div>
                      <label
                        htmlFor="gig-img"
                        className="border text-center gig-file-upload"
                      >
                        <img
                          src="assets/img/dashboard/gigs/gallery-icon.png"
                          alt=""
                        />
                        <p className="text-dark-200">Max.Size 500KB</p>
                        <input
                          className="d-none"
                          type="file"
                          multiple
                          name="image"
                          id="gig-img"
                          // onChange={(e) => handleImageChange(e ? e : null)}
                        />
                      </label>
                    </div>

                    {/* {loopImg()} */}
                  </div>
                </div>
              </div>
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
