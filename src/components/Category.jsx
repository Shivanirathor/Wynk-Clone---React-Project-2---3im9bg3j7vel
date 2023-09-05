import React from "react";
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
     
      </div>
    </>
  );
};

export default Category;
