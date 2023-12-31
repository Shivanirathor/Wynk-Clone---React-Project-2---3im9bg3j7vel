import React, { useRef, useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../styles/Slider.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Slider() {
  const navigate = useNavigate();
  const elementRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);
  const { isLogin } = useSelector((state) => state.login);

  const imageUrls = [
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1695718015345-Full-Album-Mission-Raniganj-FeaturedBanner.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e36d2e7834a419eacdc272/BANNER_249951858683914.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651badc16ed4985d961a578e/BANNER_579213001452715.jpg",
    " https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1695986036714-Fresh-Arrivals-FeaturedBanner_(8).jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/650d78199b5f7a7e846f6eee/BANNER_31707535770392.jpeg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64c390dcc140c7113bd5e39d/BANNER_7435851371242.jpeg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1691404229878-Gadar-2-FeaturedBanner.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e5b5cc9370c3260804bb49/BANNER_90822899840205.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/63e0af595eb058293f5e8e9b/BANNER_188225634537180.png",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e3126565e2492644597d64/BANNER_618767705707987.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64e5bdfe4152fe066bee4891/BANNER_22423922471317.png",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651687e052686f1067b0c8c7/BANNER_352050287144965.jpg",
  ];

  const scrollSpeed = 1;

  const slideRight = () => {
    setScrolling(false);
    elementRef.current.scrollLeft += 500;
  };

  const slideLeft = () => {
    setScrolling(false);
    elementRef.current.scrollLeft -= 500;
  };

  useEffect(() => {
    if (scrolling) {
      const interval = setInterval(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.scrollLeft += scrollSpeed;
        }
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrolling]);

  useEffect(() => {
    const container = imageContainerRef.current;
    const handleScroll = () => {
      if (
        container.scrollLeft === 0 ||
        container.scrollLeft === container.scrollWidth - container.clientWidth
      ) {
        setScrolling(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageClick = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="slider-container">
      <ArrowBackIosNewIcon
        fontSize="large"
        onClick={slideLeft}
        className="slider-icon left"
      />

      <div
        className="image-container"
        ref={(el) => {
          elementRef.current = el;
          imageContainerRef.current = el;
        }}
        onMouseEnter={() => setScrolling(true)}
        onMouseLeave={() => setScrolling(true)}
        onClick={handleImageClick}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            className="images"
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
          />
        ))}
      </div>

      <ArrowForwardIosIcon
        fontSize="large"
        onClick={slideRight}
        className="slider-icon right"
      />
    </div>
  );
}

export default Slider;
