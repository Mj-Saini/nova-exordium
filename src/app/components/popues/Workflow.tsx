import React from "react";
interface WorkflowProps {
  onClose: () => void; // Correct type for onClose function
}

const Workflow: React.FC<WorkflowProps> = ({ onClose }) => {
  return (
    <div className="shadow-[0px_0px_14px_0px_#00000026] p-4 mx-auto rounded-lg px-[40px] py-[40px] bg-white lg:w-8/12">
      <h2 className="font-bold text-sm md:text-md lg:text-lg text-[#213737]">
        App Development Workflow has been successfully saved!
      </h2>
      <p className=" font-normal text-sm text-[#333333] pt-[24px]">
        You can edit, remove, or clone it anytime to fit your needs.
      </p>
      <div className="flex justify-end pt-4">
        <button className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5">
          View Project
        </button>
        <button
          className="bg-[#2C4C4B] text-white rounded-[16px] py-[12px] px-8 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Workflow;
