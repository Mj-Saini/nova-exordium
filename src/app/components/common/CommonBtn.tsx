import Link from "next/link";
import React from "react";
import { GoNextIcon } from "./Icons";

interface CommonBtnProps {
  btnName: string;
  btnStyling?: string; // Optional prop
}

const CommonBtn: React.FC<CommonBtnProps> = ({ btnName, btnStyling }) => {
  return (
    <div>
      <Link
        href="/"
        className={`font-bold leading-[100%] rounded-2xl px-5 pt-4 pb-3.5 whitespace-nowrap inline-flex items-center gap-3 ${btnStyling}`}
      >
        <span>{btnName}</span>{" "}
        <span>
                  <GoNextIcon iconStyling={btnStyling} />
        </span>
      </Link>
    </div>
  );
};

export default CommonBtn;
