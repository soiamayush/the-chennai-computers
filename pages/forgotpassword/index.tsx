"use client";
import Image from "next/image";
import React from "react";
import authbg1 from "@/public/authbg1.svg";
import logo from "@/public/logo.svg";
const index = () => {
  return (
    <div className="flex gap-4 justify-between p-6">
      <div className="hidden sm:flex w-1/2 max-h-screen overflow-y-auto">
        <Image
          src={authbg1}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center">
        <div className="flex flex-col gap-6 w-4/5 py-6">
          <Image src={logo} alt="" className="w-1/2" />
          <div className="flex flex-col gap-2">
            <span className="text-black text-base sm:text-lg font-medium">
              Forget Password?
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Don’t worry, We’ll send you reset instructions.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Email*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Email Address"
              name="email"
            />
          </div>

          <button className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2">
            Submit
          </button>

          <span className="text-base w-full justify-center flex gap-2">
            Remember Password?
            <span className="text-[#1C5356] underline font-semibold cursor-pointer">
              Sign in
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
