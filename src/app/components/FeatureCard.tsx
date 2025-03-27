import React from "react";
import { featuredCardList } from "./common/Helper";
import { Inter } from "next/font/google";
import { GoNextIcon } from "./common/Icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const FeatureCard = () => {
  return (
    <div>
      <div className="flex flex-wrap -mx-3">
        {featuredCardList.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-6">
            <div className=" bg-white rounded-[8px] shadow-[0px_0px_14px_0px_#6F3FA642] p-6 flex flex-col items-center border border-[#2C4C4B] h-full">
              <div className="flex gap-2 lg:gap-4 items-center">
                <span>{card.icon}</span>
                <h2
                  className={`font-bold text-lg lg:text-xl text-[#213737] ${inter.className}`}
                >
                  {" "}
                  {card.title}
                </h2>
              </div>
              <p className="text-[#333333] text-center font-normal text-base leading-5 my-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className=" py-2 bg-[#F9F9F9] border border-gray-400 font-bold rounded-full flex items-center px-5">
                <span>Start Now</span> <span className="ms-4"><GoNextIcon iconStyling="fill-[#333333]" /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
