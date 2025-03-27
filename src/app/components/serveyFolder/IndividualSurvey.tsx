"use client";

import { Star } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { DottedIcon, UploadimageIcons } from "../common/Icons";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const IndividualSurvey = () => {
  const [rating, setRating] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const handleStarClick = (starCount: number) => {
    setRating(starCount);
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

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

  const featuresList = [
    "Navigation/Menu",
    "Search Functionality",
    "Profile Management",
    "Notifications",
    "Messaging",
  ];

  return (
    <section className="w-full flex flex-col gap-6">
      <div className=" p-[28px_16px] lg:p-[28px_40px] bg-white rounded-2xl shadow-md flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/png/esthera_jackson_img.png"
            alt="esthera_jackson_img"
            width={69}
            height={69}
          />
          <div>
            <h3
              className={`text-2xl text-[#213737] font-bold leading-[140%] ${inter.className}`}
            >
              Esthera Jackson
            </h3>
            <p className="text-sm text-[#333] font-normal leading-[140%]">
              namesurname@gmail.com
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-[#333] text-base leading-[100%] font-bold">
            2/28/25
          </p>
          <DottedIcon />
        </div>
      </div>

      <div className=" p-[28px_16px] lg:p-[60px] bg-white rounded-2xl shadow-md">
        <form>
          <div className="mb-8">
            <label className="block text-base text-[#213737] font-medium pb-4">
              How often do you use this app?
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999]"
              placeholder="Write your answer"
            />
          </div>

          <div className="mb-8">
            <label className="block text-base text-[#213737] font-medium pb-4">
              What improvements or new features would you suggest for the app?
            </label>
            <textarea
              className="w-full p-3 border border-[#D6D6D6] rounded-2xl focus:outline-none resize-none text-sm h-[70px]"
              placeholder="Write your answer"
            />
          </div>

          <div className="mb-8">
            <label className="block text-base text-[#213737] font-medium pb-4">
              How would you rate the overall experience of using this app?
            </label>
            <div className="flex gap-6 items-center pt-5">
              <div className="flex gap-1">
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
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-base text-[#213737] font-medium pb-4">
              Which features do you use most often?
            </label>
            <div className="space-y-4">
              {featuresList.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div
                    onClick={() => handleFeatureToggle(feature)}
                    className={`w-5 h-5 border cursor-pointer rounded-[4px] ${
                      selectedFeatures.includes(feature)
                        ? "bg-[#2C4C4B] border-[#2C4C4B]"
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
                    onClick={() => handleFeatureToggle(feature)}
                    className="block text-sm text-[#213737] cursor-pointer"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-base text-[#213737] font-medium pb-4">
              Upload a screenshot or file related to your experience
            </label>
            <label
              htmlFor="upload-image"
              className="p-3 border rounded-2xl bg-[#F9F9F9] cursor-pointer flex items-center gap-4 w-fit"
            >
              <UploadimageIcons />
              <p className="text-sm text-[#333] font-bold">Upload image</p>
              <input
                type="file"
                id="upload-image"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {imagePreview && (
              <Image
                src={imagePreview}
                alt="Uploaded preview"
                className="mt-4 rounded-lg"
                width={279}
                height={186}
              />
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-8 py-3 cursor-pointer text-sm font-bold text-[#333] hover:bg-gray-50 rounded-2xl border border-[#EAEAEA]"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-8 py-3 cursor-pointer text-sm font-bold text-white bg-[#2C4C4B] hover:bg-teal-700 rounded-2xl"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default IndividualSurvey;
