import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../../../../Action/productAction";
import Loader from "../../../Layout/Loader";
import ProductCard from "../../../ProductCard/ProductCard";

const Product = () => {
  const relatedCategories = [
    { id: 1, name: "Wedding" },
    { id: 2, name: "For Mens" },
    { id: 3, name: "For Womens" },
    { id: 4, name: "Party Wear" },
    { id: 5, name: "Night Wear" },
  ];

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);


  const limitProduct = products.slice(0, 5)

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
        <>
          <div className="grid md:pb-6 md:pt-12 py-8">
            <div className="box-heading text-center mb-4">
              <h2 className="italic text-3xl">Popular Products</h2>
              <p className="md:px-40 px-4 py-4">In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly <br /> used to demonstrate the visual form of a document or
                a typeface without relying.</p>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 product-listing">
              {limitProduct.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>

          <div className="grid md:pb-6 md:pt-12 py-8">
            <div className="box-heading text-center mb-4">
              <h2 className="italic text-3xl">Related Products</h2>
              <div className="flex justify-center my-4">
                {
                  relatedCategories.map((relatedCategory, index) => {
                    return (
                      <h4 className="px-8 italic">{relatedCategory.name}</h4>
                    )
                  })
                }
              </div>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 product-listing">
              {
                limitProduct.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              }
              {
                limitProduct.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
