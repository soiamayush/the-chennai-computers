"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStore from "@/store/states";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useRouter();
  const { searchText, setSearchText }: any = useStore();
  const { userData } = useSelector((state: any) => state.user);
  const { cartData } = useSelector((state: any) => state.product);

  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    if (cartData?.cart?.items) setCartLength(cartData?.cart?.items.length);
  }, [cartData, userData]);

  const handleSearch = () => {
    if (searchText.length != 0) {
      navigate.push("/shop");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false); // State for Accessories dropdown
  const [isPrintersOpen, setIsPrintersOpen] = useState(false);

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
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <div
            onClick={handleSearch}
            className="flex items-center cursor-pointer rounded-e-lg gap-1 text-[#1C5356] bg-[#FFBA35] px-6 py-1"
          >
            <SearchIcon className="text-base" /> Search
          </div>
        </div>
        <div className="w-1/4 flex justify-center items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => navigate.push("/cart")}
          >
            <ShoppingCartIcon className="" />
            <span className="text-white absolute -top-1 -right-2 bg-[#FFBA35] text-xs rounded-full px-1">
              {cartLength}
            </span>
          </div>
          <div className="flex gap-2 cursor-pointer text-black items-end">
            <PermIdentityIcon />
            <span className=" text-sm font-medium">
              {userData ? (
                <span onClick={() => navigate.push("/userprofile")}>
                  {userData?.name?.split(" ")[0]}
                </span>
              ) : (
                <span onClick={() => navigate.push("/login")}>Account</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="border w-full border-y border-y-[#C9C9C9]  justify-start gap-10 flex items px-8 py-3 shadow-xl">
        <div
          className="flex gap-2 text-black text-sm cursor-pointer items-center font-medium relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <MenuIcon />
          Browse All Categories
          {isOpen && (
            <div className="dropdown-content absolute bg-white shadow-md mt-5 top-0 w-48 z-30">
              <div className="p-2 hover:bg-gray-100">Desktop Computers</div>
              <div className="p-2 hover:bg-gray-100">Laptops</div>
              <div className="p-2 hover:bg-gray-100">Tablets</div>
              <div className="p-2 hover:bg-gray-100">Monitors</div>
              <div className="p-2 hover:bg-gray-100">Storage Devices</div>
              <div className="p-2 hover:bg-gray-100">Input Devices</div>
              <div className="p-2 hover:bg-gray-100">Output Devices</div>
              <div className="p-2 hover:bg-gray-100">Networking Equipment</div>
              <div className="p-2 hover:bg-gray-100">Components</div>
              <div className="p-2 hover:bg-gray-100">Peripherals</div>
              <div className="p-2 hover:bg-gray-100">Software</div>
            </div>
          )}
        </div>

        <div className="border-s border-[#C9C9C9] my-1"></div>
        <div className="hidden sm:flex gap-4">
          <span className="text-sm font-medium cursor-pointer flex items-center font">
            Home
          </span>
          <div className="relative">
            <span
              className="text-sm font-medium cursor-pointer flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {" "}
              {/* Toggle dropdown on click */}
              Shop By Brands <ExpandMoreIcon />
            </span>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-5 top-0 w-48">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Brand A
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Brand B
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Brand C
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Brand D
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Brand E
                </div>
              </div>
            )}
          </div>
          {/* Accessories Dropdown */}
          <div className="relative">
            <span
              className="text-sm font-medium cursor-pointer flex items-center"
              onMouseEnter={() => setIsAccessoriesOpen(true)}
              onMouseLeave={() => setIsAccessoriesOpen(false)}
            >
              Accessories <ExpandMoreIcon />
            </span>
            {isAccessoriesOpen && (
              <div className="absolute bg-white shadow-md mt-1 w-48">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Accessory 1
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Accessory 2
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Accessory 3
                </div>
              </div>
            )}
          </div>

          {/* Printers Dropdown */}
          <div className="relative">
            <span
              className="text-sm font-medium cursor-pointer flex items-center"
              onMouseEnter={() => setIsPrintersOpen(true)}
              onMouseLeave={() => setIsPrintersOpen(false)}
            >
              Printers <ExpandMoreIcon />
            </span>
            {isPrintersOpen && (
              <div className="absolute bg-white shadow-md mt-1 w-48">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Printer 1
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Printer 2
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Printer 3
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
