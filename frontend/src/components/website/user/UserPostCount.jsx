import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import customFetch from "../../../utils/customFetch";

const UserPostCount = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [counts, setCounts] = useState({});
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const handleChange = (val) => {
    const filterType = val ? `?f=${val}` : ``;
    setActiveFilter(val ? val : "all");
    navigate(`${pathname}${filterType.toString()}`);
  };

  const fetchData = async () => {
    try {
      const response = await customFetch.get(`/users/post-count`);
      setCounts(response.data.data.rows[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setActiveFilter(searchParams.get("f") ? searchParams.get("f") : "all");
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <div
          className="d-flex flex-wrap gap-3 align-items-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className={`dashboard-tab-btn ${
              activeFilter === "all" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleChange()}
          >
            All({counts.total_all})
          </button>
          <button
            className={`dashboard-tab-btn ${
              activeFilter === "posted" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleChange("posted")}
          >
            Posted({counts.total_posted})
          </button>
          <button
            className={`dashboard-tab-btn ${
              activeFilter === "sold" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleChange("sold")}
          >
            Sold({counts.total_sold})
          </button>
          <button
            className={`dashboard-tab-btn ${
              activeFilter === "rejected" ? "active" : ""
            }`}
            type="button"
            onClick={() => handleChange("rejected")}
          >
            Rejected({counts.total_blocked})
          </button>
        </div>
      </nav>
    </>
  );
};
export default UserPostCount;
