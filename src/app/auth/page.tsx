/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Header from "../components/common/Header";
import { Inter } from "next/font/google";
import Login from "../components/LogIn";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const Page = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="h-screen flex flex-col px-6 pt-6 bg-white">
      {/* Hero Section */}
          {isLogin !== true  && <div className="bg-no-repeat bg-cover bg-top h-[50vh] start_journey_bgimg rounded-2xl">
              <Header />
              <div className="relative flex justify-center h-full text-white text-center py-[60px] px-5">
                  <div className="relative z-10 max-w-[450px]">
                      <h1 className={`${inter.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`}>
                          Welcome!
                      </h1>
                      <p className="font-bold text-base text-[#fff] pt-2">
                          {isLogin ? "Enter your credentials to sign in." : "Use these awesome forms to login or create new account in your project for free."}
                      </p>
                  </div>
              </div>
          </div>}
          {isLogin &&  <Header />}

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center">
        {isLogin ? <Login /> : <SignUp />}
      </div>

      {/* Footer */}
   <p className="font-normal text-xsm text-[#9A9999] text-center pb-6 lg:pb-[52px] pt-6 ">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>          
    </div>
  );
};

export default Page;
