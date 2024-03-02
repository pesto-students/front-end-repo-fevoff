import React from "react";
import { Link } from "react-router-dom";

import product22 from "../../../../asset/images/product22.jpg";


const Card = ({ image, title, buttonText }) => (
  <div className="card card-side w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-10 shadow-xl md:mt-0 md:mr-4 sm:flex-row">
    <figure>
      <img src={image} alt="product" className="w-full h-auto sm:flex-row" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-lg sm:text-xl md:text-2xl">{title}</h2>
      <div className="card-actions mt-4">
        <button className="btn btn-outline btn-warning">{buttonText}</button>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  return (
    <>
      <div className="bg-gradient-to-t p-8 ">
        <div className="flex sm:flex-row">
          {/* Card 1 */}
          <div className="card card-side w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mt-10 sm:mr-2 shadow-xl">
            <figure>
              <img
                src={product22}
                alt="product"
                className="w-full h-auto sm:flex-row"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Best Dresses for Women</h2>
              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <Card
            image={product22}
            title="Best Dresses for Women"
            buttonText="View More"
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
