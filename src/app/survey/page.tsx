/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState,  } from "react";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { motion, AnimatePresence } from "framer-motion";

interface Survey {
  id: number;
  name: string;
  averageScore: number;
  assignedTo: number;
  progress: number;
  dueDate: string;
}

const DashboardPage: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [surveys, setSurveys] = useState<Survey[]>([
    {
      id: 1,
      name: "Quick Insights Survey",
      averageScore: 98,
      assignedTo: 5,
      progress: 10,
      dueDate: "Today",
    },
    {
      id: 2,
      name: "Help Us Improve",
      averageScore: 45,
      assignedTo: 2,
      progress: 100,
      dueDate: "Today",
    },
    {
      id: 3,
      name: "App-solutely Honest Feedback",
      averageScore: 76,
      assignedTo: 4,
      progress: 100,
      dueDate: "3/9/2025",
    },
    {
      id: 4,
      name: "Our Next Update",
      averageScore: 76,
      assignedTo: 5,
      progress: 20,
      dueDate: "2/8/2025",
    },
    {
      id: 5,
      name: "Next Level App Experience",
      averageScore: 15,
      assignedTo: 4,
      progress: 40,
      dueDate: "2/15/2025",
    },
    {
      id: 6,
      name: "App Feedback Hub",
      averageScore: 93,
      assignedTo: 4,
      progress: 100,
      dueDate: "Tomorrow",
    },
  ]);

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Generate avatar stack
  const renderAvatars = (count: number) => {
    const colors = [
      "bg-purple-500",
      "bg-pink-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
    ];
    return (
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full ${
              colors[index % colors.length]
            } border-2 border-white flex items-center justify-center text-xs text-white`}
          >
            {String.fromCharCode(65 + index)}
          </div>
        ))}
      </div>
    );
  };

  // Generate progress bar
  const renderProgressBar = (progress: number) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        {/* Sidebar */}
        <div
          className={`w-[200px] lg:w-[296px] max-md:fixed left-0 top-0 duration-300 ${
            showSideBar ? "top-0" : "-top-[100vh]"
          }`}
        >
          <div className="h-full z-10 relative pt-11 px-3 lg:px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)] px-2.5 lg:px-5">
          <div>
            <div className="top-0 sticky z-10 px-6">
              <AdminHeader heading="Survey" />
            </div>

            {/* table section  */}
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-xl font-semibold">All Survey</h1>
                  <p className="text-sm text-gray-500">6 done this month</p>
                </div>
                <button
                  onClick={toggleModal}
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <span className="mr-2">+</span>
                  Create New Survey
                </button>
              </div>

              {/* Survey Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-gray-600 text-sm">
                      <th className="py-3 px-4 uppercase font-normal">
                        Survey Name
                      </th>
                      <th className="py-3 px-4 uppercase font-normal">
                        Average CSAT Score
                      </th>
                      <th className="py-3 px-4 uppercase font-normal">
                        Assigned To
                      </th>
                      <th className="py-3 px-4 uppercase font-normal">
                        Progress
                      </th>
                      <th className="py-3 px-4 uppercase font-normal">
                        Due Dates
                      </th>
                      <th className="py-3 px-4 uppercase font-normal">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {surveys.map((survey) => (
                      <tr key={survey.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span>{survey.name}</span>
                        </td>
                        <td className="py-3 px-4">
                          {survey.id === 3 ? (
                            <div className="bg-purple-100 px-3 py-1 rounded-md text-center border border-purple-500">
                              <span className="text-purple-700 font-semibold">
                                Table cell
                              </span>
                            </div>
                          ) : (
                            <span
                              className={`font-semibold ${
                                survey.averageScore < 50
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {survey.averageScore}%
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {renderAvatars(survey.assignedTo)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="mr-2 w-8">{survey.progress}%</span>
                            {renderProgressBar(survey.progress)}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span>{survey.dueDate}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-gray-600 hover:text-blue-500">
                              View
                            </button>
                            <button className="text-gray-600 hover:text-blue-500">
                              Edit
                            </button>
                            <button className="text-gray-600 hover:text-red-500">
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
                        <h2 className="text-xl font-bold">Create New Survey</h2>
                        <button
                          onClick={toggleModal}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ✕
                        </button>
                      </div>
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">
                            Survey Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter survey name"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">
                            Assign To
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select team members</option>
                            <option value="1">Team A</option>
                            <option value="2">Team B</option>
                            <option value="3">Team C</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2">
                            Due Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button
                            type="button"
                            onClick={toggleModal}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            Create Survey
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
