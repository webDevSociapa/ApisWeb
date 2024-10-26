"use client";

import Image from "next/image";
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

import ChocolateImg  from '@/assets/images/home-banner-section/ChocolateImg.png'
import ChocolateBox from '@/assets/images/home-banner-section/ChocolateBox.png'
// import HoneyBee from '@/assets/images/home-banner-section/honey-bee.png'
// import TrustSlide10 from '@/assets/images/home-banner-section/Muesli-front.png';

import TrustUpper from "@/assets/images/home-banner-section/trust-upper.png";
import HoneyDhar from "@/assets/images/home-banner-section/honey-dhar.png";
import TrustLower from "@/assets/images/home-banner-section/trust-lower.png";
import EmblaCarousel from "../../Carousel/Carousel";
import HoneyImg from "@/assets/images/home-banner-section/honey-img.png";
import Carasol from "../../MainCarousel";
import { NEWS_DATA } from "@/lib/constants";
import FlowerRun from '@/assets/images/home-banner-section/flowerRun.gif'
import ReactAngle from '@/assets/images/home-banner-section/reactangle1.png'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from 'react';
import ClassicDates from '@/assets/images/home-banner-section/classicDates01.png'
import ChocolateSpread from '@/assets/images/home-banner-section/chocoFlakes01.png'
  import AlmondHoney from '@/assets/images/home-banner-section/cornFlakes01.png'
  import Saffron from '@/assets/images/home-banner-section/saffron01.png'
  import SoyaChunks from '@/assets/images/home-banner-section/soyaChunks01.png'
  import Muesli from '@/assets/images/home-banner-section/muesli01.png'
  import OrganicHoneyGreenCard from '@/assets/images/home-banner-section/organicHoneyGreenCard1.png'
  import HoneyStick from '@/assets/images/home-banner-section/stickHoney.png'
  import { LATEST_SLIDES,LATEST_SLIDES_IMAGES } from "@/lib/constants";
  import Tvc_Apis01 from '@/assets/images/home-banner-section/tvc_apis01.jpeg'
  import Tvc_Apis02 from '@/assets/images/home-banner-section/tvc_apis02.jpeg'



export default function HomePage() {
  const router = useRouter();

  const OPTIONS = { slidesToScroll: 1, align: 'start' }
  const OPTIONS1 = { loop: true }
  const SLIDE_COUNT = 6;
  const SLIDES = [
    {
      img: TrustSlide1,
      content: "Organic honey is a natural, nutrient-rich sweetener with health benefits, perfect for enhancing flavor in foods and beverages.",
      title: "Organic Honey"
    },
    {
      img: ClassicDates,
      content: "Apis Classic Dates are sweet, nutrient-rich fruits ideal for snacking and adding flavor to dishes.",
      title: "Classic Dates"
    },
    {
      img: Muesli,
      content: "Muesli crafted with wholesome ingredients for a nourishing start to your day",
      title: "Muesli"
    },
    {
      img:  ChocolateSpread,
      content: "Apis Choco Flakes are crispy cereal flakes coated in rich chocolate for a delightful breakfast.",
      title: "Choco Flakes",
    },
  
    {
      img: AlmondHoney,
      content: "Apis Corn Flakes are a crunchy, nutritious breakfast cereal made from premium corn.",
      title: "Corn Flakes"
    },
    {
      img: Saffron,
      content: "Apis Saffron is a high-quality spice prized for its rich aroma, color, and health benefits.",
      title: "Saffron"
    },
    {
      img: SoyaChunks,
      content: "Soya chunks are protein-rich, plant-based meat alternatives.",
      title: "Soya Chunk"
    },
    
    // {
    //   img: TrustSlide9,
    //   content: "Lemon honey green tea: refreshing, antioxidant-rich blend.",
    //   title:"Lemon Honey Green Tea"
    // },
   

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
 
  const AVAILABILITY_SLIDE = [
    { img: AmazonLogo, path: "https://www.amazon.in/s?k=apis&crid=2CJFWNXIDZI1V&sprefix=apis%2Caps%2C429&ref=nb_sb_noss_1" },
    { img: JioMart, path: "https://www.jiomart.com/search/apis" },
    { img: BigBasket, path: "https://www.bigbasket.com/ps/?q=apis&nc=as" },
    { img: BlinkIt, path: "https://blinkit.com/s/?q=apis" },
    { img: JioMart2, path: "https://www.jiomart.com/search/apis/in/prod_mart_master_vertical?prod_mart_master_vertical%5BhierarchicalMenu%5D%5Bcategory_tree.level0%5D%5B0%5D=Category" },
    { img: DMart, path: "https://www.dmart.in/search?searchTerm=apis" },
  ];

  const handleJoinUs = () => {
    router.push('/careers#join-us');
  };

  const handleLifeAtApis = () => {
    router.push('/careers#life-at-apis');
  };

  const [currentProduct, setCurrentProduct] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [currentVideo, setCurrentVideo] = useState(''); // State to hold the current video URL



  const openModal = (video) => {    
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo('');
  };


  const products = [
    {
      name: 'Organic Honey',
      description: "Nature's golden nectar, pure and organic",
      image: HoneyImg,
      productImage: OrganicHoneyGreenCard,
      bgColor: 'home-green-bg',
      desc: "Organic honey is a delightful concoction that not only pleases the taste buds but also offers a plethora of health benefits. Unlike conventional honey, which may contain traces of pesticides and other chemicals, organic honey is produced without the use of synthetic pesticides or fertilizers. This ensures that the bees and their environment remain free from harmful substances."
    },
    {
      name: 'Chocolate Spread',
      description: "Indulgent and rich, perfect for any treat",
      image: ChocolateImg,
      productImage: ChocolateBox,
      bgColor: 'home-choco-bg',
      desc: "The chocolate spread from Apis will make you smile in no time. The great mixture of ingredients is what makes it so enticing and fun to eat with anything. You can enhance the flavours of various foods just by adding ApisChocolate Spread to them, which will make them even more delectable."
    },
    
  ];
 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentProduct((prev) => (prev + 1) % products.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])


  return (
    <>
      {/* nature page */}
      <div className="relative w-full overflow-hidden bg-buyer-bg-yellow-2 smhome-shadow">
        <div className="home-bg flex w-full flex-col justify-center">
          <div className="absolute end-0 h-full bg-black">
            <Carasol />
          </div>
          <div className="relative me-4 md:me-10 flex flex-col items-end justify-center px-3 sm:px-14 sm:py-16">
            {/* Line 1 */}
            <p className="text-end text-[24px] md:text-[60px] font-bold text-[#ffffff] shadow-white">
              <span className="text-shadow">CHASING</span>
              <span className="text-shadow">  THE</span>
            </p>
            {/* Line 2 */}
            <p className="text-end text-[24px] md:text-[60px] font-bold text-[#ffffff]">
              <span className="text-shadow">NATURAL</span>
              <span className="text-shadow">  FLAVOURS</span>
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
              procedure that applies to Food Safety Management System framed by
              International body. From producing honey off our own hives to
              marketing the finished retail packs around the globe, we offer the
              consumer a quality product every time.
            </p>
          </div>
          <div>

            <p className="text-center text-[14px] md:text-[22px] uppercase text-[#585858] mt-[20]  text-medium font-jost">
              day-to-day choices that weave the most profound stories of character & growth.
            </p>
            <h3 className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] mt-0 md:mt-0">
               Taste is What Makes the Difference
            </h3>
          </div>
        </div>

        <div className="pb-1 md:pb-20 z-10 w-[80%] flex items-center justify-center">
          <EmblaCarousel options={OPTIONS}>
            {SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !h-[240px] w-full">
                  <Image
                    src={itm?.img}
                    width={350}
                    // height={440}
                    alt="header-logo"
                    className="h-[250px] w-auto max-w-max bg-opacity-40"
                  />
                </div>
                <div className="border-[2px] border-[hsl(35,37%,45%)] mt-4 lg:mt-10 flex flex-col gap-1 lg:gap-3 p-1.5 w-full sm:w-[50%] h-[60%] md:w-[90%] h-[45%]  xl:w-[90%] h-[30%] mx-auto overflow-none md:py-2">
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
          className="absolute right-0 -top-0 h-[50px] w-[50px] md:h-[210px] md:w-[266px] object-contain object-center"
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
      {/* a */}
      <div className="px-0 md:px-2 w-full mb-12 mt-6 md:mt-0">
        <div className="home-story-bg py-8 flex flex-col items-center">
          <p className="uppercase text-sm text-center text-[22px] md:text-lg font-medium text-[#585858] font-medium" style={{ fontFamily: "jost" }}>
          Find Your Favorite Choices Of A Hearty Meals
                    </p>
          {/* <p className="uppercase text-sm md:text-lg font-medium text-[#585858] font-jost">
            of character & growth.
          </p> */}
          <p className="font-bold capitalize text-center text-[20px] md:text-[40px] text-[#9F7B49]">
            Products that make a difference
          </p>
            <div className="px-0 lg:px-2 w-full">
              <div className={`${products[currentProduct].bgColor} relative mt-5 lg:mt-8`}>
                <div className="w-full h-full flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-full">
                    <div className="lg:absolute -top-12 left-6 h-[500px] lg:h-[760px]"></div>
                    <Image
                      src={products[currentProduct].image}
                      height={720}
                      alt="product-image"
                      className="h-[500px] w-[45%] w-full lg:h-[650px] lg:w-[42%] absolute -top-4 lg:rounded-tl-[40px] lg:rounded-tr-[250px] lg:rounded-br-[40px] lg:rounded-bl-[250px] rounded-tl-[5px] rounded-tr-[100px] rounded-br-[5px] rounded-bl-[100px]"
                    />
                    {/* <video
               autoPlay
                muted
                className="h-[500px] w-[45%] w-full lg:h-[650px] lg:w-[42%] absolute -top-4 lg:rounded-tl-[40px] lg:rounded-tr-[250px] lg:rounded-br-[40px] lg:rounded-bl-[250px] rounded-tl-[5px] rounded-tr-[10px] rounded-br-[5px] rounded-bl-[100px] productDiffBg"

                // className={"video-img1"}
                loop // Ensures the video loops continuously
                src={'https://luxor-pen-prod.s3.ap-south-1.amazonaws.com/682.500videoframe-ezgif.com-video-to-mp4-converter+(1).mp4 '}
              /> */}
                    <Image
                      src={ReactAngle}
                      className="h-[500px] w-full lg:h-[650px] lg:w-[42%] absolute -top-4 lg:rounded-tl-[40px] lg:rounded-tr-[250px] lg:rounded-br-[40px] lg:rounded-bl-[250px] rounded-tl-[5px] robin rounded-tr-[100px] rounded-br-[5px] rounded-bl-[100px]"
                    />
                  </div>
                  <div className="lg:w-[38%] flex items-center justify-center flex-col py-10 overflow-hidden">
                    <div className="text-center"> {/* Removed unnecessary classes for centering */}
                      <p className="text-white font-bold text-[30px] mb-2">
                        {products[currentProduct].name}
                      </p>
                      <p className="text-white text-[19px] font-normal font-jost leading-6">
                        {products[currentProduct].description}
                      </p>
                    </div>
                    <div className="flex relative items-center justify-center"> {/* Removed md:me-24 and item-center */}
                      <Image
                        src={products[currentProduct].productImage}
                        height={330}
                        alt="product-slide"
                        className="h-[330px] mx-auto" 
                      />
                      
                      {products[currentProduct].name === 'Organic Honey' && (
                        <Image
                          src={HoneyBee}
                          height={125}
                          alt="honey-bee"
                          className="h-[125px] hidden md:inline absolute bottom-0 rotate-12 -right-20 xs:right-[24px]"
                        />
                      )}
                    </div>
                    <div className="text-center text-white xl:w-[75%] px-3 text-[17px] font-jost font-normal leading-6">
                      {products[currentProduct].desc}
                    </div>
                  </div>
                </div>
                {products[currentProduct].name === 'Organic Honey' && (
                  <Image
                    src={HoneyStick}
                    // height={965}
                    alt="honey-dhar"
                    className="hidden xl:inline h-[550] absolute top-[91px] -right-[10px]"
                  />
                )}
              </div>
            </div>
        </div>
      </div>


      {/* API Media */}
      {/*   */}
      <div className="relative w-full flex items-center flex-col justify-center apiMediaSection overflow-hidden">
      <p className="text-xs md:text-lg text-center text-[#585858] text-[22px] px-4 uppercase font-jost text-medium font-jost font-normal">          
        Stay updated with the latest news, events, and media coverage of APIS India.
        </p>
        <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49]">
          Apis Media
        </p>
        <div className="media-apis w-full max-w-7xl z-10 my-4 md:my-10 px-4 sm:px-0">
          <EmblaCarousel options={OPTIONS} className="embla-close-arrows relative">
            {NEWS_DATA.map((itm, index) => (
              <div
                className="embla__slide flex-[0_0_280px] md:flex-[0_0_495px] min-w-0 px-2"
                key={index}
              >
                <a
                  key={index}
                  href={itm.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-[#85673D] embla__slide__number1 md:w-[460px] h-auto md:h-[590px] p-2 pb-0 flex flex-col !rounded-none bg-[#fff] apismedis" style={{ maxWidth: '90%', margin: '0 auto' }}>
                    <div className="relative w-full h-[200px] sm:h-[280px] md:h-[443px] overflow-hidden">
                      <Image
                        src={itm?.img}
                        alt="header-logo"
                        // layout="fill"
                        // objectFit="cover"
                        className="bg-opacity-40 w-full h-full"
                      />
                    </div>
                    <div className="py-2"> {/* Ensure text is left-aligned */}
                <p className="font-bold text-[#85673D] text-sm md:text-xl mb-1 line-clamp-2 overflow-hidden">
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
          className="h-[640px] hidden lg:block w-[640px] absolute -top-12 -right-20 opacity-40"
          style={{ transform: "rotate(-136deg)" }}
        />
      </div>

      {/* Our Presence */}
      <div className="pb-10 lg:pb-32 pt-10 md: pt-6">
        <p className="text-xs md:text-lg font-medium text-[#585858] text-center uppercase font-jost text-medium sm: px-4">
          Presence is about showing up fully, authentically, and with an open
          heart, ready to
        </p>
        <p className="text-xs md:text-lg text-center font-medium text-[#585858] uppercase font-jost text-medium">
          embrace the moment with all its beauty and challenges.
        </p>
        <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] pt-0 pb-5 md:pt-0  text-center font-literata">
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
      <div className="availbility-bg md:-mt-[20px] mt-[10px]">
        <div className="blur-bg flex gap-2 md:gap-6 items-center justify-center flex-col py-2 m-0 p-0">
          <p className="uppercase font-medium text-[#fff] text-sm md:text-xl font-jost text-medium text-[22px] sm: text-[10px] font-bold font-jost">
            Always here, always ready
          </p>
          <p className="text-bold text-[#D7AD5F] text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-literata font-semibold mt-[-5px] sm:mt-[-7px] md:mt-[-8px] lg:mt-[-22px]">Our Availability
          </p>
          <div className="font-medium text-center text-white text-xs md:text-lg w-10/12 text-[24px] font-medium font-jost sm: text-[10px] text-medium  2xl: w-[70%] ">
            Apis products are widely available to ensure you can enjoy our
            natural and premium offerings wherever you are. You can find our
            range of honey, organic honey, muesli, pickles, and more at leading
            supermarkets, grocery stores, and health food shops across the
            country.
          </div>
          <div className="font-medium text-center text-white text-xs md:text-lg w-10/12 text-[24px] font-medium font-jost text-medium sm: text-[10px] font-jost text-medium 2xl: w-[70%] ">
            Additionally, our products are conveniently accessible online
            through major e-commerce platforms, making it easy to have your
            favorite Apis products delivered right to your doorstep. Whether you
            prefer shopping in-store or online, Apis is always within reach,
            ready to bring the goodness of nature to your table.
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-4 md:gap-12 m">
            <div className="mt-2 md:mt-20 bg-white w-full h-[23px] md:h-[65px] flex items-center justify-between px-3 md:pt-2 pt-1 avaibility">
              <EmblaCarousel options={OPTIONS1} autoScroll>
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
            <Link href={"https://www.amazon.in/s?k=apis&crid=2CJFWNXIDZI1V&sprefix=apis%2Caps%2C429&ref=nb_sb_noss_1"} target="_blank">
            <button className="border border-[#9F7B49] bg-[#9F7B49] px-2 md:px-12 text-[10px] md:text-base py-1 md:py-3 font-bold text-white">
              Explore More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest @Apis */}
      <div className="w-full flex flex-col items-center justify-center py-4 md:py-8 sm: py-8 2xl: mt-8">
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
          <div className="embla__slide" key={index}> {/* Open modal on click */}
                <div className="embla__slide__number !h-[246px] w-full">
                  <Image
                   width={350}
                   height={346}
                    className="rounded w-full sm:w-[360px] sm:h-[246px]"
                    src={itm.img}
                    // title="YouTube video player"
                    // frameborder="0"
                    onClick={() => openModal(itm.video)}
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // referrerpolicy="strict-origin-when-cross-origin"
                    // allowfullscreen
                    />
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
       {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeModal}> {/* Close modal on overlay click */}
          <div className="bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2" onClick={(e) => e.stopPropagation()}> {/* Prevent closing on content click */}
          <div className="flex justify-end mb-2"> {/* Added flex container to align button to the right */}
            <button className="text-end text-xl" onClick={closeModal}>X</button> {/* Close button */}
            </div>
            <iframe
              width="450px"
              height="450px"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
      )}
       

        <div className="w-full tvcSectionResponsive">
          <div className="md:tvc-bg relative !w-full">
            <div className="flex flex-col gap-0 md:gap-0 sm: gap-0">
              {/* <p className="font-medium text-center text-[#585858] text-sm  md:text-xl uppercase text-medium font-jost text-medium">
                Our Tele-vision Commercial's
              </p> */}
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
            <div className="flex flex-col sm:flex-row items-center w-full tvc-bg sm:justify-center gap-10 pt-5 md:-mt-[150px] w-full xl:-mt-40 sm:mt-0 tvcyoutubeVideo">
              <Image
                className="rounded md:h-[360px] h-auto md:w-[580px] max-w-[500px] min-h-[200px] w-auto"
                src={Tvc_Apis01}
                onClick={() => openModal('https://www.youtube.com/embed/fFesUk0sBII?si=q-QGdxRPqVK8W82S')}

                // title="YouTube video player"
                // frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
             />
              <Image
                className="rounded hidden lg:inline md:h-[360px] h-auto md:w-[580px] max-w-[500px] min-h-[200px]"
                src={Tvc_Apis02}
                onClick={() => openModal('https://www.youtube.com/embed/6PqRMIjAEUw?si=q5neKZV8zh5OyZOx')}
                // title="YouTube video player"
                // frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              />
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

      <div>
        <video
        src={""}
        />
      </div>

      {/* Work Place Culture */}
      <div className="work-palace flex items-center justify-center px-4 py-4 lg:px-48 lg:py-48">
        <div className="h-full bg-[#FFF9F0] p-4">
          <div className="flex h-full items-center justify-center bg-white p-3">
            <div className="bg-white flex flex-col gap-2 md:gap-4">
              <p className="text-center text-[22px] md:text-xl font-medium text-[#585858] font-jost text-medium  sm: text-[12px] text-medium">
                BE AMONG US
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
                {/* <Link href="/careers"> */}
                <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white"
                  onClick={handleJoinUs}
                >
                  Join US
                </button>
                {/* </Link> */}
                {/* <Link href="/careers" passHref> */}

                <button className="border border-[#9F7B49] bg-white px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-[#9F7B49] hover:text-white  hover:bg-[#9F7B49]"
                  onClick={handleLifeAtApis}
                >
                  Life @apis
                </button>
                {/* </Link> */}
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

