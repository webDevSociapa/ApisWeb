"use client";

import ImageBanner from "@/components/common/Layout/Banner";
import React, { useState } from "react";
import Brand from "@/assets/images/OurBrands/Brand.png";

const page = () => {
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
      {" "}
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
      <div className="flex flex-wrap mt-8 gap-8 w-full items-center justify-center">
        {RECEIPE_TYPE_DATA.map((itm) => {
          return (
            <div
              className={` cursor-pointer  text-xl font-bold px-6 py-3 rounded-[20px] ${selectedReceipeType === itm ? "bg-[#84663C] text-white shadow-xl" : "bg-[#DBDBDB]  text-black"}`}
              onClick={() => {
                setSelectedReceipeType(itm);
              }}
            >
              {itm}
            </div>
          );
        })}
      </div>
      <div className="bg-[#FFF9F0] p-6 mt-12 w-full">
        <p className="text-2xl font-bold">Brands Specific</p>
        <div className="flex flex-wrap mt-8 gap-8 w-full items-center">
          {RECEIPE_DATA.map((itm) => {
            return (
              <div
                className={` cursor-pointer  text-xl font-bold px-6 py-3 rounded-[5px] ${selectedReceipe === itm ? "bg-[#84663C] text-white shadow-xl border border-[#84663C]" : "bg-[#FFF9F0] border border-black  text-black"}`}
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
    </>
  );
};

export default page;
