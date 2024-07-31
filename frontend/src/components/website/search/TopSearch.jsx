import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FilterLocation from "./FilterLocation";
import FilterCategories from "./FilterCategories";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import {
  setLocationModal,
  setCategoryModal,
} from "../../../feature/website/search/searchSlice";

const TopSearch = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setLocationModal());
  };

  const catModal = () => {
    dispatch(setCategoryModal());
  };
  const [locationLabel, setLocationLabel] = useState(`Location`);
  const { topLocations, searchLocation } = useSelector(
    (store) => store.locations
  );
  const selectedLoc =
    searchLocation && topLocations?.find((i) => i.id === searchLocation);
  useEffect(() => {
    setLocationLabel(selectedLoc?.city || `Location`);
  }, [selectedLoc]);

  const [categoryLabel, setCategoryLabel] = useState(`Categories`);
  const { getCategories, searchCategory } = useSelector(
    (store) => store.categories
  );
  const selectedCat =
    searchCategory && getCategories?.find((i) => i.id === searchCategory);

  useEffect(() => {
    setCategoryLabel(selectedCat?.category || `Categories`);
  }, [selectedCat]);

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
            <button
              type="button"
              className="form-select shadow-none categorysearch"
              name="cat"
              onClick={catModal}
            >
              {categoryLabel}
            </button>
          </div>
          <div>
            <input
              type="text"
              name="search"
              className="form-control shadow-none"
              placeholder="Search for any service..."
            />
            <button type="submit" className="hero-form-btn position-absolute">
              <IoSearch />
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
