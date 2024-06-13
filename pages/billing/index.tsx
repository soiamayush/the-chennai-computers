"use client";
import Cardpayment from "@/components/payment/Cardpayment";
import Cod from "@/components/payment/Cod";
import Gpay from "@/components/payment/Gpay";
import Paypal from "@/components/payment/Paypal";
import Visa from "@/components/payment/Visa";
import CustomeNavbar from "@/components/ui/CustomeNavbar";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import PageDetails from "@/components/ui/PageDetails";
import React from "react";

<style jsx global>{`
  input[type="radio"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid #cececf;
    background-color: #fff;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  input[type="radio"]:checked::before {
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`}</style>;

const index = () => {
  return (
    <div>
      <CustomeNavbar />
      <PageDetails
        title={"Billing"}
        tag={"Home / Shopping Cart / Checkout / Billing"}
      />
      <div className="p-6 flex flex-col md:flex-row gap-4">
        <div className="w-full flex flex-col gap-4 md:w-3/4">
          <Paypal />
          <Gpay />
          <Visa />
          <Cod />
          <Cardpayment />
        </div>

        <div className="w-full  md:w-1/4 border border-collapse h-fit border-[#cececf] rounded-lg flex flex-col gap-3 p-3">
          <span className="text-base font-semibold">Order Summary</span>
          <div className="border w-full border-[#cececf]"></div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">Items</span>
            <span className="text-sm font-semibold text-[#444444]">5</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Sub Total
            </span>
            <span className="text-sm font-semibold text-[#444444]">
              ₹24,500
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Shipping
            </span>
            <span className="text-sm font-semibold text-[#444444]">₹00</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">Tax</span>
            <span className="text-sm font-semibold text-[#444444]">₹3,450</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Coupon Discount
            </span>
            <span className="text-sm font-semibold text-[#444444]">
              -₹17,500
            </span>
          </div>
          <div className="border w-full border-[#cececf]"></div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#000000]">Total</span>
            <span className="text-sm font-semibold text-[#000000]">
              ₹10,450
            </span>
          </div>
          <button className="bg-[#FFBA35] text-base text-[#1C5356] flex items-center justify-center p-2 rounded-full font-semibold">
            Confirm payment
          </button>
        </div>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default index;
