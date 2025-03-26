import React, { useState } from 'react';
import { CloseIcon, DropdownIcon } from '../common/Icons';

const Filtertemplates = ({ closePopup }: { closePopup: (value: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="w-full  max-w-xl  shadow-custom  bg-white p-4 rounded-lg overflow-y-auto max-h-[90vh]">
        <div className=" flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className=" font-semibold text-xl ">Filter</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>

        <div className=" ">
          <h2 className=" font-semibold text-base pt-3 lg:pt-[24px] pb-[10px]">Category</h2>
          <div className="flex justify-end w-full relative">
            <div
              className="w-full pt-3 lg:pt-[10px] border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[8px] py-[13px] px-[20px] flex justify-between items-center  cursor-pointer"
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
                  {options.map((option: string, index: number) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <h2 className=" font-semibold text-base pt-3 lg:pt-[24px]">Select Date</h2>
          <div className=" flex justify-between pt-[10px] gap-3">
            {['From', 'To'].map((label, index) => (
              <div
                key={index}
                className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[8px] py-[13px] px-[20px] flex items-center hover:bg-[#F4ECF7] justify-between  w-[250px]">
                <input
                  className="outline-0 w-full bg-transparent placeholder:text-sm font-bold text-[#2C4C4B] cursor-pointer"
                  placeholder={label}
                  type="date"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-end pt-3 lg:pt-[24px]">
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

export default Filtertemplates;
