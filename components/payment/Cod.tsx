import React from "react";
import cod from "@/public/cod.svg";
import Image from "next/image";
const Cod = () => {
  return (
    <div className=" border border-collapse h-fit border-[#cececf] rounded-lg flex   gap-2  p-4 items-center">
      <input
        className="appearance-none p-2  w-4 h-4 border border-gray-300 rounded-full checked:bg-[#1C5356] checked:border-transparent focus:outline-none"
        type="radio"
        name="payment"
      />
      <Image alt="" src={cod} className="" />
      <span className="text-[#4d4d4d] font-medium text-sm">Google pay</span>
    </div>
  );
};

export default Cod;
