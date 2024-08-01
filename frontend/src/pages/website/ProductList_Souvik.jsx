import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryHero from "../../components/website/product/CategoryHero";
import ProductCard from "../../components/website/product/ProductCard";
import { FaList } from "react-icons/fa";
import customFetch from "../../utils/customFetch";
import { nanoid } from "nanoid";
import PaginationContainer from "../../components/website/PaginationContainer";
import { FiGrid } from "react-icons/fi";

const ProductList = () => {
  const { catname, subcat } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await customFetch.get(
        `/website/all-posts/${catname}/${subcat}`,
        {
          params: {
            page: queryParams.get("page") || "",
            search: queryParams.get("s") || "",
          },
        }
      );
      setPosts(response.data.data.rows);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [catname, subcat, queryParams.get("page"), queryParams.get("s")]);

  return (
    <>
      <CategoryHero catSlug={{ catname: catname, subcat: subcat }} />

      <section className="py-110 bg-offWhite">
        <div className="container">
          <div className="row justify-content-between mb-40">
            <div className="col-xl-auto col-md-7 mt-4 mt-xl-0">
              <div className="d-inline-flex justify-content-lg-end gap-3 bg-white rounded-2 py-2 px-4 pe-2">
                <div className="d-flex align-items-center gap-2">
                  <label className="flex-shrink-0">Sort By:</label>
                  <select className="select-dropdown border-0 bg-offWhite shadow-none">
                    <option value="0">Most Relevant</option>
                    <option value="1">Top Seller</option>
                  </select>
                </div>
                <nav>
                  <div
                    className="freelancer-tab-nav d-flex gap-3 align-items-center"
                    id="nav-tab"
                  >
                    <button
                      className="freelancer-tab-link active"
                      id="nav-grid-tab"
                      type="button"
                    >
                      <FiGrid size={20} />
                    </button>
                    <button
                      className="freelancer-tab-link"
                      id="nav-list-tab"
                      type="button"
                    >
                      <FaList size={20} />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <section>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-grid">
                <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
                  {posts?.map((post) => {
                    return <ProductCard key={nanoid()} post={post} />;
                  })}
                </div>
              </div>
            </div>
          </section>
          {/*  */}
        </div>

        <PaginationContainer pageCount={10} currentPage={1} />
      </section>
    </>
  );
};

export default ProductList;
