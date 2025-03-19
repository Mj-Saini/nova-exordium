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

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={` w-full md:w-3/12 xl:w-2/12 max-md:fixed left-0 duration-300  ${
            showSideBar ? 'top-0' : '-top-full'
          }`}>
          <div className="h-full z-10 relative pt-11 px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className="w-full md:w-9/12 xl:w-10/12">
          <div className="shadow-[0px_3.5px_5.5px_0px_#00000005] p-4 bg-white rounded-[15px]">
            <div className=" sm:flex justify-between items-center pt-[28px]">
              <div>
                <h2 className=" font-bold text-lg">Projects</h2>
                <div className=" flex pt-[6px] items-center">
                  <CheckIcon />
                  <h3 className=" font-bold text-sm text-[#9A9999] ps-[5px]">30 done this month</h3>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="border border-[var(--Color-2,#EAEAEA)] w-[45px] h-[36px] rounded-[16px] p-[12px] gap-[6px] flex items-center justify-center bg-white cursor-pointer me-[16px]">
                  <FleterIcon />
                </div>
                <button className=" bg-[#2C4C4B] text-white rounded-[16px] py-2 px-4  flex items-center gap-2 cursor-pointer font-bold text-xs sm:text-sm">
                  <CreateIcon />
                  Create New Project
                </button>
              </div>
            </div>
            <div className="overflow-x-auto md:max-w-full lg:overflow-visible">
              <table className="w-full mt-7 border-collapse">
                <thead className="border-b border-solid border-[#EAEBEB] sticky top-0 bg-white">
                  <tr className="text-left">
                    {['#', 'Project Name', 'Assigned To', 'Status', 'Due Date', 'Progress', ''].map(
                      (head, index) => (
                        <th
                          key={index}
                          className="px-4 py-3 text-xs font-bold text-[#9A9999] capitalize whitespace-nowrap">
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
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
                      status: ' COMPLETED',
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
                      name: 'Develop the app s core features',
                      status: 'ACTIVE',
                      color: '#747EBD',
                      due: 'Tomorrow',
                      progress: 4,
                    },
                    {
                      id: 6,
                      name: 'Develop interactive prototypes to test',
                      status: ' COMPLETED',
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
                      name: 'Identify strengths, weaknesses, and gaps ',
                      status: 'ARCHIVED',
                      color: '#EBA055',
                      due: '2/3/2025',
                      progress: 6,
                    },
                  ].map((task, index) => (
                    <tr key={task.id} className="border-b border-[#EAEBEB]">
                      <td className="px-4 py-3 lg: text-xs text-sm font-bold">{task.id}</td>
                      <td className="px-4 py-3 text-xs lg:text-sm font-bold">{task.name}</td>
                      <td className="px-4 py-3 text-sm font-bold flex items-center relative">
                        {[
                          'girlimg.png',
                          'assigned2.png',
                          'assiged3.png',
                          'assigned3.png',
                          'asseigned4.png',
                        ].map((img, idx) => (
                          <Image
                            key={idx}
                            className="absolute rounded-full border border-white"
                            src={`/images/png/${img}`}
                            alt=""
                            width={22}
                            height={22}
                            style={{
                              left: `${idx * 12}px`,
                              top: idx % 2 === 0 ? '13px' : '13px',
                              zIndex: idx,
                            }}
                          />
                        ))}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="text-white font-bold text-xs lg:text-sm py-1 px-4 rounded-lg"
                          style={{ backgroundColor: task.color }}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs lg:text-sm font-bold">{task.due}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col w-32">
                          <span className="text-sm text-gray-700">{task.progress * 10}%</span>
                          <div className="relative w-full h-2 bg-[#D6D6D6] rounded-lg">
                            <div
                              className="absolute h-full bg-[#2C4C4B] rounded-lg"
                              style={{ width: `${(task.progress / 10) * 100}%` }}></div>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={task.progress}
                            onChange={(e) => setValue(e.target.value)}
                            className="absolute h-2 opacity-10 hidden cursor-pointer"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <DottedIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
