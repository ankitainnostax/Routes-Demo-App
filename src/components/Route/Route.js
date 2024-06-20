import React from "react";
import Home from "../contents/Home";
import RouteLayout from "./RouteLayout";
import Contact from "../contents/Contact";
import About from "../contents/About";
import {  createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/About/", element: <About /> },
    ],
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default router;
