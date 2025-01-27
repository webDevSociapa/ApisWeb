"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Banner from "@/assets/images/OurBrands/OurBrands.png";
import Rectangle2 from "@/assets/images/OurBrands/Rectangle2.png";
import { PRODUCT_DATA } from "@/lib/constants";
import Cgallery from "@/assets/images/Careers/cgallary.png"

import Link from "next/link";

export default function OurBrand({ onProductClick }) {
  const router = useRouter();

  const TAB_DATA = ["Apis", "Misk", "Nutrasip"];
  const BRAND_DATA = [
    { id: 1, title: "Health & Wellness" },
    { id: 2, title: "Breakfast Range" },
    { id: 3, title: "Kitchen Mix" },
  ];

  const [selectedBrand, setSelectedBrand] = useState(BRAND_DATA[0].id);

  const handleProductClick = (brandId, productId) => {
    router.push(`/our-brand/product-details?brand_id=${brandId}&product_id=${productId}`);
    if (onProductClick) onProductClick();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="flex w-full flex-col items-center"></div>
      <div className="bg-white flex flex-col items-center h-auto border-b border-[#9F7B49] lg:absolute left-[3%] lg:w-[94%] top-0">
        <div className="flex flex-col w-[96%] my-4 md:mt-8">
          <div className="flex flex-row justify-between items-start gap-4 w-full">
            <Image src={Cgallery} alt="Rectangle" width={400} height={400} />
            <div className="flex flex-col gap-4 w-1/4">
              {TAB_DATA.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer text-sm md:text-lg font-bold py-6 mx-8 ${tab === "Apis"
                    ? "text-[#9F7B49] border-l-4 border-[#9F7B49] px-2"
                    : "text-gray-500"
                    }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 w-full">
              {PRODUCT_DATA.filter((brand) => brand.title !== "Organic").map((brand) => (
                <div key={brand.id} className="w-full">
                  {/* Brand Title */}
                  <h3
                    className={`text-xl font-bold text-[#A57F5A] pl-2 ${selectedBrand === brand.id ? "" : ""
                      }`}
                    onClick={() => setSelectedBrand(brand.id)}
                  >
                    {brand.title}
                  </h3>

                  <div className="pl-4 mt-2">
                    {/* Map through products */}
                    {brand.products
                      .filter((product) => product.name !== "Apis Organic Honey")
                      .map((product) => (
                        <div key={product.id} className="relative group">
                          {/* Product Button */}
                          <button
                            className="text-sm md:text-base font-medium text-[#373737] hover:text-[#9F7B49] transition-all"
                            onClick={() => handleProductClick(brand.id, product.id)}
                          >
                            {product.name}
                          </button>

                          {/* Subcategories for Honey */}
                          {product.name === "Honey" && (
                            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg border rounded-md mt-1 p-4 w-[200px] z-10">
                              <ul className="text-sm text-gray-600 space-y-2">
                                <li>
                                  <Link
                                    href={`/our-brand/product-details?brand_id=1&product_id=1`}
                                    className="hover:underline"
                                  >
                                    Organic Honey
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href={`/our-brand/product-details?brand_id=2&product_id=1`}
                                    className="hover:underline"
                                  >
                                    Honey
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}

                          {/* Optional: Variants */}
                          {product.variants && (
                            <div className="absolute hidden group-hover:flex bg-white shadow-lg border rounded-md mt-1 p-2 z-10">
                              {product.variants.map((variant) => (
                                <p
                                  key={variant.id}
                                  className="text-xs text-gray-600 hover:text-black"
                                >
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
