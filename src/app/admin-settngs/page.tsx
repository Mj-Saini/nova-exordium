"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { GoNextIcon, InProgressIcon } from "../components/common/Icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import csatScoreImg from "../../../public/images/png/csat-score-img.png";
import CommonBtn from "../components/common/CommonBtn";
import { progressData } from "../components/common/Helper";

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
        <div className=" w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)]  px-2.5 lg:px-5">
          <div>
            <div className="top-0 sticky z-10">
              <AdminHeader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
