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
import {
  product,
  getcart,
  handleCart,
  removeCart,
  orderDetails,
} from "@/slice/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { toast } from "react-toastify";
import Link from "next/link";

interface CartItem {
  id: any;
  numOfItems: any;
}

const index = () => {
  const { cartData } = useSelector((state: any) => state.product); // Replace with actual selector path
  const [products, setProducts] = useState<any>({});
  const [cartRefresh, setCartRefresh] = useState(false);
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleCoupon = () => {};

  const handleRemove = (productId: any) => {
    dispatch(removeCart({ productId }))
      .unwrap()
      .then((res) => {
        toast.success("Item removed successfully!!");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setCartRefresh(!cartRefresh));
  };

  const navigate = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        await dispatch(getcart()); // Fetch cart items (if not already fetched in redux)
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    dispatch(orderDetails())
      .unwrap()
      .then((res) => {
        setPaymentDetails(res);
      })
      .catch((err) => toast.error(err.message));

    fetchCartItems();
  }, [cartRefresh]);

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

  const handleCartFunc = (type: any, id: any, itemslen: any) => {
    const payload: any = {
      type,
      id,
    };
    console.log(payload);
    dispatch(handleCart(payload))
      .unwrap()
      .catch((err: any) => {
        toast.error(err.message);
        console.log(err);
      })
      .finally(() => setCartRefresh(!cartRefresh));
  };

  return (
    <div>
      <CustomeNavbar />
      <PageDetails title={"Shopping Cart"} tag={"Home / Shopping Cart"} />
      {cartData?.cart?.items != 0 && (
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
                          <div onClick={() => handleRemove(item.id)}>
                            <CloseIcon className="cursor-pointer" />
                          </div>
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
                            <div
                              className="flex items-center bg-white rounded-full cursor-pointer"
                              onClick={() => handleCartFunc("remove", item?.id)}
                            >
                              <RemoveIcon
                                className="m-1"
                                style={{ fontSize: "0.8rem" }}
                              />
                            </div>
                            <span className="text-base font-medium">
                              {item.numOfItems}
                            </span>
                            <div
                              className="flex items-center bg-white rounded-full cursor-pointer"
                              onClick={() => handleCartFunc("add", item?.id)}
                            >
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
              <span className="text-sm font-semibold text-[#787878]">
                Items
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                {paymentDetails?.cartLen}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Sub Total
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                ₹ {paymentDetails?.subtotal}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Shipping
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                {`₹ ${
                  paymentDetails?.shippingPrice === 0
                    ? 0
                    : paymentDetails?.shippingPrice
                }`}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">Tax</span>
              <span className="text-sm font-semibold text-[#444444]">
                ₹ {paymentDetails?.tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Coupon Discount
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                - {paymentDetails?.couponDiscount}
              </span>
            </div>
            <div className="border w-full border-[#cececf]"></div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#000000]">
                Total
              </span>
              <span className="text-sm font-semibold text-[#000000]">
                ₹ {paymentDetails?.subtotal}
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
      )}

      {cartData?.cart?.items == 0 && (
        <div className="flex justify-center items-center h-[50vh] font-bold text-center gap-2 flex-col w-3/4 mx-auto">
          Your cart is eagerly waiting for that special something from The
          Chennai Computers.{" "}
          <Link href="/shop" className="underline">
            Click here to make it yours!
          </Link>
        </div>
      )}

      {cartData?.cart?.items != 0 && (
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
              <span className="text-sm font-semibold text-[#787878]">
                Items
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                {paymentDetails?.cartLen}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Sub Total
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                ₹ {paymentDetails?.subtotal}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Shipping
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                {`₹ ${
                  paymentDetails?.shippingPrice === 0
                    ? 0
                    : paymentDetails?.shippingPrice
                }`}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Tax (14%)
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                ₹ {paymentDetails?.tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#787878]">
                Coupon Discount
              </span>
              <span className="text-sm font-semibold text-[#444444]">
                -{paymentDetails?.couponDiscount}
              </span>
            </div>
            <div className="border w-full border-[#cececf]"></div>
            <div className="flex justify-between gap-3">
              <span className="text-sm font-semibold text-[#000000]">
                Total
              </span>
              <span className="text-sm font-semibold text-[#000000]">
                {paymentDetails?.subtotal}
              </span>
            </div>
            <button
              className="bg-[#FFBA35] text-base text-[#1C5356] flex items-center justify-center p-2 rounded-full font-semibold"
              onClick={() => navigate.push("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <Label />
      <Footer />
    </div>
  );
};

export default index;
