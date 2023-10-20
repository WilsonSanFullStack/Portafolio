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
    <div className="bg-gray-950 w-screen  fixed top-0">
      {showMenu && (
        <div
          className={`sm:flex sm:flex-col flex justify-between items-center z-10`}
        >
          <NavLink to="/" className="btn-nav" onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/habilidades" className="btn-nav" onClick={handleNavLinkClick}>
            Habilidades
          </NavLink>
          <NavLink to="/estudios" className="btn-nav" onClick={handleNavLinkClick}>
            Estudios
          </NavLink>
          <NavLink to="/experiencia" className="btn-nav" onClick={handleNavLinkClick}>
            Experiencia
          </NavLink>
          <NavLink to="/contact" className="btn-nav" onClick={handleNavLinkClick}>
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
        <img src="/system.png" alt="logo system" className="w-12 animate-pulse bg-lime-100 rounded-full" />
      </div>
    </div>
  );
};

export default NavBar;
