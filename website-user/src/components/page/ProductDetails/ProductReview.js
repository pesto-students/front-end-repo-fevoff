import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const ProductReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 5,
    isHalf: true,
  };

  return (
    <>
      <div>
        <h2 className="flex text-3xl justify-center">Write a Review</h2>
        <div className="flex w-1/2 justify-end">
          <div className="">
            <div className="">
              <div className="flex flex-col">
                <div>
                  <ReactStars {...options} />
                </div>

                <form
                  className="flex flex-col w-44 border-black"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="m-2"
                    type="text"
                    name="name"
                    placeholder="Enter Username"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="m-2"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    className="m-2"
                    name="review"
                    placeholder="Your review"
                    value={formData.review}
                    onChange={handleChange}
                  />
                  <button
                    className="btn bg-transparent border-red-300 mb-5 hover:bg-yellow-500"
                    type="submit"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     
    </>
  );
};

export default ProductReview;
