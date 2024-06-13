"use client";
import React, { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";

const Cardpayment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;

    // Restrict input to 12 digits
    if (value.length <= 12) {
      setCardNumber(value);
    }
  };
  return (
    <div>
      <div className="  border border-collapse h-fit border-[#cececf] rounded-lg flex  items-start gap-4 p-3">
        <input
          className="appearance-none p-2 w-4 h-4 border border-gray-300 rounded-full checked:bg-[#1C5356] checked:border-transparent focus:outline-none"
          type="radio"
          name="payment"
        />
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-3 items-center">
            <WalletIcon />
            <span className="text-base font-medium text-[#4d4d4d]">
              Add New Credit/Debit Card
            </span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm md:text-base font-semibold ">
              Card Holder Name*
            </span>
            <input
              className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              placeholder="Enter Name"
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm md:text-base font-semibold ">
              Card Number
            </span>
            <input
              className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              placeholder="Enter Card Number"
              name="cardnum"
              type="number"
              maxLength={12}
              value={cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <span className="text-sm md:text-base font-semibold ">
                Expiry Date*
              </span>
              <input
                className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
                placeholder="--/--"
                name="cardnum"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <span className="text-sm md:text-base font-semibold ">CVV*</span>
              <input
                className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
                placeholder="---"
                name="cardnum"
                type="number"
              />
            </div>
          </div>
          <button className="bg-[#1C5356] text-base text-[#ffffff] flex items-center justify-center p-2 px-4 rounded-full w-fit font-semibold">
            Confirm payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardpayment;
