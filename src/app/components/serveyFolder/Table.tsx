"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import { CheckIcon, FleterIcon, PulsIcons } from "../common/Icons";
import { surveyTableData } from "../common/Helper";
import CreateSurvey from "./CreateSurvey";
import SurveyData from "./SurveyData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

interface Survey {
  id: number;
  name: string;
  averageScore: number;
  assignedTo: number;
  progress: number;
  dueDate: string;
  endDate: string;
}

const Table: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);
  const [newSurvey, setNewSurvey] = useState<{
    name: string;
    assignedTo: string;
    dueDate: string;
  }>({
    name: "",
    assignedTo: "",
    dueDate: "",
  });

  // Toggle modal functions
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleViewModal = () => setIsViewModalOpen(!isViewModalOpen);
  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSurvey((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Edit button click
  const handleEditClick = (survey: Survey) => {
    setSelectedSurvey(survey);
    setNewSurvey({
      name: survey.name,
      assignedTo: survey.assignedTo.toString(),
      dueDate: survey.dueDate,
    });
    setIsEditModalOpen(true);
  };

  // Handle View button click
  const handleViewClick = (survey: Survey) => {
    setSelectedSurvey(survey);
    setIsViewModalOpen(true);
  };

  // Handle Remove button click
  const handleRemoveClick = (id: number) => {
    if (window.confirm("Are you sure you want to remove this survey?")) {
      alert(`Survey with ID ${id} would be removed`);
    }
  };

  // Handle form submission for new survey

  // Handle form submission for editing survey
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSurvey) return;

    alert(
      `Survey "${selectedSurvey.name}" would be updated to "${newSurvey.name}"`
    );

    setNewSurvey({
      name: "",
      assignedTo: "",
      dueDate: "",
    });
    setIsEditModalOpen(false);
  };

  // Generate progress bar
  const renderProgressBar = (progress: number) => (
    <div className="w-full bg-gray-200 rounded-full h-[2px]">
      <div
        className="bg-[#2C4C4B] h-[2px] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <>
      {/* table section  */}
      <div className="  p-4 mt-[30px] bg-white rounded-2xl shadow-[ 0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2
              className={`${inter.className} text-[#213737] text-lg font-bold leaading-[140%]`}
            >
              All Survey
            </h2>
            <p className="text-sm text-[#9A9999] leading-[140%] font-medium inline-flex items-center gap-1 pt-[6px]">
              <span>
                <CheckIcon />
              </span>{" "}
              {surveyTableData.length} done this month
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className=" border border-[#EAEAEA] cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
              <FleterIcon />
            </button>
            <button
              onClick={toggleModal}
              className="bg-[#2C4C4B] cursor-pointer hover:bg-green-800 text-white p-[12px_20px] rounded-full inline-flex gap-[6px] items-center"
            >
              <span>
                <PulsIcons />
              </span>
              Create New Survey
            </button>
          </div>
        </div>

        {/* Survey Table */}
        <div className="overflow-x-auto whitespace-nowrap">
          <table
            className={`min-w-full bg-white rounded-lg overflow-scroll ${inter.className}`}
          >
            <thead className="bg-gray-50 border-b border-b-[#EAEBEB]">
              <tr className="text-left serve text-gray-600 text-sm">
                <th className="py-3 px-5 uppercase font-normal">Survey Name</th>
                <th className="py-3 px-5 uppercase font-normal">
                  Average CSAT Score
                </th>
                <th className="py-3 px-5 uppercase font-normal">Assigned To</th>
                <th className="py-3 px-5 uppercase font-normal">Progress</th>
                <th className="py-3 px-5 uppercase font-normal">Due Dates</th>
                <th className="py-3 px-5 uppercase font-normal">Action</th>
              </tr>
            </thead>

            {/* table itmes  */}
            <tbody className="">
              {surveyTableData.map((survey: any) => (
                <tr
                  key={survey.id}
                  className="hover:bg-gray-50 border-b border-b-[#EAEBEB]"
                >
                  <td className="py-3 px-5">
                    <span>{survey.name}</span>
                  </td>
                  <td className="py-3 px-5">
                    <span className=" !text-[#213737]">
                      {survey.averageScore}%
                    </span>
                  </td>

                  <td className="py-3 px-5 flex gap-1">
                    {Array(survey.averageScore < 50 ? 1 : 1) // 4 images if score < 50, else 1 image
                      .fill(null)
                      .map((_, index) => (
                        <Image
                          key={index}
                          src={
                            survey.averageScore < 50
                              ? "/images/png/assigned_avatr_img.png"
                              : "/images/png/assigned_avatr_img.png"
                          }
                          alt="Score Indicator"
                          width={74}
                          height={20}
                        />
                      ))}
                  </td>

                  <td className="py-3 px-5">
                    <div className=" pb-2">
                      <span className=" w-10 h-1">{survey.progress}%</span>
                      {renderProgressBar(survey.progress)}
                    </div>
                  </td>

                  <td className="py-3 px-5 ">
                    <span className="text-sm font-normal leading-[142%]">
                      {survey.dueDate}
                    </span>
                  </td>

                  <td className="py-3 px-5 ">
                    <div className="flex space-x-6  w-fit">
                      <button
                        onClick={() => handleViewClick(survey)}
                        className="text-[#9A9999] hover:text-blue-500 cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEditClick(survey)}
                        className="text-[#9A9999] hover:text-blue-500 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemoveClick(survey.id)}
                        className=" hover:text-red-500 cursor-pointer text-[#9A9999]"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Create Survey Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleModal}
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
                className="bg-white rounded-lg p-6 w-full max-w-[955px] z-10"
              >
                <CreateSurvey
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* survey model section  */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0  flex items-center justify-center z-50 h-full overflow-y-scroll">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleModal}
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
                className="bg-white rounded-lg p-6 w-full max-w-[955px] z-10"
              >
                <SurveyData
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* View Survey Modal */}
        <AnimatePresence>
          {isViewModalOpen && selectedSurvey && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleViewModal}
                className="absolute inset-0 bg-black bg-opacity-50"
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
                className="bg-white rounded-lg p-6 w-full max-w-md z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Survey Details</h2>
                  <button
                    onClick={toggleViewModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Survey Name</p>
                    <p className="font-medium">{selectedSurvey.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average CSAT Score</p>
                    <p
                      className={`font-medium ${
                        selectedSurvey.averageScore < 50
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {selectedSurvey.averageScore}%
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <div className="flex items-center mt-1">
                      <span className="mr-2">{selectedSurvey.progress}%</span>
                      {renderProgressBar(selectedSurvey.progress)}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Due Date</p>
                    <p className="font-medium">{selectedSurvey.dueDate}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={toggleViewModal}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Edit Survey Modal */}
        <AnimatePresence>
          {isEditModalOpen && selectedSurvey && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleEditModal}
                className="absolute inset-0 bg-black bg-opacity-50"
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
                className="bg-white rounded-lg p-6 w-full max-w-md z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Edit Survey</h2>
                  <button
                    onClick={toggleEditModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Survey Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newSurvey.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter survey name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Assign To
                    </label>
                    <select
                      name="assignedTo"
                      value={newSurvey.assignedTo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select team members</option>
                      <option value="1">Team A (1)</option>
                      <option value="2">Team B (2)</option>
                      <option value="3">Team C (3)</option>
                      <option value="4">Team D (4)</option>
                      <option value="5">Team E (5)</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      value={newSurvey.dueDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={toggleEditModal}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Table;
