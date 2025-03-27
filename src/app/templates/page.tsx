"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import {
  GoNextIcon,
  CheckIcon,
  CreateIcon,
  FleterIcon,
} from "../components/common/Icons";

import { templates } from '../components/common/Helper';
import AdminHeader from '../components/AdminHeader';
import Filtertemplates from '../components/popues/Filtertemplates';
import { useRouter } from 'next/navigation';

import Template from '../components/popues/Template';
import Layout from "../components/common/Layout";

const Page = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSideBar]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpentemplate, setIsOpentemplate] = useState(false);

  const router = useRouter();

  return (
    <Layout heading="Template Library" sub_heading="Templates">
      <div className="bg-[#FFFFFF] rounded-[15px] py-[28px] px-[21px]  shadow-[0px_3.5px_5.5px_0px_#00000005]  h-fit max-h-[100%] ">
        <div className=" sm:flex justify-between items-center">
          <div>
            <h2 className=" font-bold text-lg">Templates</h2>
            <div className=" flex pt-[6px] items-center">
              <CheckIcon />
              <h3 className=" font-bold text-sm text-[#9A9999] ps-[5px]">
                240 Template
              </h3>
            </div>
          </div>
          <div className=" flex items-center mt-4 lg:mt-0">
            <div
              className="border border-[var(--Color-2,#EAEAEA)] w-[45px] h-[36px] rounded-[16px] p-[12px] gap-[6px] flex items-center justify-center bg-white cursor-pointer me-[16px]"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <FleterIcon />
            </div>
            <button
              className=" bg-[#2C4C4B]  text-white rounded-[16px] py-[12px] px-5  flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm"
              onClick={() => setIsOpentemplate(!isOpentemplate)}>
              <CreateIcon />
              Create New Project
            </button>
          </div>
        </div>

        <div className="overflow-x-auto md:max-w-full overflow-visible">
          <table className="w-full mt-7 border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                {[
                  "#",
                  "Template name",
                  "Categoty",
                  "Update Date",
                  "Action",
                ].map((head, index) => (
                  <th key={index} className="px-4 py-3 text-[#9A9999]">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              {templates.map((task) => (
                <tr key={task.id} className="border-b border-gray-200">
                  <td className="px-4 py-[16px] font-bold text-xs lg:text-sm text-[#213737]">
                    {task.id}
                  </td>
                  <td
                    className="px-4 py-[16px] font-bold text-xs lg:text-sm text-[#213737]"
                    onClick={() => router.push('/featureData')}>
                    {task.name}
                  </td>
                  <td className="px-4 py-[16px] font-bold text-xs lg:text-sm text-[#213737]">
                    {task.Categoty}
                  </td>

                  <td className="px-4 py-[16px] font-normal text-sm text-[#333333]">
                    {task.UpdateDate}
                  </td>
                  <td className="px-4 py-2 cursor-pointer inline-block">
                    <div className=" border flex  border-[#F0F0F0] rounded-[16px] py-[5px] px-[12px]">
                      {task.Action}
                      <h2 className=" font-medium ps-2 text-sm text-[#213737]">
                        Edit
                      </h2>
                    </div>
                  </td>
                  <td className="px-4 py-2 cursor-pointer inline-block">
                    <div className=" border flex  border-[#F0F0F0] rounded-[16px] py-[5px] px-[12px]">
                      {task.delet}
                      <h2 className=" font-medium ps-2 text-sm text-[#213737]">
                        Remove
                      </h2>
                    </div>
                  </td>
                  <td className="px-4 py-2 cursor-pointer inline-block">
                    <div className=" border flex  border-[#F0F0F0] rounded-[16px] py-[5px] px-[12px]">
                      {task.Clone}
                      <h2 className=" font-medium ps-2 text-sm text-[#213737]">
                        Clone
                      </h2>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" flex items-center justify-between pt-5">
          <div className=" flex items-center">
            <span className="-scale-100"><GoNextIcon iconStyling="fill-[#333]" /></span>
            <h2 className=" font-bold text-sm text-[#333333] ps-[16px]  ">
              Previous
            </h2>
          </div>

          <div className=" flex items-center">
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              1
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              2
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              3
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              ...
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              8
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              9
            </h2>
            <h2 className="w-[30px] h-[30px] items-center text-sm justify-center hover:text-white text-[#9A9999] font-normal  rounded-full transition-all cursor-pointer hover:bg-[#2C4C4B]  flex ">
              10
            </h2>
          </div>
          <div>
            <button className=" flex gap-4 px-[20px] rounded-full py-[10px] items-center font-bold text-sm text-white bg-[#2C4C4B] cursor-pointer">
              Next <GoNextIcon iconStyling="fill-white" />
            </button>
          </div>
        </div>

        {isOpen2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
            <Filtertemplates closePopup={() => setIsOpen2(false)} />
          </div>
        )}
      </div>
      {isOpentemplate && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
          <Template closePopup={() => setIsOpentemplate(false)} />
        </div>
      )}

    </Layout>
  );
};

export default Page;
