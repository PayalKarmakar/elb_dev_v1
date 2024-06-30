import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import customFetch from "../../utils/customFetch";
import { setListCategories } from "../../feature/masters/categorySlice";
import { splitErrors } from "../../utils/showErrors";
import CatNavImg from "../../assets/website/img/others/category.png";

const CategoryModal = ({ show, handleClose }) => {
  const { listCategories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await customFetch.get(`/masters/categories/all`);
      dispatch(setListCategories(response?.data?.data?.rows));
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <div className="col-lg-12">
              <div className="row">
                
                  {listCategories
                    ?.filter((i) => i.parent_id === null)
                    .map((i) => (
                      <div className="col-lg-4 mb-4" key={i.id} id={i.id}>
                        <h4 className="text-18 fw-semibold text-dark-300 mb-2">
                          {i.category}
                        </h4>
                        <nav className="category-nav">
                        
                          <ul>
                            {listCategories
                            ?.filter((si) => si.parent_id === i.id)
                            .map((si) => (
                              <li>
                                  <a href="#"> {si.category}</a>
                                </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
