import React, { useState } from "react";

const Review = ({ user_id, organization_id, organization_name, username }) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_id,
      organization_id,
      organization_name,
      username,
      rating,
      comments
    };

    fetch("https://rising-together-ni0b.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error(error);
      console.log("Response from server:", error.response);
    });

    setRating(0);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 mx-auto">
        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
          Rating:
        </label>
        <input
          id="rating"
          type="number"
          min="1"
          max="10"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 mx-auto"
          placeholder="Enter a rating from 1 to 10"
          onChange={(e) => setRating(parseInt(e.target.value))}
          value={rating}
        />
      </div>
      <div className="mb-4 mx-auto">
        <label
          htmlFor="comments"
          className="block text-gray-700 font-bold mb-2"
        >
          Comments:
        </label>
        <textarea
          id="comments"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 mx-auto"
          rows="5"
          placeholder="Write your comments here"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 font-serif text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Review;
