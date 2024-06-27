import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import useTheme from "../../../contexts/theme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const WbTopnav = () => {
  const { ThemeMode, darkTheme, lightTheme } = useTheme();
  const chengeBtn = (e) => {
    const btnstatus = e.currentTarget.checked;
    if (btnstatus) darkTheme();
    else lightTheme();
  };
  const [hover, setHover] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chevronStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <header className={`header-primary ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between headertop">
          <WbLogoSvg />
          <Form method="get">
            <div className="hero-form-wrapper bg-white d-flex position-relative">
              <div>
                <select
                  className="form-select shadow-none border-right-grey"
                  name="loc"
                >
                  <option value="0">Location</option>
                  <option value="1">Kolkata</option>
                  <option value="2">Mumbai</option>
                  <option value="3">Delhi</option>
                </select>
              </div>
              <div>
                <select
                  className="form-select shadow-none categorysearch"
                  name="cat"
                >
                  <option value="0">All Categories</option>
                  <option value="1">Cars</option>
                  <option value="2">Mobiles</option>
                  <option value="3">Camera</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="search"
                  className="form-control shadow-none"
                  placeholder="Search for any service..."
                />
                <button
                  type="submit"
                  className="hero-form-btn position-absolute"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      stroke="#F2F2F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 17L14 13"
                      stroke="#F2F2F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </Form>
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="align-items-center d-none d-lg-flex">
              <Link to={`/sign-in`} className="w-btn-secondary-lg">
                <FaUser size={14} style={{ borderRadius: "50%" }} />
                Login
              </Link>
            </div>

            <div class="mode_switcher">
              <span class="light is_active">
                {" "}
                <CiLight size={25} className="text-white" />
              </span>
              <span class="dark">
                {" "}
                <MdDarkMode size={25} className="text-white" />
              </span>
            </div>

            {/* <div className="mode">
              <CiLight size={25} className="text-white" />
              &nbsp;&nbsp;
              <MdDarkMode size={25} className="text-white" />
            </div> */}

            {/* <div className="user_location"> 
              <FaLocationDot size={15} className="text-white" />
              <i className="fa-solid fa-location-dot"></i>
              <h6 className="fw-bold">Location</h6>
            </div>  */}

            <button
              className="navbar-toggler d-block d-xl-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                id="themeSwitch"
                onChange={chengeBtn}
                checked={ThemeMode === "dark"}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WbTopnav;
