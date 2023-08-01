import React from "react";
import styles from "../styles/Estudios.module.css";

const Estudios = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.basico} ${styles.column}`}>
        <h1 id={styles.h1}>ESTUDIOS Basicos</h1>
        <h2 id={styles.h2}>Primaria</h2>
        <p id={styles.p}>
          Educacion primaria cursada en la Escuela Primaria Mundo Nuevo
          perteneciente al Colegio Nacionalizado Pablo VI del municipio de
          Cubara Boyaca.
        </p>
          <p id={styles.p}>
            <strong id={styles.strong}>Del 2006 al 2009</strong>
          </p>
        <h2 id={styles.h2}>Secundaria</h2>
        <p id={styles.p}>
          Estudios realizados en el Colegio Agricola Gibaltar del Municipio de
          Toledo Norte de Santander.
        </p>
          <p id={styles.p}>
            <strong id={styles.strong}>Del 2010 al 2013</strong>
          </p>
          <h2 id={styles.h2}>Graduacion</h2>
          <p id={styles.p}>
            Examen Nacional con el Instituto Colombiano para la Evaluación de la
            Educación <strong id={styles.strong}>ICFES</strong>
          </p>
            <p id={styles.p}>
              <strong id={styles.strong}>
                Abril Del 2014 Bucaramanga Santander
              </strong>
            </p>
      </div>
      <div className={`${styles.uni} ${styles.column}`}>
        <h1 id={styles.h1}>Estudios De Carrera</h1>
        <h2 id={styles.h2}>Carrera Tecnica De Topografia</h2>
        <p id={styles.p}>
          Estudios de Topografia realizados en las
          <strong id={styles.strong}>Unidades Tecnologicas de Santander</strong>
          donde estuve por 4 semestres los cuales pase con buenas notas dado la
          situacion economica del momento no termine los estudios.
        </p>
          <p id={styles.p}>
            <strong id={styles.strong}>Del 2015 al 2017</strong>
          </p>
        <h2 id={styles.h2}>
          Curso en Ensamble y Reparacion De Equipos De Computo
        </h2>
        <p id={styles.p}>
          Curso intensivo de 60 horas Realizado en Corporacion Educativa De
          Santander con lo cual estuve ejerciendo como tecnico en una empresa
          durante 3 años.
        </p>
          <p id={styles.p}></p>
          <strong id={styles.strong}>Diciembre Del 2018</strong>
        <h2 id={styles.h2}>Boot Camp HENRY Full Stack Developer</h2>
        <p id={styles.p}>
          Estudios realizados virtualmente durante 4 meses en donde aprendi el
          manejo de <strong id={styles.strong}>JavaScript</strong> y Frameworks
          como:
          <strong id={styles.strong}> React.js</strong>,{" "}
          <strong id={styles.strong}> Node.js</strong>,
          <strong id={styles.strong}> Express.js</strong>,{" "}
          <strong id={styles.strong}> Redux.js</strong>,{" "}
          <strong id={styles.strong}> Sequelize</strong>,{" "}
          <strong id={styles.strong}> PostgreSQL</strong>,{" "}
          <strong id={styles.strong}> HTML</strong>,{" "}
          <strong id={styles.strong}> CSS</strong>.
        </p>
          <p id={styles.p}>
            <strong id={styles.strong}>
              Del 10 Abril del 2023 al 1 Agosto Del 2023
            </strong>
          </p>
      </div>
    </div>
  );
};

export default Estudios;
