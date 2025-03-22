"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import {
  GreenEditIcons,
  WhiteEditIcons,
} from "../components/common/Icons";
import { Inter } from "next/font/google";

import Image from "next/image";
import MangaeSection from "../components/adminsetting/MangaeSection";


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSideBar]);

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={`  w-[200px] lg:w-[296px] max-md:fixed left-0 duration-300  ${
            showSideBar ? "top-0" : "-top-[100vh]"
          }`}
        >
          <div className="h-full z-10 relative pt-11 px-3 lg:px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className=" w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)]  px-2.5 lg:px-5 pb-8">
          {/* admin section  */}
          <div className="relative">
            <div className="bg-[url('/images/png/adminsetting_bg_img.png')] bg-no-repeat bg-cover bg-center px-6 mt-6  rounded-2xl h-[300px] ">
              {/* AdminHeader section  */}
              <div className="top-0 sticky z-10">
                <AdminHeader heading="Profile" />
              </div>
              {/* AdminHeader section  */}
            </div>

            {/* profile section  */}
            <div className="w-full flex justify-center">
              <div className="rounded-[15px] p-4 flex justify-between items-center gap-5  shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.02)] backdrop-blur-[10.5px]  border-[1.5px] border-white bg-gradient-to-tr from-white/82 to-white/80 absolute -bottom-[3.333vw] max-w-[1540px] w-full">
                {/* profile */}

                <div className="flex items-center gap-5">
                  <div className="w-fit relative">
                    <Image
                      src="/images/png/gorge_img.png"
                      alt="gorge_img"
                      width={91}
                      height={115}
                      className="rounded-2xl "
                    />

                    <span className="bg-white p-[7px] rounded-[8px] absolute -right-[0.521vw] bottom-0 shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.06)]">
                      <GreenEditIcons />
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
                  className="bg-[#2C4C4B] p-[12px_20px] rounded-full inline-flex gap-2 items-center hover:bg-[#3b6261] text-white text-sm font-bold leading-[140%] capitalize cursor-pointer duration-500
                "
                >
                  <span>
                    {" "}
                    <WhiteEditIcons />{" "}
                  </span>{" "}
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[80px]">
            {/* MangaeSection  */}
            <MangaeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
