import React from "react";
import CommonBtn from "./CommonBtn";
import heroImg from "../../../../public/images/png/hero-right-img.png";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});
const FeaturedCommonSections = () => {
  return (
    <div>
      <div className="custom_container h-[calc(100%-106.2px)] ">
        <div className="flex flex-wrap justify-center items-center pt-16 lg:pt-24">
          <div className="flex flex-wrap justify-between items-center relative">
            <div className="w-full lg:w-5/12">
              <span
                className={`text-[#2C4C4B] uppercase text-base font-bold ${inter.className}`}
              >
                dashboard
              </span>
              <h1
                className={` ${inter.className} font-bold text-xl md:text-2xl lg:text-[28px] text-[##333333] mt-4`}
              >
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className="font-normal text-base text-[##333333] py-3 lg:py-6">
                Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum.{" "}
              </p>

              <ul>
                <li>
                  <input
                    type="checkbox"
                    className=" accent-[#477D7C] w-6 h-6 rounded-lg"
                  />{" "}
                  Lorem ipsum dolor sit amet consectetur
                </li>
              </ul>
              <div>
                <CommonBtn
                  btnName="Learn more"
                  btnStyling="text-[#fff] bg-[#2C4C4B] fill-[#fff] uppercase"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <Image
                className="xl:absolute right-0 2xl:-right-28 top-0 w-full xl:w-[48%] 2xl:w-1/2"
                src={heroImg}
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCommonSections;
