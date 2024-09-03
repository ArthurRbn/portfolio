import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

interface CustomCarouselDotsProps {
  dots: JSX.Element[];
  dotsNumber: number;
}

const CustomCarouselDots: React.FC<CustomCarouselDotsProps> = ({ dots, dotsNumber }) => {
  const limitedDots = dots.slice(0, dotsNumber);

  return (
    <ul style={{ display: "flex", justifyContent: "center" }}>
      {limitedDots}
    </ul>
  );
};

export default CustomCarouselDots;