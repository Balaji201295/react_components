import React from "react";
import { Profile } from "./assets";

function App() {
  return (
    <main className="w-full min-h-screen bg-violet-300 flex justify-center items-center">
      <section className="w-full flex flex-col sm:flex-row justify-start items-center sm:items-start sm:gap-12 gap-0 rounded-xl shadow-xl max-w-[600px] bg-white p-6 sm:p-8 md:p-12 relative m-4 sm:m-0">
        <div>
          <img
            src={Profile}
            alt="Balaji"
            className="w-32 h-32 object-cover rounded-full border-[6px] border-gray-200"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start mt-6">
          <h1 className="text-black/75 text-xl font-semibold">Balaji R</h1>
          <h3 className="text-gray-400 text-sm">Frontend Developer</h3>
          <p className="text-gray-600 text-xs my-3 font-medium">
            Passionate frontend developer with expertise HTML, CSS, Javascript,
            React, Git and GitHub
          </p>
          <div className="flex justify-start items-start gap-6 text-center text-black/75 text-xs font-medium">
            <div>
              <p>1999</p>
              <p>Followers</p>
            </div>
            <div className="w-[1px] h-[30px] m-auto bg-black/30"></div>
            <div>
              <p>190</p>
              <p>Following</p>
            </div>
            <div className="w-[1px] h-[30px] m-auto bg-black/30"></div>
            <div>
              <p>15</p>
              <p>Projects</p>
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-4 mt-6">
            <button
              type="button"
              className="bg-blue-300 border w-full max-w-24 border-gray-600 text-xs py-2 text-center rounded"
            >
              Follow
            </button>
            <button
              type="button"
              className="bg-orange-300 border w-full max-w-24 border-gray-600 text-xs py-2 text-center rounded"
            >
              View Profile
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
