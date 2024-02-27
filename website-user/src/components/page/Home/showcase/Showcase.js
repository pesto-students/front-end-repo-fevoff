import React from "react";
import { Link } from "react-router-dom";

import product22 from "../../../../asset/images/product22.jpg";
import groomgif from "../../../../asset/images/groomGIF.gif";
import product1 from "../../../../asset/images/product1.jpeg"


const Showcase = () => {
  const products = [
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },


  ];

  return (
    <>
      <div className="bg-gradient-to-t p-8">
        <div className="flex">
          <div className="card card-side w-1/2 mt-10  shadow-xl mr-5">
            <figure>
              <img src={product22} alt="product" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Best Dresses for Women</h2>

              <div className="card-actions justify-start mt-10">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </div>
            </div>
          </div>

          <div className="card card-side shadow-xl w-1/2 mt-10 mr-4">
            <figure>
              <img src={product22} alt="product" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Best Dresses for Women</h2>

              <div className="card-actions justify-start mt-10">
                <button className="btn btn-outline btn-warning">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="suggested-product">
          <div className="flex mt-10 ml-50 justify-between">
            <div className=" font-sans text-3xl">
              Suggested For You
            </div>
            <div className="btn btn-outline btn-warning">
              <button type="click">View All</button>
            </div>
          </div>

          <Link className="flex flex-wrap justify-around" to="/product/:id">
            {products.map((product) => (
              <div
                className="flex card w-64 h-96 m-4"
                key={product.id}
              >
                <figure>
                  <img src={product.image} alt="women dress" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">
                    {product.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <div className="card-actions justify-center">
                    <div>{product.price}</div>
                    <div>{product.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </Link>
        </div>
      </div>


    </>
  );
};

export default Showcase;
