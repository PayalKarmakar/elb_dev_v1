import React from "react";
import { Outlet } from "react-router-dom";

import "../../assets/website/css/bootstrap.min.css";
import "../../assets/website/css/style.css";
import "../../assets/website/css/abc.css";
import "../../assets/website/css/resposive.css";

import { WbSecondNav, WbTopnav } from "../../components";
import WbFooter from "../../components/website/WbFooter";

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
