"use client";
import Image from "next/image";
import React, { useState } from "react";
import authbg1 from "@/public/authbg1.svg";
import logo from "@/public/logo.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const index = () => {
  const [pvisible, setPVisible] = useState(false);
  const [cvisible, setcVisible] = useState(false);
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
              Set New Password
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Must be at least 8 character long
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Password*
            </label>
            <div className="border items-center flex justify-between  border-[#C9C9C9] rounded-lg">
              <input
                className=" w-full  p-2 rounded-lg text-black text-base  focus:outline-none font-medium"
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
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Confirm Password*
            </label>
            <div className="border items-center flex justify-between  border-[#C9C9C9] rounded-lg">
              <input
                className=" w-full  p-2 rounded-lg text-black text-base  focus:outline-none font-medium"
                placeholder="Enter confirm password"
                name="cpassword"
                type={cvisible ? "text" : "password"}
              />
              <div
                className="px-2 cursor-pointer text-[#C9C9C9]"
                onClick={() => setcVisible(!cvisible)}
              >
                {cvisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
          </div>
          <button className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
