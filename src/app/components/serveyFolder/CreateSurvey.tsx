"use client";
import React, { useState } from "react";
import { AdminCloseIcons } from "../common/Icons";
import { motion, AnimatePresence } from "framer-motion";
import SurveyData from "./SurveyData";

interface Survey {
  id: number;
  name: string;
  averageScore: number;
  assignedTo: number;
  progress: number;
  dueDate: string;
}

interface CreateSurveyProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateSurvey: React.FC<CreateSurveyProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [newSurvey, setNewSurvey] = useState<{
    name: string;
    assignedTo: string;
    dueDate: string;
  }>({
    name: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSurvey((prev) => ({ ...prev, [name]: value }));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const assignedCount = parseInt(newSurvey.assignedTo, 10) || 3;

    const newSurveyObj: Survey = {
      id: Math.floor(Math.random() * 1000),
      name: newSurvey.name,
      averageScore: 0,
      assignedTo: assignedCount,
      progress: 0,
      dueDate: newSurvey.dueDate,
    };

    alert(`New survey "${newSurveyObj.name}" would be created`);

    setNewSurvey({
      name: "",
      assignedTo: "",
      dueDate: "",
    });
    setIsModalOpen(false);
  };

  // survey model useState
  const [isSurveyModel, setIsSurveyModel] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && !isSurveyModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4 "
          >
            <div
              className="absolute inset-0 bg-black/0"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="bg-white rounded-lg p-6 w-full max-w-[955px] z-10"
            >
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
              <form onSubmit={handleCreateSubmit}>
                <div className="mb-4">
                  <label className="block text-base text-[#213737] font-medium pb-1">
                    Survey Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newSurvey.name}
                    onChange={handleInputChange}
                    className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                    placeholder="Type..."
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-base text-[#213737] font-medium pb-1">
                    Assign To
                  </label>
                  <input
                    type="text"
                    name="assignedTo"
                    value={newSurvey.assignedTo}
                    onChange={handleInputChange}
                    className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                    placeholder="Type here..."
                  />
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div className="mb-4 w-full">
                    <label className="block text-base text-[#213737] font-medium pb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      value={newSurvey.dueDate}
                      onChange={handleInputChange}
                      className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label className="block text-base text-[#213737] font-medium pb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="px-8 py-3 text-sm font-bold text-[#333] hover:bg-gray-50 rounded-2xl border border-[#EAEAEA] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsSurveyModel(true)}
                    type="submit"
                    className="px-8 py-3 text-sm font-bold text-white bg-[#2C4C4B] cursor-pointer hover:bg-teal-700 rounded-2xl"
                  >
                    Next
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* survey model section  */}
      <AnimatePresence>
        {isSurveyModel && (
          <div className="fixed inset-0  flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSurveyModel(false)}
              className="absolute inset-0 bg-black/20"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className=" h-fit   w-full max-w-[955px] z-10"
            >
              <SurveyData
                isSurvyModel={isSurveyModel}
                setIsSurvyModel={setIsSurveyModel}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreateSurvey;