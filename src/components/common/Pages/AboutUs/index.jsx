"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/AboutUs/AboutUs.png";
import MissionBanner from "@/assets/images/AboutUs/MissionBanner.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Curv from "@/assets/images/AboutUs/Curv.png";
import ManBack1 from "@/assets/images/AboutUs/ManBack1.png";
import ManBack2 from "@/assets/images/AboutUs/ManBack2.png";
import VimalAnand from "@/assets/images/AboutUs/VimalAnand.png";
import Frame1 from "@/assets/images/AboutUs/Frame1.png";
import Frame2 from "@/assets/images/AboutUs/Frame2.png";
import AmitAnand from "@/assets/images/AboutUs/AmitAnand.png";
import ImageBanner from "../../Layout/Banner";
import { useState } from "react";
import Link from "next/link";
import Journey from "./Journey";

export default function OurBrand() {
  const [activeTab, setActiveTab] = useState("vision");

  const renderContent = () => {
    switch (activeTab) {
      case "vision":
        return "To inspire consumers with products that enable living a healthier and fitter lifestyle through continuous product innovation.";
      case "mission":
        return "To bring the finest organic products, crafted with care and sustainability, ensuring every item purchased is free from artificial additives and harmful chemicals.";
      case "values":
        return "Believing in the power of nature to nourish and enhance well-being, committing to quality and sustainability.";
      default:
        return "";
    }
  };

  const LEGACY_DATA = [
    {
      count: "2580+",
      title: "Product Ranges",
    },
    {
      count: "580+",
      title: "Years Of Legacy",
    },
    {
      count: "280+",
      title: "New Customer",
    },
    {
      count: "6580+",
      title: "Number Of Outlets",
    },
  ];

  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="bg-white text-gray-800">
        <div className="relative w-full">
          <div className="inset-0 flex items-center justify-center">
            <h1 className="text-[#585858] text-center text-shadow-4xl stroke-1 stroke-black font-jost text-sm md:text-[1.375rem] font-medium uppercase">
              ABOUT APIS
            </h1>
          </div>
        </div>
      </div>
      <section className="p-4 text-center">
        <h2 className="text-[#9F7B49] text-center font-literata text-[20px] md:text-[40px] font-bold">
          Purely Crafted Natural Flavors
        </h2>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto">
          Welcome to Apis India, where nature meets quality. We are dedicated to
          bringing you the finest organic products, crafted with care and
          sustainability. Our commitment to purity ensures that every item you
          purchase is free from artificial additives and harmful chemicals. At
          Apis India, we believe in the power of nature to nourish and enhance
          your well-being. Discover a world of natural goodness with our range
          of high-quality, organic FMCG products, and experience the difference
          that purity makes. Purely Natural, Simply Better.
        </p>
      </section>
      <div className="relative mt-14 flex flex-col items-center justify-center w-full">
        <ImageBanner banner={MissionBanner} style={{height:"1300px"}} />
        <div className="w-full flex justify-end items-center absolute end-0 top-0">
          <div className="bg-opacity-80 p-2 md:p-8 rounded-md w-full flex flex-col">
            <div className="flex flex-row justify-between items-center gap-2 md:gap-10">
              <button
                className={`text-white text-center text-shadow-lg font-literata font-bold leading-normal ${activeTab === "vision" ? " text-lg md:text-4xl text-shadow" : "text-sm md:text-3xl"}`}
                onClick={() => setActiveTab("vision")}
              >
                Vision
              </button>
              <button
                className={`text-white text-center text-shadow-lg font-literata font-bold leading-normal ${activeTab === "mission" ? "text-lg md:text-4xl text-shadow" : "text-sm md:text-3xl"}`}
                onClick={() => setActiveTab("mission")}
              >
                Mission
              </button>
              <button
                className={`text-white text-center text-shadow-lg font-literata font-bold leading-normal ${activeTab === "values" ? "text-lg md:text-4xl text-shadow" : "text-sm md:text-3xl"}`}
                onClick={() => setActiveTab("values")}
              >
                Values
              </button>
            </div>
            <p className="text-white mt-4 xs:mt-12 md:mt-20 self-center text-[#373737] text-center font-jost w-[90%] lg:w-[70%] text-xs sm:text-base md:text-3xl font-medium">
              {renderContent()}
            </p>
          </div>
        </div>
        <div className="lg:absolute bottom-4">
          <Image
            src={Curv}
            alt="Banner Image"
            className="object-cover hidden lg:inline  h-[260px] w-full md:h-[443px] cursor-pointer"
          />
          <div className="relative">
            <div className="lg:absolute z-10 bottom-[124px] left-0 right-0 flex gap-4 flex-wrap justify-around items-center mt-10 text-center p-4">
              {LEGACY_DATA.map((itm) => {
                return (
                  <div className="w-[130px] lg:w-[200px] xl:w-[275px] h-[110px] xl:h-[170px] flex-shrink-0 border rounded-[1.875rem] border-[#9F7B49] bg-transparent shadow-md flex items-center justify-center">
                    <div className="flex gap-3 items-center justify-center flex-col">
                      <p className="text-[14px] lg:text-[20px] xl:text-[34px] text-center spaced-words font-bold ms-4 text-[#9F7B49]">
                        {itm.count}
                      </p>
                      <p className="text-[#131313] text-[12px] lg:text-base xl:text-[24px] font-semibold">
                        {itm?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full manager-back-1-bg flex relative items-center flex-col justify-between bg-vimal">
          <Image
            src={ManBack1}
            className="hidden z-0 lg:inline -top-8 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <p className="font-bold z-10 text-[20px] md:text-[40px] text-center text-[#9F7B49]">
            Our Directors
          </p>
          <div className="flex mt-4 md:mt-0 flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-[440px] flex justify-center items-center">
                <Image
                  src={VimalAnand}
                  alt="Banner Image"
                  className="object-cover  h-[260px] w-[290px] z-50 md:w-[342px] md:h-[416px] z-10 cursor-pointer"
                />
                <Image
                  src={Frame1}
                  alt="Banner Image"
                  className="object-cover hidden md:inline absolute -top-8 z-20 h-[260px] left-6 w-[290px] md:w-[420px] md:h-[460px] cursor-pointer"
                />
                <Image
                  src={Ring1}
                  className="hidden lg:inline z-10 absolute -left-14 -bottom-28 h-[331px] w-[331px] rotate-animation"
                />
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 z-10  flex flex-col md:gap-4 gap-2 items-center justify-center">
              <h3 className="text-center text-2xl font-bold text-[#9F7B49]">
                VIMAL ANAND
              </h3>
              <p className="text-center text-lg text-[#373737] font-normal">
                Managing Director
              </p>
              <p className="text-center font-jost text-[#373737] font-medium w-[70%]">
                Driven by his passion and conviction, Mr. Vimal Anand has
                received formal training in beekeeping and Honey processing from
                the University of Warmia Olystyn Poland. Gradually he built a
                global presence & a robust structure supported by a
                state-of-the-art production factory to cater to the global
                markets. His undeterred leadership and vision have led the
                company to reach its heights today, becoming a leading player in
                the world's organized honey trade.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col md:flex-row manager-back-2-bg relative flex items-end pb-8 justify-between">
          <Image
            src={ManBack2}
            className="hidden z-0 lg:inline top-0 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <div className="w-full mt-8 md:w-1/2 z-10 flex flex-col gap-4 items-center justify-center">
            <h3 className="text-center text-2xl font-bold text-[#9F7B49]">
              AMIT ANAND
            </h3>
            <p className="text-center text-lg text-[#373737] font-normal">
              Managing Director
            </p>
            <p className="text-center font-jost text-[#373737] font-medium w-[70%]">
              A Delhi University Graduate from Kirori Mal College in Commerce,
              he spearheads key functions of Overall Plant Management; Human
              Resources; and Finance. The Managing Director of the company and
              the younger one of the two siblings, he has played the perfect
              foil to the elder in initiating the GREEN FIELD initiative of the
              factory in Roorkee. Leading from the front in all factory
              operations a person with hands-on expertise in executing all
              details at the plant level
            </p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2 flex items-center justify-center">
            <div className="relative w-[440px] flex justify-center items-center">
              <Image
                src={AmitAnand}
                alt="Banner Image"
                className="object-cover z-50 absolute h-[260px] w-[290px] md:w-[342px] md:h-[416px] z-10 cursor-pointer"
              />
              <Image
                src={Frame2}
                alt="Banner Image"
                className="object-cover -top-10 z-10 h-[260px] left-0 w-[290px] md:w-[420px] md:h-[460px] cursor-pointer"
              />
              <div>
                <Image
                  src={Ring1}
                  className="hidden z-0 lg:inline absolute -left-20 -top-6 h-[331px] w-[331px] rotate-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <p className="text-center text-[14px] font-jost md:text-[22px] uppercase text-[#585858]">
          Celebrating a Legacy of Quality and Growth
        </p>
        <Link target="_blank" href="/about-us/journey">
          <h3 className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] mt-2">
            Journey
          </h3>
        </Link>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto">
          From humble beginnings to a leading FMCG brand, Apis India’s journey
          is defined by a commitment to quality, innovation, and customer
          satisfaction. Join us as we continue to grow and inspire.
        </p>
      </div>
      {/* <Link href={"/our-brand/product-details/recipies"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
        </Link> */}
        <Link href={"/about-us/journey"}>
        <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{fontFamily:"Literata"}}>Check Our Milestone</button>
        </Link>

      {/* <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{fontFamily:"Literata"}}>Check Our Milestone</button> */}
      {/* <div>Check Our Milestone</div> */}
    </>
  );
}

OurBrand.propTypes = {
  initialData: PropTypes.object,
};
