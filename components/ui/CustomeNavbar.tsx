import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomeNavbar = () => {
  const navigate = useRouter();
  return (
    <div className="w-full">
      <div className="flex shadow-xl justify-between px-6 py-2 items-center w-full border-b border-b-[#C9C9C9]">
        <Image
          src={logo}
          alt=""
          className=" w-1/3 sm:w-1/6 cursor-pointer"
          onClick={() => navigate.push("/")}
        />

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

        <div className="w-1/4 flex justify-center items-center gap-4">
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="" />
            <span className="text-white absolute -top-1 -right-2 bg-[#FFBA35] text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div
            onClick={() => navigate.push("/login")}
            className="flex gap-2 cursor-pointer text-black items-end"
          >
            <PermIdentityIcon />
            <span className=" text-sm font-medium">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomeNavbar;
