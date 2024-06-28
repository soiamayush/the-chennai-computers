import CustomeNavbar from "@/components/ui/CustomeNavbar";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import PageDetails from "@/components/ui/PageDetails";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import gpu from "@/public/gpu.svg";
import cpu from "@/public/cpu.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { product, getcart } from "@/slice/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";

interface CartItem {
  id: any;
  numOfItems: any;
}

const index = () => {
  const { cartData } = useSelector((state: any) => state.product); // Replace with actual selector path
  const [products, setProducts] = useState<any>({});
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleCoupon = () => {};

  const handleRemove = () => {};

  const navigate = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        await dispatch(getcart()); // Fetch cart items (if not already fetched in redux)
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [dispatch]);

  const findProduct = async (id: string) => {
    try {
      const res = await dispatch(product(id)); // Fetch product details
      console.log(res);
      const productData: any = res.payload.product; // Assuming your API returns product data
      setProducts((prevProducts) => ({
        ...prevProducts,
        [id]: productData,
      }));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    cartData?.cart?.items.forEach((item: any) => {
      if (!products[item.id]) {
        findProduct(item.id);
      }
    });
    console.log(cartData);
    console.log(products);
  }, [cartData, products]);

  return (
    <div>
      <CustomeNavbar />
      <PageDetails title={"Shopping Cart"} tag={"Home / Shopping Cart"} />
      <div className="p-6 flex gap-3">
        <div className="w-full md:w-3/4 h-fit overflow-x-auto  border border-collapse border-[#cececf] rounded-lg">
          <div className="flex flex-col gap-2 justify-center w-full mx-auto">
            <table className="min-w-full border border-[#cececf] rounded-lg overflow-hidden">
              <thead className="bg-[#febb35]">
                <tr>
                  <th className="p-2 px-6 font-medium text-left">Product</th>
                  <th className="p-2 font-medium text-left">Price</th>
                  <th className="p-2 font-medium text-left">Quantity</th>
                  <th className="p-2 font-medium text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartData?.cart?.items &&
                  cartData?.cart?.items.map((item: any) => (
                    <tr className="text-sm">
                      <td className="p-2 flex items-center gap-2">
                        <CloseIcon className="cursor-pointer" />
                        <div className="flex items-center gap-2">
                          <div
                            className="flex items-center justify-center bg-[#f5f5f5] rounded-xl cursor-pointer"
                            style={{ height: "50px", width: "50px" }}
                          >
                            <Image
                              src={products[item?.id]?.images[0]?.url}
                              alt="Product Image"
                              height={40}
                              width={60}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex flex-col justify-between gap-1 w-3/4 md:w-4/5">
                            <span className="text-sm text-[#969696]">
                              {products[item?.id]?.category}
                            </span>
                            <span className="text-base text-black">
                              {truncateText(
                                "Corsair Spec-Delta RGB(ATX) Mid Tower Cabinet",
                                30
                              )}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 w-1/4 md:w-1/6">
                        {products[item?.id]?.discountAmount}
                      </td>
                      <td className="p-2 w-1/4 md:w-1/6">
                        <div className="flex items-center gap-3 p-2 w-fit bg-[#EEEEEE] rounded-full text-[#1C5356]">
                          <div className="flex items-center bg-white rounded-full cursor-pointer">
                            <RemoveIcon
                              className="m-1"
                              style={{ fontSize: "0.8rem" }}
                            />
                          </div>
                          <span className="text-base font-medium">
                            {item.numOfItems}
                          </span>
                          <div className="flex items-center bg-white rounded-full cursor-pointer">
                            <AddIcon
                              className="m-1"
                              style={{ fontSize: "0.8rem" }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 w-1/4 md:w-1/6">₹1200</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:w-1/4 border border-collapse h-fit border-[#cececf] rounded-lg hidden md:flex flex-col gap-3 p-3">
          <span className="text-base font-semibold ">Order Summary</span>
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
          <button
            onClick={() => navigate.push("/checkout")}
            className="bg-[#FFBA35] text-base text-[#1C5356] flex items-center justify-center p-2 rounded-full font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 p-6 justify-between">
        <div className="w-fit h-fit flex gap-2 flex-wrap">
          <input
            className="p-3 rounded-full h-fit  flex items-center justify-center focus:outline-none text-sm text-[#afafaf] border-[#afafaf] border"
            placeholder="Enter Coupon Code"
          />
          <button
            onClick={handleCoupon}
            className="bg-[#1C5356] h-fit w-fit  text-[#ffffff] flex items-center justify-center p-3 rounded-full text-sm font-semibold"
          >
            Apply Coupon
          </button>
        </div>
        <div className="flex md:hidden border border-collapse h-fit border-[#cececf] rounded-lg  flex-col gap-3 p-3">
          <span className="text-base font-semibold ">Order Summary</span>
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

export default index;
