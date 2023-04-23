import React, { useState } from "react";

const Review = ({ rating, description }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review); 
    setReview(""); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-4 w-1/2 mx-auto">
        <label
          htmlFor="review"
          className="block text-gray-700 font-bold mb-2"
        >
          Leave a review:
        </label>
        <textarea
          id="review"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 mx-auto"
          rows="5"
          placeholder="Write your review here"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Review;
