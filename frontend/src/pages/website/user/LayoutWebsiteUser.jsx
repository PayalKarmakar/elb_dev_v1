import React from "react";
import { Outlet } from "react-router-dom";
import customFetch from "../../../utils/customFetch";
import { splitErrors } from "../../../utils/showErrors";
import { setListCategories } from "../../../feature/masters/categorySlice";

// Loader starts ------
export const loader = (store) => async () => {
  const { listCategories } = store.getState().categories;
  try {
    if (listCategories.length === 0) {
      const sCat = await customFetch.get(`/website/all-categories`);
      store.dispatch(setListCategories(sCat?.data?.data?.rows));
    }

    return null;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return null;
  }
};

const LayoutWebsiteUser = () => {
  return <Outlet />;
};

export default LayoutWebsiteUser;
