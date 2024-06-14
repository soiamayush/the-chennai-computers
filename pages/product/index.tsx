import CustomeNavbar from "@/components/ui/CustomeNavbar";
import PageDetails from "@/components/ui/PageDetails";
import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import keyboard from "@/public/keyboard.svg";
import mouse from "@/public/mouse.svg";
import gpu from "@/public/gpu.svg";
import cpu from "@/public/cpu.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import couponbg from "@/public/coupon.svg";
import productdesc from "@/public/productdesc.svg";
import productsdesc from "@/public/productsdesc.svg";
import Related from "@/components/productcomponent/Related";
import Label from "@/components/ui/Label";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const productData = [
  { image: cpu },
  { image: gpu },
  { image: keyboard },
  { image: mouse },
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const [showData, setShowData] = useState(0);
  const router = useRouter();

  const handlePrev = () => {
    if (index == 0) {
      setIndex(productData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index == productData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const [CartText, setCartText] = useState("Add to cart");

  const notify = () => toast.success("Item has been added to cart!!");

  const handleCart = (text: string) => {
    if (text === "addtocart") {
      notify();
      setCartText("Go to cart");
    } else if ("gotocart") {
      router.push("/cart");
    }
  };
  return (
    <div>
      <CustomeNavbar />
      <ToastContainer />
      <PageDetails
        title={"Shop"}
        tag={"Home / Gaming CPU / Crosshair RBG CPU"}
      />
      <div className="flex flex-col md:flex-row gap-6 justify-between  p-6 px-10">
        <div className="w-full md:w-2/5 gap-6 flex flex-col">
          <div
            className="p-2 relative w-full bg-[#f5f5f5] flex flex-col gap-4 items-center justify-center rounded-xl"
            style={{ height: "400px" }}
          >
            <Image
              src={productData[index].image}
              className="object-contain"
              alt=""
              height={300}
              width={300}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <div className="p-2 absolute bottom-0 left-0 w-full bg-[#f5f5f5] items-center rounded-b-xl flex justify-between">
              <div
                className="px-4 flex items-center p-2 text-[#FFBA35] border border-[#D5D5D5] rounded-full cursor-pointer"
                onClick={handleNext}
              >
                <WestIcon style={{ fontSize: "1.2rem" }} />
              </div>

              <div
                className="px-4 flex items-center p-2 text-white bg-[#FFBA35] border border-[#D5D5D5] rounded-full cursor-pointer"
                onClick={handlePrev}
              >
                <EastIcon style={{ fontSize: "1.2rem" }} />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            {productData.map((product, index) => (
              <div
                key={index}
                onClick={() => setIndex(index)}
                className="rounded-xl cursor-pointer bg-[#f5f5f5] flex items-center justify-center"
                style={{ height: "100px", width: "100px" }}
              >
                <Image
                  src={product.image}
                  alt=""
                  height={50}
                  width={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/5  flex flex-col gap-4 items-start">
          <span className="text-[#969696] font-semibold text-sm">Cabinet</span>
          <span className="text-black text-lg md:text-xl font-semibold ">
            CORSAIR SPEC-DELTA RGB (ATX) MID TOWER CABINET
          </span>
          <div className="flex gap-2 items-center text-base font-medium">
            <span className="">₹5,999</span>
            <span className="text-[#B7B3B3] line-through">₹10,000</span>
          </div>
          <span className="text-[#969696] font-medium text-sm">
            SKU : SNFNEWI3245
          </span>
          <span className="text-[#969696] font-normal text-sm">
            The Ant Esports ICE-590TG Gaming Cabinet is a true marvel for gamers
            and enthusiasts seeking the ultimate blend of style, performance,
            and customization. This meticulously designed cabinet boasts a
            remarkable cooling system, featuring four pre-installed 120mm ARGB
            fans that illuminate your gaming setup with mesmerizing colors.
          </span>
          <div className="flex gap-3 p-2 w-fit bg-[#EEEEEE] rounded-full items-center text-[#1C5356]">
            <div className="rounded-full  flex items-center bg-white cursor-pointer">
              <RemoveIcon className="m-1" style={{ fontSize: "0.8rem" }} />
            </div>
            <span className="text-base font-medium">1</span>
            <div className="rounded-full  flex items-center bg-white cursor-pointer">
              <AddIcon className="m-1" style={{ fontSize: "0.8rem" }} />
            </div>
          </div>
          <div className="flex gap-2 w-fit">
            <button
              onClick={() => router.push("/cart")}
              className="rounded-full bg-[#FFBA35] flex items-center text-[#1C5356]  font-semibold text-base p-3 px-5"
            >
              Buy Now
            </button>
            <button
              onClick={() => {
                if (CartText === "Add to cart") {
                  handleCart("addtocart");
                } else if (CartText === "Go to cart") {
                  handleCart("gotocart");
                }
              }}
              className="rounded-full  flex items-center text-[#1C5356] border border-[#cdcdcc] font-semibold text-base p-3 px-5"
            >
              {CartText}
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#969696] font-medium text-sm">
              Discount Coupon :
            </span>
            <div className="w-full relative">
              <Image className="w-full" alt="" src={couponbg} />
              <div className="flex flex-col transform rotate-[270deg] absolute left-[8%] sm:left-[10%] top-[18%] sm:top-[30%] gap-1 text-white text-sm sm:text-base md:text-xl font-bold">
                <span className="">Coupon</span>
                <span className="">Coupon</span>
                <span className="">Coupon</span>
              </div>
              <div className="absolute right-[12%] xs:right-[17%] sm:right-[23%] md:right-[16%] lg:right-[23%] top-[18%] sm:top-[22%]  flex flex-col gap-1 sm:gap-2 justify-center text-white">
                <span className=" text-base sm:text-lg md:text-xl font-semibold text-center">
                  GET EXTRA 15% OFF
                </span>
                <span className="text-sm text-center">
                  On Purchase Of 2 Cabinet
                </span>
                <span className="text-sm sm:text-base font-medium text-center">
                  USE CODE : <span className="text-[#FFBA35]">CAB15</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 w-4/5 mx-auto flex flex-col gap-6 justify-center">
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => setShowData(0)}
            className={`rounded-full justify-center ${
              showData === 0 ? "bg-[#FFBA35]" : "border border-[#cdcdcc]"
            }  flex items-center text-[#1C5356]  font-semibold text-base p-2 sm:p-3 px-5 h-fit`}
          >
            Description
          </button>
          <button
            onClick={() => setShowData(1)}
            className={`rounded-full justify-center ${
              showData === 1 ? "bg-[#FFBA35]" : "border border-[#cdcdcc]"
            }  flex items-center text-[#1C5356]  font-semibold text-base p-2 sm:p-3 px-5 h-fit`}
          >
            Additional Information
          </button>
        </div>
        <span className="border border-[#D9D9D9] w-full my-2"></span>
        {showData === 0 && (
          <div className="flex flex-col gap-2 justify-center w-full sm:w-4/5 mx-auto">
            <span className="text-sm font-medium text-[#515151]">
              The Ant Esports ICE-590TG Gaming Cabinet is a true marvel for
              gamers and enthusiasts seeking the ultimate blend of style,
              performance, and customization. This meticulously designed cabinet
              boasts a remarkable cooling system, featuring four pre-installed
              120mm ARGB fans that illuminate your gaming setup with mesmerizing
              colors. With the capacity to accommodate a whopping twelve 120mm
              fans in total, the ICE-590TG ensures your rig stays cool even
              during the most intense gaming sessions. Versatility is at the
              heart of this gaming cabinet, offering flexibility in storage
              configurations. Seamlessly fitting up to three HDDs and one SSD,
              or three SSDs and one HDD, it ensures your storage needs are
              effortlessly met. The support for EATX motherboards opens up a
              world of possibilities for high-performance setups, while the
              ability to house a 360mm radiator on top allows for advanced
              liquid cooling solutions. CPU air coolers up to 164mm in height
              find a perfect home here, providing efficient cooling for your
              high-performance processors.
            </span>
            <Image className="w-full " src={productdesc} alt="" />
            <span className="text-sm font-medium text-[#515151]">
              Incorporating a thoughtful design for optimal airflow, the
              ICE-590TG showcases side vents that enhance ventilation, keeping
              your components running at peak efficiency. This cabinet isn't
              just a powerhouse – it's a visual spectacle too. With its sleek
              aesthetics, tempered glass side panel, and the play of dynamic RGB
              lighting, your gaming setup will be the envy of all. Elevate your
              gaming experience with the Ant Esports ICE-590TG Gaming Cabinet,
              where innovation meets style, and performance knows no bounds.
            </span>
            <Image className="w-full " src={productsdesc} alt="" />
          </div>
        )}
        {showData === 1 && (
          <div className="flex border border-[#cececf] rounded-lg flex-col gap-2 justify-center w-full sm:w-4/5 mx-auto">
            <table className="min-w-full rounded-lg border-collapse border border-[#cececf] overflow-hidden">
              <thead className="bg-[#febb35]">
                <tr>
                  <th className="p-2 font-medium text-left px-6">Feature</th>
                  <th className="p-2 font-medium text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm ">
                  <td className="p-2 px-6 font-medium">
                    Dimension (L x W x H)
                  </td>
                  <td className="p-2">
                    Chassis Size: 365 x 200 x 456 mm
                    <br />
                    Packing Size: 490 x 247 x 420 mm
                  </td>
                </tr>
                <tr className="text-sm bg-[#F3F3F3]">
                  <td className="p-2 px-6 font-medium">Motherboard Type</td>
                  <td className="p-2">ATX, Micro-ATX, Mini-ITX</td>
                </tr>
                <tr className="text-sm ">
                  <td className="p-2 px-6 font-medium">
                    Liquid Cooling Support
                  </td>
                  <td className="p-2">
                    Front: 240/280 mm <br /> Rear: None <br /> Top: None
                  </td>
                </tr>
                <tr className="text-sm bg-[#F3F3F3]">
                  <td className="p-2 px-6 font-medium">Pre-Installed Fans</td>
                  <td className="p-2">
                    Front: x2 <br />
                    Rear: x1
                  </td>
                </tr>
                <tr className="text-sm ">
                  <td className="p-2 px-6 font-medium">
                    Dimension (L x W x H)
                  </td>
                  <td className="p-2">
                    Chassis Size: 365 x 200 x 456 mm
                    <br />
                    Packing Size: 490 x 247 x 420 mm
                  </td>
                </tr>
                <tr className="text-sm bg-[#F3F3F3]">
                  <td className="p-2 px-6 font-medium">Motherboard Type</td>
                  <td className="p-2">ATX, Micro-ATX, Mini-ITX</td>
                </tr>
                <tr className="text-sm ">
                  <td className="p-2 px-6 font-medium">
                    Liquid Cooling Support
                  </td>
                  <td className="p-2">ATX, Micro-ATX, Mini-ITX</td>
                </tr>
                <tr className="text-sm bg-[#F3F3F3]">
                  <td className="p-2 px-6 font-medium">Motherboard Type</td>
                  <td className="p-2">
                    Front: 240/280 mm <br />
                    Rear: None <br />
                    Top: None
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Related />
      <Label />
      <Footer />
    </div>
  );
};

export default Index;
