import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import customFetch from "../../../utils/customFetch";
import { splitErrors } from "../../../utils/showErrors";

export const Changepassaction = async (request) => {
  console.log(request.data);

  try {
    const response = await customFetch.post(
      "/auth/change-password",
      request.data
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    const result = response.data;
    console.log(result);
    // Handle success, e.g., navigate to another page or show a success message
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return error;
  }
};

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const currentUser = useSelector((state) => state.currentUser);
  const uuid = currentUser.currentUser.uuid;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("uuid", uuid);
    const data = Object.fromEntries(formData); // Convert FormData to object

    await Changepassaction({ data });
    // Add your navigation or success handling here, for example:
    // navigate('/success-page');
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
              <Form
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
                action="/auth/change-password"
              >
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="currentPassword"
                    value={form.currentPassword}
                    placeholder="Enter your current password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    value={form.newPassword}
                    placeholder="Enter your new password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    placeholder="Confirm your new password"
                    required
                    onChange={handleChange}
                  />
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
