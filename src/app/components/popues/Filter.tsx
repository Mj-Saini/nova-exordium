import React, { useState } from 'react';
import { CloseIcon, DateIcon, DropdownIcon } from '../common/Icons';

const Filter = ({ closePopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3']; // Dropdown options

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div>
      <div className="w-[535px] shadow-custom  bg-white p-4 rounded-lg">
        <div className=" flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className=" font-semibold text-xl ">Filter</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>
        <h2 className=" font-semibold text-base pb-[10px] pt-[10px]">Status</h2>
        <div className=" ">
          <div className="flex gap-2">
            <div className=" border-2 border-solid w-4/12 border-[#9A9999] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[19px] flex items-center  hover:bg-[#F4ECF7] gap-4 justify-center ">
              <input
                className=" outline-0 text-center placeholder:text-sm    placeholder:font-bold placeholder:text-[#2C4C4B]"
                placeholder="Active"
                type="text"
              />
            </div>

            <div className=" border-2 border-solid w-4/12 hover:bg-[#F4ECF7] border-[#9A9999] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[19px] flex items-center gap-4 justify-center ">
              <input
                className=" outline-0 text-center placeholder:text-sm   placeholder:font-bold placeholder:text-[#2C4C4B]"
                placeholder="Completed"
                type="text"
              />
            </div>
            <div className=" border-2 border-solid w-4/12 border-[#9A9999] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[19px] flex items-center gap-4 justify-center ">
              <input
                className=" outline-0 text-center placeholder:text-sm   placeholder:font-bold placeholder:text-[#2C4C4B]"
                placeholder="Archived"
                type="text"
              />
            </div>
          </div>
          <h2 className=" font-semibold text-base pt-[24px] pb-[10px]">Assigned to</h2>
          <div className="flex justify-end w-full relative">
            {/* Input Field & Icon */}
            <div
              className="w-full pt-[10px] border-2 border-solid border-[#9A9999] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[20px] flex justify-between items-center  cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
              <input
                className="outline-0 w-full cursor-pointer placeholder:text-sm   placeholder:font-bold placeholder:text-[#2C4C4B]"
                placeholder="Select"
                type="text"
                value={selectedOption}
                readOnly
              />
              <div className="flex items-center">
                <DropdownIcon />
              </div>
            </div>

            {isOpen && (
              <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-300 z-10">
                <ul className="py-2">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(option)} // Set input value on click
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <h2 className=" font-semibold text-base pt-[24px]">Select Date</h2>
          <div className=" flex justify-between pt-[10px]">
            <div className="border-2 border-solid border-[#9A9999] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[20px] flex items-center hover:bg-[#F4ECF7] justify-between  w-[250px]">
              <input
                className="outline-0 w-full bg-transparent placeholder:text-sm   placeholder:font-bold placeholder:text-[#2C4C4B]"
                placeholder="From"
                type="date"
              />
            </div>
            <div className="border-2 border-solid border-[#9A9999] hover:border-[#2C4C4B] rounded-[16px] py-[13px] px-[20px] flex items-center hover:bg-[#F4ECF7]  justify-between  w-[250px]">
              <input
                className="outline-0 w-full bg-transparent placeholder:text-sm font-bold text-[#2C4C4B] cursor-pointer"
                placeholder="To"
                type="date"
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-end pt-[24px]">
          <button className="text-[#2C4C4B] text-sm  border border-[#EAEAEA] rounded-[16px] mt-[24px] py-[15px] px-[30px] font-bold cursor-pointer">
            Clear
          </button>
          <button className=" ms-[10px] text-white bg-[#2C4C4B] text-sm  border border-[#EAEAEA] rounded-[16px] mt-[24px] py-[15px] px-[30px] font-bold cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
