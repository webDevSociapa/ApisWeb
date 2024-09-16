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
import TrainingSession from "@/assets/images/Careers/Training&Session.png";
import ImageBanner from "../../Layout/Banner";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../Carousel/EmblaCarouselArrowButtons";
import { useState } from "react";

const SUSTAINABILITY_DATA = [
  {
    img: Award,
    title:
      "Empowering communities through educational programs and health initiatives.",
  },
  {
    img: TrainingSession,
    title:
      "Promoting environmental sustainability with green practices and eco-friendly solutions.",
  },
  {
    img: Engagements,
    title:
      "Supporting local causes with charitable contributions and dedicated volunteer efforts.",
  },
  {
    img: Celebrations,
    title: "Celebrations Promoting environmental sustainability",
  },
  {
    img: TrainingSession,
    title:
      "Promoting environmental sustainability with green practices and eco-friendly solutions.",
  },
  {
    img: Engagements,
    title:
      "Supporting local causes with charitable contributions and dedicated volunteer efforts.",
  },
];

export default function Sustainability() {
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
          SUSTAINABILITY_DATA.length
      );
    }
  };

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-10">
        <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49]">
          CSR @Apis
        </p>
        <p className="w-[96%] md:w-[75%] text-sm md:text-xl text-center">
          At Apis India, our Corporate Social Responsibility (CSR) initiatives
          reflect our commitment to making a positive impact on society and the
          environment. We actively support various community development
          programs, including educational outreach, environmental
          sustainability, and health and wellness initiatives. Our efforts are
          focused on creating meaningful change, from promoting green practices
          and reducing our carbon footprint to supporting local communities
          through charitable contributions and volunteer work. We believe that
          by investing in people and the planet, we can build a better future
          for everyone. Join us in our journey to make a difference!
        </p>
      </div>
      <div className=" w-[90%] flex items-center justify-center">
        <section className="embla flex items-center justify-between !w-full">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container py-8 md:py-20">
              {SUSTAINABILITY_DATA.map((itm, index) => (
                <div className="embla__slide pointer-events-none" key={index}>
                  <div className="embla__slide__number pointer-events-none">
                    <div className="bg-[#EECB9A] w-[280px] sm:w-[320px] xl:w-auto rounded-xl flex flex-col h-[320px] md:h-[400px] p-2.5 px-1.5 justify-between border border-[#85673D]">
                      <Image
                        src={itm?.img}
                        width={240}
                        height={240}
                        alt="header-logo"
                        className="h-[240px] md:h-[300px] rounded-2xl w-full bg-opacity-40"
                      />
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
          {SUSTAINABILITY_DATA.map((_, index) => (
            <p
              key={index}
              // onClick={() => handleNumberClick(index)}
              className={`text-base md:text-3xl  border-black px-2 md:px-6 ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"} ${index === 0 ? "" : "border-l"}`}
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
