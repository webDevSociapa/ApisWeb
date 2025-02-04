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
                .filter((product) => product.name !== "Apis Organic Honey")
                .map((product) => (
                  <div key={product.id} className="relative group">
                    <button
                      className="text-base text-[#373737] hover:text-[#9F7B49] transition-all"
                      onClick={() => handleProductClick(brand.id, product.id)}
                    >
                      {product.name}
                    </button>

                    {/* Subcategories Dropdown */}
                    {product.subcategories && product.subcategories.length > 0 && (
                      <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg border rounded-md mt-1 p-2 z-10 w-44">
                        {product.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/our-brand/product-details?brand_id=${brand.id}&product_id=${sub.id}`}
                            className="text-sm text-gray-600 hover:underline"
                          >
                            {sub.name}
                          </Link>
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
  );
}

OurBrand.propTypes = {
  onProductClick: PropTypes.func,
};
