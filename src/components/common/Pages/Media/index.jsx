"use client"; // Ensure this component is a Client Component
import React,{useState} from 'react'
import Image from "next/image";
import PropTypes from "prop-types";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import Banner from "@/assets/images/Media/media.png";
import Ahar from "@/assets/images/Media/Ahar.png";
import AsianExpo from "@/assets/images/Media/AsianExpo.png";
import WomenDay from "@/assets/images/Media/WomenDay.png";
import News1 from "@/assets/images/Media/News1.png";
import News2 from "@/assets/images/Media/News2.png";
import News3 from "@/assets/images/Media/News3.png";
import News4 from "@/assets/images/Media/News4.png";
import News5 from "@/assets/images/Media/News5.png";
import News6 from "@/assets/images/Media/News6.png";
import NewsName1 from "@/assets/images/Media/NewsName1.png";
import NewsName2 from "@/assets/images/Media/NewsName2.png";
import NewsName3 from "@/assets/images/Media/NewsName3.png";
import NewsName4 from "@/assets/images/Media/NewsName4.png";
import NewsName5 from "@/assets/images/Media/NewsName5.png";
import NewsName6 from "@/assets/images/Media/NewsName6.png";

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

const NEWS_DATA = [
  {
    img: News1,
    name: NewsName1,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
  {
    img: News2,
    name: NewsName2,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
  {
    img: News3,
    name: NewsName3,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
  {
    img: News4,
    name: NewsName4,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
  {
    img: News5,
    name: NewsName5,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
  {
    img: News6,
    name: NewsName6,
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuantium.",
  },
];


export default function Media() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility state
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected news item

  // Function to open modal and set the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close modal and reset selected item
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {/* Banner Section */}
      <ImageBanner banner={Banner} />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
          Apis in the news
        </p>
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center">
          Apis India has consistently shined in the news, with press releases
          highlighting our commitment to quality, innovation, and
          sustainability. Our brand’s achievements and initiatives capture media
          attention and resonate with audiences.
        </p>
      </div>

      {/* News Items Grid */}
      <div className="w-full py-6 md:py-14 flex items-center justify-center flex-wrap gap-x-8 gap-y-10 md:gap-y-24">
        {NEWS_DATA.map((itm, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col gap-1 w-[280px] md:w-[340px] 2xl:w-[383px]"
            onClick={() => openModal(itm)} // Open modal on click
          >
            <div className="h-[260px] md:h-[370px] 2xl:h-[409px]">
              <Image
                src={itm.img}
                alt="News Image"
                className="h-[260px] md:h-[370px] 2xl:h-[409px]"
              />
            </div>
            <div className="w-[140px] md:w-[180px]">
              <Image src={itm.name} alt="News Name" />
            </div>
            <div className="text-xs md:text-base pt-1">{itm.desc}</div>
            <div className="relative border-b-2 mt-2 md:mt-4 border-[#000000] w-[120px] cursor-pointer text-xs">
              Read More
              <div className="absolute -end-6 top-1.5 md:-end-10 md:top-0 d-0 w-[20px] h-[20px] md:h-[33px] md:w-[33px] rounded-full border border-black bg-[#FFFBF6] hover:bg-[#9F7B49] hover:border-none"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-[#FFF9F0] flex flex-col items-center justify-center py-4 md:py-14">
        <p className="font-medium text-center text-[#585858] text-sm  md:text-xl">
          DISCOVER OUR LATEST EVENTS
        </p>
        <p className="font-bold text-[20px] text-center text-[#9F7B49] md:text-[40px]">
          Media Gallery{" "}
        </p>
        <p className="font-medium mt-2 text-center text-xs md:text-lg text-[#666666]">
          Intentions may lay the foundation, but it's our actions that build the
          world we live in.
        </p>
        <div className="py-6 md:py-10 w-[90%] flex items-center justify-center">
          <EmblaCarousel options={{ loop: true }}>
            {LATEST_SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <div>
                    <div className="mx-3 border ">
                      <Image
                        src={itm?.img}
                        alt="header-logo"
                        className="w-[180px] md:w-[300px] h-[200px] md:h-[345px]"
                      />
                    </div>
                    <div className="py-3 text-sm md:text-xl text-[#3A3A3A] border border-[#9F7B49] font-normal text-center truncate">
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
      {/* <div className="relative flex w-full bg-[#FFF9F0]">
        <Image
          src={Ring1}
          className="hidden md:inline absolute left-0 top-0 h-[300px] w-[298px] rotate-animation"
        />
        <div className="w-1/3"></div>
        <div class="relative w-2/3 flex items-center justify-center">
          <div class="absolute inset-0 border-4 border-[#9F7B49] border-dashed rounded-full rotate-6"></div>

          <div class="relative w-2/3 text-center text-sm md:text-xl md:leading-8">
            <p class="font-bold text-[20px] md:text-[40px] text-[#9F7B49]">
              Our Campaigns
            </p>
            <p class="mt-6">
              Dive into Apis India’s successful campaigns that reflect our
              dedication to creativity and impact. Each campaign is crafted to
              resonate with our audience and showcase our brand’s strengths.
            </p>
          </div>
        </div>
      </div> */}


      {/* Modal Section */}
      {isModalOpen && selectedItem && (
  <div
    className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50"
    style={{ paddingTop: '4.5rem' }} // Setting padding top to 4.5rem
    onClick={closeModal} // Close when clicking outside the modal content
  >
    {/* Modal Content */}
    <div
      className="bg-white p-6 rounded-lg w-[100%] max-w-4xl mt-20 relative overflow-auto overflow-x-hidden md:h-[80vh]"
      onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing the modal
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-2xl font-bold"
      >
        X
      </button>
      
      {/* Image and Content */}
      <div className="h-[400px] md:h-[900px] 2xl:h-[1200px] mb-4">
        <Image
          src={selectedItem.img}
          alt="News Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-sm md:text-base pt-1">{selectedItem.desc}</div>
      <div className="w-[160px] md:w-[200px] mt-4">
        <Image src={selectedItem.name} alt="News Name" />
      </div>
    </div>
  </div>
)}



    </>
  );
}

Media.propTypes = {
  initialData: PropTypes.object,
};
