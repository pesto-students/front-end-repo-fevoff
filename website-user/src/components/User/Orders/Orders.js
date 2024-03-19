import React, { useEffect, useState } from "react";

import { getOrderDetils } from "../../../Action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/orderConstants";
import "./orders.css";

const Orders = () => {
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
      size: "8 UK",
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
    },
  ];

  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();
  console.log(userId);
  const { error, loading, orderDetails } = useSelector(
    (state) => state.orderDetails
  );

  // console.log(getOrderDetils,orderDetails);

  useEffect(() => {
    const storeUserID = localStorage.getItem("id");

    if (storeUserID) setUserId(storeUserID);

    dispatch(getOrderDetils(userId));
  }, [userId]);

  return (
    <>
      <div className="container mx-auto lg:px-0 ">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          {
            products.map((product, productIdx) => (
              <div key={product.id} className="lg:col-span-12 border p-2">
                <li className="flex  py-6 sm:py-6 ml-3">
                  <div className="flex-shrink-0 ">
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
                          <p className="border-l border-gray-200  text-sm text-gray-500">
                            {product.size}
                          </p>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-section">
                    <p>Arriving Tomorrow by 6 PM</p>
                    <p className="text-xs">Your Item has been shipped</p>
                    <button type="button" className="web-btn-2">
                      Write Review
                    </button>
                  </div>
                </li>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Orders;
