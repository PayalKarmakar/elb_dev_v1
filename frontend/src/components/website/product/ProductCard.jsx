import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customFetch from "../../../utils/customFetch";
import { splitErrors } from "../../../utils/showErrors";
import { setAllPosts } from "../../../feature/postSlice";
import product1 from "../../../assets/website/img/job/product-1.jpg";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ListPagination from "../PaginationContainer";
import PaginationContainer from "../PaginationContainer";
import TextTruncate from "react-text-truncate";

const ProductCard = ({ catCard }) => {
  const { allPosts } = useSelector((store) => store.posts);
  const { listCategories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const [totalCount, setTotalCount] = useState();

  const fetchData = async (offset = 0) => {
    try {
      let parentCategory = "";
      let subcategory = "";

      if (catCard.catname === "all") {
        const response = await customFetch.get(`/website/all-post/${offset}`);

        dispatch(setAllPosts(response?.data?.data?.rows));
        setTotalCount(response?.data?.result?.rows[0].countid);
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
        // console.log(`${parentCategory} || ${subcategory}`);
        // console.log(response?.data?.data?.rows);
        dispatch(setAllPosts(response?.data?.data?.rows));
        setTotalCount(response?.data?.result?.rows?.countId);
      }
    } catch (error) {
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };

  // console.log(allPosts);

  useEffect(() => {
    fetchData();
  }, [catCard]); // Dependency array to re-fetch data when catCard changes

  const clearSlug = (path) => {
    if (!path) return "";
    const basePath = import.meta.env.VITE_BASE_URL;
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    return `${basePath}${filename}`;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const pageCount = Math.ceil(totalCount / 5);

  const handlePageChange = useCallback((page, offset) => {
    // console.log(page);
    // console.log(offset);
    fetchData(offset);

    // fetchData(offset);
    setCurrentOffset(offset);
    setCurrentPage(page);
  });
  let path = "";
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

              const postTitle = (
                <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={post.title}
                  //textTruncateChild={<a href="#">Read on</a>}
                />
              );
              return (
                <article key={nanoid()}>
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
                          <span className="service-card-rating">4.8 (2k)</span>
                        </div>
                      </div>
                      <h3 className="service-card-title fw-semibold">
                        <Link to="/service-details">
                          {postTitle || "Brote - Cleaning Service Elementor"}
                        </Link>
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
