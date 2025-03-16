"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import layars from "../../../public/images/png/start-journey-layars.png";
import CommonBtn from "./common/CommonBtn";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const StartJourney: React.FC = () => {
  return (
    <section className="mt-10 mb-12 md:mt-24 xl:mb-[160px] px-5">
      {/* Content Section */}
      <div className="text-white custom_container start_journey_bgimg rounded-2xl !p-10 lg:!p-20 relative overflow-clip">
        <Image
          className="absolute bottom-0 right-0 w-[600px] h-full"
          src={layars}
          alt="layars"
        />
        <h1
          className={`${inter.className} font-black text-2xl md:text-3xl lg:text-[38px] text-[#fff]  max-w-[610px] relative z-10`}
        >
          Start Your Journey Today
        </h1>
        <p className="font-normal text-base text-[#fff] py-4 max-w-[610px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac
          risus maecenas magna risus tellus adipiscing. Magna nunc accumsan
          praesent dolor diam mi leo eu et. Enim dolor et sed condimentum.
        </p>

        {/* CTA Button */}
        <CommonBtn
          btnName="get started"
          btnStyling="text-[#213737] bg-[#fff] fill-[#213737] uppercase relative z-10"
          arrowIcon="hidden"
        />
      </div>
    </section>
  );
};

export default StartJourney;
