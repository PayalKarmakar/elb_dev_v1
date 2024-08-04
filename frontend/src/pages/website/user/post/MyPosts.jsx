import { Suspense, useEffect, useState } from "react";
import { UserPaginationContainer, UserPostCount } from "../../../../components";
import customFetch from "../../../../utils/customFetch";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { postStatusBadge } from "../../../../utils/functions";
import ImageLoading from "../../../../components/website/ImageLoading";

const MyPosts = () => {
  document.title = `My Posts | ${import.meta.env.VITE_APP_TITLE}`;
  const [isLoading, setIsLoading] = useState(false);
  const [meta, setMeta] = useState();
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await customFetch.get(`/users/my-posts`, {
        params: {
          filter: queryParams.get("f") || "all",
          page: queryParams.get("page") || "",
        },
      });
      setPosts(response.data.data.rows);
      setMeta(response.data.meta);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const totalPages = meta?.totalPages;
  const currentPage = meta?.currentPage;
  const totalRecords = meta?.totalRecords;

  useEffect(() => {
    fetchData();
  }, [queryParams.get("f"), queryParams.get("page")]);

  return (
    <>
      <div>
        {/* <!-- Tab Nav --> */}
        <UserPostCount />
        {/* <!-- Tab Content --> */}
        <div className="tab-content mt-4" id="nav-tabContent">
          {/* <!-- All --> */}
          <div className="tab-pane fade show active">
            <div>
              <div className="overflow-x-auto">
                <table className="w-100 dashboard-table">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col">Post Title</th>
                      <th scope="col">Price Set</th>
                      <th scope="col">Status</th>
                      <th scope="col">Posted On</th>
                      <th scope="col" className="ps-5 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center">
                          <p>No data found</p>
                        </td>
                      </tr>
                    ) : (
                      posts.map((post) => {
                        const {
                          title,
                          price,
                          is_sold,
                          is_blocked,
                          updated_at,
                        } = post;

                        const { badge, label } = postStatusBadge({
                          is_sold,
                          is_blocked,
                        });

                        const image = post?.image_path?.startsWith("https")
                          ? post.image_path
                          : `${import.meta.env.VITE_BASE_URL}/${
                              post.image_path
                            }`;

                        return (
                          <tr key={nanoid()}>
                            <td>
                              <div className="d-flex gap-3 align-items-center project-name">
                                <Suspense fallback={<ImageLoading />}>
                                  <div className="rounded-3">
                                    <img src={image} alt="" loading="lazy" />
                                  </div>
                                </Suspense>
                                <div title={title}>
                                  <p className="text-dark-200">
                                    {title.length > 30
                                      ? title.substr(0, 30) + ` ...`
                                      : title}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="text-dark-200">{price}</td>
                            <td>
                              <span className={`status-badge ${badge}`}>
                                {label}
                              </span>
                            </td>
                            <td className="text-dark-200">
                              {dayjs(new Date(updated_at)).format(
                                `MMM D, YYYY`
                              )}
                            </td>
                            <td>
                              <div className="d-flex justify-content-end gap-2">
                                <button className="dashboard-action-btn">
                                  <FaRegEdit className="text-muted" size={20} />
                                </button>
                                <button className="dashboard-action-btn">
                                  <IoEyeOutline
                                    className="text-muted"
                                    size={24}
                                  />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              {/* <!-- Pagination --> */}
              <UserPaginationContainer
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;