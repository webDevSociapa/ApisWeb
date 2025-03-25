"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { PRODUCT_DATA } from "@/lib/constants";
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
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductClick = (brandId, productId) => {
    router.push(`/our-brand/product-details?brand_id=${brandId}&product_id=${productId}`);
    if (onProductClick) onProductClick();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white p-6">
      {/* Tabs Section */}
      <div className="flex justify-center gap-8 border-b-2 border-[#9F7B49] pb-4">
        {TAB_DATA.map((tab, index) => (
          <div
            key={index}
            className={`text-lg font-bold px-4 py-2 ${tab === "Apis"
              ? "text-[#9F7B49] border-b-4 border-[#9F7B49]"
              : "text-gray-400 opacity-50 cursor-not-allowed"
              }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Product Section */}
      <div className="mt-6 grid grid-cols-3 gap-16">
        {PRODUCT_DATA.filter((brand) => brand.title !== "Organic").map((brand) => (
          <div key={brand.id} className="space-y-2">
            {/* Brand Title */}
            <h3
              className={`text-2xl font-bold cursor-pointer ${selectedBrand === brand.id ? "text-[#9F7B49]" : "text-[#A57F5A]"
                }`}
              onClick={() => setSelectedBrand(brand.id)}
            >
              {brand.title}
            </h3>

            {/* Products List */}
            <div className="space-y-2">
              {brand.products
                .filter((product) => product.name !== "Apis Organic Honey" && product.name !== "Royal Zahidi" && product.name !== "Shehenshah Date" && product.name !== "Arabian Pearls Date" && product.name !== "Select Date" && product.name !== "ClassicDate" && product.name !== "Shaan e Khajoor" && product.name !== "KalmiDates" && product.name !=="DesertBliss" && product.name !== "DeseededDate" && product.name !== "Premium Dates" ) 
                .map((product) => (
                  <div key={product.id} className="relative group">
                    <button
                      className="text-base text-[#373737] hover:text-[#9F7B49] transition-all"
                      onClick={() => handleProductClick(brand.id, product.id)}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      {product.name}
                    </button>
                    {product.name === "Honey" && (
                      <div className="absolute top-0 left-10 ml-4 w-[200px] z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear transform scale-95 group-hover:scale-100">
                        <div className="bg-white shadow-lg border rounded-md p-4">
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
                                href={`/our-brand/product-details?brand_id=1&product_id=2`}
                                className="hover:underline"
                              >
                               Himalaya Honey
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=1`}
                                className="hover:underline"
                              >
                              Regular Honey
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=1`}
                                className="text-gray-400 opacity-50 cursor-not-allowed"
                              >
                              Infused Honey
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/*  */}
                    {product.name === "Dates" && (
                      <div className="absolute top-14 left-10 ml-4 w-[200px] z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear transform scale-95 group-hover:scale-100">
                        <div className="bg-white shadow-lg border rounded-md p-4">
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=3`}
                                className="hover:underline"
                              >
                               Shahenshah Dates
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=7`}
                                className="hover:underline"
                              >
                               Royal Zahidi
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=4`}
                                className="hover:underline"
                              >
                               Arabian Dates
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=5`}
                                className="hover:underline"
                              >
                                Select Date
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=6`}
                                className="hover:underline"
                              >
                               ClassicDate
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=8`}
                                className="hover:underline"
                              >
                               Shaan e Khajoor
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=9`}
                                className="hover:underline"
                              >
                               KalmiDates
                              </Link>
                            </li> 

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=10`}
                                className="hover:underline"
                              >
                               DesertBliss
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=11`}
                                className="hover:underline"
                              >
                               DeseededDate
                              </Link>
                            </li>

                            <li>
                              <Link
                                href={`/our-brand/product-details?brand_id=2&product_id=12`}
                                className="hover:underline"
                              >
                               PremiumDates
                              </Link>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

OurBrand.propTypes = {
  onProductClick: PropTypes.func,
};