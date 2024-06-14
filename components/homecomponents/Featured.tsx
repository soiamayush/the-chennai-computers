"use client";
import React, { useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import featured1 from "@/public/featured1.svg";
import FeaturedCard from "../ui/FeaturedCard";
import keyboard from "@/public/keyboard.svg";
import mouse from "@/public/mouse.svg";
import gpu from "@/public/gpu.svg";
import cpu from "@/public/cpu.svg";
import bannerimg from "@/public/bannerimg.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const featuredData = [
  { image: featured1, title: "HD Monitor", numOfProducts: 20 },
  { image: keyboard, title: "HD Monitor", numOfProducts: 20 },
  { image: gpu, title: "HD Monitor", numOfProducts: 20 },
  { image: mouse, title: "HD Monitor", numOfProducts: 20 },
  { image: cpu, title: "HD Monitor", numOfProducts: 20 },
  { image: featured1, title: "HD Monitor", numOfProducts: 20 },
  { image: keyboard, title: "HD Monitor", numOfProducts: 20 },
  { image: gpu, title: "HD Monitor", numOfProducts: 20 },
  { image: mouse, title: "HD Monitor", numOfProducts: 20 },
  { image: cpu, title: "HD Monitor", numOfProducts: 20 },
  { image: featured1, title: "HD Monitor", numOfProducts: 20 },
  { image: keyboard, title: "HD Monitor", numOfProducts: 20 },
  { image: gpu, title: "HD Monitor", numOfProducts: 20 },
  { image: mouse, title: "HD Monitor", numOfProducts: 20 },
  { image: cpu, title: "HD Monitor", numOfProducts: 20 },
  { image: featured1, title: "HD Monitor", numOfProducts: 20 },
  { image: keyboard, title: "HD Monitor", numOfProducts: 20 },
  { image: gpu, title: "HD Monitor", numOfProducts: 20 },
  { image: mouse, title: "HD Monitor", numOfProducts: 20 },
  { image: cpu, title: "HD Monitor", numOfProducts: 20 },
];

const Featured = () => {
  const [box, setBox] = useState<HTMLDivElement | null>(null);
  const [numOfScreens, setNumOfScreens] = useState(1);
  const [activeScreen, setActiveScreen] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const container = document.querySelector(
      ".container-carousel"
    ) as HTMLDivElement;
    setBox(container);
    const updateScreenCount = () => {
      const visibleWidth = container?.clientWidth || 0;
      const totalWidth = container?.scrollWidth || 0;
      const screens = Math.ceil(totalWidth / visibleWidth);
      setNumOfScreens(screens);
    };
    updateScreenCount();
    window.addEventListener("resize", updateScreenCount);
    return () => window.removeEventListener("resize", updateScreenCount);
  }, []);

  const handlePrev = () => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      setActiveScreen((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNext = () => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      setActiveScreen((prev) => Math.min(prev + 1, numOfScreens - 1));
    }
  };

  const handleDotClick = (index: number) => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = width * index;
      setActiveScreen(index);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 px-8">
      <div className="flex justify-between items-center">
        <span className="text-[#1C5356] text-xl md:text-3xl font-bold">
          Featured Categories
        </span>
        <div className="flex items-center gap-2">
          <div
            className="px-4 flex items-center p-2 text-[#FFBA35] border border-[#D5D5D5] rounded-full cursor-pointer"
            onClick={handlePrev}
          >
            <WestIcon style={{ fontSize: "1.2rem" }} />
          </div>
          <div
            className="px-4 flex items-center p-2 text-white bg-[#FFBA35] border border-[#D5D5D5] rounded-full cursor-pointer"
            onClick={handleNext}
          >
            <EastIcon style={{ fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
      <div className="py-6 flex container-carousel gap-8 max-w-screen overflow-x-auto hide-horizontal-scrollbar">
        {featuredData &&
          featuredData.map((card, index) => (
            <FeaturedCard key={index} card={card} />
          ))}
      </div>
      <div className="flex gap-1 justify-center items-center w-full">
        {Array.from({ length: numOfScreens }, (_, index) => (
          <span
            key={index}
            className={`p-[6px] rounded-full cursor-pointer ${
              index === activeScreen ? "bg-[#1C5356] px-4" : "bg-[#C9C9C9]"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <div className="my-6 px-2 md:px-8 w-full flex justify-center items-center rounded-lg bg-[#febb35]">
        <div className="flex justify-between w-full md:w-4/5  items-center">
          <div className="flex flex-col gap-2 items-start py-3">
            <span className="text-sm font-medium text-[#1C5356]">
              10% Cashback
            </span>

            <span className="text-base font-medium text-black">
              Grab The Deal Fast
            </span>
            <span className="text-sm font-medium text-[#4D4D4D]">
              Starting from <span className="text-base">₹2599</span>
            </span>
          </div>
          <Image
            src={bannerimg}
            alt=""
            className="mt-8 z-10 w-1/2 hidden md:flex"
          />

          <button
            onClick={() => router.push("/shop")}
            className="h-fit text-[#1C5356] rounded-md font-medium text-base bg-white px-3 py-2"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
