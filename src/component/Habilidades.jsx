import React from "react";

const Habilidades = () => {
  return (
    <div className="bg-rose-100 min-h-screen pt-12 pb-10 justify-center items-center text-center">
      <h1 className="text-2xl p-1 font-bold">Habilidades</h1>
      <div>
      <p className="text-justify px-8 font-semibold">
        Mi enfoque principal está en el desarrollo backend utilizando
        tecnologías como Node.js, Express.js y bases de datos como PostgreSQL.
        También tengo experiencia en el diseño e implementación de arquitecturas
        de microservicios. Además de mis habilidades en backend, tengo
        experiencia en el desarrollo frontend utilizando React, Redux, HTML5,
        CSS3 y JavaScript, lo que me permite colaborar eficientemente con
        equipos Full Stack en proyectos integrales. Soy cómodo trabajando tanto
        en equipo como de forma independiente, y estoy siempre dispuesto a
        aprender nuevas tecnologías para mejorar mis habilidades y mantenerme
        actualizado en el cambiante mundo del desarrollo web.
      </p>
      <h2 className="text-2xl p-1 font-bold">Habilidades</h2>
        <div className="grid grid-cols-3 m-2 p-1 ">
          <div className="bg-rose-200 rounded-xl text-lg m-5 p-2">
            <p className="font-bold text-xl">Front-End</p>
            <p>REACT.JS</p>
            <p>REDUX.js</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>TAELWINDCSS</p>
          </div>
          <div className="bg-rose-200 rounded-xl text-lg m-5 p-2">
            <p className="font-bold text-xl pb-3">Back-End</p>
            <p>NODE.js</p>
            <p>POSTGRESQL</p>
            <p>SEQUELIZE</p>

            <br />
          </div>
          <div className="bg-rose-200 rounded-xl text-lg m-5 p-2">
            <p className="font-bold text-xl">Otras</p>
            <p>Trello</p>
            <p>Git</p>
            <p>GitFlow</p>
            <p>GitHub</p>
            <p>Slack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
