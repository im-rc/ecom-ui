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
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="cart" element={<Cart />} />
      <Route path="cart/checkout" element={<Checkout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
