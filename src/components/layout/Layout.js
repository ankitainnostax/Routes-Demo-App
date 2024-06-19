import React from "react"; 
import Navbar from "../contents/Navbar";
import Footer from "../contents/Footer";
import About from "../contents/About";

const Layout=({children})=>{
  
    return (
        <div className="layout">
          <Navbar />
          <main className="content">
            {children}
          </main>
          <Footer />
          
        </div>
      );

};
export default Layout;