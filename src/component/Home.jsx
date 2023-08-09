import React from "react";

const Home = () => {
  return (
    <div className="bg-rose-100 min-h-screen pt-12 pb-12 justify-center items-center text-center">
      <div className="a text-5xl font-bold p-2">
      <h1>!!!BIENVENIDOS!!!</h1>
      </div>
      <h2 className="text-2xl p-5 font-bold">SOY WILSON SANCHEZ</h2>
      <h2 className="font-bold text-xl">Programador Full Stack Con JavaScript</h2>
      <div>
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

export default Home;
