import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-blue-300 w-full flex justify-between items-center fixed top-0 z-10">
      <NavLink to="/">
        <button className="btn-n">Home</button>
      </NavLink>

      <NavLink to="/estudios">
        <h2 className="btn-n">Estudios</h2>
      </NavLink>

      <NavLink to="/experiencia">
        <h2 className="btn-n">Experiencia</h2>
      </NavLink>

      <NavLink to="/contact">
        <h2 className="btn-n">Contact</h2>
      </NavLink>
    </div>
  );
};

export default NavBar;
