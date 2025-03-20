import React, { useState } from 'react';
import { CloseIcon, DateIcon, DropdownIcon } from '../common/Icons';

const AddTask = ({ closePopup }) => {
  // 3 independent dropdowns ke states
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Selected values for each dropdown
  const [selected1, setSelected1] = useState('To Do');
  const [selected2, setSelected2] = useState('Phase 1 - Strategy');
  const [selected3, setSelected3] = useState('Yes');

  const options = ['Option 1', 'Option 2', 'Option 3']; // Common options

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl shadow-custom bg-white p-4 rounded-lg overflow-y-auto max-h-[10-vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className="font-semibold text-xl">Add Task</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>

        {/* Task Name */}
        <h2 className=" font-medium text-base pb-2 lg:pb-[10px] pt-2 lg:pt-[10px]">Task Name</h2>
        <div className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[19px] flex items-center hover:bg-[#F4ECF7]">
          <input
            className="outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999] w-full"
            placeholder="Type..."
            type="text"
          />
        </div>

        {/* Status Dropdowns */}
        <div className=" flex items-center justify-between pt-[24px]">
          <h2 className="font-medium  text-base  w-4/12 pb-[6px]">Status</h2>
          <h2 className="font-medium  text-base w-4/12  ps-2 pb-[6px]">Select Task group</h2>
          <h2 className=" font-medium text-base w-4/12  ps-2 pb-[6px]">Priority</h2>
        </div>
        <div className="flex gap-3">
          {/* Dropdown 1 */}
          <div className="relative w-4/12">
            <div
              className="w-full border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-[10px] px-[14px] flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen1(!isOpen1)}>
              <input
                className="outline-0 w-full text-sm cursor-pointer font-normal text-[#333333]"
                value={selected1}
                readOnly
              />
              <DropdownIcon />
            </div>
            {isOpen1 && (
              <div className="absolute top-[110%] left-0 w-12/12 bg-white border border-[#D6D6D6] shadow-md rounded-md z-10">
                <ul>
                  {options.map((option, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                      onClick={() => {
                        setSelected1(option);
                        setIsOpen1(false);
                      }}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}

          <div className="relative w-4/12">
            <div
              className="w-full border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-[10px] px-[14px] flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen2(!isOpen2)}>
              <input
                className="outline-0 w-full text-sm cursor-pointer font-normal text-[#333333]"
                value={selected2}
                readOnly
              />
              <DropdownIcon />
            </div>
            {isOpen2 && (
              <div className="absolute top-[110%] left-0 w-12/12 bg-white border border-[#D6D6D6] shadow-md rounded-md z-10">
                <ul>
                  {options.map((option, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                      onClick={() => {
                        setSelected2(option);
                        setIsOpen2(false);
                      }}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dropdown 3 */}

          <div className="relative w-4/12">
            <div
              className="w-full border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-[10px] px-[14px] flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen3(!isOpen3)}>
              <input
                className="outline-0 w-full text-sm cursor-pointer font-normal text-[#333333]"
                value={selected3}
                readOnly
              />
              <DropdownIcon />
            </div>
            {isOpen3 && (
              <div className="absolute top-[110%] left-0 w-12/12 bg-white border border-[#D6D6D6] shadow-md rounded-md z-10">
                <ul>
                  {options.map((option, idx) => (
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                      onClick={() => {
                        setSelected3(option);
                        setIsOpen3(false);
                      }}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <h2 className=" font-medium text-base pt-3 lg:pt-[24px] ">Task Instructions</h2>
        <textarea
          className=" w-full outline-0  pb-[7%] ps-4 pt-4 text-start text-sm cursor-pointer font-normal border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
          name=""
          id=""
          placeholder="Type here..."></textarea>

        {/* Select Date */}

        <div className="flex justify-between pt-[10px] gap-3 ">
          <div className="w-6/12">
            <h2 className=" font-medium text-base pt-3 lg:pt-[24px] pb-2 ">Start Date</h2>
            <div className="border border-solid border-[#D6D6D6]  hover:border-[#2C4C4B] rounded-[16px] py-[10px] px-[16px] flex items-center hover:bg-[#F4ECF7]">
              <input
                className="outline-0 w-full bg-transparent  placeholder:text-sm placeholder: font-normal placeholder:text-[#333333] "
                type="date"
              />
            </div>
          </div>
          <div className="w-6/12">
            <h2 className=" font-medium text-base pt-3 pb-2 lg:pt-[24px] ">Start Date</h2>
            <div className="border border-solid border-[#D6D6D6]  hover:border-[#2C4C4B] rounded-[16px] py-[10px] px-[16px] flex items-center hover:bg-[#F4ECF7] ">
              <input
                className="outline-0 w-full bg-transparent  placeholder:text-sm placeholder: font-normal placeholder:text-[#333333] "
                type="date"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end pt-3 lg:pt-[24px]">
          <button className="text-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] mt-[24px] py-[12px] px-[28px] font-bold cursor-pointer">
            Cancel
          </button>
          <button className="ml-3 text-white bg-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] mt-[24px] py-[12px] px-[28px] font-bold cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
