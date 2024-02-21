import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ratings } from "./constants";

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => setSelectedRating(rating);

  return (
    <main className="w-full min-h-screen bg-blue-300 flex justify-center items-center">
      <section className="w-full max-w-[500px] bg-white p-12 rounded-xl shadow-xl text-center">
        <h1 className="text-base font-semibold font-mono">
          How many stars would you give to our Online Code Editor?
        </h1>
        <div className="flex justify-center items-center my-4 gap-4">
          {ratings.map(({ rating }) => (
            <div
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className="drop-shadow-md"
            >
              <FaStar
                fontSize={36}
                className={`cursor-pointer ${
                  selectedRating && rating <= selectedRating
                    ? "text-yellow-400"
                    : "text-black"
                }`}
              />
            </div>
          ))}
        </div>
        {selectedRating && (
          <div>
            <p className="font-normal text-gray-400 text-xs">
              {ratings.find((item) => item.rating === selectedRating).text}
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
