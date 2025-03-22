import React, { useState } from 'react';
import { CloseIcon, CreateIcon, DropdownIcon } from '../common/Icons';
import Newtask3 from './Newtask3';

interface NewTask2Props {
  closePopup: (value: boolean) => void;
}

const NewTask2: React.FC<NewTask2Props> = ({ closePopup }) => {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const [selected1, setSelected1] = useState<string>('To Do');
  const [selected2, setSelected2] = useState<string>('Yes');

  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  const [showNewTask, setShowNewTask] = useState(false);

  return (
    // <div className="flex justify-center items-center fixed inset-0 bg-[#00000031] bg-opacity-30 px-4 lg:px-0 overflow-y-auto">
    <div className="w-full max-w-2xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-2">
        <h3 className="font-semibold text-xl">New Task Group</h3>
        <div className="cursor-pointer" onClick={() => closePopup(false)}>
          <CloseIcon />
        </div>
      </div>

      {/* Task Name */}
      <div className="flex flex-col gap-2 pt-5">
        <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
        <input
          className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999] hover:bg-[#F4ECF7]"
          placeholder="Type..."
          type="text"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 pt-3">
        <h2 className="font-medium text-sm lg:text-base">Description</h2>
        <textarea
          className="w-full h-20 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
          placeholder="Type here..."
        />
      </div>

      {/* Start Date & End Date */}
      <div className="flex flex-col md:flex-row justify-between pt-4 gap-3">
        {['Start Date', 'End Date'].map((label, index) => (
          <div key={index} className="w-full md:w-6/12 flex flex-col gap-2">
            <h2 className="font-medium text-sm lg:text-base">{label}</h2>
            <input
              className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
              type="date"
            />
          </div>
        ))}
      </div>

      {/* Assigned Tasks */}
      <h2 className="font-bold text-sm lg:text-lg text-[#2C4C4B] pt-5">Assigned Tasks</h2>
      <h2 className="font-medium text-sm text-[#9A9999]">0 Tasks</h2>

      <div className="flex flex-col gap-2 pt-5">
        <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
        <input
          className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999] hover:bg-[#F4ECF7]"
          placeholder="Type..."
          type="text"
        />
      </div>

      {/* Task Selection Dropdowns */}
      <div className="lg:flex items-center justify-between gap-3 pt-4">
        {[
          ['Status', selected1, setSelected1, setIsOpen1, isOpen1],
          ['Priority', selected2, setSelected2, setIsOpen2, isOpen2],
        ].map(([label, selected, setSelected, toggle, isOpen], index) => (
          <div key={index} className="w-full lg:w-6/12 flex flex-col gap-2 relative">
            <h2 className="font-medium text-sm lg:text-base">{label as string}</h2>
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

      {/* Task Instructions */}
      <div className="flex flex-col gap-2 pt-3">
        <h2 className="font-medium text-sm lg:text-base">Task Instructions</h2>
        <textarea
          className="w-full h-25 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
          placeholder="Type here..."
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between pt-4 gap-3">
        {['Start Date', 'End Date'].map((label, index) => (
          <div key={index} className="w-full md:w-6/12 flex flex-col gap-2">
            <h2 className="font-medium text-sm lg:text-base">{label}</h2>
            <input
              className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
              type="date"
            />
          </div>
        ))}
      </div>
      {/* <button
        className="bg-[#477D7C] text-white rounded-[16px] py-2 px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm mt-4"
        onClick={() => setShowNewTask(true)}>
        <CreateIcon />
        Add Task
      </button> */}

      {/* {showNewTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000017] bg-opacity-50 z-50">
          <Newtask3 closePopup={setShowNewTask} />
        </div>
      )} */}
      {/* Buttons */}
      {/* <div className="flex justify-end pt-4">
        <button className="text-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer">
          Cancel
        </button>
        <button className="ml-3 text-white bg-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer">
          Save
        </button>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewTask2;
