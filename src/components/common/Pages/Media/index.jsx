"use client"; // Ensure this component is a Client Component
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import PropTypes from "prop-types";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Banner from "@/assets/images/Media/media.png";
import { NEWS_DATA } from '@/lib/constants';
import Campaign from '@/assets/images/Media/campaign.png'
import handhoney from '@/assets/images/Media/handhoney.png'
import jam from '@/assets/images/Media/jam.png'
import honey from '@/assets/images/Media/honey.png'
import mediaGallery001 from '@/assets/images/Media/mediaGallery001.png'
import mediaGallery002 from '@/assets/images/Media/mediaGallery002.png'
import mediaGallery003 from '@/assets/images/Media/mediaGallery003.png'


import ImageBanner from "../../Layout/Banner";
import EmblaCarousel from "../../Carousel/Carousel";
import axios from 'axios';

const LATEST_SLIDES = [
  {
    img: mediaGallery001,
    title: "Women's Day Celebration",
  },
  {
    img: mediaGallery002,
    title: "Asian Expo 2019",
  },
  {
    img: mediaGallery003,
    title: "Aahar 2019",
  },
  {
    img: mediaGallery001,
    title: "Women's Day Celebration",
  },
  {
    img: mediaGallery002,
    title: "Asian Expo 2019",
  },
  {
    img: mediaGallery003,
    title: "Aahar 2019",
  },
];

// src/components/common/Pages/Media/index.jsx

const IMAGE_DATA = [
  {
    src: honey,
    alt: "Honey",
    name:"Apis Honey",
    colorShadow: 'CDB699'
  },
  {
    src: jam,
    alt: "Jam",
    name:"Apis Jam",
    colorShadow: 'E0C4B2'

  },
  {
    src: Campaign,
    alt: "Campaign",
    name:"Apis Campaigns",
    colorShadow: 'F5D5AC'

  },
];


export default function Media() {
  const OPTIONS = { loop: true };
  const [mediaData,setMediaData] = useState([])
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on window width
    };

    window.scroll(0,0)


    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);


  useEffect(()=>{
    const fetchMediaData = async()=>{
      try {
        const response = await axios.get("/api/HomePage/mediaSection");
        setMediaData(response.data)
        console.log("ApisMedia",response.data[0].desc);
        
      } catch (error) { 
      }
    }
    fetchMediaData()
    const data = [
      {data:"Apis Media"}
    ]

  },[])


  return (
    <>
      {/* Banner Section */}
      <ImageBanner banner={Banner} />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Apis in the News
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
                <div>{ApisMedia ?? "ApisMedia"}</div>
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
              <p className="text-sm md:text-xl md:leading-8 text-center font-jost">
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


      <div className="flex flex-wrap justify-center mt-[120px] gap-10 w-full campaignmedia">
      {!isMobile ? <div className='grid grid-cols-1 md:grid-cols-2 xl: -mx-4'>      
            <div className="flex flex-col items-center gap-14 grid grid-cols-1 divide-y">
              <div className="w-full md:w-[470px] h-[382px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#CDB699] to-[#CDB699] shadow-[2px_2px_2px_#CDB699] relative">
                <p className='text-center font-literata font-semibold text-[30px]'>Apis Honey </p>
                <Image src={honey} alt="Honey" className="bg-transparent p-[9px] mt-0" />
              </div>
              <div className="w-full md:w-[470px] h-[382px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#E0C4B2] to-[#E0C4B2] shadow-[2px_2px_2px_#E0C4B2] relative md:-mt-[140px] mt-[10px]">
              <p className='text-center font-literata font-semibold text-[30px]'>Apis Jam </p>

                <Image src={jam} alt="Jam" className="bg-transparent p-[9px] mt-0" />
              </div>
              <div className="">
                {/* <div className="relative flex w-full bg-[#FFF9F0] mt-10 border-2 h-[800px]"> */}
  
    {/* </div> */}
              </div>
            </div>
            <div className="text-center mt-8 px-14">
              <h4 className="font-semibold text-[34px] font-literata color-[#9F7B49]">Our Campaigns</h4>
              <p className="w-full md:w-[502px] text-[17px] leading-[31.79px] mt-4 font-jost px-20">
                Dive into Apis India’s successful campaigns that reflect our dedication to creativity and impact.
                Each campaign is crafted to resonate with our audience and showcase our brand’s strengths.
              </p>
              <div className='w-full md:w-[470px] h-[500px] p-[50px] flex flex-col items-center relative'> {/* Changed to flex-col for mobile layout */}
                  <div className='absolute flex justify-center'> {/* Centering the Ring1 image */}
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
              <div className="w-full md:w-[470px] h-[382px] p-[31px] rounded-[154px_83px_127px_0] bg-gradient-to-r from-[#F5D5AC] to-[#F5D5AC] shadow-[2px_2px_2px_#F5D5AC] relative md:mt-[60px] mt-[20px] -ml-[25px]">
              <p className='text-center font-literata font-semibold text-[30px]'>Apis Campaigns </p>

                <Image src={Campaign} alt="Campaign" className="bg-transparent p-[9px] mt-0" />
              </div>
            </div>
          </div> :
          <>
            <div className="text-center mt-8">
              <h4 className="font-semibold text-[34px] text-literata color-[#9F7B49]">Our Campaigns</h4>
              <p className="w-full md:w-[502px] text-[17px] leading-[31.79px] px-8 mt-4 font-jost">
                Dive into Apis India’s successful campaigns that reflect our dedication to creativity and impact.
                Each campaign is crafted to resonate with our audience and showcase our brand’s strengths.
              </p>
              {/* <div className='w-full md:w-[470px] h-[500px] p-[50px] flex flex-col items-center relative RingMobileView'>
                <div className='absolute flex justify-center'> 
                  <Image
                    src={Ring1}
                    className="rotate-animation RingMobileViewImage"
                  />
                </div>
                <div className="m-12"> 
                  <Image
                    src={handhoney}
                    className="w-[250px] handhoneyMobileView"
                  />
                </div>
              </div> */}
            </div>
            <div className="flex flex-col items-center w-full"> {/* Added w-full for full width */}
              <EmblaCarousel options={{ loop: true, autoplay: true, autoplayDelay: 3000 }}>
                {IMAGE_DATA.map((item, index) => (
                  <div className="embla__slide" key={index}> {/* Open modal on click */}
                    <div className="embla__slide__number h-full w-full flex items-center justify-center"> {/* Full height and centered */}

                    <div
                        key={index}
                        className="w-full h-full p-4 rounded-[72px_36px_34px_0] flex flex-col items-center justify-center" // Changed to flex-col for vertical alignment
                        style={{
                          background: `linear-gradient(to right, #${item.colorShadow}, #${item.colorShadow})`,
                          boxShadow: `2px 2px 2px #${item.colorShadow}`
                        }}
                      >
                        <p className='text-center font-literata font-semibold text-[22px]'>{item.name}</p>
                        <Image src={item.src} alt={item.alt} className="bg-transparent p-4" /> {/* Image below the text */}
                      </div>
                    </div>
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </>
        
  
          
          
              }
  
        
  
  

      {/* Carousel for Mobile View */}
     </div>

      {/* Modal Section */}
    </>
  );
}

Media.propTypes = {
  initialData: PropTypes.object,
};














