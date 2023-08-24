import React from "react";

const MoviesCard = ({ thumbnail,title }) => {
  return (
    <div>
     
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default MoviesCard;
