import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const PageDetails = ({ title, tag, isSearch }: any) => {
  return (
    <div className="bg-[#f2f7f6] flex flex-col gap-3 justify-center items-center py-8">
      {isSearch && (
        <div className="w-3/4 md:w-1/2 flex justify-between items-center border border-[#C9C9C9] rounded-lg">
          <input
            className="rounded-s-lg flex items-center focus:outline-none w-full px-4 py-1 md:py-2 text-[#4D4D4D] text-sm"
            placeholder="Search for products..."
          ></input>
          <div className="flex items-center cursor-pointer rounded-e-lg gap-1 text-[#1C5356] bg-[#FFBA35] px-6 py-1 md:py-2 text-sm md:text-base">
            <SearchIcon className="text-sm md:text-base" /> Search
          </div>
        </div>
      )}
      <span className="font-semibold text-2xl text-center">{title}</span>
      <span className="text-sm text-[#4D4D4D] font-semibold cursor-pointer">
        {tag}
      </span>
    </div>
  );
};

export default PageDetails;
