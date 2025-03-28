"use client";
import React, { useState } from "react";
import { GreenEditIcons, WhiteEditIcons } from "../components/common/Icons";
import Image from "next/image";
import MangaeSection from "../components/adminsetting/MangaeSection";
import AdminForm from "../components/adminsetting/AdminForm";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/common/Layout";



const AdminSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Layout heading="Profile" sub_heading="Profile">
      <div className="relative !-mt-[120px] pt-4">
        <div className="bg-[url('/images/png/adminsetting_bg_img.png')] bg-no-repeat bg-cover bg-center px-6 mt-6 rounded-2xl h-[300px] "></div>

        {/* Profile Section */}
        <div className="w-full flex justify-center">
          <div className="rounded-[15px] p-4 flex flex-col md:flex-row justify-between items-center gap-5 shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.02)] backdrop-blur-[10.5px] border-[1.5px] border-white bg-gradient-to-tr from-white/82 to-white/80 absolute -bottom-[3.333vw] max-w-[1540px] w-[97%] mx-auto">
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
                  <GreenEditIcons />
                </span>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold text-[#213737]">
                  Gregory Hodkiewicz
                </h3>
                <p className="text-sm font-normal text-[#9A9999]">
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

      {/* Manage Section */}
      <div className="mt-[80px]">
        <MangaeSection />
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-lg max-w-[486px] w-full p-4 lg:p-6 shadow-lg"
              role="dialog"
              aria-modal="true"
            >
              <AdminForm setIsModalOpen={setIsModalOpen} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default AdminSettings;
