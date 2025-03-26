'use client';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import AdminHeader from '../AdminHeader';

interface Survey {
  children: React.ReactNode;
  heading: string;
  sub_heading: string;
}

const Layout: React.FC<Survey> = ({ children, heading, sub_heading }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-wrap h-full">
        {/* Sidebar */}
        <div
          className={`w-[200px] h-screen  lg:w-[296px] max-md:fixed  top-0 duration-300 ${
            showSideBar ? 'left-0' : '-left-[-150%]'
          }`}>
          <div className="h-full z-10 relative pt-11 px-3 lg:px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[calc(100%-200px)]  h-[calc(100vh-20px)]  lg:w-[calc(100%-296px)] px-2.5 lg:px-5">
          <div className="pb-5 h-full">
            <div
              className={`top-0 sticky z-10 px-6 transition-all duration-300 bg-[#F0F0F0] 
              }`}>
              <AdminHeader heading={heading} sub_heading={sub_heading} />
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
