import React, { useEffect, useState } from "react";
import highlighter1 from "../../../assets/website/img/dashboard/icon/icon-1.png";
import highlighter3 from "../../../assets/website/img/dashboard/icon/icon-3.png";
import highlighter4 from "../../../assets/website/img/dashboard/icon/icon-4.png";
import customFetch from "../../../utils/customFetch";

const UserDashHighlights = () => {
  const [purchases, setPurchases] = useState(0);
  const [posts, setPosts] = useState(0);
  const [sold, setSold] = useState(0);

  const dashboardTotals = async () => {
    try {
      const purchaseResponse = await customFetch.get(
        `/posts/my-total-puchases`
      );
      const postResponse = await customFetch.get(`/posts/my-total-posts`);
      const soldResponse = await customFetch.get(`/posts/my-total-sold`);

      setPurchases(purchaseResponse.data.count);
      setPosts(postResponse.data.count);
      setSold(soldResponse.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dashboardTotals();
  }, []);

  return (
    <>
      <div className="row g-4">
        <div className="col-xl col-md-6">
          <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
            <div>
              <h3 className="dashboard-widget-title fw-bold text-dark-300">
                ${purchases}
              </h3>
              <p className="text-18 text-dark-200">My purchases</p>
            </div>
            <div className="dashboard-widget-icon">
              <img src={highlighter1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl col-md-6">
          <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
            <div>
              <h3 className="dashboard-widget-title fw-bold text-dark-300">
                {posts ? (posts?.length === 1 ? `0${posts}` : posts) : `00`}
              </h3>
              <p className="text-18 text-dark-200">My posts</p>
            </div>
            <div className="dashboard-widget-icon">
              <img src={highlighter3} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl col-md-6">
          <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
            <div>
              <h3 className="dashboard-widget-title fw-bold text-dark-300">
                {sold ? (sold?.length === 1 ? `0${sold}` : sold) : `00`}
              </h3>
              <p className="text-18 text-dark-200">Total sold</p>
            </div>
            <div className="dashboard-widget-icon">
              <img src={highlighter4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashHighlights;
