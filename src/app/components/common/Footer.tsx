import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  Appstore_icon,
  FbIcon,
  InstaIcon,
  LinkedInIcon,
  Playstore_icon,
  TwiterIcon,
  YouTubeIcon,
} from "./Icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#213737] pt-12">
      <div className="custom_container">
        <div className="flex flex-wrap lg:justify-between lg:items-center">
          {/* Left Side - Company Info */}
          <div className="w-full md:w-1/2 lg:px-3 ">
            <div className="cursor-pointer inline-flex items-end">
              <span
                className={`${inter.className} text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white font-black uppercase`}
              >
                NOVA
              </span>{" "}
              <span
                className={`${inter.className} text-xl sm:text-2xl lg:text-[27px] text-white font-bold uppercase`}
              >
                EXORDIUM
              </span>
            </div>
            <p className="font-normal text-[16px] text-[#F9F9F9] py-4 lg:py-6">
              1234 Elm Street, Springfield, NY 10001, USA
            </p>
            <p className="font-normal text-[16px] text-[#F9F9F9] pb-4 lg:pb-6">contact@example.com</p>
            <p className="font-normal text-[16px] text-[#F9F9F9]">+1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/2 lg:px-3 mt-4  lg:mt-6 lg:mt-0">
            {/* Center - Navigation Links */}
            <div className="flex flex-wrap justify-end gap-6">
              <Link href="#" className="font-medium text-base text-white">
                Dashboard
              </Link>
              <Link href="#" className="font-medium text-base text-white">
                Projects
              </Link>
              <Link href="#" className="font-medium text-base text-white">
                Templates
              </Link>
              <Link href="#" className="font-medium text-base text-white">
                Notifications
              </Link>
              <Link href="#" className="font-medium text-base text-white">
                Settings
              </Link>
            </div>

            {/* Right Side - Social Media & App Buttons */}
            <div className="flex flex-col justify-end space-y-4">
              {/* Social Icons */}
              <div className="flex justify-end my-6 space-x-4 text-gray-300">
                <LinkedInIcon />
                <FbIcon />
                <TwiterIcon />
                <YouTubeIcon />
                <InstaIcon />
              </div>

              {/* App Store & Google Play */}
              <div className="flex justify-end space-x-3">
                <span className="cursor-pointer"><Appstore_icon /></span>
                <span className="cursor-pointer"><Playstore_icon /></span>

              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Copyright Section */}
      <div className="mt-10 border-t-[0.5px] border-[#F9F9F9] font-normal text-base text-[#F9F9F9] text-center py-6 lg:py-[60px]">
        © {currentYear} NovaExordium. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
