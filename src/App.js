import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/contents/Home";
import Contact from "./components/contents/Contact";
import About from "./components/contents/About";
import { useLocation } from "react-router-dom";
function App() {
  
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(true);
  useEffect(() => {
   
    if (location.pathname === "/contact") {
      setShowLayout(false); 
    } else {
      setShowLayout(true); 
    }
  }, [location.pathname]);
 
  return (
    <div className="App">
      {showLayout && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      )}
      {!showLayout && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
