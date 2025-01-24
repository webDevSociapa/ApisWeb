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
            <Image src={Rectangle2} width={300} height={300} />

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
            <div className="flex flex-col gap-6 w-full">
              {/* Loop through PRODUCT_DATA for titles and products */}
              {PRODUCT_DATA.map((brand) => (
                <div key={brand.id} className="w-full">
                  {/* Title */}
                  <h3
                    className={`text-xl font-bold text-[#A57F5A]  pl-2 ${selectedBrand === brand.id ? "underline" : ""
                      }`}
                    onClick={() => setSelectedBrand(brand.id)}
                  >
                    {brand.title}
                  </h3>

                  {/* Products */}
                  <div className="pl-4 mt-2">
                    {brand.products.map((product) => (
                      <div key={product.id} className="relative group">
                        {/* Product Name */}
                        <p className="text-sm text-gray-800 cursor-pointer hover:underline">
                          {product.name}
                        </p>

                        {/* Variants (shown on hover) */}
                        {product.variants && (
                          <div className="absolute hidden group-hover:block bg-white shadow-lg border rounded-md mt-1 p-2 z-10">
                            {product.variants.map((variant) => (
                              <p key={variant.id} className="text-xs text-gray-600 hover:text-black">
                                {variant.name}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
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