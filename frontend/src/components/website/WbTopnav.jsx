import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import useTheme from "../../../contexts/theme";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import TopSearch from "./search/TopSearch";

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
          <TopSearch />
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="align-items-center d-none d-lg-flex">
              <Link
                to={`/sign-in`}
                className="w-btn-secondary-lg text-decoration-none"
              >
                <FaUser size={14} style={{ borderRadius: "50%" }} />
                Login
              </Link>
            </div>

            <div className="mode_switcher">
              <span className="light is_active">
                {" "}
                <CiLight size={25} className="text-white" />
              </span>
              <span className="dark">
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
