import React from "react";
import { statsList } from "./common/Helper";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const StatsSection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-10">
      <div className="custom_container">
        <div className="text-center  max-w-[600px] mx-auto">
          <h2
            className={`text-2xl md:text-3xl lg:text-[34px] text-[#333333] font-bold ${inter.className}`}
          >
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="font-normal text-base text-[#333333] py-3 lg:py-6">
        Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor diam mi leo eu et. Enim dolor et sed condimentum. 
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, index) => (
            <div
              key={index}
              className="bg-[#2C4C4B] text-white px-4 py-6 rounded-lg text-center shadow-lg"
            >
              <h3
                className={` ${inter.className} font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#F9F9F9]`}
              >
                {stat.value}
              </h3>
              <p className="font-normal text-base text-[#F9F9F9] pt-3 lg:pt-6">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
