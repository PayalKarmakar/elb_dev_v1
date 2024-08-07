import { useEffect, useState } from "react";
import FilterLocation from "./FilterLocation";
import FilterCategories from "./FilterCategories";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import {
  setLocationModal,
  setCategoryModal,
} from "../../../feature/website/search/searchSlice";
import { useNavigate } from "react-router-dom";

const TopSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use the useNavigate hook here

  const openModal = () => {
    dispatch(setLocationModal());
  };

  const catModal = () => {
    dispatch(setCategoryModal());
  };

  const [locationLabel, setLocationLabel] = useState("Location");

  const { topLocations, searchLocation } = useSelector(
    (store) => store.locations
  );

  const selectedLoc =
    searchLocation && topLocations?.find((i) => i.id === searchLocation);

  useEffect(() => {
    setLocationLabel(selectedLoc?.city || "Location");
  }, [selectedLoc]);

  const [categoryLabel, setCategoryLabel] = useState("Categories");
  const { getCategories, searchCategory } = useSelector(
    (store) => store.categories
  );

  const selectedCat =
    searchCategory && getCategories?.find((i) => i.id === searchCategory);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData);
    data = {
      ...data,
      catId: selectedCat ? selectedCat.id : "",
      locationId: selectedLoc ? selectedLoc.id : "",
    };
    let searchItem = JSON.stringify(data);
    localStorage.setItem("searchItem", searchItem);

    // Construct redirect URL starts ------
    const searchLoc =
      locationLabel && locationLabel !== "Location"
        ? `loc=${locationLabel.trim()}`
        : "";

    const searchCat =
      categoryLabel && categoryLabel !== "Categories"
        ? `cat=${categoryLabel.trim()}`
        : "";

    const searchString =
      searchLoc || searchCat ? `?${searchLoc}${searchCat}` : "";
    // Construct redirect URL ends ------

    navigate(`/cat/search-value${searchString}`);
  };

  useEffect(() => {
    setCategoryLabel(selectedCat?.category || "Categories");
  }, [selectedCat]);

  return (
    <>
      <form method="get" onSubmit={handleSubmit}>
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
      </form>
      <FilterLocation />
      <FilterCategories />
    </>
  );
};

export default TopSearch;
