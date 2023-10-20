import React from "react";

const Habilidades = () => {
  return (
    <div className="container">
      <h1 className="title">Habilidades</h1>
      <div className=''>
        <p className="text">
          Mi enfoque principal está en el desarrollo backend utilizando
          tecnologías como Node.js, Express.js y bases de datos como PostgreSQL.
          También tengo experiencia en el diseño e implementación de
          arquitecturas de microservicios. Además de mis habilidades en backend,
          tengo experiencia en el desarrollo frontend utilizando React, Redux,
          HTML5, CSS3 y JavaScript, lo que me permite colaborar eficientemente
          con equipos Full Stack en proyectos integrales. Soy cómodo trabajando
          tanto en equipo como de forma independiente, y estoy siempre dispuesto
          a aprender nuevas tecnologías para mejorar mis habilidades y
          mantenerme actualizado en el cambiante mundo del desarrollo web.
        </p>
        <h2 className="subTitle">HERRAMIENTAS</h2>
        <div className="md:grid grid-cols-3  justify-center items-center">
          <div className="section">
            <p className="titleSubSection">Front-End</p>
            <p>REACT.JS</p>
            <p>REACT NATIVE</p>
            <p>REDUX.JS</p>
            <p>REDUX PERSIST</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>TAILWIND</p>
          </div>
          <div className="section">
            <p className="titleSubSection">Back-End</p>
            <p>NODE.JS</p>
            <p>POSTGRESQL</p>
            <p>FIREBASE</p>
            <p>SEQUELIZE</p>

            <br />
          </div>
          <div className="section">
            <p className="titleSubSection">OTRAS</p>
            <p>TRELLO</p>
            <p>GIT</p>
            <p>GITHUB</p>
            <p>GITFLOW</p>
            <p>SLACK</p>
            <p>CLERK</p>
            <p>NPM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
