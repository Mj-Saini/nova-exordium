"use client";

import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

interface SignUpProps {
  toggleForm: () => void;
}

const SignUp: React.FC<SignUpProps>= ({toggleForm}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

    const handleSwitchToggle = () => {
    setFormData((prev) => ({ ...prev, remember: !prev.remember }));
  };


  return (
    <>
      <div className="flex flex-col items-center justify-between lg:-translate-y-[50%] relative z-20 w-full lg:mt-[70px]">
        <div className="bg-white p-5 lg:p-10 rounded-2xl custom_shadow w-full md:w-1/2 2xl:w-3/12">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 lg:mb-6 flex flex-col gap-1.5">
              <label
                className={`${inter.className} font-medium text-base text-[#213737]`}
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-[#D6D6D6] rounded-2xl py-[15px] px-5 text-sm text-[#9A9999] font-normal"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-4 lg:mb-6 flex flex-col gap-1.5">
              <label
                className={`${inter.className} font-medium text-base text-[#213737]`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#D6D6D6] rounded-2xl py-[15px] px-5 text-sm text-[#9A9999] font-normal"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4 lg:mb-6 flex flex-col gap-1.5 relative">
              <label
                className={`${inter.className} font-medium text-base text-[#213737]`}
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-[#D6D6D6] rounded-2xl py-[15px] px-5 text-sm text-[#9A9999] font-normal"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute right-5 top-12 text-sm text-[#477D7C] font-semibold"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mb-4 lg:mb-6 flex flex-col gap-1.5 relative">
              <label
                className={`${inter.className} font-medium text-base text-[#213737]`}
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border border-[#D6D6D6] rounded-2xl py-[15px] px-5 text-sm text-[#9A9999] font-normal"
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="absolute right-5 top-12 text-sm text-[#477D7C] font-semibold"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mb-4 lg:mb-6 flex items-center gap-4">
              <button
                type="button"
                onClick={handleSwitchToggle}
                className={`w-12 h-6 flex items-center rounded-full p-0.5 duration-300 ease-in-out ${formData.remember ? 'bg-[#477D7C]' : 'bg-gray-400'}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${formData.remember ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
              </button>
              <label
                htmlFor="remember"
                className="className={`${inter.className} font-medium text-base text-[#213737]`}"
              >
                Remember me
              </label>
            </div>

            <button className="pt-4 text-[#fff] bg-[#213737] fill-[#fff] uppercase relative z-10 w-full text-center justify-center !text-sm font-bold leading-[100%] rounded-2xl px-5 pb-3.5 whitespace-nowrap inline-flex items-center gap-3">
              Sign up
                
            </button>
          </form>
          <p className="font-bold text-base text-center text-[#333333] mt-6">
            Already have an account?{" "}
            <span onClick={toggleForm} className="text-[#2C4C4B] cursor-pointer">
              Sign In
            </span>
          </p>
              </div>
          
      </div>
    </>
  );
};

export default SignUp;
