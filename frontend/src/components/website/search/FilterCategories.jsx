import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { unsetCategoryModal } from "../../../feature/website/search/searchSlice";
import { nanoid } from "nanoid";
import { setSearchCategory } from "../../../feature/masters/categorySlice";
import { MdBikeScooter,MdCategory,MdLaptopChromebook, MdOutlineChair } from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";
import { FaBook, FaCar, FaMobile ,FaHome } from "react-icons/fa";

const FilterCategories = () => {
  const dispatch = useDispatch();
  const { getCategories } = useSelector((store) => store.categories);
  const { categoryModal } = useSelector((store) => store.search);

  const handleClose = () => {
    dispatch(unsetCategoryModal());
  };

  const setCat = (id) => {
    dispatch(setSearchCategory(id));
    dispatch(unsetCategoryModal());
  };

  return (
    <Modal show={categoryModal} size="xl" centered onHide={handleClose}>     
      <Modal.Body>
        <div className="row justify-content-center cursor-pointer">
          {getCategories.map((i) => {
            return (
              // <Link
              //     key={nanoid()}
              //     to={i.slug}
              //     className="text-decoration-none"
              //   >  
              <div
                className="col-lg-3 col-sm-4 col-md-6 py-4"
                key={nanoid()}
                onClick={() => setCat(i.id)}
              >
                <div className="grid-cat">
                {i.slug == "bikes" ? (
                  <MdBikeScooter size={24} className="mx-auto d-block"/>
                ) : i.slug == "electronics-appliances" ? (
                  <MdLaptopChromebook size={24} className="mx-auto d-block" />
                ) : i.slug == "furniture" ? (
                  <MdOutlineChair size={24} className="mx-auto d-block" />
                ) : i.slug == "fashion" ? (
                  <GiAmpleDress size={24} className="mx-auto d-block" />
                ) : i.slug == "books-sports-hobbies" ? (
                  <FaBook size={24} className="mx-auto d-block" />
                ) : i.slug == "car" ? (
                  <FaCar size={24} className="mx-auto d-block" />
                ) : i.slug == "mobiles" ? (
                  <FaMobile size={24} className="mx-auto d-block"/>
                ) : (
                  <FaHome size={24} className="mx-auto d-block" />
                  )}                
                <p className="text-center fs-6 text-muted cat-text">{i.category}</p>
                </div>
              </div>
              // </Link>
            );
          })}
        </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default FilterCategories;
