import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { splitErrors } from "../../../utils/showErrors";
import customFetch from "../../../utils/customFetch";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md"; // Adjusted import

export const Changepassaction = async ({ request }) => {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post(`/auth/change-password`, data);

    toast.success(`Password Changed `);
    request.preventDefault();
  } catch (error) {
    splitErrors(error?.response?.data?.data);
    return error;
  }
};

const ChangePassword = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const uuid = currentUser.currentUser.uuid;

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    uuid: uuid,
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case "current":
        setShowCurrentPassword((prevShow) => !prevShow);
        break;
      case "new":
        setShowNewPassword((prevShow) => !prevShow);
        break;
      case "confirm":
        setShowConfirmPassword((prevShow) => !prevShow);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div
            className="card"
            style={{ marginTop: "82px", marginBottom: "40px" }}
          >
            <div className="card-body">
              <Form method="post" autoComplete="off">
                <input type="hidden" name="uuid" value={form.uuid} />
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      className="form-control"
                      id="currentPassword"
                      name="currentPassword"
                      value={form.currentPassword}
                      placeholder="Enter your current password"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => togglePasswordVisibility("current")}
                    >
                      {showCurrentPassword ? (
                        <MdOutlineVisibilityOff /> // Changed to MdOutlineVisibilityOff
                      ) : (
                        <MdOutlineRemoveRedEye />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      value={form.newPassword}
                      placeholder="Enter your new password"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => togglePasswordVisibility("new")}
                    >
                      {showNewPassword ? (
                        <MdOutlineVisibilityOff /> // Changed to MdOutlineVisibilityOff
                      ) : (
                        <MdOutlineRemoveRedEye />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      placeholder="Confirm your new password"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => togglePasswordVisibility("confirm")}
                    >
                      {showConfirmPassword ? (
                        <MdOutlineVisibilityOff /> // Changed to MdOutlineVisibilityOff
                      ) : (
                        <MdOutlineRemoveRedEye />
                      )}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Change Password
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
