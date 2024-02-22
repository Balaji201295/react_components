import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ratings } from "./constants";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedRating) {
      setSubmitted(true);
    } else {
      alert("select any one of rating");
    }
  };

  return (
    <>
      <main className="w-full min-h-screen bg-violet-300 flex justify-center items-center">
        <section className="w-full rounded-xl shadow-xl max-w-[700px] bg-blue-950 p-6 sm:p-8 md:p-12 text-center relative">
          <div className="absolute right-6 top-6">
            <IoCloseSharp color="#fff" />
          </div>
          {submitted ? (
            <p className="text-green-500">
              Thank you for your valuable feedback!
            </p>
          ) : (
            <>
              <h1 className="text-xl max-w-[450px] mx-auto mb-6">
                How likely are you to recommend FrontEndPro to someone you know?
              </h1>
              <ul className="flex items-center gap-4">
                {ratings.map(({ rating }) => (
                  <li
                    key={rating}
                    className={`flex-1 w-full min-w-10 border border-black rounded p-2 cursor-pointer bg-blue-900 shadow-md ${
                      selectedRating === rating ? "bg-blue-800" : ""
                    }`}
                    onClick={() => setSelectedRating(rating)}
                  >
                    {rating}
                  </li>
                ))}
              </ul>
              {selectedRating && (
                <div className="mt-4">
                  <p className="text-blue-200">
                    {ratings.find((r) => r.rating === selectedRating)?.comment}
                  </p>
                </div>
              )}
              <div className="flex justify-between items-center mt-16">
                <button
                  type="button"
                  className="border border-blue-800 text-sm px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="border border-blue-800 bg-blue-800 text-sm px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
