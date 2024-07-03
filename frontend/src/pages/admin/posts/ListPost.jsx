import { nanoid } from "nanoid";
import React, { useState } from "react";
import {
  dateFormatFancy,
  serialNo,
  switchColor,
} from "../../../utils/functions";
import { MdModeEdit, MdRemoveRedEye } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  ActivateUser,
  PageHeader,
  PageWrapper,
  TableLoader,
} from "../../../components";
import { Link } from "react-router-dom";

const ListPost = () => {
  document.title = `List of All Posts | ${import.meta.env.VITE_APP_TITLE}`;
  const [isLoading, setIsLoading] = useState(false);

  const listPosts = [];

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <PageHeader title={`List of All Posts`} />
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <Link to={`/admin/posts/add`}>
                    <button
                      type="button"
                      className="btn btn-success d-none d-sm-inline-block me-2"
                    >
                      Add new
                    </button>
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
            <div className="card-header">Total 10 users found</div>

            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table table-vcenter datatable table-hover table-bordered card-table fs-5">
                  <thead>
                    <tr>
                      <th className="bg-dark text-white">SL. NO.</th>
                      <th className="bg-dark text-white">Role</th>
                      <th className="bg-dark text-white">Name</th>
                      <th className="bg-dark text-white">Email</th>
                      <th className="bg-dark text-white">Mobile</th>
                      <th className="bg-dark text-white">Status</th>
                      <th className="bg-dark text-white">Joined</th>
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
                                <span
                                  key={nanoid()}
                                  className={`badge bg-${switchColor(
                                    i.role_id
                                  )}-lt me-1 my-1 fs-6`}
                                >
                                  {i?.role?.toUpperCase()}
                                </span>
                              </td>
                              <td>{`${i?.first_name?.toUpperCase()} ${i?.last_name?.toUpperCase()}`}</td>
                              <td>{i?.email}</td>
                              <td>{i?.mobile}</td>
                              <td>{isActive}</td>
                              <td>{dateFormatFancy(i.created_at)}</td>
                              <td className="text-nowrap">
                                {i?.is_active ? (
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
                                ) : (
                                  <ActivateUser id={i?.id} />
                                )}
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
      </PageWrapper>
    </>
  );
};

export default ListPost;
