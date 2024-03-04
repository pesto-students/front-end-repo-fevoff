import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import product1 from "../../../asset/images/product1.jpeg";

import { getProduct, clearErrors } from "../../../Action/productAction";
import Loader from "../../Layout/Loader";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  // };

  // const products = [
  //   { id: 1, name: "Product1", image: product1, price: 1199, rating: 5 },
  //   { id: 2, name: "Product2", image: product1, price: 1299, rating: 4 },
  //   { id: 3, name: "Product3", image: product1, price: 1099, rating: 4.5 },
  //   { id: 4, name: "Product4", image: product1, price: 999, rating: 3.5 },
  //   { id: 5, name: "Product5", image: product1, price: 1499, rating: 5 },
  //   { id: 6, name: "Product6", image: product1, price: 1599, rating: 4 },
  //   { id: 7, name: "Product7", image: product1, price: 1399, rating: 4 },
  //   { id: 8, name: "Product8", image: product1, price: 1299, rating: 4.5 },
  // ];

  

  useEffect(() => {
    if (error) {
      error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 p-8">
            <div className="flex justify-center mt-5 ml-50 font-sans text-3xl">
              Our Product
            </div>

            <div className="filter-cat">
              <div className="flex justify-center p-5">
                <form className="">
                  <input
                    className="mr-5 shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Search Product"
                    id="searchProduct"
                    type="text"
                  />
                  <input
                    className="mr-5 shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Select Category"
                    id="searchProduct"
                    type="text"
                  />
                  <input
                    className="mr-5 shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Select Brand"
                    id="searchProduct"
                    type="text"
                  />

                  <button className="btn btn-outline btn-warning px-20">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              {products.map((product) => (
                <Link
                  className="flex card w-64 h-96 m-4"
                  key={product.id}
                  to={`/product/${product.id}`}
                  
                >
                  <figure>
                    <img src={product.images} alt="product image"/>
                  </figure>
                  <div className="card-body">
                    <p className="card-title text-xs  justify-center">
                      {product.title}
                      <div className="badge badge-secondary">NEW</div>
                    </p>

                    <div className="card-actions justify-center">
                      <div>₹ {product.price}</div>
                      <div>{product.rating}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {selectedProduct && <ProductDetails product={selectedProduct}/>}
{/* 
          {selectedProduct && (
            <div className="selected-product-details">
              <h2>Selected Product Details</h2>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <p>Name: {selectedProduct.name}</p>
              <p>Price: {selectedProduct.price}</p>
              <p>Rating: {selectedProduct.rating}</p>
            </div>
          )} */}
        </div>
      )}
    </>
  );
};

export default ProductList;
