/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState, useRef } from 'react';

import { CheckIcon, CopyIcons, CreateIcon, DeletIcon, DottedIcon, EditIcon } from '../common/Icons';
import { tasks } from '../common/Helper';
import Changestatus from '../popues/Changestatus';
import MangTable from '../tableData/MangTable';
import AddTask from '../popues/AddTask';

import Template from '../popues/Template';
import Layout from '../common/Layout';

const Features = () => {
  const [openDottedMenu, setOpenDottedMenu] = useState<number | null>(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const dottedMenuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen || isOpen2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isOpen2]);

  // Handle clicks outside the dotted menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dottedMenuRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );

      if (clickedOutside) {
        setOpenDottedMenu(null);
      }
    };

    // Add event listener when a menu is open
    if (openDottedMenu !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDottedMenu]);

  return (
    <Layout heading="Template Library" sub_heading="Templates">
      <div className="bg-[#FFFFFF] rounded-[15px] py-[28px] px-[21px]  shadow-[0px_3.5px_5.5px_0px_#00000005]  h-fit max-h-[40%] ">
        <div className=" xl:flex justify-between">
          <div>
            <h2 className=" font-semibold sm:text-lg md:text-xl lg:text-[28px] text-[#213737]">
              Develop the app's core features{' '}
            </h2>
          </div>
          <div className="flex space-x-4 pt-5 lg:pt-0">
            <button className=" text-center font-medium gap-2 text-sm text-[#333333] border border-[#D6D6D6] rounded-[16px]  py-[11px] flex cursor-pointer px-[16px]">
              <EditIcon />
              Edit
            </button>
            <button className=" text-center font-medium gap-2 text-sm text-[#333333] border border-[#D6D6D6] rounded-[16px]  py-[11px] flex cursor-pointer px-[16px]">
              <CopyIcons />
              Clone
            </button>
            <button className=" text-center font-medium gap-2 text-sm text-[#333333] border border-[#D6D6D6] rounded-[16px]  py-[11px] flex cursor-pointer px-[16px]">
              <DeletIcon />
              Remove
            </button>
          </div>
        </div>
        <p className=" font-normal text-sm lg:text-base text-[#333333] pt-[24px]">
          This project focuses on developing the app's core features to enhance functionality and
          user experience. Key tasks include designing the UI, integrating essential components, and
          ensuring seamless performance through testing and optimization
        </p>
      </div>
      <div className="bg-[#FFFFFF] w-full rounded-[15px] h-fit max-h-[60%] py-[28px] px-[21px] mt-[2%] shadow-[0px_3.5px_5.5px_0px_#00000005]">
        <div className=" flex justify-between">
          <div className=" xl:w-2/12">
            <h2 className=" font-bold text-sm md:text-base lg:text-lg text-[#213737]">
              Phase 1 - Strategy{' '}
            </h2>
            <div className=" flex pt-[6px] items-center">
              <CheckIcon />
              <h3 className=" font-bold text-xs lg:text-sm text-[#9A9999] ps-[5px]">
                1/4 Completed
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-[16px] w-fit">
            <div className="flex flex-col  ">
              <div>
                <span className="text-xs lg:text-sm text-[#2C4C4B] font-bold">60% Complete</span>
              </div>

              <div className="relative w-full h-[3px] bg-gray-300 rounded-lg overflow-hidden mt-[5px]">
                <div
                  className="absolute h-full bg-[#2C4C4B] rounded-lg min-w-[5px] transition-all duration-500 ease-in-out"
                  style={{ width: `60%` }}></div>
              </div>
            </div>

            <div>
              <h2 className=" text-[#CB2F00] font-bold text-sm xl:text-base">2/28/25 </h2>
            </div>

            <DottedIcon />
          </div>
        </div>
        <div className="overflow-x-auto md:max-w-full overflow-visible   pt-3 pb-5">
          <table className="w-full mt-7 border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                {['#', 'TASK NAME', 'STATUS', ' DUE DATE', 'PRIORITIES', ''].map((head, index) => (
                  <th key={index} className="px-4 py-3 text-[#9A9999]">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-200">
                  <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.id}</td>
                  <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>

                  <td>
                    <span
                      className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                      style={{ backgroundColor: '#EBA055' }}>
                      TO DO
                    </span>
                  </td>
                  <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.due}</td>
                  <td className="px-4 py-[16px]"> {task.img}</td>
                  <td
                    className="cursor-pointer relative"
                    ref={(el) => {
                      dottedMenuRefs.current[task.id] = el;
                    }}>
                    <div
                      className="flex items-center justify-center"
                      onClick={() =>
                        setOpenDottedMenu(openDottedMenu === task.id ? null : task.id)
                      }>
                      <DottedIcon />
                    </div>

                    {openDottedMenu === task.id && (
                      <div className="absolute top-1/2 left-1/3 transform -translate-x-11/12 -translate-y-1/2  p-2 rounded-md">
                        <Changestatus />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" flex justify-end gap-3 pt-[16px]">
          <button
            className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
            onClick={() => setIsOpen(true)} // Open the popup
          >
            <CreateIcon />
            Add Task
          </button>
          <button
            className=" bg-[#2C4C4B]  text-white rounded-[16px] lg:py-[12px] px-5  flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm"
            onClick={() => setIsOpen2(true)}>
            <CreateIcon />
            New Task Group
          </button>
        </div>
      </div>

      <MangTable />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] mx-4">
            <AddTask closePopup={() => setIsOpen(false)} />
          </div>
        </div>
      )}
      {isOpen2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] mx-4">
            <Template closePopup={() => setIsOpen2(false)} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Features;
