import { Inter } from "next/font/google";
import React from "react";
import {
  AdminHeaderNotificationIcon,
  EmailIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
} from "./common/Icons";
import Image from "next/image";
import userProfile from "../../../public/images/png/user.png";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

interface AdminHeaderProps {
  heading: string;
  sub_heading: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ heading, sub_heading }) => {
  return (
    <div className="py-[22px] flex items-center justify-between">
      <div>
        <h2 className="font-normal text-lg lg:text-2xl leading-[150%] text-[#213737] capitalize">
          <span className="text-xs text-[#9A9999]">Pages</span> / {heading}
        </h2>
        <h2
          className={`font-bold text-sm  leading-[140%] text-[#213737] capitalize ${inter.className}`}
        >
          {sub_heading}
        </h2>
      </div>
      <div className="flex gap-3 lg:gap-6  items-center">
        <div className="flex items-center gap-1 bg-[#FFFFFF] border-[0.5px] border-[#D6D6D6] rounded-2xl py-[11px] px-3">
          <SearchIcon />
          <input
            type="search"
            name=""
            id=""
            placeholder="Type here..."
            className="text-xs font-normal text-[#9A9999] outline-none"
          />
        </div>
        <div className="flex gap-3 lg:gap-6 items-center">
          <Link href={""}><Image width={40} height={40} src={userProfile} alt="profile-img" /></Link>

          <Link href={""}><EmailIcon /></Link>
          <Link href={""}> <AdminHeaderNotificationIcon /></Link>
          <Link href={""}> <SettingsIcon /></Link>
          <Link href={""}><LogOutIcon /></Link>



        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
