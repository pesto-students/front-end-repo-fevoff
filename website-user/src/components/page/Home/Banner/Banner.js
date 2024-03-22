/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import banner from "../../../../asset/images/banner.webp";
import banner22 from "../../../../asset/images/banner22.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const cat = [
    { id: 1, image: banner },
    { id: 2, image: banner22 },
  ];

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="w-full page-slick-slider">
        <Slider {...settings}>
          {cat.map((category, index) => (
            <div key={index}>
              <img src={category.image} alt="Category Image" className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
