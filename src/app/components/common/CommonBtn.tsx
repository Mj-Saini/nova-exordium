

import Link from "next/link";
import React from "react";
import { GoNextIcon } from "./Icons";

interface CommonBtnProps {
  btnName: string;
  btnStyling?: string; // Optional prop
  arrowIcon?: string; // Optional prop
  path?: string; // Optional prop
}

const CommonBtn: React.FC<CommonBtnProps> = ({ btnName, btnStyling, arrowIcon,path }) => {
  


  return (
    <>
      <Link
        href={`${path}`}
        className={`font-bold leading-[100%] rounded-2xl px-5 pt-4 pb-3.5 whitespace-nowrap inline-flex items-center gap-3 ${btnStyling}`}
      >
        <span>{btnName}</span>{" "}
        <span className={`${arrowIcon}`}>
          <GoNextIcon iconStyling={btnStyling} />
        </span>
      </Link>
    </>
  );
};

export default CommonBtn;
