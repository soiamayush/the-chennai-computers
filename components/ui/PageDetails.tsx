import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useStore from "@/store/states";

const PageDetails = ({ title, tag, isSearch }: any) => {
  const { searchText, setSearchText }: any = useStore();
  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div className="bg-[#f2f7f6] flex flex-col gap-3 justify-center items-center py-8">
      {isSearch && (
        <div className="w-3/4 md:w-1/2 flex justify-between items-center border border-[#C9C9C9] rounded-lg">
          <input
            className="rounded-s-lg flex items-center focus:outline-none w-full px-4 py-1 md:py-2 text-[#4D4D4D] text-sm"
            placeholder="Search for products..."
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <div className="flex items-center cursor-pointer rounded-e-lg gap-1 text-[#1C5356] bg-[#FFBA35] px-6 py-1 md:py-2 text-sm md:text-base">
            <SearchIcon className="text-sm md:text-base" /> Search
          </div>
        </div>
      )}
      <span className="font-semibold text-2xl text-center">{title}</span>
      <span className="text-sm text-[#4D4D4D] text-center font-semibold cursor-pointer">
        {tag}
      </span>
    </div>
  );
};

export default PageDetails;
