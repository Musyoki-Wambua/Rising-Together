import { useState, useEffect } from 'react';

const ReviewsCards = ({ match }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('https://rising-together-ni0b.onrender.com/reviews');
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter(review => review.organization_id === parseInt(match.params.id));

  return (
    <div className="flex flex-wrap justify-center">
      {filteredReviews.map(review => (
        <div key={review.id} className="max-w-sm mx-2 my-4 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 py-2">
            <h2 className="font-bold text-xl mb-2">{review.organization_name}</h2>
            <p className="text-gray-600 text-base">{review.comments}</p>
          </div>
          <div className="px-4 py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{review.rating}/10</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{review.username}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsCards;
