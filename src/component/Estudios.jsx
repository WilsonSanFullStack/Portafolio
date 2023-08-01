import React from "react";
import styles from "../styles/Estudios.module.css";

const Estudios = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.basico} ${styles.column}`}>
        <h1 className={styles.h1}>ESTUDIOS Basicos</h1>
        <h2 className={styles.h2}>Primaria</h2>
        <p className={styles.p}>
          Educacion primaria cursada en la Escuela Primaria Mundo Nuevo
          perteneciente al Colegio Nacionalizado Pablo VI del municipio de
          Cubara Boyaca.
        </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Del 2006 al 2009</strong>
          </p>
        <h2 className={styles.h2}>Secundaria</h2>
        <p className={styles.p}>
          Estudios realizados en el Colegio Agricola Gibaltar del Municipio de
          Toledo Norte de Santander.
        </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Del 2010 al 2013</strong>
          </p>
          <h2 className={styles.h2}>Graduacion</h2>
          <p className={styles.p}>
            Examen Nacional con el Instituto Colombiano para la Evaluación de la
            Educación <strong className={styles.strong}>ICFES</strong>
          </p>
            <p className={styles.p}>
              <strong className={styles.strong}>
                Abril Del 2014 Bucaramanga Santander
              </strong>
            </p>
      </div>
      <div className={`${styles.uni} ${styles.column}`}>
        <h1 className={styles.h1}>Estudios De Carrera</h1>
        <h2 className={styles.h2}>Carrera Tecnica De Topografia</h2>
        <p className={styles.p}>
          Estudios de Topografia realizados en las
          <strong className={styles.strong}>Unidades Tecnologicas de Santander</strong>
          donde estuve por 4 semestres los cuales pase con buenas notas dado la
          situacion economica del momento no termine los estudios.
        </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Del 2015 al 2017</strong>
          </p>
        <h2 className={styles.h2}>
          Curso en Ensamble y Reparacion De Equipos De Computo
        </h2>
        <p className={styles.p}>
          Curso intensivo de 60 horas Realizado en Corporacion Educativa De
          Santander con lo cual estuve ejerciendo como tecnico en una empresa
          durante 3 años.
        </p>
          <p className={styles.p}></p>
          <strong className={styles.strong}>Diciembre Del 2018</strong>
        <h2 className={styles.h2}>Boot Camp HENRY Full Stack Developer</h2>
        <p className={styles.p}>
          Estudios realizados virtualmente durante 4 meses en donde aprendi el
          manejo de <strong className={styles.strong}>JavaScript</strong> y Frameworks
          como:
          <strong className={styles.strong}> React.js</strong>,{" "}
          <strong className={styles.strong}> Node.js</strong>,
          <strong className={styles.strong}> Express.js</strong>,{" "}
          <strong className={styles.strong}> Redux.js</strong>,{" "}
          <strong className={styles.strong}> Sequelize</strong>,{" "}
          <strong className={styles.strong}> PostgreSQL</strong>,{" "}
          <strong className={styles.strong}> HTML</strong>,{" "}
          <strong className={styles.strong}> CSS</strong>.
        </p>
          <p className={styles.p}>
            <strong className={styles.strong}>
              Del 10 Abril del 2023 al 1 Agosto Del 2023
            </strong>
          </p>
      </div>
    </div>
  );
};

export default Estudios;
