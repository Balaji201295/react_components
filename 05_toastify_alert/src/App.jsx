import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showToast = (type) => {
    const messages = {
      success: "Item is successfully added",
      info: "Item is already exist",
      warning: "Item is deleted successfully",
      error: "Please select any one of item",
    };
    toast[type](messages[type]);
  };

  const renderButton = (type, color) => (
    <button
      type="button"
      onClick={() => showToast(type)}
      className={`text-base w-full max-w-48 bg-${color}-500 rounded p-2`}
    >
      {type}
    </button>
  );

  return (
    <main className="w-full min-h-screen bg-violet-300 flex justify-center items-center">
      <section className="w-full flex flex-col items-center gap-6 rounded-xl shadow-xl max-w-96 bg-slate-100 p-6 sm:p-8 md:p-12">
        {renderButton("success", "green")}
        {renderButton("info", "blue")}
        {renderButton("warning", "orange")}
        {renderButton("error", "red")}
        <ToastContainer
          stacked
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </section>
    </main>
  );
}

export default App;
