import React from "react";
import { Outlet } from "react-router-dom";


import customFetch from "../../../utils/customFetch";
import { setAllCategories, setParentCategories } from "../../../feature/masters/categorySlice";
import { setCurrentUser } from "../../../feature/currentUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { splitErrors } from "../../../utils/showErrors";
import Sidebar from "../../../components/website/user/UserSidebar";
import UserHeader from "../../../components/website/user/UserHeader";
import UserDashHighlights from "../../../components/website/user/UserDashHighlights";



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
    <div className="d-xl-flex">
      <Sidebar/>
      <div class="flex-grow-1 align-items-center position-relative">
        <UserHeader/>
        <main class="dashboard-main min-vh-100">
          <div class="d-flex flex-column gap-4">
          {/* <!-- Page Header --> */}
          <div class="d-flex gap-4 flex-column flex-md-row align-items-md-center justify-content-between">
              <div>
                <h3 class="text-24 fw-bold text-dark-300 mb-2">Dashboard</h3>
                <ul class="d-flex align-items-center gap-2">
                  <li class="text-dark-200 fs-6">Dashboard</li>
                </ul>
              </div>
              <div>
                <a href="seller-create-gig.html" class="w-btn-secondary-lg">
                  Post Ad</a>
              </div>
          </div>
          {/* <!-- Page Header --> */}
          <UserDashHighlights/>
           <Outlet />
          </div>
        </main>
      </div>
     </div>     
    </>
  );
};

export default LayoutUser;

