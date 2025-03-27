import React, { useState } from 'react';
import {
  CloseIcon,
  CreateIcon,
  DeletIcon,
  DropdownIcon,
  EditIcon,
  PrioritiesIcon2,
} from '../common/Icons';
import Workflow from './Workflow';
import Cancel from './Cancel';

interface NewTaskGroupProps {
  closePopup: (value: boolean) => void;
}

interface Task {
  id: number;
  name: string;
  status: string;
  color: string;
  due: string;
  img: any;
}

const Template: React.FC<NewTaskGroupProps> = ({ closePopup }) => {
  const [taskGroups, setTaskGroups] = useState<number[]>([1]); // Initially one form
  const [showPopup, setShowPopup] = useState<boolean>(false); // For popup visibility
  const [showPopup2, setShowPopup2] = useState<boolean>(false); //
  const [selected, setSelected] = useState('');
  const [isOpen2, setIsOpen2] = useState(false);
  const options = ['Research', 'Development', 'Marketing'];

  const addNewTask = () => {
    setTaskGroups((prev) => [...prev, prev.length + 1]); // Add new form
  };

  const handleSaveClick = () => {
    setShowPopup(true); // Open the popup
  };
  const handleSaveClick2 = () => {
    setShowPopup2(true); // Open the popup
  };

  const tasks: Task[] = [
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
    <div className="flex justify-center items-center fixed inset-0 bg-[#0000005b] bg-opacity-30 px-4 lg:px-0 overflow-y-auto">
      <div className="w-full max-w-2xl shadow-custom px-4 bg-white rounded-lg overflow-y-auto max-h-[100vh]">
        {/* Header */}
        <div className="flex  sticky top-0 bg-white z-50  justify-between items-center border-b border-solid border-[#EAEBEB] pb-4 pt-4">
          <h3 className="font-semibold text-xl">Create New Template</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>

        {/* Task Groups Form */}
        <div>
          {taskGroups.map((_, index) => (
            <div
              key={index}
              className="mt-6 pb-4 border-[1px] border-dashed border-[#477D7C] rounded-[16px] px-[26px] py-[26px">
              <h2 className="font-bold text-lg text-[#213737] pt-3">New task group {index + 1}</h2>

              <div className="flex flex-col gap-2 pt-3">
                <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
                <input
                  className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999]"
                  placeholder="Type..."
                  type="text"
                />
              </div>

              {index === 0 && (
                <div className="flex flex-col md:flex-row justify-between pt-4 gap-3 ">
                  <div className="relative w-full">
                    <h2 className="font-medium text-base pb-2">Select Category</h2>
                    <div
                      className="flex items-center border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] pe-3 cursor-pointer"
                      onClick={() => setIsOpen2(!isOpen2)}>
                      <input
                        className="py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                        value={selected}
                        placeholder="Research"
                        readOnly
                      />
                      <span className="px-2">
                        <DropdownIcon />
                      </span>
                    </div>

                    {isOpen2 && (
                      <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
                        {options.map((option, i) => (
                          <li
                            key={i}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                              setSelected(option);
                              setIsOpen2(false);
                            }}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {['Start Date', 'End Date'].map((label, idx) => (
                    <div key={idx} className="w-full flex flex-col gap-2">
                      <h2 className="font-medium text-sm lg:text-base">{label}</h2>
                      <input
                        className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                        type="date"
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-2 pt-3">
                <h2 className="font-medium text-sm lg:text-base">Task Instructions</h2>
                <textarea
                  className="w-full h-[100px] resize-none  outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
                  placeholder="Type here..."></textarea>
              </div>
            </div>
          ))}
        </div>

        {/* Task Table */}
        {taskGroups.length === 4 && (
          <div className="overflow-x-auto md:max-w-full overflow-visible border-[1px] border-dashed mt-5 border-[#477D7C] rounded-[16px] px-[26px] py-[26px">
            <div className=" flex justify-between pt-[24px]">
              <h2 className=" font-bold text-lg text-[#213737]">Phase 1 - Develop App</h2>
              <div className=" flex items-center">
                <h2 className=" font-medium text-sm text-[#333333]">2/3/2025</h2>
                <EditIcon />
                <DeletIcon />
              </div>
            </div>
            <p className=" font-normal text-sm text-[#333333] pt-[6px]">
              Lorem ipsum dolor sit amet consectetur. Euismod proin non mauris sit sed egestas. Cum
              egestas non leo nibh adipiscing. Luctus et lacus eget maecenas condimentum
              scelerisque.
            </p>
            <h2 className=" font-bold text-lg text-[#213737] pt-[60px]">Assigned Tasks</h2>
            <h2 className=" font-medium text-sm text-[#9A9999]">0 Tasks</h2>
            <table className="w-full mt-7 border-collapse">
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
        )}

        {/* Buttons */}
        {taskGroups.length === 2 && (
          <div className="flex  justify-between pt-4 pb-[40px]">
            <div>
              <button
                className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
                onClick={addNewTask}>
                <CreateIcon />
                Add Task
              </button>
            </div>
            <div className=" flex">
              <button
                className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
                onClick={addNewTask}>
                Remove
              </button>
              <button
                className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px ] px-5 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
                onClick={addNewTask}>
                Save Task group
              </button>
            </div>
          </div>
        )}
        {(taskGroups.length === 3 || taskGroups.length === 5) && (
          <div>
            <h2 className=" font-bold text-lg text-[#213737] pt-[60px]">Assigned Tasks</h2>
            <h2 className=" font-medium text-sm text-[#9A9999]">0 Tasks</h2>
            <div className="flex flex-col gap-2 pt-3">
              <h2 className="font-medium text-sm lg:text-base text-[#213737]">Task Name</h2>
              <input
                className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999]"
                placeholder="Type..."
                type="text"
              />
            </div>
            <div className=" flex justify-between gap-4 pt-[24px]">
              <div className=" lg:w-6/12">
                <div className="relative w-full">
                  <h2 className="font-medium text-base pb-2">Status</h2>
                  <div
                    className="flex items-center border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] pe-3 cursor-pointer"
                    onClick={() => setIsOpen2(!isOpen2)}>
                    <input
                      className="py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                      value={selected}
                      placeholder="Research"
                      readOnly
                    />
                    <span className="px-2">
                      <DropdownIcon />
                    </span>
                  </div>

                  {isOpen2 && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
                      {options.map((option, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            setSelected(option);
                            setIsOpen2(false);
                          }}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className=" lg:w-6/12">
                <div className="relative w-full">
                  <h2 className="font-medium text-base pb-2">Priority</h2>
                  <div
                    className="flex items-center border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] pe-3 cursor-pointer"
                    onClick={() => setIsOpen2(!isOpen2)}>
                    <input
                      className="py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                      value={selected}
                      placeholder="Research"
                      readOnly
                    />
                    <span className="px-2">
                      <DropdownIcon />
                    </span>
                  </div>

                  {isOpen2 && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
                      {options.map((option, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            setSelected(option);
                            setIsOpen2(false);
                          }}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <h2 className="font-medium text-sm lg:text-base">Task Instructions</h2>
              <textarea
                className="w-full resize-none h-[100px] outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
                placeholder="Type here..."></textarea>
            </div>
            <div className=" flex gap-4 pt-[24px]">
              {['Start Date', 'End Date'].map((label, idx) => (
                <div key={idx} className="w-full flex flex-col gap-2">
                  <h2 className="font-medium text-sm lg:text-base">{label}</h2>
                  <input
                    className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                    type="date"
                  />
                </div>
              ))}
            </div>
            <div className="flex  justify-between pt-4 pb-[40px]">
              <div>
                <button
                  className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
                  onClick={addNewTask}>
                  <CreateIcon />
                  Add Task
                </button>
              </div>
              <div className=" flex">
                <button
                  className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
                  onClick={addNewTask}>
                  Remove
                </button>
                <button
                  className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px ] px-5 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
                  onClick={addNewTask}>
                  Save Task group
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="gap-3 mt-4">
          <div className=" flex gap-2">
            <button
              className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
              onClick={addNewTask}>
              <CreateIcon />
              Add Task
            </button>
            <button
              className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
              onClick={addNewTask}>
              <CreateIcon />
              New Task Group
            </button>
          </div>
        </div>

        {/* Final Buttons */}
        <div className="flex justify-end pt-4 pb-5">
          <button
            className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
            onClick={handleSaveClick2}>
            Cancel
          </button>
          <button
            className="bg-[#2C4C4B] text-white rounded-[16px] py-[12px] px-8 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
            onClick={handleSaveClick}>
            Save
          </button>
        </div>

        {/* Change Status Popup */}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black/50 z-50">
            <div>
              <Workflow onClose={() => setShowPopup(false)} />
            </div>
          </div>
        )}

        {showPopup2 && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black/50 z-50">
            <div>
              <Cancel onClose={() => setShowPopup2(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
