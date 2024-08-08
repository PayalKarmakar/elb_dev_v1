import { useEffect, useState } from "react";
import customFetch from "../../../utils/customFetch";
import { nanoid } from "nanoid";

const UserLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [userState, setUserState] = useState();
  const [cities, setCities] = useState([]);
  const [userCity, setUserCity] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await customFetch.get(`/masters/locations/states`);
      setStates(response.data.data.rows);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getCities = async (val) => {
    setIsLoading(true);
    const stateCode = val;
    setUserState(stateCode);
    try {
      const response = await customFetch.get(
        `/website/get-cities/${stateCode}`
      );
      setCities(response.data.data.rows);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="col-md-6">
        <div className="form-container">
          <label className="form-label required">State</label>
          <select
            className="form-select shadow-none"
            name="userState"
            value={userState}
            onChange={(e) => getCities(e.target.value)}
          >
            <option value="">- Select -</option>
            {states?.map((state) => {
              return (
                <option key={state.state_code} value={state.state_code}>
                  {state.state}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-container">
          <label className="form-label required">City</label>
          <select
            className="form-select shadow-none"
            name="userCity"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
          >
            <option value="">- Select -</option>
            {cities?.map((city) => {
              return (
                <option key={nanoid()} value={city.id}>
                  {city.city}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};
export default UserLocation;
