import React, { useState } from 'react';
import { CloseIcon, DropdownIcon } from '../common/Icons';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3']; // Dropdown options

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="w-[535px] shadow-custom bg-white p-4 rounded-lg">
        <div className=" flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className=" font-semibold text-xl ">Filter</h3>
          <div className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <h2 className=" font-semibold text-base pb-[10px]">Status</h2>
        <div>
          <div className="flex gap-4">
            <div className=" border-2 border-solid border-[#9A9999] rounded-[16px] py-[13px] px-[20px] flex items-center gap-4 justify-center text-sm   font-bold text-[#2C4C4B]">
              <input className=" outline-0 text-center" placeholder="Active" type="text" />
            </div>
            <div className=" border-2 border-solid border-[#9A9999] rounded-[16px] py-[13px] px-[20px] flex items-center gap-4 justify-center text-sm  font-bold text-[#2C4C4B]">
              <input className=" outline-0 text-center" placeholder="Active" type="text" />
            </div>
            <div className=" border-2 border-solid border-[#9A9999] rounded-[16px] py-[13px] px-[20px] flex items-center gap-4 justify-center text-sm  font-bold text-[#2C4C4B]">
              <input className=" outline-0 text-center" placeholder="Active" type="text" />
            </div>
          </div>
          <h2 className=" font-semibold text-base pt-[24px]">Assigned to</h2>
          <div className="flex justify-end w-full relative">
            {/* Input Field & Icon */}
            <div
              className="w-full pt-[10px] border-2 border-solid border-[#9A9999] rounded-[16px] py-[13px] px-[20px] flex justify-between items-center text-sm font-bold text-[#2C4C4B] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
              <input
                className="outline-0 w-full cursor-pointer"
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
          <div className="border-2 border-solid border-[#9A9999] rounded-[16px] py-[13px] px-[20px] flex items-center gap-4  text-sm font-bold text-[#2C4C4B]">
            <input className="outline-0 cursor-pointer" type="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
