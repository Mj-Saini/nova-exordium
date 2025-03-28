/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import CommonBtn from "./CommonBtn";

import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

// ✅ Define Props Interface
interface FeaturedCommonSectionsProps {
  heading: string;
  img: any;
  label: string;
  descriptions: string;
  listStyling?: string;
  counterStyling?: string;
  flexStyling?: string;

}

const FeaturedCommonSections: React.FC<FeaturedCommonSectionsProps> = ({
  img,
  heading,
  label,
  descriptions,
  listStyling,
  counterStyling,
  flexStyling,
}) => {
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const updatedSelection = [...selected];
    updatedSelection[index] = !updatedSelection[index];
    setSelected(updatedSelection);
  };

  return (
    <div id={label} className=" lg:pt-24 lg:pb-[60px]">
      <div className="custom_container h-[calc(100%-106.2px)]">
        <div className="flex flex-wrap justify-center items-center">
          {/* ✅ If `flexStyling` exists, reverse order */}
          <div
            className={`flex flex-wrap justify-between items-center relative ${flexStyling}`}
          >
            {flexStyling ? (
              <>
                {/* Image First */}
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0 max-lg:flex justify-center">
                  <Image
                    className="xl:absolute left-0 2xl:-left-28 top-1/2 xl:-translate-y-1/2 w-3/4 xl:w-1/2 2xl:w-[60%]"
                    src={img}
                    alt="hero-img"
                  />
                </div>

                {/* Content Second */}
                <div className="w-full lg:w-5/12">
                  <span
                    className={`text-[#2C4C4B] uppercase text-base font-bold ${inter.className}`}
                  >
                    {label}
                  </span>
                  <h1
                    className={`${inter.className} font-bold text-xl md:text-2xl lg:text-[28px] text-[#333333] mt-4`}
                  >
                    {heading}
                  </h1>
                  <p className="font-normal text-base text-[#333333] py-3 lg:py-6">
                    {descriptions}
                  </p>

                  {/* ✅ Three Checkbox Items */}
                  <ul className={`space-y-2 ${listStyling}`}>
                    {[
                      "Lorem ipsum dolor sit amet consectetur",
                      "Lorem ipsum dolor sit amet consectetur",
                      "Lorem ipsum dolor sit amet consectetur",
                    ].map((text, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="appearance-none w-6 h-6 border border-gray-400 rounded-lg bg-white checked:bg-[#477D7C] checked:border-transparent relative"
                          checked={selected[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex gap-5 lg:gap-10 my-6 ${counterStyling}`}>
                    <div>
                      <h3
                        className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-[38px] text-[#333333]`}
                      >
                        100 <span className="text-[#477D7C]">+</span>
                      </h3>
                      <p className="font-bold text-base text-[#333333] py-0.5">
                        Templates
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-[38px] text-[#333333]`}
                      >
                        500 <span className="text-[#477D7C]">+</span>
                      </h3>
                      <p className="font-bold text-base text-[#333333] py-0.5">
                        Downloads
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <CommonBtn
                      btnName="Learn more"
                      btnStyling="text-[#fff] fill-white  bg-[#2C4C4B] uppercase"

                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Content First */}
                <div className="w-full lg:w-5/12">
                  <span
                    className={`text-[#2C4C4B] uppercase text-base font-bold ${inter.className}`}
                  >
                    {label}
                  </span>
                  <h1
                    className={`${inter.className} font-bold text-xl md:text-2xl lg:text-[28px] text-[#333333] mt-4`}
                  >
                    {heading}
                  </h1>
                  <p className="font-normal text-base text-[#333333] py-3 lg:py-6">
                    {descriptions}
                  </p>

                  {/* ✅ Three Checkbox Items */}
                  <ul className={`space-y-2 ${listStyling}`}>
                    {[
                      "Lorem ipsum dolor sit amet consectetur",
                      "Lorem ipsum dolor sit amet consectetur",
                      "Lorem ipsum dolor sit amet consectetur",
                    ].map((text, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="appearance-none w-6 h-6 border border-gray-400 rounded-lg bg-white checked:bg-[#477D7C] checked:border-transparent relative"
                          checked={selected[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex gap-5 lg:gap-10 my-6 ${counterStyling}`}>
                    <div>
                      <h3
                        className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-[38px] text-[#333333]`}
                      >
                        100 <span className="text-[#477D7C]">+</span>
                      </h3>
                      <p className="font-bold text-base text-[#333333] py-0.5">
                        Templates
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-[38px] text-[#333333]`}
                      >
                        500 <span className="text-[#477D7C]">+</span>
                      </h3>
                      <p className="font-bold text-base text-[#333333] py-0.5">
                        Downloads
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <CommonBtn
                      btnName="Learn more"
                      btnStyling="text-[#fff] fill-white bg-[#2C4C4B] uppercase"

                    />
                  </div>
                </div>

                {/* Image Second */}
                <div className="w-full lg:w-1/2 mt-6 max-lg:flex justify-center lg:mt-0">
                  <Image
                    className="xl:absolute right-0 2xl:-right-28 top-1/2 xl:-translate-y-1/2 w-3/4 xl:w-[60%]"
                    src={img}
                    alt="hero-img"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCommonSections;
