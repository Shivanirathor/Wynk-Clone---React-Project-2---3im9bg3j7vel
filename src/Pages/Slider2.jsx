import React, { useState, useRef } from "react";
import "../styles/Slider.css";
import MoviesCard from "../components/MoviesCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Slider2({ songsList, first, last }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftIcon, setShowLeftIcon] = useState(false);

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

  // const startAutoScroll = () => {
  //   setAutoScrollInterval(
  //     setInterval(() => {
  //       slideRight2();
  //     }, 3000) // Auto-scroll interval
  //   );
  // };

  // const stopAutoScroll = () => {
  //   clearInterval(autoScrollInterval);
  // };

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
        // onMouseEnter={startAutoScroll}
        // onMouseLeave={stopAutoScroll}
      >
        {songsList &&
          songsList.slice(first, last).map((songs) => {
            return (
              <div key={songs.id}>
                <MoviesCard
                  // thumbnail={songs.thumbnail}
                  title={songs.title}
                  image={songs.image}
                  mood={songs.mood}
                  name={songs.artists[0].name}
                  audio={
                    songs?.songs[0]?.audio_url ||
                    "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90b747ae38c3e33a1d37.mp3"
                  }
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
