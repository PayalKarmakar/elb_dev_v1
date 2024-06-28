import { useState, useEffect, useContext } from "react";
import { Form, Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../../../contexts/theme";
import TopSearch from "./search/TopSearch";

const WbTopnav = () => {
  const { ThemeMode, darkTheme, lightTheme } = useContext(ThemeContext);

  const chengeBtn = (e) => {
    const btnstatus = e.target.checked;
    if (btnstatus) darkTheme();
    else lightTheme();
  };

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
                <FaMoon size={20} className="text-white" />
              </span>
            </div>

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
