import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isScreenWidthGreaterThan640 = () => {
    return window.innerWidth > 640;
  };

  useEffect(() => {
    setShowMenu(isScreenWidthGreaterThan640());
    
    const handleResize = () => {
      setShowMenu(isScreenWidthGreaterThan640());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (!isScreenWidthGreaterThan640()) {
      setShowMenu(!showMenu);
    }
  };

  const handleNavLinkClick = () => {
    if (!isScreenWidthGreaterThan640()) {
      setShowMenu(false);
    }
  };

  return (
    <div className="bg-blue-300 w-full flex justify-between items-center fixed top-0 z-10">
      {showMenu && (
        <div
          className={`sm:flex sm:flex-col md:flex md:justify-between`}
        >
          <NavLink to="/" className="btn-n" onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/habilidades" className="btn-n" onClick={handleNavLinkClick}>
            Habilidades
          </NavLink>
          <NavLink to="/estudios" className="btn-n" onClick={handleNavLinkClick}>
            Estudios
          </NavLink>
          <NavLink to="/experiencia" className="btn-n" onClick={handleNavLinkClick}>
            Experiencia
          </NavLink>
          <NavLink to="/contact" className="btn-n" onClick={handleNavLinkClick}>
            Contacto
          </NavLink>
        </div>
      )}
      <div
        className={`sm:flex sm:justify-center sm:items-center sm:mx-auto md:hidden ${
          showMenu ? "hidden" : ""
        }`}
        onClick={toggleMenu}
      >
        <img src="/system.png" alt="logo system" className="w-12" />
      </div>
    </div>
  );
};

export default NavBar;
