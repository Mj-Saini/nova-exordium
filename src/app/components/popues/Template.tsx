// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';
// import {
//   CloseIcon,
//   CreateIcon,
//   DeleteIcon,
//   DropdownIcon,
//   EditIcon,
//   PrioritiesIcon2,
// } from '../common/Icons';
// import Workflow from './Workflow';
// import Cancel from './Cancel';

// interface NewTaskGroupProps {
//   closePopup: (value: boolean) => void;
// }

// interface Task {
//   id: number;
//   name: string;
//   status: string;
//   color: string;
//   due: string;
//   img: any;
// }

// const Template: React.FC<NewTaskGroupProps> = ({ closePopup }) => {
//   const [taskGroups, setTaskGroups] = useState<number[]>([Date.now()]); // Initially one form
//   const [showPopup, setShowPopup] = useState<boolean>(false); // For popup visibility
//   const [showPopup2, setShowPopup2] = useState<boolean>(false); // For popup visibility
//   const [selected, setSelected] = useState<string>('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected2, setSelected2] = useState('');

//   const options = ['Option 1', 'Option 2', 'Option 3']; // Fix for undefined 'selected'

//   const addNewTask = () => {
//     setTaskGroups((prev) => [...prev, Date.now()]); // Ensure unique IDs
//   };

//   const handleSaveClick = () => {
//     setShowPopup(true); // Open the popup
//   };
//   const handleSaveClick2 = () => {
//     setShowPopup2(true); // Open the popup
//   };

//   const tasks: Task[] = [
//     {
//       id: 1,
//       name: 'Develop the app core features',
//       status: 'To Do',
//       color: '#EBA055',
//       due: '2025-03-30',
//       img: <PrioritiesIcon2 />,
//     },
//     {
//       id: 2,
//       name: 'Develop interactive prototypes to test',
//       status: 'To Do',
//       color: '#EBA055',
//       due: '2025-03-25',
//       img: <PrioritiesIcon2 />,
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center fixed inset-0 bg-[#0000005b] bg-opacity-30 px-4 lg:px-0 overflow-y-auto">
//       <div className="w-full max-w-4xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
//           <h3 className="font-semibold text-xl">Create New Template</h3>
//           <div className="cursor-pointer" onClick={() => closePopup(false)}>
//             <CloseIcon />
//           </div>
//         </div>

//         {/* Task Groups Form */}
//         {taskGroups.map((_, index) => (
//           <div key={id} className="mt-6 pb-4">
//             <h2 className="font-bold text-lg text-[#213737] pt-3">New task group {index + 1}</h2>

//             <div className="flex flex-col gap-2 pt-3">
//               <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
//               <input
//                 className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999]"
//                 placeholder="Type..."
//                 type="text"
//               />
//             </div>

//             <div className="flex flex-col gap-2 pt-3">
//               <h2 className="font-medium text-sm lg:text-base">Description</h2>
//               <textarea
//                 className="w-full h-25 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
//                 placeholder="Type here..."></textarea>
//             </div>

//             {/* Date Fields */}
//             <div className="flex flex-col md:flex-row justify-between pt-4 gap-3">
//               <div className="w-full md:w-6/12 flex flex-col gap-2">
//                 <h2 className="font-medium text-sm lg:text-base">Select Category</h2>
//                 <div className="relative w-full">
//                   <div
//                     className="flex items-center border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] pe-3 cursor-pointer"
//                     onClick={() => setIsOpen(!isOpen)}>
//                     <input
//                       className="py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
//                       value={selected}
//                       placeholder="Research"
//                       readOnly
//                     />
//                     <span className="px-2">
//                       <DropdownIcon />
//                     </span>{' '}
//                     {/* Dropdown Icon */}
//                   </div>

//                   {isOpen && (
//                     <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
//                       {options.map((option, index) => (
//                         <li
//                           key={index}
//                           className="px-4 py-2 cursor-pointer hover:bg-gray-200"
//                           onClick={() => {
//                             setSelected(option);
//                             setIsOpen(false);
//                           }}>
//                           {option}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//               {['Start Date', 'End Date'].map((label, idx) => (
//                 <div key={idx} className="w-full md:w-6/12 flex flex-col gap-2">
//                   <h2 className="font-medium text-sm lg:text-base">{label}</h2>
//                   <input
//                     className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
//                     type="date"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* Buttons */}
//         <div className="gap-3 mt-4 flex">
//           <button
//             className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
//             onClick={addNewTask}>
//             <CreateIcon />
//             Add Task
//           </button>
//           <button
//             className="bg-[#2C4C4B] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
//             onClick={addNewTask}>
//             <CreateIcon />
//             New Task Group
//           </button>
//         </div>

//         {/* Final Buttons */}
//         <div className="flex justify-end pt-4">
//           <button
//             className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
//             onClick={handleSaveClick2}>
//             Cancel
//           </button>
//           <button
//             className="bg-[#2C4C4B] text-white rounded-[16px] py-[12px] px-8 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
//             onClick={handleSaveClick}>
//             Save
//           </button>
//         </div>

//         {/* Popups */}
//         {showPopup && (
//           <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black/50 z-50">
//             <div>
//               <Workflow onClose={() => setShowPopup(false)} />
//             </div>
//           </div>
//         )}

//         {showPopup2 && (
//           <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black/50 z-50">
//             <div>
//               <Cancel onClose={() => setShowPopup2(false)} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Template;
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { CloseIcon, CreateIcon, DeletIcon, EditIcon, PrioritiesIcon2 } from '../common/Icons';
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
  const [showPopup2, setShowPopup2] = useState<boolean>(false); // For popup visibility

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
      <div className="w-full max-w-2xl shadow-custom bg-white rounded-lg overflow-y-auto max-h-[100vh] p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-solid border-[#EAEBEB] pb-4">
          <h3 className="font-semibold text-xl">Create New Template</h3>
          <div className="cursor-pointer" onClick={() => closePopup(false)}>
            <CloseIcon />
          </div>
        </div>

        {/* Task Groups Form */}
        {taskGroups.map((_, index) => (
          <div key={index} className="mt-6 pb-4">
            <h2 className="font-bold text-lg text-[#213737] pt-3">New task group {index + 1}</h2>

            <div className="flex flex-col gap-2 pt-3">
              <h2 className="font-medium text-sm lg:text-base text-[#213737]">Name</h2>
              <input
                className="border border-solid w-full border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 placeholder:text-sm placeholder:font-bold placeholder:text-[#9A9999]"
                placeholder="Type..."
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2 pt-3">
              <h2 className="font-medium text-sm lg:text-base">Description</h2>
              <textarea
                className="w-full h-25 outline-0 py-3 px-4 text-sm border border-solid border-[#D6D6D6] hover:bg-[#F4ECF7] hover:border-[#2C4C4B] rounded-[16px] text-[#333333]"
                placeholder="Type here..."></textarea>
            </div>

            {/* Date Fields */}
            <div className="flex flex-col md:flex-row justify-between pt-4 gap-3">
              {['Start Date', 'End Date'].map((label, idx) => (
                <div key={idx} className="w-full md:w-6/12 flex flex-col gap-2">
                  <h2 className="font-medium text-sm lg:text-base">{label}</h2>
                  <input
                    className="border border-solid border-[#D6D6D6] hover:border-[#2C4C4B] rounded-[16px] py-3 px-4 outline-0 w-full bg-transparent text-sm font-normal text-[#333333]"
                    type="date"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Task Table */}
        {taskGroups.length === 3 && (
          <div className="overflow-x-auto md:max-w-full overflow-visible">
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
        <div className="gap-3 mt-4">
          <button
            className="bg-[#477D7C] text-white rounded-[16px] py-[8.5px] px-5 flex items-center gap-2 cursor-pointer font-normal text-xs sm:text-sm"
            onClick={addNewTask}>
            <CreateIcon />
            Add Task
          </button>
          {taskGroups.length === 2 && (
            <div className="flex justify-end pt-4">
              <button
                className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
                onClick={addNewTask}>
                Clear
              </button>
              <button
                className="bg-[#477D7C] text-white rounded-[16px] py-[12px] px-5 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
                onClick={addNewTask}>
                Add Task
              </button>
            </div>
          )}
        </div>

        {/* Final Buttons */}
        <div className="flex justify-end pt-4">
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
