import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import RestaurantMenu from "./Pages/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:menuId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
