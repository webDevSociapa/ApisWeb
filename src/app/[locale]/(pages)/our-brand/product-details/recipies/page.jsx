"use client";

import ImageBanner from "@/components/common/Layout/Banner";
import React, { useState } from "react";
import Brand from "@/assets/images/OurBrands/Brand.png";
import Apple from "@/assets/images/OurBrands/Apple.png";
import Berry from "@/assets/images/OurBrands/Berry.png";
import HOMEJAM from "@/assets/images/OurBrands/apisJam1.jpg"
import MIXEDFRUIT from "@/assets/images/OurBrands/apisJam3.jpg"
import JAMFILLED from "@/assets/images/OurBrands/apisjam4.jpg"
import RICEPUDDING from "@/assets/images/OurBrands/apisJam2.jpg"
import BriDate from "@/assets/images/OurBrands/apisDate2.jpg"
import WalnutCake from "@/assets/images/OurBrands/apisDate3.jpg"
import Otmeal from "@/assets/images/OurBrands/apisDate1.jpg"
import Chocolate from "@/assets/images/OurBrands/chocolateApis.jpg"
import GreenBeans from "@/assets/images/OurBrands/gingerApis2.jpg"
import SpicyLentil from "@/assets/images/OurBrands/gingerApis3.jpg"
import GingerApis from "@/assets/images/OurBrands/gingerApis.jpg"
import ChickenCurry from "@/assets/images/OurBrands/apisGinger.jpg"
import TeaLeaf from "@/assets/images/OurBrands/Tealeaf.jpg"
import GreenTreePeach from "@/assets/images/OurBrands/greentea-small.jpg"
import StrawBerry from "@/assets/images/OurBrands/Strawberry-Peach.jpg"
import LemonyTea from "@/assets/images/OurBrands/LemonyTea.jpg"
// import TeaLeaf from "@/assets/images/OurBrands/Tealeaf.jpg"
import MacaroniSalad from "@/assets/images/OurBrands/macaroni-salad.jpg"
import MasalaMacaroni from "@/assets/images/OurBrands/Masala-macaroni.jpg"
// import LemonyTea from "@/assets/images/OurBrands/LemonyTea"
import AchaariPaneer from "@/assets/images/OurBrands/paneer.jpg"
import AchaariChicken from "@/assets/images/OurBrands/achariChicken.jpg"
import AchaariParatha from "@/assets/images/OurBrands/paratha.jpg"
import Gobi from "@/assets/images/OurBrands/gobi.jpg"
import LemonHoney from "@/assets/images/OurBrands/lemonHoney.jpg"
import GingerHoney from "@/assets/images/OurBrands/gingerHoney.jpg"
import TulsiHoney from "@/assets/images/OurBrands/tulsiHoney.jpg"
import LycheeHoney from "@/assets/images/OurBrands/LycheeHoney.jpg"

import SoyaCurry from "@/assets/images/OurBrands/soyaCurry.jpg"
import SoyaFriedRice from "@/assets/images/OurBrands/soyaFriedRice.jpg"
import SoyaChunks from "@/assets/images/OurBrands/SoyaChunks.png"
import SoyaChilli from "@/assets/images/OurBrands/soyaChilli.jpg"

import HoneyBeetSalad from "@/assets/images/OurBrands/honeyBestSalad.jpg"
import HotHoney from "@/assets/images/OurBrands/hotHoney.jpg"
import HoneyApple from "@/assets/images/OurBrands/HoneyApple.jpg"
import ChickenSweet from "@/assets/images/OurBrands/chickenSweet.jpg"
import Image from "next/image";
import EmblaCarousel from "@/components/common/Carousel/Carousel";

const page = () => {

  const OPTIONS = { loop: true };

  const RECIPIES_DATA = [
    // {
    //   img: Apple,
    //   title: "Honey Apple Fruit Chat",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    // },
    // {
    //   img: Berry,
    //   title: "Honey Berry Fruit Pan Cake",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    // },
    // {
    //   img: Apple,
    //   title: "Honey Apple Fruit Chat",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    // },
    // {
    //   img: Berry,
    //   title: "Honey Apple Fruit Chat",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    // },
    {
      img: HOMEJAM,
      title: "Apis Jam Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: MIXEDFRUIT,
      title: "Apis Jam Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"1"

    },
    {
      img: JAMFILLED,
      title: "Apis Jam Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"1"

    },
    {
      img: RICEPUDDING,
      title: "Apis Jam Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: BriDate,
      title: "Apis Dates Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: WalnutCake,
      title: "Apis Dates Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: Otmeal,
      title: "Apis Dates Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: Chocolate,
      title: "Apis Dates Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: GreenBeans,
      title: "Ginger Garlic Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      img: SpicyLentil,
      title: "Ginger Garlic Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: GingerApis,
      title: "Ginger Garlic Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: ChickenCurry,
      title: "Ginger Garlic Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      img: TeaLeaf,
      title: "Green Tea Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"4"
    },
    {
      img: GreenTreePeach,
      title: "Green Tea Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"4"
    },
    {
      img: StrawBerry,
      title: "Green Tea Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"4"
    },
    {
      img: LemonyTea,
      title: "Green Tea Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"4"
    },
    {
      img: MacaroniSalad,
      title: "Macroni Recipes Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"5"
    },
    {
      img: MasalaMacaroni,
      title: "Macroni Recipes Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"5"
    },
    {
      img: AchaariPaneer,
      title: "Pickles Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      img: AchaariChicken,
      title: "Pickles Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      img: AchaariParatha,
      title: "Pickles Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      img: Gobi,
      title: "Pickles Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      img: LemonHoney,
      title: "Value Added Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      img: GingerHoney,
      title: "Value Added Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      img: TulsiHoney,
      title: "Value Added Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      img: LycheeHoney,
      title: "Value Added Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      img: HoneyBeetSalad,
      title: "Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"
    },
    {
      img: HotHoney,
      title: "Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"

    },
    {
      img: HoneyApple,
      title: "Honey Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"

    },
    {
      img: ChickenSweet,
      title: "Honey Recipe Ideas",
      name:"",

      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"
    },
    {
      img: SoyaCurry,
      title: "Soya Chunks Recipe Ideas",
      name:"Apis Soya Chunks Curry Recipe",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: SoyaFriedRice,
      title: "Soya Chunks Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: SoyaChunks,
      title: "Soya Chunks Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: SoyaChilli,
      title: "Soya Chunks Recipe Ideas",
      name:"",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
  ];
  // const RECEIPE_TYPE_DATA = [
  //   "All Recipes",
  //   "Appetizers",
  //   "Apis Honey Recipes",
  //   "Breakfast",
  //   "Desserts",
  //   "Apis Dates Recipes",
  //   "Lunch And Dinner",
  //   "Nourishing",
  //   "Quick & Easy",
  //   "Snacks",
  //   "Top Rated Recipes",
  // ];

  const RECEIPE_DATA = [
    "Honey Recipe Ideas",
    "Value Added Honey Recipe Ideas",
    "Pickles Recipe Ideas",
    "Apis Jam Recipe Ideas",
    "Apis Dates Recipe Ideas",
    "Ginger Garlic Recipe Ideas",
    "Green Tea Ideas",
    "Macroni Recipes Ideas",
    "Soya Chunks Recipe"
  ];

  // const [selectedReceipeType, setSelectedReceipeType] = useState(
  //   RECEIPE_TYPE_DATA[0]
  // );
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
      {/* isme mujhe RECEIPE_DATA ke according  */}
      {/* <div className="md:flex-wrap md:justify-center flex overflow-x-scroll hide-scrollbar mt-8 gap-8 w-full items-center justify-start">
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
      </div> */}

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
      <div className="w-[90%] gap-10 py-10 flex items-center justify-center media-apis">
          <EmblaCarousel options={OPTIONS}>
          {RECIPIES_DATA.filter((itm) => itm.title === selectedReceipe).map((itm, index) => {
              return (
                <div className="embla__slide">
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
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
    </>
  );
};

export default page;
