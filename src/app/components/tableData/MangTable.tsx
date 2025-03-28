'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon, CreateIcon, DottedIcon } from '../common/Icons';
import { tasks3, tasks5 } from '../common/Helper';
import AddTask from '../popues/AddTask';
import Newtaskgroup from '../popues/Newtaskgroup';
import Changestatus from '../popues/Changestatus';

const MangTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [openDottedMenu, setOpenDottedMenu] = useState<number | null>(null);
  const [openDottedMenu2, setOpenDottedMenu2] = useState<number | null>(null);
  const dottedMenuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.values(dottedMenuRefs.current).every(
        (ref) => ref && !ref.contains(event.target as Node)
      );

      if (clickedOutside) {
        setOpenDottedMenu2(null);
      }
    };

    // Add event listener when a menu is open
    if (openDottedMenu2 !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDottedMenu2]);

  return (
    <div>
      <div className="bg-[#FFFFFF] w-full rounded-[15px] h-fit max-h-[60%] py-[28px] px-[21px] mt-[2%] shadow-[0px_3.5px_5.5px_0px_#00000005]">
        <div className="flex justify-between">
          {/* Left Side - Phase Info */}
          <div className="xl:w-3/12">
            <h2 className="font-bold text-sm md:text-base lg:text-lg text-[#213737]">
              Phase 2 - Develop App
            </h2>
            <div className="flex pt-[6px] items-center">
              <CheckIcon />
              <h3 className="font-bold text-xs lg:text-sm text-[#9A9999] ps-[5px]">
                1/2 Completed
              </h3>
            </div>
          </div>

          {/* Right Side - Progress Bar */}
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

            {/* <div className=" w-5/12"></div> */}
            <DottedIcon />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto md:max-w-full overflow-visible">
          <table className="w-full mt-7 border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                {['#', 'TASK NAME', 'STATUS', 'PRIORITIES', 'DUE DATE', ''].map((head, index) => (
                  <th key={index} className="px-4 py-3 text-[#9A9999]">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {tasks3.map((task) => (
                <tr key={task.id} className="border-b border-gray-200">
                  <td className="px-4  font-bold text-xs lg:text-sm">{task.id}</td>
                  <td className="px-4  py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>
                  <td className="px-4 ">
                    <span
                      className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                      style={{ backgroundColor: task.color }}>
                      {task.status}
                    </span>
                  </td>

                  <td className="px-4 "> {task.img}</td>

                  <td className="px-4 font-bold text-xs lg:text-sm">{task.due}</td>

                  <td
                    className="cursor-pointer relative"
                    ref={(el) => {
                      dottedMenuRefs.current[task.id] = el;
                    }}>
                    <div
                      className="flex items-center justify-center"
                      onClick={() =>
                        setOpenDottedMenu2(openDottedMenu2 === task.id ? null : task.id)
                      }>
                      <DottedIcon />
                    </div>

                    {openDottedMenu2 === task.id && (
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

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-[16px]">
          <button
            className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
            onClick={() => setIsOpen(true)}>
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

      <div className="bg-[#FFFFFF] w-full rounded-[15px] h-fit max-h-[60%] py-[28px] px-[21px] mt-[2%] shadow-[0px_3.5px_5.5px_0px_#00000005]">
        <div className="flex justify-between">
          {/* Left Side - Phase Info */}
          <div className="xl:w-3/12">
            <h2 className="font-bold text-sm md:text-base lg:text-lg text-[#213737]">
              Phase 3 - Test
            </h2>
            <div className="flex pt-[6px] items-center">
              <CheckIcon />
              <h3 className="font-bold text-xs lg:text-sm text-[#9A9999] ps-[5px]">
                0/4 Completed
              </h3>
            </div>
          </div>

          {/* Right Side - Progress Bar */}
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

            {/* <div className=" w-5/12"></div> */}
            <DottedIcon />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto md:max-w-full overflow-visible">
          <table className="w-full mt-7 border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                {['#', 'TASK NAME', 'STATUS', 'PRIORITIES', 'DUE DATE', ''].map((head, index) => (
                  <th key={index} className="px-4 py-3 text-[#9A9999]">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {tasks5.map((task) => (
                <tr key={task.id} className="border-b border-gray-200">
                  <td className="px-4  font-bold text-xs lg:text-sm">{task.id}</td>
                  <td className="px-4  py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>
                  <td className="px-4 ">
                    <span
                      className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                      style={{ backgroundColor: task.color }}>
                      {task.status}
                    </span>
                  </td>

                  <td className="px-4 "> {task.img}</td>

                  <td className="px-4 font-bold text-xs lg:text-sm">{task.due}</td>
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

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-[16px]">
          <button
            className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
            onClick={() => setIsOpen(true)}>
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
            <Newtaskgroup closePopup={() => setIsOpen2(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MangTable;
