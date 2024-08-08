import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hidePostDetailsModal } from "../../../../feature/postSlice";
import { IoMdCloseCircle } from "react-icons/io";

const PostViewModal = () => {
  const dispatch = useDispatch();
  const { postDetailsModal, postDetails } = useSelector((store) => store.posts);
  console.log(postDetails);

  const handleClose = () => {
    dispatch(hidePostDetailsModal());
  };

  return (
    <Modal show={postDetailsModal} size="xl" onHide={handleClose}>
      <div className="modal-content">
        <div className="modal-body">
          <div className="bg-white rounded-3 p-xl-0">
            <div className="d-flex justify-content-between align-items-center pb-4 border-bottom">
              <h4>{postDetails.title}</h4>
              <button>
                <IoMdCloseCircle
                  className="text-danger"
                  size={30}
                  onClick={handleClose}
                />
              </button>
            </div>
            <div className="pt-4">
              <div className="row g-4">
                <div className="col-xl-8 col-lg-12">
                  <div className="bg-offWhite p-4 rounded-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="order-img">
                          <img
                            src="assets/img/dashboard/orders/o-1.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-dark-200">
                            Brote - Cleanin Service Elementor Template Kit
                          </p>
                          <ul className="d-flex gap-1 order-category">
                            <li className="text-dark-200">WordPress</li>
                            <li className="text-dark-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="10"
                                viewBox="0 0 5 10"
                                fill="none"
                              >
                                <path
                                  d="M1 9L4 5L1 1"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </li>
                            <li className="text-dark-200">Creative</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p className="text-lime-300">#888654</p>
                        <p className="text-14 text-dark-200">
                          3 Hours 5 min ago
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-3 mt-4">
                      <ul className="row row-gap-3 row-cols-1 row-cols-md-2 row-cols-lg-4 p-3">
                        <li className="pe-lg-4 pe-2 border-end">
                          <p className="fs-6 text-dark-200">Order Budget</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            $60
                          </h4>
                        </li>
                        <li className="px-lg-4 border-end">
                          <p className="fs-6 text-dark-200">Delivery Time</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            2 Days
                          </h4>
                        </li>
                        <li className="px-lg-4 border-end">
                          <p className="fs-6 text-dark-200">Active Budget</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            01
                          </h4>
                        </li>
                        <li className="px-lg-4">
                          <p className="fs-6 text-dark-200">Complete Order</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            20
                          </h4>
                        </li>
                      </ul>
                      <ul className="row row-gap-3 row-cols-1 row-cols-md-2 row-cols-lg-4 p-3 bg-offWhite rounded-3 m-1">
                        <li className="pe-lg-4 p-2">
                          <p className="fs-6 text-dark-200">Commission</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            10
                          </h4>
                        </li>
                        <li className="px-lg-4 p-2">
                          <p className="fs-6 text-dark-200">Total Balance</p>
                          <h4 className="text-18 fw-semibold text-dark-300">
                            $50
                          </h4>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex mt-4 flex-column gap-3 flex-lg-row justify-content-between">
                      <div className="d-flex flex-column justify-content-center flex-lg-row gap-3">
                        <button className="w-btn-secondary-lg">
                          Order Accept
                        </button>
                        <button className="text-danger text-decoration-underline">
                          Decline Order
                        </button>
                      </div>
                      <div>
                        <button className="w-btn-blue-lg">Download File</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="border p-4 rounded-3">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="rounded-4">
                        <img
                          src="assets/img/dashboard/orders/av-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="fw-bold text-24">
                          QuomodoSoft
                          <span className="text-dark-200 fs-6 fw-normal">
                            (Buyer)
                          </span>
                        </h4>
                        <p className="text-dark-200 text-18">
                          Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4">
                      <li className="d-flex justify-content-between py-3 border-top">
                        <div className="d-flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                          >
                            <path
                              d="M20.7083 19H3.29167C2.0285 19 1 17.878 1 16.5V3.5C1 2.122 2.0285 1 3.29167 1H20.7083C21.9715 1 23 2.122 23 3.5V16.5C23 17.878 21.9715 19 20.7083 19ZM3.29167 2C2.53358 2 1.91667 2.673 1.91667 3.5V16.5C1.91667 17.327 2.53358 18 3.29167 18H20.7083C21.4664 18 22.0833 17.327 22.0833 16.5V3.5C22.0833 2.673 21.4664 2 20.7083 2H3.29167Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M7.86589 10C6.60272 10 5.57422 8.878 5.57422 7.5C5.57422 6.122 6.60272 5 7.86589 5C9.12905 5 10.1576 6.122 10.1576 7.5C10.1576 8.878 9.12905 10 7.86589 10ZM7.86589 6C7.1078 6 6.49089 6.673 6.49089 7.5C6.49089 8.327 7.1078 9 7.86589 9C8.62397 9 9.24089 8.327 9.24089 7.5C9.24089 6.673 8.62397 6 7.86589 6Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M11.5387 15C11.2857 15 11.0804 14.776 11.0804 14.5V13.5C11.0804 12.673 10.4635 12 9.7054 12H6.03874C5.28065 12 4.66374 12.673 4.66374 13.5V14.5C4.66374 14.776 4.4584 15 4.2054 15C3.9524 15 3.74707 14.776 3.74707 14.5V13.5C3.74707 12.122 4.77557 11 6.03874 11H9.7054C10.9686 11 11.9971 12.122 11.9971 13.5V14.5C11.9971 14.776 11.7917 15 11.5387 15Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 7H14.2894C14.0364 7 13.8311 6.776 13.8311 6.5C13.8311 6.224 14.0364 6 14.2894 6H19.7894C20.0424 6 20.2477 6.224 20.2477 6.5C20.2477 6.776 20.0424 7 19.7894 7Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 11H14.2894C14.0364 11 13.8311 10.776 13.8311 10.5C13.8311 10.224 14.0364 10 14.2894 10H19.7894C20.0424 10 20.2477 10.224 20.2477 10.5C20.2477 10.776 20.0424 11 19.7894 11Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 15H14.2894C14.0364 15 13.8311 14.776 13.8311 14.5C13.8311 14.224 14.0364 14 14.2894 14H19.7894C20.0424 14 20.2477 14.224 20.2477 14.5C20.2477 14.776 20.0424 15 19.7894 15Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                          </svg>
                          Member Since
                        </div>
                        <div>
                          <p>Jan 10, 2024</p>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-top">
                        <div className="d-flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                          >
                            <path
                              d="M20.7083 19H3.29167C2.0285 19 1 17.878 1 16.5V3.5C1 2.122 2.0285 1 3.29167 1H20.7083C21.9715 1 23 2.122 23 3.5V16.5C23 17.878 21.9715 19 20.7083 19ZM3.29167 2C2.53358 2 1.91667 2.673 1.91667 3.5V16.5C1.91667 17.327 2.53358 18 3.29167 18H20.7083C21.4664 18 22.0833 17.327 22.0833 16.5V3.5C22.0833 2.673 21.4664 2 20.7083 2H3.29167Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M7.86589 10C6.60272 10 5.57422 8.878 5.57422 7.5C5.57422 6.122 6.60272 5 7.86589 5C9.12905 5 10.1576 6.122 10.1576 7.5C10.1576 8.878 9.12905 10 7.86589 10ZM7.86589 6C7.1078 6 6.49089 6.673 6.49089 7.5C6.49089 8.327 7.1078 9 7.86589 9C8.62397 9 9.24089 8.327 9.24089 7.5C9.24089 6.673 8.62397 6 7.86589 6Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M11.5387 15C11.2857 15 11.0804 14.776 11.0804 14.5V13.5C11.0804 12.673 10.4635 12 9.7054 12H6.03874C5.28065 12 4.66374 12.673 4.66374 13.5V14.5C4.66374 14.776 4.4584 15 4.2054 15C3.9524 15 3.74707 14.776 3.74707 14.5V13.5C3.74707 12.122 4.77557 11 6.03874 11H9.7054C10.9686 11 11.9971 12.122 11.9971 13.5V14.5C11.9971 14.776 11.7917 15 11.5387 15Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 7H14.2894C14.0364 7 13.8311 6.776 13.8311 6.5C13.8311 6.224 14.0364 6 14.2894 6H19.7894C20.0424 6 20.2477 6.224 20.2477 6.5C20.2477 6.776 20.0424 7 19.7894 7Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 11H14.2894C14.0364 11 13.8311 10.776 13.8311 10.5C13.8311 10.224 14.0364 10 14.2894 10H19.7894C20.0424 10 20.2477 10.224 20.2477 10.5C20.2477 10.776 20.0424 11 19.7894 11Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                            <path
                              d="M19.7894 15H14.2894C14.0364 15 13.8311 14.776 13.8311 14.5C13.8311 14.224 14.0364 14 14.2894 14H19.7894C20.0424 14 20.2477 14.224 20.2477 14.5C20.2477 14.776 20.0424 15 19.7894 15Z"
                              fill="#22BE0D"
                              stroke="#22BE0D"
                              stroke-width="0.4"
                            />
                          </svg>
                          Reviews
                        </div>
                        <div>
                          <p>20</p>
                        </div>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-top">
                        <div className="d-flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <mask
                              id="mask0_645_14082"
                              // style="mask-type: luminance"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="21"
                              height="21"
                            >
                              <path
                                d="M20.0167 20.017V0.650244H0.65V20.017H20.0167Z"
                                fill="white"
                                stroke="white"
                                stroke-width="1.3"
                              />
                            </mask>
                            <g mask="url(#mask0_645_14082)">
                              <path
                                d="M12.1536 5.08956H18.3243C19.3943 5.08956 20.2618 5.957 20.2618 7.02706V17.5185C20.2618 18.5886 19.3943 19.4561 18.3243 19.4561H2.33985C1.26978 19.4561 0.402344 18.5886 0.402344 17.5185V7.02706C0.402344 5.957 1.26978 5.08956 2.33985 5.08956H8.52078"
                                stroke="#22BE0D"
                                stroke-width="1.3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M20.2618 8.31394C20.2618 10.4479 18.5319 12.1777 16.398 12.1777H4.26614C2.13221 12.1777 0.402344 10.4479 0.402344 8.31394"
                                stroke="#22BE0D"
                                stroke-width="1.3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.3444 14.6934C9.49727 14.6934 8.81055 14.0066 8.81055 13.1595V10.9167C8.81055 10.632 9.04131 10.4013 9.326 10.4013H11.3628C11.6475 10.4013 11.8783 10.632 11.8783 10.9167V13.1595C11.8783 14.0066 11.1915 14.6934 10.3444 14.6934Z"
                                stroke="#22BE0D"
                                stroke-width="1.3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5.32812 5.08984V3.14899C5.32812 2.07892 6.19556 1.21148 7.26563 1.21148H13.4011C14.4711 1.21148 15.3386 2.07892 15.3386 3.14899V5.08984"
                                stroke="#22BE0D"
                                stroke-width="1.3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5.32812 3.14844H15.3386"
                                stroke="#22BE0D"
                                stroke-width="1.3"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                          Total Job
                        </div>
                        <div>
                          <p className="text-dark-200">25</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PostViewModal;
