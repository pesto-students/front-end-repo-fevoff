import { Star } from "lucide-react";
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
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 5,
    isHalf: true,
  };

  return (
    <>
      <div className="review-section py-8">
        <div className="review-heading text-center">
          <h4 className="text-4xl italic">Write A Review</h4>
        </div>
        <div className="review-box py-6">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="write-review w-96 mx-auto">
              <form className="mt-3" onSubmit={handleSubmit} autoComplete="off" >
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" /> <Star size={40} className="start-rating" />
                </div>
                <div className="grid grid-cols-1">
                  <input className="review-input" type="text" name="name" placeholder="Enter Username" value={formData.name} onChange={handleChange} />

                  <input className="review-input" type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />

                  <textarea className="review-input textarea" name="review" placeholder="Your review" value={formData.review} onChange={handleChange} />

                  <button className="review-btn w-100" type="submit" >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
