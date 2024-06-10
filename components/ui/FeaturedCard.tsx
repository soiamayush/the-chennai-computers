import React from "react";
import Image from "next/image";

const FeaturedCard = ({ card }: any) => {
  return (
    <div className="flex gap-2 justify-center items-center flex-col">
      <div className="bg-[#F5F5F5] rounded-full cursor-pointer flex items-center justify-center aspect-square w-48 h-48 p-4">
        <Image src={card.image} alt="" className=" w-3/4 h-3/4 object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[#262626] cursor-pointer text-base font-medium text-center">
          {card.title}
        </span>
        <span className="text-[#4D4D4D] cursor-pointer text-sm font-medium text-center">
          Discover {card.numOfProducts} Products
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
