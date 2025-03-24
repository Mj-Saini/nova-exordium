import React from 'react';
interface CancelProps {
  onClose: () => void; // Correct type for onClose function
}

const Cancel: React.FC<CancelProps> = ({ onClose }) => {
  return (
    <div>
      <div className="shadow-[0px_0px_14px_0px_#00000026] mx-auto p-4 rounded-lg px-[40px] py-[40px] bg-white lg:w-8/12 ">
        <h2 className=" font-bold text-sm md:text-base lg:text-lg text-[#213737]">
          Are you sure you want to cancel?
        </h2>
        <p className=" font-normal text-sm text-[#333333] pt-[24px]">
          This action cannot be undone, and your changes will not be saved.
        </p>
        <div className="flex justify-end pt-4">
          <button
            className="border border-[#EAEAEA] text-[#333333] rounded-[16px] py-[12px] px-6 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base me-5"
            onClick={onClose}
          >
            Back
          </button>
          <button className="bg-[#2C4C4B] text-white rounded-[16px] py-[12px] px-8 flex items-center gap-2 cursor-pointer font-medium text-sm sm:text-base">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
