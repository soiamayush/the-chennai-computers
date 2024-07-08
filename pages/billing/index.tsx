// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import loadScript from "@/utils/loadScript";
import { RootState, AppDispatch } from "@/store";
import { orderSave, payment } from "@/slice/order";
import { orderDetails } from "@/slice/product";
import CustomeNavbar from "@/components/ui/CustomeNavbar";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import PageDetails from "@/components/ui/PageDetails";

// Define TypeScript interfaces for state and props (if needed)
interface PaymentDetails {
  cartLen: number;
  subtotal: number;
  shippingPrice: number;
  tax: number;
  couponDiscount: number;
}

{
  /* <style jsx global>{
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
}</style>; */
}

declare global {
  interface Window {
    Razorpay: any; // You can replace 'any' with a more specific type if you have the details of the Razorpay object structure.
  }
}

const BillingComponent: React.FC = () => {
  const navigate = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: any) => state?.user);
  // Select the relevant part of the Redux state and type it
  const orderData = useSelector((state: any) => state.order.orderData);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null
  );

  // Load Razorpay script and update payment details from Redux state
  useEffect(() => {
    if (orderData) {
      setPaymentDetails(orderData as PaymentDetails);
    }
    dispatch(orderDetails())
      .unwrap()
      .then((res: any) => {
        setPaymentDetails(res as PaymentDetails);
      })
      .catch((err: any) => toast.error(err.message));
  }, [dispatch, orderData]);

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  // Handle the payment process
  const handlePayment = async () => {
    const storedOrderDetails = sessionStorage.getItem("orderDetails");
    const orderInfo = storedOrderDetails
      ? (JSON.parse(storedOrderDetails) as PaymentDetails)
      : null;

    console.log(orderInfo);

    if (!orderInfo || !paymentDetails?.subtotal) {
      toast.error("Payment details are incomplete.");
      return;
    }

    dispatch(payment({ amount: paymentDetails?.subtotal })) // Assuming subtotal needs to be in paise
      .unwrap()
      .then((paymentInfo) => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: paymentInfo.amount,
          currency: "INR",
          name: "The chennai computers",
          description: "Transaction Description",
          image:
            "hhttps://res.cloudinary.com/dffjppnlr/image/upload/v1719860388/weoioqbvlcrgq64j5mhm.png",
          order_id: paymentInfo.id,
          handler: function (response: any) {
            saveOrder();
            toast.success("Payment Successful");
            navigate.push("/ordercomplete");
          },
          prefill: {
            name: userData?.name,
            email: userData?.email,
            contact: userData?.phone || "5555555555",
          },
          theme: {
            color: "#FFBA35",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const saveOrder = () => {
    // Retrieving stored order and payment details from session storage
    const storedOrderDetails = sessionStorage.getItem("orderDetails");
    const orderInfo = storedOrderDetails
      ? JSON.parse(storedOrderDetails)
      : null;

    if (!orderInfo) {
      toast.error("Order details are missing.");
      return;
    }

    // Constructing the shippingInfo and paymentInfo based on the retrieved data
    const shippingInfo = {
      street: orderInfo.street,
      city: orderInfo.city,
      postalCode: orderInfo.postalCode,
      state: orderInfo.state,
      phoneNo: orderInfo.phoneNo,
      landmark: orderInfo.landmark,
    };

    // Extract payment details from paymentDetails stored in state or session
    const paymentDetails = orderInfo?.paymentDetails;

    // Construct the complete order payload
    const payload = {
      orderItems: [], // This should be filled with the actual items from the cart
      shippingInfo,
      itemsPrice: paymentDetails?.subtotal,
      taxPrice: paymentDetails?.tax,
      shippingPrice: paymentDetails?.shippingPrice,
      totalPrice: paymentDetails?.subtotal,
      paymentInfo: {
        id: paymentDetails?.paymentId || "", // Example: this should be the transaction ID from your payment gateway
        status: "Paid", // Update according to the payment status received from your payment gateway
      },
      user: "", // This should be set from the authenticated user's ID
    };

    // Dispatch the createOrder Redux action
    dispatch(orderSave(payload))
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Order placed successfully");
        navigate.push("/ordercomplete");
      })
      .catch((err) => {
        toast.error(err.message || "Error placing order");
      });
  };

  return (
    <div>
      <CustomeNavbar />
      <PageDetails
        title={"Billing"}
        tag={"Home / Shopping Cart / Checkout / Billing"}
      />
      <div className="p-6 flex flex-col md:flex-row gap-4">
        {/* <div className="w-full flex flex-col gap-4 md:w-3/4">
        <Paypal />
        <Gpay />
        <Visa />
        <Cod />
        <Cardpayment />
      </div> */}

        <div className="w-3/4 mx-auto border border-collapse h-fit border-[#cececf] rounded-lg flex flex-col gap-3 p-3">
          <span className="text-base font-semibold">Order Summary</span>
          <div className="border w-full border-[#cececf]"></div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">Items</span>
            <span className="text-sm font-semibold text-[#444444]">
              {paymentDetails?.cartLen}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Sub Total
            </span>
            <span className="text-sm font-semibold text-[#444444]">
              ₹{paymentDetails?.subtotal}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Shipping
            </span>
            <span className="text-sm font-semibold text-[#444444]">
              {" "}
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
              ₹{paymentDetails?.tax?.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#787878]">
              Coupon Discount
            </span>
            <span className="text-sm font-semibold text-[#444444]">
              -₹{paymentDetails?.couponDiscount}
            </span>
          </div>
          <div className="border w-full border-[#cececf]"></div>
          <div className="flex justify-between gap-3">
            <span className="text-sm font-semibold text-[#000000]">Total</span>
            <span className="text-sm font-semibold text-[#000000]">
              ₹{paymentDetails?.subtotal}
            </span>
          </div>
          <button
            onClick={handlePayment}
            className="bg-[#FFBA35] text-base text-[#1C5356] flex items-center justify-center p-2 rounded-full font-semibold"
          >
            Confirm payment
          </button>
        </div>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default BillingComponent;
