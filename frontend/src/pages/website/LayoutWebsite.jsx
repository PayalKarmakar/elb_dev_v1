import React from "react";
import { Outlet } from "react-router-dom";

import "../../assets/website/css/bootstrap.min.css";
import "../../assets/website/css/style.css";
import "../../assets/website/css/abc.css";
import "../../assets/website/css/resposive.css";

import { WbSecondNav, WbTopnav } from "../../components";
import WbFooter from "../../components/website/WbFooter";
import { splitErrors } from "../../utils/showErrors";
import customFetch from "../../utils/customFetch";
import { setTopLocations } from "../../feature/masters/locationSlice";
import {
  setGetCategories,
  setParentCategories,
} from "../../feature/masters/categorySlice";
import { setCurrentUser } from "../../feature/currentUserSlice";
import { setFeaturedPosts } from "../../feature/postSlice";

export const loader = (store) => async () => {
  const { topLocations } = store.getState().locations;
  const { getCategories } = store.getState().categories;
  const { currentUser } = store.getState().currentUser;
  const { featuredPosts } = store.getState().posts;

  try {
    if (topLocations.length === 0) {
      const tLoc = await customFetch.get(`/website/top-locations`);
      store.dispatch(setTopLocations(tLoc?.data?.data?.rows));
    }

    if (getCategories.length === 0) {
      const sCat = await customFetch.get(`/website/get-categories`);
      store.dispatch(setGetCategories(sCat?.data?.data?.rows));

      const pcategories = await customFetch.get(`/masters/categories/parents`);
      store.dispatch(setParentCategories(pcategories.data.data.rows));
    }

    if (localStorage.getItem("token")) {
      if (!currentUser.first_name) {
        const cuser = await customFetch.get(`/auth/current-user`);
        store.dispatch(setCurrentUser(cuser?.data?.data?.rows[0]));
      }
    }

    if (featuredPosts.length === 0) {
      const fPosts = await customFetch.get(`/website/featured-posts`);
      store.dispatch(setFeaturedPosts(fPosts?.data?.data?.rows));
    }

    return null;
  } catch (error) {
    splitErrors(error?.response?.data?.msg);
    return null;
  }
};

const LayoutWebsite = () => {
  return (
    <>
      <WbTopnav />
      <WbSecondNav />
      <main>
        <Outlet />
      </main>
      <WbFooter />
    </>
  );
};

export default LayoutWebsite;
