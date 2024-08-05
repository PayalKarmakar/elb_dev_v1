import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { unsetLocationModal } from "../../../feature/website/search/searchSlice";
import { nanoid } from "nanoid";
// import * as iconcities from "../../../assets/website/img/features";
import iconkolkata from "../../../assets/website/img/features/kolkata.png";
import icondelhi from "../../../assets/website/img/features/icon-delhi2.png";
// import icondelhi from "../../../assets/website/img/features/icon-delhi.png";
import iconchennai from "../../../assets/website/img/features/icon-chennai.png";
import iconmumbai from "../../../assets/website/img/features/icon-mumbai2.png";
import iconbangalore from "../../../assets/website/img/features/icon-bangaluru.png";
import { setSearchLocation } from "../../../feature/masters/locationSlice";
import { FaCity } from "react-icons/fa";

const FilterLocation = () => {
  const dispatch = useDispatch();
  const { topLocations } = useSelector((store) => store.locations);
  const { locationModal } = useSelector((store) => store.search);

  const handleClose = () => {
    dispatch(unsetLocationModal());
  };

  const setSearch = (id) => {
    dispatch(setSearchLocation(id));
    dispatch(unsetLocationModal());
  };

  return (
    <Modal show={locationModal} size="lg" centered onHide={handleClose}>
      <Modal.Body>
        <div className="row justify-content-center cursor-pointer">
          {topLocations.map((i) => {
            return (
              <div
                className="col py-4"
                key={nanoid()}
                onClick={() => setSearch(i.id)}
              >
                <div className="grid-cat">
                  {i.id == 275 ? (
                    <img
                      src={iconkolkata}
                      style={{ width: 80, height: 80 }}
                      className="mx-auto d-block"
                      alt=""
                    />
                  ) : i.id == 142 ? (
                    <img
                      src={icondelhi}
                      style={{ width: 80, height: 80 }}
                      className="mx-auto d-block"
                      alt=""
                    />
                  ) : i.id == 344 ? (
                    <img
                      src={iconmumbai}
                      style={{ width: 80, height: 80 }}
                      className="mx-auto d-block"
                      alt=""
                    />
                  ) : i.id == 120 ? (
                    <img
                      src={iconchennai}
                      style={{ width: 80, height: 80 }}
                      className="mx-auto d-block"
                      alt=""
                    />
                  ) : (
                    <img
                      src={iconbangalore}
                      className="mx-auto d-block"
                      style={{ width: 80, height: 80 }}
                      alt=""
                    />
                    // <FaCity size={24} className="mx-auto d-block" />
                  )}
                  <p className="text-center fs-6 text-muted cat-text">
                    {i.city}
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
