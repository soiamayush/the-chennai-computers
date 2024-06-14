import React from "react";
import Card from "@/components/ui/Card";
import product1 from "@/public/prodcut1.svg";
import product2 from "@/public/product2.svg";
import product3 from "@/public/product3.svg";

export const cardData = [
  {
    off: "30",
    image: product1,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product2,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product3,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product1,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product2,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product2,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product2,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
  {
    off: "30",
    image: product2,
    tag: "cabinet",
    title: "Crosshair RGB CPU Cabinet with ",
    discountAmount: "6999",
    amount: "10000",
  },
];

const Collection = () => {
  return (
    <div className="flex py-6 flex-col gap-6">
      <div className="flex w-full justify-center items-center text-[#1C5356] text-xl md:text-2xl font-medium">
        Our Products Collections
      </div>
      <div className="flex w-full justify-center gap-3 items-center flex-wrap">
        <div className="text-nowrap p-2 border border-[#D5D5D5] rounded-full text-[#1C5356] font-medium tex-base px-4 hover:bg-[#FFBA35] cursor-pointer">
          All Products
        </div>
        <div className="text-nowrap p-2 border border-[#D5D5D5] rounded-full text-[#1C5356] font-medium tex-base px-4 hover:bg-[#FFBA35] cursor-pointer">
          Latest Products
        </div>
        <div className="text-nowrap p-2 border border-[#D5D5D5] rounded-full text-[#1C5356] font-medium tex-base px-4 hover:bg-[#FFBA35] cursor-pointer">
          Gaming Mouse
        </div>
        <div className="text-nowrap p-2 border border-[#D5D5D5] rounded-full text-[#1C5356] font-medium tex-base px-4 hover:bg-[#FFBA35] cursor-pointer">
          Graphic Cards
        </div>
      </div>
      <div className="hide-horizontal-scrollbar flex items-center px-8 gap-4 md:gap-6 max-w-screen overflow-x-auto">
        {cardData && cardData.map((data) => <Card cardData={data} />)}
      </div>
    </div>
  );
};

export default Collection;
