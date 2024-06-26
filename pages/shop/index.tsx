"use client";
import RangeComponent from "@/components/searchcomponents/Slider";
import CustomeNavbar from "@/components/ui/CustomeNavbar";
import PageDetails from "@/components/ui/PageDetails";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@/components/ui/Card";
import Paginate from "@/components/ui/Pagination";
import Footer from "@/components/ui/Footer";
import Label from "@/components/ui/Label";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { AllProduct } from "@/slice/product";
import useStore from "@/store/states";

const Index: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showmodal, setShowmodal] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [valueA, setValueA] = useState<number>(500);
  const [valueB, setValueB] = useState<number>(500000);
  const [totalPage, setTotalPage] = useState(1);
  const [sorting, setSorting] = useState("");

  const { searchText }: any = useStore((state) => state);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { allProduct }: any = useSelector((state: any) => state.product);
  const [products, setProducts] = useState<any>(null);

  const handleSortOptionClick = (option: string) => {
    setFilters((prevFilters) => {
      // Define the sort options
      const highToLow = "Price: high to low";
      const lowToHigh = "Price: low to high";
      if (option === highToLow) setSorting("-price");
      else setSorting("price");

      // Remove the opposite sort option if it exists
      let updatedFilters = prevFilters.filter(
        (filter) => filter !== highToLow && filter !== lowToHigh
      );

      // Add the new sort option if it wasn't already present
      if (!updatedFilters.includes(option)) {
        updatedFilters = [...updatedFilters, option];
      }

      return updatedFilters;
    });
    setShowmodal(false);
  };

  const handleRemove = (i: number) => {
    setFilters((prev) => {
      const newFilters = [...prev];
      newFilters.splice(i, 1);
      return newFilters;
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setFilters((prevFilters) => {
      if (checked) {
        return [...prevFilters, value];
      } else {
        return prevFilters.filter((filter) => filter !== value);
      }
    });
  };

  const handleRangeChange = (valueA: number, valueB: number) => {
    if (valueA !== 500 || valueB !== 500000) {
      setFilters((prevFilters) => {
        const rangeFilter = `₹${Math.min(valueA, valueB)} - ₹${Math.max(
          valueB,
          valueA
        )}`;
        const newFilters = prevFilters.filter(
          (filter) => !filter.includes("₹")
        );
        return [...newFilters, rangeFilter];
      });
    } else {
      setFilters((prevFilters) =>
        prevFilters.filter((filter) => !filter.includes("₹"))
      );
    }
  };

  const [totalCount, setTotalCount] = useState(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(
          AllProduct({
            maxPrice: valueB,
            minPrice: valueA,
            keyword: searchText,
            currentPage,
            sorting: sorting,
          })
        )
          .unwrap()
          .then((res) => {
            setProducts(res.products);
            console.log(res);
            setTotalPage(Math.ceil(res.productsCount / res.resPerPage));
            setTotalCount(res.productsCount);
            setData(res);
          });
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, [filters, currentPage, sorting]);

  return (
    <div>
      <CustomeNavbar />
      <PageDetails title="Shop" tag="Home / Gaming CPU" isSearch={true} />
      <div className="flex gap-3 p-4 ">
        <div className=" hidden md:flex flex-col gap-4 w-1/4 lg:w-1/5">
          <span className="text-xl md:text-2xl font-semibold px-2">
            Filter Options
          </span>
          <div className="border-y border-y-[#c3c3c3] p-2 py-4 flex flex-col gap-2">
            <span className="text-xl font-semibold text-[#292929]">Brands</span>
            <div className="flex flex-col gap-2 max-h-52 scrollbar-vertical-thin overflow-y-auto">
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Cross Hair"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Cross Hair
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Razor"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Razor
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="AMD"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  AMD
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Ant Esport"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Ant Esport
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Zebronics"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Zebronics
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Razor"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Razor
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="AMD"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  AMD
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Ant Esport"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Ant Esport
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="checkbox-custom cursor-pointer"
                  type="checkbox"
                  value="Zebronics"
                  onChange={handleCheckboxChange}
                />
                <label className="text-[#545454] font-semibold text-sm">
                  Zebronics
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-xl font-semibold text-[#292929]">
              Price Range
            </span>
            <div className="max-w-fit flex flex-wrap items-center justify-center">
              <RangeComponent
                min={500}
                max={500000}
                step={1}
                dual
                valueA={valueA}
                setValueA={setValueA}
                valueB={valueB}
                setValueB={setValueB}
                onRangeChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-1 sm:px-3">
          <div className="flex w-full text-[#4d4d4d] justify-start sm:justify-between flex-wrap flex-row gap-4">
            <span className="text-base font-semibold w-fit">
              Showing {(currentPage - 1) * data?.resPerPage + 1} -
              {currentPage * data?.resPerPage} of {totalCount} results
            </span>
            <div className="flex gap-3 flex-row items-center">
              <span className="text-base font-semibold">Sort By :</span>
              <div
                onClick={() => setShowmodal(!showmodal)}
                className="relative flex gap-1 p-2 cursor-pointer rounded-full border border-[#4D4D4D]"
              >
                {filters.length === 0
                  ? "Default sorting"
                  : filters[filters.length - 1]}

                {showmodal ? (
                  <KeyboardArrowUpIcon style={{ fontSize: "1.5rem" }} />
                ) : (
                  <ExpandMoreIcon style={{ fontSize: "1.5rem" }} />
                )}
                {showmodal && (
                  <div className="absolute top-[110%] left-0 w-full rounded-md flex flex-col border border-[#4d4d4d] bg-white z-50">
                    <span
                      className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      onClick={() =>
                        handleSortOptionClick("Price: low to high")
                      }
                    >
                      Price: low to high
                    </span>
                    <span
                      className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      onClick={() =>
                        handleSortOptionClick("Price: high to low")
                      }
                    >
                      Price: high to low
                    </span>
                    {/* <span
                      className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      onClick={() => handleSortOptionClick("Popularity")}
                    >
                      Popularity
                    </span> */}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-3 my-3 flex-wrap items-center">
            <span className="text-base font-medium text-[#4d4d4d]">
              Active Filters
            </span>
            {filters &&
              filters.map((elem, index) => (
                <div
                  className="items-center flex gap-2 rounded-full p-2 px-3 bg-[#FFBA35] text-[#1C5356] text-sm"
                  key={index}
                >
                  {elem}
                  <span className="" onClick={() => handleRemove(index)}>
                    <CloseIcon
                      style={{ fontSize: "1rem" }}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              ))}
            {filters.length !== 0 && (
              <span
                className="text-sm cursor-pointer underline font-medium text-[#4d4d4d]"
                onClick={() => setFilters([])}
              >
                Clear All
              </span>
            )}
          </div>

          <div className="flex flex-wrap justify-center sm:justify-between gap-3 p-2 max-h-[150vh] overflow-y-auto hide-horizontal-scrollbar">
            {products &&
              products.map((product: any) => (
                <Card cardData={product} key={product._id} />
              ))}
          </div>

          <Paginate
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Label />
      <Footer />
    </div>
  );
};

export default Index;
