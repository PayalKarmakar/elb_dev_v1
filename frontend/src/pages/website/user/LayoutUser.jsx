import React from "react";
import { Outlet } from "react-router-dom";


import customFetch from "../../../utils/customFetch";
import { setAllCategories, setParentCategories } from "../../../feature/masters/categorySlice";
import { setCurrentUser } from "../../../feature/currentUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { splitErrors } from "../../../utils/showErrors";



export const loader = (store) => async () => {
    const { currentUser } = store.getState().currentUser;
//   const { allCategories, parentCategories } = store.getState().categories;
//   const { allBrands } = store.getState().brands;
//   const { allStates } = store.getState().locations;
 
  try {
    if (!currentUser.first_name) {
        const response = await customFetch.get(`/auth/current-user`);
        store.dispatch(setCurrentUser(response.data.data.rows[0]));
        
      }
      
    // if (allCategories.length === 0) {
    //   const acategories = await customFetch.get(`/masters/categories/all`);
    //   store.dispatch(setAllCategories(acategories.data.data.rows));

    //   const pcategories = await customFetch.get(`/masters/categories/parents`);
    //   store.dispatch(setParentCategories(pcategories.data.data.rows));
    // }

    
    return null;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return redirect("/sign-in");
  }
  
};


const LayoutUser = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutUser;

