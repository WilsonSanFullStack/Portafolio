import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./component/Footer.jsx";
import NavBar from "./component/NavBar.jsx";
import Home from "./component/Home.jsx";
import Estudios from "./component/Estudios.jsx";
import Experiencia from "./component/Experiencia.jsx";
import Contact from "./component/Contact.jsx";

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
