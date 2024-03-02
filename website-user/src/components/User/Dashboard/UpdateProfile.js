import React from "react";

const UpdateProfile = () => {
  return (
    // <div>
    //   <form>
    //     <div className="border-b border-gray-900/10 pb-12 mt-16">
    //       <h2 className="font-bold leading-7 text-gray-900 lg:text-2xl italic">
    //         User Details
    //       </h2>

    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
    //         <div className="sm:col-span-3">
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="first-name"
    //               id="first-name"
    //               placeholder="Enter Name"
    //               autoComplete="given-name"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="dob"
    //               id="dob"
    //               placeholder="Enter DOB"
    //               autoComplete="family-name"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               placeholder="Enter Email"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <div className="mt-2">
    //             <select
    //               id="gender"
    //               name="gender"
    //               autoComplete="gender"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             >
    //               <option>Male</option>
    //               <option>Female</option>
    //             </select>
    //           </div>
    //         </div>

    //         <div className="col-span-3">
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="street-address"
    //               id="street-address"
    //               placeholder="Enter Mobile Number"
    //               autoComplete="street-address"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             />
    //           </div>
    //         </div>

    //         <div className="col-span-3">
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="street-address"
    //               id="street-address"
    //               placeholder="Enter Alternate Mobile Number"
    //               autoComplete="street-address"
    //               className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100    sm:text-sm sm:leading-6 h-12"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3 sm:col-start-1">
    //           <div className="mt-2">
    //             <input type="file" className="file-input" />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-1 ">
    //           <div className="avatar">
    //             <div className="w-24 rounded-full">
    //               <img
    //                 src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex justify-center mt-12">
    //       <button
    //         type="button"
    //         className="btn w-80 bg-transparent border-red-500 hover:bg-yellow-500 "
    //       >
    //         Update Details
    //       </button>
    //     </div>
    //   </form>
    // </div>

<div>
<form>
  <div className="border-b border-gray-900/10 pb-12 mt-16">
    <h2 className="font-bold leading-7 text-gray-900 lg:text-2xl italic">
      User Details
    </h2>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="sm:col-span-1">
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Name"
            autoComplete="given-name"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <div className="mt-2">
          <input
            type="text"
            name="dob"
            id="dob"
            placeholder="Enter DOB"
            autoComplete="family-name"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter Email"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <div className="mt-2">
          <select
            id="gender"
            name="gender"
            autoComplete="gender"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            placeholder="Enter Mobile Number"
            autoComplete="street-address"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="mt-2">
          <input
            type="text"
            name="alternate-mobile"
            id="alternate-mobile"
            placeholder="Enter Alternate Mobile Number"
            autoComplete="street-address"
            className="block w-full px-2 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-300 placeholder:text-black-100 sm:text-sm sm:leading-6 h-12"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="mt-2">
          <input type="file" className="file-input" />
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-12">
    <button
      type="button"
      className="btn w-80 bg-transparent border-red-500 hover:bg-yellow-500 mb-8"
    >
      Update Details
    </button>
  </div>
</form>
</div>

  );
};

export default UpdateProfile;
