import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Elb from "./pages";
import { store } from "./store";

import Login from "./components/website/Login";
import Signup from "./components/website/Signup";
import TestUpload from "./pages/website/user/post/TestUpload";

// Actions ------
import { action as loginAction } from "./components/website/Login";
import { action as registerAction } from "./components/website/Signup";
import { action as testUploadAction } from "./pages/website/user/post/TestUpload";
import { action as createPostAction } from "./pages/website/user/post/PostAd";

// Loaders ------
import { loader as layoutLoader } from "./pages/Layout";
import { loader as adminLoader } from "./pages/admin/LayoutAdmin";
import { loader as websiteLoader } from "./pages/website/LayoutWebsite";
import { loader as layoutUserLoader } from "./pages/website/user/LayoutUser";
import { loader as LayoutWebsiteUser } from "./pages/website/user/LayoutWebsiteUser";
import { Changepassaction } from "./pages/admin/profile/ChangePassword";
import UserProfile from "./pages/website/user/UserProfile";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Elb.LayoutWebsite />,
    loader: websiteLoader(store),
    children: [
      {
        path: "sign-in",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "sign-up",
        element: <Signup />,
        action: registerAction,
      },
      {
        element: <Elb.LayoutWebsiteUser />,
        loader: LayoutWebsiteUser(store),
        children: [
          { path: "", element: <Elb.Landing /> },
          { path: "about", element: <Elb.WebsiteAbout /> },
          {
            path: "cat/:catname/:subcat?",
            element: <Elb.ProductList />,
          },
          { path: "/post/:id", element: <Elb.PostView /> },
        ],
      },
      // {
      //   element: <Elb.LayoutUser />,
      //   children: [
      //     { path: ":slug/dashboard", element: <Elb.WebsiteUserDashboard /> },
      //     { path: ":slug/post-ad", element: <Elb.UserPostAd /> },
      //     { path: ":slug/profile", element: <Elb.WebsiteUserProfile /> },
      //   ],
      // },
    ],
  },
  {
    path: ":slug/",
    element: <Elb.LayoutUser />,
    loader: layoutUserLoader(store),
    children: [
      { path: "dashboard", element: <Elb.WebsiteUserDashboard /> },
      { path: "profile", element: <Elb.WebsiteUserProfile /> },
      {
        path: "post-ad",
        element: <Elb.UserPostAd />,
        action: createPostAction,
      },
      {
        path: "test-upload",
        element: <TestUpload />,
        action: testUploadAction,
      },
    ],
  },

  // Admin routes ------
  {
    path: "sign-in-dev",
    element: <Elb.Login />,
    action: loginAction,
  },
  {
    path: "sign-up",
    element: <Signup />,
    action: registerAction,
  },

  // Admin Routes
  {
    element: <Elb.Layout />,
    loader: layoutLoader(store),
    children: [
      {
        path: "admin",
        element: <Elb.LayoutAdmin />,
        loader: adminLoader(store),
        children: [
          { path: "dashboard", element: <Elb.AdminDashboard /> },
          { path: "users", element: <Elb.UserList /> },
          { path: "users/:uuid", element: <Elb.UserView /> },
          {
            path: "masters",
            children: [
              { path: "categories", element: <Elb.Categories /> },
              { path: "brands", element: <Elb.Brands /> },
              { path: "models", element: <Elb.BrandModels /> },
              { path: "locations", element: <Elb.Locations /> },
              { path: "form-fields", element: <Elb.FormFields /> },
            ],
          },
          {
            path: "posts",
            children: [
              { index: true, element: <Elb.PostList /> },
              { path: "add", element: <Elb.PostAdd /> },
              { path: "edit/:id", element: <Elb.PostEdit /> },
            ],
          },
        ],
      },
      {
        path: "change-password",
        element: <Elb.ChangePassword />,
        action: Changepassaction,
      },
      { path: "profile", element: <Elb.Profile /> },
      { path: "forbidden", element: <Elb.Forbidden /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
