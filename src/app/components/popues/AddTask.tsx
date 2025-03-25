import React, { useState } from 'react';
import { CloseIcon, DropdownIcon } from '../common/Icons';

interface AddTaskProps {
  closePopup: (value: boolean) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ closePopup }) => {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);

  const [selected1, setSelected1] = useState<string>('To Do');
  const [selected2, setSelected2] = useState<string>('Phase 1 - Strategy');
  const [selected3, setSelected3] = useState<string>('Yes');

  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[#0000005b] bg-opacity-30 px-4 lg:px-0 overflow-y-auto">
      <div className="w-full max-w-2xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4">
        <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className="font-semibold text-xl ">Add Task</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-[30px]">
          <h2 className="font-medium text-sm lg:text-base text-[#213737]">Task Name</h2>
          <div className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 flex items-center hover:bg-[#F4ECF7]">
            <input
              className="outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999] w-full"
              placeholder="Type..."
              type="text"
            />
          </div>
        </div>

        <div className="lg:flex items-center justify-between  gap-3 lg:pt-[24px]">
          {[
            ['Status', selected1, setSelected1, setIsOpen1, isOpen1],
            ['Task Group', selected2, setSelected2, setIsOpen2, isOpen2],
            ['Priority', selected3, setSelected3, setIsOpen3, isOpen3],
          ].map(([label, selected, setSelected, toggle, isOpen], index) => (
            <div key={index} className="w-full lg:w-4/12 flex flex-col gap-2 relative">
              <h2 className="font-medium text-sm lg:text-base pt-3">{label as string}</h2>
              <div
                className="w-full border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 flex justify-between items-center cursor-pointer"
                onClick={() =>
                  (toggle as React.Dispatch<React.SetStateAction<boolean>>)((prev) => !prev)
                }>
                <input
                  className="outline-0 w-full text-sm cursor-pointer font-normal text-[#333333]"
                  value={selected as string}
                  readOnly
                />
                <DropdownIcon />
              </div>
              {isOpen && (
                <div className="absolute top-[110%] left-0 w-full bg-white border border-[#D6D6D6] shadow-md rounded-md z-10">
                  <ul>
                    {options.map((option, idx) => (
                      <li
                        key={idx}
                        className="p-2 hover:bg-gray-200 cursor-pointer text-sm"
                        onClick={() => {
                          (setSelected as React.Dispatch<React.SetStateAction<string>>)(option);
                          (toggle as React.Dispatch<React.SetStateAction<boolean>>)(false);
                        }}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-3">
          <h2 className="font-medium text-sm lg:text-base">Task Instructions</h2>
          <textarea
            className="w-full h-[100px] resize-none  outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
            placeholder="Type here..."></textarea>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-4 gap-3 lg:pt-[24px]">
          {['Start Date', 'End Date'].map((label, index) => (
            <div key={index} className="w-full md:w-6/12 flex flex-col gap-2">
              <h2 className="font-medium text-sm lg:text-base">{label}</h2>
              <div className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 flex items-center hover:bg-[#F4ECF7]">
                <input
                  className="outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                  type="date"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <button className="text-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer">
            Cancel
          </button>
          <button className="ml-3 text-white bg-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
