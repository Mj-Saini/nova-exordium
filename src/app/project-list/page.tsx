'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { CheckIcon, CreateIcon, DottedIcon, FleterIcon } from '../components/common/Icons';
import Image from 'next/image';
import Filter from '../components/popues/Filter';

const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const tasks = [
    {
      id: 1,
      name: "Develop the app's core features",
      status: 'ACTIVE',
      color: '#747EBD',
      due: 'Today',
      progress: 5,
    },
    {
      id: 2,
      name: 'Monitor app performance and user feedback',
      status: 'COMPLETED',
      color: '#408C62',
      due: 'Today',
      progress: 3,
    },
    {
      id: 3,
      name: 'Implement security and data privacy measures',
      status: 'COMPLETED',
      color: '#408C62',
      due: '2/3/2025',
      progress: 10,
    },
    {
      id: 4,
      name: 'Deploy to production',
      status: 'ARCHIVED',
      color: '#EBA055',
      due: '2/3/2025',
      progress: 3,
    },
    {
      id: 5,
      name: 'Develop the app’s core features',
      status: 'ACTIVE',
      color: '#747EBD',
      due: 'Tomorrow',
      progress: 4,
    },
    {
      id: 6,
      name: 'Develop interactive prototypes to test',
      status: 'COMPLETED',
      color: '#408C62',
      due: 'Tomorrow',
      progress: 10,
    },
    {
      id: 7,
      name: 'Test and refine each feature before moving forward',
      status: 'ACTIVE',
      color: '#747EBD',
      due: 'Today',
      progress: 4,
    },
    {
      id: 8,
      name: 'Test and iterate on the functionalities',
      status: 'ARCHIVED',
      color: '#EBA055',
      due: '2/3/2025',
      progress: 3,
    },
    {
      id: 9,
      name: 'Establish protocols to protect user data',
      status: 'ACTIVE',
      color: '#747EBD',
      due: 'Today',
      progress: 5,
    },
    {
      id: 10,
      name: 'Identify strengths, weaknesses, and gaps',
      status: 'ARCHIVED',
      color: '#EBA055',
      due: '2/3/2025',
      progress: 6,
    },
  ];

  return (
    <div className="h-screen relative">
      <div className="flex flex-wrap h-full">
        <div
          className={` w-full md:w-3/12 xl:w-2/12 max-md:fixed left-0 duration-300 ${
            showSideBar ? 'top-0' : '-top-full'
          }`}>
          <div className="h-full z-10 relative pt-11 px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className="w-full md:w-9/12 xl:w-10/12">
          <div className="shadow-[0px_3.5px_5.5px_0px_#00000005] p-[28px_23px_64px_21px] bg-white rounded-[15px]">
            <div className=" sm:flex justify-between items-center">
              <div>
                <h2 className=" font-bold text-lg">Projects</h2>
                <div className=" flex pt-[6px] items-center">
                  <CheckIcon />
                  <h3 className=" font-bold text-sm text-[#9A9999] ps-[5px]">30 done this month</h3>
                </div>
              </div>
              <div className=" flex items-center mt-4 lg:mt-0">
                <div
                  className="border border-[var(--Color-2,#EAEAEA)] w-[45px] h-[36px] rounded-[16px] p-[12px] gap-[6px] flex items-center justify-center bg-white cursor-pointer me-[16px]"
                  onClick={() => setIsOpen(!isOpen)}>
                  <FleterIcon />
                </div>
                <button className=" bg-[#2C4C4B]  text-white rounded-[16px] py-[12px] px-5  flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm">
                  <CreateIcon />
                  Create New Project
                </button>
              </div>
            </div>
            <div className="overflow-x-auto md:max-w-full lg:overflow-visible">
              <table className="w-full mt-7 border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                    {['#', 'Project Name', 'Assigned To', 'Status', 'Due Date', 'Progress', ''].map(
                      (head, index) => (
                        <th key={index} className="px-4 py-3 text-gray-600">
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap">
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b border-gray-200">
                      <td className="px-4 py-2 font-bold text-xs lg:text-sm">{task.id}</td>
                      <td className="px-4 py-2 font-bold text-xs lg:text-sm">{task.name}</td>
                      <td className="px-4 py-2 relative">
                        {['girlimg.png', 'assigned2.png', 'assigned3.png', 'asseigned4.png'].map(
                          (img, idx) => (
                            <Image
                              key={idx}
                              className="absolute rounded-full border border-white"
                              src={`/images/png/${img}`}
                              alt="Assigned"
                              width={22}
                              height={22}
                              style={{ left: `${idx * 12}px`, top: '13px', zIndex: idx }}
                            />
                          )
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                          style={{ backgroundColor: task.color }}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 font-bold text-xs lg:text-sm">{task.due}</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-col w-32">
                          <span className=" text-xs lg:text-sm text-gray-700">
                            {task.progress * 10}%
                          </span>
                          <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                            <div
                              className="absolute h-full bg-[#408C62] rounded-lg"
                              style={{ width: `${task.progress * 10}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 cursor-pointer">
                        <DottedIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {isOpen && (
              <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                  <Filter closePopup={setIsOpen} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
