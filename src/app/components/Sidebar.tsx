"use client";

import React from "react";
import Link from "next/link";
import { sideBarData } from "./common/Helper";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { QuestionIcon } from "./common/Icons";
import CommonBtn from "./common/CommonBtn";


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});
// Define types for Sidebar Item
interface SidebarItem {
  path?: string;
  icon?: React.ReactNode;
  tabs: string;
  hasDropdown?: boolean;
  subItems?: { path?: string; tabs: string }[];
}

// Define prop types for Sidebar
interface SidebarProps {
  setShowSideBar: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
const pathname=usePathname()


  return (
    <div id="sidebar" className="top-0 sticky">
      <div className="cursor-pointer inline-flex items-end">
        <span
          className={`${inter.className} text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#2C4C4B] font-black leading-[100%] uppercase`}
        >
          NOVA
        </span>{" "}
        <span
          className={`${inter.className} text-sm text-[#477D7C] font-bold uppercase leading-[100%]`}
        >
          EXORDIUM
        </span>
      </div>
      <div className="flex flex-col gap-2 h-full mt-[50px]">
        {sideBarData?.slice(0, 4)?.map((item: SidebarItem, index: number) => (
          <div key={index}>
            <Link href={`${item.path}`} className={`flex items-center justify-between px-5 py-3 gap-2.5 hover:bg-[#fff] rounded-2xl hover:custom_shadow w-full duration-300 icon cursor-pointer group 
             ${pathname === item.path ? "bg-[#fff] custom_shadow" : "bg-transparent"}
            `}>
              <div className="flex items-center gap-2.5 ">
                <span className={`flex h-[30px] w-[30px] justify-center items-center rounded-[12px]  group-hover:bg-[#2C4C4B] duration-300
                               ${pathname === item.path ? "bg-[#2C4C4B]":"bg-[#fff]"}
                  `}>
                  {item.icon}
                </span>
                <h2
                  className={`${inter.className} font-bold text-xs text-[#9A9999]`}
                >
                  {item.tabs}
                </h2>
              </div>
            </Link>
          </div>
        ))}
        <div className="my-6 px-5">
          <h3 className={`text-[#213737] text-xs font-bold uppercase ${inter.className}`}>
            ACCOUNT PAGES
          </h3>
        </div>

        {/* Render last 3 items under "Settings" */}
        {sideBarData?.slice(4)?.map((item: SidebarItem, index: number) => (
          <div key={index + 4}>
            <Link href={`${item.path}`} className={`flex items-center justify-between px-5 py-3 gap-2.5 hover:bg-[#fff] rounded-2xl hover:custom_shadow w-full duration-300 icon cursor-pointer group 
            ${pathname === item.path ? "bg-[#fff] custom_shadow" : "bg-transparent"}
            `}>
              <div className="flex items-center gap-2.5 ">
                <span className={`flex h-[30px] w-[30px] justify-center items-center rounded-[12px]  group-hover:bg-[#2C4C4B] duration-300
                               ${pathname === item.path ? "bg-[#2C4C4B]":"bg-[#fff]"}
                  `}>
                  {item.icon}
                </span>
                <h2
                  className={`${inter.className} font-bold text-xs text-[#9A9999]`}
                >
                  {item.tabs}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-[12px] bg-[#2C4C4B] mt-16 bg-cover bg-center bg-no-repeat" >
        <QuestionIcon />
        <h3 className={` ${inter.className} font-bold text-sm text-white leading-[140%] mt-2.5 md:mt-5`}>Need help?</h3>
        <p className="text-xs font-normal text-white pb-2">Please check our docs</p>
        <div>
          <CommonBtn btnName="DOCUMENTATION" btnStyling="!bg-white !text-[#2C4C4B] w-full justify-center" arrowIcon="hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
