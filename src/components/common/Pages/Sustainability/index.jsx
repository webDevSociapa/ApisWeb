"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import PropTypes from "prop-types";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import Banner from "@/assets/images/Careers/sustainBannerNew.png";
import Award from "@/assets/images/Careers/Award.png";
import Celebrations from "@/assets/images/Careers/Celebrations.png";
import Engagements from "@/assets/images/Careers/Engagements.png";

// sustain
import sustainBility01 from "@/assets/images/Careers/s1.png"
import sustainBility02 from "@/assets/images/Careers/s2.png"
import sustainBility03 from "@/assets/images/Careers/s3.png"
import sustainBility04 from "@/assets/images/Careers/s4.png"
import sustainBility05 from "@/assets/images/Careers/s5.png"
import sustainBility06 from "@/assets/images/Careers/s6.png"
// import TrainingSession from "@/assets/images/Careers/Training&Session.png";
import ImageBanner from "../../Layout/Banner";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../Carousel/EmblaCarouselArrowButtons";
import { useEffect, useState } from "react";
import axios from "axios";

const SUSTAINABILITY_DATA = [
  {
    video: 'https://www.youtube.com/embed/WrVpkXNKN0s?si=3KELcA1Kg-kkOWb8',
    title:
      "Celebrating Raksha Bandhan with the children of Mala Smriti Home.",
  },
  {
    video: 'https://www.youtube.com/embed/pdy5gJ36egw?si=XkMlb7RXfhCyegaQ',
    title:
      "It was a pleasure to associate with Lotus Petal Foundation",
  },
  {
    video: 'https://www.youtube.com/embed/o1A2uGBuVRs?si=gk_zkJN1CtIWlTPk',
    title:
      "Sweet deal alert! Apis Organic Honey",
  },
  {
    video: 'https://www.youtube.com/embed/GApcDNHtgnE?si=iq73ny88KY04wK2X',
    title: "Celebrating Father’s Day",
  },
  {
    video: 'https://www.youtube.com/embed/U6pkoQRrcNk?si=z7ZDd9KQWnBuouRO',
    title:
      "We celebrated mothers with Grihshobha",
  },
  {
    video: 'https://www.youtube.com/embed/Vn6jwbZqfhA?si=iPz3NjklLnXpIBTI',
    title:
      "Apis Shapes The Future",
  },
];

const SUSTAINBILITY_IMAGE = [
  { image: sustainBility01 },
  { image: sustainBility02 },
  { image: sustainBility03 },
  { image: sustainBility04 },
  { image: sustainBility05 },
  { image: sustainBility06 },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2600.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2607.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2608.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2610.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2611.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2612.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2613.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2614.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2615.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2616.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2617.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2618.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2619.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2620.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2621.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2622.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2623.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2624.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2625.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2626.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2627.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2628.JPG" },
  { image: "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/factory/IMG_2629.JPG" },

]

export default function Sustainability() {
  const [sustainBiltyData, setSustainBiltyData] = useState([]);
  const [activeTab, setActiveTab] = useState("image"); // Manage active tab  const [sustainBiltyData, setSustainBiltyData] = useState([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: false }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handlePrevButtonClick = () => {
    if (emblaRef.current) {
      emblaRef.current.scrollByIndex(-1);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + SUSTAINABILITY_DATA.length) %
          SUSTAINABILITY_DATA.length);
    }
  };

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
    emblaApi.scrollTo(index); // Add this line to scroll the carousel
  };

  const VideoSection = ({ videos, emblaRef }) => (
    <section className="embla flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container py-8">
          {videos.map((itm, index) => (
            <div className="embla__slide" key={index}>
              <div className="rounded-xl p-4 border border-[#85673D]">
                <iframe
                  width="100%"
                  height="240"
                  className="h-[240px] md:h-[300px] rounded-2xl w-full bg-opacity-40"
                  src={itm.videoUrl}
                  title={itm.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
                <p className="text-xs md:text-base font-normal mt-2">{itm.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ImageSection = ({ images, emblaRef }) => (
    <section className="embla flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container py-8">
          {images.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="rounded-xl p-4 border border-[#85673D]">
                <Image
                  src={item.image || "/Eovibb.png"} // Use a valid path here
                  alt={`CSR Image ${index + 1}`}
                  className="w-full rounded-lg border border-[#85673D]"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Pagination = ({ currentIndex, onPrevButtonClick, onNextButtonClick, totalItems, handleNumberClick }) => (
    <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
      <PrevButton
        onClick={() => {
          onPrevButtonClick();
          handleNumberClick(currentIndex - 1);
        }}
        disabled={currentIndex === 0}
      />
      <div className="flex items-center justify-center">
        {Array.from({ length: totalItems }).map((_, index) => (
          <p
            key={index}
            onClick={() => handleNumberClick(index)} // Add this onClick handler
            className={`text-base md:text-3xl border-black px-2 md:px-6 cursor-pointer ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"}
              ${index === 0 ? "" : "border-l"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <NextButton
        onClick={() => {
          handleNumberClick(currentIndex + 1);
          onNextButtonClick();
        }}
        disabled={currentIndex + 1 === totalItems}
      />
    </div>
  );
  


  useEffect(() => {
    const fetchSustainBilty = async () => {
      try {
        const response = await axios.get("/api/sustainBility");
        console.log("response", response);

        setSustainBiltyData(response.data)
      } catch (error) {

      }
    }
    fetchSustainBilty()
  }, [])


  return (
    <>
    <ImageBanner banner={Banner} />
    
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-10">
      <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49] font-literata">
        CSR @Apis
      </p>
      <p className="w-[96%] md:w-[75%] text-sm md:text-xl text-center font-jost">
        {sustainBiltyData[0]?.csrContent || "Loading..."}
      </p>
    </div>
  
    {/* Tabs */}
    <div className="w-full flex justify-center items-center my-4">
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "image" ? "bg-[#85673D] text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setActiveTab("image")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "video" ? "bg-[#85673D] text-white" : "bg-gray-200 text-black"}`}
          onClick={() => setActiveTab("video")}
        >
          Videos
        </button>
      </div>
    </div>
  
    {/* Image or Video Content */}
    <div className="w-[90%] mx-auto">
      {activeTab === "image" && (
        <section className="embla flex items-center justify-center">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container py-8">
              {SUSTAINBILITY_IMAGE.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <div className="rounded-xl p-4 border border-[#85673D]">
                    <Image
                      key={index}
                      src={item.image || "/Eovibb.png"}
                      alt={`CSR Image ${index + 1}`}
                      className="w-full rounded-lg border border-[#85673D]"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
  
      {activeTab === "video" && (
        <section className="embla flex items-center justify-center">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container py-8">
              {sustainBiltyData?.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="rounded-xl p-4 border border-[#85673D]">
                    <iframe
                      width="100%"
                      height="240"
                      className="h-[240px] md:h-[300px] rounded-2xl w-full bg-opacity-40"
                      src={itm.videoUrl}
                      title={itm.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{ aspectRatio: "16/9" }}
                    ></iframe>
                    <p className="text-xs md:text-base font-normal mt-2">
                      {itm.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  
    {/* Pagination */}
    <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
      <PrevButton
        onClick={() => {
          onPrevButtonClick();
          handleNumberClick(currentIndex - 1);
        }}
        disabled={currentIndex === 0}
      />
      
      <div className="flex items-center justify-center">
        {SUSTAINBILITY_IMAGE.map((_, index) => (
          <p
            key={index}
            onClick={() => handleNumberClick(index)}
            className={`text-base md:text-3xl border-black px-2 md:px-6 cursor-pointer ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"} ${index === 0 ? "" : "border-l"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <NextButton
        onClick={() => {
          handleNumberClick(currentIndex + 1);
          onNextButtonClick();
        }}
        disabled={currentIndex + 1 === SUSTAINBILITY_IMAGE.length}
      />
    </div>
  </>
  
  );
}

Sustainability.propTypes = {
  initialData: PropTypes.object,
};
