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
      <div className="custom_container min-h-[calc(100vh-131px)] flex items-center">
        <div className="flex flex-wrap justify-center items-center xl:-mt-[100px]">
          <div className="flex flex-wrap justify-center lg:justify-between items-center relative">
            <div className="w-full lg:w-5/12">
              <h1
                className={` ${inter.className} font-black text-2xl md:text-3xl lg:text-[42px] text-[#F9F9F9]`}
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
            <div className=" lg:w-1/2 mt-6 lg:mt-0">
              <Image className="2xl:absolute right-0 lg:scale-90 2xl:scale-100    2xl:-right-28 2xl:top-1/2 2xl:-translate-y-1/2 w-full 2xl:w-[60%]" src={heroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
