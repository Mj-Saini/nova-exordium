"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CheckIcon, Star } from "lucide-react";
import { individualData } from "../common/Helper";
import { Inter } from "next/font/google";

// Define type for individual response
type IndividualResponse = {
  id: number;
  name: string;
  email: string;
  profilePhoto?: string;
  score: number;
  progress: number;
  rating: number;
  status: "View" | "Remove";
  progresnumb: number;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const IndivTable: React.FC = () => {
  const [responses, setResponses] = useState<IndividualResponse[]>(
    individualData as IndividualResponse[]
  );


 

  const removeResponse = (id: number) => {
    setResponses(responses.filter((response) => response.id !== id));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 overflow-x-auto">
      <div>
        <h2
          className={`${inter.className} text-[#213737] text-lg font-bold leading-[140%]`}
        >
          Individual responses
        </h2>
        <p className="text-sm text-[#9A9999] leading-[140%] font-medium inline-flex items-center gap-1 pt-[6px]">
          <span>
            <CheckIcon/>
          </span>{" "}
          {individualData.length} done this month
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className={`w-full whitespace-nowrap ${inter.className}`}>
          <thead className="border-b border-b-[#F0F0F0]">
            <tr>
              <th className="py-3 px-5 text-left text-xs font-bold text-[#9A9999] uppercase leading-[133%]">
                Name
              </th>
              <th className="py-3 px-5 text-center text-xs font-bold text-[#9A9999] uppercase leading-[133%]">
                Score
              </th>
              <th className="py-3 px-5 text-center text-xs font-bold text-[#9A9999] uppercase leading-[133%]">
                Progress
              </th>
              <th className="py-3 px-5 text-center text-xs font-bold text-[#9A9999] uppercase leading-[133%]">
                Rating
              </th>
              <th className="py-3 px-5 text-center text-xs font-bold text-[#9A9999] uppercase leading-[133%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response) => (
              <tr
                key={response.id}
                className="transition-colors border-b border-b-[#F0F0F0]"
              >
                <td className="py-3 px-5 text-sm font-medium text-gray-900 flex items-center space-x-3">
                  {response.profilePhoto ? (
                    <Image
                      src={response.profilePhoto}
                      alt={`${response.name}'s profile`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {response.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm text-[#213737] font-bold leading-[140%]">
                      {response.name}
                    </h3>
                    <p className="text-sm text-[#9A9999] font-normal leading-[140%]">
                      {response.email}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-5 text-lg text-[#213737] font-bold leading-[140%]">
                  {response.score}%
                </td>
                <td className="py-3 px-5 text-sm text-[#213737] font-bold leading-[140%]">
                  {response.progresnumb}%
                  <div className="w-full bg-[#D6D6D6] rounded-full h-[2px] mt-1">
                    <div
                      className="bg-[#2C4C4B] h-[2px] rounded-full transition-all duration-300"
                      style={{ width: `${response.progresnumb}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-5 text-center">
                  <div className="flex justify-center gap-1">
                    {[...Array(response.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#EBA055] fill-current"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-5 text-center">
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() =>
                        (window.location.href = "/individual/individualSurvy")
                      }
                      className="px-3 py-1 cursor-pointer text-sm font-bold leading-[140%] text-[#9A9999] transition-colors hover:text-blue-500"
                    >
                      View
                    </button>
                    <button
                      onClick={() => removeResponse(response.id)}
                      className="hover:text-red-500 cursor-pointer text-sm font-bold leading-[140%] text-[#9A9999]"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndivTable;
