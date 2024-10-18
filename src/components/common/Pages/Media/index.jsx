"use client"; // Ensure this component is a Client Component
import React, { useState } from 'react'
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
  // const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility state
  // const [selectedItem, setSelectedItem] = useState(null); // Track the selected news item

  // Function to open modal and set the selected item
  // const openModal = (item) => {
  //   setSelectedItem(item);
  //   setIsModalOpen(true);
  // };

  // // Function to close modal and reset selected item
  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedItem(null);
  // };

  // const handleClick = (itm) => {
  //   window.open(itm.link, itm.link); // Opens the link in a new tab
  // };

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


      <div className="flex flex-wrap justify-center mt-[120px] gap-10 w-full bg-[#FFF9F0]">
        <div className='grid grid-cols-2 divide-x bg-cricle-home' style={{ gap: "200px" }}>
          <div className="flex flex-col items-center gap-10 grid grid-cols-1 divide-y">
            <div className="w-[470px] h-[282px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#FFF9F0] to-[#9198e5] shadow-[19px_24px_5px_#DBB79E] relative">
              <Image src={honey} alt="Honey" className="bg-transparent p-[9px] mt-0" />
            </div>
            <div className="w-[470px] h-[282px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#FFF9F0] to-[#9198e5] shadow-[19px_24px_5px_#DBB79E] relative mt-4">
              <Image src={jam} alt="Jam" className="bg-transparent p-[9px] mt-0" />
            </div>
            <div className="">
              {/* <div className="relative flex w-full bg-[#FFF9F0] mt-10 border-2 h-[800px]"> */}

  {/* </div> */}
            </div>
          </div>
          <div className="text-center mt-8">
            <h4 className="uppercase font-semibold text-[34px] text-jost">Our Campaigns</h4>
            <p className="w-[502px] text-[17px] leading-[31.79px] mt-4 font-jost">
              Dive into Apis India’s successful campaigns that reflect our dedication to creativity and impact.
              Each campaign is crafted to resonate with our audience and showcase our brand’s strengths.
            </p>
            <div className='w-[470px] h-[500px] p-[31px]'>
              <div className='absolute p-2'>
                <Image
                  src={Ring1}
                  className="rotate-animation"
                />
              </div>
              <div className="m-12"> {/* Added margin-top to create space below Ring1 */}
                <Image
                  src={handhoney}
                  className="w-[250px]"
                />
              </div>
            </div>
            <div className="w-[470px] h-[282px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#FFF9F0] to-[#BABDBD33] shadow-[19px_24px_5px_#DBB79E] relative mb-4 mt-6"> {/* Added mt-6 for margin-top */}
              <Image src={Campaign} alt="Campaign" className="bg-transparent p-[9px] mt-0" />
            </div>
          </div>
        </div>
        
        


        {/* <div className="relative mx-[160px] border-[7px] border-dotted border-[#9F7B49] rounded-full mb-[67px] mt-8">
    <Image src={handhoney} alt="handhoney" className="w-[39%] mt-[35px]" />
    <div className="absolute top-[-20px] left-[132px] right-[146px] bottom-[-17px] rounded-full border-[7px] border-dotted border-[#9F7B49]"></div>
  </div> */}


      </div>
      {/* Modal Section */}
    </>
  );
}

Media.propTypes = {
  initialData: PropTypes.object,
};



