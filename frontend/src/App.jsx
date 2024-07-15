import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Elb from "./pages";
import { store } from "./store";

import Login from "./components/website/Login";
import Signup from "./components/website/Signup";

// Actions ------
import { action as loginAction } from "./components/website/Login";
import { action as registerAction } from "./components/website/Signup";

// Loaders ------
import { loader as layoutLoader } from "./pages/Layout";
import { loader as adminLoader } from "./pages/admin/LayoutAdmin";
import { loader as websiteLoader } from "./pages/website/LayoutWebsite";
import { Changepassaction } from "./pages/admin/profile/ChangePassword";
import UserProfile from "./pages/website/user/UserProfile";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Elb.LayoutWebsite />,
    loader: websiteLoader(store),
    children: [
      {
        path: "sign-in",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "sign-up",
        element: <Signup />,
        action: registerAction,
      },
      {
        element: <Elb.LayoutWebsiteUser />,
        children: [
          { path: "", element: <Elb.Landing /> },
          { path: "about", element: <Elb.WebsiteAbout /> },
          {
            path: "/cat/:catname/:subcat?",
            element: <Elb.ProductList />,
          },
        ],
      },
      {
        element: <Elb.LayoutUser />,
        children: [
          { path: ":slug/create-post", element: <Elb.CreatePost /> },
          { path: ":slug/profile", element: <UserProfile /> },
        ],
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
