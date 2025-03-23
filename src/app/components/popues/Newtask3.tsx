import React, { useState } from 'react';
import { CloseIcon, CreateIcon, DeletIcon, EditIcon, PrioritiesIcon2 } from '../common/Icons';
import Newtask2 from './Newtask2';

interface NewTaskGroupProps {
  closePopup: (value: boolean) => void;
}

const Newtask3: React.FC<NewTaskGroupProps> = ({ closePopup }) => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [isOpensave, setIsOpensave] = useState(false);

  // Dummy task data
  const tasks = [
    {
      id: 1,
      name: 'Develop the app core features',
      status: 'To Do',
      color: '#EBA055',
      due: '2025-03-30',
      img: <PrioritiesIcon2 />,
    },
    {
      id: 2,
      name: 'Develop interactive prototypes to test',
      status: 'To Do',
      color: '#EBA055',
      due: '2025-03-25',
      img: <PrioritiesIcon2 />,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0  px-5 lg:px-0 overflow-y-auto">
        <div className="w-full max-w-5xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4 px-[40px]">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
            <h3 className="font-semibold text-xl">New task group</h3>
            <div className="cursor-pointer" onClick={() => closePopup(false)}>
              <CloseIcon />
            </div>
          </div>

          {/* Task Group Name */}
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

          {/* Description */}
          <div className="flex flex-col gap-2 pt-3 lg:pt-[24px]">
            <h2 className="font-medium text-sm lg:text-base">Description</h2>
            <textarea
              className="w-full h-25 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
              placeholder="Type here..."></textarea>
          </div>

          {/* Date Inputs */}
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

          {/* Assigned Tasks */}
          <h2 className="font-bold text-sm md:text-base lg:text-lg text-[#2C4C4B] pt-5 lg:pt-[60px]">
            Assigned Tasks
          </h2>
          <h2 className="font-medium text-sm text-[#9A9999] pt-[2px]">{tasks.length} Tasks</h2>

          {/* Tasks Table */}
          <div className="overflow-x-auto md:max-w-full overflow-visible">
            <table className="w-full mt-7 border-collapse ">
              <thead>
                <tr className="border-b border-gray-300 text-left font-bold text-xs lg:text-sm whitespace-nowrap">
                  {['#', 'TASK NAME', 'STATUS', 'PRIORITIES', 'DUE DATE', ''].map((head, index) => (
                    <th key={index} className="px-4 py-3 text-[#9A9999]">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-200">
                    <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.id}</td>
                    <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.name}</td>

                    <td className="px-4 py-[16px]">
                      <span
                        className="text-white font-bold text-xs py-1 px-4 rounded-lg"
                        style={{ backgroundColor: task.color }}>
                        {task.status}
                      </span>
                    </td>
                    <td>{task.img}</td>
                    <td className="px-4 py-[16px] font-bold text-xs lg:text-sm">{task.due}</td>
                    <td className="px-4 py-[16px] cursor-pointer flex items-center gap-2">
                      <EditIcon />
                      <DeletIcon />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Add New Task Button */}
          <button
            className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm mt-[24px]"
            onClick={() => setShowNewTask(true)}>
            <CreateIcon />
            Add New Task
          </button>

          {/* New Task Popup */}
          {showNewTask && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#0000005a] bg-opacity-50 z-50">
              <Newtask2 closePopup={setShowNewTask} />
            </div>
          )}

          {/* Save & Cancel Buttons */}
          <div className="flex justify-end pt-4">
            <button className="text-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer">
              Cancel
            </button>
            <button
              className="ml-3 text-white bg-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-[16px] py-3 px-6 font-bold cursor-pointer"
              onClick={() => setIsOpensave(true)}>
              Save
            </button>
          </div>

          {/* Save Confirmation Popup */}
          {isOpensave && (
            <div className="fixed inset-0 bg-[#0000006c] bg-opacity-50 flex items-center justify-center">
              <div className="bg-white shadow-lg px-10 py-8 rounded-lg font-bold max-w-[403px] h-[287px]">
                <h3 className="text-[#213737] text-lg font-bold">
                  App Development Workflow has been successfully saved!
                </h3>
                <p className="font-normal text-sm text-[#333333] pt-6">
                  You can edit, remove, or clone it anytime to fit your needs.
                </p>
                <div className="flex justify-end pt-16">
                  <button className="text-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-lg py-3 px-8 font-bold cursor-pointer">
                    View Project
                  </button>
                  <button
                    className="ml-3 text-white bg-[#2C4C4B] text-sm border border-[#EAEAEA] rounded-lg py-3 px-8 font-bold cursor-pointer"
                    onClick={() => setIsOpensave(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Newtask3;
