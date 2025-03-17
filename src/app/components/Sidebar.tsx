"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sideBarData } from "./common/Helper";
import { Inter } from "next/font/google";

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

const Sidebar: React.FC<SidebarProps> = ({ setShowSideBar }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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
      <div className="flex flex-col  h-full mt-[50px]">
        {sideBarData.map((item: SidebarItem, index: number) => (
          <div key={index}>
            <button
              className="flex items-center justify-between px-5 py-3 gap-2.5 hover:bg-[#fff] rounded-2xl hover:custom_shadow w-full duration-300 icon cursor-pointer"
              onClick={() => {
                handleDropdown(index);
                setShowSideBar(false);
              }}
            >
              <div className="flex items-center gap-2.5">
               <span className="flex h-[30px] w-[30px] justify-center items-center rounded-[12px] bg-[#2C4C4B]"> {item.icon}</span>
                <h2 className={`${inter.className} font-bold text-xs text-[#9A9999]`}>{item.tabs}</h2>
              </div>
              {item.hasDropdown && (
                <div
                  className={`transform ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </div>
              )}
            </button>
            {item.subItems && openDropdown === index && (
              <div className="flex flex-col pl-10">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    href={subItem.path || "#"}
                    key={subIndex}
                    className="flex items-center px-5 py-2 gap-2.5 hover:bg-[#26313A] hover:rounded-l-[20px] w-full duration-300 icon"
                  >
                    <h3 className="font-normal text-sm text-white">
                      {subItem.tabs}
                    </h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
