'use client';
import React from 'react';
import Layout from '../components/common/Layout';

import Link from 'next/link';
import Image from 'next/image';
import CommonBtn from '../components/common/CommonBtn';
import { notification_new_message, notification_urgent_task } from '../components/common/Helper';
import { Newresponse_icon, Schedule_icon, Tickmark_box_icon } from '../components/common/Icons';

const Page = () => {
  return (
    <Layout heading="Notifications" sub_heading="Notifications">
      <div className="flex flex-wrap pb-6  bg-[#F0F0F0]    ">
        <div className="w-full xl:w-[62.32%] xl:pe-3">
          <div className="flex ">
            <div className="w-[40%] pe-3">
              <div className="flex flex-col h-full items-center justify-between bg_notification_project p-5 ">
                <div className="text-center">
                  <div className="rounded-xl  m-auto  flex items-center justify-center w-[50px] 2xl:w-[64px] h-[50px] 2xl:h-[64px] bg-[#F9F9F9]">
                    <Tickmark_box_icon />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F9F9F9] mt-3 2xl:mt-4 mb-2 2xl:mb-3">
                    10
                  </h3>
                  <p className="font-bold text-[14px] text-[#F9F9F9]">Projects finished Today</p>
                </div>
                <div>
                  <div
                    className="my-4 !w-[70%] mx-auto"
                    style={{
                      border: '1px solid',
                      borderImageSource:
                        'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
                      borderImageSlice: 1,
                    }}></div>
                  <CommonBtn
                    btnName="View All"
                    btnStyling="bg-white text-[#213737] border-1 border-transparent !px-5 !py-2 leading-[100%] text-[12px] xl:text[14px]"
                    arrowIcon="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="w-[30%] px-3">
              <div className="flex h-full flex-col items-center justify-between shadow-[0px_3.5px_5.5px_0px_#00000005] bg-[#FFFFFF] rounded-[15px]  p-5">
                <div className="text-center">
                  <div className="rounded-xl m-auto   flex items-center justify-center w-[50px] 2xl:w-[64px] h-[50px] 2xl:h-[64px] bg-[#2C4C4B]">
                    <Schedule_icon />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#213737] mt-3 2xl:mt-4 mb-2 2xl:mb-3">
                    3
                  </h3>
                  <p className="font-bold text-[14px] text-center text-[#CB2F00]">
                    Tasks Due Today
                  </p>
                </div>
                <div>
                  <div
                    className="my-4 !w-[70%] mx-auto"
                    style={{
                      border: '1px solid',
                      borderImageSource:
                        'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
                      borderImageSlice: 1,
                    }}></div>
                  <CommonBtn
                    btnName="View All"
                    btnStyling="bg-white text-[#213737] border-1 border-[#2C4C4B] !px-5 !py-2 leading-[100%] text-[12px] xl:text[14px]"
                    arrowIcon="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="w-[30%] ps-3">
              <div className="flex h-full flex-col items-center shadow-[0px_3.5px_5.5px_0px_#00000005] bg-[#FFFFFF] rounded-[15px]  p-5">
                <div className="rounded-xl    flex items-center justify-center w-[50px] 2xl:w-[64px] h-[50px] 2xl:h-[64px] bg-[#2C4C4B]">
                  <Newresponse_icon />
                </div>
                <h3 className="text-[20px] font-bold text-[#213737] mt-3 2xl:mt-4 mb-2 2xl:mb-3">
                  3
                </h3>
                <p className="font-bold text-[14px] text-[#213737] text-center">
                  New Survey responses
                </p>
                <div
                  className="my-4 !w-[70%]"
                  style={{
                    border: '1px solid',
                    borderImageSource:
                      'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
                    borderImageSlice: 1,
                  }}></div>
                <CommonBtn
                  btnName="View All"
                  btnStyling="bg-white text-[#213737] border-1 border-[#2C4C4B] !px-5 !py-2 leading-[100%] text-[12px] xl:text[14px]"
                  arrowIcon="hidden"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-[15px] p-6 shadow-[0px_3.5px_5.5px_0px_#00000005]">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#213737] ">Urgent Tasks</p>
                <div className="flex items-center gap-[10px] mt-[6px] ">
                  {/* <span> <Oops_icon /></span> */}
                  <p className="text-[#CB2F00] font-bold text-[14px]">
                    {' '}
                    2 Task is due Today ; 1 - Tomorrow{' '}
                  </p>
                </div>
              </div>
              <div>
                <CommonBtn
                  btnName="Mark as read"
                  btnStyling="text-white font-bold text-[14px] bg-[#2C4C4B] !px-5 !py-2 "
                  arrowIcon="hidden"
                />
              </div>
            </div>
            <div className="mt-7">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap spacing">
                    {['TASK NAME', 'PROGRESS', 'DUE DATES', 'ACTION'].map((head, index) => (
                      <th key={index} className="px-5 py-4 text-[#9A9999]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {notification_urgent_task.slice(0, 5).map((task, id) => (
                    <tr key={id} className="border-b border-gray-200 ">
                      <td className="py-4 px-5 font-bold text-[14px] text-[#213737]">
                        {task.name}
                      </td>
                      <td className="py-4 px-5 font-bold text-[14px] text-[#213737] ">
                        <span className=" text-xs lg:text-sm text-gray-700">
                          {task.progress * 10}%
                        </span>
                        <div className="w-full h-1 bg-gray-300 rounded-lg">
                          <div
                            style={{ width: `${task.progress * 10}%` }}
                            className="h-full bg-[#2C4C4B] rounded-lg"></div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-[14px] font-[400]">
                        <span style={{ color: `${task.color}` }}>{task.due}</span>
                      </td>
                      <td className="py-4 px-5 text-[14px] text-[#9A9999] font-bold">
                        <Link href={''}>View</Link>
                        <Link className="ms-6" href={''}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-[15px] p-6 shadow-[0px_3.5px_5.5px_0px_#00000005]">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-[#213737] ">Urgent Projects</p>
                <div className="flex items-center gap-[10px] mt-[6px] ">
                  {/* <span> <Oops_icon /></span> */}
                  <p className="text-[#CB2F00] font-bold text-[14px] "> 2 Project is due Today </p>
                </div>
              </div>
              <div>
                <CommonBtn
                  btnName="Mark as read"
                  btnStyling="text-white font-bold text-[14px] bg-[#2C4C4B] !px-5 !py-3 "
                  arrowIcon="hidden"
                />
              </div>
            </div>
            <div className="mt-7">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap spacing">
                    {['TASK NAME', 'PROGRESS', 'DUE DATES', 'ACTION'].map((head, index) => (
                      <th key={index} className="px-5 py-4 text-[#9A9999]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {notification_urgent_task.slice(5).map((task, id) => (
                    <tr key={id} className="border-b border-gray-200 ">
                      <td className="py-4 px-5 font-bold text-[14px] text-[#213737]">
                        {task.name}
                      </td>
                      <td className="py-4 px-5 font-bold text-[14px] text-[#213737] ">
                        <span className=" text-xs lg:text-sm text-gray-700">
                          {task.progress * 10}%
                        </span>
                        <div className="w-full h-1 bg-gray-300 rounded-lg">
                          <div
                            style={{ width: `${task.progress * 10}%` }}
                            className="h-full bg-[#2C4C4B] rounded-lg"></div>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-[14px] font-[400]">
                        <span style={{ color: `${task.color}` }}>{task.due}</span>
                      </td>
                      <td className="py-4 px-5 text-[14px] text-[#9A9999] font-bold">
                        <Link href={''}>View</Link>
                        <Link className="ms-6" href={''}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[37.68%]  xl:ps-3 mt-6 xl:mt-0">
          <div className="p-6 bg-white rounded-[15px] shadow-[0_3.5px_5.5px_0_#00000005]">
            <div className="flex justify-between items-center mb-6">
              <p className="font-bold text-[18px] text-[#213737]">New Messages</p>
              <CommonBtn
                btnName="View All"
                btnStyling="font-bold text-[12px] xl:text[14px] text-[#2C4C4B] border-1 border-[#2C4C4B] rounded-4 !py-2 !px-5 "
                arrowIcon="hidden"
              />
            </div>
            {notification_new_message.map((task, id) => (
              <div
                key={id}
                className="px-3 2xl:px-5 py-3 flex items-center  border-b-[1px] border-[#EAEBEB]">
                <Image
                  src={task.image}
                  style={{ width: '40px', height: '40px' }}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                  alt="img"
                />
                <div className="ms-4">
                  <div className="flex  justify-between">
                    <h3 className="text-[14px] font-bold text-[#213737]">{task.name}</h3>
                    <h3 className="text-[12px] font-bold text-[#9A9999] ">{task.time}</h3>
                  </div>
                  <p className="one-line-ellipsis text-[#9A9999] font-[400] text-[14px]">
                    {task.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6  bg-white mt-6 rounded-[15px] shadow-[0_3.5px_5.5px_0_#00000005]">
            <div className="flex justify-between items-center mb-6">
              <p className="font-bold text-[18px] text-[#213737]">New survey entries</p>
              <CommonBtn
                btnName="View All"
                btnStyling="font-bold text-[12px] xl:text[14px] text-[#2C4C4B] border-1 border-[#2C4C4B] rounded-4 !py-2 !px-5"
                arrowIcon="hidden"
              />
            </div>
            {notification_new_message.map((task, id) => (
              <div
                key={id}
                className="px-3 2xl:px-5 py-3 flex items-center  border-b-[1px] border-[#EAEBEB]">
                <Image
                  src={task.image}
                  style={{ width: '40px', height: '40px' }}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                  alt="img"
                />
                <div className="ms-4">
                  <div className="flex  justify-between">
                    <h3 className="text-[14px] font-bold text-[#213737]">{task.name}</h3>
                    <h3 className="text-[12px] font-bold text-[#9A9999] ">{task.time}</h3>
                  </div>
                  <p className="one-line-ellipsis text-[#9A9999] font-[400] text-[14px]">
                    {task.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
