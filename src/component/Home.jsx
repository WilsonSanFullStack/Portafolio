import React from "react";
import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={styles.containerHome}>
      <div className={styles.conh1}>
      <h1 className={styles.titulo}>!!!BIENVENIDOS!!!</h1>
      </div>
      <h2>SOY WILSON SANCHEZ</h2>
      <h2>Programador Full Stack Con JavaScript</h2>
      <div className={styles.detalles}>
        <div className={styles.detalle}>
          <p>Front-End</p>
          <p>REACT.JS</p>
          <p>REDUX.js</p>
          <p>CSS</p>
          <p>HTML</p>
        </div>
        <div className={styles.detalle}>
          <br /><p>Back-End</p>
          <p>NODE.js</p>
          <p>POSTGRESQL</p>
          <p>SEQUELIZE</p>
          
          <br />
        </div>
        <div className={styles.detalle}>
          <p>Trello</p>
          <p>Git</p>
          <p>GitFlow</p>
          <p>GitHub</p>
          <p>Slack</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
