// import React, { useRef, useState, useEffect } from "react";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import "../styles/Slider.css";
// import MoviesCard from "../components/MoviesCard";

// function Slider2({  songsList, first, last }) {
//   const elementRef = useRef(null);
//   const imageContainerRef = useRef(null);
//   const [data, setData] = useState([]);
//   const [scrolling2, setScrolling2] = useState(true);

//   useEffect(() => {
//     fetch("https://academics.newtonschool.co/api/v1/music/album", {
//       headers: {
//         projectId: "22pghva8m0p8",
//       },
//     })
//       .then((data) => data.json())
//       .then((data) => {
//         setData(data.data);
//         console.log("data", data);
//       });
//   }, []);

//   const slideRight2 = () => {
//     console.log("Slide Right clicked");
//     setScrolling2(false);
//     elementRef.current.scrollLeft += 500;
//   };

//   const slideLeft2 = () => {
//     console.log("Slide left clicked");
//     setScrolling2(false);
//     elementRef.current.scrollLeft -= 500;
//   };

//   useEffect(() => {
//     if (scrolling2) {
//       const interval = setInterval(() => {
//         if (imageContainerRef.current) {
//           imageContainerRef.current.scrollLeft += 1; // Adjust the scrolling speed if needed
//         }
//       }, 50); // Adjust the interval if needed

//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [scrolling2]);

//   return (
//     <div className="slider-container-2">
//       <ArrowBackIosNewIcon
//         fontSize="large"
//         onClick={slideLeft2}
//         className="slider-icon-2 left"
//       />

//       <div
//         ref={(el) => {
//           elementRef.current = el;
//           imageContainerRef.current = el;
//         }}
//         onMouseEnter={() => setScrolling2(false)}
//         onMouseLeave={() => setScrolling2(true)}
//       ></div>

//       <div className="image-container-2">
//         {songsList &&
//           songsList.slice(first, last).map((songs) => {
//             return (
//               <div key={songs.id}>
//                 <MoviesCard
//                   title={songs.title}
//                   thumbnail={songs.thumbnail}
//                   mood={songs.mood}
//                 />
//               </div>
//             );
//           })}
//       </div>

//       <ArrowForwardIosIcon
//         fontSize="large"
//         onClick={slideRight2}
//         className="slider-icon-2 right"
//       />
//     </div>
//   );
// }

// export default Slider2;

import React, { useState, useRef } from "react";
import "../styles/Slider.css";
import MoviesCard from "../components/MoviesCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Slider2({ mainTitle, songsList, first, last }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
      setShowLeftIcon(containerRef.current.scrollLeft > 0);
    }
  };

  const slideRight2 = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollLeft += scrollAmount;
      setShowLeftIcon(true);
    }
  };

  const slideLeft2 = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollLeft -= scrollAmount;
      setShowLeftIcon(false);
    }
  };

  const startAutoScroll = () => {
    setAutoScrollInterval(
      setInterval(() => {
        slideRight2();
      }, 3000) // Auto-scroll interval
    );
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  return (
    <div className="slider-container-2">
      {showLeftIcon && (
        <ArrowBackIosNewIcon
          fontSize="large"
          onClick={() => {
            slideLeft2();
            stopAutoScroll();
          }}
          className="slider-icon-2 left"
        />
      )}

      <div
        ref={containerRef}
        className="image-container-2"
        onScroll={handleScroll}
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
      >
        {songsList &&
          songsList.slice(first, last).map((songs) => {
            return (
              <div key={songs.id}>
                <MoviesCard
                  title={songs.title}
                  image={songs.image}
                  mood={songs.mood}
                />
              </div>
            );
          })}
      </div>

      <ArrowForwardIosIcon
        fontSize="large"
        onClick={() => {
          slideRight2();
          stopAutoScroll();
        }}
        className="slider-icon-2 right"
      />
    </div>
  );
}

export default Slider2;
