import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customFetch from "../../../utils/customFetch";
import { splitErrors } from "../../../utils/showErrors";
import { setAllPosts } from "../../../feature/postSlice";
import product1 from "../../../assets/website/img/job/product-1.jpg";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PaginationContainer from "../PaginationContainer";
import { encParam } from "../../../utils/functions";

const ProductCard = ({ catCard }) => {
  const { allPosts = [] } = useSelector((store) => store.posts); // Initialize with empty array
  const { listCategories = [] } = useSelector((store) => store.categories); // Initialize with empty array
  const dispatch = useDispatch();
  const [totalCount, setTotalCount] = useState(0); // Initialize with 0

  const fetchData = async (offset = 0) => {
    try {
      let parentCategory = "";
      let subcategory = "";

      if (catCard.catname === "all") {
        const response = await customFetch.get(`/website/all-post/${offset}`);
        dispatch(setAllPosts(response?.data?.data?.rows || [])); // Default to empty array
        setTotalCount(response?.data?.result?.rows[0]?.countid || 0); // Default to 0
      } else if (catCard.catname === "search-value") {
        const searchItem = localStorage.getItem("searchItem");
        let data = JSON.parse(searchItem) || {};
        try {
          const response = await customFetch.post(
            `/website/search-post/${offset}`,
            data
          );
          dispatch(setAllPosts(response?.data?.data?.rows || [])); // Default to empty array
          setTotalCount(response?.data?.result?.rows[0]?.countid || 0); // Default to 0
        } catch (error) {
          splitErrors(error?.response?.data?.msg);
          return error;
        }
      } else {
        listCategories.forEach((item) => {
          if (item.slug === catCard.catname) {
            parentCategory = item.id;
          }
          if (item?.sub_cat?.find((i) => i.slug === catCard.subcat)?.category) {
            subcategory = item?.sub_cat?.find(
              (i) => i.slug === catCard.subcat
            )?.id;
          }
        });

        const response = await customFetch.get(
          `/website/all-post/${offset}/${parentCategory}/${subcategory}`
        );
        dispatch(setAllPosts(response?.data?.data?.rows || [])); // Default to empty array
        setTotalCount(response?.data?.result?.rows?.countId || 0); // Default to 0
      }
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [catCard]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const pageCount = Math.ceil(totalCount / 5);

  const handlePageChange = useCallback((page, offset) => {
    fetchData(offset);
    setCurrentOffset(offset);
    setCurrentPage(page);
  }, []);

  if (allPosts.length === 0) {
    return (
      <div>
        <h1>No Product found with your input search queries</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-grid"
          role="tabpanel"
          aria-labelledby="nav-grid-tab"
          tabIndex="0"
        >
          <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
            {allPosts.map((post) => {
              const imagePath = post.image_path
                ? `${import.meta.env.VITE_BASE_URL}/${post.image_path}`
                : product1;

              const postTitle =
                post.title?.length > 15
                  ? post.title.substring(0, 15) + "..."
                  : post.title;

              return (
                <article key={post.id}>
                  <Link
                    to={`/post/${encParam(String(post.id))}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="service-card bg-white"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="linear"
                    >
                      <div className="position-relative">
                        <img
                          src={imagePath}
                          className="recently-view-card-img w-100"
                          width={200}
                          height={250}
                          alt={"Post Image"}
                        />
                        <button className="service-card-wishlist-btn">
                          <FaRegHeart />
                        </button>
                      </div>
                      <div className="service-card-content">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="job-post-subtitle fw-bold">
                              {`₹${post.price}`}
                            </h3>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <FaStar />
                            <span className="service-card-rating">
                              4.8 (2k)
                            </span>
                          </div>
                        </div>
                        <h3 className="service-card-title fw-semibold">
                          {postTitle || "Brote - Cleaning Service Elementor"}
                        </h3>
                        <div className="d-flex align-items-center service-card-author">
                          <img
                            src={
                              post.authorImage || "assets/img/avatar/u-sm-1.png"
                            }
                            className="service-card-author-img"
                            alt={post.author || "Author Image"}
                          />
                          <Link
                            to="/freelancer-details"
                            className="service-card-author-name"
                          >
                            {post.author || "Post BY"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <PaginationContainer
        pageCount={pageCount}
        currentPage={currentPage}
        currentOffset={currentOffset}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default ProductCard;
