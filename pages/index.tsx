import Navbar from "@/components/ui/Navbar";
import Herosection from "@/components/homecomponents/Herosection";
import Collection from "@/components/homecomponents/Collection";
import Featured from "@/components/homecomponents/Featured";
import Trending from "@/components/homecomponents/Trending";
import Footer from "@/components/ui/Footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { AllProduct, getcart } from "@/slice/product";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(AllProduct({}));
    dispatch(getcart());
  }, []);

  return (
    <div className="">
      <Navbar />
      <Herosection />
      <Collection />
      <Featured />
      <Trending />
      <Footer />
    </div>
  );
}
