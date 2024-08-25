import { useState, useEffect } from "react";
import useAddressinfo from "../../hooks/fetchPincode"; // Custom hook to fetch address info
import { nanoid } from "nanoid";

const Getaddress = ({ pincode, onPincodeChange }) => {
  // Initialize form state with pincode passed from props
  const [form, setForm] = useState({
    pin: pincode || "", // Initialize with pincode prop or empty string
    po: "",
    dist: "",
    state: "",
  });
  const [errors, setErrors] = useState({
    pin: "",
  });
  const [address, setAddress] = useState([]);

  // Update form state when pincode prop changes
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      pin: pincode || "", // Update pin in form state when pincode prop changes
    }));
  }, [pincode]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin") {
      const pinInt = parseInt(value, 10); // Convert to integer
      if (value.length !== 6 || isNaN(pinInt)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: "Pin code must be a 6-digit number.",
        }));
        setAddress([]); // Clear address if pin code is invalid
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: "",
        }));
        onPincodeChange(pinInt); // Update pincode in the parent component as an integer
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const pin_code_string = String(form.pin);
  // Fetch address data when pincode changes
  const fetchedAddress = useAddressinfo(pin_code_string);

  useEffect(() => {
    if (pin_code_string.length === 6 && fetchedAddress.data) {
      setAddress(fetchedAddress.data);
    } else {
      setAddress([]); // Clear address if no valid data
    }
  }, [form.pin, fetchedAddress.data]);

  return (
    <>
      <div className="col-md-6">
        <div className="form-container">
          <label className="form-label" htmlFor="pin">
            Pin Code
            <span className="text-lime-300">*</span>
          </label>
          <input
            type="text"
            className={`form-control shadow-none ${
              errors.pin ? "is-invalid" : ""
            }`}
            placeholder="Enter pin code"
            name="pin"
            id="pin"
            value={form.pin}
            onChange={handleChange}
          />
          {errors.pin && <div className="invalid-feedback">{errors.pin}</div>}
        </div>
      </div>

      {/* Render address fields only if address data is available */}
      {address.length > 0 && (
        <>
          <div className="col-md-6">
            <div className="form-container">
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
          </div>

          {form.po && (
            <div className="col-md-6">
              <div className="form-container">
                <label className="form-label required" htmlFor="dist">
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
            </div>
          )}

          {form.dist && (
            <div className="col-md-6">
              <div className="form-container">
                <label className="form-label required" htmlFor="state">
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
                      (i) => i.District === form.dist && i.Name === form.po
                    )
                    .map((i) => (
                      <option key={nanoid()} value={i.State}>
                        {i.State}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Getaddress;
