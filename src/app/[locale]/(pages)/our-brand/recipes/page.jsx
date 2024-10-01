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
    {
      video: "https://www.youtube.com/embed/OAh6X5RIPvg?si=VRG5Bw7_k2356Syd",
      // title:"Himalaya Honey",
      title: "Paneer in Apis Honey Lemon Sauce",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      video: "https://www.youtube.com/embed/DXdbIOnI4fs?si=cwgqH9g70o0vhAAD",
      title: "Apis Honey Chilli Idli",
      time: "Prep 10 min",
      name:"Himalaya Honey",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      video: "https://www.youtube.com/embed/OAh6X5RIPvg?si=VRG5Bw7_k2356Syd",
      // title:"Himalaya Honey",
      title: "Paneer in Apis Honey Lemon Sauce",
      name:"Ginger Garlic",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      video: "https://www.youtube.com/embed/DXdbIOnI4fs?si=cwgqH9g70o0vhAAD",
      title: "Apis Honey Chilli Idli",
      time: "Prep 10 min",
      name:"Ginger Garlic",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      video: "https://www.youtube.com/embed/8xAEZMjoI7U?si=BCtDVosB050LS1Ci",
      title: "Apis Honey & Dates Sweet and Sour Dip",
      time: "Prep 10 min",
      name:"Himalaya Honey",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
      video: "https://www.youtube.com/embed/8xAEZMjoI7U?si=BCtDVosB050LS1Ci",
      title: "Apis Honey & Dates Sweet and Sour Dip",
      time: "Prep 10 min",
      name:"Arebian Pearls apis Dates",
      descreption: "Nature's golden nectar, pure and organic",
    },
    {
        video: "https://www.youtube.com/embed/RAEruyy_4fc?si=QNkw-Eh_MI7uuKG7",
        title: "Apis Honey Chilli Potato",
        name:"Himalaya Honey",
        time: "Prep 10 min",
        descreption: "Nature's golden nectar, pure and organic",
    },
    {
        video: "https://www.youtube.com/embed/S8g2Uq2MNlw?si=yq34TnOsgk-k4MOl",
        title: "Apis Honey & Dates Fruit Cake",
        name:"Himalaya Honey",
        time: "Prep 10 min",
        descreption: "Nature's golden nectar, pure and organic",
    },
    {
        video: "https://www.youtube.com/embed/S8g2Uq2MNlw?si=yq34TnOsgk-k4MOl",
        title: "Apis Honey & Dates Fruit Cake",
        name:"Arebian Pearls apis Dates",
        time: "Prep 10 min",
        descreption: "Nature's golden nectar, pure and organic",
    },
    //   img: MIXEDFRUIT,
      {
        video: "https://www.youtube.com/embed/i10MOtI-8PE?si=HY2taGRb-MeK66Un",
        title: "Honey Modak Recipe - Ganesh Chaturthi Special",
        name:"Himalaya Honey",

        time: "Prep 10 min",
        descreption: "Honey Muffin Recipe",
      },
    //   img: MIXEDFRUIT,
    //   title: "Apis Jam Recipe Ideas",
    //   name:"",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    //   type:"1"

    // },
    // {
    //   img: JAMFILLED,
    //   title: "Apis Jam Recipe Ideas",
    //   name:"",
    //   time: "Prep 10 min",
    //   descreption: "Nature's golden nectar, pure and organic",
    //   type:"1"

    // },
    {
      video: "https://www.youtube.com/embed/WEHMLMu00A4?si=IpcbraTVQr9_D-_x",
      title: "Apis Soya Chunks Kebab Recipe | Kebab Recipes | Seekh Kebab",
      time: "Prep 10 min",
      name:"Soya Chunks Kebab",
      descreption: "Apis Soya Chunks Kebab Recipe | Kebab Recipes | Seekh Kebab",

    },
    {
      video: "https://www.youtube.com/embed/XDzOMTZy_n0?si=ShwydgtGqI1ynaE9",
      title: "Apis Recipes : Honey BBQ Chicken Recipe",
      time: "Prep 10 min",
      name:"Himalaya Honey",
      descreption: "Apis Recipes : Honey BBQ Chicken Recipe",

    },
    {
      video: "https://www.youtube.com/embed/9VRrtyF0OEA?si=WbZwBC44wQnpI7pn",
      title: "Apis Dates Halwa | khajoor ka halwa",
      time: "Prep 10 min",
      name:"Himalaya Honey",
      descreption: "Apis Dates Halwa | khajoor ka halwa | डेट्स (खजूर) हलवा रेसिपी | With Apis Honey | No Sugar",
    },
    {
      video: "https://www.youtube.com/embed/9VRrtyF0OEA?si=WbZwBC44wQnpI7pn",
      title: "Apis Dates Halwa | khajoor ka halwa",
      time: "Prep 10 min",
      name:"Arebian Pearls apis Dates",
      descreption: "Apis Dates Halwa | khajoor ka halwa | डेट्स (खजूर) हलवा रेसिपी | With Apis Honey | No Sugar",
    },
    {
      video: "https://www.youtube.com/embed/NeL3kvnYyXQ?si=u1soO1g7rznNRBAU",
      title: "Apis Recipes | Honey Glazed Carrots",
      time: "Prep 10 min",
      descreption: "Apis Recipes | Honey Glazed Carrots",

    },
    {
      video: "https://www.youtube.com/embed/hf4P8aFybvQ?si=zeR0fknIV7KgkDCH",
      title: "Honey Muffin Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Honey Muffin Recipe",
    },
    {
      video: "https://www.youtube.com/embed/1-pxUwrb1jY?si=08r_VNFeS0p-kbp7",
      title: "Honey Peanut Butter Sandwich Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Honey Chocolate Tart Recipe",
    },
    {
      video: "https://www.youtube.com/embed/1-pxUwrb1jY?si=AniM7DGGcWsHqMLS",
      title: "Honey Chocolate Tart Recipe",
      name:"Himalaya Honey",

      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      descreption: "Honey Chocolate Tart Recipe",

    },
    {
      video: "https://www.youtube.com/embed/jIcuAKg2O88?si=0LTbXtYGURxaySPj",
      title: "Honey Chicken Wings Recipe - Apis",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",

    },
    {
      video: "https://www.youtube.com/embed/kGOJpsTJNI8?si=O87ESoR3CvnLWqqR",
      title: "Lemon Honey Dhokla Recipe - Apis Himalaya Honey",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Lemon Honey Dhokla Recipe - Apis Himalaya Honey",

    },
    {
      video: "https://www.youtube.com/embed/nqjVqM4IVMc?si=w7eJU292rmcAf1XX",
      title: "Apis Chocoflakes Chocolate Cluster Recipe",
      name:"Chocho Flakes",
      time: "Prep 10 min",
      descreption: "Apis Chocoflakes Chocolate Cluster Recipe",
      type:"4"
    },
    {
      video: "https://www.youtube.com/embed/sp7PAZwkvqc?si=AcuSlmnUaZ38mqnm",
      title: "Apis Himalaya Honey Chicken Thighs Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Apis Himalaya Honey Chicken Thighs Recipe",
      type:"4"
    },
    {
      video: "https://www.youtube.com/embed/UaKnrJ7jxUA?si=mWn1ppflQj1BT6nr",
      title: "Apis Cornflakes Paneer Nuggets Recipe",
      name:"Corn Flakes",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"4"
    },
    {
      video: "https://www.youtube.com/embed/LJIVoHMoEfo?si=Hv-wWlfnVSoJQALl",
      title: "Apis Cornflakes Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Apis Cornflakes Recipe",
      type:"4"
    },
    {
      video: "https://www.youtube.com/embed/LJIVoHMoEfo?si=Hv-wWlfnVSoJQALl",
      title: "Apis Cornflakes Recipe",
      name:"Corn Flakes",
      time: "Prep 10 min",
      descreption: "Apis Cornflakes Recipe",
      type:"4"
    },
    {
      video: "https://www.youtube.com/embed/ZKam7KXIJaE?si=lvYKoIIVkm07Utd0",
      title: "Apis Dates Gujiya Recipe",
      name:"",
      time: "Prep 10 min",
      descreption: "Apis Dates Gujiya Recipe",
      type:"5"
    },
    {
      video: "https://www.youtube.com/embed/NDDaneL4K8s?si=ckZmFV1TSC48SGTu",
      title: "Apis Honey Chilli Eggs - Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"5"
    },
    {
      video: "https://www.youtube.com/embed/kL9am3QFjaM?si=xJ0NTliB6jMy-I0y",
      title: "Dates Pie Recipe - Apis",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Dates Pie Recipe - Apis",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/kL9am3QFjaM?si=xJ0NTliB6jMy-I0y",
      title: "Dates Pie Recipe - Apis",
      name:"Arebian Pearls apis Dates",
      time: "Prep 10 min",
      descreption: "Dates Pie Recipe - Apis",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/H1oXlytb3l8?si=uYXSIjv7lCQU69gd",
      title: "Honey Chilli Lotus Stem by Neha Deepak Shah ",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/4eiIcOnV-3k?si=kNyYKr0v99wG50w8",
      title: "Healthy Fruit Dessert with Apis Himalaya Honey",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/ng5x3ntnvAM?si=No7g71v_dE0uolVx",
      title: "Apis Jam Quick Recipe",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/ng5x3ntnvAM?si=No7g71v_dE0uolVx",
      title: "Apis Jam Recipe",
      name:"apis jam Fruit Blast",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"6"
    },
    {
      video: "https://www.youtube.com/embed/mL1OH9Vkx0I?si=02y06eQfCnDG7vxt",
      title: "Oats Apis Honey Ladoos!",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      video: "https://www.youtube.com/embed/7I8bVTLLrm0?si=AeJnSKtlIzzH0weQ",
      title: "Honey Glazed Paneer Tikka",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      video: "https://www.youtube.com/embed/9-PdKpY0QCw?si=U48XE5KZ-tmcp6AX",
      title: "Exquisite flavours of Apis Vermicelli!",
      name:"Apis Seviyan Vermicelli",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      video: "https://www.youtube.com/embed/oe_fjXxhAW8?si=tCdL5_6Wk-Jf7T4O",
      title: "Craft a luscious yet healthy treat with Apis Honey and Vermicelli",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"7"
    },
    {
      video: "https://www.youtube.com/embed/U7--fls2cNc?si=X7CUDtLqzM5PhPqa",
      title: "Introducing our delightful Honey Glazed Veg Salad",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"
    },
    {
      img: "https://www.youtube.com/embed/F5C7jqf0H-U?si=gjPQni7XvofFJoRW",
      title: "Immerse yourself in a world of delectable flavors!",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"

    },
    {
      img: "https://www.youtube.com/embed/Vk6pGIAfuqc?si=nZSswEjgzdyWSCIN",
      title: "Ramadan Special Sheer Khurma",
      name:"Royal Zahidi Dates",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"

    },
    {
      img: "https://www.youtube.com/embed/87JI_nXS9ag?si=g1tpsFUiFql0MaIj",
      title: "Ramadhan Special Dates Laddu Recipe",
      name:"Apis Seviyan Vermicelli",

      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"8"
    },
    {
      img: "https://www.youtube.com/embed/Jw0pZzvcF6g?si=jzM0PZzRlkA9L9F8",
      title: "Apis Dates Laddu Recipe",
      name:"Arebian Pearls apis Dates",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/j8pBbVwBiow?si=a13UI-VbyCqj0PrO",
      title: "Sheer Khurma Recipe",
      name:"Arebian Pearls apis Dates",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/tRU-1Dx1Bz8?si=fCo9BSOKXEXXq5wG",
      title: "Ramadan Special Recipe",
      name:"Arebian Pearls apis Dates",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/qDtahUI7-rI?si=s6O926yCvMmmq8ep",
      title: "Switch to natural sweetener with Apis Honey today!",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/hy-x8vGo5rE?si=I9VJHWMDjvAnVujo",
      title: "Honey Cinnamon Lassi Recipe using Apis Honey",
      name:"Organic Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/uPa7-205ahw?si=SnXYrMwJN7q6I5UG",
      title: "Mango Lassi using Apis Honey",
      name:"Organic Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/H4DMfIObK3U?si=C7VEIJxvupBY0wYw",
      title: "apis breakfast",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/WunWrdpvzT4?si=09OOdC_zS01Nrzfh",
      title: "Switch to natural sweetener organic honey",
      name:"Organic Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/hy-x8vGo5rE?si=WvQ5qAQ5l0w-qXFw",
      title: "Honey Cinnamon Lassi Recipe using Apis Honey",
      name:"Himalaya Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/iqAZpmKUKCk?si=gL5ZjbLC9U9yfobi",
      title: "Apis Organic Honey Switch To Natural Sweetener",
      name:"Organic Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/uPa7-205ahw?si=0s2rG7hdfSvH6Q_F",
      title: "Mango Lassi using Apis Honey",
      name:"Organic Honey",
      time: "Prep 10 min",
      descreption: "Nature's golden nectar, pure and organic",
      type:"9"
    },
    {
      img: "https://www.youtube.com/embed/GD8Qij22kUI?si=-FCgwOXtU024bNiX",
      title: "Apis Honey & Dates Kheer Recipe",
      name:"Royal Zahidi Dates",
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
    "Himalaya Honey",
    "Soya Chunks Kebab",
    "Chocho Flakes",
    "Corn Flakes",
    "Arebian Pearls apis Dates",
    "apis jam Fruit Blast",
    "Apis Seviyan Vermicelli",
    "Royal Zahidi Dates",
    "Organic Honey",
    "Ginger Garlic"

  ];

  // const [selectedReceipeType, setSelectedReceipeType] = useState(
  //   RECEIPE_TYPE_DATA[0]
  // );
  const [selectedReceipe, setSelectedReceipe] = useState(RECEIPE_DATA[0]);  
  console.log("Apis Dates Gujiya Recipe", selectedReceipe);
  

  return (
    <>
      <ImageBanner banner={Brand} className="h-full w-full" />
      <p className="font-bold text-[#84663C] md:text-[40px] text-[20px] w-[75%] capitalize text-center">
        make your dine complete with our recipes
      </p>
      <p className="text-center w-[55%] font-jost text-sm  md:text-xl text-[#454545] my-8 rgba(0, 0, 0, 1)">
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
      <div className="w-[90%] mx-auto gap-10 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center media-apis">
  {RECIPIES_DATA.filter((itm) => itm.name === selectedReceipe).map((itm, index) => {
    return (
      <div className="embla__slide" key={index}>
        <div className="w-full">
          <div className="w-full">
            <iframe
              src={itm.video}
              height={400}
              alt="header-logo"
              className="bg-opacity-40 w-full max-h-[363px] max-w-[514px] rounded-tr-[50px] rounded-bl-[50px]"
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
</div>
    </>
  );
};

export default page;
