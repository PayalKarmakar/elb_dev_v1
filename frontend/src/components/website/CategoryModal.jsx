import React from "react";
import { Modal } from "react-bootstrap";
import CatNavImg from "../../assets/website/img/others/category.png";

const CategoryModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} size="xl" onHide={handleClose}>
      <div className="modal-content">
        <div className="modal-header px-5 py-4 d-flex justify-content-between items-placeholder border-bottom">
          <div>
            <h3 className="text-dark-300 fw-bold text-24">All Categories</h3>
          </div>
          <div>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FF3838" />
                <path
                  d="M22.2188 9.77759L8.88614 23.1109"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M22.2188 23.1099L8.88614 9.77654"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-body px-5 py-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      Logo & Brand Identity
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#"> Logo Design </a>
                        </li>
                        <li>
                          <a href="#"> Brand Style Guides</a>
                        </li>
                        <li>
                          <a href="#"> Business Cards & Stationery</a>
                        </li>
                        <li>
                          <a href="#">Fonts & Typography </a>
                        </li>
                        <li>
                          <a href="#"> Logo Maker Tool </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      Web & App Design
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#"> Website Design </a>
                        </li>
                        <li>
                          <a href="#"> App Design</a>
                        </li>
                        <li>
                          <a href="#"> UX Design</a>
                        </li>
                        <li>
                          <a href="#">Landing Page Design</a>
                        </li>
                        <li>
                          <a href="#"> Icon Design </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      Visual Design
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#"> Image Editing </a>
                        </li>
                        <li>
                          <a href="#"> Presentation Design</a>
                        </li>
                        <li>
                          <a href="#">Background Removal</a>
                        </li>
                        <li>
                          <a href="#"> Infographic Design </a>
                        </li>
                        <li>
                          <a href="#"> Vector Tracing </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      Art & Illustration
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#"> Illustration </a>
                        </li>
                        <li>
                          <a href="#">AI ArtistsNEW</a>
                        </li>
                        <li>
                          <a href="#"> Children's Book Illustration</a>
                        </li>
                        <li>
                          <a href="#">Fonts & Typography </a>
                        </li>
                        <li>
                          <a href="#"> Portraits & Caricatures</a>
                        </li>
                        <li>
                          <a href="#"> Cartoons & Comics </a>
                        </li>
                        <li>
                          <a href="#"> Pattern Design </a>
                        </li>
                        <li>
                          <a href="#"> Tattoo Design </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      Product & Gaming
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#">Industrial & Product Design </a>
                        </li>
                        <li>
                          <a href="#"> Character Modeling</a>
                        </li>
                        <li>
                          <a href="#"> Game Art</a>
                        </li>
                        <li>
                          <a href="#"> Graphics for Streamers</a>
                        </li>
                        <li>
                          <a href="#"> Brochure Design Poster</a>
                        </li>
                        <li>
                          <a href="#"> Design Catalog Design </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div>
                    <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                      3D Design
                    </h4>
                    <nav className="category-nav">
                      <ul>
                        <li>
                          <a href="#"> 3D Architecture </a>
                        </li>
                        <li>
                          <a href="">3D Industrial Design</a>
                        </li>
                        <li>
                          <a href="">3D Industrial Design</a>
                        </li>
                        <li>
                          <a href="">3D Fashion & Garment</a>
                        </li>
                        <li>
                          <a href="">3D Printing Characters</a>
                        </li>
                        <li>
                          <a href="">3D Landscape</a>
                        </li>
                        <li>
                          <a href="">3D Game Art</a>
                        </li>
                        <li>
                          <a href="#"> 3D Jewelry Design </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src={CatNavImg}
                  className="rounded-3 img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
