import React, { useEffect, useState } from "react";
import {
  ActivateUser,
  PageHeader,
  PageWrapper,
  PaginationContainer,
  TableLoader,
} from "../../../components";
import { Form, Link, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoReloadSharp } from "react-icons/io5";
import { nanoid } from "nanoid";
import {
  dateFormatFancy,
  serialNo,
  switchColor,
} from "../../../utils/functions";
import { MdModeEdit, MdRemoveRedEye } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { setListPosts } from "../../../feature/postSlice";
import postImg from "../../../assets/admin/static/login-bg.jpg";

const PostList = () => {
  document.title = `List of All Posts | ${import.meta.env.VITE_APP_TITLE}`;
  const dispatch = useDispatch();
  const { listPosts } = useSelector((store) => store.posts);
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useParams();
  const queryParams = new URLSearchParams(search);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await customFetch.get(`/posts/posts`);

      dispatch(setListPosts(response?.data?.data?.rows));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      splitErrors(error?.response?.data?.msg);
      return error;
    }
  };
  console.log(listPosts);

  const totalPages = 100;
  const currentPage = 1;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <PageHeader title={`List of All Posts`} />
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <Link
                    className="btn btn-success d-none d-sm-inline-block me-2"
                    to={`/admin/posts/add`}
                  >
                    Add new
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageWrapper>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              Total 100 posts found
              <div className="col-auto ms-auto d-print-none">
                <Form method="GET">
                  <div className="btn-list">
                    <span className="d-none d-sm-inline">
                      <div className="input-icon">
                        <select
                          className="form-select"
                          name="r"
                          id="searchSelect"
                          style={{ minWidth: "200px" }}
                        >
                          <option value="">Select</option>
                        </select>
                      </div>
                    </span>
                    <span className="d-none d-sm-inline">
                      <div className="input-icon">
                        <input
                          type="text"
                          name="s"
                          className="form-control"
                          placeholder="Search by name..."
                        />
                      </div>
                    </span>
                    <span className="d-none d-sm-inline">
                      <button
                        type="submit"
                        className="btn btn-primary d-none d-sm-inline-block me-2"
                      >
                        <IoIosSearch className="fs-3" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-default d-none d-sm-inline-block"
                      >
                        <IoReloadSharp className="fs-3" />
                      </button>
                    </span>
                  </div>
                </Form>
              </div>
            </div>

            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table table-vcenter datatable table-hover table-bordered card-table fs-5">
                  <thead>
                    <tr>
                      <th className="bg-dark text-white">SL. NO.</th>
                      <th className="bg-dark text-white">(Image)</th>
                      <th className="bg-dark text-white">Posted By</th>
                      <th className="bg-dark text-white">Category</th>
                      <th className="bg-dark text-white">Sub-category</th>
                      <th className="bg-dark text-white">Title</th>
                      <th className="bg-dark text-white">Created At</th>
                      <th className="bg-dark text-white"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td colSpan={7}>
                          <TableLoader />
                        </td>
                      </tr>
                    ) : listPosts.length > 0 ? (
                      <>
                        {listPosts.map((i, index) => {
                          return (
                            <tr key={nanoid()}>
                              <td>
                                {serialNo(queryParams.get("page")) + index}.
                              </td>
                              <td>
                                <img src={postImg} alt="" className="avatar" />
                              </td>
                              <td>{`${i?.user?.first_name?.toUpperCase()} ${i?.user?.last_name?.toUpperCase()}`}</td>
                              <td>{i?.category}</td>
                              <td>{i?.scat}</td>
                              <td>
                                {i?.title?.length > 20
                                  ? i?.title?.slice(0, 20) + ` ...`
                                  : i?.title}
                              </td>
                              <td>{dateFormatFancy(i.created_at)}</td>
                              <td className="text-nowrap">
                                <>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm me-2"
                                  >
                                    <MdRemoveRedEye size={14} />
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-yellow btn-sm me-2"
                                  >
                                    <MdModeEdit size={14} />
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                  >
                                    <FaRegTrashAlt size={14} />
                                  </button>
                                </>
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td colSpan={8} className="text-center">
                            NO DATA FOUND
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <PaginationContainer pageCount={totalPages} currentPage={currentPage} />
      </PageWrapper>
    </>
  );
};

export default PostList;
