import { RouterProvider } from "react-router-dom";
import router from './components/Route/Route'
import { useState, } from "react";
import SlateEditor from "./components/Slate/slateEditor";
import React from "react";
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import TextEditor from "./components/Slate/TextEditor";

function App() {
 
 
  return (
    <div className="App">
     <TextEditor/>
    </div>
  );
}

export default App;
