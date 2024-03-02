import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import product1 from "../../../../asset/images/product1.jpeg";
import { useDispatch, useSelector } from "react-redux";

import { getProduct, clearErrors } from "../../../../Action/productAction";

const Product = () => {
  // const products = [
  //   { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //   { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //   { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //   { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //  { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //  { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  // ]
  const relatedCategories = [
    { id: 1, name: "Wedding" },
    { id: 1, name: "Wedding" },
    { id: 1, name: "Wedding" },
    { id: 1, name: "Wedding" },
    { id: 1, name: "Wedding" },
    { id: 1, name: "Wedding" },
  ];

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div>
      <div className="bg-gradient-to-t p-8">
        <div className="product-heading">
          <div className="flex justify-center mt-5 ml-50 font-sans text-3xl">
            Popular Product
          </div>
          <div className="ml-20 p-3">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying.
          </div>
        </div>

        <Link className="flex flex-wrap justify-around" to="/product/:id">
          {products.map((product) => (
            <div className="flex card w-96 h-76" key={product.id}>
              <figure>
                <img src={product.image} alt="women dress" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">
                  {product.title}
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

        <div className="related-product">
          <div className="product-heading text-center mt-5">
            <h3 className="font-sans text-3xl">Related Product</h3>
            <div className="flex flex-wrap justify-center my-5">
              {relatedCategories.map((category) => (
                <h3 key={category.id} className="m-3 text-lg font-semibold">
                  {category.name}
                </h3>
              ))}
            </div>
          </div>

          <Link className="flex flex-wrap justify-around" to="/product/:id">
            {products.map((product) => (
              <div className="flex card w-96 h-76" key={product.id}>
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
    </div>
  );
};

export default Product;
