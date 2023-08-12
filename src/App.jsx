import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./component/Footer.jsx";
import NavBar from "./component/NavBar.jsx";
import Home from "./component/Home.jsx";
import Estudios from "./component/Estudios.jsx";
import Experiencia from "./component/Experiencia.jsx";
import Contact from "./component/Contact.jsx";
import Habilidades from "./component/Habilidades.jsx";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="font-victor-mono">
       {pathname !== '*' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/habilidades" element={<Habilidades />} />
      </Routes>
         {pathname !== '*' && <Footer/> }
    </div>
  );
}

export default App;
