/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import category from "../../../../asset/images/category.png";
import "./browsercat.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { clearErrors, getCategory } from "../../../../Action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

const BrowserCat = () => {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    loading,
    error,
    category: categoryData,
  } = useSelector((state) => state.category);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCategory());
  }, [dispatch, alert, error]);

  return (
    <div className="h-full py-8 category-slider md:mt-8 mt-3">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="font-sans text-3xl mb-5">
            <h2 className="italic font-bold">Browse By Category</h2>
          </div>
        </div>
        <div className="mt-4">
          <Slider {...settings}>
            {categoryData &&
              categoryData.data.data &&
              categoryData.data.data.map((cat) => (
                <div key={cat._id} className="category-box">
                  <img
                    src={cat.categoryImage}
                    alt="Category Image"
                    className="img rounded-full"
                  />
                  {/* <p>{cat.name}</p> */}
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrowserCat;
