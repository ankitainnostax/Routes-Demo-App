import { Outlet } from "react-router-dom"
import React from "react"
import Navbar from "../contents/Navbar";
import Footer from "../contents/Footer";
const RouteLayout=()=>(
<div className="">
    <Navbar/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
</div>
);
export default RouteLayout;
