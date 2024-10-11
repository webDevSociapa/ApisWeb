"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import News1 from "@/assets/images/home-banner-section/news-1.png";
import Fruit from "@/assets/images/home-banner-section/fruit.png";
import AmazonLogo from "@/assets/images/home-banner-section/amazon.png";
import JioMart from "@/assets/images/home-banner-section/jiomart.png";
import JioMart2 from "@/assets/images/home-banner-section/jio-mart.png";
import DMart from "@/assets/images/home-banner-section/d-mart.png";
import BlinkIt from "@/assets/images/home-banner-section/blink-it.png";
import BigBasket from "@/assets/images/home-banner-section/big-basket.png";
import Union from "@/assets/images/home-banner-section/union.png";
import IndiaUnit from "@/assets/images/home-banner-section/india-unit.png";
import DubaiUnit from "@/assets/images/home-banner-section/dubai-unit.png";
import News2 from "@/assets/images/home-banner-section/news-2.png";
import TrustSlide1 from "@/assets/images/home-banner-section/trust-slide-1.png";
import HoneyBee from "@/assets/images/home-banner-section/honey-bee.png";
import TrustSlide2 from "@/assets/images/home-banner-section/trust-slide-2.png";
import TrustSlide3 from "@/assets/images/home-banner-section/trust-slide-3.png";
import TrustSlide4 from '@/assets/images/home-banner-section/trust-Section4.png'
import TrustSlide5 from '@/assets/images/home-banner-section/Almond-and-Honey1.png';
import TrustSlide6 from '@/assets/images/home-banner-section/soya-chunk.png';
import TrustSlide7 from '@/assets/images/home-banner-section/Peanut-Butter-Creamy.png';
import TrustSlide8 from '@/assets/images/home-banner-section/Muesli-front.png';
import TrustSlide9 from '@/assets/images/home-banner-section/Vector-smart.png';
// import HoneyBee from '@/assets/images/home-banner-section/honey-bee.png'
// import TrustSlide10 from '@/assets/images/home-banner-section/Muesli-front.png';

import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import TrustUpper from "@/assets/images/home-banner-section/trust-upper.png";
import HoneyDhar from "@/assets/images/home-banner-section/honey-dhar.png";
import TrustLower from "@/assets/images/home-banner-section/trust-lower.png";
import EmblaCarousel from "../../Carousel/Carousel";
import HoneyImg from "@/assets/images/home-banner-section/honey-img.png";
import MediaPan from "@/assets/images/home-banner-section/media-pan.png";
import AutoScrollCarousel from "../../AutoScrollCarousel";
import Carasol from "../../MainCarousel";
import { NEWS_DATA } from "@/lib/constants";
import FlowerRun from '@/assets/images/home-banner-section/flowerRun.gif'
import ReactAngle from '@/assets/images/home-banner-section/reactangle1.png'

export default function HomePage() {
  const OPTIONS = { slidesToScroll: 1, align: 'start' }
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [TrustSlide1, TrustSlide2];
  const SLIDE_COUNT = 6;
  const SLIDES = [
    {
      img: TrustSlide1,
      content: "Nature`s golden nectar, pure and organic",
      title: "Organic Honey",
    },
    {
      img: TrustSlide2,
      content: "Spread the joy with rich, velvety chocolate",
      title: "Chocolate Spread",
    },
    {
      img: TrustSlide3,
      content: "Delightful strands of culinary tradition for meals",
      title: "Vermicelli",
    },
    {
      img: TrustSlide5,
      content: "Almond and honey is a nourishing blend used in skincare.",
      title: "Almond and Honey"
    },
    {
      img: TrustSlide6,
      content: "Creamy peanut butter is a smooth peanut spread.",
      title: "Peanut Butter Creamy"
    },
    {
      img: TrustSlide7,
      content: "Soya chunks are protein-rich, plant-based meat alternatives.",
      title: "Soya Chunk"
    },
    // {
    //   img: TrustSlide9,
    //   content: "Lemon honey green tea: refreshing, antioxidant-rich blend.",
    //   title:"Lemon Honey Green Tea"
    // },
    {
      img: TrustSlide8,
      content: "Muesli: a healthy, oat-based cereal.",
      title: "Muesli"
    }


    // {
    //   img: TrustSlide1,
    //   content: "Nature`s golden nectar, pure and organic.",
    //   title: "Organic Honey",
    // },
    // {
    //   img: TrustSlide2,
    //   content: "Spread the joy with rich, velvety chocolate",
    //   title: "Chocolate Spread",
    // },
    // {
    //   img: TrustSlide3,
    //   content: "Delightful strands of culinary tradition for meals",
    //   title: "Vermicelli",
    // },
  ];
  const LATEST_SLIDES = [
    {
      video:
        "https://www.youtube.com/embed/U0P5fV9IF1c?si=pDY2Wt5HVtS0Hffe&amp;start=1",
    },
    {
      video:
        "https://www.youtube.com/embed/mDAY0a94MZU?si=BeiAtbDMKqXN9lJF&amp;start=1",
    },
    {
      video:
        "https://www.youtube.com/embed/W-JTHS3025w?si=tcTpC8J1Cddo0ybE&amp;start=1",
    },
    {
      video:
        "https://www.youtube.com/embed/kGOJpsTJNI8?si=TUKuH3NxLa3kEz9j&amp;start=1",
    },
    {
      video: "https://www.youtube.com/embed/NDDaneL4K8s?si=Tx_7ZixWDpHJzQHf",
    },
  ];
  const AVAILABILITY_SLIDE = [
    { img: AmazonLogo },
    { img: JioMart },
    { img: BigBasket },
    { img: BlinkIt },
    { img: JioMart2 },
    { img: DMart },
  ];

  const MEDIA_SLIDES = [
    {
      img: News1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Organic Honey",
    },
    {
      img: News2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Chocolate Spread",
    },
    {
      img: News1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Organic Honey",
    },
    {
      img: News2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Chocolate Spread",
    },
    {
      img: News1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Organic Honey",
    },
    {
      img: News2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Chocolate Spread",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);



  return (
    <>
      {/* nature page */}
      <div className="relative w-full overflow-hidden bg-buyer-bg-yellow-2 smhome-shadow">
        <div className="home-bg flex w-full flex-col justify-center">
          <div className="absolute end-0 h-full bg-black">
            <Carasol />
          </div>
          <div className="relative me-4 md:me-10 flex flex-col items-start justify-center px-3 sm:px-14 sm:py-16">
            {/* Line 1 */}
            <p className="text-end text-[24px] md:text-[60px] font-bold text-[#ffffff] shadow-white">
              <span className="text-shadow">CHASING</span>
              <span className="text-shadow"> THE</span>
            </p>
            {/* Line 2 */}
            <p className="text-end text-[24px] md:text-[60px] font-bold text-[#ffffff]">
              <span className="text-shadow">NATURAL</span>
              <span className="text-shadow"> FLAVOURS</span>
            </p>
            {/* Line 3 */}
            <p className="text-end text-[24px] md:text-[60px] font-bold text-[#ffffff]">
              <span className="text-shadow">OF</span>
              <span className="text-shadow"> EXCELLENCE</span>
            </p>
          </div>
        </div>
      </div>



      {/* The trust in api */}
      <div className="w-full relative flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 sm:gap-10 px-4 lg:px-36  py-6 lg:py-20 lg:pb-16">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
            <p className="text-center text-[14px] md:text-[22px] uppercase text-[#585858] xl: font-[22px] font-medium font-jost">
              Bringing Freshness to Your Table With Flavorful Products
            </p>
            <h3 className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] md:mt-[-35px] sm: mt-[-15px]">
              The Trust Is In Apis
            </h3>
            <div className="text-center text-[16px] md:text-[24px] font-medium text-[#fffff] font-jost">
              We endeavor to strive together with passion, unity of purpose, and
              unconventional thinking, to be a dynamic front running brand,
              which is greatly valued & trusted for its efficacy and superior
              quality.
            </div>
            <p className="text-center text-[16px] md:text-[24px] font-medium text-[#fffff]" style={{ fontFamily: "jost" }}>
              We are ISO 22000 certified by Intertek which is a documented
              procedure that applies to food Safety Management System framed by
              International body. From producing honey off our own hives to
              marketing the finished retail packs around the globe, we offer the
              consumer a quality product every time.
            </p>
          </div>
          <div>

            <p className="text-center text-[14px] md:text-[22px] uppercase text-[#585858] mt-[20] text-medium font-jost">
              day-to-day choices that weave the most profound stories of character & growth.
            </p>
            <h3 className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] mt-0 md:mt-0">
              The Taste Is What Makes Difference
            </h3>
          </div>
        </div>
        <div className="pb-6 md:pb-20 z-10 w-[70%] flex items-center justify-center">
          <EmblaCarousel options={OPTIONS}>
            {SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !h-[240px] w-full" style={{marginTop:"-30px"}}>
                  <Image
                    src={itm?.img}
                    width={240}
                    height={240}
                    alt="header-logo"
                    className="h-[240px] w-auto max-w-max bg-opacity-40"
                  />
                </div>
                <div className="border-2 border-[hsl(35,37%,45%)] mt-4 lg:mt-10 flex flex-col gap-1 lg:gap-3 p-1.5 w-full sm:w-[50%] h-[60%] md:w-[90%] h-[45%]  xl:w-[90%] h-[30%] mx-auto overflow-none md:py-2">
                  <p className="text-sm sm:text-base lg:text-xl font-bold text-[#373737] mb-2">
                    {itm?.title}
                  </p>
                  <p className="text-[#666666] text-xs sm:text-sm lg:text-base line-clamp-3 sm:line-clamp-none font-jost">
                    {itm?.content}
                  </p>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
        <Image
          src={TrustUpper}
          width={266}
          height={234}
          alt="header-logo"
          className="absolute right-0 -top-0 h-[50px] w-[50px] md:h-[234px] md:w-[266px] object-contain object-center"
        />
        <Image
          src={TrustLower}
          width={252}
          height={428}
          alt="header-logo"
          className="absolute -left-10 z-0 bottom-0 h-[80px] md:h-[300px] w-[140px] md:w-[252px] object-contain object-center"
        />
      </div>

      {/* Day to day story */}
      <div className="px-0 md:px-2 w-full mb-12 xl:-mt-15 2xl:-mt-15">
        <div className="home-story-bg py-8 flex flex-col items-center">
          <p className="uppercase text-sm text-center text-[22px] md:text-lg font-medium text-[#585858] font-medium" style={{ fontFamily: "jost" }}>
            day-to-day choices that weave the most profound stories
          </p>
          <p className="uppercase text-sm md:text-lg font-medium text-[#585858]">
            of character & growth.
          </p>
          <p className="font-bold capitalize text-center text-[20px] md:text-[40px] text-[#9F7B49]">
            Products that make a difference
          </p>
          <div className="px-0 lg:px-2 w-full">
            <div className="home-green-bg relative mt-5 lg:mt-8">
              <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-full">
                  <div className="lg:w-1/2  lg:absolute -top-12 left-6 h-[500px] lg:h-[760px]"></div>
                  <Image
                    src={HoneyImg}
                    // width={266}
                    height={720}
                    alt="header-logo"
                    className="h-[500px] w-full lg:h-[720px] lg:w-1/2  absolute top-0 lg:rounded-tl-[40px] lg:rounded-tr-[250px] lg:rounded-br-[40px] lg:rounded-bl-[250px] rounded-tl-[5px] rounded-tr-[100px] rounded-br-[5px] rounded-bl-[100px]"
                  />
                  <Image
                    src={ReactAngle}
                    className="h-[500px] w-full lg:h-[720px] lg:w-1/2  absolute top-0 lg:rounded-tl-[40px] lg:rounded-tr-[250px] lg:rounded-br-[40px] lg:rounded-bl-[250px] rounded-tl-[5px] robin rounded-tr-[100px] rounded-br-[5px] rounded-bl-[100px]"
                  />
                </div>
                <div className="lg:w-1/2 flex items-center justify-center flex-col py-10 lg:pb-0 overflow-hidden">
                  <div>
                    <p className="text-white font-bold text-[30px] mb-2">
                      Organic Honey
                    </p>
                    <p className="text-xs text-white text-center text-[19px]" style={{ fontFamily: "Jost" }}>
                      Nature's golden nectar, pure and organic
                    </p>
                    {/* <p className="text-xs text-white text-center">
                    pure and organic
                    </p> */}
                  </div>
                  <div className="flex relative md:me-28">
                    <Image
                      src={TrustSlide1}
                      // width={266}
                      height={330}
                      alt="header-logo"
                      className="h-[330px]"
                    />
                    <Image
                      src={TrustSlide2}
                      // width={266}
                      height={253}
                      alt="header-logo"
                      className="h-[253px] hidden md:inline absolute bottom-0 rotate-45 -right-32"
                    />
                    <Image
                      src={HoneyBee}
                      // width={266}
                      height={125}
                      alt="header-logo"
                      className="h-[125px] hidden md:inline absolute bottom-0 rotate-12 -right-10 xs:right-10"
                    />
                  </div>
                  <div className="text-center text-xs text-white w-[65%] text-[20px] font-jost font-normal">
                    Organic honey is a delightful concoction that not only
                    pleases the taste buds but also offers a plethora of health
                    benefits. Unlike conventional honey, which may contain
                    traces of pesticides and other chemicals, organic honey is
                    produced without the use of synthetic pesticides or
                    fertilizers. This ensures that the bees and their
                    environment remain free from harmful substances.
                  </div>
                </div>
              </div>
              <Image
                src={HoneyDhar}
                // width={266}
                height={1058}
                alt="header-logo"
                className="hidden xl:inline h-[1058px] absolute -top-52 -right-4"
              />
            </div>
          </div>
        </div>
      </div>


      {/* API Media */}
      {/*   */}
      <div className="relative w-full flex items-center flex-col justify-center apiMediaSection overflow-hidden py-8">
  <p className="text-[14px] md:text-base text-center text-[#585858] px-4 uppercase font-jost font-normal">
    Stay updated with the latest news, events, and media coverage of APIS India.
  </p>
  <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] my-2 md:my-4">
    Apis Media
  </p>
  <div className="media-apis w-full max-w-7xl z-10 my-4 md:my-10">
    <EmblaCarousel options={{ ...OPTIONS, slidesToScroll: 1, containScroll: 'trimSnaps' }}>
      {NEWS_DATA.map((itm, index) => (
        <div
          className="embla__slide px-1 sm:px-2 md:px-4"
          key={index}
        >
          <a
            href={itm.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="border border-[#85673D] w-[210px] sm:w-[300px] md:w-[400px] h-[350px] md:h-[590px] flex flex-col !rounded-none bg-[#fff] overflow-hidden">
              <div className="relative flex-grow">
                <Image
                  src={itm?.img}
                  alt={itm.desc}
                  // layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#85673D] text-sm md:text-xl mb-1 line-clamp-2">
                  {itm.desc}
                </p>
                <p className="text-[#525252] text-xs md:text-lg">
                  {itm.date}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </EmblaCarousel>
  </div>
  <Image
    src={FlowerRun}
    width={640}
    height={640}
    alt="Flower decoration"
    className="h-[640px] z-0 hidden lg:block w-[640px] absolute -bottom-28 -left-28 opacity-50"
    style={{ transform: "rotate(40deg)" }}
  />
  <Image
    src={FlowerRun}
    width={640}
    height={640}
    alt="Flower decoration"
    className="h-[640px] hidden lg:block w-[640px] absolute -top-12 -right-28 opacity-40"
    style={{ transform: "rotate(-136deg)" }}
  />
</div>

      {/* Our Presence */}
      <div className="pb-10 lg:pb-32 pt-5">
        <p className="text-xs md:text-lg font-medium text-[#585858] text-center uppercase font-jost text-medium sm: px-4">
          Presence is about showing up fully, authentically, and with an open
          heart, ready to
        </p>
        <p className="text-xs md:text-lg text-center font-medium text-[#585858] uppercase font-jost text-medium">
          embrace the moment with all its beauty and challenges.
        </p>
        <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] pt-0 pb-5 md:pt-0 md:pb-10 text-center font-literata">
          Our Presence
        </p>
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 md:gap-20 xl:gap-6 items-center justify-center">
          <div className="w-[300px] lg:w-[605px] relative">
            <div className="px-3 h-[300px] lg:h-[614px] rounded-[50px]">
              <Image
                src={IndiaUnit}
                width={605}
                height={614}
                alt="india"
                className=" w-[300px] h-[300px] lg:h-[614px] lg:w-[605px]"
              />
            </div>
            <div className="relative rounded-[20px] font-bold text-sm shadow-2xl lg:text-xl border p-3 lg:p-5 border-[#9F7B49]">
              India Unit
              <div className="absolute lg:inline hidden -bottom-16 -right-1">
                <div class="hexagon  h-[250px] w-[240px]">
                  <div class="hex-wrapper">
                    <div class="hex-border relative bg-image">
                      <Image
                        src={IndiaUnit}
                        width={220}
                        height={196}
                        alt="dubai"
                        className="bw-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white h-[196px] w-[220px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[300px] lg:w-[605px] relative">
            <div className="px-3 h-[300px] lg:h-[614px] rounded-[50px]">
              <Image
                src={DubaiUnit}
                width={605}
                height={614}
                alt="dubai"
                className="w-[300px] h-[300px] lg:h-[614px] lg:w-[605px]"
              />
            </div>
            <div className="relative shadow-2xl rounded-[20px] text-end font-bold text-sm lg:text-xl border p-3 lg:p-5 border-[#9F7B49]">
              Dubai Unit
              <div className="absolute lg:inline hidden -bottom-16 -left-1">
                <div class="hexagon h-[250px] w-[240px]">
                  <div class="hex-wrapper">
                    <div class="hex-border relative bg-image">
                      <Image
                        src={DubaiUnit}
                        width={220}
                        height={196}
                        alt="dubai"
                        className="bw-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white h-[196px] w-[220px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Availability */}
      <div className="availbility-bg">
        <div className="blur-bg flex gap-2 md:gap-6 items-center justify-center flex-col py-2 m-0 p-0">
          <p className="uppercase font-medium text-[#fff] text-sm md:text-xl font-jost text-medium text-[22px] sm: text-[10px] font-bold font-jost">
            Always here, always ready
          </p>
          <p className="text-bold text-[#D7AD5F] text-[20px] md:text-[40px] font-literata font-semibold">
            Our Availability
          </p>
          <div className="font-medium text-center text-white text-xs md:text-lg w-10/12 text-medium text-[24px] font-medium font-jost sm: text-[10px] text-medium">
            Apis products are widely available to ensure you can enjoy our
            natural and premium offerings wherever you are. You can find our
            range of honey, organic honey, muesli, pickles, and more at leading
            supermarkets, grocery stores, and health food shops across the
            country.
          </div>
          <div className="font-medium text-center text-white text-xs md:text-lg w-10/12 text-[24px] font-medium font-jost text-medium sm: text-[10px] font-jost text-medium">
            Additionally, our products are conveniently accessible online
            through major e-commerce platforms, making it easy to have your
            favorite Apis products delivered right to your doorstep. Whether you
            prefer shopping in-store or online, Apis is always within reach,
            ready to bring the goodness of nature to your table.
          </div>
          <div className="w-full flex items-center flex-col gap-4 md:gap-12 m">
            <div className="mt-2 md:mt-20 bg-white w-full h-[23px] md:h-[65px] flex items-center justify-between px-3 md:pt-2 pt-1 avaibility">
              <EmblaCarousel options={OPTIONS} autoScroll>
                {AVAILABILITY_SLIDE.map((img) => {
                  return (
                    <div className="embla__slide w-[55px] md:w-auto">
                      <Image
                        src={img?.img}
                        height={60}
                        alt="header-logo"
                        className="h-[18px] w-[50px] md:w-auto md:h-[60px] embla__slide__number"
                      />
                    </div>
                  );
                })}
              </EmblaCarousel>
            </div>
            <button className="border border-[#9F7B49] bg-[#9F7B49] px-2 md:px-12 text-[10px] md:text-base py-1 md:py-3 font-bold text-white">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Latest @Apis */}
      <div className="w-full flex flex-col items-center justify-center py-4 md:py-14">
        <p className="font-medium text-center text-[#585858] text-sm  md:text-xl font-medium text-[22px] font-jost">
          DISCOVER OUR LATEST STORIES
        </p>
        <p className="text-bold text-[20px] text-center text-[#9F7B49] md:text-[40px] font-bold text-[20px] font-literata">
          Latest @Apis
        </p>
        <p className="font-medium text-center text-xs md:text-lg text-[#666666] font-medium text-[22px] font-jost sm: -px-4">
          Discover the newest trends, products, and innovations from APIS India.
        </p>
        <div className="py-6 md:py-10 w-[90%] flex items-center justify-center">
          <EmblaCarousel options={OPTIONS}>
            {LATEST_SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !h-[246px] w-full">
                  <iframe
                    width="360px"
                    height="246px"
                    className="rounded w-full sm:w-[360px] sm:h-[246px]"
                    src={itm?.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
        <div className="w-full tvcSectionResponsive">
          <div className="md:tvc-bg relative !w-full">
            <div className="flex flex-col gap-0 md:gap-0 sm: gap-0">
              <p className="font-medium text-center text-[#585858] text-sm  md:text-xl uppercase text-medium font-jost text-medium">
                Our Tele-vision Commercial's
              </p>
              <p className="text-center text-[#9F7B49] text-[20px] md:text-[40px] font-literata font-bold">
                TVC
              </p>
              <div>
                <p className="font-medium text-xs md:text-lg text-center text-[#666666] font-jost text-medium text-[22px] sm: px-4">
                  Catch the latest Apis India commercials showcasing the pure
                  and natural essence of
                </p>
                <p className="font-medium text-xs md:text-lg text-center text-[#666666]  font-jost text-medium text-[22px]">
                  our products.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center w-full tvc-bg sm:justify-center gap-10 pt-5 md:-mt-20 w-full xl:-mt-40 sm:mt-0">
              <iframe
                className="rounded md:h-[360px] h-auto md:w-[580px] max-w-[500px] min-h-[200px] w-auto"
                src="https://www.youtube.com/embed/JUVgptUaFU4?si=ILKh0XegYCLhwId-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                className="rounded hidden lg:inline md:h-[360px] h-auto md:w-[580px] max-w-[500px] min-h-[200px]"
                src="https://www.youtube.com/embed/8HEUabT5LJs?si=SOVN0tBFUyLRzEbp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <Image
              src={Fruit}
              // width={601}
              height={300}
              alt="header-logo"
              className="h-[120px] md:h-[200px] absolute w-auto max-w-max bg-opacity-40 -bottom-10 right-0"
            />
          </div>
        </div>
        <div
          className="container-fluid p-0"
          style={{ position: "relative", left: "88px" }}
        ></div>
      </div>

      {/* Work Place Culture */}
      <div className="work-palace flex items-center justify-center px-4 py-4 lg:px-48 lg:py-48">
        <div className="h-full bg-[#FFF9F0] p-4">
          <div className="flex h-full items-center justify-center bg-white p-3">
            <div className="bg-white flex flex-col gap-2 md:gap-4">
              <p className="text-center text-[22px] md:text-xl font-medium text-[#585858] font-jost text-medium  sm: text-[12px] text-medium">
                BE AMOUNG US
              </p>
              <p className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] font-literata text-semibold xl:text-[40px] sm:text-[20px] xl:-mt-[16px]">
                Work Place Culture
              </p>
              <p className="text-center text-[12px] md:text-xl font-medium text-[#666666] font-jost font-medium text-justify sm:text-[15px] workCultureApis">
                At Apis India, we cultivate a collaborative and innovative
                environment where every team member is encouraged to thrive. We
                believe in the power of teamwork and the importance of
                creativity, fostering a culture where ideas are shared openly,
                and innovation is celebrated. Our inclusive and supportive
                atmosphere ensures that every employee feels valued and
                empowered to contribute their best, driving our collective
                success and growth.
              </p>
              <div className="flex justify-center gap-10 mt-6">
                <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
                  Join US
                </button>
                <button className="border border-[#9F7B49] bg-white px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-[#9F7B49] hover:text-white  hover:bg-[#9F7B49]">
                  Life @apis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HomePage.propTypes = {
  initialData: PropTypes.object,
};
