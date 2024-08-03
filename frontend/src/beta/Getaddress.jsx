import { useState } from "react";
import useAddressinfo from "../hooks/fetchPincode";

export default function Getaddress() {
  const [pincode, setPincode] = useState("");
  const { data: address, loading, error } = useAddressinfo(pincode);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The hook will automatically fetch data based on pincode change
  };

  return (
    <>
      <div className="row justify-content-center" style={{ marginTop: 204 }}>
        <div className="col-xl-12">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-4">
              <div className="gig-info-card">
                <div className="gig-info-header">
                  <h4 className="text-18 fw-semibold text-dark-300">
                    FETCH ADDRESS
                  </h4>
                </div>
                <div className="gig-info-body bg-white" style={{ marginTop: 100 }}>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-container">
                        <label htmlFor="pincode" className="form-label">
                          PIN CODE*
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter Pincode"
                        />
                       
                        {loading && <p>Loading...</p>}
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {address && (
                          <div className="address-result">
                         <table border={1}>
                          <tr>
                            <td>Circle:</td>
                            <td>{address[0].Circle}</td>
                          </tr>
                          <tr>
                            <td>District:</td>
                            <td>{address[0].District}</td>
                          </tr>
                           <tr>
                            <td>Region:</td>
                            <td>{address[0].Region}</td>
                          </tr>
                           <tr>
                            <td>Block:</td>
                            <td>{address[0].Block}</td>
                          </tr>
                           <tr>
                            <td>State:</td>
                            <td>{address[0].State}</td>
                          </tr>
                           <tr>
                            <td>Country:</td>
                            <td>{address[0].Country}</td>
                          </tr>
                          </table>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
