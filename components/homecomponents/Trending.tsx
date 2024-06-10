import React from "react";
import { cardData } from "./Collection";
import Card from "../ui/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Trending = () => {
  return (
    <div className="flex flex-col gap-6 px-6 md:px-8">
      <span className="text-xl md:text-3xl text-[#1C5356] font-semibold">
        Trending Products
      </span>
      <div className="flex  gap-8 flex-wrap justify-center sm:justify-between">
        {cardData.map((data) => (
          <Card cardData={data} />
        ))}
      </div>
      <div className="w-full flex justify-end">
        {" "}
        <div className="h-fit flex text-sm md:text-sm items-center gap-2 text-[#FFBA35] cursor-pointer font-semibold px-4">
          view more
          <span className=" h-fit rounded-full bg-[#FFBA35] flex items-center text-[#1C5356]">
            <ChevronRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trending;
