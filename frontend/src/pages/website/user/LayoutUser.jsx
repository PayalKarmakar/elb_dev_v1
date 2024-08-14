import React, { useEffect } from "react";
import {
  Link,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Sidebar from "../../../components/website/user/UserSidebar";
import UserHeader from "../../../components/website/user/UserHeader";
import UserDashHighlights from "../../../components/website/user/UserDashHighlights";
import { useSelector } from "react-redux";
import {
  setGetCategories,
  setParentCategories,
} from "../../../feature/masters/categorySlice";
import { setCurrentUser } from "../../../feature/currentUserSlice";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { capitalizeWords } from "../../../utils/functions";

// Loader starts ------
export const loader = (store) => async () => {
  const { getCategories, parentCategories } = store.getState().categories;
  const { currentUser } = store.getState().currentUser;

  try {
    if (getCategories.length === 0) {
      const sCat = await customFetch.get(`/website/get-categories`);
      store.dispatch(setGetCategories(sCat?.data?.data?.rows));
    }
    if (parentCategories.length === 0) {
      const pcategories = await customFetch.get(`/masters/categories/parents`);
      store.dispatch(setParentCategories(pcategories.data.data.rows));
    }

    if (!currentUser.first_name) {
      const cuser = await customFetch.get(`/auth/current-user`);
      store.dispatch(setCurrentUser(cuser?.data?.data?.rows[0]));
    }
    return null;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return null;
  }
};

// Main component starts ------
const LayoutUser = () => {
  const location = useLocation();
  const url = location.pathname; // Get the current URL path
  const parts = url.split("/"); // Split the URL by '/'
  const lastPart = parts[parts.length - 1]; // Get the last part of the URL

  const capitalized = capitalizeWords(lastPart);
  const { currentUser } = useSelector((state) => state.currentUser);
  const path = `/${currentUser?.slug}`;
  const navigate = useNavigate();

  // Check if login token is valid starts ------
  const checkValidToken = async () => {
    const response = await customFetch.get(`/auth/is-valid-token`);
    if (!response) {
      localStorage.removeItem("token");
      toast.error(`Invalid token! Login required`);
      navigate(`/`);
    }
  };
  // Check if login token is valid ends ------

  // useEffect(() => {
  //   checkValidToken();
  // }, [url]);

  return (
    <>
      <div className="d-xl-flex">
        <Sidebar />
        <div className="flex-grow-1 align-items-center position-relative">
          <UserHeader />
          <main className="dashboard-main min-vh-100">
            <div className="d-flex flex-column gap-4">
              {/* <!-- Page Header --> */}
              <div className="d-flex gap-4 flex-column flex-md-row align-items-md-center justify-content-between">
                <div>
                  <h3 className="text-24 fw-bold text-dark-300 mb-2">
                    {capitalized}
                  </h3>
                  {/* <ul className="d-flex align-items-center gap-2">
                    <li className="text-dark-200 fs-6">Dashboard</li>
                  </ul> */}
                </div>
                {lastPart == "dashboard" && (
                  <div>
                    <Link to={path + "/post-ad"} className="w-btn-secondary-lg">
                      Post Ad
                    </Link>
                  </div>
                )}
              </div>
              {lastPart == "dashboard" && (
                <>
                  <UserDashHighlights />
                </>
              )}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutUser;
