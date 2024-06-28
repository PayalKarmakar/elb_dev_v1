import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FilterLocation from "./FilterLocation";
import FilterCategories from "./FilterCategories";
import { useDispatch, useSelector } from "react-redux";
import { setLocationModal } from "../../../feature/website/search/searchSlice";

const TopSearch = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setLocationModal());
  };

  const [locationLabel, setLocationLabel] = useState(`Location`);
  const { topLocations, searchLocation } = useSelector(
    (store) => store.locations
  );
  const { searchCategories } = useSelector((store) => store.categories);
  console.log(searchCategories);

  const selectedLoc =
    searchLocation && topLocations?.find((i) => i.id === searchLocation);

  useEffect(() => {
    setLocationLabel(selectedLoc?.city || `Location`);
  }, [selectedLoc]);

  return (
    <>
      <Form method="get">
        <div className="hero-form-wrapper bg-white d-flex position-relative">
          <div>
            <button
              type="button"
              className="form-select shadow-none border-right-grey"
              name="loc"
              onClick={openModal}
            >
              {locationLabel}
            </button>
          </div>
          <div>
            <select
              className="form-select shadow-none categorysearch"
              name="cat"
            >
              <option value="0">All Categories</option>
              <option value="1">Cars</option>
              <option value="2">Mobiles</option>
              <option value="3">Camera</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="search"
              className="form-control shadow-none"
              placeholder="Search for any service..."
            />
            <button type="submit" className="hero-form-btn position-absolute">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 17L14 13"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </Form>
      <FilterLocation />
      <FilterCategories />
    </>
  );
};

export default TopSearch;
