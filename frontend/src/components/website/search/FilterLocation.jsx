import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { unsetLocationModal } from "../../../feature/website/search/searchSlice";
import SubmitBtn from "../../admin/SubmitBtn";

const FilterLocation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { locationModal } = useSelector((store) => store.search);

  const handleClose = () => {
    dispatch(unsetLocationModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal show={locationModal} size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search by Location</Modal.Title>
      </Modal.Header>
      <form method="post" onSubmit={handleSubmit}>
        <Modal.Body>
          <p>City blocks</p>
        </Modal.Body>
        <Modal.Footer>
          <SubmitBtn
            className={`btn btn-warning me-2`}
            text={`Search`}
            isLoading={isLoading}
          />
          <button
            type="button"
            className="btn btn-default"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default FilterLocation;
