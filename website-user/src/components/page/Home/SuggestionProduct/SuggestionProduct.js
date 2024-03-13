import React, { useEffect } from "react";

import product1 from "../../../../asset/images/product1.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../../Action/productAction";
import Loader from "../../../Layout/Loader";

const SuggestionProduct = () => {
  // const products = [
  //     { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //     { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //     { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //     { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //   ];

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const limitProduct = products.slice(3, 7);

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="suggested-product">
          <div className="flex mt-10 ml-50 justify-between">
            <div className="font-sans text-3xl">Suggested For You</div>
            <Link className="btn btn-outline btn-warning" to="/products">
              <button type="click" >View All</button>
            </Link>
          </div>

          <Link className="flex flex-wrap justify-around" to="/product/:id">
            {limitProduct.map((product) => (
              <div className="flex card w-64 h-96 m-4" key={product._id}>
                <figure>
                  <img src={product.productMainImage} alt="women dress" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">
                    {product.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <div className="card-actions justify-center">
                    <div>₹ {product.price}</div>
                    <div>{product.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SuggestionProduct;
