import React from "react"; 
import Person1 from "../Images/Person1.webp"
import person2 from "../Images/Person2.webp"
import person3 from "../Images/Pesron3.jpg"

// Sample data for the reviewers
const reviewers = [
  {
    id: 1,
    name: "James Anderson",
    review:
      "This product exceeded my expectations! The quality is top-notch, and the delivery was super fast. Highly recommend!",
    image:Person1,
  },
  {
    id: 2,
    name: "sophia Martin",
    review:
      "Amazing experience! Customer service was very helpful, and the product arrived in perfect condition. Definitely will shop again.",
    image: person2,
  },
  {
    id: 3,
    name: "Emma Roberts",
    review:
      "Great value for money. The packaging was beautiful, and everything worked as described. I couldn't be happier!",
    image: person3,
  },
];

const ReviewCards = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white dark:text-white font-semibold text-center  mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewers.map((reviewer) => (
            <div
              key={reviewer.id}
              className="bg-teal-200 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={reviewer.image}
                  alt={reviewer.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {reviewer.name}
                  </h3>
                  <p className="text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{reviewer.review}</p>
              <div className="text-sm text-blue-500">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
