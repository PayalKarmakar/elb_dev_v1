import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../../components/website/user/UserSidebar";
import UserHeader from "../../../components/website/user/UserHeader";
import UserDashHighlights from "../../../components/website/user/UserDashHighlights";
import { capitalizeFirstLetter } from "../../../utils/functions";
import { useSelector } from "react-redux";

const LayoutUser = () => {
  const location = useLocation();
  const url = location.pathname; // Get the current URL path
  const parts = url.split("/"); // Split the URL by '/'
  const lastPart = parts[parts.length - 1]; // Get the last part of the URL

  const capitalized = capitalizeFirstLetter(lastPart);
  const { currentUser } = useSelector((state) => state.currentUser);
  const path = `/${currentUser.slug}`;

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
                  <ul className="d-flex align-items-center gap-2">
                    <li className="text-dark-200 fs-6">Dashboard</li>
                  </ul>
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
