import React from "react";
import shipping from "@/public/shipping.svg";
import headphones from "@/public/headphone.svg";
import wallet from "@/public/wallet.svg";
import Image from "next/image";

const Label = () => {
  return (
    <div>
      <div className="flex justify-between sm:px-16 p-6 gap-3 flex-wrap gap-y-4 ">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Image
              src={shipping}
              alt=""
              className="absolute top-0 left-0"
              width={50}
            />
            <div className="p-4 bg-[#FFBA35] rounded-full ml-6 mt-4"></div>
          </div>
          <div className="flex h-fit flex-col gap-1">
            <span className="text-black text-base font-semibold">
              Free Shipping
            </span>
            <span className="text-[#4D4D4D] text-base font-medium">
              Free shipping for order above ₹500
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Image
              src={wallet}
              alt=""
              className="absolute top-0 left-0"
              width={50}
            />
            <div className="p-4 bg-[#FFBA35] rounded-full ml-6 mt-4"></div>
          </div>
          <div className="flex h-fit flex-col gap-1">
            <span className="text-black text-base font-semibold">
              Flexible Payment
            </span>
            <span className="text-[#4D4D4D] text-base font-medium">
              Multiple secure payment options
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Image
              src={headphones}
              alt=""
              className="absolute top-0 left-0"
              width={50}
            />
            <div className="p-4 bg-[#FFBA35] rounded-full ml-6 mt-4"></div>
          </div>
          <div className="flex h-fit flex-col gap-1">
            <span className="text-black text-base font-semibold">
              24 x 7 Support
            </span>
            <span className="text-[#4D4D4D] text-base font-medium">
              We support online all days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
