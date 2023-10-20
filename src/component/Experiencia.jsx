import React from "react";
import { Link } from "react-router-dom";

const Experiencia = () => {
  const scrum = [
    {
      name: "Wilson Sanchez",
      group: "Back-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/WilsonSanFullStack",
      linkedin: "https://www.linkedin.com/in/wilsonsan/",
    },
    {
      name: "Juan Tosso",
      group: "Front-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/JuanTosso",
      linkedin: "https://www.linkedin.com/in/juanignaciotosso/",
    },
    {
      name: "Pablo Bottoni",
      group: "Front-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/PabNic",
      linkedin: "https://www.linkedin.com/in/pablo-bottoni-3a5621255/",
    },
    {
      name: "Daniel Gomez",
      group: "Back-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/Danogomez",
      linkedin: "https://www.linkedin.com/in/daniel-gomez-fullstack",
    },
    {
      name: "Sebastian Rastelli",
      group: "Front-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/sebarastelli?tab=repositories",
      linkedin:
        "https://www.linkedin.com/in/sebasti%C3%A1n-rastelli-854876253/",
    },
    {
      name: "David Florido",
      group: "Front-End",
      git: 'GITHUB',
      linke: 'LINKEDIN',
      github: "https://github.com/DavidPaimon",
      linkedin:
        "https://www.linkedin.com/in/david-felipe-florido-jim%C3%A9nez-a862bb262/",
    },
  ];
  return (
    <div className="container">
      <h1 className="title">EXPERIENCIA</h1>
      <div className="text-justify m-2">
        <h2 className="subTitle">Full Stack Developer Junior</h2>
        <h3 className="subTitle2">Pagina De Encuentros</h3>
        <div className=" flex justify-center">
          <Link to="https://github.com/WilsonSanFullStack/AppDeEncuentos">
            <button className="btn-n">CODIGO</button>
          </Link>
        </div>
        <h4 className="font-bold text-lg p-1">Nomand Locals,</h4>
        <h4 className="font-bold text-lg p-1">Colombia.</h4>
        <p className="text">
          Diseñar y desarrollar Pagina Web de encuentros mediante eventos para
          hacer posible el encutro entre dos o varias personas en un mismo punto
          para la socializacion. Funcionalidades de la pagina:
        </p>
        <ul className="font-bold p-2">
          <li>
            1. Desarrollar una página web para diferentes navegadores y
            dispositivos como móviles y desktop con manejo de diferentes
            resoluciones “responsivo” usando tecnologías como: JavaScript,
            React.js, Redux, HTML,CSS, Clerk-React, Axios, Redux-persist,
            Socket.io, Star-rating, Tailwind-css, Vite, Node.js, Express,
            PostgreSQL, Sequelize.
          </li>
          <li>
            2. Diseñar interfaces y elementos Front End, mantener y optimizar
            sitios web e interfaces.
          </li>
          <li>
            3. Desarrollar diferentes tipos de usuarios (Administrador,
            Standar).
          </li>
          <li>
            4. Desarrollar un motor de búsqueda con filtros como: actividades
            del usuario, generales, tipo, presupuesto, locación, cercanía,
            cantidad de personas, duración, fecha.
          </li>
          <li>
            5. Desarrollar sistema de reportes de usuarios o actividades.{" "}
          </li>
          <li>6. Desarrollar sistema de review de usuarios o actividades. </li>
          <li>7. Desarrollar sistema de valoración de actividades. </li>
          <li>8. Desarrollar sistema de chat general y personal. </li>
          <li>9. Desarrollar sistema de inicio de sesión con terceros</li>
        </ul>
        <p className="text-center text-xl">
          <strong>Del 27 de Junio Al 31 de Agosto 2023</strong>
        </p>
        <h4 className="font-bold p-2 text-xl">
          Proyecto Desarrollado Con Colaboracion de:
        </h4>
        <div className="m-2 md:grid grid-cols-3">
          {scrum.map((x) => {
            return (
              <section className="section">
                <h1>{x.name}</h1>
                <h2>{x.group}</h2>
                <Link to={x.github}><button className="btn-n">{x.git}</button></Link>
                <Link to={x.linkedin}><button className="btn-n">{x.linke}</button></Link>
              </section>
            )
          })}
        </div>
      </div>

      <div className="text-justify m-2">
        <h2 className="subTitle">Full Stack Developer</h2>
        <h3 className="subTitle2">Proyecto Individual</h3>
        <div className=" flex justify-center">
          <Link to="https://github.com/WilsonSanFullStack/PiCountries">
            <button className="btn-n">CODIGO</button>
          </Link>
        </div>
        <h3 className="font-bold text-xl p-2">HENRY</h3>
        <p className="text">
          Diseñar y desarrollar una App de países que incluía: autenticación,
          búsquedas, filtrados combinados, ordenamientos, etc. Creador:
          desarrolle el proyecto completamente solo donde aplique los
          conocimientos obtenidos durante el BootCamp Henry. Manejo de errores:
          a medida que iba creando la aplicación probaba las diferentes
          funcionalidades y rectificaba su funcionamiento haciendo también la
          mejora de las mismas.
        </p>
        <p className="text">
          <strong>Control de versionado: </strong>
          utilizando GIT fui utilizando diferentes versiones de mi código para
          llegar a la funcionalidad perfecta de la app esto hizo que rápidamente
          obtuviera un resultado productivo y eficaz.
        </p>
        <p>
          <strong className="font-bold p-2 m-2">Front:</strong> JavaScript,
          react.js, redux.js.
        </p>
        <p>
          <strong className="font-bold p-2 m-2">Back:</strong> Node.js, express,
          Axios. Base de datos: PostgreSQL y Sequelize.
        </p>
        <p className="font-bold text-center text-xl p-2">
          Del 1 junio del 2023 al 25 junio del 2023
        </p>
      </div>
      <div className="text-justify mx-2">
        <h2 className="subTitle">Full Stack Developer</h2>
        <h3 className="subTitle2">Proyecto Integrador</h3>
        <div className="flex justify-center">
          <Link to="https://github.com/WilsonSanFullStack/ft-38a/tree/main/ryckandmorty">
            <button className="btn-n">CODIGO</button>
          </Link>
        </div>
        <h5 className="font-bold text-xl p-2">HENRY</h5>
        <p>
          Diseñar y desarrollar una App de Ryck And Morty que incluía:
          autenticación, búsquedas, filtrados combinados, ordenamientos, etc.
        </p>
        <p>
          <strong className="font-bold p-2 m-2">Front:</strong> JavaScript,
          react.js y redux.js.
        </p>
        <p>
          <strong className="font-bold p-2 m-2">Back:</strong> Node.js y
          Express.js
        </p>
        <p>
          <strong className="font-bold p-2 m-2">Base de datos:</strong>{" "}
          PostgreSQL y Sequelize.
        </p>
        <p className="font-bold text-xl text-center pb-2">
          Practica Durante El BootCamp
        </p>
      </div>
    </div>
  );
};

export default Experiencia;
