import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const navigate = useRouter();
  return (
    <div className="w-full">
      <div className="flex justify-between px-6 py-2 items-center w-full">
        <Image
          src={logo}
          alt=""
          className=" w-1/3 sm:w-1/6 cursor-pointer"
          onClick={() => navigate.push("/")}
        />
        <div className="w-2/5 hidden sm:flex justify-between items-center border border-[#C9C9C9] rounded-lg">
          <input
            className="rounded-s-lg focus:outline-none w-full px-4 py-1 text-[#4D4D4D] text-sm"
            placeholder="Search for products..."
          ></input>
          <div className="flex items-center cursor-pointer rounded-e-lg gap-1 text-[#1C5356] bg-[#FFBA35] px-6 py-1">
            <SearchIcon className="text-base" /> Search
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center gap-4">
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="" />
            <span className="text-white absolute -top-1 -right-2 bg-[#FFBA35] text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer text-black items-end">
            <PermIdentityIcon />
            <span className=" text-sm font-medium">Account</span>
          </div>
        </div>
      </div>
      <div className="border w-full border-y border-y-[#C9C9C9]  justify-start gap-10 flex items px-8 py-3 shadow-xl">
        <div className="flex gap-2 text-black text-sm cursor-pointer items-center font-medium">
          <MenuIcon />
          Browse All Categories
        </div>
        <div className="border-s border-[#C9C9C9] my-1"></div>
        <div className="hidden sm:flex gap-4">
          <span className="text-sm font-medium cursor-pointer flex items-center font">
            Home
          </span>
          <span className="text-sm font-medium cursor-pointer flex items-center font">
            Shop By Brands <ExpandMoreIcon />
          </span>
          <span className="text-sm font-medium cursor-pointer flex items-center font">
            Accessories <ExpandMoreIcon />
          </span>
          <span className="text-sm font-medium cursor-pointer flex items-center font">
            Printers <ExpandMoreIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
