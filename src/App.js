import { RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import router from './components/Route/Route'
function App() {
  
 
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
