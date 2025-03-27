"use client";

import { Star } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { UploadimageIcons } from "../common/Icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const SurveyPreview = () => {
  // State for star rating
  const [rating, setRating] = useState(0);

  // State for checkboxes
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Handler for star rating
  const handleStarClick = (starCount: number) => {
    setRating(starCount);
  };

  // Handler for checkbox selection
  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  // List of features to choose from
  const featuresList = [
    "Navigation/Menu",
    "Search Functionality",
    "Profile Management",
    "Notifications",
    "Messaging",
  ];

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col gap-6">
        {/* survey header section  */}
        <div className="p-[28px_24px] bg-white rounded-2xl shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] ">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-5">
              {/* heading  */}
              <h2
                className={`text-[#213737] text-2xl lg:text-[28px] ${inter.className} leading-[64%] font-semibold tracking-[0.56px]`}
              >
                Quick Insights Survey
              </h2>
              {/* buttons  */}
              <div className="flex items-center gap-4">
                <button className="cursor-pointer p-[12px_20px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Edit Survey
                </button>
                <button className="cursor-pointer p-[12px_32px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Archive{" "}
                </button>
                <button className="cursor-pointer p-[12px_40px] border border-[#9A9999] rounded-2xl hover:bg-gray-200 duration-300 text-[#333] text-sm font-bold leading-normal capitalize">
                  Close
                </button>
              </div>
            </div>

            {/* para  */}
            <p
              className={`text-[#333] text-base ${inter.className} leading-[125%] font-normal`}
            >
              Quick Insights Survey is about gathering brief and valuable
              feedback from users. The goal is to understand their experiences,
              preferences, and suggestions to improve the apps design, features,
              and overall performance. Its designed to be fast and easy,
              respecting the users time while still collecting meaningful
              insights.
            </p>

            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Assigned Team:
                </p>
                <Image
                  src="/images/png/assign_team_img.png"
                  alt="assign_team_img"
                  width={141}
                  height={28}
                  className="-pt-4"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  status:
                </p>
                <span className="p-[2px_16px] bg-[#747EBD] shadow-[0px_0px_14px_0px_rgba(7,144,255,0.20)] text-white text-base font-semibold leading-[125%] rounded-[8px]">
                  ACTIVE
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Progress:
                </p>

                <div className="w-full">
                  <span className="text-[#2C4C4B] text-sm font-bold leading-[140%]">
                    50%
                  </span>
                  <div className="w-full bg-gray-200 h-[2px] mt-1 rounded-full">
                    <div className="bg-[#2C4C4B] h-[2px] w-[50%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-[#9A9999] text-xs font-bold leadinng-[116%] tracking-[0.144px] uppercase ${inter.className}`}
                >
                  Due Date :
                </p>
                <p
                  className={`text-[#E25C2B] text-base font-medium leadinng-[140%]  uppercase ${inter.className}`}
                >
                  8/28/2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[28px_24px] bg-white rounded-2xl shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)]">
          <form action="">
            <div className="mb-8">
              <label className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
                How often do you use this app?
              </label>
              <input
                type="text"
                name="assignedTo"
                className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm"
                placeholder="Write your answer"
              />
            </div>

            {/* textarea  */}
            <div className="mb-8">
              <label className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
                What improvements or new features would you suggest for the app?
              </label>
              <textarea
                className="w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl resize-none text-[#9A9999] text-sm h-[70px]"
                placeholder="Write your answer"
              />
            </div>

            {/* Rating section with interactive stars */}
            <div className="mb-8">
              <label className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
                How would you rate the overall experience of using this app?
              </label>
              <div className="flex gap-6 items-center pt-5">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((starCount) => (
                    <Star
                      key={starCount}
                      onClick={() => handleStarClick(starCount)}
                      className={`w-10 h-10 cursor-pointer ${
                        starCount <= rating
                          ? "text-[#EBA055] fill-[#EBA055]"
                          : "text-[#333] fill-none"
                      }`}
                    />
                  ))}
                </div>
                {/* {rating > 0 && (
                  <span className="text-sm text-[#213737] ml-4">
                    {rating} out of 5
                  </span>
                )} */}
              </div>
            </div>

            {/* Custom Checkboxes section */}
            <div className="mb-8">
              <label className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
                Which features do you use most often?
              </label>
              <div className="space-y-4">
                {featuresList.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div
                      onClick={() => handleFeatureToggle(feature)}
                      className={`w-5 h-5 border border-[#2C4C4B] cursor-pointer rounded-[4px]
                        ${
                          selectedFeatures.includes(feature)
                            ? "bg-[#2C4C4B] border-[#2C4C4B] "
                            : "bg-white"
                        }`}
                    >
                      {selectedFeatures.includes(feature) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          className="w-full h-full"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <label
                      className="block text-sm text-[#213737] font-normal leading-[140%] cursor-pointer"
                      onClick={() => handleFeatureToggle(feature)}
                    >
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* upload files  */}
            <div className="mb-8">
              <label className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
                Upload a screenshot or file related to your experience with the
                app
              </label>

              <label
                htmlFor="upload-image"
                className="p-[12px_20px] border border-[#F0F0F0] rounded-2xl bg-[#F9F9F9] cursor-pointer flex items-center gap-4 w-fit"
              >
                <UploadimageIcons />
                <p className="text-sm text-[#333] leading-normal font-bold">
                  Upload image
                </p>
                <input
                  type="file"
                  id="upload-image"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              {imagePreview && (
                <div className="mt-4">
                  <Image
                    src={imagePreview}
                    alt="Uploaded preview"
                    className="max-w-full h-auto rounded-lg"
                    width={279}
                    height={186}
                  />
                </div>
              )}
            </div>

            {/* buttons section */}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-8 py-3 text-sm font-bold text-[#333] hover:bg-gray-50 rounded-2xl border border-[#EAEAEA] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 text-sm font-bold text-white bg-[#2C4C4B] cursor-pointer hover:bg-teal-700 rounded-2xl"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SurveyPreview;
