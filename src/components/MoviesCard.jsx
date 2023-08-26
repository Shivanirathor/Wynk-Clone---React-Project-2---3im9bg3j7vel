import React from "react";
import "../styles/MoviesCard.css";
const MoviesCard = ({ thumbnail, title, mood }) => {
  return (
    <>
      <div className="cards">
        <img src={thumbnail} alt="" width={200} height={230} title={title}/>

        <div className="cards-body">
          <h2>{title}</h2>
          <h2>{mood}</h2>
         <h2>❤</h2> 
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
