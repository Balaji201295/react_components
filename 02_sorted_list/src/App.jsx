import React, { useState } from "react";
import { skills } from "./constants";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (inputText.trim() !== "" && !items.includes(inputText.toUpperCase())) {
      setItems([...items, inputText.toUpperCase()]);
      toast.success("Item added");
      setInputText("");
    } else if (items.includes(inputText.toUpperCase())) {
      toast.info("Item already exist");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    toast.warning("Item removed");
  };

  const handleSkillClick = (skill) => {
    const uppercaseSkill = skill.toUpperCase();
    if (!items.includes(uppercaseSkill)) {
      setItems([...items, uppercaseSkill]);
      toast.success("Item added");
    } else {
      toast.info("Item already exist");
    }
  };

  return (
    <main className="w-full min-h-screen bg-blue-300 flex justify-center items-center">
      <section className="w-full max-w-[600px] flex flex-col sm:flex-row justify-start items-start gap-12 bg-white p-12 rounded-xl shadow-xl font-mono">
        <div className="flex-1 flex flex-col">
          {items.length > 0 && (
            <ul className="w-full flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-4 bg-blue-900 text-white  border border-gray-600 rounded-md p-2"
                >
                  {index + 1}.<span>{item}</span>
                  <IoIosClose
                    fontSize={20}
                    className="cursor-pointer"
                    onClick={() => handleRemoveItem(index)}
                  />
                </li>
              ))}
            </ul>
          )}
          <form
            className="w-full mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              value={inputText}
              placeholder="Add Skills"
              className="w-full bg-gray-200 rounded-md p-2 border border-gray-600 outline-none"
              onChange={(e) => setInputText(e.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-lg font-semibold mb-4">Suggested Skills</h2>
          <ul className="flex flex-col gap-1">
            {skills.map(({ text }) => (
              <li
                key={text}
                className="text-base text-gray-500 cursor-pointer"
                onClick={() => handleSkillClick(text)}
              >
                <span>+</span>&nbsp;
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
