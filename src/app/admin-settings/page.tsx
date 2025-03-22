"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { GreenArrowIcons, WhiteEditIcons } from "../components/common/Icons";
import { Inter } from "next/font/google";

import Image from "next/image";
import MangaeSection from "../components/adminsetting/MangaeSection";
import AdminForm from "../components/adminsetting/AdminForm";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const DashboardPage = ({ isModalClose }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={`w-[200px] lg:w-[296px] max-md:fixed left-0 duration-300 ${
            showSideBar ? "top-0" : "-top-[100vh]"
          }`}
        >
          <div className="h-full z-10 relative pt-11 px-3 lg:px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className="w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)]  px-2.5 lg:px-5">
          <div>
            {/* admin section  */}
            <div className="relative">
              <div className="bg-[url('/images/png/adminsetting_bg_img.png')] bg-no-repeat bg-cover bg-center px-6 mt-6 rounded-2xl h-[300px]">
                {/* AdminHeader section  */}
                <div className="top-0 sticky z-10">
                  <AdminHeader heading="Profile" />
                </div>
                {/* AdminHeader section  */}
              </div>

              {/* profile section  */}
              <div className="w-full flex justify-center">
                <div className="rounded-[15px] p-4 flex flex-col md:flex-row justify-between items-center gap-5 shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.02)] backdrop-blur-[10.5px] border-[1.5px] border-white bg-gradient-to-tr from-white/82 to-white/80 absolute -bottom-[3.333vw] max-w-[1540px] w-[97%] mx-auto">
                  {/* profile */}
                  <div className="flex items-center gap-5">
                    <div className="w-fit relative">
                      <Image
                        src="/images/png/gorge_img.png"
                        alt="gorge_img"
                        width={91}
                        height={115}
                        className="rounded-2xl"
                      />
                      <span className="bg-white p-[7px] rounded-[8px] absolute -right-[0.521vw] bottom-0 shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.06)]">
                        <GreenArrowIcons />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base lg:text-lg font-bold leading-[140%] text-[#213737]">
                        Gregory Hodkiewicz
                      </h3>
                      <p className="text-sm font-normal leading-[140%] text-[#9A9999]">
                        Gregory68@gmail.com
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#2C4C4B] p-[12px_20px] rounded-full inline-flex gap-2 items-center hover:bg-[#3b6261] text-white text-sm font-bold leading-[140%] capitalize cursor-pointer duration-500"
                  >
                    <span>
                      <WhiteEditIcons />
                    </span>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-[80px]">
              {/* MangaeSection  */}
              <MangaeSection />
            </div>
            <AnimatePresence>
              {isModalOpen && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black/20 z-20"
                  onClick={() => setIsModalOpen(false)}
                  aria-hidden="true"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} // Start hidden
                    animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
                    exit={{ opacity: 0, scale: 0.9 }} // Fade out and shrink
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-lg"
                    role="dialog"
                    aria-modal="true"
                    onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                  >
                    {/* <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      ✕
                    </button> */}
                    <AdminForm />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
