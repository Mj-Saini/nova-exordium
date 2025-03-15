import { Inter } from "next/font/google";
import React from "react";
import CommonBtn from "./common/CommonBtn";
import Image from "next/image";
import heroImg from "../../../public/images/png/hero-right-img.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});
const Hero = () => {
  return (
    <>
      <div className="custom_container h-[calc(100%-106.2px)] ">
              <div className="flex flex-wrap justify-center items-center pt-16 lg:pt-24">
                      <div className="flex flex-wrap justify-between items-center relative">
          <div className="w-full lg:w-5/12">
            <h1
              className={` ${inter.className} font-black text-3xl md:text-4xl lg:text-5xl text-[#F9F9F9]`}
            >
              Accelerate Your Customer Onboarding
            </h1>
            <p className="font-normal text-base text-[#F9F9F9] py-3 lg:py-6">
              Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac
              risus maecenas magna risus tellus adipiscing. Magna nunc accumsan
              praesent dolor diam mi leo eu et. Enim dolor et sed condimentum.{" "}
            </p>
            <div>
              <CommonBtn
                btnName="get started"
                btnStyling="text-[#213737] bg-[#fff] fill-[#213737] uppercase"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <Image className="xl:absolute right-0 2xl:-right-28 top-0 w-full xl:w-[48%] 2xl:w-1/2" src={heroImg} alt="hero-img" />
          </div>
        </div>
    </div>
      </div>
    </>
  );
};

export default Hero;
