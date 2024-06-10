import React from "react";
import Card from "@/components/ui/Card";
import { cardData } from "../homecomponents/Collection";
const Related = () => {
  return (
    <div className="flex py-6 flex-col gap-6">
      <div className="flex w-full justify-center items-center text-[#1C5356] text-xl md:text-2xl font-medium">
        Explore Related Products
      </div>

      <div className="hide-horizontal-scrollbar flex items-center px-8 gap-4 md:gap-6 max-w-screen overflow-x-auto">
        {cardData.map((data) => (
          <Card cardData={data} />
        ))}
      </div>
    </div>
  );
};

export default Related;
