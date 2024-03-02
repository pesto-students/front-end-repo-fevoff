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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 lg:max-w-7xl">
          <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">
            Home > Cart > Address
          </h6>
          <form className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-l border border-black lg:col-span-8 lg:pr-4"
            >
              <ul role="list" className="divide-y divide-gray-200">
                {address.map((address, addressIdx) => (
                  <div
                    key={address.id}
                    className="flex flex-col lg:flex-row justify-between py-6 sm:py-6"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox m-3 border-orange-600 checked:border-gray-800 [--chkbg:theme(colors.gray.600)] [--chkfg:orange]"
                      />
                      <h3 className="text-sm">
                        <p className="font-semibold text-black">
                          Name: {address.name}
                        </p>
                        <p className="font-semibold text-black">
                          Email ID: {address.emailId}
                        </p>
                        <p className="font-semibold text-black">
                          Address: {address.address}
                        </p>
                      </h3>
                    </div>
                    <div className="flex mt-4 lg:mt-0">
                      <button type="button" className="m-2">
                        <Trash
                          size={10}
                          className="text-red-500 border border-red-500 w-6 h-6"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="mt-6 lg:mt-0 lg:col-span-4 lg:pl-4 border border-black"
            >
              {/* Order summary */}
              <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                Order Details
              </h2>
              <div className="px-4 py-4">
                <dl className=" space-y-1">
                  {/* ... (your order details code) ... */}
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
                    <dd className="text-sm font-medium text-green-700">Free</dd>
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
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-6 ">
              <button
                type="button"
                className="btn  mb-4 lg:mb-0 lg:mr-2 bg-transparent border-red-500 hover:bg-yellow-500 lg:w-96"
              >
                Process To Checkout
              </button>
              <button
                type="button"
                className="btn  bg-transparent border-red-500 hover:bg-yellow-500 lg:w-96"
              >
                Process To Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
