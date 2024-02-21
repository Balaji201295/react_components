import React from "react";

function App() {
  return (
    <main className="flex justify-center items-center p-4 min-h-screen bg-blue-300">
      <section className="rounded-xl shadow-xl max-w-[700px] bg-white p-6 sm:p-8 md:p-12 text-center">
        <h1 className="text-3xl font-semibold pb-4">
          Level up your frontend skills
        </h1>
        <p className="text-base text-gray-600 pb-4">
          Sign up for our newsletter to receive weekly coding challenges and
          improve your skills.
        </p>
        <form>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
              className="flex-1 max-w-[320px] bg-gray-100 px-4 py-3 rounded outline-none border border-gray-500"
            />
            <button
              type="submit"
              className="bg-black rounded text-gray-200 px-6 py-3"
            >
              Subscribe
            </button>
          </div>

          <label className="flex justify-start items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="mt-[6px]"
            />
            <span className="text-left text-gray-600 text-sm">
              By checking this box, you agree to receive our weekly newsletter
              with coding challenges, tips, and more. You can unsubscribe
              anytime.
            </span>
          </label>
        </form>
      </section>
    </main>
  );
}

export default App;
