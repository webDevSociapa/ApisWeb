"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/AboutUs/mainAboutusBanner.png";
import MissionBanner from "@/assets/images/AboutUs/missionVission.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Curv from "@/assets/images/AboutUs/Curv.png";
import ManBack1 from "@/assets/images/AboutUs/ManBack1.png";
import ManBack2 from "@/assets/images/AboutUs/ManBack2.png";
import VimalAnand from "@/assets/images/AboutUs/VimalAnand.png";
import Frame1 from "@/assets/images/AboutUs/Frame1.png";
import Frame2 from "@/assets/images/AboutUs/Frame2.png";
import AmitAnand from "@/assets/images/AboutUs/AmitAnand.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import AboutusLogo from '@/assets/images/AboutUs/aboutusLogo.png';
import AboutStreak from '@/assets/images/AboutUs/aboutStreak.png'
import HexaGonalPage from "../../Pages/AboutUs/Hexagonal";

export default function AboutUsPage({ }) {
  const [activeTab, setActiveTab] = useState("vision");
  const [counts, setCounts] = useState({
    productRanges: 0,
    yearsOfLegacy: 0,
    newCustomers: 0,
    numberOfOutlets: 0
  });

  const LEGACY_DATA = [
    {
      count: 2580,
      title: "Product Ranges",
      key: "productRanges"
    },
    {
      count: 600,
      title: "Years Of Legacy",
      key: "yearsOfLegacy"
    },
    {
      count: 280,
      title: "New Customer",
      key: "newCustomers"
    },
    {
      count: 6580,
      title: "Number Of Outlets",
      key: "numberOfOutlets"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        let allReached = true;

        LEGACY_DATA.forEach(item => {
          if (newCounts[item.key] < item.count) {
            newCounts[item.key] += Math.ceil((item.count - newCounts[item.key]) / 10);
            allReached = false;
          } else {
            newCounts[item.key] = item.count;
          }
        });
        if (allReached) {
          clearInterval(interval);
        }
        return newCounts;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "vision":
        return `To inspire consumers with products that enable living a healthier and fitter lifestyle through continuous product innovation`
      case "mission":
        return `To inspire consumers with products that enable living a healthier and fitter lifestyle through continuous product innovation.`
      case "values":
        return `Believing in the power of nature to nourish and enhance well-being, committing to quality and sustainability.`
      default:
        return "";
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <div className="relative w-full">
          <Image
            src={Banner}
            alt="Banner Image"
            width={1440}
            height={1440}
            className="object-cover w-full h-100"
          />
        </div>
      </main><div className="static">
        <Image src={AboutStreak} className="absolute top-[500px] right-4 aboutStrek" /> {/* Adjusted top value */}
        {/* <Image src={AboutusLogo} className="absolute top-[680px] right-4 aboutslogo" /> */}
      </div>
      <div className="bg-white text-gray-800">
        <div className="relative w-full">
          <div className="inset-0 flex items-center justify-center">
            <h1 className="text-[#585858] text-center text-shadow-4xl stroke-1 stroke-black font-jost text-sm md:text-[1.375rem] font-medium uppercase">
              ABOUT APIS
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="static top-0">
        <Image 
        src={AboutusLogo}
        />
        </div>
       <div className="absolute top-180">
       <Image 
        src={AboutStreak}
        />
       </div>
      </div> */}
      <section className="p-4 text-center">
        <h2 className="text-[#9F7B49] text-center font-literata text-[20px] md:text-[40px] font-bold">
          Purely Crafted Natural Flavors
        </h2>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto">
        Welcome to Apis India, where nature meets quality. We are dedicated to bringing you the finest organic products, crafted with care and sustainability. Our commitment to purity ensures that every item you purchase is free from artificial additives and harmful chemicals. At Apis India, we believe in the power of nature to nourish and enhance your well-being. Discover a world of natural goodness with our range of high-quality, organic FMCG products, and experience the difference that purity makes. Purely Natural, Simply Better.
        </p>
      </section>
      <div id="mission-values" className="relative mt-14 flex flex-col items-center justify-center w-full">
        <Image src={MissionBanner} width={1440} className="object-cover w-full h-100" />

        <div className="w-full flex justify-end items-center absolute end-0 top-0">
          <div className="bg-opacity-80 p-2 md:p-8 rounded-md w-full flex flex-col">

            <div className="flex flex-row justify-between items-center gap-2 md:gap-10">
              {["vision", "mission", "values"].map((tab) => (
                <button
                  key={tab}
                  className={`text-black text-center text-shadow-lg font-literata font-bold leading-normal ${activeTab === tab ? "text-lg md:text-4xl text-shadow underline" : "text-sm md:text-3xl"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative w-full flex justify-center mt-12 xs:mt-12 md:mt-20">
              <div
                key={activeTab}  // Change key to re-render and trigger animation
                className="md:p-8 pb-2 rounded-xl w-[90%] lg:w-[70%] shadow-lg animate-slideInLeft"
              >
                <p className="text-black text-center font-jost text-xs sm:text-base md:text-2xl font-medium">
                  {renderContent()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute bottom-4 w-full">
          <Image src={Curv} alt="Banner Image" className="object-cover hidden lg:inline w-full h-auto max-h-[670px]" />

          <div className="relative">
            <div className="lg:absolute z-10 bottom-[124px] left-0 right-0 flex gap-4 flex-wrap justify-around items-center mt-10 text-center p-4 2xl:py-10 curvonLegacyData">
              {LEGACY_DATA?.map((item) => (
                <div key={item.key} className="w-[130px] lg:w-[200px] xl:w-[275px] h-[110px] xl:h-[170px] flex-shrink-0 border rounded-[1.875rem] border-[#9F7B49] bg-transparent shadow-md flex items-center justify-center">
                  <div className="flex gap-3 items-center justify-center flex-col">
                    <p className="text-[14px] lg:text-[20px] xl:text-[34px] text-center spaced-words font-bold ms-4 text-[#9F7B49]">
                      {counts[item.key]}+
                    </p>
                    <p className="text-[#131313] text-[12px] lg:text-base xl:text-[24px] font-semibold font-jost">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* */}
        <div className="w-full manager-back-1-bg flex flex-col items-center justify-between bg-vimal relative">
          <Image
            src={ManBack1}
            className="hidden lg:inline z-0 -top-8 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <p className="font-bold z-10 text-[20px] md:text-[40px] text-center text-[#9F7B49]">
            Our Directors
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-[300px] md:w-[440px] flex justify-center items-center">
                <Image
                  src={VimalAnand}
                  alt="Banner Image"
                  width={240}
                  height={240}
                  className="object-cover h-[240px] w-[240px] md:h-[416px] md:w-[342px] z-50 cursor-pointer"
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
            <div className="w-full mt-4 md:mt-0 md:w-1/2 z-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-center font-bold text-[#9F7B49] text-[18px] md:text-[24px] font-literata">
                VIMAL ANAND
              </h3>
              <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
                Managing Director
              </p>
              <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
              Driven by his passion and conviction, Mr. Vimal Anand has received formal training in beekeeping and Honey processing from the University of Warmia Olystyn Poland. Gradually he built a global presence & a robust structure supported by a state-of-the-art production factory to cater to the global markets. His undeterred leadership and vision have led the company to reach its heights today, becoming a leading player in the world's organized honey trade.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col md:flex-row manager-back-2-bg relative flex items-end pb-8 justify-between">
          <Image
            src={ManBack2}
            className="hidden lg:inline z-0 top-0 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <div className="w-full mt-8 md:w-1/2 z-10 flex flex-col gap-2 items-center justify-center">
            <h3 className="text-center font-bold text-[#9F7B49] text-[18px] md:text-[24px] font-literata">
              AMIT ANAND
            </h3>
            <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
              Managing Director
            </p>
            <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
            A Delhi University Graduate from Kirori Mal College in Commerce, he spearheads key functions of Overall Plant Management; Human Resources; and Finance. The Managing Director of the company and the younger one of the two siblings, he has played the perfect foil to the elder in initiating the GREEN FIELD initiative of the factory in Roorkee. Leading from the front in all factory operations a person with hands-on expertise in executing all details at the plant level
              </p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2 flex items-center justify-center">
            <div className="relative w-[300px] md:w-[440px] flex justify-center items-center">
              <Image
                src={AmitAnand}
                height={240}
                width={240}
                alt="Banner Image"
                className="object-cover z-50 absolute h-[240px] w-[240px] md:h-[416px] md:w-[342px] cursor-pointer"
              />

              <Image
                src={Frame2}
                alt="Banner Image"
                className="object-cover -top-10 z-10 h-[240px] left-0 w-[240px] md:w-[420px] md:h-[460px] cursor-pointer"
              />

              <Image
                src={Ring1}
                className="hidden lg:inline z-0 absolute -left-20 -top-6 h-[331px] w-[331px] rotate-animation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p className="text-center text-[14px] font-jost md:text-[22px] uppercase text-[#585858]">
          Celebrating a Legacy of Quality and Growth
        </p>
        <h3 className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] mt-2">
          Journey
        </h3>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto sm: px-4">
          From humble beginnings to a leading FMCG brand, AIL's journey
          is defined by a commitment to quality, innovation, and customer
          satisfaction. Join us as we continue to grow and inspire.
        </p>
        <HexaGonalPage />
      </div>

      {/* <div classNamelass="relative h-screen">
        <div className="flex flex-wrap -ml-12 -mt-0 sm: ">
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
            // <div
            //   key={index}
            //   class="hexagon_jorney"
            //   style={{ backgroundImage: `url(${itm.image})` }}
            // ></div>
          ))}
        </div>
        <div className="flex flex-wrap -ml-12 -mt-8 even:ml-0" style={{ marginLeft: "57px" }}>
          {ImageDataJourney1.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
        <div className="flex flex-wrap -ml-12 -mt-8 even:ml-0">
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
        <div className="flex flex-wrap -ml-30 -mt-8 even:ml-0" style={{ marginLeft: "57px" }}>
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
      </div>  */}
      {/* <Link href={"/our-brand/product-details/recipies"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
          ""
        </Link> */}
      <Link href={"/about-us/journey"}>
        <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 mt-2 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{ fontFamily: "Literata" }}>Check Our Milestone</button>
      </Link>

      {/* <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{fontFamily:"Literata"}}>Check Our Milestone</button> */}
      {/* <div>Check Our Milestone</div> */}
    </>
  );
}


AboutUsPage.propTypes = {
  initialData: PropTypes.object,
};




