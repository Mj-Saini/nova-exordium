"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={` w-full md:w-3/12 xl:w-2/12 max-md:fixed left-0 duration-300  ${
            showSideBar ? "top-0" : "-top-full"
          }`}
        >
          <div className="h-full z-10 relative pt-11 px-6">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className="w-full md:w-9/12 xl:w-10/12">
          {/* <div className="top-0 sticky bg-white z-10">
            <AdminHeader
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </div> */}
          {/* <div className="overflow-y-auto"> */}
          {/* <DashboardContent /> */}
          helo
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
