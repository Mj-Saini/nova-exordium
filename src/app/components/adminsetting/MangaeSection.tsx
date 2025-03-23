import React, { useState } from "react";
import { converstationData, options, projectCardData } from "../common/Helper";
import {
  FacebookIcons,
  GreenArrowIcons,
  InstagramIcons,
  LineStrokeIcons,
  PulseIcons,
  TwitterIcons,
  WhiteArrowIcons,
} from "../common/Icons";
import Link from "next/link";
import Image from "next/image";

// interface ToggleOption {
//   id: string;
//   label: string;
//   category: "roles" | "application";
// }

const MangaeSection: React.FC = () => {
  const [enabledOptions, setEnabledOptions] = useState<string[]>([
    "internal-team",
    "consultant",
    "subscribe-newsletter",
  ]);

  //   const options: ToggleOption[] = [
  //     { id: "internal-team", label: "Internal Team", category: "roles" },
  //     { id: "customer", label: "Customer", category: "roles" },
  //     { id: "consultant", label: "Consultant", category: "roles" },
  //     {
  //       id: "new-launches",
  //       label: "New launches and projects",
  //       category: "application",
  //     },
  //     {
  //       id: "monthly-updates",
  //       label: "Monthly product updates",
  //       category: "application",
  //     },
  //     {
  //       id: "subscribe-newsletter",
  //       label: "Subscribe for newsletter",
  //       category: "application",
  //     },
  //   ];

  const toggleOption = (id: string) => {
    if (enabledOptions.includes(id)) {
      setEnabledOptions(enabledOptions.filter((option) => option !== id));
    } else {
      setEnabledOptions([...enabledOptions, id]);
    }
  };

  return (
    <>
      <section className="flex gap-6 items-center max-xl:flex-wrap">
        <div className="w-full xl:max-w-[517px] p-[28px_21px_24px_21px] bg-white shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] rounded-[15px]">
          <h2 className="text-lg font-bold leading-[140%] text-[#213737]">
            Management
          </h2>

          <div className="mt-4">
            <h4 className="text-[10px] font-bold leading-[150%] text-[#9A9999] uppercase">
              ASSIGN ROLES
            </h4>
            <div className="pt-5">
              {options
                .filter((option) => option.category === "roles")
                .map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-[10px] py-2 "
                  >
                    <button
                      onClick={() => toggleOption(option.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabledOptions.includes(option.id)
                          ? "bg-[#2C4C4B]"
                          : "bg-[#D6D6D6]"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          enabledOptions.includes(option.id)
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                    <span className="text-[12px] font-normal leading-[150%] text-[#333] ">
                      {option.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-[10px] font-bold leading-[150%] text-[#9A9999] uppercase">
              APPLICATION
            </h4>
            <div className="pt-5">
              {options
                .filter((option) => option.category === "application")
                .map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-[10px] py-2"
                  >
                    <button
                      onClick={() => toggleOption(option.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabledOptions.includes(option.id)
                          ? "bg-[#2C4C4B]"
                          : "bg-[#D6D6D6]"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          enabledOptions.includes(option.id)
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                    <span className="text-[12px] font-normal leading-[150%] text-[#333]">
                      {option.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Profile Information  Section */}
        <div className="w-full xl:max-w-[517px] p-[28px_21px_50px_21px] bg-white shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] rounded-[15px]">
          <h2 className="text-lg font-bold leading-[140%] text-[#213737]">
            Profile Information
          </h2>

          <p className="text-[12px] font-normal leading-[150%] text-[#333] pt-4">
            Lorem ipsum dolor sit amet consectetur. Egestas nisi ullamcorper
            enim venenatis leo tristique ornare cursus. Lectus bibendum et
            aliquet bibendum et amet. Ligula vel fermentum eleifend nulla quis
            nulla non. Consectetur tempus arcu pulvinar mi bibendum tortor.
          </p>

          <div className="mt-4 flex justify-cente">
            <LineStrokeIcons />
          </div>

          <div className="pt-[30px]">
            <ul className="flex flex-col gap-3 2xl:gap-[18px]">
              <li className="text-[12px] font-normal leading-[150%] text-[#333]">
                <span className="font-bold pe-3">Full Name:</span> Gregory
                Hodkiewicz
              </li>
              <li>
                <span className="font-bold text-[12px] pe-3 leading-[150%] text-[#333]">
                  Mobile:
                </span>
                <Link
                  href="tel:+441231234123"
                  className=" text-[12px] font-normal leading-[150%] text-[#333]"
                >
                  (44) 123 1234 123
                </Link>
              </li>
              <li>
                <span className="font-bold text-[12px] pe-3 leading-[150%] text-[#333]">
                  Email:
                </span>
                <Link
                  href="mailto:Gregory68@gmail.com"
                  className=" text-[12px] font-normal leading-[150%] text-[#333]"
                >
                  Gregory68@gmail.com
                </Link>
              </li>
              <li>
                {" "}
                <span className="font-bold text-[12px] pe-3 leading-[150%] text-[#333]">
                  Location:
                </span>
                <Link
                  href="https://www.google.com/maps/search/United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-[12px] font-normal leading-[150%] text-[#333]"
                >
                  United States
                </Link>
              </li>
              <li className="flex">
                <span className="font-bold text-[12px] pe-3 leading-[150%] text-[#333]">
                  Social Media:
                </span>
                <span className="flex items-center gap-[14px]">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcons />
                  </Link>
                  <Link
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcons />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcons />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conversations Section */}
        <div className="w-full xl:max-w-[517px] p-[28px_21px_34px_21px] bg-white shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] rounded-[15px]">
          {/* heading  */}
          <h2 className="text-lg font-bold leading-[140%] text-[#213737]">
            Conversations
          </h2>

          <ul className="flex flex-col gap-6 pt-4">
            {converstationData.map((items, index) => (
              <li className="flex justify-between items-center" key={index}>
                {/* profile */}

                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src={items.img}
                      alt="gorge_img"
                      width={60}
                      height={60}
                      className="rounded-2xl "
                    />
                  </div>

                  <div>
                    <h3 className="text-sm lg:text-lg font-bold leading-[140%] text-[#213737]">
                      {items.name}
                    </h3>
                    <p className="text-sm font-normal leading-[140%] text-[#9A9999]">
                      {items.comment}
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-[#2C4C4B] font-bold leading-[150%] cursor-pointer">
                  REPLY
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Conversations */}
      </section>

      {/* project sectionn  */}
      <section className="w-full  p-[28px_21px_24px_21px] bg-white shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] rounded-[15px] mt-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold leading-[140%] text-[#213737]">
              Projects
            </h2>
            <p className="text-sm font-normal leading-[140%] pt-[6px] text-[#9A9999] ">
              Architects design houses
            </p>
          </div>

          <button
            className="bg-[#2C4C4B] p-[12px_20px] rounded-full inline-flex gap-4 items-center hover:bg-[#3b6261] text-white text-sm font-bold leading-[140%] capitalize cursor-pointer duration-500
                "
          >
            View All Projects
            <span>
              <WhiteArrowIcons />
            </span>
          </button>
        </div>

        {/* mapping of cards  */}

        <div className="flex gap-6  max-2xl:overflow-x-scroll max-2xl:whitespace-nowrap pb-5">
          {projectCardData.map((items, index) => (
            <div key={index}>
              <div className={`max-w-[370px] w-full mt-6 ${items.forthh}`}>
                <Image
                  src={items.img}
                  alt="project_card_img"
                  width={370}
                  height={191}
                />

                <div className="pt-5 px-2">
                  <p className="text-[#9A9999] text-[10px] font-normal leading-[150%]">
                    {items.number}
                  </p>

                  <h2 className="text-lg font-bold leading-[140%] text-[#213737]">
                    {items.heading}
                  </h2>

                  <p className="text-[#9A9999] text-xs pt-[10px] font-normal leading-[150%]">
                    {items.decs}
                  </p>

                  <div className="flex justify-between items-center pt-[19px]">
                    <button
                      className="border-[#2C4C4B] border p-[12px_20px] rounded-full inline-flex gap-4 items-center hover:bg-gray-200 text-[#2C4C4B] text-sm font-bold leading-[140%] capitalize cursor-pointer duration-500
                "
                    >
                      View more
                      <span>
                        <GreenArrowIcons />
                      </span>
                    </button>

                    <Image
                      src="/images/png/avatart_gp_img.png"
                      alt="avatart_gp_img"
                      width={59}
                      height={29}
                    />
                  </div>
                </div>
              </div>

              {items.forthh && (
                <div className="border border-[#E0E1E2] rounded-2xl flex justify-center items-center px-[92px] w-full aspect-1  mt-6 h-full">
                  <div className="w-fit flex flex-col items-center">
                    <span className="mx-auto">
                      <PulseIcons />
                    </span>
                    <h2 className="text-lg font-bold leading-[140%] text-[#9A9999] pt-[10px] whitespace-nowrap">
                      Create a New Project
                    </h2>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MangaeSection;
