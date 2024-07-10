"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

const CustomeNavbar = () => {
  const navigate = useRouter();
  const { cartData } = useSelector((state: any) => state.product); // Replace with actual selector path
  const { userData } = useSelector((state: any) => state.user);
  const [cartLength, setCartLength] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false); // State for Accessories dropdown
  const [isPrintersOpen, setIsPrintersOpen] = useState(false);
  useEffect(() => {
    setCartLength(cartData?.cart?.items.length);
  }, [cartData, userData]);
  return (
    <div className="w-full">
      <div className="flex shadow-xl justify-between px-6 py-2 items-center w-full border-b border-b-[#C9C9C9]">
        <Image
          src={logo}
          alt=""
          className=" w-1/3 sm:w-1/6 cursor-pointer"
          onClick={() => navigate.push("/")}
        />
        <div className=" w-full  justify-start gap-10 flex items px-8 py-3 ">
          <div className="hidden sm:flex gap-4">
            <span
              className="text-sm font-medium cursor-pointer flex items-center font"
              onClick={() => navigate.push("/")}
            >
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
                <div
                  className="absolute z-30 bg-white shadow-md rounded-lg mt-5 top-0 lg:-left-40 -left-80 text-base p-6 w-fit flex gap-4 lg:gap-20 font-medium text-black"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Deep cool</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        CPU Cooler
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet paste
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Thermal fan
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Ant Esports</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        SSD
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Speakers
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Motherboard
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Intel</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I3 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I5 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I7 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I9 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Intel graphic card
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">
                        AMD Generation
                      </span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        7000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        5000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        4000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        3000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        2000 series
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {" "}
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Ant Esports</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        SSD
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Speakers
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Motherboard
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {" "}
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Intel</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I3 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I5 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I7 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I9 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Intel graphic card
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Deep cool</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        CPU Cooler
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet paste
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Thermal fan
                      </span>
                    </div>
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
                <div
                  className="absolute z-30 bg-white shadow-md rounded-lg mt-5 top-0 lg:-left-60 -left-[29rem] overflow-x-auto max-w-screen text-base p-6 w-fit flex gap-4 lg:gap-20 font-medium text-black"
                  onMouseEnter={() => setIsAccessoriesOpen(true)}
                  onMouseLeave={() => setIsAccessoriesOpen(false)}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Deep cool</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        CPU Cooler
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet paste
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Thermal fan
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Ant Esports</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        SSD
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Speakers
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Motherboard
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Intel</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I3 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I5 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I7 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I9 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Intel graphic card
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">
                        AMD Generation
                      </span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        7000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        5000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        4000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        3000 series
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        2000 series
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {" "}
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Ant Esports</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        SSD
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Speakers
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Motherboard
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">AMD</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 3
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 5
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 7
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        AMD Ryzen 9
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Ryzen Threadripper
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {" "}
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Intel</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I3 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I5 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I7 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Core I9 processor
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Intel graphic card
                      </span>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <span className="font-semibold  pb-2">Deep cool</span>
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        CPU Cooler
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Power Supply
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Cabinet paste
                      </span>{" "}
                      <span
                        className="cursor-pointer text-gray-600 w-full text-start text-nowrap"
                        onClick={() => navigate.push("/shop")}
                      >
                        Thermal fan
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Printers Dropdown */}
            {/* <div className="relative">
            <span
              className="text-sm font-medium cursor-pointer flex items-center"
              onMouseEnter={() => setIsPrintersOpen(true)}
              onMouseLeave={() => setIsPrintersOpen(false)}
            >
              Printers <ExpandMoreIcon />
            </span>
            {isPrintersOpen && (
              <div className="absolute bg-white shadow-md rounded-lg mt-1 w-48">
                <div className="p-2 hover:bg-gray-100 cursor-pointer font-semibold">
                  Printer 1
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer font-semibold">
                  Printer 2
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer font-semibold">
                  Printer 3
                </div>
              </div>
            )}
          </div> */}
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
          <div
            onClick={() => navigate.push("/login")}
            className="flex gap-2 cursor-pointer text-black items-end"
          >
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
    </div>
  );
};

export default CustomeNavbar;
