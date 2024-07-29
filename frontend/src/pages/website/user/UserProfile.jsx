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

  const fetchState = async () => {
    const getStates = await customFetch.get(`/website/get-allstates`);
    dispatch(setAllStates(getStates?.data?.data?.rows));
  };
  useEffect(() => {
    fetchState();
  }, []);

  const [selectedState, setselectedState] = useState("");
  const [selectedCity, setselectedCity] = useState("");

  const onStateChange = (e) => {
    setselectedState(e.target.value);
  };

  const getCities = async () => {
    if (selectedState) {
      const getStates = await customFetch.get(
        `/website/get-cities/${selectedState}`
      );
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
                        <label for="state" className="form-label">
                          State
                          <span className="text-lime-300">*</span>
                        </label>

                        <select
                          id="state"
                          name="state"
                          value={selectedState}
                          className="form-select shadow-none"
                          onChange={onStateChange}
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
                        <label for="category" className="form-label">
                          Town/City
                          <span className="text-lime-300">*</span>
                        </label>
                        <select
                          id="city"
                          value=""
                          autoComplete="off"
                          className="form-select shadow-none"
                        ></select>
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
                          {/* <option value="0">Male</option>
                          <option value="1">Female</option> */}
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
