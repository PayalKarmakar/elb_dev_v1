import { useEffect, useState } from "react";
import FilterLocation from "./FilterLocation";
import FilterCategories from "./FilterCategories";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import {
  setLocationModal,
  setCategoryModal,
} from "../../../feature/website/search/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchLocation } from "../../../feature/masters/locationSlice";
import { setSearchCategory } from "../../../feature/masters/categorySlice";

const TopSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  // Local states start ------
  const [locationLabel, setLocationLabel] = useState(
    searchParams.get("loc") || "Location"
  );
  const [categoryLabel, setCategoryLabel] = useState(
    searchParams.get("cat") || "Category"
  );
  const [enteredSearch, setEnteredSearch] = useState(
    searchParams.get("search") || ""
  );
  // Local state ends ------

  const { searchLocation } = useSelector((store) => store.locations);
  const { searchCategory } = useSelector((store) => store.categories);

  // Handle modal opening starts ------
  const openModal = () => {
    dispatch(setLocationModal());
  };

  const catModal = () => {
    dispatch(setCategoryModal());
  };
  // Handle modal opening ends ------

  // Handle submit starts ------
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate(
      `/cat/search-value?loc=${locationLabel}&cat=${
        categoryLabel ? encodeURIComponent(categoryLabel) : ""
      }&search=${enteredSearch ? encodeURIComponent(enteredSearch) : ""}`
    );
  };
  // Handle submit ends ------

  useEffect(() => {
    setLocationLabel(searchParams.get("loc") || "Location");
    setCategoryLabel(searchParams.get("cat") || "Category");
    setEnteredSearch(searchParams.get("search") || "");

    searchLocation && dispatch(setSearchLocation(searchLocation));
    searchCategory && dispatch(setSearchCategory(searchCategory));
  }, [
    searchParams.get("loc"),
    searchParams.get("cat"),
    searchParams.get("search"),
  ]);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              value={enteredSearch}
              onChange={(e) => setEnteredSearch(e.target.value)}
            />
            <button type="submit" className="hero-form-btn position-absolute">
              <IoSearch />
              Search
            </button>
          </div>
        </div>
      </form>
      <FilterLocation
        setLocationLabel={setLocationLabel}
        locationLabel={locationLabel}
      />
      <FilterCategories
        setCategoryLabel={setCategoryLabel}
        categoryLabel={categoryLabel}
      />
    </>
  );
};

export default TopSearch;
