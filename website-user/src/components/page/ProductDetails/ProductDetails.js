import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import RelatedProduct from "./RelatedProduct";
import ProductReview from "./ProductReview";
import Loader from "../../Layout/Loader";

import { clearErrors, getProductDetils } from "../../../Action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addItemsToCart } from "../../../Action/cartAction";
import { useAlert } from "react-alert";

function ProductDetails({ match }) {
  const [quantity, setQuentity] = useState(1);
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [userId, setUserId] = useState();
  // const [productid, setProductId] = useState();

  const dispatch = useDispatch();
  const { productId } = useParams();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

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

  const addToCartHandlar = () => {
    dispatch(
      addItemsToCart({
        userId: userId,
        productId: productId,
        quantity,
        price: product.productPrice,
      })
    );
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetils(productId));

    const storedUserId = localStorage.getItem("id");
    if (storedUserId) setUserId(storedUserId);
  }, [dispatch, productId, error, alert]);

  return (
    <div className="sp mx-auto max-w-full bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 font-semibold italic">
      <div>
        <div className="flex justify-center px-2  lg:px-0 ">
          <div className="overflow-hidden">
            <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
              <div className="items-start justify-between lg:flex lg:space-x-8">
                <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                  <div className="w-full xl:flex xl:flex-row-reverse">
                    <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                      <div className="relative flex items-center justify-center">
                        <img
                          alt="Product gallery 1"
                          src={product.productMainImage}
                          width={650}
                          height={590}
                          className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                        />
                      </div>
                      <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                        <ChevronLeft className="text-white" />
                        <ChevronRight className="text-white" />
                      </div>
                    </div>
                    <div className="flex gap-2 xl:flex-col">
                      <div className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 flex-col">
                        <img
                          alt=""
                          src={product.productMainImage}
                          decoding="async"
                          loading="lazy"
                          className="h-28 w-20 object-cover md:h-24 md:w-24 lg:h-40 lg:w-28 xl:w-32 m-5"
                        />
                        <img
                          alt=""
                          src={product.productMainImage}
                          decoding="async"
                          loading="lazy"
                          className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-40 lg:w-28 xl:w-32"
                        />
                        <img
                          alt=""
                          src={product.productMainImage}
                          decoding="async"
                          loading="lazy"
                          className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-40 m-5 lg:w-28 xl:w-32"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                  <div className="pb-5">
                    <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">
                      {product.name}
                    </h2>
                    <p className="mt-4 font-semibold">₹ {product.productMrp}</p>
                    <p className="mt-4 font-semibold" value={setPrice}>
                      ₹ {product.productPrice}
                    </p>
                  </div>
                  <div className="mb-2 pt-0.5">
                    <div className="flex justify-between">
                      <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                        Size
                      </h4>
                      <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                        Size Chart
                      </h4>
                    </div>
                    <ul className="flex flex-wrap space-x-2">
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border  p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-400"
                        onClick={() => setSize("XS")}
                      >
                        XS
                      </li>
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-400"
                        onClick={() => setSize("S")}
                      >
                        S
                      </li>
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-400"
                        onClick={() => setSize("M")}
                      >
                        M
                      </li>
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-400"
                        onClick={() => setSize("L")}
                      >
                        L
                      </li>
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-400"
                        onClick={() => setSize("XL")}
                      >
                        XL
                      </li>
                      <li
                        className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 border-red-300 hover:bg-yellow-500 "
                        onClick={() => setSize("XXL")}
                      >
                        XXL
                      </li>
                    </ul>
                  </div>
                  <div className="min-w-24 flex">
                    <button
                      type="button"
                      className="h-10 w-10 border border-red-400 hover:bg-yellow-500 rounded-md"
                      onClick={decreseQuantity}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="mx-1 h-10 w-10 rounded-md border text-center hover:bg-yellow-500"
                      value={quantity}
                    />
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center border border-red-400 hover:bg-yellow-500 rounded-md"
                      onClick={increeQuentity}
                    >
                      +
                    </button>
                  </div>
                  <div className="pb-2" />
                  <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-transprent border border-red-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={addToCartHandlar}
                        disabled={product.stock < 1 ? true : false}
                      >
                        <span className="block">Add To Cart</span>
                      </button>
                      <div className="relative">
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center rounded-md bg-transprent border border-red-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="block">Add To Wishlist</span>
                        </button>
                      </div>
                      <div className="flex justify-around py-2">
                        <span>Share:</span>

                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook size={20} />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter size={20} />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={20} />
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1 xl:pt-1">
          <p className="text-sm px-12">{product.productDescription}</p>
        </div>
      </div>
      <RelatedProduct />
      <ProductReview />
    </div>
  );
}

export default ProductDetails;
