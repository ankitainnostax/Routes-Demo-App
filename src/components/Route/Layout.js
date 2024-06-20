import React from "react"; 
import Navbar from "../contents/Navbar";
import Footer from "../contents/Footer";


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