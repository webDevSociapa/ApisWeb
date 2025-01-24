"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/OurBrands/OurBrands.png";
import ImageBanner from "../../Layout/Banner";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PRODUCT_DATA } from "@/lib/constants";
import Rectangle2 from "@/assets/images/OurBrands/Rectangle2.png";

export default function OurBrand({ onProductClick }) {
  const TAB_DATA = ["Apis", "Misk", "Nutrasip"];
  const BRAND_DATA = [
    {
      id: 1,
      title: "Health & Wellness",
    },
    {
      id: 2,
      title: "Breakfast Range",
    },
    {
      id: 3,
      title: "Kitchen Mix",
    },
    {
      id: 4,
      title: "Beverage",
    },
    {
      id: 5,
      title: "Recipes",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(BRAND_DATA[0].id);

  const handleProductClick = (event) => {
    // Call the onProductClick prop to close the hover content
    if (onProductClick) {
      onProductClick(event);
    }
  };
  useEffect(() => {
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
      <div>
      </div>
      <div className="bg-white flex flex-col items-center h-auto border-b border-[#9F7B49] lg:absolute left-[3%] lg:w-[94%] top-0">
        <div className="flex flex-col w-[96%] my-4 md:mt-8">
          <div className="flex flex-row justify-between items-start gap-4 w-full">
          <Image src={Rectangle2} width={300} height={300}/>

            {/* TAB_DATA Section */}
            <div className="flex flex-col gap-4 w-1/4">
              {TAB_DATA.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer text-sm md:text-lg font-bold py-6 mx-8 ${tab === "Apis" ? "text-[#9F7B49] border-l-4 border-[#9F7B49] px-2" : "text-gray-500"
                    }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            {/* BRAND_DATA Section */}
            <div className="flex flex-col gap-4 w-1/4">
              {BRAND_DATA.map((brand) => (
                <p
                  key={brand.id}
                  className={`text-xs md:text-xl cursor-pointer text-black ${selectedBrand === brand.id ? "font-bold" : "font-normal"
                    }`}
                >

                  {brand.title === "Recipes" ? (
                    <Link href="/our-brand/recipes" onClick={handleProductClick}>
                      {brand.title}
                    </Link>
                  ) : (
                    <span onClick={() => setSelectedBrand(brand.id)}>
                      {brand.title}
                    </span>
                  )}
                </p>
              ))}
            </div>

            {/* PRODUCT_DATA Section */}
            <div className="flex flex-wrap gap-4 w-1/2">
              {PRODUCT_DATA.find((product) => product.id === selectedBrand).products.map((itm) => (
                <Link
                  key={itm.id}
                  href={`/our-brand/product-details?brand_id=${selectedBrand}&product_id=${itm?.id}`}
                  onClick={handleProductClick}
                >
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] md:h-[150px] md:w-[200px] bg-white border border-[#9F7B49] rounded-[20px] cursor-pointer ApisMenuItem">
                    <Image src={itm.product_img_2} alt={itm.name} />
                    <p className="text-xs md:text-lg font-bold mt-2">{itm.name}</p>
                  </div>
                </Link>
              ))}
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