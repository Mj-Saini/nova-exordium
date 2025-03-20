'use client';
import React from 'react';
import { CheckIcon, CreateIcon, DottedIcon } from '../common/Icons';
import { tasks3, tasks5 } from '../common/Helper';

const MangTable = ({ progress = 50 }) => {
  const progressWidth = Math.max(5, Math.min(progress, 100));

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
          <div className="flex items-center pt-[16px] xl:w-4/12">
            <div className="flex flex-col w-32">
              <span className="text-xs lg:text-sm text-[#2C4C4B] font-bold">
                {progressWidth}% Complete
              </span>
              <div className="relative w-full h-[3px] bg-gray-300 rounded-lg overflow-hidden mt-[5px]">
                <div
                  className="absolute h-full bg-[#408C62] rounded-lg min-w-[5px] transition-all duration-500 ease-in-out"
                  style={{ width: `${progressWidth}%` }}></div>
              </div>
            </div>

            {/* Due Date */}
            <h2 className="text-[#CB2F00] font-bold text-sm xl:text-base ml-4">2/28/25</h2>

            {/* Dotted Icon */}
            <div className="ml-auto pe-5">
              <DottedIcon />
            </div>
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
                  <td className="px-4">
                    <td className="px-4 "> {task.img}</td>
                  </td>
                  <td className="px-4 font-bold text-xs lg:text-sm">{task.due}</td>

                  <td className="px-4  cursor-pointer">
                    <DottedIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-[16px]">
          <button className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm">
            <CreateIcon />
            Add Task
          </button>
          <button className="bg-[#2C4C4B] text-white rounded-[16px] lg:py-[12px] px-5 flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm">
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
          <div className="flex items-center pt-[16px] xl:w-4/12">
            <div className="flex flex-col w-32">
              <span className="text-xs lg:text-sm text-[#2C4C4B] font-bold">
                {progressWidth}% Complete
              </span>
              <div className="relative w-full h-[3px] bg-gray-300 rounded-lg overflow-hidden mt-[5px]">
                <div
                  className="absolute h-full bg-[#408C62] rounded-lg min-w-[5px] transition-all duration-500 ease-in-out"
                  style={{ width: `${progressWidth}%` }}></div>
              </div>
            </div>

            {/* Due Date */}
            <h2 className="text-[#CB2F00] font-bold text-sm xl:text-base ml-4">2/28/25</h2>

            {/* Dotted Icon */}
            <div className="ml-auto pe-5">
              <DottedIcon />
            </div>
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
                  <td className="px-4">
                    <td className="px-4 "> {task.img}</td>
                  </td>
                  <td className="px-4 font-bold text-xs lg:text-sm">{task.due}</td>

                  <td className="px-4  cursor-pointer">
                    <DottedIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-[16px]">
          <button className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm">
            <CreateIcon />
            Add Task
          </button>
          <button className="bg-[#2C4C4B] text-white rounded-[16px] lg:py-[12px] px-5 flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm">
            <CreateIcon />
            New Task Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangTable;
