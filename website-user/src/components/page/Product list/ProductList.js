import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../../../Action/productAction";
import Loader from "../../Layout/Loader";
import Banner from "./../Home/Banner/Banner";
import ProductCard from "../../ProductCard/ProductCard";

const ProductList = () => {

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
    <>
      <Banner />
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto pt-6 pb-10">
          <div className="text-center">
            <h1 className="text-5xl italic">Our Products</h1>
          </div>
          <div className="product-filter mb-6">
            <div className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-3  px-1">
              <input className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                type="text"
                placeholder="Search Product"
                onChange={""}
              ></input>
              <input className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                type="text"
                placeholder="Select Category"
                onChange={""}
              ></input>
              <input className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                type="text"
                placeholder="Select Brand"
                onChange={""}
              ></input>
              <button type="submit" className="web-btn-3">
                Search
              </button>
            </div>
          </div>
          <div className="product-list">
            <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 px-1 product-listing">
              {products.map((product, index) => (
                <>
                  <ProductCard product={product} key={index} />
                </>
              ))}
              {products.map((product, index) => (
                <>
                  <ProductCard product={product} key={index} />
                </>
              ))}
              {products.map((product, index) => (
                <>
                  <ProductCard product={product} key={index} />
                </>
              ))}
              {products.map((product, index) => (
                <>
                  <ProductCard product={product} key={index} />
                </>
              ))}
              {products.map((product, index) => (
                <>
                  <ProductCard product={product} key={index} />
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
