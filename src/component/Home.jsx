import React from "react";

const Home = () => {
  return (
    <div className="bg-rose-100 min-h-screen pt-12 pb-12 justify-center items-center text-center">
      <div className="sm:text-4xl text-5xl font-bold p-2 ">
        <h1>!!!BIENVENIDOS!!!</h1>
      </div>
      <div className="sm:flex-col sm:justify-center sm:items-center  justify-center">
        <img
          src="/foto.jpg"
          alt="foto personal"
          className="sm:rounded-full sm:w-48 sm:h-48 w-72 h-72 rounded-full  mx-auto"
        />
        <h2 className="sm:p-0 sm:mt-1 text-2xl p-5 font-bold  mx-auto">
          SOY WILSON SANCHEZ
        </h2>
        <h2 className="sm:mt-1 sm:mx-auto sm:text-center font-bold text-2xl mx-auto">
          Programador Web Con JavaScript
        </h2>
      </div>

      <p className="text-justify p-8 font-semibold text-lg">
        Bueno aqui les quiero hablar un poco de quien soy, trabajador desde los
        8 años en labores del campo, a mis 12 años reinicie mis estudios en
        segundo primaria aprobando Segundo y Tercero de primaria, a mis 15 años
        logre terminar mi primaria e inicie mi secundaria, cumpliendo 18 años
        consegui llegar a octavo de secundaria siendo siempre el segundo alumno
        con mejores notas del grado. En Abril del 2014 decidi hacer la Prueba
        ICFES con la cual valide todo mi bachillerato, durante ese tiempo me
        dedique a trabajar en la construccion pues el sueño que tenia de niño
        era ser un ingeniero civil, mientras trabajaba en una empresa con
        ingenieros, arquitectos y topografos, estudie 4 semestres de topografia
        luego me retire debido a problemas economicos, cambio de ciudad y sigo
        trabajando como ayudante de construccion, en Diciembre de 2018 llego a
        bucaramanga realizo un curso de sistemas y consigo empleo como tecnico
        en sistemas en donde despues de seis meses en el puesto encuentro a la
        mujer mas hermosa y con la cual decido formar una relacion y producto de
        esta relacion tenemos una hermosa niña a mi trabajo de sistema renuncie
        tres años despues de estar trabajando en esa empresa y decido iniciar
        mis estudios como programador y aqui me tienen disponible para realizar
        el proyecto que pongan en mis manos entre mas desafiante sea mucho mejor
        pues esto hara que adquiera mas experiencia en el campo y tambien me
        esfuerze por entregar el mejor resultado.
      </p>
    </div>
  );
};

export default Home;
