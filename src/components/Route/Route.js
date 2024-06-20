import React from "react";
import Home from "../contents/Home"
import Navbar from "../contents/Navbar";
import RouteLayout from "./RouteLayout";
import Contact from"../contents/Contact"
import About from"../contents/About"
import { Link, createBrowserRouter } from "react-router-dom";
const router= createBrowserRouter([
    {
        path:"/",
        element:<RouteLayout/>,
        children:[
            {index:true,
                element:<Home/>
            }
        ]
    },{path:"/About",
        element:<RouteLayout/>,
        children:[
            { index:true,
                element:<About/>
            }
        ]

    },{
        path:"/Contact",
        element:<Contact/>,
    }
    
])

export default router;