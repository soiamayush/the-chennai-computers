"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import authbg2 from "@/public/authbg2.svg";
import logo from "@/public/logo.svg";
import { useRouter } from "next/navigation";

const Index = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const handleVerify = () => {
    router.push("/");
  };

  const handleResend = () => {};

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
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
      <div className="w-full items-center sm:w-1/2 flex justify-center max-h-screen overflow-y-auto hide-horizontal-scrollbar">
        <div className="flex flex-col gap-6 w-4/5 py-6">
          <Image src={logo} alt="" className="w-1/2" />
          <div className="flex flex-col gap-2">
            <span className="text-black text-base sm:text-lg font-medium">
              Verify Code
            </span>
            <span className="text-sm sm:text-base text-[#4D4D4D] font-medium">
              Please enter the code we just sent to email
            </span>
            <span className="text-sm sm:text-base text-[#1C5356] font-medium">
              example@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-base sm:text-lg font-medium">
              Code*
            </label>
            <div className="flex gap-2 justify-start text-black text-base">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1} // Ensuring maxLength is a number
                  className="border border-[#C9C9C9] rounded-full p-2 focus:outline-none font-medium w-12 h-12 text-center"
                  value={value}
                  onChange={(e) =>
                    handleChange(e.target as HTMLInputElement, index)
                  }
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleVerify}
            className="bg-[#1C5356] rounded-lg flex items-center justify-center text-white font-semibold text-base p-2"
          >
            Verify
          </button>

          <span className="text-base w-full justify-center flex gap-2">
            Didn’t receive code?
            <span
              onClick={handleResend}
              className="text-[#1C5356] underline font-semibold cursor-pointer"
            >
              Resend Code
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
