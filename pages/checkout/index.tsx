// index.js
import React, { useState } from "react";
import CustomeNavbar from "@/components/ui/CustomeNavbar";
import PageDetails from "@/components/ui/PageDetails";
import Modal from "./Modal";
import CityModal from "./Citymodal";
import { cities } from "./Modal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";

const Index = () => {
  const [showStateModal, setShowStateModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const handleStateClick = () => {
    setShowStateModal(true);
  };

  const handleCityClick = () => {
    if (selectedState) {
      setShowCityModal(true);
    }
  };

  const closeStateModal = () => {
    setShowStateModal(false);
  };

  const closeCityModal = () => {
    setShowCityModal(false);
  };

  const selectState = (state: any) => {
    setSelectedState(state);
    setAvailableCities(cities[state]);
    setSelectedCity(""); // Reset city selection when state changes
    closeStateModal();
  };

  const selectCity = (city: any) => {
    setSelectedCity(city);
    closeCityModal();
  };

  return (
    <div>
      <CustomeNavbar />
      <PageDetails title={"Checkout"} tag={"Home / Shopping Cart / Checkout"} />

      <div className="flex p-6 gap-6 md:gap-3 flex-col md:flex-row">
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <span className="text-base font-semibold md:text-lg">
            Delivery Address
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-semibold ">
              Street Address 1*
            </span>
            <input
              className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Street Address 1"
              name="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-semibold ">
              Landmark*
            </span>
            <input
              className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base  focus:outline-none font-medium"
              placeholder="Enter Landmark"
              name="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-semibold ">State*</span>
            <div className="border flex justify-between md:mr-6 w-full border-[#C9C9C9] rounded-lg items-center">
              <input
                className="w-full p-3 rounded-lg text-black text-base focus:outline-none font-medium"
                placeholder="Select state"
                name="address"
                value={selectedState}
                onClick={handleStateClick}
                readOnly
              />
              <ExpandMoreIcon className="text-[#C9C9C9] mx-2" />
            </div>
            <Modal
              showModal={showStateModal}
              closeModal={closeStateModal}
              selectState={selectState}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-semibold ">City*</span>
            <div className="border flex justify-between md:mr-6 w-full border-[#C9C9C9] rounded-lg items-center">
              <input
                className="w-full p-3 rounded-lg text-black text-base focus:outline-none font-medium"
                placeholder="Select city"
                name="address"
                value={selectedCity}
                onClick={handleCityClick}
                readOnly
              />
              <ExpandMoreIcon className="text-[#C9C9C9] mx-2" />
            </div>
            <CityModal
              showModal={showCityModal}
              closeModal={closeCityModal}
              cities={availableCities}
              selectCity={selectCity}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-semibold ">
              Zip code*
            </span>
            <input
              className="border w-full p-3 md:pr-6 border-[#C9C9C9] rounded-lg text-black text-base focus:outline-none font-medium"
              placeholder="Enter zip code"
              name="address"
              type="number"
              maxLength={6}
            />
          </div>
        </div>
        <div className="w-full mx-auto md:w-1/4 border border-collapse h-fit border-[#cececf] rounded-lg flex flex-col gap-3 p-3">
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
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default Index;
