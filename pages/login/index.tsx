"use client";
import Image from "next/image";
import React, { useState } from "react";
import authbg1 from "@/public/authbg1.svg";
import logo from "@/public/logo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import google from "@/public/google.svg";
const index = () => {
  const [pvisible, setPVisible] = useState(false);
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
        <div className="flex flex-col gap-4 w-4/5 py-6">
          <Image src={logo} alt="" className="w-1/2" />
          <div className="flex flex-col gap-2">
            <span className="text-black text-base sm:text-lg font-medium">
              Sign in
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Please fill your detail to access your account.
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
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Password*
            </label>
            <div className="border items-center flex justify-between  border-[#C9C9C9] rounded-lg">
              <input
                className="w-full p-2 rounded-lg text-black text-base  focus:outline-none font-medium"
                placeholder="Enter password"
                name="password"
                type={pvisible ? "text" : "password"}
              />
              <div
                className="px-2 cursor-pointer text-[#C9C9C9]"
                onClick={() => setPVisible(!pvisible)}
              >
                {pvisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="flex justify-end">
              <span className="text-[#1C5356] font-semibold underline text-base sm:text-lg cursor-pointer">
                Forget Password?
              </span>
            </div>
          </div>
          <button className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2">
            Sign in
          </button>
          <div className="cursor-pointer border border-[#C9C9C9] rounded-lg p-2 flex justify-center items-center gap-2">
            <Image src={google} alt="" className="" width={20} />
            <span className="text-black font-medium text-base">
              Sign In With Google
            </span>
          </div>
          <span className="text-base w-full justify-center flex gap-2">
            Don't have an account?
            <span className="text-[#1C5356] underline font-semibold cursor-pointer">
              Sign up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
