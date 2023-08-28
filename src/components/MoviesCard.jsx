import React from "react";
import "../styles/MoviesCard.css";
const MoviesCard = ({ title, mood, image }) => {
  return (
    <>
      <div className="cards">
        {/* <img title={title} src={thumbnail}alt={title} width={200} height={230}/> */}
        <img
          title={title}
          src={image}
          alt={title}
          width={200}
          height={230}
        />
        <div className="cards-body">
          <h2>{title}</h2>
          <h2>{mood}</h2>
          <h2>❤</h2>
        </div>
      </div>
      <h2 className="title">{title}</h2>
    </>
  );
};

export default MoviesCard;
