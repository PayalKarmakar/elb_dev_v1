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

export const loader = (store) => async () => {
  const { topLocations } = store.getState().locations;
  try {
    if (topLocations.length === 0) {
      const tLoc = await customFetch.get(`/website/top-locations`);
      console.log(tLoc);
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
