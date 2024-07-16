import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaUser } from "react-icons/fa6";

import TopSearch from "./search/TopSearch";
import Themeswitch from "./Themeswtich";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { MdOutlineSell } from "react-icons/md";

//return redirect(`${path}`);
const WbTopnav = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { currentUser } = useSelector((state) => state.currentUser);

  return (
    <header className={`header-primary ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between headertop">
          <WbLogoSvg />
          <TopSearch />
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="align-items-center d-none d-lg-flex">
              {!currentUser.uuid ? (
                <Link
                  to="/sign-in"
                  className="w-btn-secondary-lg text-decoration-none"
                >
                  <FaUser size={14} style={{ borderRadius: "50%" }} />
                  Login
                </Link>
              ) : (
                <Link to={`/${currentUser.slug}/post-ad`}>
                  <button type="button" className="header-btn">
                    <MdOutlineSell
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    POST AD
                  </button>
                </Link>
              )}
            </div>
            {currentUser.uuid && <UserProfile />}

            <Themeswitch />

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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WbTopnav;
