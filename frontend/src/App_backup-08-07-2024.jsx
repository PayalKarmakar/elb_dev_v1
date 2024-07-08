import { useEffect, useState } from "react";
import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as Elb from "./pages";
import { store } from "./store";

import Login from "./components/website/Login";
import Signup from "./components/website/Signup";

// Actions ------
import { action as loginAction } from "./components/website/Login";
import { action as registerAction } from "./components/website/Signup";
import { action as forgotPasswordAction } from "./pages/admin/auth/ForgotPassword";

// Loaders ------
import { loader as layoutLoader } from "./pages/Layout";
import { loader as adminLoader } from "./pages/admin/LayoutAdmin";
import { loader as websiteLoader } from "./pages/website/LayoutWebsite";
import { Changepassaction } from "./pages/admin/profile/ChangePassword";
import { loader as postlayoutLoader } from "./pages/website/user/LayoutUser";

const router = createBrowserRouter([
  {
    path: "sign-in",
    element: <Login />,
    errorElement: <Elb.Error />,
    action: loginAction,
  },
  {
    path: "sign-up",
    element: <Signup />,
    errorElement: <Elb.Error />,
    action: registerAction,
  },
  {
    path: "/",
    element: <Elb.Layout />,
    errorElement: <Elb.Error />,
    loader: layoutLoader(store),
    children: [
      {
        path: ":slug?",
        element: <Elb.LayoutWebsite />,
        loader: websiteLoader(store),
        children: [
          { index: true, element: <Elb.Landing /> },
          { path: "about", element: <Elb.WebsiteAbout /> },
          { path: ":catname/:subcat?", element: <Elb.ProductList /> },
        ],
      },
      // Admin Routes
      {
        path: "admin",
        element: <Elb.LayoutAdmin />,
        children: [],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

/* ---

Layout / path /
LayoutWebsite   LayoutAdmin
index: true     path: admin
*/
