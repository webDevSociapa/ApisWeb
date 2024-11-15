"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import PropTypes from "prop-types";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import Banner from "@/assets/images/Careers/Careers.png";
import Award from "@/assets/images/Careers/Award.png";
import Celebrations from "@/assets/images/Careers/Celebrations.png";
import Engagements from "@/assets/images/Careers/Engagements.png";
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

export default function Sustainability() {
  const [sustainBiltyData,setSustainBiltyData] = useState([])
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

  useEffect(()=>{
    const fetchSustainBilty = async()=>{
      try {
        const response = await axios.get("/api/sustainBility");
        console.log("response",response);
        
        setSustainBiltyData(response.data)
      } catch (error) {
        
      }
    }
    fetchSustainBilty()
  },[])

  console.log("sustainBiltyData",sustainBiltyData);
  

  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-10">
        <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49] font-literata">
          CSR @Apis
        </p>
        <p className="w-[96%] md:w-[75%] text-sm md:text-xl text-center font-jost">
         {sustainBiltyData[0]?.csrContent}
        </p>
      </div>
      <div className=" w-[90%] flex items-center justify-center">
        <section className="embla flex items-center justify-between !w-full">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container py-8 md:py-20">
              {sustainBiltyData?.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <div className="bg-[#EECB9A] w-[280px] sm:w-[320px] xl:w-auto rounded-xl flex flex-col h-[320px] md:h-[400px] p-2.5 px-1.5 justify-between border border-[#85673D]">
                    {itm.videoUrl ? (
                  <iframe
                    width="100%"
                    height="240"
                    className="h-[240px] md:h-[300px]  rounded-2xl w-full bg-opacity-40 "
                    src={itm.videoUrl}
                    title={itm.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    style={{aspectRatio:"16/9"}}
                  ></iframe>
                ) : (
                  <p className="text-red-500">Video not available</p>
                )}
                      <p className="text-xs md:text-base font-normal px-2.5 pb-2">
                        "{itm.title}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
        {
          <PrevButton
            onClick={() => {
              onPrevButtonClick();
              handleNumberClick(currentIndex - 1);
            }}
            disabled={currentIndex === 0}
          />
        }
        <div className="flex items-center justify-center">
          {sustainBiltyData.map((_, index) => (
            <p
              key={index}
              onClick={() => handleNumberClick(index)} // Add this onClick handler
              className={`text-base md:text-3xl border-black px-2 md:px-6 cursor-pointer ${
                index === currentIndex ? "font-bold" : "font-normal text-gray-600"
              } ${index === 0 ? "" : "border-l"}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </p>
          ))}
        </div>
        <NextButton
          onClick={() => {
            handleNumberClick(currentIndex + 1);
            onNextButtonClick();
          }}
          disabled={currentIndex + 1 === SUSTAINABILITY_DATA.length}
        />
      </div>
    </>
  );
}

Sustainability.propTypes = {
  initialData: PropTypes.object,
};
