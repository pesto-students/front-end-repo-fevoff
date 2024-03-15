import React, { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  updateCart,
  removeItemsToCart,
  getCartItems,
} from "../../../Action/cartAction";
import { clearErrors } from "../../../Action/productAction";
import { ADD_TO_CART } from "../../../Constants/cartConstants";
import { useAlert } from "react-alert";

const Cart = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  
  const navigate = useNavigate();
  const alert = useAlert();

  const { cartItems, error } = useSelector((state) => state.cart);
  

  const incressQuantity = (productId, quantity, availableQty) => {
    const newQty = quantity + 1;
    if (availableQty <= quantity) {
      return;
    }
    console.log(productId, newQty, quantity, availableQty);
    dispatch(updateCart(userId, productId, newQty));
  };

  const decreseQuantity = (productId, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    console.log(productId, quantity);
    dispatch(updateCart(userId, productId, newQty));
  };

  const deleteCartItems = (productId) => {
    dispatch(removeItemsToCart(userId, productId));
  };

  const handleQtyChange = (e, productId) => {
    const newQty = Number(e.target.value);
    dispatch(updateCart(userId, productId, newQty));
  };

  const checkoutHandlear = () => {
    navigate("/cart/address");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(updateCart(userId, productId, quantity))
    dispatch(getCartItems(userId));
    const storedUserId = localStorage.getItem("id");

    if (storedUserId) setUserId(storedUserId);
  }, [userId, dispatch, error, alert]);
  let totalPrice = 0;
  let totalDiscount = 0;
  if (cartItems && cartItems.items) {
    cartItems.items.forEach((product) => {
      totalPrice += product.productPrice;
      totalDiscount += product.productMrp - product.productPrice;
    });
  }
  const price = totalPrice + totalDiscount;
  const discount =  totalDiscount;
  const totalAmount = price - discount
  
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">
            Home > Cart
          </h6>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-l border border-gray-500  lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                
                {cartItems &&
                  cartItems.items &&
                  cartItems.items.map((product, productIdx) => (
                    <div key={product._id} className="">
                      <li className="flex py-6 sm:py-6">
                        <div className="flex-shrink-0">
                          <img
                            src={product.productMainImage}
                            alt={product.name}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href={product.href}
                                    className="font-semibold text-black"
                                  >
                                    Product: {product.name}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex flex-col text-sm">
                                {product.size ? (
                                  <p className="border-l border-gray-200 text-sm text-gray-500">
                                    Size: {product.size}
                                  </p>
                                ) : null}
                                <p className="text-sm text-gray-500">
                                  Brand: {product.brand}
                                </p>{" "}
                                <p className="text-sm text-gray-500">
                                  Brand: {product.category}
                                </p>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                  Price: {product.productMrp}
                                </p>{" "}
                                <p className="text-xs font-medium text-gray-500 ">
                                  Price: {product.productPrice}
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                  &nbsp;&nbsp;{product.price}
                                </p>
                                &nbsp;&nbsp;
                                <p className="text-sm font-medium text-green-500">
                                  {product.sizeVariation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex flex-col sm:flex-row">
                        <div className="min-w-24 flex">
                          <button
                            type="button"
                            className="h-10 w-10 border btn"
                            onClick={() =>
                              decreseQuantity(
                                product.productId,
                                product.quantity
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-12 w-12 rounded-md border text-center "
                            readOnly
                            value={product.quantity}
                            onChange={(e) =>
                              handleQtyChange(
                                e,
                                product.productId,
                                product.quantity
                              )
                            }
                          />
                          <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center btn"
                            onClick={() =>
                              incressQuantity(
                                product.productId,
                                product.quantity,
                                product.availableQty
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 flex text-sm">
                          <button
                            type="button"
                            className="flex items-center space-x-1 px-2 py-1 pl-0 "
                          >
                            <Trash
                              onClick={() => deleteCartItems(product.productId)}
                              size={10}
                              className="text-red-500 border border-red-500 w-12 h-5 btn"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md border border-black lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>

              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                      Price: 
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                    ₹ {price}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Discount:</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                    ₹ {discount}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount:
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                    ₹ {totalAmount}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  You will save ₹ {discount} on this order
                </div>
              </div>
            </section>
            <button
              onClick={checkoutHandlear}
              type="button"
              className="flex btn mt-5 lg:ml-0 lg:col-span-12 w-full sm:w-96 bg-transparent border-red-500 hover:bg-yellow-500"
            >
              Process To Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
