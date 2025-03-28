"use client";
import React, { useEffect, useState } from "react";
import { GoNextIcon, InProgressIcon } from "../components/common/Icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import csatScoreImg from "../../../public/images/png/csat-score-img.png";
import CommonBtn from "../components/common/CommonBtn";
import { completionData, CSAT_Score_data, dashboard_notifications, dashboard_User_Engagement_data, progressData, Totalwork_data_dashboard } from "../components/common/Helper";
import CsatGraph from "../components/CsatGraph";
import Layout from "../components/common/Layout";
import Barcharts from "../components/Barcharts";

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
    <Layout heading="Dashboard" sub_heading="Dashboard" >
      <div className="overflow-y-auto">
        <div className="flex flex-wrap lg:mt-2 ">
          {Totalwork_data_dashboard.map((items, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-3/12 px-2.5 xl:px-2 2xl:px-3 mt-5"
            >
              <div className="flex justify-between px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow">
                <div>
                  <p className="font-bold text-xs text-[#9A9999] pb-1">
                    {items.progress}
                  </p>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-[28px] text-[#213737]">
                    {items.totalwork}
                    <span className="text-sm text-[#477D7C] ms-1">
                      {items.taskname}
                    </span>
                  </h3>
                </div>
                <div>
                  {items.icons}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-6 ">
          <div className="w-full xl:w-1/2 2xl:w-7/12 px-2.5 xl:px-3">
            <div className="flex  justify-between h-full px-3 2xl:px-6 py-4 rounded-2xl bg-white custom_shadow">
              <div className="w-full xl:w-7/12">
                <div className="h-full flex flex-col justify-between">
                  <div className="pe-5 2xl:pe-24">
                    <p className="font-bold text-xs text-[#9A9999] pb-1">
                      11:20 2/23/2025
                    </p>
                    <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                      Dashbaord
                    </h3>
                    <p className="font-normal text-sm text-[#9A9999] ff_helvetica">
                      Your projects are ready for growth, with resources to
                      tackle larger challenges.
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className={`font-bold flex items-center gap-1 text-[10px] text-[#213737]`}
                  >
                    Read more <GoNextIcon iconStyling="fill-[black]" />
                  </Link>

                </div>
              </div>
              <div className="w-full xl:w-5/12 h-full">
                <div className="p-4 !rounded-[12px] h-full login_bgimg bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center py-12 2xl:py-24">
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
                    <div className="flex flex-wrap   justify-between mt-2.5">
                      {CSAT_Score_data.map((item, index) => (
                        <div key={index} className="w-[22%] ">
                          <p className="text-xs font-bold text-[#fff]">{item.month}</p>
                          <h3 className="font-semibold text-[18px] md:text-2xl text-[#fff]">
                            {item.progress * 10}%
                          </h3>
                          <div className="h-[3px] xl:h-1 mt-[6px] bg-white rounded-full">
                            <div className="h-full rounded-full" style={{ width: `${item.progress * 10}%`, backgroundColor: "#477D7C" }}>
                            </div>
                          </div>
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
        <div className="flex flex-wrap mt-6 ">
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

              <div className="flex pe-10 mb-6 justify-between h-[calc(100%-70px)]">
                {completionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-end items-center  h-full"
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
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold ff_helvetica text-base md:text-lg text-[#213737] leading-[140%]">
                    Notifications
                  </h3>
                  <p className="font-bold text-sm text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                    <span className="text-[#477D7C] font-bold">30+ </span>
                    New notifications
                  </p>
                </div>
                <CommonBtn
                  btnName="View All"
                  btnStyling="fill-[white] rounded-4 bg-[#2C4C4B] text-white"
                  arrowIcon="true" />
              </div>

              <div className="flex flex-col items-center justify-between  gap-3 xl:gap-6 mt-6">
                {dashboard_notifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full "
                  >
                    <div>
                      <h3 className="font-bold ff_helvetica text-sm text-[#213737] leading-[140%]">
                        {item.order_no}
                      </h3>
                      <p className="font-bold text-xs text-[#9A9999] leading-[140%] ff_helvetica mt-1.5">
                        21 DEC 11:21 PM
                      </p>
                    </div>
                    <div>
                      <CommonBtn
                        btnName="Read more"
                        btnStyling="!p-0 !fill-[#477D7C] !text-[#477D7C]"
                        arrowIcon="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-wrap  mt-6  ">
          <div className="w-full xl:w-[45%] 2xl:w-5/12 px-2.5 xl:px-3 xl:mt-0 ">
            <div className="px-3 2xl:px-6 py-4 user_engagement rounded-2xl bg-white custom_shadow h-full custom_chart_bg">
              <Barcharts/>

              <div className="mt-6">
                <h2 className="ff_helvetica font-bold text-base lg:text-lg text-[#213737] leading-[140%]">
                  User Engagement
                </h2>
                <p className="text-sm font-bold leading-[140%] text-[#9A9999] mt-1.5">
                  <span className="text-[#477D7C]">(+453) </span> This week
                </p>
                <div className="flex pe-6 flex-wrap gap-3 justify-between mt-2.5 lg:mt-9">
                  {dashboard_User_Engagement_data.map((item, index) => (
                    <div key={index} className="w-[22%]" >
                      <p className="text-xs font-bold text-[#9A9999]  flex gap-1 items-center">
                        {" "}
                        <span className="block w-3 h-3  rounded-full bg-[#477D7C]"></span>{" "}
                        Task #{item.id}
                      </p>
                      <h3 className="font-bold text-[18px]  text-[#213737] mt-3">
                        {item.progress * 10}%
                      </h3>
                      <div className="h-[3px] xl:h-1 mt-[6px] bg-[#D6D6D6] rounded-full">
                        <div className="h-full rounded-full" style={{ width: `${item.progress * 10}%`, backgroundColor: "#477D7C" }}>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[55%] 2xl:w-7/12 px-2.5 xl:px-3 mt-6 xl:mt-0">
            <div className="px-3 2xl:px-6 py-4  CSAT_Score rounded-2xl bg-white custom_shadow h-full">
              <h2 className="ff_helvetica font-bold text-base lg:text-lg text-[#213737] leading-[140%]">
                CSAT Score
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


    </Layout>

  );
};

export default DashboardPage;
