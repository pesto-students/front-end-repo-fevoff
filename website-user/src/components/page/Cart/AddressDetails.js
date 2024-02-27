import React from "react";

import Banner from "../Home/Banner/Banner";
import { Trash } from "lucide-react";

const AddressDetails = () => {
  const address = [
    {
      id: 1,
      name: "Mahipal Singh",
      emailId: "mahipalsingh@gmail.com",
      address: "Bhilwara Raj 311001",
    },
    {
      id: 1,
      name: "Mahipal Singh",
      emailId: "mahipalsingh@gmail.com",
      address: "Bhilwara Raj 311001",
    },
  ];
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <Banner />

      <div>
        <div className="mx-auto max-w-7xl px-2 lg:px-0 ">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl ">
              Home > Cart > Address
            </h6>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
              <section
                aria-labelledby="cart-heading"
                className="rounded-l border border-black lg:col-span-8"
              >
                <ul role="list" className="divide-y divide-gray-200">
                  {address.map((address, addressIdx) => (
                    <div key={address.id} className="flex justify-between">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="checkbox m-3 border-orange-600 checked:border-gray-800 [--chkbg:theme(colors.gray.600)] [--chkfg:orange]"
                                />

                                <h3 className="text-sm">
                                  <p
                                    href={address.href}
                                    className="font-semibold text-black"
                                  >
                                    Name: {address.name}
                                  </p>
                                  <p
                                    href={address.href}
                                    className="font-semibold text-black"
                                  >
                                    Email ID: {address.emailId}
                                  </p>
                                  <p
                                    href={address.href}
                                    className="font-semibold text-black"
                                  >
                                    Address: {address.address}
                                  </p>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="flex">
                        <div>
                          <button type="button" className="m-5">
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
                  Order Details
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
              <div className="flex">
                <button
                  type="button"
                  className=" btn  ml-44 w-64 bg-transparent border-red-500 hover:bg-yellow-500"
                >
                  Process To Checkout
                </button>
                <button
                  type="button"
                  className="btn ml-5 w-64 bg-transparent border-red-500 hover:bg-yellow-500 "
                >
                  Process To Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
