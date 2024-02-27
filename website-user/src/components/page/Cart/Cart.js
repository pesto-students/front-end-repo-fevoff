import React from "react";
import { Trash } from "lucide-react";

import Banner from "../Home/Banner/Banner";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 07 LV8",
      href: "#",
      price: "₹47,199",
      originalPrice: "₹48,900",
      discount: "5% Off",
      Seller: "Fevoff PVT. LTD",
      size: "8 UK",
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    },
    {
      id: 2,
      name: "Nike Blazer Low 77 SE",
      href: "#",
      price: "₹1,549",
      originalPrice: "₹2,499",
      discount: "38% off",
      Seller: "White",
      leadTime: "3-4 weeks",
      size: "8 UK",
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
    },
    {
      id: 3,
      name: "Nike Air Max 90",
      href: "#",
      price: "₹2219 ",
      originalPrice: "₹999",
      discount: "78% off",
      Seller: "Black",
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <Banner />

      <div>
        <div className="mx-auto max-w-7xl px-2 lg:px-0 ">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl ">
              Home > Cart
            </h6>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
              <section
                aria-labelledby="cart-heading"
                className="rounded-l border border-black lg:col-span-8"
              >
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product, productIdx) => (
                    <div key={product.id} className="">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={product.imageSrc}
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
                                    {product.name}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex flex-col text-sm">
                                {product.size ? (
                                  <p className="border-l border-gray-200  text-sm text-gray-500">
                                    {product.size}
                                  </p>
                                ) : null}
                                <p className="text-sm text-gray-500">
                                  Seller: {product.Seller}
                                </p>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                  {product.originalPrice}
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                  &nbsp;&nbsp;{product.price}
                                </p>
                                &nbsp;&nbsp;
                                <p className="text-sm font-medium text-green-500">
                                  {product.discount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button type="button" className="h-7 w-7">
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                            defaultValue={1}
                          />
                          <button
                            type="button"
                            className="flex h-7 w-7 items-center justify-center"
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
                              size={10}
                              className=" text-red-500 border border-red-500 w-12 h-5"
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
                  className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                >
                  Price Details
                </h2>
                <div>
                  <dl className=" space-y-1 px-2 py-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-800">Price (3 item)</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹ 52,398
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <dt className="flex items-center text-sm text-gray-800">
                        <span>Discount</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        - ₹ 3,431
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        Free
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹ 48,967
                      </dd>
                    </div>
                  </dl>
                  <div className="px-2 pb-4 font-medium text-green-700">
                    You will save ₹ 3,431 on this order
                  </div>
                </div>
              </section>
              <button type="button" className="flex btn mt-5 ml-52 w-96 bg-transparent border-red-500 hover:bg-yellow-500">
                Process To Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
