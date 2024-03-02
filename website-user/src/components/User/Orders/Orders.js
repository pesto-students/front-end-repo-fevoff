import React from "react";

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
  return (
    // <div>
    //   <div>
    //     <div className="mx-auto max-w-7xl px-2 lg:px-0 ">
    //       <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    //         <form className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
    //           <section
    //             aria-labelledby="cart-heading"
    //             className=" border border-black lg:col-span-8"
    //           >
    //             <ul role="list" className="divide-y divide-gray-300">
    //               {products.map((product, productIdx) => (
    //                 <div key={product.id} className="">
    //                   <li className="flex py-6 sm:py-6 ml-3">
    //                     <div className="flex-shrink-0 ">
    //                       <img
    //                         src={product.imageSrc}
    //                         alt={product.name}
    //                         className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
    //                       />
    //                     </div>

    //                     <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
    //                       <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
    //                         <div>
    //                           <div className="flex justify-between">
    //                             <h3 className="text-sm">
    //                               <a
    //                                 href={product.href}
    //                                 className="font-semibold text-black"
    //                               >
    //                                 {product.name}
    //                               </a>
    //                             </h3>
    //                           </div>
    //                           <div className="mt-1 flex flex-col text-sm">
    //                             <p className="border-l border-gray-200  text-sm text-gray-500">
    //                               {product.size}
    //                             </p>
    //                           </div>
    //                           <div className="mt-1">
    //                             <p className="text-sm font-medium text-gray-900">
    //                               {product.price}
    //                             </p>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className=" flex flex-col justify-between">
    //                       <div className="flex flex-col mr-5">
    //                         <span>Arriving Tomorrow by 6 PM</span>
    //                         <span className="text-xs">Your Item has been shipped</span>
    //                       </div>
    //                       <div className="mt-16">
    //                         <button
    //                           type="button"
    //                           className="btn bg-transparent hover:bg-yellow-500 border border-red-400 ml-28"
    //                         >
    //                           Write Review
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </div>
    //               ))}
    //             </ul>
    //           </section>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="mx-auto max-w-7xl px-2 lg:px-0 ">
  <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    <form className="mt-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
      {products.map((product, productIdx) => (
        <div key={product.id} className="lg:col-span-12">
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

            <div className="mt-4 sm:mt-0">
              <span>Arriving Tomorrow by 6 PM</span>
              <span className="text-xs">Your Item has been shipped</span>
              <button
                type="button"
                className="btn bg-transparent hover:bg-yellow-500 border border-red-400 mt-2"
              >
                Write Review
              </button>
            </div>
          </li>
        </div>
      ))}
    </form>
  </div>
</div>


  );
};

export default Orders;
