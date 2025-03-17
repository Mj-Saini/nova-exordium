// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import React, { useState } from "react";
// import SignUp from "../components/SignUp";
// import Header from "../components/common/Header";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700", "900"],
// });

// const Page = () => {

//   return (
//     <div className=" flex flex-col px-6 pt-6 bg-white">
//       {/* Hero Section */}
//         <div className="bg-no-repeat bg-cover bg-top h-[50vh] start_journey_bgimg rounded-2xl">
//           <Header />
//           <div className="relative flex justify-center h-full text-white text-center py-[60px] px-5">
//             <div className="relative z-10 max-w-[450px]">
//               <h1
//                 className={`${inter.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`}
//               >
//                 Welcome!
//               </h1>
//               <p className="font-bold text-base text-[#fff] pt-2">

//                   Use these awesome forms to login or create new account in your project for free.
//               </p>
//             </div>
//           </div>
//         </div>

//       {/* Form Section */}
//       <div className=" flex items-center justify-center">
//         <SignUp />
//       </div>

//       {/* Footer */}
//       <p className="font-normal text-xsm text-[#9A9999] text-center pb-6 lg:pb-[52px] pt-6 ">
//         This site is protected by reCAPTCHA and the Google Privacy Policy and
//         Terms of Service apply.
//       </p>
//     </div>
//   );
// };

// export default Page;

/* eslint-disable @typescript-eslint/no-unused-vars */

// "use client";
// import React, { useState } from "react";
// import SignUp from "../components/SignUp";
// import Header from "../components/common/Header";
// import { Inter } from "next/font/google";
// import Login from "../components/LogIn";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["300", "400", "600", "700", "900"],
// });

// const Page = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between px-6 bg-white">

//       <div>
//         <div className="relative z-10">
//            <Header btnStyling="static" headerStyling="!bg-white pe-5"/>
//        </div>
//         <div className=" flex items-center justify-center py-[60px]">
//           <Login />
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="font-normal text-xsm text-[#9A9999] text-center pb-6 lg:pb-[52px] pt-6 ">
//         This site is protected by reCAPTCHA and the Google Privacy Policy and
//         Terms of Service apply.
//       </p>
//     </div>
//   );
// };

// export default Page;

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
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and SignUp

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between  bg-white ${isLogin ? "px-0":"px-5"}`}>
      <div>
        {isLogin !== false && (
          <div className="relative z-20">
            <Header btnStyling="static xl:pe-5" headerStyling="!bg-white" btnName="Don’t have account?" toggleForm={toggleForm} />
          </div>
        )}
        {isLogin === false && (
          <div className="bg-no-repeat bg-cover bg-top h-[50vh] start_journey_bgimg rounded-2xl mt-6">
            <div  className="relative z-30">
               <Header btnStyling="2xl:absolute right-[84px] " buttonClr="!text-white" btnName="Already have an account?"  toggleForm={toggleForm}/>
          </div>
           <div className="relative flex justify-center h-full text-white text-center py-[60px] px-5">
             <div className="relative z-10 max-w-[450px]">
               <h1
                className={`${inter.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]`}
              >
                Welcome!
              </h1>
              <p className="font-bold text-base text-[#fff] pt-2">

                  Use these awesome forms to login or create new account in your project for free.
              </p>
            </div>
          </div>
        </div>
        )}
        <div className="flex items-center justify-center py-[60px]">
          {isLogin ? <Login toggleForm={toggleForm}/> : <SignUp toggleForm={toggleForm}/>}
        </div>
        
      </div>

      {/* Footer */}
      <p className={`font-normal text-xsm text-[#9A9999] text-center pb-6 lg:pb-[52px] pt-6 ${isLogin ? "":"-translate-y-[20%]"}`}>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
};

export default Page;
