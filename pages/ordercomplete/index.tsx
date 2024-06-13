import CustomeNavbar from "@/components/ui/CustomeNavbar";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import PageDetails from "@/components/ui/PageDetails";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const index = () => {
  return (
    <div>
      <CustomeNavbar />
      <PageDetails
        title={"Order Complete"}
        tag={"Home / Shopping Cart / Checkout / Billing / Order Complete"}
      />
      <div className="flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-[#FFBA35] flex justify-center items-center text-[#1C5356]">
            <DoneIcon style={{ fontSize: "2rem" }} />
          </div>
          <span className="text-base md:text-lg font-semibold text-center">
            Your order is completed!
          </span>
          <span className="text-sm font-semibold text-[#4A4A4A] text-center">
            Thank you, Your order has been received.
          </span>
        </div>
        <div className="w-[90%] mx-auto flex p-4 px-6 md:px-12 justify-between items-center bg-[#FFBA35] rounded-lg  gap-3 flex-wrap">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Order ID</span>
            <span className="text-sm font-medium">#NFE212F23</span>
          </div>

          <div className="border-l border-l-black h-full pt-8"></div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Payment Method</span>
            <span className="text-sm font-medium">Paypal</span>
          </div>
          <div className="border-l border-l-black h-full pt-8"></div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Transaction ID</span>
            <span className="text-sm font-medium">TER24DF333</span>
          </div>
          <div className="border-l border-l-black h-full pt-8"></div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Estimate Delivery Date</span>
            <span className="text-sm font-medium">12 June 2024</span>
          </div>
        </div>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default index;
