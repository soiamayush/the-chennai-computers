import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ cardData }: any) => {
  const truncate = (input: string) => {
    if (input.length > 25) {
      return input.substring(0, 25) + "...";
    }
    return input;
  };

  const router = useRouter();
  return (
    <div
      className="flex flex-col min-w-60 w-60 cursor-pointer"
      onClick={() => router.push(`/product/${cardData._id}`)}
    >
      <div className="relative w-full h-60">
        <Image
          src={cardData?.images[0]?.url}
          layout="fill"
          objectFit="cover"
          className="rounded"
          alt={cardData?.name}
        />
      </div>
      <div className="flex flex-col p-2">
        <span className="text-sm text-[#B7B3B3] font-medium">
          {cardData?.category}
        </span>
        <span className="text-base font-medium">
          {truncate(cardData?.name)}
        </span>
        <div className="flex gap-2 items-center text-sm font-medium">
          <span className="">₹{cardData?.price}</span>
          <span className="text-[#B7B3B3] line-through">
            ₹{cardData?.discountAmount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
