import React, { useState } from 'react';
import { CloseIcon, CreateIcon } from '../common/Icons';
import Newtask2 from './Newtask2';

interface NewTaskGroupProps {
  closePopup: (value: boolean) => void;
}

const Newtaskgroup: React.FC<NewTaskGroupProps> = ({ closePopup }) => {
  const [showNewTask, setShowNewTask] = useState(false);

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-[#0000005b] bg-opacity-30 px-4 lg:px-0 overflow-y-auto">
      <div className="w-full max-w-2xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4">
        <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className="font-semibold text-xl">New task group</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>
        <h2 className="font-bold text-lg text-[#213737] pt-[30px]">New task group</h2>
        <div className="flex flex-col gap-2 pt-[30px]">
          <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
          <div className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 flex items-center hover:bg-[#F4ECF7]">
            <input
              className="outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999] w-full"
              placeholder="Type..."
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-3 lg:pt-[24px]">
          <h2 className="font-medium text-sm lg:text-base">Description</h2>
          <textarea
            className="w-full h-25 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333] align-text-top"
            placeholder="Type here..."></textarea>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-4 gap-3 lg:pt-[24px]">
          {[['Start Date'], ['End Date']].map(([label], index) => (
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

        <h2 className="font-bold text-sm md:text-base lg:text-lg text-[#2C4C4B] pt-5 lg:pt-[60px]">
          Assigned Tasks
        </h2>
        <h2 className="font-medium text-sm text-[#9A9999] pt-[2px]">0 Tasks</h2>
        <button
          className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm mt-[24px]"
          onClick={() => setShowNewTask(true)}>
          <CreateIcon />
          Add Task
        </button>

        {showNewTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
            <Newtask2 closePopup={setShowNewTask} />
          </div>
        )}

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

export default Newtaskgroup;
