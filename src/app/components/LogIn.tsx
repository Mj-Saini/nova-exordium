"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

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

  return (
    <div className="w-full flex items-center justify-center ">
      <div className=" rounded-lg flex overflow-hidden custom_container w-full">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h1
            className={`${inter.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#2C4C4B]`}
          >
            Welcome Back
          </h1>
          <p className="font-bold text-base text-[#333] pt-2">
            Enter your email and password to sign in
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4 flex flex-col gap-2">
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
            <div className="mb-4 flex flex-col gap-2">
              <label className={`${inter.className} font-medium text-base text-[#213737]`}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-[#D6D6D6] rounded-2xl py-[15px] px-5 text-sm text-[#9A9999] font-normal"
                placeholder="Your password"
              />
            </div>
              <a href="#" className="text-green-700 text-sm mt-2 inline-block">
                Forgot password?
              </a>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-green-700">
              Sign up
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-green-900 text-white flex items-center justify-center p-10">
          <h2 className="text-4xl font-bold">NOVA EXORDIUM</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
