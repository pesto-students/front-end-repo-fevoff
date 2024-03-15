import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProduct, clearErrors } from "../../../../Action/productAction";
import Loader from "../../../Layout/Loader";

const Product = () => {
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

  const limitProduct = products.slice(0, 4);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full md:py-16 py-8">
          <div className="container mx-auto">
            <div className="box-heading text-center">
              <h2 className="italic text-3xl">Popular Product</h2>
              <p className="md:px-40 px-4">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly <br /> used to demonstrate the visual form of a
                document or a typeface without relying.
              </p>
            </div>
          </div>

          <Link className="flex flex-wrap justify-around" to="/product/:id">
            {limitProduct.map((product) => (
              <div
                className="flex card w-96 h-76"
                key={product._id}
                to={`/product/${product._id}`}
              >
                <figure>
                  <img src={product.productMainImage} alt="women dress" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <div className="card-actions justify-center">
                    <div>₹ {product.productMrp}</div>
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
              {limitProduct.map((product) => (
                <div
                  className="flex card w-96 h-76"
                  key={product._id}
                  to={`/product/${product._id}`}
                >
                  <figure>
                    <img src={product.productMainImage} alt="women dress" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      {product.title}
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
        </div>
      )}
    </div>
  );
};

export default Product;
