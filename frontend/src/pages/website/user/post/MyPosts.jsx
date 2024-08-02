const MyPosts = () => {
  document.title = `My Posts | ${import.meta.env.VITE_APP_TITLE}`;

  return (
    <>
      <div>
        {/* <!-- Tab Nav --> */}
        <nav>
          <div
            className="d-flex flex-wrap gap-3 align-items-center"
            id="nav-tab"
            role="tablist"
          >
            <button className="dashboard-tab-btn active" type="button">
              All(10)
            </button>
            <button className="dashboard-tab-btn" type="button">
              Active(4)
            </button>
            <button className="dashboard-tab-btn" type="button">
              Pending
            </button>
            <button className="dashboard-tab-btn" type="button">
              Completed
            </button>
          </div>
        </nav>
        {/* <!-- Tab Content --> */}
        <div className="tab-content mt-4" id="nav-tabContent">
          {/* <!-- All --> */}
          <div className="tab-pane fade show active">
            <div>
              <div className="overflow-x-auto">
                <table className="w-100 dashboard-table">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Days</th>
                      <th scope="col" className="ps-5 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge in-progress">Active</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Web Developer cum Designer (for ngen LTD.)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge canceled">Canceled</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/4.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Jr. Software Project Coordinator (Onsite)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/5.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Software engineer for android Development...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/6.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/7.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <div className="row justify-content-end mt-20">
                <div className="col-auto">
                  <nav aria-label="Page navigation example">
                    <ul className="custom-pagination pagination">
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          2
                        </a>
                      </li>
                      <li
                        className="custom-page-item page-item active"
                        aria-current="page"
                      >
                        <a className="custom-page-link page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          4
                        </a>
                      </li>

                      <li className="custom-page-item page-item">
                        <a
                          className="custom-page-link custom-page-item page-link"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Active --> */}
          <div
            className="tab-pane fade"
            id="nav-active"
            role="tabpanel"
            aria-labelledby="nav-active-tab"
            tabindex="0"
          >
            <div>
              <div className="overflow-x-auto">
                <table className="w-100 dashboard-table">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Days</th>
                      <th scope="col" className="text-center ps-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge in-progress">Active</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Web Developer cum Designer (for ngen LTD.)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge canceled">Canceled</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/4.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Jr. Software Project Coordinator (Onsite)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/5.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Software engineer for android Development...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/6.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/7.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <div className="row justify-content-end mt-20">
                <div className="col-auto">
                  <nav aria-label="Page navigation example">
                    <ul className="custom-pagination pagination">
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          2
                        </a>
                      </li>
                      <li
                        className="custom-page-item page-item active"
                        aria-current="page"
                      >
                        <a className="custom-page-link page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          4
                        </a>
                      </li>

                      <li className="custom-page-item page-item">
                        <a
                          className="custom-page-link custom-page-item page-link"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Pending --> */}
          <div
            className="tab-pane fade"
            id="nav-pending"
            role="tabpanel"
            aria-labelledby="nav-pending-tab"
            tabindex="0"
          >
            <div>
              <div className="overflow-x-auto">
                <table className="w-100 dashboard-table">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Days</th>
                      <th scope="col" className="text-center ps-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge in-progress">Active</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Web Developer cum Designer (for ngen LTD.)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge canceled">Canceled</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/4.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Jr. Software Project Coordinator (Onsite)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/5.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Software engineer for android Development...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/6.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/7.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <div className="row justify-content-end mt-20">
                <div className="col-auto">
                  <nav aria-label="Page navigation example">
                    <ul className="custom-pagination pagination">
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          2
                        </a>
                      </li>
                      <li
                        className="custom-page-item page-item active"
                        aria-current="page"
                      >
                        <a className="custom-page-link page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          4
                        </a>
                      </li>

                      <li className="custom-page-item page-item">
                        <a
                          className="custom-page-link custom-page-item page-link"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Complete --> */}
          <div
            className="tab-pane fade"
            id="nav-completed"
            role="tabpanel"
            aria-labelledby="nav-completed-tab"
            tabindex="0"
          >
            <div>
              <div className="overflow-x-auto">
                <table className="w-100 dashboard-table">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Days</th>
                      <th scope="col" className="text-center ps-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge in-progress">Active</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Web Developer cum Designer (for ngen LTD.)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge canceled">Canceled</span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/4.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Jr. Software Project Coordinator (Onsite)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/5.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Software engineer for android Development...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/6.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Senior Manager, Finance and Administration
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3">
                            <img
                              src="assets/img/dashboard/projects/7.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-dark-200">
                              Brote - Cleanin Service Elementor Template Kit
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark-200">$15</td>
                      <td>
                        <span className="status-badge pending">
                          Pending payment
                        </span>
                      </td>
                      <td className="text-dark-200">02</td>
                      <td>
                        <div className="d-flex justify-content-end gap-2">
                          <button className="dashboard-action-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <button className="dashboard-action-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                            >
                              <circle cx="24" cy="24" r="24" fill="#EDEBE7" />
                              <path
                                d="M34.3187 21.6619C35.6716 23.0854 35.6716 25.248 34.3187 26.6714C32.0369 29.0721 28.1181 32.3333 23.6667 32.3333C19.2152 32.3333 15.2964 29.0721 13.0147 26.6714C11.6618 25.248 11.6618 23.0854 13.0147 21.6619C15.2964 19.2612 19.2152 16 23.6667 16C28.1181 16 32.0369 19.2612 34.3187 21.6619Z"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="23.668"
                                cy="24.167"
                                r="3.5"
                                stroke="#5B5B5B"
                                stroke-width="1.5"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <div className="row justify-content-end mt-20">
                <div className="col-auto">
                  <nav aria-label="Page navigation example">
                    <ul className="custom-pagination pagination">
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          2
                        </a>
                      </li>
                      <li
                        className="custom-page-item page-item active"
                        aria-current="page"
                      >
                        <a className="custom-page-link page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="custom-page-item page-item">
                        <a className="custom-page-link page-link" href="#">
                          4
                        </a>
                      </li>

                      <li className="custom-page-item page-item">
                        <a
                          className="custom-page-link custom-page-item page-link"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPosts;
