import React from "react";
import keyboard from "@/public/keyboard.svg";
import mouse from "@/public/mouse.svg";
import gpu from "@/public/gpu.svg";
import cpu from "@/public/cpu.svg";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Label from "../ui/Label";
import { useRouter } from "next/navigation";

const Herosection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="p-3 sm:p-6 flex gap-1 md:gap-3  sm:px-16">
        <div className="h-full w-1/2">
          <div className="bg-[#1c5257] h-40 sm:h-72 rounded-lg w-full flex gap-2 justify-between p-3 items-center">
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <span className="text-white text-xs text-center sm:text-start">
                Hurry Up Limited Time Offer Only!
              </span>
              <span className="text-white text-sm sm:text-2xl font-bold text-center sm:text-start">
                Offer: Up to 15% off on
                <span className="text-[#FFBA35]"> laptops and accessories</span>
              </span>
              <button
                onClick={() => router.push("/shop")}
                className="bg-[#FFBA35] text-xs sm:text-sm px-3 py-1 rounded-lg text-[#1C5356] font-medium w-fit"
              >
                Shop now
              </button>
            </div>
            <Image
              src={cpu}
              alt=""
              className="h-4/5 sm:h-full hidden sm:flex"
            />
          </div>
        </div>
        <div className="h-full w-1/2 md:w-1/4 ">
          <div className="bg-[#1c5257] h-40 sm:h-72 rounded-lg w-full flex flex-col items-center justify-center p-3 py-4">
            <div className="flex flex-col gap-1 md:gap-2 items-center sm:items-start">
              <span className="text-white text-xs text-center sm:text-start">
                Buy a gaming PC and get a gaming accessory
              </span>
              <span className="text-white text-sm md:text-xl font-bold text-center sm:text-start">
                (mouse, keyboard, or headset)
                <span className="text-[#FFBA35]"> for free</span>
              </span>
              <div
                className="flex text-sm md:text-sm items-center gap-2 text-[#FFBA35] cursor-pointer"
                onClick={() => router.push("/shop")}
              >
                Shop Now
                <span className=" h-fit rounded-full bg-[#FFBA35] flex items-center text-[#1C5356]">
                  <ChevronRightIcon />
                </span>
              </div>
            </div>
            <Image src={keyboard} alt="" className="w-3/4  hidden sm:flex" />
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-2 md:gap-3 w-1/4">
          <div className="">
            <div className="bg-[#1c5257] h-[4.5rem] sm:h-[8.5rem] rounded-lg w-full ">
              <div className="relative flex p-2 flex-col gap-1 md:gap-2 items-center sm:items-start">
                <span className="text-white text-xs text-center sm:text-start">
                  Exclusively Faster
                </span>
                <span className="text-white text-sm md:text-xl font-bold text-center sm:text-start">
                  Dragon Wired
                  <span className="text-[#FFBA35]"> Keyboard</span>
                </span>
                <div className="flex justify-between">
                  <div
                    className="h-fit flex text-sm md:text-sm items-center gap-2 text-[#FFBA35] cursor-pointer"
                    onClick={() => router.push("/product")}
                  >
                    Shop Now{" "}
                    <span className=" h-fit rounded-full bg-[#FFBA35] flex items-center text-[#1C5356]">
                      <ChevronRightIcon />
                    </span>
                  </div>
                  <Image
                    src={mouse}
                    alt=""
                    className="w-1/4 absolute top-[50%] right-2 md:flex hidden"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-[#1c5257] h-[4.5rem] sm:h-[8.5rem] rounded-lg w-full ">
              <div className="relative flex p-2 flex-col gap-1 md:gap-2 items-center sm:items-start">
                <span className="text-white text-xs text-center sm:text-start">
                  Faster And Better
                </span>
                <span className="text-white text-sm md:text-xl font-bold text-center sm:text-start">
                  Upgrade Your
                  <span className="text-[#FFBA35]">GPU</span>
                </span>
                <div className="flex justify-between">
                  <div
                    className="h-fit flex text-sm md:text-sm items-center gap-2 text-[#FFBA35] cursor-pointer"
                    onClick={() => router.push("/product")}
                  >
                    Shop Now
                    <span className=" h-fit rounded-full bg-[#FFBA35] flex items-center text-[#1C5356]">
                      <ChevronRightIcon />
                    </span>
                  </div>
                  <Image
                    src={gpu}
                    alt=""
                    className="w-1/3 absolute -bottom-2 right-2 md:flex hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Label />
    </div>
  );
};

export default Herosection;
