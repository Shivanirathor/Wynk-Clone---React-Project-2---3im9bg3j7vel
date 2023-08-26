import React, { useRef } from "react";
import MoviesCard from "./MoviesCard";

const Category = ({ mainTitle, songsList, first, last }) => {

  return (
    <>
      <h1 style={{  marginLeft: 25 }}>{mainTitle}</h1>
      <div
        style={{
          display: "flex",
          marginTop: 0,
          marginBottom:25,
          justifyContent: "space-between",
        }}
      >
        {songsList &&
          songsList.slice(first, last).map((songs) => {
            return (
              <div key={songs.id}>
                <MoviesCard title={songs.title} thumbnail={songs.thumbnail} mood={songs.mood} />
              </div>
            );
          })}
      </div>
    
    </>
  );
};

export default Category;
