import Navbar from "@/components/ui/Navbar";
import Herosection from "@/components/homecomponents/Herosection";
import Collection from "@/components/homecomponents/Collection";
import Featured from "@/components/homecomponents/Featured";
import Trending from "@/components/homecomponents/Trending";
import Footer from "@/components/ui/Footer";

export default function Home() {
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
