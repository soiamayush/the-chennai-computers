import React from "react";
import Image from "next/image";

const Card = ({ cardData }: any) => {
  const truncate = (input: string) => {
    if (input.length > 25) {
      return input.substring(0, 25) + "...";
    }
    return input;
  };
  return (
    <div className="flex flex-col min-w-60 w-60 cursor-pointer">
      <div className="relative">
        <Image src={cardData.image} className="" alt="" />
      </div>
      <div className="flex flex-col p-2">
        <span className="text-sm text-[#B7B3B3] font-medium">Cabinet</span>
        <span className="text-base font-medium">
          {truncate(cardData.title)}
        </span>
        <div className="flex gap-2 items-center text-sm font-medium">
          <span className="">₹{cardData.discountAmount}</span>
          <span className="text-[#B7B3B3] line-through">
            ₹{cardData.amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
