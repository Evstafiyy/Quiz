import React from "react";
import './Welcome.css'

function Welcome() {
  return (
    <>
      <div>
        <header> Welcome to <strong>QUIZ</strong></header>
       <p>Команда III Медведя</p>
         
       

        <img
          className="foto"
          src="https://bronk.club/uploads/posts/2022-08/1660255508_52-bronk-club-p-otkritki-s-medvedyami-prikolnie-55.jpg"
          alt="Описание изображения"
        ></img>
        <br></br>
         <a href="./category">Давайте начнем игру!</a>
      </div>
    </>
  );
}

export default Welcome;
