import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { clearErrors, getProduct } from "../../../Action/productAction";



const RelatedProduct = () => {
  

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <div className="related-product py-2">
      <div className="product-heading">
        <div className="flex justify-center mt-5 ml-50 font-sans text-3xl">
          Related Product
        </div>
      </div>
      <Link className="flex flex-wrap justify-around py-8" to="/product/:id">
        {products.map((product) => (
          <Link className="flex card w-64 h-76" key={product._id} to={`/product/${product._id}`}>
            <figure>
              <img src={product.productMainImage} alt="women dress" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                {product.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <div className="card-actions justify-center">
                <div>₹ {product.productPrice}</div>
                <div>⭐ {product.rating}</div>
              </div>
            </div>
          </Link>
        ))}
      </Link>
    </div>
  );
};

export default RelatedProduct;
