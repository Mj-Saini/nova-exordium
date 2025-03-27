'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { CheckIcon, CreateIcon, DottedIcon, FleterIcon } from '../components/common/Icons';
import Image from 'next/image';
import Filter from '../components/popues/Filter';
import { tasks2 } from '../components/common/Helper';
import AdminHeader from '../components/AdminHeader';
import Layout from '../components/common/Layout';

const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout heading="Projects List" sub_heading="Projects">
      <div className="shadow-[0px_3.5px_5.5px_0px_#00000005] p-[0px_23px_16px_21px] bg-white rounded-[15px]">
        <div className=" sm:flex justify-between items-center pt-[24px] pb-[24px]">
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
        <div className="overflow-hidden">
          <div className="max-h-[700px] md:max-h-[390px] overflow-y-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-white z-10 shadow-md">
                <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                  {['#', 'Project Name', 'Assigned To', 'Status', 'Due Date', 'Progress', ''].map(
                    (head, index) => (
                      <th key={index} className="px-4 py-3 text-[#9A9999]">
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {tasks2.map((task) => (
                  <tr key={task.id} className="border-b border-gray-200">
                    <td className="px-3 py-[16px] font-bold text-xs lg:text-sm">{task.id}</td>
                    <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>
                    <td className="px-4 py-[16px] relative">
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
                    <td className="px-4 py-[16px]">
                      <span
                        className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                        style={{ backgroundColor: task.color }}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.due}</td>
                    <td className="px-4 py-[16px]">
                      <div className="flex flex-col w-32">
                        <span className=" text-xs lg:text-sm text-[#2C4C4B]">
                          {task.progress * 10}%
                        </span>
                        <div className="relative w-full h-1 bg-gray-300 rounded-lg">
                          <div
                            className="absolute h-full bg-[#2C4C4B] rounded-lg"
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
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <Filter closePopup={setIsOpen} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;
