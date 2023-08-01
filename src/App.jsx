import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Estudios from "./component/Estudios";
import Experiencia from "./component/Experiencia";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <Footer/> 
    </div>
  );
}

export default App;
