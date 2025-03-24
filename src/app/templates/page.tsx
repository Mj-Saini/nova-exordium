"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import { CheckIcon, CreateIcon, FleterIcon } from "../components/common/Icons";

import { templates } from "../components/common/Helper";

interface PageProps {
  progress: number;
}

const Page: React.FC<PageProps> = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen relative bg-[#f0f0f0] ">
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
          <div className="bg-[#FFFFFF] rounded-[15px] py-[28px] px-[21px]  shadow-[0px_3.5px_5.5px_0px_#00000005]  h-fit max-h-[40%] ">
            <div className=" sm:flex justify-between items-center">
              <div>
                <h2 className=" font-bold text-lg">Templates</h2>
                <div className=" flex pt-[6px] items-center">
                  <CheckIcon />
                  <h3 className=" font-bold text-sm text-[#9A9999] ps-[5px]">
                    240 Template
                  </h3>
                </div>
              </div>
              <div className=" flex items-center mt-4 lg:mt-0">
                <div
                  className="border border-[var(--Color-2,#EAEAEA)] w-[45px] h-[36px] rounded-[16px] p-[12px] gap-[6px] flex items-center justify-center bg-white cursor-pointer me-[16px]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FleterIcon />
                </div>
                <button className=" bg-[#2C4C4B]  text-white rounded-[16px] py-[12px] px-5  flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm">
                  <CreateIcon />
                  Create New Project
                </button>
              </div>
            </div>
            <div className="overflow-x-auto md:max-w-full overflow-visible">
              <table className="w-full mt-7 border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                    {[
                      "#",
                      "Template name",
                      "Categoty",
                      "Update Date",
                      "Action",
                    ].map((head, index) => (
                      <th key={index} className="px-4 py-3 text-[#9A9999]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {templates.map((task) => (
                    <tr key={task.id} className="border-b border-gray-200">
                      <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">
                        {task.id}
                      </td>
                      <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">
                        {task.name}
                      </td>
                      <td className="px-4 py-[16px]">{task.Categoty}</td>

                      <td className="px-4 py-[16px]">{task.UpdateDate}</td>
                      <td className="px-4 py-2 cursor-pointer">
                        {task.Action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
