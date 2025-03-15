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
      <div className={`custom_container `}>
        <div
          className={`mt-6 flex items-center justify-between 
          `}
        >
          <div className="flex gap-10 items-center bg-white border-white border rounded-3xl py-4 px-6 shadow-custom_shadow">
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
              className={` flex gap-5 xl:gap-[50px] max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:flex-row bg-black lg:bg-transparent duration-300 ${
                !toggleNav ? "-left-full" : "left-0"
              }`}
            >
              {headerData.map((tab, index) => (
                <div key={index} className="relative">
                  <Link
                    href={tab.path}
                    className={`font-medium text-base capitalize flex items-center gap-3 justify-between duration-300 hover:text-[#53F3FB]  ${
                      pathName === tab.path
                        ? "!text-[#2C4C4B]"
                        : "text-[#333333]"
                    }`}
                  >
                    {tab.tabs}
                  </Link>
                </div>
              ))}
            </div>
          </div>
                  <div className="flex gap-6 items-center">
                      <Link href={"/"} className={`capitalize font-bold text-[#333333]`}>
                          log in
                      </Link>
                      <Link href={"/"} className={`capitalize font-bold text-[#fff] bg-[#2C4C4B] rounded-2xl px-5 py-3`}>
                          Sign Up
                      </Link>
          </div>
          <div
            onClick={() => setToggleNav(!toggleNav)}
            className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
          >
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav
                  ? "translate-y-[7px] -rotate-45 border-[#53F3FB]"
                  : "border-[#53F3FB]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "rotate-45 border-[#53F3FB]" : "border-[#53F3FB]"
              }`}
            ></span>
            <span
              className={` border-[3px] w-full rounded-sm duration-300 ${
                toggleNav ? "opacity-0 border-[#53F3FB]" : "border-[#53F3FB]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
