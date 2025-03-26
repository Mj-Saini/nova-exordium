"use client";

import React, { useState } from "react";
import {
  AdminCloseIcons,
  CopyIcons,
  DeletIcon,
  DropdownIcon,
  EditIcon,
  PulsIcons,
} from "../common/Icons";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

interface SurveyDataProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const defaultQuestion = {
  question: "",
  questionType: "",
  answer: "Short answer text",
};

const SurveyData: React.FC<SurveyDataProps> = ({ setIsModalOpen }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [questions, setQuestions] = useState([defaultQuestion]);

  const toggleOption = () => {
    setIsEnabled((prev) => !prev);
  };

  const addNewQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, defaultQuestion]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select question type");
  const options = [
    { id: 1, label: "Multiple Choice" },
    { id: 2, label: "Short Answer" },
    { id: 3, label: "Paragraph" },
  ];

  return (
    <section className={inter.className}>
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-b-[#9A9999]">
        <h2 className="text-[#333] text-xl tracking-[0.4px] font-semibold leading-[90%]">
          Create New Survey
        </h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer border border-[#EAEAEA] rounded-full p-[6px]"
        >
          <AdminCloseIcons />
        </button>
      </div>

      <div className="pt-[30px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[#213737] text-lg font-bold leading-[140%]">
            Survey - App Feedback
          </h3>
          <div className="flex items-center gap-4">
            <p className="text-[#333] text-sm font-semibold leading-[140%]">
              2/3/2025 - 24/3/2025
            </p>
            <span>
              <EditIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="pt-[6px]">
        <p className="text-[#333] text-sm font-normal leading-[140%]">
          Lorem ipsum dolor sit amet consectetur. Euismod proin non mauris sit
          sed egestas. Cum egestas non leo nibh adipiscing. Luctus et lacus eget
          maecenas condimentum scelerisque.
        </p>

        {questions.map((q, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 border-dashed border-[#477D7C] mt-6"
          >
            <form action="">
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="mb-4 w-full">
                  <label className="block text-base text-[#213737] font-medium pb-1">
                    Question
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                    placeholder="Write your question"
                  />
                </div>
                <div className="mb-4 w-full relative">
                  <label className="block text-base text-[#213737] font-medium pb-1">
                    Question Type
                  </label>
                  <div
                    className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none cursor-pointer flex items-center justify-between bg-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-[#9A9999] text-sm">{selected}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <DropdownIcon />
                    </motion.div>
                  </div>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute w-full mt-2 bg-white border border-[#D6D6D6] rounded-2xl shadow-lg z-10"
                    >
                      {options.map((option) => (
                        <li
                          key={option.id}
                          className="p-3 hover:bg-[#2C4C4B] flex items-center gap-2 cursor-pointer text-[#333] text-sm font-normal leading-[140%] hover:text-white"
                          onClick={() => {
                            setSelected(option.label);
                            setIsOpen(false);
                          }}
                        >
                          <span className="text-[#213737] text-sm">
                            {option.label}
                          </span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>
              <textarea
                className="w-full p-3 lg:px-5 lg:py-[15px] border border-[#D6D6D6] rounded-2xl text-[#9A9999] text-sm resize-none h-[50px]"
                defaultValue={q.answer}
              />
              <div className="flex justify-end items-center gap-4 pt-6">
                <span className="cursor-pointer">
                  <DeletIcon />
                </span>
                <span className="cursor-pointer">
                  <CopyIcons />
                </span>
                <div className="w-[1px] h-[22px] bg-[#D6D6D6]"></div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleOption}
                    type="button"
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isEnabled ? "bg-[#2C4C4B]" : "bg-[#D6D6D6]"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform cursor-pointer ${
                        isEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <p className="block text-base text-[#213737] font-medium pb-1">
                    Required
                  </p>
                </div>
              </div>
            </form>
          </div>
        ))}

        <button
          onClick={addNewQuestion}
          className="bg-[#2C4C4B] cursor-pointer hover:bg-green-800 text-white p-[12px_20px] rounded-full inline-flex gap-[6px] items-center mt-6"
        >
          <span>
            <PulsIcons />
          </span>
          Add New Question
        </button>
      </div>

      <div className="flex justify-end space-x-3 pt-6">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="px-8 py-3 text-sm leading-normal font-bold text-[#333] hover:bg-gray-50 rounded-2xl border border-[#EAEAEA] cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 text-sm font-bold leading-[140%] text-white bg-[#2C4C4B] cursor-pointer hover:bg-teal-700 rounded-2xl"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default SurveyData;
