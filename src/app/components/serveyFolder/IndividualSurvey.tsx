"use client";

import { Star } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { DottedIcon } from "../common/Icons";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const IndividualSurvey = () => {
  const [rating, setRating] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const router = useRouter();

  // Add useEffect for pre-filling
  useEffect(() => {
    // Example pre-filled values
    const preFilledRating = 4; // Pre-fill with 4 stars
    const preFilledFeatures = ["Navigation/Menu", "Search Functionality"]; // Pre-selected features

    setRating(preFilledRating);
    setSelectedFeatures(preFilledFeatures);
  }, []); // Empty dependency array means this runs once on component mount

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

      <div
        className={`p-[28px_16px] lg:p-[60px] bg-white rounded-2xl shadow-md ${inter.className}`}
      >
        <div>
          {/* Quick Insights Survey */}
          <div className="mb-8">
            <h2 className="block text-2xl text-[#213737] font-semibold pb-4 leading-[108%] tracking-[0.48px] ">
              Quick Insights Survey
            </h2>

            <p className="block text-base text-[#333] font-normal leading-[125%] pb-5">
              Quick Insights Survey is about gathering brief and valuable
              feedback from users. The goal is to understand their experiences,
              preferences, and suggestions to improve the apps design, features,
              and overall performance. Its designed to be fast and easy,
              respecting the users time while still collecting meaningful
              insights.
            </p>
          </div>
          {/* questions  */}
          <div className="mb-8">
            <h4 className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
              How often do you use this app?
            </h4>

            <p className="block text-base text-[#333] font-normal leading-[125%]">
              I love the smooth animations and easy navigation.{" "}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="block text-base text-[#213737] font-medium pb-4 leading-[140%]">
              How often do you use this app?What improvements or new features
              would you suggest for the app?
            </h4>

            <p className="block text-base text-[#333] font-normal leading-[125%]">
              The app is very intuitive, but I think the loading time for some
              sections could be improved. Also, adding a dark mode would enhance
              the user experience, especially for nighttime use.
            </p>
          </div>

          {/* star section  */}
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

          {/* checkbox */}
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

          {/* images  */}
          <div className="mb-8">
            <Image
              src="/images/png/upload_img.png"
              alt="upload_img"
              width={279}
              height={186}
            />
          </div>
          {/* buttons section */}
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
        </div>
      </div>
    </section>
  );
};

export default IndividualSurvey;
