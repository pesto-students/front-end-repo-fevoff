import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import RelatedProduct from "./RelatedProduct";
import ProductReview from "./ProductReview";
import Loader from "../../Layout/Loader";

import { clearErrors, getProductDetils } from "../../../Action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addItemsToCart } from "../../../Action/cartAction";
import { useAlert } from "react-alert";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import "./product-details.css";
import ProductDetailsSkeleton from "./ProductDetailsSkelton";
import { useNavigate } from 'react-router-dom';

function ProductDetails({ match }) {
  const navigate = useNavigate();
  const [quantity, setQuentity] = useState(1);
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [userId, setUserId] = useState();
  const [productImageView, setProductImageView] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showSkelton, setShowSkelton] = useState(true);
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const { productId } = useParams();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetils(productId));

    const storedUserId = localStorage.getItem("id");
    if (storedUserId) setUserId(storedUserId);

  }, [dispatch, productId, error, alert]);

  const increeQuentity = () => {
    if (product.stock <= quantity) return;

    const qty = quantity + 1;
    setQuentity(qty);
  };

  const decreseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuentity(qty);
  };

  const sizeHandler = (selectSize) => {
    setSize(selectSize === size ? null : selectSize);
  };

  const addToCartHandlar = async () => {
    setClicked(true);
    await dispatch(
      addItemsToCart({
        userId,
        productId,
        quantity,
        // price: product.productPrice,
        size,
      })
    )
      .then(() => {
        alert.success("Item added to cart successfully!");
      })
      .catch((error) => {
        alert.error(`Failed to add item to cart: ${error.message}`);
      });

    navigate("/cart");
    setClicked(false);
  };

  return (
    <>
      <>
        <CommonBanner pageTitle={product.name} />
        <Breadcrumbs
          breadcumr1="Product Listing"
          breadcumr1_link={"/products"}
          breadcumr2={product.name}
        />

        <div className="container mx-auto mt-4">
          <div className="product-details">
            {
              (!loading) ?

                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
                  <div className="product-image-section">
                    <div className="w-full xl:flex xl:flex-row-reverse">
                      <div className="relative mb-2.5 w-full shrink-0 overflow-hidden md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                        <div className="relative flex items-center justify-center">
                          <img
                            alt={product.name}
                            src={
                              productImageView && productImageView != ""
                                ? productImageView
                                : product.productMainImage
                            }
                            decoding="async"
                            loading="lazy"
                            className="product-main-image"
                          />
                        </div>
                        {/* <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <ChevronLeft className="text-white" />
                    <ChevronRight className="text-white" />
                  </div> */}
                      </div>
                      <div className="flex gap-2 xl:flex-col">
                        <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition opacity-75 hover:opacity-75">
                          <img
                            alt={`Product Here`}
                            src={product.productMainImage}
                            decoding="async"
                            loading="lazy"
                            onClick={(e) => {
                              setProductImageView(product.productMainImage);
                            }}
                            className="product-slider-image"
                          />
                        </div>
                        {product.productImage1 && product.productImage1 != "" && (
                          <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                            <img
                              alt={`Product Here`}
                              src={product.productImage1}
                              decoding="async"
                              loading="lazy"
                              onClick={(e) => {
                                setProductImageView(product.productImage1);
                              }}
                              className="product-slider-image"
                            />
                          </div>
                        )}
                        {product.productImage2 && product.productImage2 != "" && (
                          <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                            <img
                              alt={`Product Here`}
                              src={product.productImage2}
                              decoding="async"
                              loading="lazy"
                              onClick={(e) => {
                                setProductImageView(product.productImage2);
                              }}
                              className="product-slider-image"
                            />
                          </div>
                        )}
                        {product.productImage3 && product.productImage3 != "" && (
                          <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                            <img
                              alt={`Product Here`}
                              src={product.productImage3}
                              decoding="async"
                              loading="lazy"
                              onClick={(e) => {
                                setProductImageView(product.productImage3);
                              }}
                              className="product-slider-image"
                            />
                          </div>
                        )}
                        {product.productImage4 && product.productImage4 != "" && (
                          <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                            <img
                              alt={`Product Here`}
                              src={product.productImage4}
                              decoding="async"
                              loading="lazy"
                              onClick={(e) => {
                                setProductImageView(product.productImage4);
                              }}
                              className="product-slider-image"
                            />
                          </div>
                        )}
                        {product.productImage5 && product.productImage5 != "" && (
                          <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                            <img
                              alt={`Product Here`}
                              src={product.productImage5}
                              decoding="async"
                              loading="lazy"
                              onClick={(e) => {
                                setProductImageView(product.productImage5);
                              }}
                              className="product-slider-image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="product-content px-4">
                    <div className="pb-5 mt-2 md:mt-0">
                      <h2 className="md:text-4xl text-2xl font-bold italic">
                        {product.name}
                      </h2>
                      <p className="md:text-lg text-md text-justify italic mt-1">
                        {product.productSmallDescription}
                      </p>
                      <h5 className="text-5xl mt-3">
                        &#8377;{product.productPrice}
                        <sub>
                          <del> &#8377;{product.productMrp}</del>
                        </sub>
                      </h5>
                    </div>
                    <div className="mb-2 pt-0.5">
                      <div className="flex justify-between">
                        <h4 className="text-xl font-bold italic">Size</h4>
                        <h4 className="text-xl font-bold italic underline">
                          Size Chart
                        </h4>
                      </div>
                      <ul className="flex flex-wrap space-x-2 mt-2">
                        <li
                          value={size}
                          className={`product-size${size === "XS" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("XS")}
                        >
                          XS
                        </li>

                        <li
                          className={`product-size${size === "S" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("S")}
                        >
                          S
                        </li>

                        <li
                          className={`product-size${size === "M" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("M")}
                        >
                          M
                        </li>

                        <li
                          className={`product-size${size === "L" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("L")}
                        >
                          L
                        </li>

                        <li
                          className={`product-size${size === "XL" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("XL")}
                        >
                          XL
                        </li>

                        <li
                          className={`product-size${size === "XXL" ? " selected" : ""
                            }`}
                          onClick={() => sizeHandler("XXL")}
                        >
                          XXL
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4 md:mr-20">
                      <div className="col-span-1">
                        <button
                          type="button"
                          className="btn-minus"
                          onClick={decreseQuantity}
                        >
                          <Minus size={30} />
                        </button>
                      </div>
                      <div className="col-span-2">
                        <input
                          type="text"
                          className="quantity-input"
                          value={quantity}
                        />
                      </div>
                      <div className="col-span-1">
                        <button
                          type="button"
                          className="btn-add"
                          onClick={increeQuentity}
                        >
                          <Plus size={30} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                      <div className="grid grid-cols-2 gap-4 md:mt-0 mt-2 md:mr-20">
                        <button
                          type="button"
                          className="btn-add-cart"
                          onClick={addToCartHandlar}
                          disabled={(clicked === true) ? true : false}
                        >
                          <span className="block">Add To Cart</span>
                        </button>
                        <button type="button" className="btn-add-wishlist">
                          <span className="block">Add To Wishlist</span>
                        </button>
                      </div>
                      <div className="social-share">
                        <span>Share:</span>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="share-icon"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook size={20} />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="share-icon"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter size={20} />{" "}
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="share-icon"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={20} />
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="share-icon"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <>
                  <ProductDetailsSkeleton />
                </>
            }
          </div>

          <div className="italic text-justify product-description p-3">
            {product.productDescription}
          </div>

          <RelatedProduct />
          <ProductReview />
        </div>
      </>
    </>
  );
}

export default ProductDetails;
