"use client"; // Ensure this component is a Client Component
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import PropTypes from "prop-types";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import Banner from "@/assets/images/Media/media.png";
import Ahar from "@/assets/images/Media/Ahar.png";
import AsianExpo from "@/assets/images/Media/AsianExpo.png";
import WomenDay from "@/assets/images/Media/WomenDay.png";
import { NEWS_DATA } from '@/lib/constants';
import HoneyMugMedia from '@/assets/images/Media/honey_mug.png';
import styles from './media.module.css'; // Importing the CSS module
import Campaign from '@/assets/images/Media/campaign.png'
import handhoney from '@/assets/images/Media/handhoney.png'
import jam from '@/assets/images/Media/jam.png'
import honey from '@/assets/images/Media/honey.png'
import RingCircle from '@/assets/images/Media/ringCircle.png'
import CampaingMedia from '@/assets/images/Media/campaignBg.png'
// import News1 from "@/assets/images/Media/News1.png";
// import News2 from "@/assets/images/Media/News2.png";
// import News3 from "@/assets/images/Media/News3.png";
// import News4 from "@/assets/images/Media/News4.png";
// import News5 from "@/assets/images/Media/News5.png";
// import News6 from "@/assets/images/Media/News6.png";


import ImageBanner from "../../Layout/Banner";
import EmblaCarousel from "../../Carousel/Carousel";

const LATEST_SLIDES = [
  {
    img: WomenDay,
    title: "Women's Day Celebration",
  },
  {
    img: AsianExpo,
    title: "Asian Expo 2019",
  },
  {
    img: Ahar,
    title: "Aahar 2019",
  },
  {
    img: WomenDay,
    title: "Women's Day Celebration",
  },
  {
    img: AsianExpo,
    title: "Asian Expo 2019",
  },
  {
    img: Ahar,
    title: "Aahar 2019",
  },
];

export default function Media() {
  const OPTIONS = { loop: true };
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500); // Update state based on window width
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      {/* Banner Section */}
      <ImageBanner banner={Banner} />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Apis in the news
        </p>
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center font-jost">
          Apis India has consistently shined in the news, with press releases
          highlighting our commitment to quality, innovation, and
          sustainability. Our brand’s achievements and initiatives capture media
          attention and resonate with audiences.
        </p>
      </div>

      {/* News Items Grid */}
      <div className="w-full py-6 md:py-14 flex items-center justify-center flex-wrap gap-x-8 gap-y-10 md:gap-y-24">
        <EmblaCarousel options={OPTIONS}>
          {NEWS_DATA.map((itm, index) => (
            <div key={index} className="embla__slide flex cursor-pointer flex-col gap-1 w-[280px] md:w-[340px] 2xl:w-[383px] mb-8"
            // onClick={() => openModal(itm)} // Open modal on click
            >
              <a
                key={index}
                href={itm.link}
                target="_blank"
              >

                <div className="h-[260px] md:h-[370px] 2xl:h-[409px]">
                  <Image
                    src={itm.img}
                    alt="News Image"
                    width={440}
                    height={440}
                    className="h-[260px] md:h-[370px] 2xl:h-[409px]"
                  />
                </div>
                {/* <div className="w-[140px] md:w-[180px]">
                  <Image src={itm.name} alt="News Name" />
                </div> */}
                <div className="text-xs md:text-base pt-1">{itm.desc}</div>
                <span>{itm.date}</span>
                {/*  */}
                <div className="relative border-b-2 mt-2 md:mt-4 border-[#000000] w-[220px] cursor-pointer text-xs">
                  Read More
                  <div className="absolute -end-6 top-1.5 md:-end-10 md:top-0 d-0 w-[20px] h-[20px] md:h-[33px] md:w-[33px] rounded-full border border-black bg-[#FFFBF6] hover:bg-[#9F7B49] hover:border-none"></div>
                </div>
              </a>
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className="w-full bg-[#FFF9F0] flex flex-col items-center justify-center py-4 md:py-14">
        <p className="font-medium text-center text-[#585858] text-sm  md:text-xl font-jost">
          DISCOVER OUR LATEST EVENTS
        </p>
        <p className="font-bold text-[20px] text-center text-[#9F7B49] md:text-[40px] font-literata">
          Media Gallery
        </p>
        <p className="font-medium mt-2 text-center text-xs md:text-lg text-[#666666] font-jost">
          Intentions may lay the foundation, but it's our actions that build the
          world we live in.
        </p>
        <div className="py-6 md:py-10 w-[90%] flex items-center justify-center">
          <EmblaCarousel options={{ loop: true }}>
            {LATEST_SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <div>
                    <div className="mx-3 border">
                      <Image
                        src={itm?.img}
                        alt="header-logo"
                        className="w-[250px] md:w-[400px] h-[250px] md:h-[345px]"
                      />
                    </div>
                    <div className="py-3 text-sm md:text-xl text-[#3A3A3A] border border-[#9F7B49] font-normal bg-[#fff] text-center truncate font-jost">
                      {itm?.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
      <div className="w-full flex py-2 md:py-6 items-center justify-center flex-col">
        <div className="relative flex items-center justify-center flex-col !w-[96%]">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
              TVC
            </p>
            <div>
              <p className="text-sm md:text-xl md:leading-8 text-center">
                Intentions may lay the foundation, but it's our actions that
                build the world we live in.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full sm:justify-center gap-10 pt-4 md:mt-10 w-full">
            <iframe
              className="rounded lg:inline h-[200px] md:h-[280px] w-[300px] xl:h-[360px] md:w-[580px]"
              src="https://www.youtube.com/embed/JUVgptUaFU4?si=ILKh0XegYCLhwId-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="rounded lg:inline h-[200px] md:h-[280px] xl:h-[360px] w-[300px] md:w-[580px]"
              src="https://www.youtube.com/embed/8HEUabT5LJs?si=SOVN0tBFUyLRzEbp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Carousel for Mobile View */}
     

      {/* Modal Section */}
    </>
  );
}

Media.propTypes = {
  initialData: PropTypes.object,
};













