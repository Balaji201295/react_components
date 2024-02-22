import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

function App() {
  const [copiedLink, setCopiedLink] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [emptyLinkAlert, setEmptyLinkAlert] = useState(false);

  const handleLinkClick = (link) => {
    if (link) {
      setCopiedLink(link);
      setEmptyLinkAlert(false); // Reset empty link alert
    } else {
      // Show an alert if the link is empty
      setEmptyLinkAlert(true);
      setShowAlert(false); // Hide link copied alert if shown
    }
  };

  const handleCopyButtonClick = () => {
    if (copiedLink) {
      // Copy the link to the clipboard
      navigator.clipboard.writeText(copiedLink);
      setShowAlert(true);

      // Clear the alert after a few seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      // Show an alert if the link is empty
      setEmptyLinkAlert(true);
      setShowAlert(false); // Hide link copied alert if shown
    }
  };

  return (
    <main className="w-full min-h-screen bg-pink-100 flex justify-center items-center">
      <section className="w-full rounded-xl shadow-xl max-w-[600px] bg-orange-50 p-6 sm:p-8 md:p-10">
        <h1 className="text-black/75 font-semibold text-2xl capitalize">
          Share the Link:
        </h1>
        <div className="flex justify-between items-center my-6">
          {[
            { href: "https://www.facebook.com", icon: <FaFacebookF /> },
            { href: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
            { href: "https://www.instagram.com", icon: <FaInstagram /> },
            { href: "https://www.twitter.com", icon: <FaTwitter /> },
            { href: "https://www.youtube.com", icon: <FaYoutube /> },
            { href: "https://www.telegram.com", icon: <FaTelegram /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="bg-gray-200 text-black/75 border bg-transparent hover:border-black/75 transition-all duration-300 p-4 rounded-full shadow-md cursor-pointer"
              onClick={() => handleLinkClick(item.href)}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-black/90 my-4">or copy link</p>
        <form>
          <div className="w-full flex justify-start items-center text-black/75 bg-gray-200 rounded-lg px-4">
            <input
              type="text"
              name="link"
              id="link"
              className="bg-transparent flex-1 text-black/75 outline-none h-[50px]"
              value={copiedLink}
              readOnly
            />
            <button
              type="button"
              className="text-sm font-bold"
              onClick={handleCopyButtonClick}
            >
              Copy
            </button>
          </div>
        </form>
        {(showAlert || emptyLinkAlert) && (
          <div
            className={`mt-4 
            ${emptyLinkAlert ? "bg-red-100" : "bg-green-100"} 
            ${emptyLinkAlert ? "border-red-500" : "border-green-500"} 
            ${emptyLinkAlert ? "text-red-800" : "text-green-800"}
            border p-2 rounded`}
          >
            {emptyLinkAlert ? "Link is empty!" : "Link copied!"}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
