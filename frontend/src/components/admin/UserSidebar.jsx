import React from "react";
import logo from "../../assets/admin/static/logo-white.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const UserSidebar = () => {
  const { currentUser } = useSelector((store) => store.currentUser);

  return (
    <aside
      className="navbar ad-navbar-vertical ad-navbar-expand-lg"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <h1 className="navbar-brand ad-navbar-brand-autodark">
          <Link to={`/${currentUser.slug}/dashboard`}>
            <img
              src={logo}
              style={{ height: "36px" }}
              alt={import.meta.env.VITE_APP_TITLE}
            />
          </Link>
        </h1>
        <div className="collapse ad-navbar-collapse" id="sidebar-menu">
          <ul className="navbar-nav ad-pt-lg-3">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={`/${currentUser.slug}/dashboard`}
              >
                <span className="nav-link-icon ad-d-md-none ad-d-lg-inline-block">
                  <AiOutlineHome size={18} />
                </span>
                <span className="nav-link-title">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
