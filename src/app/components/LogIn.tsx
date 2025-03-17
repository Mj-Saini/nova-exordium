"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

interface SignInProps {
  toggleForm: () => void;
}

const Login: React.FC<SignInProps> = ({toggleForm}) => {
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

    const handleSwitchToggle = () => {
    setFormData((prev) => ({ ...prev, remember: !prev.remember }));
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className=" rounded-lg flex overflow-hidden custom_container w-full">
        <div className="w-full lg:w-1/2 md:p-10">
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
            <button
              type="submit"
             className="pt-4 text-[#fff] bg-[#213737] fill-[#fff] uppercase relative z-10 w-full text-center justify-center !text-sm font-bold leading-[100%] rounded-2xl px-5 pb-3.5 whitespace-nowrap inline-flex items-center gap-3"
            >
              Sign In
            </button>
          </form>
          <p className="font-bold text-base text-center text-[#333333] mt-6">
            Don’t have an account?{" "}
            <span onClick={toggleForm} className="text-[#2C4C4B] cursor-pointer">
              Sign up
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 hidden lg:flex absolute top-0 right-0 h-[80%] rounded-b-3xl bg-cover bg-right login_bgimg text-white  items-center justify-center p-10">
          <h2 className={`${inter.className} font-black text-5xl lg:text-7xl xl:text-[102px] text-[#fff] uppercase text-center`}>NOVA <span className={`${inter.className} font-black text-3xl lg:text-5xl xl:text-[54] text-[#fff] uppercase block`}>EXORDIUM</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
