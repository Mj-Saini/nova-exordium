<<<<<<< HEAD
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
=======
import React from "react";
import Layout from "../components/common/Layout";
import Table from "../components/serve/Table";
>>>>>>> 36fb9df206fd3a3ac0ace09ca5637a545da5761f

const page = () => {
  return (
    <>
      <Layout heading="Profile">
        <Table />
      </Layout>
    </>
  );
};

export default page;
