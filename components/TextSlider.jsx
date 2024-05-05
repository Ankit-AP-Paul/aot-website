"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TextSlider = ({ name, tagline }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="text-xl  ">
        <h3>{name}</h3>
      </div>
      <div className="text-lg">
        <h3>{tagline}</h3>
      </div>
    </Slider>
  );
};

export default TextSlider;
