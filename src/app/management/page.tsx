'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import { CheckIcon, CreateIcon, DottedIcon } from '../components/common/Icons';
import { tasks } from '../components/common/Helper';
import MangTable from '../components/tableData/MangTable';
import AddTask from '../components/popues/AddTask';
import Newtaskgroup from '../components/popues/Newtaskgroup';
import Changestatus from '../components/popues/Changestatus';
import Workflow from '../components/popues/Workflow';

interface PageProps {
  progress: number;
}

const Page: React.FC<PageProps> = ({ progress }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSideBar]);
  const progressWidth = Math.max(5, Math.min(progress ? progress : 50, 100));
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="h-screen relative bg-[#f0f0f0] ">
      <div className="flex flex-wrap h-full">
        <div
          className={`  w-[200px] lg:w-[296px] max-md:fixed left-0 duration-300  ${
            showSideBar ? 'top-0' : '-top-[100vh]'
          }`}>
          <div className="h-full z-10 relative pt-11 px-3 lg:px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className=" w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)]  px-2.5 lg:px-5">
          <div className="bg-[#FFFFFF] rounded-[15px] py-[28px] px-[21px]  shadow-[0px_3.5px_5.5px_0px_#00000005]  h-fit max-h-[40%] ">
            <div className=" xl:flex justify-between">
              <div>
                <h2 className=" font-semibold sm:text-lg md:text-xl lg:text-[28px] text-[#213737]">
                  Develop the app's core features{' '}
                </h2>
              </div>
              <div className="flex space-x-4 pt-5 lg:pt-0">
                <button className="w-[116px] text-center font-bold text-sm text-[#333333] border border-[#9A9999] rounded-[16px]  py-[8.5px] cursor-pointer">
                  Edit project
                </button>
                <button className="w-[116px] text-center font-bold text-sm text-[#333333] border border-[#9A9999] rounded-[16px] px-[20px] py-[8.5px] cursor-pointer">
                  Archive
                </button>
                <button className="w-[116px] text-center font-bold text-sm text-[#333333] border border-[#9A9999] rounded-[16px]  py-[8.5px] cursor-pointer">
                  Close
                </button>
              </div>
            </div>
            <p className=" font-normal text-sm lg:text-base text-[#333333] pt-[24px]">
              This project focuses on developing the app's core features to enhance functionality
              and user experience. Key tasks include designing the UI, integrating essential
              components, and ensuring seamless performance through testing and optimization
            </p>
            <div className=" pt-[24px] flex ">
              <div className="xl:w-2/12 w-full">
                <h2 className=" font-bold text-[12px] text-[#9A9999]"> ASSIGNED TEAM:</h2>

                <div className="relative h-[40px]">
                  {[
                    'teams1.png',
                    'tems2.png',
                    'tems3.png',
                    'tems4.png',
                    'tmes5.png',
                    'tems6.png',
                    'tems7.png',
                  ].map((img, idx) => (
                    <Image
                      key={idx}
                      className="absolute rounded-full border border-white"
                      src={`/images/png/${img}`}
                      alt={`Assigned ${idx + 1}`}
                      width={50}
                      height={50}
                      style={{ left: `${idx * 13}px`, top: '13px', zIndex: idx }}
                    />
                  ))}
                </div>
              </div>
              <div className="xl:w-2/12 w-full">
                <h2 className=" font-bold text-[12px] text-[#9A9999] pb-[16px]">STATUS:</h2>
                <h3 className=" font-semibold text-base bg-[#747EBD] text-white inline-block rounded-[8px] px-[16px] py-[5px]">
                  ACTIVE
                </h3>
              </div>
              <div className="xl:w-2/12 w-full">
                <h2 className=" font-bold text-[12px] text-[#9A9999]"> PROGRESS:</h2>
                <div className="flex flex-col w-32 pt-[16px]">
                  <span className="text-xs lg:text-sm text-gray-700">
                    {progress ? progressWidth : 60}%
                  </span>

                  <div className="relative w-full h-[3px] bg-gray-300 rounded-lg overflow-hidden">
                    <div
                      className="absolute h-full bg-[#408C62] rounded-lg min-w-[5px] transition-all duration-500 ease-in-out"
                      style={{ width: `${progressWidth}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="flex items-center pt-[16px] xl:w-4/12">
                <div className="flex flex-col w-32 ">
                  <div>
                    <span className="text-xs lg:text-sm text-[#2C4C4B] font-bold">
                      {progressWidth}% Complete
                    </span>
                  </div>

                  <div className="relative w-full h-[3px] bg-gray-300 rounded-lg overflow-hidden mt-[5px]">
                    <div
                      className="absolute h-full bg-[#408C62] rounded-lg min-w-[5px] transition-all duration-500 ease-in-out"
                      style={{ width: `${progressWidth}%` }}></div>
                  </div>
                </div>
                <div>
                  <h2 className=" text-[#CB2F00] font-bold text-sm xl:text-base">2/28/25 </h2>
                </div>
                <div className=" w-3/12"></div>
                <DottedIcon />
              </div>
            </div>
            <div className="overflow-x-auto md:max-w-full overflow-visible">
              <table className="w-full mt-7 border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                    {['#', 'TASK NAME', 'STATUS', ' DUE DATE', 'PRIORITIES', ''].map(
                      (head, index) => (
                        <th key={index} className="px-4 py-3 text-[#9A9999]">
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b border-gray-200">
                      <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.id}</td>
                      <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>

                      <td className="px-4 py-[16px]">
                        <span
                          className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                          style={{ backgroundColor: task.color }}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.due}</td>
                      <td className="px-4 py-[16px]"> {task.img}</td>
                      <td className="px-4 py-[16px] cursor-pointer">
                        <DottedIcon />
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
                <Newtaskgroup closePopup={() => setIsOpen2(false)} />
              </div>
            </div>
          )}
          {/* <Changestatus /> */}
          <Workflow />
        </div>
      </div>
    </div>
  );
};

export default Page;
