"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerData } from "./Helper";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/images/svg/logo.svg";

const Header = () => {
  const pathName = usePathname();

  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);

  return (
    <>
      <div className={`max-w-[1392px] mx-auto px-5 pt-6`}>
        <div
          className={` flex items-center gap-6 justify-between bg-white border-white border rounded-3xl xl:bg-transparent xl:border-transparent  px-6 py-4 xl:py-0`}
        >
          <div className="flex gap-10 items-center bg-white border-white border rounded-3xl xl:px-6 xl:py-4 w-full lg:max-w-[1080px] 2xl:w-[1080px]">
            <Link href="/">
              <Image
                width={86}
                height={47}
                className="w-[86px] h-[47px]"
                src={logo}
                alt="logo"
              />
            </Link>
            <div
              className={` flex gap-6 max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:flex-row bg-white lg:bg-transparent duration-300 ${
                !toggleNav ? "-left-full" : "left-0"
              }`}
            >
              {headerData.map((tab, index) => (
                <div key={index} className="relative">
                  <Link
                    href={tab.path}
                    className={`font-medium text-base capitalize flex items-center gap-3 justify-between duration-300 hover:text-[#2C4C4B]  ${
                      pathName === tab.path
                        ? "!text-[#2C4C4B]"
                        : "text-[#333333]"
                    }`}
                  >
                    {tab.tabs}
                  </Link>
                </div>
              ))}
              <div className="flex flex-col gap-6 items-center 2xl:absolute right-[84px] lg:hidden">
                <Link
                  href={"/"}
                  className={`capitalize font-bold text-[#333333] whitespace-nowrap`}
                >
                  log in
                </Link>
                <Link
                  href={"/"}
                  className={`capitalize font-bold text-[#fff] bg-[#2C4C4B] rounded-2xl px-5 py-3  whitespace-nowrap`}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden gap-6 items-center 2xl:absolute right-[84px] lg:flex">
            <Link
              href={"/"}
              className={`capitalize font-bold text-[#333333] whitespace-nowrap`}
            >
              log in
            </Link>
            <Link
              href={"/"}
              className={`capitalize font-bold text-[#fff] bg-[#2C4C4B] rounded-2xl px-5 py-3  whitespace-nowrap`}
            >
              Sign Up
            </Link>
          </div>
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="flex flex-col justify-between h-5 w-8 lg:hidden z-[100] relative cursor-pointer duration-300"
          >
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav
                  ? "translate-y-[7px] -rotate-45 border-[#2C4C4B]"
                  : "border-[#2C4C4B]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "rotate-45 border-[#2C4C4B]" : "border-[#2C4C4B]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "opacity-0 border-[#2C4C4B]" : "border-[#2C4C4B]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
