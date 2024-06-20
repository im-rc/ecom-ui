import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import Checkout from "./app/features/checkout/Checkout.jsx";
import { ToastProvider, ToastPosition } from "@hanseo0507/react-toast";

//import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

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
  <Provider store={store}>
    <ToastProvider position={ToastPosition.bottomRight} duration={3000}>
      <RouterProvider router={router} />
    </ToastProvider>
  </Provider>
);
