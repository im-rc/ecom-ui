import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
