import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import customFetch from "../../../utils/customFetch";
import {
  setAllCategories,
  setParentCategories,
} from "../../../feature/masters/categorySlice";
import { setCurrentUser } from "../../../feature/currentUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { splitErrors } from "../../../utils/showErrors";
import Sidebar from "../../../components/website/user/UserSidebar";
import UserHeader from "../../../components/website/user/UserHeader";
import UserDashHighlights from "../../../components/website/user/UserDashHighlights";

const LayoutUser = () => {
  const location = useLocation();
  const url = location.pathname; // Get the current URL path
  const parts = url.split("/"); // Split the URL by '/'
  const lastPart = parts[parts.length - 1]; // Get the last part of the URL

  return (
    <>
      <div className="d-xl-flex">
        <Sidebar />
        <div className="flex-grow-1 align-items-center position-relative">
          <UserHeader />
          <main className="dashboard-main min-vh-100">
            <div className="d-flex flex-column gap-4">
              {/* <!-- Page Header --> */}
              {lastPart == "dashboard" && (
                <>
                  <div className="d-flex gap-4 flex-column flex-md-row align-items-md-center justify-content-between">
                    <div>
                      <h3 className="text-24 fw-bold text-dark-300 mb-2">
                        Dashboard
                      </h3>
                      <ul className="d-flex align-items-center gap-2">
                        <li className="text-dark-200 fs-6">Dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <a
                        href="seller-create-gig.html"
                        className="w-btn-secondary-lg"
                      >
                        Post Ad
                      </a>
                    </div>
                  </div>
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
