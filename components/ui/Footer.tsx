import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";

const Footer = () => {
  const navigate = useRouter();
  return (
    <div className=" pt-6">
      <div
        onClick={() => navigate.push("/")}
        className="border-y border-y-[#D9D9D9]  w-[90%] mx-auto flex justify-center"
      >
        <Image
          alt=""
          src={logo}
          className="py-4 w-1/2 sm:w-1/4 cursor-pointer"
        />
      </div>
      <div className="w-4/5 mx-auto px-4 py-4 flex justify-between gap-4 gap-y-6 flex-wrap ">
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-sm font-semibold">About</span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Our Company
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Our Story
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Blog
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-sm font-semibold">Other Links</span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Terms & Conditions
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Privacy Policy
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Returns
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-sm font-semibold">Follow Us</span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Facebook
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Instagram
          </span>
          <span className=" text-sm font-medium text-[#4D4D4D] cursor-pointer">
            Twitter
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-sm font-semibold">Contact Us</span>
          <div className="flex gap-2 items-center">
            <div className="bg-[#FFBA35]  flex items-center justify-center rounded-full">
              <LocalPhoneIcon
                className="text-[#1C5356] m-3"
                style={{ fontSize: "1rem" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className=" text-xs font-medium text-[#4D4D4D]">
                Phone :{" "}
              </span>
              <span className=" text-sm font-medium text-[#4D4D4D]">
                +91-123 456 7890
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#FFBA35]  flex items-center justify-center rounded-full">
              <EmailIcon
                className="text-[#1C5356] m-3"
                style={{ fontSize: "1rem" }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className=" text-xs font-medium text-[#4D4D4D]">
                Email :{" "}
              </span>
              <span className="text-wrap  text-sm font-medium text-[#4D4D4D]">
                mail@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FFBA35] justify-center items-center py-4 text-[#1C5356] font-semibold text-sm md:text-base text-center px-4">
        Copyright@2024 The Chennai Computers. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
