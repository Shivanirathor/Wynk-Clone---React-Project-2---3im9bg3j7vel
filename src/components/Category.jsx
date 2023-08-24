import React from "react";
import MoviesCard from "./MoviesCard";

const Category = ({ mainTitle, songsList, first, last }) => {
  return (
    <>
      <h1>{mainTitle}</h1>
      <div style={{ display: "flex" }}>
        {songsList &&
          songsList.slice(first, last).map((songs) => {
            return (
              <div key={songs.id}>
                <MoviesCard title={songs.title} thumbnail={songs.thumbnail} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Category;
