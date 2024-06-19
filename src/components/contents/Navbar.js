import React from 'react';

import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <div className="bg-blue-500 text-white p-4 flex flex-wrap gap-2 p-2 ">
        
       <div className="navbar-brand mb-0 h1">
           <Link to="/">Home</Link>
           </div>
           
           <div className="navbar-brand mb-0 h1">
           <Link to="/contact">Contact</Link>   
          </div>
          <div className="navbar-brand mb-0 h1">
           <Link to="/about">About</Link>
           </div>
     </div>
   );
 }

 export default Navbar