"use client";
import Image from "next/image";
import React, { useState } from "react";
import authbg2 from "@/public/authbg2.svg";
import logo from "@/public/logo.svg";
import { useRouter } from "next/navigation";
const index = () => {
  const router = useRouter();
  const onComplete = () => {
    router.push("/");
  };
  return (
    <div className="flex gap-4 justify-between p-6">
      <div className="hidden sm:flex w-1/2 max-h-screen overflow-y-auto">
        <Image
          src={authbg2}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 flex justify-center max-h-screen overflow-y-auto hide-horizontal-scrollbar">
        <div className="flex flex-col gap-6 w-4/5 py-6">
          <Image src={logo} alt="" className="w-1/2" />
          <div className="flex flex-col gap-2">
            <span className="text-black text-base sm:text-lg font-medium">
              Complete Your Profile
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Don’t worry, only you can see your personal data.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Phone*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Your phone"
              name="phone"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Full Address*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Your Address"
              name="address"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Age*
            </label>
            <input
              className="border w-full p-2 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Your Age"
              name="age"
              type="number"
            />
          </div>

          <button
            onClick={onComplete}
            className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
