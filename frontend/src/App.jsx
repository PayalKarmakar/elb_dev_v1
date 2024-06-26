import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as Elb from "./pages";
import { store } from "./store";
import Landing from "./pages/website/Landing";

// Actions ------
import { action as loginAction } from "./components/website/Login";
import { action as registerAction } from "./components/website/Signup";
import { action as forgotPasswordAction } from "./pages/admin/auth/ForgotPassword";

// Loaders ------
import { loader as layoutLoader } from "./pages/admin/Layout";
import { loader as adminLoader } from "./pages/admin/LayoutAdmin";
import Login from "./components/website/Login";
import Signup from "./components/website/Signup";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../contexts/theme";

const router = createBrowserRouter([
  // Website routes ------
  {
    path: "/",
    element: <Elb.LayoutWebsite />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/about", element: <Elb.WebsiteAbout /> },
      {
        path: "/sign-in",
        element: <Login />,
        errorElement: <Elb.Error />,
        action: loginAction,
      },
      {
        path: "/sign-up",
        element: <Signup />,
        errorElement: <Elb.Error />,
        action: registerAction,
      },
    ],
  },
  // Admin routes ------
  {
    path: "/sign-in-dev",
    element: <Elb.Login />,
    errorElement: <Elb.Error />,
    action: loginAction,
  },

  {
    path: "/forgot-password",
    element: <Elb.ForgotPassword />,
    errorElement: <Elb.Error />,
    action: forgotPasswordAction,
  },
  {
    path: "/reset-password/:email/:token",
    element: <Elb.ResetPassword />,
    errorElement: <Elb.Error />,
  },
  {
    element: <Elb.Layout />,
    errorElement: <Elb.Error />,
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
        ],
      },
      {
        path: ":slug",
        element: <Elb.LayoutUser />,
        children: [{ path: "dashboard", element: <Elb.UserDashboard /> }],
      },
      { path: "change-password", element: <Elb.ChangePassword /> },
      { path: "profile", element: <Elb.Profile /> },
      { path: "forbidden", element: <Elb.Forbidden /> },
    ],
  },
]);

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
