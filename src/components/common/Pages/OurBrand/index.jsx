"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/OurBrands/OurBrands.png";
import ImageBanner from "../../Layout/Banner";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PRODUCT_DATA } from "@/lib/constants";
import axios from "axios";

export default function OurBrand({ onProductClick }) {
  // const BRAND_DATA = [
  //   {
  //     id: 1,
  //     title: "Health & Wellness",
  //   },
  //   {
  //     id: 2,
  //     title: "Breakfast Range",
  //   },
  //   {
  //     id: 3,
  //     title: "Kitchen Mix",
  //   },
  //   {
  //     id: 4,
  //     title: "Beverage",
  //   },
  //   {
  //     id: 5,
  //     title: "Recipes",
  //   },
  // ];

  const [productData, setProductData] = useState([])
  const [selectedBrand, setSelectedBrand] = useState(productData[0]?._id);

  const handleProductClick = (event) => {
    // Call the onProductClick prop to close the hover content
    if (onProductClick) {
      onProductClick(event);
    }
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("/api/our-Brands/productDetails");
        console.log("responseAAAA", response.data);
        setProductData(response.data)

      } catch (error) {

      }
    }
    fetchProductDetails()
    window.scroll(0, 0)
  }, [])

  return (
    <div className="relative">
      {/* <ImageBanner banner={Banner} /> */}
      <div className="flex w-full flex-col items-center">
        {/* <div className="font-medium z-10 text-center w-[70%] text-sm md:text-2xl text-[#373737]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore{" "}
        </div>
        <div className="font-medium z-10 text-center w-[70%] text-sm md:text-2xl text-[#373737] my-6 mb-10">
          Amed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore{" "}
          // 
        </div> */}
      </div>
      <div className="bg-white flex flex-col items-center h-auto border-b border-[#9F7B49] lg:absolute left-[3%] lg:w-[94%] top-0">
        <div className="flex flex-col w-[96%] my-4 md:mt-8">
          <h2 className="text-[#9F7B49] font-bold text-[20px] md:text-[40px] mb-4 md:mb-8">
            Apis
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10">
            <div className="flex flex-col gap-4 md:gap-8 min-w-[115px] md:min-w-[230px]">
              {productData?.map((brand) => {
                return (
                  <p
                    key={brand._id}
                    className={`text-xs md:text-xl cursor-pointer text-red ${selectedBrand === brand._id ? "font-bold" : "font-normal"}`}
                  >
                    {brand.title === "Recipes" ? (
                      <Link href="/our-brand/recipes" onClick={handleProductClick}>
                        {brand.title}
                      </Link>
                    ) : (
                      <span onClick={() => setSelectedBrand(brand._id)}>
                        {brand.title}
                      </span>
                    )}
                  </p>
                );
              })}
            </div>
            <div className="w-[2px] relative h-h-full bg-black">
              <div className="h-2 hidden sm:inline w-2 absolute top-0 -left-[3px]  bg-black rounded-full"></div>
              <div className="h-2 w-2 hidden sm:inline absolute bottom-0 -left-[3px]  bg-black rounded-full"></div>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full flex-wrap">
              {productData?.find(
                (product) => product?._id === selectedBrand
              )?.products?.map((itm) => {
                return (
                  <Link
                    key={itm._id}
                    href={`/our-brand/product-details?brand_id=${selectedBrand}&product_id=${itm?._id}&itm = ${itm}`}
                    onClick={()=>handleProductClick(itm)}
                  >
                    <div className="h-[80px] w-[120px] md:h-[140px] md:w-[200px]  flex items-center justify-center rounded-[20px] flex-col bg-white border border-[#9F7B49] cursor-pointer ApisMenuItem">
                      <Image
                        src={itm.product_img_2.startsWith("http") ? itm.product_img_2 : `/${itm.product_img_2}`}
                        alt={itm.name}
                        height={100}
                        width={100}
                      />

                      <p className="text-xs md:text-lg font-bold mt-2">
                        {itm?.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OurBrand.propTypes = {
  onProductClick: PropTypes.func,
};
