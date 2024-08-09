import { useState, useEffect } from 'react';
import useAddressinfo from "./../hooks/fetchPincode"; // Custom hook to fetch address info
import { nanoid } from 'nanoid';

const Getaddress = () => {
  // State to manage the form data
  const [form, setForm] = useState({
    pin: '',
    po: '',
    dist: '',
    state: ''
  });
    const [errors, setErrors] = useState({
    pin: ''
  });

  // State to store the fetched address data
  const [address, setAddress] = useState([]);

  // Handler for input change
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'pin') {
      if (value.length !== 6 || isNaN(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: 'Pin code must be a 6-digit number.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pin: ''
        }));
      }
    }
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  // Fetch address information using the custom hook
  const fetchedAddress = useAddressinfo(form.pin);

  // Effect to update address state based on the pin code length
  useEffect(() => {
    if (form.pin.length === 6) {
      setAddress(fetchedAddress); // Ensure fetchedAddress has a .data property
    } else {
      setAddress([]); // Clear the address if the pin is not valid
    }
  }, [form.pin]); // Include fetchedAddress in the dependency array

  return (
    <section className="py-110 bg-offWhite">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 p-3 p-lg-5 offset-lg-3">
            <div 
              className="bg-white rounded-3 p-4" 
              style={{ marginTop: '81px' }}
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
                        className={`form-control ${errors.pin ? 'is-invalid' : ''}`}
                        placeholder="Enter pin code"
                        name="pin"
                        id="pin"
                        value={form.pin}
                        onChange={handleChange}
                      />
                      {errors.pin && (
                        <div className="invalid-feedback">
                          {errors.pin}
                        </div>
                      )}
                    </div>

                    {/* Conditionally render the PO selection dropdown if pin is valid and address data is available */}
                    {form.pin.length === 6 && (
                      <div className="col-md-6">
                        <label className="form-label required" htmlFor="po">
                          Select Post
                        </label>
                        <select
                          className="form-control"
                          name="po"
                          id="po"
                          value={form.po}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          {address?.data?.map((i) => (
                            <option key={nanoid()} value={i.Name}>
                              {i.Name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Conditionally render the District selection dropdown if PO is selected */}
                    {form.po && (
                      <div className="col-md-6">
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
                          {address?.data?.filter((i) => i.Name === form.po).map((i) => (
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
                          {address?.data?.filter((i) => i.District === form.dist && i.Name === form.po).map((i) => (
                            <option key={nanoid()} value={i.State}>
                              {i.State}
                            </option>
                          ))}
                        </select>
                      </div>
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
