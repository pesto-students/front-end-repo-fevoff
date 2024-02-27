/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";


import banner11 from "../../../../asset/images/banner11.jpg";
import banner22 from "../../../../asset/images/banner22.jpg";
import user from "../../../../asset/images/User.png"

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner11} className="w-full" alt="Banner 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner22} className="w-full" alt="Banner 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
