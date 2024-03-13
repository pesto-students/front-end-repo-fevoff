/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import category from "../../../../asset/images/category.png"
import "./browsercat.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrowserCat = () => {
  const cat = [
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
    { id: 1, image: category },
  ];
  var settings = {
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }],
  };



  return (
    <div className="h-full py-8 category-slider md:mt-8 mt-3">
      <div className='container mx-auto'>
        <div className="flex flex-col items-center">
          <div className="font-sans text-3xl mb-5">
            <h2 className='italic font-bold'>Browse By Category</h2>
          </div>
        </div>
        <div className='mt-4'>
          <Slider {...settings}>
            {cat.map((category, index) => (
              <div key={index} className='category-box'>
                <img src={category.image} alt="Category Image" className="img rounded-full" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BrowserCat
