import React, { useState } from "react";
import { Form } from "react-router-dom";
import customFetch from "../../../../utils/customFetch";
import { splitErrors } from "../../../../utils/showErrors";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("image");
  try {
    const response = await customFetch.post(`/posts/test-upload`, formData);
    return null;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    console.log(error);
    return null;
  }
};

const TestUpload = () => {
  const [form, setForm] = useState({ name: "", image: "" });

  return (
    <>
      <div className="mt-5"></div>
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <Form autoComplete="off" method="POST" encType="multipart/form-data">
            <div className="d-flex flex-column gap-4">
              <div className="gig-info-card">
                <div className="gig-info-header">
                  <h4 className="text-18 fw-semibold text-white">Post info</h4>
                </div>
                <div className="gig-info-card">
                  <div className="gig-info-body bg-white">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="form-container">
                          <label className="form-label required">
                            Test name
                          </label>
                          <input
                            type="text"
                            className="w-editor-wrapper"
                            placeholder="Brote - Cleanin Service Elementor Template Kit"
                            name="name"
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-container">
                          <label className="form-label required">
                            Test image
                          </label>
                          <input
                            type="file"
                            className="w-editor-wrapper"
                            name="image"
                            onChange={(e) =>
                              setForm({ ...form, image: e.target.files[0] })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default TestUpload;
