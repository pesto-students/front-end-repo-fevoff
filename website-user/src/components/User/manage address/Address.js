import React from "react";

const Address = () => {
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
      mobileNo: "8003100827",
    },
  ];
  return (
    <div>
      <div>
        <div className="mx-auto max-w-7xl px-2 lg:px-0 ">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h3 className="text-2xl font-bold underline mt-6">Manage Address</h3>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
              <section
                aria-labelledby="cart-heading"
                className="rounded-l border border-black lg:col-span-12"
              >
                <ul role="list" className="divide-y divide-gray-400">
                  {address.map((address, addressIdx) => (
                    <div key={address.id} className="flex justify-between">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="">
                                <h3 className="text-sm">
                                  <p className="font-semibold text-black">
                                    Name: {address.name}
                                  </p>
                                  <p className="font-semibold text-black">
                                    Mobile Number: {address.mobileNo}
                                  </p>
                                  <p className="font-semibold text-black">
                                    Email ID: {address.emailId}
                                  </p>
                                  <p className="font-semibold text-black">
                                    Address: {address.address}
                                  </p>
                                </h3>
                                <div className="flex mt-3">
                                  <div className="">
                                    <button
                                      type="button"
                                      className=" btn w-16  bg-transparent border-red-500 hover:bg-yellow-500"
                                    >
                                      Edit
                                    </button>
                                  </div>
                                  <div className="">
                                    <button
                                      type="button"
                                      className=" btn ml-2 w-16 bg-transparent border-red-500 hover:bg-yellow-500"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </section>
            </div>
            <div className="m-10">
              <button
                type="button"
                className=" btn  ml-44 w-80 bg-transparent border-red-500 hover:bg-yellow-500"
              >
                Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
