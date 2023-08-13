import React from "react";

const Estudios = () => {
  return (
    <div className="pt-10 min-w-screen min-h-screen pb-8 font-semibold bg-rose-100 grid grid-cols-2 sm:grid-cols-1 sm:text-justify sm:pb-14 p-2 text-md">
      <div className="text-lg">
        <h1 className="text-2xl font-bold text-center p-2">ESTUDIOS Basicos</h1>
        <h2 className="font-bold text-xl text-center p-2">Primaria</h2>
        <p>
          Educacion primaria cursada en la Escuela Primaria Mundo Nuevo
          perteneciente al Colegio Nacionalizado Pablo VI del municipio de
          Cubara Boyaca.
        </p>
        <p>
          <strong>Del 2006 al 2009</strong>
        </p>
        <h2 className="font-bold text-xl p-2 text-center">Secundaria</h2>
        <p>
          Estudios realizados en el Colegio Agricola Gibaltar del Municipio de
          Toledo Norte de Santander.
        </p>
        <p>
          <strong>Del 2010 al 2013</strong>
        </p>
        <h2 className="font-bold text-xl text-center p-2">Graduacion</h2>
        <p>
          Examen Nacional con el Instituto Colombiano para la Evaluación de la
          Educación <strong>ICFES</strong>
        </p>
        <p>
          <strong >
            Abril Del 2014 Bucaramanga Santander
          </strong>
        </p>
      </div>
      <div className="text-md">
        <h1 className="text-2xl p-1 text-center font-bold">Estudios De Carrera</h1>
        <h2 className="font-bold text-lg text-center p-1">Carrera Tecnica De Topografia</h2>
        <p >
          Estudios de Topografia realizados en las
          <strong >
            Unidades Tecnologicas de Santander
          </strong>
          donde estuve por 4 semestres los cuales pase con buenas notas dado la
          situacion economica del momento no termine los estudios.
        </p>
        <p>
          <strong >Del 2015 al 2017</strong>
        </p>
        <h2 className="font-bold text-lg text-center p-1">
          Curso en Ensamble y Reparacion De Equipos De Computo
        </h2>
        <p >
          Curso intensivo de 60 horas Realizado en Corporacion Educativa De
          Santander con lo cual estuve ejerciendo como tecnico en una empresa
          durante 3 años.
        </p>
        
        <strong >Diciembre Del 2018</strong>
        <h2 className="font-bold text-center text-xl p-1">Boot Camp HENRY Full Stack Developer</h2>
        <p>
          Estudios realizados virtualmente durante 4 meses en donde aprendi el
          manejo de <strong>JavaScript</strong> y
          Frameworks como:
          <strong > React.js</strong>,{" "}
          <strong > Node.js</strong>,
          <strong > Express.js</strong>,{" "}
          <strong > Redux.js</strong>,{" "}
          <strong > Sequelize</strong>,{" "}
          <strong > PostgreSQL</strong>,{" "}
          <strong > HTML</strong>,{" "}
          <strong > CSS</strong>.
        </p>
        <p>
          <strong >
            Del 10 Abril del 2023 al 1 Agosto Del 2023
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Estudios;
