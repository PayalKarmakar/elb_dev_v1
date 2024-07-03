import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import WbLogoSvg from "./WbLogoSvg";
import { FaLocationDot, FaUser } from "react-icons/fa6";

import TopSearch from "./search/TopSearch";
import Themeswitch from "./Themeswtich";
import { useSelector } from "react-redux";

const WbTopnav = ({ logout }) => {
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
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <header className={`header-primary ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between headertop">
          <WbLogoSvg />
          <TopSearch />
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="align-items-center d-none d-lg-flex">
              {!currentUser.currentUser.uuid ? (
                <Link
                  to="/sign-in"
                  className="w-btn-secondary-lg text-decoration-none"
                >
                  <FaUser size={14} style={{ borderRadius: "50%" }} />
                  Login
                </Link>
              ) : (
                <button
                  type="button"
                  className="w-btn-secondary-lg text-decoration-none"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
            <div className="dashboard-header-btns d-flex gap-3">
              <div className="dropdown d-none d-md-block">
                <div className="dropdown-menu">
                  <ul className="dashboard-notification">
                    <li className="notification-item dropdown-item d-flex gap-2">
                      <div className="notification-bell flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.2395 8.97519L17.4943 9.05977L18.2395 8.97519ZM18.6867 12.9153L19.4319 12.8307V12.8307L18.6867 12.9153ZM5.31328 12.9153L4.56806 12.8307L4.56806 12.8307L5.31328 12.9153ZM5.76046 8.97519L6.50568 9.05977L5.76046 8.97519ZM4.44779 14.8721L3.87668 14.386H3.87668L4.44779 14.8721ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM14.2699 4.37366H13.5199C13.5199 4.69424 13.7237 4.97938 14.027 5.08322L14.2699 4.37366ZM9.73005 4.37366L9.973 5.08322C10.2763 4.97938 10.4801 4.69424 10.4801 4.37366H9.73005ZM15.7023 20.2632C15.8477 19.8753 15.6511 19.4431 15.2632 19.2977C14.8753 19.1523 14.4431 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.7023 19.7368C9.55694 19.3489 9.12467 19.1523 8.7368 19.2977C8.34893 19.4431 8.15234 19.8753 8.2977 20.2632L9.7023 19.7368ZM17.7772 17.25H6.22281V18.75H17.7772V17.25ZM17.4943 9.05977L17.9415 12.9998L19.4319 12.8307L18.9848 8.89061L17.4943 9.05977ZM6.05849 12.9998L6.50568 9.05977L5.01525 8.89061L4.56806 12.8307L6.05849 12.9998ZM5.01889 15.3583C5.59621 14.6801 5.96028 13.8652 6.05849 12.9998L4.56806 12.8307C4.50519 13.3846 4.27067 13.9231 3.87668 14.386L5.01889 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22281 17.25C5.56777 17.25 5.10443 16.926 4.89056 16.5492C4.68409 16.1854 4.68714 15.748 5.01889 15.3583L3.87668 14.386C3.11141 15.285 3.08777 16.4116 3.58598 17.2895C4.07679 18.1544 5.04947 18.75 6.22281 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3129 15.748 19.3159 16.1854 19.1094 16.5492C18.8956 16.926 18.4322 17.25 17.7772 17.25V18.75ZM15.0199 4.37366V4.26995H13.5199V4.37366H15.0199ZM18.9848 8.89061C18.7055 6.43026 16.8806 4.47476 14.5129 3.6641L14.027 5.08322C15.9441 5.73962 17.2913 7.27101 17.4943 9.05977L18.9848 8.89061ZM10.4801 4.37366V4.26995H8.98005V4.37366H10.4801ZM6.50568 9.05977C6.7087 7.27101 8.05587 5.73962 9.973 5.08322L9.48711 3.6641C7.11944 4.47476 5.29449 6.43026 5.01525 8.89061L6.50568 9.05977ZM12 2.75C12.8394 2.75 13.5199 3.4305 13.5199 4.26995H15.0199C15.0199 2.60208 13.6679 1.25 12 1.25V2.75ZM12 1.25C10.3321 1.25 8.98005 2.60208 8.98005 4.26995H10.4801C10.4801 3.4305 11.1606 2.75 12 2.75V1.25ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6855 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.7023 19.7368L8.2977 20.2632C8.84835 21.7325 10.3145 22.75 12 22.75V21.25Z"
                            fill="#22BE0D"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-dark-300">
                          New job proposal Jan 23, 2024
                        </p>
                        <span className="text-dark-200 text-14">
                          10 minutes ago
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="dropdown-toggle dashboard-header-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/img/dashboard/heade-av.png"
                    className="rounded-circle"
                    alt=""
                  />
                </button>
                <ul className="dashboard-profile dropdown-menu">
                  <li>
                    <a
                      className="dashboard-profile-item dropdown-item d-flex gap-2"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.1801 20H5.8194C3.51066 20 1.63905 18.214 1.63905 16.0108V11.133C1.63905 10.4248 1.34423 9.74559 0.819444 9.2448C-0.396439 8.0845 -0.238375 6.16205 1.15226 5.19692L7.54099 0.762995C9.00683 -0.254332 10.9927 -0.254332 12.4585 0.762995L18.8472 5.19691C20.2379 6.16205 20.396 8.0845 19.1801 9.2448C18.6553 9.74559 18.3605 10.4248 18.3605 11.133V16.0108C18.3605 18.214 16.4889 20 14.1801 20ZM7.99976 15.25C7.58554 15.25 7.24976 15.5858 7.24976 16C7.24976 16.4142 7.58554 16.75 7.99976 16.75H11.9998C12.414 16.75 12.7498 16.4142 12.7498 16C12.7498 15.5858 12.414 15.25 11.9998 15.25H7.99976Z"
                          fill="#22BE0D"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>

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
