import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { unsetLocationModal } from "../../../feature/website/search/searchSlice";
import { nanoid } from "nanoid";
// import * as iconcities from "../../../assets/website/img/features";
import iconkolkata from "../../../assets/website/img/features/kolkata.png";
import iconkolkata2 from "../../../assets/website/img/features/kolkata2.png";
import icondelhi from "../../../assets/website/img/features/icon-delhi.png";
import icondelhi2 from "../../../assets/website/img/features/icon-delhi2.png";
import iconchennai from "../../../assets/website/img/features/icon-chennai.png";
import iconchennai2 from "../../../assets/website/img/features/icon-chennai2.png";
import iconmumbai from "../../../assets/website/img/features/icon-mumbai.png";
import iconmumbai2 from "../../../assets/website/img/features/icon-mumbai2.png";
import iconbangalore from "../../../assets/website/img/features/icon-bangaluru.png";
import iconbangalore2 from "../../../assets/website/img/features/icon-bangaluru2.png";
import { setSearchLocation } from "../../../feature/masters/locationSlice";
import { FaCity } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const locations = [
  { id: 275, city: "Kolkata", img: iconkolkata, activeImg: iconkolkata2 },
  { id: 142, city: "Delhi", img: icondelhi, activeImg: icondelhi2 },
  { id: 344, city: "Navi Mumbai", img: iconmumbai, activeImg: iconmumbai2 },
  { id: 120, city: "Chennai", img: iconchennai, activeImg: iconchennai2 },
  { id: 73, city: "Bengaluru", img: iconbangalore, activeImg: iconbangalore2 },
];

const FilterLocation = () => {
  const dispatch = useDispatch();

  const [filterCity, setFilterCity] = useState();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const { locationModal } = useSelector((store) => store.search);

  const handleClose = () => {
    dispatch(unsetLocationModal());
  };

  const setSearch = (id) => {
    dispatch(setSearchLocation(id));
    dispatch(unsetLocationModal());
  };

  useEffect(() => {
    setFilterCity(queryParams.get("loc"));
  }, [queryParams.get("loc")]);

  return (
    <Modal show={locationModal} size="lg" centered onHide={handleClose}>
      <Modal.Body>
        <div className="row justify-content-center cursor-pointer">
          {locations.map((location) => {
            return (
              <div
                className="col py-4"
                key={nanoid()}
                onClick={() => setSearch(location.id)}
              >
                <div className="grid-cat">
                  <img
                    src={
                      filterCity === location.city
                        ? location.activeImg
                        : location.img
                    }
                    style={{ width: 80, height: 80 }}
                    className="mx-auto d-block"
                    alt={location.id}
                  />
                  <p className="text-center fs-6 text-muted cat-text">
                    {location.city}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FilterLocation;
