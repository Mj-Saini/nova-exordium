'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { CheckIcon, CreateIcon, DottedIcon, FleterIcon } from '../components/common/Icons';
import Image from 'next/image';
import Filter from '../components/popues/Filter';
import { tasks2 } from '../components/common/Helper';
import AdminHeader from '../components/AdminHeader';

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
    <div className="h-screen relative bg-[#f0f0f0] overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={` w-[200px] lg:w-[296px] max-md:fixed left-0 duration-300${
            showSideBar ? 'top-0' : '-top-full'
          }`}>
          <div className="h-full z-10 relative pt-11 px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>

        {/* Main Content */}
        <div className=" w-full md:w-[calc(100%-200px)] lg:w-[calc(100%-296px)]  px-2.5 lg:px-5">
          {/* Sticky Header */}
          <div
            className={`top-0 sticky z-10 px-6 transition-all duration-300 ${
              isScrolled ? 'bg-[#F0F0F0] shadow-md' : 'bg-transparent'
            }`}>
            <AdminHeader heading="Profile" />
          </div>

          {/* Content Wrapper */}
          <div className="shadow-md p-6 bg-white rounded-[15px] flex flex-col h-full">
            {/* Header Section */}
            <div className="sm:flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">Projects</h2>
                <div className="flex pt-1 items-center">
                  <CheckIcon />
                  <h3 className="font-bold text-sm text-[#9A9999] ps-1">30 done this month</h3>
                </div>
              </div>
              <div className="flex items-center mt-4 lg:mt-0">
                <div
                  className="border border-gray-300 w-11 h-9 rounded-[16px] flex items-center justify-center bg-white cursor-pointer me-4"
                  onClick={() => setIsOpen(!isOpen)}>
                  <FleterIcon />
                </div>
                <button className="bg-[#2C4C4B] text-white rounded-[16px] py-3 px-5 flex items-center gap-2 font-bold text-xs sm:text-sm">
                  <CreateIcon />
                  Create New Project
                </button>
              </div>
            </div>

            {/* Scrollable Table Container */}

            <div className="flex-grow overflow-y-auto mt-6 rounded-[15px] pb-[10%]">
              <table className="w-full border-collapse whitespace-nowrap">
                <thead className="sticky top-0 bg-white shadow z-50">
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm">
                    {['#', 'Project Name', 'Assigned To', 'Status', 'Due Date', 'Progress', ''].map(
                      (head, index) => (
                        <th key={index} className="px-4 py-3 text-[#9A9999]">
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {tasks2.map((task) => (
                    <tr key={task.id} className="border-b border-gray-200">
                      <td className="px-4 py-4 font-bold text-xs lg:text-sm">{task.id}</td>
                      <td className="px-4 py-4 font-bold text-xs lg:text-sm">{task.name}</td>
                      <td className="px-4 py-4 relative">
                        {['girlimg.png', 'assigned2.png', 'assigned3.png', 'asseigned4.png'].map(
                          (img, idx) => (
                            <Image
                              key={idx}
                              className="absolute rounded-full z-50 border border-white"
                              src={`/images/png/${img}`}
                              alt="Assigned"
                              width={22}
                              height={22}
                              style={{ left: `${idx * 12}px`, top: '13px', zIndex: idx }}
                            />
                          )
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                          style={{ backgroundColor: task.color }}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-bold text-xs lg:text-sm">{task.due}</td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col w-32">
                          <span className="text-xs lg:text-sm text-[#2C4C4B]">
                            {task.progress * 10}%
                          </span>
                          <div className="relative w-full h-1 bg-gray-300 rounded-lg">
                            <div
                              className="absolute h-full bg-[#2C4C4B] rounded-lg"
                              style={{ width: `${task.progress * 10}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 cursor-pointer">
                        <DottedIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Filter Popup */}
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
  );
};

export default DashboardPage;
