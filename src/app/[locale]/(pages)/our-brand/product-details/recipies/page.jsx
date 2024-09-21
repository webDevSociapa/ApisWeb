"use client";

import ImageBanner from "@/components/common/Layout/Banner";
import React, { useState } from "react";
import Brand from "@/assets/images/OurBrands/Brand.png";
import Apple from "@/assets/images/OurBrands/Apple.png";
import Berry from "@/assets/images/OurBrands/Berry.png";
import Image from "next/image";

const page = () => {

  const RECIPIES_DATA = [
    {
      img: Apple,
      title: "Honey Apple Fruit Chat",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: Berry,
      title: "Honey Berry Fruit Pan Cake",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: Apple,
      title: "Honey Apple Fruit Chat",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: Berry,
      title: "Honey Apple Fruit Chat",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
  ];
  const RECEIPE_TYPE_DATA = [
    "All Recipes",
    "Appetizers",
    "Apis Honey Recipes",
    "Breakfast",
    "Desserts",
    "Apis Dates Recipes",
    "Lunch And Dinner",
    "Nourishing",
    "Quick & Easy",
    "Snacks",
    "Top Rated Recipes",
  ];

  const RECEIPE_DATA = [
    "Apis Honey",
    "Apis Organic Honey",
    "Apis Jam",
    "Apis Dates",
    "Flakes",
    "Vermicelli",
    "Spread",
  ];

  const [selectedReceipeType, setSelectedReceipeType] = useState(
    RECEIPE_TYPE_DATA[0]
  );
  const [selectedReceipe, setSelectedReceipe] = useState(RECEIPE_DATA[0]);

  return (
    <>
      <ImageBanner banner={Brand} className="h-full w-full" />
      <p className="font-bold text-[#84663C] md:text-[40px] text-[20px] w-[75%] capitalize text-center">
        make your dine complete with our recipes
      </p>
      <p className="text-center w-[55%] font-jost text-sm  md:text-xl text-[#454545] my-8">
        Explore a world of delicious possibilities with Apis India! Our curated
        recipes, crafted using the finest Apis honey and other natural products,
        are perfect for every palate. Whether you're whipping up a quick snack
        or a gourmet meal, our products bring health, flavor, and quality to
        your kitchen. Discover new culinary delights with Apis India today!
      </p>

      {/* Recipe Type Horizontal Scrollable (Mobile Only) */}
      <div className="md:flex-wrap md:justify-center flex overflow-x-scroll hide-scrollbar mt-8 gap-8 w-full items-center justify-start">
        {RECEIPE_TYPE_DATA.map((itm) => {
          return (
            <div
              key={itm}
              className={`cursor-pointer whitespace-nowrap text-xl font-bold px-6 py-3 rounded-[20px] ${
                selectedReceipeType === itm
                  ? "bg-[#84663C] text-white shadow-xl"
                  : "bg-[#DBDBDB] text-black"
              }`}
              onClick={() => {
                setSelectedReceipeType(itm);
              }}
            >
              {itm}
            </div>
          );
        })}
      </div>

      {/* Brand Specific Section */}
      <div className="bg-[#FFF9F0] p-6 mt-12 w-full">
        <p className="text-2xl font-bold">Brands Specific</p>

        {/* Recipe Data Horizontal Scrollable (Mobile Only) */}
        <div className="md:flex-wrap flex overflow-x-scroll hide-scrollbar mt-8 gap-8 w-full items-center">
          {RECEIPE_DATA.map((itm) => {
            return (
              <div
                key={itm}
                className={`cursor-pointer whitespace-nowrap text-xl font-bold px-6 py-3 rounded-[5px] ${
                  selectedReceipe === itm
                    ? "bg-[#84663C] text-white shadow-xl border border-[#84663C]"
                    : "bg-[#FFF9F0] border border-black text-black"
                }`}
                onClick={() => {
                  setSelectedReceipe(itm);
                }}
              >
                {itm}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] gap-10 py-10 flex items-center  media-apis">
          {/* <EmblaCarousel options={OPTIONS} autoScroll> */}
            {RECIPIES_DATA.map((itm) => {
              return (
                // <div className="embla__slide">
                  <div className="w-full">
                    <div className="w-full">
                      <Image
                        src={itm.img}
                        alt="header-logo"
                        className="bg-opacity-40 w-full max-h-[363px] max-w-[514px]"
                      />
                    </div>
                    <div className="border-2 max-w-[514px] bg-white border-[hsl(35,37%,45%)] mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3 py-3 px-2 lg:px-4">
                      <p className="text-sm lg:text-xl font-bold text-[#373737]">
                        {itm?.title}
                      </p>
                      <p className="text-sm lg:text-xl font-normal text-[#373737]">
                        {itm?.time}
                      </p>
                      <p className="text-[#666666] text-xs lg:text-sm">
                        {itm?.descreption}
                      </p>
                    </div>
                  </div>
                // </div>
              );
            })}
          {/* </EmblaCarousel> */}
        </div>

    </>
  );
};

export default page;
