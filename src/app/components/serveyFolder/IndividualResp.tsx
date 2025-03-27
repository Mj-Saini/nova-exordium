import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import IndivTable from "./IndivTable";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const IndividualResp = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-6">
        <div className="p-[28px_24px] bg-white rounded-2xl shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-5">
              {/* heading  */}
              <h2
                className={`text-[#213737] text-2xl lg:text-[28px] ${inter.className} leading-[64%] font-semibold tracking-[0.56px]`}
              >
                Quick Insights Survey
              </h2>
              {/* buttons  */}
              <div className="flex items-center gap-4">
                <button className="cursor-pointer p-[12px_20px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Edit Survey
                </button>
                <button className="cursor-pointer p-[12px_32px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Archive{" "}
                </button>
                <button className="cursor-pointer p-[12px_40px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Close
                </button>
              </div>
            </div>

            {/* para  */}

            <p
              className={`text-[#333] text-base ${inter.className} leading-[125%] font-normal`}
            >
              Quick Insights Survey is about gathering brief and valuable
              feedback from users. The goal is to understand their experiences,
              preferences, and suggestions to improve the app’s design,
              features, and overall performance. It’s designed to be fast and
              easy, respecting the users time while still collecting meaningful
              insights.
            </p>

            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Assigned Team:
                </p>
                <Image
                  src="/images/png/assign_team_img.png"
                  alt="assign_team_img"
                  width={141}
                  height={28}
                  className="-pt-4"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  status:
                </p>
                <span className="p-[2px_16px] bg-[#747EBD] shadow-[0px_0px_14px_0px_rgba(7,144,255,0.20)] text-white text-base font-semibold leading-[125%] rounded-[8px]">
                  ACTIVE
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Progress:
                </p>

                <div className="w-full">
                  <span className="text-[#2C4C4B] text-sm font-bold leading-[140%]">
                    50%
                  </span>
                  <div className="w-full bg-gray-200 h-[2px] mt-1 rounded-full">
                    <div className="bg-[#2C4C4B] h-[2px] w-[50%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Due Date :
                </p>
                <p
                  className={`text-[#E25C2B] text-base font-medium leadinng-[140%]  uppercase ${inter.className}`}
                >
                  8/28/2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <IndivTable />
      </section>
    </>
  );
};

export default IndividualResp;
