import React, { useRef } from "react";
import Slider2 from "../Pages/Slider2";


const Category = ({ mainTitle, songsList, first, last }) => {
  return (
    <>
      <h1 style={{ marginLeft: 25 }}>{mainTitle}</h1>
      <div>
        <Slider2
          mainTitle={mainTitle}
          songsList={songsList}
          first={first}
          last={last}
        />
        {/* {songsList &&
          songsList.slice(first, last).map((songs) => {
            return (
              <div key={songs.id}>
                <MoviesCard
                  title={songs.title}
                  thumbnail={songs.thumbnail}
                  mood={songs.mood}
                />
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default Category;
