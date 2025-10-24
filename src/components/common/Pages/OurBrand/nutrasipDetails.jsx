"use client";
import React, { useEffect } from "react";
import ImageBanner from "../../Layout/NutrasipBanner";
import EmblaCarousel from "../../Carousel/Carousel";
import Ring1 from "@/assets/images/OurBrands/Ring-1.png";
import Ring2 from "@/assets/images/OurBrands/Ring-2.png";
import Ring3 from "@/assets/images/OurBrands/Ring-3.png";
import Ring4 from "@/assets/images/OurBrands/Ring-4.png";
import Comma from "@/assets/images/OurBrands/Comma.png";
import Image from "next/image";
import CheckReportBanner from "@/assets/images/OurBrands/ProductBanner.png";
import HimalayaHoney from "@/assets/images/OurBrands/himalayaHoney.png";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AVAILABILITY_SLIDE,
  GGP,
  NEWS_DATA,
  PRODUCT_DATA,
  RECIPIES_DATA1,
} from "@/lib/constants";
import Link from "next/link";
import FlowerRun from "@/assets/images/home-banner-section/flowerRun.gif";
// import MiskBanner from "https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/page-banner.png";
import MiskProductImage from "@/assets/images/OurBrands/new-misk-product-fixed.png";
import MiskProductDesc from "@/assets/images/OurBrands/misk-product-desc-02.png";
import ProductIcon1 from "@/assets/images/AboutUs/Digestive-Benefits-Misk-Icon.png";
import ProductIcon2 from "@/assets/images/AboutUs/Instant-Freshness-Misk-Icon.png";
import ProductIcon3 from "@/assets/images/AboutUs/No-Artificial-Sweeteners-Misk-Icon.png";
import ProductIcon4 from "@/assets/images/AboutUs/Silver-Coating-Misk-Icon.png";

import axios from "axios";

const OPTIONS = { loop: true };

const NutrasipDetails = () => {
  const benefits = [
    {
      image: ProductIcon1,
      title: "Boosts Immunity",
    },
    {
      image: ProductIcon2,
      title: "Improves Digestion",
    },
    {
      image: ProductIcon3,
      title: "Enhances Energy Levels",
    },
    {
      image: ProductIcon4,
      title: "Supports Heart Health",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (index) => setHoveredId(index);
  const handleMouseLeave = () => setHoveredId(null);

  const renderBenefits = (benefits) => {
    return benefits.map((itm, index) => (
      <div
        key={index}
        className="flex flex-col w-[48%] sm:w-[45%] md:w-[30%] items-center justify-center my-4"
      >
        <div
          className={`h-[110px] flex items-center justify-center w-[110px] border-[#9F7B49] 
                      ${hoveredId === itm.id ? "shadow-lg" : ""} transition-shadow duration-200`}
        >
          <Image
            src={itm.image}
            width={65}
            height={65}
            alt={itm.title}
            className="h-[65px] w-[65px] cursor-pointer mt-10"
            onClick={() => handleImageClick(itm)}
          />
        </div>
        <p className="text-center text-xs sm:text-sm md:text-base my-2 md:my-4">
          {itm.title}
        </p>
      </div>
    ));
  };

  // const openModal = (video) => {

  //   setCurrentVideo(video);
  //   setIsModalOpen(true);
  // };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <ImageBanner banner="https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/page-banner.png" />

      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 md:px-0">
          <p className="w-full max-w-[90%] text-[20px] md:text-[40px] font-bold text-center text-[#84663C]">
            A Sip of Refreshment. A Taste of Health.
          </p>
          <p className="text-[#454545] w-full max-w-[80%] text-sm md:text-2xl text-center mt-4 md:mt-8 font-jost">
            Turn your tea time into a wellness ritual with Nutrasip's Green Tea
            - Lemon & Honey. Packed with antioxidants, it defends your cells,
            detoxifies your body, and boosts your immunity. With the goodness of
            zesty Lemon and sweet Honey, it is a refreshing sip for a healthy
            living. Bring it home to uplift your mood, enhance focus, and feel
            lighter, brighter, and naturally energized every day.
          </p>
        </div>

        {/* Image and Button Section */}
        <div className="flex flex-col items-center justify-center px-4 md:px-0">
          <Image
            src="https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/sachets/4.png"
            height={280}
            width={300}
            alt="header-logo"
            className="h-[180px] mt-8 w-auto md:h-[380px]"
          />
        </div>
        {/* Benefits Section */}
        <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-[10px] mb-[10px]">
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-lemon/boosts-immunity.png"
              alt="Boosts Immunity"
              width={120}
              height={120}
            />
            <p className="mt-3 text-black text-base font-medium">
              Boosts Immunity
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-lemon/detoxifies-body.png"
              alt="Detoxifies Body"
              width={120}
              height={120}
            />
            <p className="mt-3 text-black text-base font-medium">
              Detoxifies Body
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-lemon/rich-in-antioxidants.png"
              alt="Rich in Antioxidants"
              width={120}
              height={120}
            />
            <p className="mt-3 text-black text-base font-medium">
              Rich in Antioxidants
            </p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="w-[90%] border border-[#AE844A] rounded-[10px] flex mt-8 md:mt-20 items-center flex-col gap-4 md:gap-12">
        <div className="bg-white rounded-[10px] w-full h-[23px] md:h-[65px] flex items-center justify-between px-3 md:pt-2 pt-1 avaibility">
          <EmblaCarousel options={OPTIONS} autoScroll>
            {AVAILABILITY_SLIDE.map((img) => {
              return (
                <div className="embla__slide w-[55px] md:w-auto">
                  <Link href={img?.path} target="_blank">
                    <Image
                      src={img?.img}
                      height={60}
                      alt="header-logo"
                      className="h-[18px] w-[50px] md:w-auto md:h-[60px] embla__slide__number"
                    />
                  </Link>
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
      </div>
      {/* <a href={'/about-us'}> */}

      {/* <p className="text-[20px] md:text-[40px] py-4 md:py-10 font-bold text-[#9F7B49] font-literata">
        Content
      </p> */}
      <div className="bg-[#FFF9F0] relative w-full min-h-[600px] flex justify-center items-center">
        <Image
          src={Ring1}
          width={150}
          height={150}
          alt="header-logo"
          className="h-[150px] hidden lg:block absolute top-0 left-0 w-[150px]"
        />
        <div className="w-full flex flex-col lg:flex-row my-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8 mt-12 lg:mt-0">
            <div
              className={` relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
        rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 mt-8 z-50 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div className="bg-custom-radial-gradient absolute bottom-4 md:bottom-8 z-50 left-4 md:left-8  rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[300px] md:w-[380px]"></div>
              <Image
                src="https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/sachets/7.png"
                height={180}
                width={520}
                alt="product-image"
                className="h-[280px] md:h-[280px] z-50 absolute -right-2 bottom-4 z-20"
              />
              <div className="relative h-full w-full hidden md:block">
                <Image
                  src={Ring4}
                  height={200}
                  alt="ring-image"
                  className="h-[225px] w-[225px] rotate-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative px-4 lg:px-14 flex flex-col gap-4 md:gap-8 items-center mt-8 lg:mt-0">
            <p className="text-xl md:text-[30px] relative text-center font-light">
              Benefits of Green Tea - Lemon and Honey
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="comma-icon"
                className="h-[60px] lg:block absolute -top-2 right-[-32px] w-[40px]"
              />
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="comma-icon"
                className="h-[60px] lg:block absolute -top-2 right-[-40px] w-[40px]"
              />
            </p>
            <div className="w-full max-w-[520px] bg-white/80 border border-[#E7DCC8] rounded-[14px] p-4 md:p-6 shadow-sm">
              <p className="sr-only">Benefits list</p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {[
                  "Rich in Antioxidants",
                  "Boosts Immunity",
                  "Detoxifies Body",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 md:gap-4 bg-[#FFF9F0] rounded-lg px-3 py-2 md:px-4 md:py-3 border border-transparent hover:border-[#E6D3B3] transition-colors"
                  >
                    <span className="flex-shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="text-[#9F7B49]"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="#9F7B49"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="text-sm md:text-base text-[#454545] font-jost leading-tight">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={Ring3}
              width={80}
              height={250}
              alt="ring-image"
              className="h-[250px] hidden lg:block absolute top-16 right-0 w-[60px]"
            />
          </div>
        </div>
        {/* <Image
          src={selectedProduct.saysImage}
          width={200}
          height={200}
          alt="hand-drawn-honey"
          className="h-[180px] hidden lg:block absolute bottom-0 right-0 w-[180px]"
        /> */}
      </div>

      <div className="flex w-full  items-center justify-center flex-col"></div>

      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 md:px-0">
          <p
            className="w-full max-w-[90%] text-[20px] md:text-[40px] font-bold text-center text-[#84663C]"
            style={{ paddingTop: "50px" }}
          >
            Sip the Purity. Feel the Power.
          </p>
          <p className="text-[#454545] w-full max-w-[80%] text-sm md:text-2xl text-center mt-4 md:mt-8 font-jost">
            Turn your tea time into a cleansing ritual with Nutrasip's Detox
            Kahwa. Infused with the power of herbs and zero bitterness, it
            gently detoxifies your body while calming your senses. Whether at
            home or in the office, you’ll feel lighter and healthier, with
            wellness embracing you from within. Every sip restores balance,
            leaving you refreshed, light, and rejuvenated.
          </p>
          {/* Benefits Section */}
          <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-[50px] mb-[50px]">
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-detox/power-of-herbs.png"
                alt="Power Of 8 Herbs"
                width={120}
                height={120}
              />
              <p className="mt-3 text-black text-base font-medium">
                Power Of 8 Herbs
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-detox/zero-bitterness.png"
                alt="Zero Bitterness"
                width={120}
                height={120}
              />
              <p className="mt-3 text-black text-base font-medium">
                Zero Bitterness
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="https://main.d48ln31wxsfnc.amplifyapp.com/nutrasip/green-tea-detox/detoxifies-body.png"
                alt="Detoxifies Body"
                width={120}
                height={120}
              />
              <p className="mt-3 text-black text-base font-medium">
                Detoxifies Body
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-0">
          <Image
            src="https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/sachets/2.png"
            height={280}
            width={380}
            alt="header-logo"
            className="mt-8 w-auto"
          />
        </div>
      </div>

      {/* <div className="w-full relative flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 sm:gap-10 px-4 lg:px-36 pb-0 pt-6 md:py-6">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
            <h3 className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] font-literata -mt-5">
              Our Range
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF9F0] py-10 w-full flex flex-col items-center">
        <p className="text-[20px] md:text-[40px] text-[#9F7B49] font-bold">
          Recipes
        </p>
        <div className="w-[90%] gap-10 py-10 flex items-center justify-center media-apis">
          <EmblaCarousel options={OPTIONS} autoScroll>
            {RECIPIES_DATA1.map((itm) => {
              return (
                <div className="embla__slide">
                  <div className="w-full">
                    <div className="w-full">
                      <iframe
                        src={itm.video}
                        height={400}
                        alt="header-logo"
                        className="bg-opacity-40 w-full max-h-[363px] max-w-[514px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[25px]"
                      />
                    </div>
                    <div className="border-2 max-w-[514px] bg-white border-[hsl(35,37%,45%)] mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3 py-3 px-2 lg:px-4">
                      <p className="text-sm lg:text-xl font-bold text-[#373737] font-jost">
                        {itm?.title}
                      </p>
                      <p className="text-sm lg:text-xl font-normal text-[#373737] font-jost">
                        {itm?.time}
                      </p>
                      <p className="text-[#666666] text-xs lg:text-sm font-jost">
                        {itm?.descreption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
        <Link href={"/our-brand/recipes"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
        </Link>
      </div> */}
      <div className="bg-[#FFF9F0] relative w-full min-h-[600px] flex justify-center items-center">
        <Image
          src={Ring1}
          width={150}
          height={150}
          alt="header-logo"
          className="h-[150px] hidden lg:block absolute top-0 left-0 w-[150px]"
        />
        <div className="w-full flex flex-col lg:flex-row my-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8 mt-12 lg:mt-0">
            <div
              className={` relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
        rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 mt-8 z-50 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div className="bg-custom-radial-gradient absolute bottom-4 md:bottom-8 z-50 left-4 md:left-8  rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[300px] md:w-[380px]"></div>
              <Image
                src="https://main.d48ln31wxsfnc.amplifyapp.com/brands/nutrasip/sachets/5.png"
                height={180}
                width={520}
                alt="product-image"
                className="z-50 absolute -right-2 bottom-4 z-20"
              />
              <div className="relative h-full w-full hidden md:block">
                <Image
                  src={Ring4}
                  height={200}
                  alt="ring-image"
                  className="h-[225px] w-[225px] rotate-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative px-4 lg:px-14 flex flex-col gap-4 md:gap-8 items-center mt-8 lg:mt-0">
            <p className="text-xl md:text-[30px] relative text-center font-light">
              Benefits of Detox Kahwa
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="comma-icon"
                className="h-[60px] lg:block absolute -top-2 right-[-32px] w-[40px]"
              />
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="comma-icon"
                className="h-[60px] lg:block absolute -top-2 right-[-40px] w-[40px]"
              />
            </p>
            <div className="w-full max-w-[520px] bg-white/80 border border-[#E7DCC8] rounded-[14px] p-4 md:p-6 shadow-sm">
              <p className="sr-only">Benefits list</p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {["Power of 8 Herbs", "Zero Bitterness", "Detoxifies Body"].map(
                  (text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 md:gap-4 bg-[#FFF9F0] rounded-lg px-3 py-2 md:px-4 md:py-3 border border-transparent hover:border-[#E6D3B3] transition-colors"
                    >
                      <span className="flex-shrink-0 mt-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="text-[#9F7B49]"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="#9F7B49"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span className="text-sm md:text-base text-[#454545] font-jost leading-tight">
                        {text}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <Image
              src={Ring3}
              width={80}
              height={250}
              alt="ring-image"
              className="h-[250px] hidden lg:block absolute top-16 right-0 w-[60px]"
            />
          </div>
        </div>
        {/* <Image
          src={selectedProduct.saysImage}
          width={200}
          height={200}
          alt="hand-drawn-honey"
          className="h-[180px] hidden lg:block absolute bottom-0 right-0 w-[180px]"
        /> */}
      </div>
    </div>
  );
};

export default NutrasipDetails;
