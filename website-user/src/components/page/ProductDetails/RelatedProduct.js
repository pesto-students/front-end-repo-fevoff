import React from 'react'
import { Link } from "react-router-dom";

import product1 from "../../../asset/images/product1.jpeg";

const RelatedProduct = () => {
  const products = [
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
    { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },

  ];
  return (
    <div className="related-product py-2">
      <div className="product-heading">
        <div className="flex justify-center mt-5 ml-50 font-sans text-3xl">
          Related Product
        </div>

      </div>
      <Link className="flex flex-wrap justify-around py-8" to="/product/:id">
        {products.map((product) => (
          <div className="flex card w-64 h-76" key={product.id}>
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
  )
}

export default RelatedProduct
