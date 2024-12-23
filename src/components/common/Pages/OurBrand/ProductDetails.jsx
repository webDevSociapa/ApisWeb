"use client";
import React, { useEffect } from "react";
import ImageBanner from "../../Layout/Banner";
import EmblaCarousel from "../../Carousel/Carousel";
import Ring1 from "@/assets/images/OurBrands/Ring-1.png";
import Ring2 from "@/assets/images/OurBrands/Ring-2.png";
import Ring3 from "@/assets/images/OurBrands/Ring-3.png";
import Ring4 from "@/assets/images/OurBrands/Ring-4.png";
import Comma from "@/assets/images/OurBrands/Comma.png";
import HandDrawnHoney from "@/assets/images/OurBrands/HandDrawnHoney.png";
import Image from "next/image";
import CheckReportBanner from '@/assets/images/OurBrands/ProductBanner.png'
import HimalayaHoney from "@/assets/images/OurBrands/himalayaHoney.png"
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCT_DATA } from "@/lib/constants";
import Link from "next/link";

import { LATEST_SLIDES,SLIDES,HEALTH_BENEFITS,HEALTH_DATE,HEALTH_JAM,HEALTH_FLAKES,HEALTH_VERNACALLI,HEALTH_MACRONI,HEALTH_SPEARD,COOKING_PASTE,SOYA_CHUNK,SAFFRON,GREEN_TEA,RECIPIES_DATA1,AVAILABILITY_SLIDE,GLIMPSES_SLIDES} from "@/lib/constants";
import axios from "axios";

const OPTIONS = { loop: true };

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const [slides, setSlides] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null); // Hold the selected health benefit content
  // const [selectedContent, setSelectedContent] = useState(HEALTH_BENEFITS[0].id);
  const selectedBrand = PRODUCT_DATA.find(
    (itm) => itm.id == searchParams.get("brand_id")
  );
  const selectedProduct = selectedBrand.products.find(
    (itm) => itm.id == searchParams.get("product_id")
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(''); // State to hold the current video URL
  const [hoveredId, setHoveredId] = useState(false); // State to track the hovered item


  const openModal = (video) => {
    
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleImageClick = (content) => {
    setSelectedContent(content);
    setHoveredId(content.id)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo('');
  };


  const renderBenefits = (benefits) => {
    return benefits.map((itm) => (
      <div key={itm.id} className="flex flex-col w-1/2 items-center justify-center">
        {/* <div
          className={`h-[110px] flex items-center justify-center w-[110px] border-2 border-[#9F7B49] rounded-full`}
        > */}
          <div
      className={`h-[110px] flex items-center justify-center w-[110px] border-2 border-[#9F7B49] rounded-full 
                  ${hoveredId ===  itm.id ? 'shadow-lg' : ''} transition-shadow duration-200`} // Change shadow based on state
    >
          <Image
            src={itm?.img}
            width={65}
            height={65}
            alt="header-logo"
            className="h-[65px] w-[65px] cursor-pointer"
            onClick={() => handleImageClick(itm)} // Set the clicked item as the selected content
            />
        </div>
        <p className="text-center text-xs md:text-base my-4">
          {itm?.title}
        </p>
      </div>
    ));
  };
  useEffect(() => {
    // When the component mounts, set the initial content from the first benefit
    let benefits = null;

    if (selectedBrand?.id === 1 && selectedProduct?.id === 1) {
      benefits = HEALTH_BENEFITS;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 2) {
      benefits = HEALTH_DATE;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 1) {
      benefits = HEALTH_BENEFITS;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 2) {
      benefits = HEALTH_FLAKES;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 3) {
      benefits = HEALTH_VERNACALLI;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 4) {
      benefits = HEALTH_MACRONI;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 5) {
      benefits = HEALTH_SPEARD;
    } else if(selectedBrand?.id === 3 && selectedProduct?.id === 1) {
      benefits = HEALTH_JAM;
    } else if(selectedBrand?.id === 3 && selectedProduct?.id === 2) {
      benefits = HEALTH_FLAKES;
    }
    else if(selectedBrand?.id === 3 && selectedProduct?.id === 3) {
      benefits = HEALTH_VERNACALLI;
    }
    else if(selectedBrand?.id === 4 && selectedProduct?.id === 1) {
      benefits = SOYA_CHUNK;
    }
    else if(selectedBrand?.id === 4 && selectedProduct?.id === 2) {
      benefits = SAFFRON;
    }
    else if(selectedBrand?.id === 5 && selectedProduct?.id === 1) {
      benefits = GREEN_TEA;
    }

    // Set the first health benefit as the selected content on page render
    if (benefits && benefits.length > 0) {
      setSelectedContent(benefits[0]);
    }
  }, [selectedBrand, selectedProduct]); // Re-run when selectedBrand or selectedProduct changes

  if (!selectedBrand || !selectedProduct) return <p>Product or Brand not found</p>;

  useEffect(()=>{
  
    const addTasteProduct = async () => {
      try {
        const response = await axios.get("/api/HomePage/tasteProduct");
        setSlides(response.data)
      }
      catch (error) {
        console.log("Error");

      }
    }

    addTasteProduct()

  },[])



  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <ImageBanner banner={selectedProduct?.back_img} />
      <div className="w-full flex justify-end items-center absolute end-0 top-2 lg:top-16">
        <div className="w-[450px] ps-2 md:ps-0">
          <p
            className={`${selectedProduct?.title_color} text-shadow text-[20px] md:text-[40px] font-bold ml-3`}
          >
            {selectedProduct.title}
          </p>
          <p
            className={`${selectedProduct?.desc_color} text-xs font-jost xs:text-sm md:text-2xl font-medium mt-2 ml-3`}
          >
            {selectedProduct.title_desc}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full w-[80%] capitalize">
        <p className="w-[90%] text-[20px] md:text-[40px] font-bold text-center text-[#84663C]">
          Purity is our presence in food
        </p>
        <p className="text-[#454545] w-[80%] text-sm md:text-2xl text-center mt-4 font-jost md:mt-8">
          {selectedProduct.product_desc}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={selectedProduct.product_img_1}
          // width={266}
          height={280}
          alt="header-logo"
          className="h-[180px] mt-8 w-auto md:h-[280px]"
        />
        <Link href={"https://www.amazon.in/s?k=organic+honey+apis&crid=219JTIFPTZQV0&sprefix=organic+honey+apis%2Caps%2C209&ref=nb_sb_noss_1"} target="_blank">
          <button className="border mt-8 border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            Available on
          </button>
        </Link>
      </div>
      
      <div className="w-[90%] border border-[#AE844A] rounded-[10px] flex mt-8 md:mt-20 items-center flex-col gap-4 md:gap-12">
        <div className="bg-white rounded-[10px] w-full h-[23px] md:h-[65px] flex items-center justify-between px-3 md:pt-2 pt-1 avaibility">
          <EmblaCarousel options={OPTIONS} autoScroll>
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
      </div>
     {/* <a href={'/about-us'}> */}
     {selectedBrand?.id === 1 && selectedProduct?.id === 1 ?  (
      <div className="w-[80%] relative 2xl:mt-8">
      <Image 
        src={CheckReportBanner}
        height={340}
        className="mt-8 w-full"
        alt="Check Report Banner"
      />
      <div className="absolute left-[31%] bottom-[15%]  sm: left-[70%] md:-2 transform -translate-x-1/2 md:left-[70%] lg:left-[70%] chckReportBtn">
        <a href='/our-brand/product-details/certificate'>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-2 sm: px-0 md:px-6 lg:px-12 text-xs sm:text-sm md:text-base py-1 sm:py-2 md:py-3 font-bold text-white whitespace-nowrap">
            Check Report
          </button>
        </a>
      </div>
    </div>
     ): selectedBrand?.id === 3 && selectedProduct?.id === 2 ? (
      <div className="w-[80%] relative">
      <Image 
        src={HimalayaHoney}
        height={340}
        className="mt-8 w-full"
        alt="Check Report Banner"
      />
      <div className="absolute left-[31%] bottom-[15%]  sm: left-[70%] md:-2 transform -translate-x-1/2 md:left-[70%] lg:left-[70%] chckReportBtn">
        <a href='/our-brand/product-details/certificate'>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-2 sm: px-0 md:px-6 lg:px-12 text-xs sm:text-sm md:text-base py-1 sm:py-2 md:py-3 font-bold text-white whitespace-nowrap">
            Check Report
          </button>
        </a>
      </div>
    </div>
     ): null}
     {/* </a> */}

      {/* <p className="text-[20px] md:text-[40px] py-4 md:py-10 font-bold text-[#9F7B49] font-literata">
        Content
      </p> */}
      <div className="bg-[#FFF9F0] relative w-full">
        <Image
          src={Ring1}
          width={150}
          height={150}
          alt="header-logo"
          className="h-[150px] hidden lg:inline absolute top-0 left-0  w-[150px]"
        />
        <div className="w-full flex flex-col lg:flex-row my-10">
          <div className="w-full lg:w-1/2 lg:pb-56 px-8 flex xs:justify-center items-center">
            <div
              className={`${selectedProduct?.rect_color} relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 mt-24 z-50 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div
                className="bg-custom-radial-gradient  absolute bottom-4 md:bottom-8 z-50 left-4   md:left-8 backdrop-blur-lg 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]"
              ></div>
              {/* <Image
                src={Rectangle1}
                alt="header-logo"
                className="h-[250px] absolute bottom-8 left-8 w-[230px] md:w-[360px] z-20"
              /> */}
              <Image
                src={selectedProduct.img}
                height={300}
                alt="header-logo"
                className="h-[350px] md:h-[400px] z-50 absolute w-[620px] -right-16  -bottom-1 z-20"
              />
              <div className="relative h-full w-full">
                <Image
                  src={Ring4}
                  height={200}
                  alt="header-logo"
                  className="h-[225px] w-[225px] rotate-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative md:px-14 px-2 flex flex-col gap-4 md:gap-8 items-center mt-12">
            <p className="text-xl md:text-[30px] relative text-center font-light">
              Look what our customer say
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="header-logo"
                className="h-[60px] hidden lg:inline  -top-2 absolute -right-18 w-[40px]"
              />
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="header-logo"
                className="h-[60px] hidden lg:inline -top-2 absolute -right-20 w-[40px]"
              />
            </p>
            <p className="text-sm font-jost font-light md:text-xl text-center font-light">
              “{selectedProduct.customer_says}”
            </p>
            <Image
              src={Ring3}
              width={80}
              height={250}
              alt="header-logo"
              className="h-[250px] hidden lg:inline absolute top-16 right-0 w-[60px]"
            />
          </div>
        </div>
        <Image
          src={HandDrawnHoney}
          width={200}
          height={200}
          alt="header-logo"
          className="h-[180px] hidden lg:inline absolute bottom-0 right-0 w-[180px]"
        />
      </div>
      <div className="bg-[#FFF9F0] relative w-full rounded-tl-[0px] rounded-tr-[0px] rounded-br-[0px] md:rounded-bl-[200px] rounded-bl-[80px] pb-20">
        <p className="text-base md:text-[26px] py-8 lg:pb-20 text-center">
          Health Benefits
        </p>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-wrap">
          {selectedBrand?.id === 1 && selectedProduct?.id === 1 ? (
            renderBenefits(HEALTH_BENEFITS)
          ) : selectedBrand?.id === 1 && selectedProduct?.id === 3 ? (
            renderBenefits(HEALTH_DATE)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 1 ? (
            renderBenefits(HEALTH_BENEFITS)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 2 ? (
            renderBenefits(HEALTH_DATE)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 3 ? (
            renderBenefits(HEALTH_VERNACALLI)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 4 ? (
            renderBenefits(HEALTH_MACRONI)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 5 ? (
            renderBenefits(HEALTH_SPEARD)
          ) : selectedBrand?.id === 3 && selectedProduct?.id === 1 ? (
            renderBenefits(HEALTH_JAM)
          ): selectedBrand?.id === 3 && selectedProduct?.id === 2 ? (
            renderBenefits(HEALTH_FLAKES)
          ): selectedBrand?.id === 3 && selectedProduct?.id === 3 ? (
            renderBenefits(HEALTH_VERNACALLI)
          ) : selectedBrand?.id === 4 && selectedProduct?.id === 1 ? (
            renderBenefits(SOYA_CHUNK)
          ):  selectedBrand?.id === 4 && selectedProduct?.id === 2 ? (
            renderBenefits(SAFFRON)
          ):  selectedBrand?.id === 5 && selectedProduct?.id === 1 ? (
            renderBenefits(GREEN_TEA)
          ) : ""
          }
          </div>
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0 px-0 md:px-8 flex justify-center items-center">
            <div
              className={`${selectedProduct?.rect_color} relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div
                className="bg-custom-radial-gradient  absolute bottom-4 md:bottom-8 left-4   md:left-8 backdrop-blur-lg 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]"
              ></div>
              <Image
                src={Ring2}
                height={200}
                alt="header-logo"
                className="h-[135px] absolute hidden lg:inline -top-7 -right-7 z-0 ms w-[185px]"
              />
           <p className="z-20 absolute w-full text-center text-lg md:text-[24px] left-6 font-normal font-literata">
                {selectedContent?.name}
              </p>
              
             
              {selectedContent && (
        <p
          className={`z-20 absolute w-[90%] text-center text-xs md:text-base top-12 left-6 md:left-12 font-normal`}
        >
          {selectedContent.desc}
        </p>
      )}
              <div className="w-1/2 relative px-14 flex flex-col gap-8 items-center mt-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full pt-10 md:pt-20 items-center justify-center flex-col">
      {selectedBrand?.id === 1 && selectedProduct?.id === 1 && (
        <>
         <p className="text-[#9F7B49] text-center text-[20px] md:text-[40px] font-bold">
        GLIMPSES OF
      </p>
      <p className="text-[#9F7B49] text-center w-[90%] text-[20px] md:text-[40px] font-bold">
        ORGANIC HONEY LAUNCH
      </p>
      <p className="w-[90%] text-center text-sm md:text-[22px] left-4 md:leading-7 mt-2 md:mt-6 xl:w-[45%] sm:w-[90%] md:w-[80%] font-jost">
        Launch Event was organized on 9th Jan, 2024 at The Lalit, New Delhi.
        Sanya Malhotra and our Managing Director Mr. Amit Anand Unveiled Our
        New Organic Honey.
      </p>
      <div className="w-full py-6 md:py-20 flex flex-col items-center justify-center">
        <div className="w-[90%] flex items-center justify-center">
          <EmblaCarousel options={OPTIONS}>
            {GLIMPSES_SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number border w-[176px] p-2 h-[256px] md:!h-[456px] cursor-pointer !rounded-none md:w-[286px] border-[#9F7B49]">
                  <Image
                    src={itm?.img}
                    width={310}
                    height={470}
                    alt="header-logo"
                    className="h-[240px] md:h-[440px] w-[172px] md:w-[270px] max-w-max bg-opacity-40"
                  />
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
        </>
      )}
      
        <div className="w-full py-6 md:py-20 bg-[#FFF9F0] flex flex-col items-center justify-center">
          <p className="text-sm text-center md:text-[22px] font-medium text-[#585858] font-jost">
            Get to know more about Apis from our customers
          </p>
            <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] py-2 font-literata">
              Our Social Reviews
            </p>
          <p className="text-sm md:text-[22px] font-medium text-center text-[#585858] font-jost">
            Intentions may lay the foundation, but it's our actions that build
            the world we live in.
          </p>
          <div className="w-[90%] pt-6 md:pt-16 flex items-center justify-center">
            <EmblaCarousel options={OPTIONS}>
              {LATEST_SLIDES.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                  <iframe
              width="450px"
              height="450px"
              src={itm.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full"
            ></iframe>
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </div>
     
      <div className="w-full relative flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 sm:gap-10 px-4 lg:px-36 pb-0 pt-6 md:py-6">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
            <p className="text-center text-[14px] md:text-[22px] font-jost  text-[#585858]" style={{paddingTop:"30px"}}>
              day-to-day choices that weave the most profound stories of
              character & growth.
            </p>
            <h3 className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] font-literata -mt-5">
              Similar Products
            </h3>
          </div>
        </div>
        <div className="pb-6 md:pb-40 w-[90%] flex items-center justify-center">
        <EmblaCarousel options={OPTIONS}>
            {slides.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !h-[240px] w-full">
                  <Link href={`${itm?.path}`} target="_blank">
                    <Image
                      src={itm?.imageFile}
                      width={350}
                      height={440}
                      alt="header-logo"
                      className="h-[250px] w-auto max-w-max bg-opacity-40"
                    />
                  </Link>
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
      </div>
      <div className="bg-[#FFF9F0] py-10 w-full flex flex-col items-center">
        <p className="text-[20px] md:text-[40px] text-[#9F7B49] font-bold">
          Recipies
        </p>
        <div className="w-[90%] gap-10 py-10 flex items-center justify-center media-apis">
          <EmblaCarousel options={OPTIONS} autoScroll>
            {RECIPIES_DATA1.map((itm) => {
              return (
                <div className="embla__slide">
                  <div className="w-full">
                    <div className="w-full">
                    <iframe
              src={itm.video}
              height={400}
              alt="header-logo"
              className="bg-opacity-40 w-full max-h-[363px] max-w-[514px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[25px]"
            />
                    </div>
                    <div className="border-2 max-w-[514px] bg-white border-[hsl(35,37%,45%)] mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3 py-3 px-2 lg:px-4">
                      <p className="text-sm lg:text-xl font-bold text-[#373737] font-jost">
                        {itm?.title}
                      </p>
                      <p className="text-sm lg:text-xl font-normal text-[#373737] font-jost">
                        {itm?.time}
                      </p>
                      <p className="text-[#666666] text-xs lg:text-sm font-jost">
                        {itm?.descreption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
        <Link href={"/our-brand/recipes"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;