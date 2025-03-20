"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { GoNextIcon, InProgressIcon } from "../components/common/Icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import csatScoreImg from "../../../public/images/png/csat-score-img.png";

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
          <div className="top-0 sticky z-10">
            <AdminHeader
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </div>
          <div className="flex flex-wrap lg:mt-2 -mx-2.5 xl:-mx-3">
            {[1, 1, 1, 1].map((items, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-3/12 px-2.5 xl:px-3 mt-5"
              >
                <div className="flex justify-between px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow">
                  <div>
                    <p className="font-bold text-xs text-[#9A9999] pb-1">
                      In progress
                    </p>
                    <h3 className="font-semibold text-xl md:text-2xl lg:text-[28px] text-[#213737]">
                      54
                      <span className="text-sm text-[#477D7C] ms-1">
                        Tasks in progress
                      </span>
                    </h3>
                  </div>
                  <div>
                    <InProgressIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-6 -mx-2.5 xl:-mx-3">
            <div className="w-full xl:w-7/12 px-2.5 xl:px-3">
              <div className="flex  justify-between px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow">
                <div className="w-full xl:w-7/12">
                  <div className="h-full flex flex-col justify-between">
                    <div className="pe-5 xl:pe-24">
                      <p className="font-bold text-xs text-[#9A9999] pb-1">
                        11:20 2/23/2025
                      </p>
                      <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                        dashbaord
                      </h3>
                      <p className="font-normal text-sm text-[#9A9999] ff_helvetica">
                        Your projects are ready for growth, with resources to
                        tackle larger challenges.
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      className={`font-bold text-[10px] text-[#213737]`}
                    >
                      Read more <GoNextIcon />
                    </Link>
                  </div>
                </div>
                <div className="w-full xl:w-5/12">
                  <div className="p-4 !rounded-[12px] login_bgimg bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center py-12 2xl:py-24">
                    <h2
                      className={`${inter.className} font-black text-3xl lg:text-3xl xl:text-[52.83px] text-[#fff] uppercase text-center`}
                    >
                      NOVA{" "}
                    </h2>
                    <span
                      className={`font-black text-xl lg:text-2xl xl:text-[27px] text-[#fff] uppercase block tracking-[1px]`}
                    >
                      EXORDIUM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-5/12 px-2.5 xl:px-3 mt-6 xl:mt-0">
              <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                <Image
                  className="w-full h-full rounded-[12px]"
                  src={csatScoreImg}
                  alt="CSAT-SCORE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
