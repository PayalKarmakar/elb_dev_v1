import { useState, useEffect } from "react";
import useAddressinfo from "./../hooks/fetchPincode"; // Custom hook to fetch address info
import { nanoid } from "nanoid";

const Getaddress = () => {
  // State to manage the form data
  const [form, setForm] = useState({
    pin: "",
    po: "",
    dist: "",
    state: "",
  });
  const [errors, setErrors] = useState({
    pin: "",
  });

  // State to store the fetched address data
  const [address, setAddress] = useState(null);

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin") {
      if (value.length !== 6 || isNaN(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: "Pin code must be a 6-digit number.",
        }));
        setAddress(null); // Clear address data if PIN is invalid
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: "",
        }));
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Custom hook to fetch address data based on PIN
  const fetchedAddress = useAddressinfo(form.pin);

  useEffect(() => {
    if (form.pin.length === 6 && fetchedAddress.data) {
      console.log("Address fetched:", fetchedAddress.data);
      setAddress(fetchedAddress.data);
    } else {
      setAddress(null); // Clear address if PIN is not 6 digits
    }
  }, [form.pin, fetchedAddress.data]);

  return (
    <section className="py-110 bg-offWhite">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 p-3 p-lg-5 offset-lg-3">
            <div
              className="bg-white rounded-3 p-4"
              style={{ marginTop: "81px" }}
            >
              <div className="mb-40">
                <div className="form-container">
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label className="form-label required" htmlFor="pin">
                        Pin Code
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.pin ? "is-invalid" : ""
                        }`}
                        placeholder="Enter pin code"
                        name="pin"
                        id="pin"
                        value={form.pin}
                        onChange={handleChange}
                      />
                      {errors.pin && (
                        <div className="invalid-feedback">{errors.pin}</div>
                      )}
                    </div>

                    {/* Conditionally render the Post Office selection dropdown if PIN is valid and address data is available */}
                    {address && (
                      <>
                        <div className="col-md-6">
                          <label className="form-label required" htmlFor="po">
                            Select Post Office
                          </label>
                          <select
                            className="form-control"
                            name="po"
                            id="po"
                            value={form.po}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            {address.map((i) => (
                              <option key={nanoid()} value={i.Name}>
                                {i.Name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Conditionally render the District selection dropdown if PO is selected */}
                        {form.po && (
                          <div className="col-md-6">
                            <label
                              className="form-label required"
                              htmlFor="dist"
                            >
                              Select District
                            </label>
                            <select
                              className="form-control"
                              name="dist"
                              id="dist"
                              value={form.dist}
                              onChange={handleChange}
                            >
                              <option value="">Select</option>
                              {address
                                .filter((i) => i.Name === form.po)
                                .map((i) => (
                                  <option key={nanoid()} value={i.District}>
                                    {i.District}
                                  </option>
                                ))}
                            </select>
                          </div>
                        )}

                        {/* Conditionally render the State selection dropdown if District is selected */}
                        {form.dist && (
                          <div className="col-md-6">
                            <label
                              className="form-label required"
                              htmlFor="state"
                            >
                              Select State
                            </label>
                            <select
                              className="form-control"
                              name="state"
                              id="state"
                              value={form.state}
                              onChange={handleChange}
                            >
                              <option value="">Select</option>
                              {address
                                .filter(
                                  (i) =>
                                    i.District === form.dist &&
                                    i.Name === form.po
                                )
                                .map((i) => (
                                  <option key={nanoid()} value={i.State}>
                                    {i.State}
                                  </option>
                                ))}
                            </select>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getaddress;
