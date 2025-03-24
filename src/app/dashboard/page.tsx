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
import { completionData, progressData } from "../components/common/Helper";
import CsatGraph from "../components/CsatGraph";

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
          <div className="top-0 sticky z-10 bg-[#F0F0F0]">
            <AdminHeader heading="dashboard" />
          </div>
          <div className="overflow-auto">
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
              <div className="w-full xl:w-1/2 2xl:w-7/12 px-2.5 xl:px-3">
                <div className="flex  justify-between px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow">
                  <div className="w-full xl:w-7/12">
                    <div className="h-full flex flex-col justify-between">
                      <div className="pe-5 2xl:pe-24">
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
              <div className="w-full xl:w-1/2 2xl:w-5/12 px-2.5 xl:px-3 mt-6 xl:mt-0">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full relative">
                  <div className="absolute top-0 left-0 w-full h-full px-3 2xl:px-6 py-4">
                    <div className="bg-gradient-to-t to-[#151928E0] from-[#31386029] p-4 h-full w-full rounded-2xl flex flex-col justify-between">
                      <div className="">
                        <h2 className="ff_helvetica font-bold text-base lg:text-lg text-white leading-[140%]">
                          CSAT Score
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-between mt-2.5">
                          {[0, 0, 0, 0].map((_, index) => (
                            <div key={index}>
                              <p className="text-xs text-[#fff]">Jan</p>
                              <h3 className="font-semibold text-xl md:text-2xl text-[#fff]">
                                100%
                              </h3>
                              <input
                                type="range"
                                className="w-full max-w-20 h-1 bg-[#477D7C] appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:hidden [&::-moz-range-thumb]:hidden"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <CommonBtn
                          btnName="Send a Survey"
                          btnStyling="bg-white !rounded-full !py-2 text-sm font-bold text-[#213737]"
                          arrowIcon="hidden"
                        />
                      </div>
                    </div>
                  </div>
                  <Image
                    className="w-full h-full rounded-[12px]"
                    src={csatScoreImg}
                    alt="CSAT-SCORE"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 -mx-2.5 xl:-mx-3">
              <div className="w-full lg:w-1/2 2xl:w-4/12 px-2.5 xl:px-3">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                  <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                    Onboarding Completion Rate
                  </h3>
                  <p className="font-bold text-sm text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                    <span className="text-[#213737] font-normal">180 </span>{" "}
                    Completed tasks
                  </p>
                  <p className="font-normal text-sm text-[#333] py-6 text-center">
                    Percent complete
                  </p>
                  <div className="flex flex-col gap-[58px] mb-6">
                    {progressData.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <p className="text-gray-700 text-sm font-medium w-24">
                          {item.label}
                        </p>
                        <div className="relative  rounded-full h-8 w-full max-w-xs]">
                          <div
                            className="absolute top-0 left-0 h-full bg-[#477D7C] rounded-full flex items-center justify-center"
                            style={{ width: `${item.value}%` }}
                          >
                            <span className="text-white text-sm font-bold">
                              {item.value}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 2xl:w-4/12 px-2.5 xl:px-3 mt-6 lg:mt-0">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                  <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                    Time to Completion
                  </h3>
                  <p className="font-bold text-sm text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                    <span className="text-[#213737] font-normal">250 </span>
                    Total hours
                  </p>

                  <div className="flex mb-6 h-[calc(100%-70px)]">
                    {completionData.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-end items-center h-full"
                      >
                        {/* Percentage */}
                        <p className="text-[#333333] font-bold mb-1">
                          {item.value}%
                        </p>

                        {/* Bar */}
                        <div
                          className="w-8 bg-[#477D7C] rounded-full flex items-center justify-center h-full"
                          style={{ height: `${item.value * 3}%` }} // Dynamic height
                        ></div>

                        {/* Label */}
                        <p className="text-gray-600 text-xs text-center mt-1 w-20 2xl:w-24 whitespace-nowrap">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full  2xl:w-4/12 px-2.5 xl:px-3 mt-6 2xl:mt-0">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                  <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                    Notifications
                  </h3>
                  <p className="font-bold text-sm text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                    <span className="text-[#213737] font-normal">30+ </span>
                    New notifications
                  </p>

                  <div className="flex flex-col items-center justify-between  gap-3 xl:gap-6 mt-6">
                    {[0, 0, 0, 0, 0].map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between w-full "
                      >
                        <div>
                          <h3 className="font-bold ff_helvetica text-sm text-[#213737] leading-[140%]">
                            New order #4219423
                          </h3>
                          <p className="font-bold text-xs text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                            21 DEC 11:21 PM
                          </p>
                        </div>
                        <div>
                          <CommonBtn
                            btnName="Read more"
                            btnStyling="!p-0 !fill-[#477D7C] !text-[#477D7C]"
                            arrowIcon=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-6  -mx-2.5 xl:-mx-3">
              <div className="w-full xl:w-1/2 2xl:w-5/12 px-2.5 xl:px-3 xl:mt-0">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                  <Image
                    className="w-full rounded-[12px] h-[222px]"
                    src={csatScoreImg}
                    alt="CSAT-SCORE"
                  />

                  <div className="mt-6">
                    <h2 className="ff_helvetica font-bold text-base lg:text-lg text-[#213737] leading-[140%]">
                      User Engagement
                    </h2>
                    <p className="text-sm font-bold leading-[140%] text-[#9A9999] mt-1.5">
                      <span className="text-[#477D7C]">(+453) </span> This week
                    </p>
                    <div className="flex flex-wrap gap-3 justify-between mt-2.5 lg:mt-9">
                      {[0, 0, 0, 0].map((_, index) => (
                        <div key={index}>
                          <p className="text-xs text-[#9A9999]  flex gap-1 items-center">
                            {" "}
                            <span className="block w-3 h-3 rounded-full bg-[#477D7C]"></span>{" "}
                            Task #1
                          </p>
                          <h3 className="font-semibold text-xl md:text-2xl text-[#213737] mt-3">
                            100%
                          </h3>
                          <input
                            type="range"
                            className="w-full max-w-20 h-1 bg-[#477D7C] appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:hidden [&::-moz-range-thumb]:hidden"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 2xl:w-7/12 px-2.5 xl:px-3 mt-6 xl:mt-0">
                <div className="px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow h-full">
                  <h2 className="ff_helvetica font-bold text-base lg:text-lg text-[#213737] leading-[140%]">
                    User Engagement
                  </h2>
                  <p className="text-sm font-bold leading-[140%] text-[#9A9999] mt-1.5">
                    <span className="text-[#477D7C]">(+5) more </span> in 2025
                  </p>
                  <div>
                    <CsatGraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
