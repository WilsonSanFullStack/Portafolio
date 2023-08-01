import React from "react";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
    <div
      className={styles.containerNavBar}
     
    >
      <NavLink to="/">
        <h2 className={styles.navlink}>Home</h2>
      </NavLink>

      <NavLink to="/estudios">
        <h2 className={styles.navlink}>Estudios</h2>
      </NavLink>

      <NavLink to="/experiencia">
        <h2 className={styles.navlink}>Experiencia</h2>
      </NavLink>
      {/* 
      <Link>
        <h2 className={styles.navlink}>Servicios</h2>
      </Link> */}

      <NavLink to="/contact">
        <h2 className={styles.navlink}>Contact</h2>
      </NavLink>
    </div>
  );
};

export default NavBar;
