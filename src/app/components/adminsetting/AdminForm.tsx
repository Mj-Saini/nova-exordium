"use client";

import React, { useState } from "react";
import { AdminCloseIcons } from "../common/Icons";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

interface AdminFormProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

interface AdminFormProps {
  setIsModalOpen: (isOpen: boolean) => void;
  profileData?: { fullName: string; email: string }; // Optional to prevent undefined issues
  // setProfileData: (data: { fullName: string; email: string }) => void;
}

const AdminForm: React.FC<AdminFormProps> = ({
  setIsModalOpen,
  profileData = { fullName: "", email: "" }, // Default values
  // setProfileData,
}) => {
  const [formData, setFormData] = useState({
    fullName: profileData?.fullName || "",
    email: profileData?.email || "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Form Submitted:", formData);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-semibold leading-[90%] tracking-[0.4px]">
          Edit Profile
        </h2>

        <button
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer border border-[#EAEAEA] rounded-full p-[6px]"
        >
          <AdminCloseIcons />
        </button>
      </div>

      <form className="pt-[30px] space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="fullName"
            className="block text-base leading-[140%] font-medium text-[#213737] mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Your full name"
            className={`w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm ${inter.className}`}
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-base leading-[140%] font-medium text-[#213737] mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className={`w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm ${inter.className}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-base leading-[140%] font-medium text-[#213737] mb-1"
          >
            Change Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Minimum 8 characters"
              className={`w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm ${inter.className}`}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-5 text-sm leading-[140%] font-semibold flex items-center text-[#477D7C] focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-base leading-[140%] font-medium text-[#213737] mb-1"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Retype password"
              className={`w-full p-3 lg:px-5 py-2 lg:py-[15px] border border-[#D6D6D6] rounded-2xl focus:outline-none placeholder:text-[#9A9999] placeholder:text-sm ${inter.className}`}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-5 text-sm leading-[140%] font-semibold flex items-center text-[#477D7C] focus:outline-none"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-8 py-3 text-sm leading-normal font-bold  text-[#333] hover:bg-gray-50 rounded-2xl border border-[#EAEAEA] cursor-pointer "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 text-sm font-bold leading-[140%] text-white bg-[#2C4C4B] cursor-pointer hover:bg-teal-700 rounded-2xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
