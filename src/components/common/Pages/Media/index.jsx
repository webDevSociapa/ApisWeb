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
// import News1 from "@/assets/images/Media/News1.png";
// import News2 from "@/assets/images/Media/News2.png";
// import News3 from "@/assets/images/Media/News3.png";
// import News4 from "@/assets/images/Media/News4.png";
// import News5 from "@/assets/images/Media/News5.png";
// import News6 from "@/assets/images/Media/News6.png";
import NewsName1 from "@/assets/images/Media/NewsName1.png";
import NewsName2 from "@/assets/images/Media/NewsName2.png";
import NewsName3 from "@/assets/images/Media/NewsName3.png";
import NewsName4 from "@/assets/images/Media/NewsName4.png";
import NewsName5 from "@/assets/images/Media/NewsName5.png";
import NewsName6 from "@/assets/images/Media/NewsName6.png";

import apisNews1 from "@/assets/images/Media/apisnews1.jpg"
import apisNews2 from "@/assets/images/Media/apisnews2.jpg"
import apisNews3 from "@/assets/images/Media/apisnews3.jpg"
import apisNews4 from "@/assets/images/Media/apisnews4.jpg"
import apisNews5 from "@/assets/images/Media/apisnews5.jpg"
import apisNews6 from "@/assets/images/Media/apisnews6.jpg"
import apisNews7 from "@/assets/images/Media/apisnews7.jpg"
import apisNews8 from "@/assets/images/Media/apisnews8.webp"
import apisNews9 from "@/assets/images/Media/apisnews9.webp"
import apisNews10 from "@/assets/images/Media/apisnews10.webp"
import apisNews11 from "@/assets/images/Media/apisnews11.jpg"
import apisNews12 from "@/assets/images/Media/apisnews12.jpeg"
import apisNews13 from "@/assets/images/Media/apisnews13.jpg"
import apisNews14 from "@/assets/images/Media/apisnews14.jpg"
import apisNews15 from "@/assets/images/Media/apisnews15.jpg"
import apisNews16 from "@/assets/images/Media/apisnews16.jpg"
import apisNews17 from "@/assets/images/Media/apisnews17.jpg"
import apisNews18 from "@/assets/images/Media/apisnews18.jpg"
import apisNews19 from "@/assets/images/Media/apisnews19.jpg"
import apisNews20 from "@/assets/images/Media/apisnews20.jpg"
import apisNews21 from "@/assets/images/Media/apisnews21.png"
import apisNews22 from "@/assets/images/Media/apisnews22.png"
import apisNews23 from "@/assets/images/Media/apisnews23.png"
import apisNews24 from "@/assets/images/Media/apisnews24.png"
import apisNews25 from "@/assets/images/Media/apisnews25.png"
import apisNews26 from "@/assets/images/Media/apisnews26.png"
import apisNews27 from "@/assets/images/Media/apisnews27.jpeg"
import apisNews28 from "@/assets/images/Media/apisnews28.jpg"
import apisNews29 from "@/assets/images/Media/apisnews29.jpeg"
import apisNews30 from "@/assets/images/Media/apisnews30.jpg"
import apisNews31 from "@/assets/images/Media/apisnews31.jpg"
import apisNews32 from "@/assets/images/Media/apisnews32.jpg"
import apisNews33 from "@/assets/images/Media/apisnews33.jpg"
import apisNews34 from "@/assets/images/Media/apisnews34.jpg"
import apisNews35 from "@/assets/images/Media/apisnews35.jpg"
import apisNews36 from "@/assets/images/Media/apisnews36.jpg"
import apisNews37 from "@/assets/images/Media/apisnews37.jpg"
import apisNews38 from "@/assets/images/Media/apisnews38.jpg"
import apisNews39 from "@/assets/images/Media/apisnews39.jpg"
import apisNews40 from "@/assets/images/Media/apisnews40.jpg"
import apisNews41 from "@/assets/images/Media/apisnews41.jpg"
import apisNews42 from "@/assets/images/Media/apisnews42.jpg"
import apisNews43 from "@/assets/images/Media/apisnews43.jpg"
import apisNews44 from "@/assets/images/Media/apisnews44.jpg"
import apisNews45 from "@/assets/images/Media/apisnews45.jpg"
import apisNews46 from "@/assets/images/Media/apisnews46.jpg"
import apisNews47 from "@/assets/images/Media/apisnews47.jpg"
import apisNews48 from "@/assets/images/Media/apisnews48.jpg"
import apisNews49 from "@/assets/images/Media/apisnews49.jpg"

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
    img: apisNews1,
    name: NewsName1,
    desc: "Apis India Unveils New Product to Drive Fitness.",
    date:" 04 JANUARY, 2024 / PRESS RELEASES",
    link:"https://smestreet.in/infocus/apis-india-unveils-new-product-to-drive-fitness-and-wellness-revolution-2318097"
  },
  {
    img: apisNews2,
    name: NewsName2,
    desc: "Apis India aims Rs 500 cr revenue in FY25",
    date:" 09 JANUARY, 2024 / PRESS RELEASES",
    link:"https://www.business-standard.com/companies/news/apis-india-to-expand-product-portfolio-aims-rs-500-cr-revenue-in-fy25-124010900680_1.html"
  },
  {
    img: apisNews3,
    name: NewsName3,
    desc: "Organic Honey from Apis India",
    date:" 10 JANUARY, 2024 / PRESS RELEASES",
    link:"https://bwhotelier.com/article/organic-honey-from-apis-india-505447"
  },
  {
    img: apisNews4,
    name: NewsName4,
    desc: "Product launch from APIS India",
    date:"09 JANUARY, 2024 / PRESS RELEASES",
    link:"https://www.youtube.com/watch?v=8A3SeOYH8ww"
  },
  {
      img: apisNews5,
      name: NewsName5,
      desc: "Apis India launch of Hazelnut Chocolate spread",
      date:"11 APRIL, 2023 / PRESS RELEASES",
      link:"https://www.ifttrade.com/news/Apis-India-expands-its-Spread-Category-with-the-launch-of-Hazelnut-Chocolate-spread"
    },
    {
      img: apisNews6,
      name: NewsName6,
      desc: "A Perfect Blend of Nutrition & Taste by Apis",
      date:" 06 APRIL, 2023 / PRESS RELEASES",
      link:"https://biznewsdesk.com/business/a-perfect-blend-of-nutrition-tradition-taste-by-apis/"
    },
    {
      img: apisNews7,
      name: NewsName6,
      desc: "Apis India launches Peanut Butter in two variants",
      date:"24 MARCH, 2023 / PRESS RELEASES",
      link:"https://lifeandmore.in/life-style/food/apis-india-launches-peanut-butter/"
    },
  {
    img: apisNews8,
    name: NewsName6,
    desc: "Apis campaign for Ramadan speaks of personal",
    date:" 23 MARCH, 2023 / PRESS RELEASES",
    link:"https://www.exchange4media.com/advertising-news/apis-campaign-for-ramadan-speaks-of-personal-well-being-126132.html"
  },
  {
    img: apisNews9,
    name: NewsName6,
    desc: "You Didn’t Know These Ways To Use Honey",
    date:" 10 JANUARY, 2023 / PRESS RELEASES",
    link:"https://www.slurrp.com/article/we-bet-you-didnt-know-these-creative-ways-to-use-honey-1672830183803"
  },
  {
    img: apisNews10,
    name: NewsName6,
    desc: "Apis India #ShuddhAurSaccha Campaign",
    date:"14 DECEMBER, 2022 / PRESS RELEASES",
    link:"https://www.uniindia.com/apis-india-launches-shuddhaursaccha-campaign-promoting-its-honey-for-healthy-winters/press-releases/news/2878783.html"
  },
  {
    img: apisNews11,
    name: NewsName6,
    desc: "Pride of India Brands 2021",
    date:" JANUARY, 2022 / PRESS RELEASES",
    link:"https://www.linkedin.com/posts/exchange4media_e4mprideofindia-activity-6922891424749215745-aYje?utm_source=linkedin_share&utm_medium=android_app"
  },
  {
    img: apisNews12,
    name: NewsName6,
    desc: "Pride of India Brands 2021",
    date:"JANUARY, 2022 / PRESS RELEASES",
    link:"https://www.exchange4media.com/marketing-news/e4m-pride-of-india-brands-2021-series-to-tell-success-stories-of-top-smbs-118044.html"
  },
  {
    img: apisNews13,
    name: NewsName6,
    desc: "Afaqs",
    date:"DECEMBER, 2021 / PRESS RELEASES",
    link:"https://www.afaqs.com/people-spotting/apis-india-appoints-sharad-vatss-as-marketing-and-sales-head"
  },
  {
    img: apisNews14,
    name: NewsName6,
    desc: "Apis' Exclusive Interview",
    date:"DECEMBER, 2021 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/ApisExclusiveInterview.pdf"
  },
  {
    img: apisNews15,
    name: NewsName6,
    desc: "Economic Times News",
    date:"16/August, 2021 / PRESS RELEASES",
    link:"https://brandequity.economictimes.indiatimes.com/news/advertising/apis-india-ropes-in-milind-soman-as-the-brand-ambassador/85362992"
  },
  {
    img: apisNews16,
    name: NewsName6,
    desc: "PTI News",
    date:"23/APRIL, 2021 / PRESS RELEASES",
    link:"https://www.ptinews.com/pressrelease/46509_press-subAPIS-India-Launches-Digital-Campaign-During-Ramadan----SehatKaSaath"
  },
  {
    img: apisNews17,
    name: NewsName6,
    desc: "Campaign",
    date:"23/APRIL, 2021 / PRESS RELEASES",
    link:"https://www.campaignindia.in/video/for-ramadan-apis-india-highlights-the-beauty-of-bonding-over-food/469169#:~:text=FMCG%20brand%20Apis%20India%20has,led%20digital%20campaign%20for%20Ramadan.&text=Pankaj%20Mishra%2C%20CEO%2C%20Apis%20India,has%20been%20realised%20by%20all"
  },
  {
    img: apisNews18,
    name: NewsName6,
    desc: "Afaqs",
    date:"23/APRIL, 2021 / PRESS RELEASES",
    link:"https://www.afaqs.com/companies/apis-india-launches-digital-campaign-during-ramadan"
  },
  {
    img: apisNews19,
    name: NewsName6,
    desc: "FoodTechBiz Desk",
    date:"Published on : 22 Apr, 2021",
    link:"https://www.foodtechbiz.com/business-updates/apis-india-launches-digital-campaign-during-ramadan"
  },
  {
    img: apisNews20,
    name: NewsName6,
    desc: "Times Of India",
    date:"Published on: 20 Apr, 2021",
    link:"https://timesofindia.indiatimes.com/business/india-business/sensex-nifty-extend-losses-in-choppy-trade-banking-it-stocks-drag/articleshow/82163654.cms"
  },
  {
    img: apisNews21,
    name: NewsName6,
    desc: "Corperate Coverage Outlook Initiatives",
    date:"Apis India Limited ",
    link:"https://apisindia.com/media/Coporate%20Coverage_Dec_2020%20(2).pdf"
  },
  {
    img: apisNews22,
    name: NewsName6,
    desc: "Times Of India.",
    date:"feat. Mr. Amit Ananad, Managing Director, Apis India",
    link:"https://timesofindia.indiatimes.com/business/india-business/after-a-sweet-start-with-apis-honey-apis-india-limited-is-in-expansion-mode-of-its-fmcg-portfolio/articleshow/78905307.cms?utm_source=whatsapp&utm_medium=social&utm_campaign=TOIMobile"
  },
  {
    img: apisNews23,
    name: NewsName6,
    desc: "SMB Story",
    date:"Feat. Mr. Pankaj Mishra, CEO, Apis India",
    link:"https://yourstory.com/smbstory/honey-brand-apis-dabur-patanjali-business"
  },
  {
    img: apisNews24,
    name: NewsName6,
    desc: "Forbes India ",
    date:"Feat. Mr. Pankaj Mishra, CEO, Apis India ",
    link:"https://www.forbesindia.com/article/brand-connect/pankaj-mishra-ceo-apis-india-driving-growth-and-expansion/62931/1"
  },
  {
    img: apisNews25,
    name: NewsName6,
    desc: "Apis - RR Partnership ",
    date:"Business Today ",
    link:"https://www.businesstoday.in/latest/corporate/story/unique-digital-experiences-first-time-advertisers-ipl-2020-different-273470-2020-09-19"
  },
  {
    img: apisNews26,
    name: NewsName6,
    desc: "Apis - RR Partnership ",
    date:"Press Release",
    link:"https://apisindiafoodforum.com/posts/apis-honey-announces-partnership-with-rajasthan-royals-for-upcoming-ipl-2020/"
  },
  {
    img: apisNews27,
    name: NewsName6,
    desc: "Apis - RR Partnership ",
    date:"Business Inc",
    link:"https://apisindia.com/media/APIS%20-%20RR.jpeg"
  },
  {
    img: apisNews28,
    name: NewsName6,
    desc: "The most Admirable Brand 2019-20 ",
    date:"Mr. Amit Anand, MD, Apis India ",
    link:"https://www.youtube.com/watch?v=J0LitwjNpKs"
  },
  {
    img: apisNews29,
    name: NewsName6,
    desc: "Promising Brand Economic Times 2019 ",
    date:"Mr. Pankaj Mishra, CEO, Apis India ",
    link:"https://www.youtube.com/watch?v=ts9T-KK26Io"
  },
  {
    img: apisNews30,
    name: NewsName6,
    desc: "EMERGING FMCG BRAND, Times Of India ",
    date:"Mr. Pankaj Mishra,CEO",
    link:"https://apisindia.com/pdf/11.pdf"
  },
  {
    img: apisNews31,
    name: NewsName6,
    desc: "SME World 1 ",
    date:"APRIL 01, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/22.pdf"
  },
  {
    img: apisNews32,
    name: NewsName6,
    desc: "SME World 2",
    date:"APRIL 01, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/33.pdf"
  },
  {
    img: apisNews33,
    name: NewsName6,
    desc: "Hospitality Talk",
    date:"MARCH, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/media/Hospitality%20Talk.jpg"
  },
  {
    img: apisNews34,
    name: NewsName6,
    desc: "Hospitality Biz",
    date:"FEBRUARY, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Hospitality%20Biz.pdf"
  },
  {
    img: apisNews35,
    name: NewsName6,
    desc: "Fhrai",
    date:"FEBRUARY, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/FHRAI_Feb-2017.pdf"
  },
  {
    img: apisNews36,
    name: NewsName6,
    desc: "Aviation Times - Promotion",
    date:"FEBRUARY, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Aviation-Times-Promotion-page-3.pdf"
  },
  {
    img: apisNews37,
    name: NewsName6,
    desc: "Apis Progressive Grocer ",
    date:"MARCH, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Apis-Progressive-Grocer.pdf"
  },
  {
    img: apisNews38,
    name: NewsName6,
    desc: "Agri Business & Food Industry ",
    date:"JUNE 06, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/1.pdf"
  },
  {
    img: apisNews39,
    name: NewsName6,
    desc: "Financial Chronicle ",
    date:"MARCH 21, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/corporate.pdf"
  },
  {
    img: apisNews40,
    name: NewsName6,
    desc: "Business India, Corporate Reports",
    date:" FEBRUARY 27, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Business-India-Corporate-Report.pdf"
  },
  {
    img: apisNews41,
    name: NewsName6,
    desc: "Himalaya-Vartha Prabha",
    date:"JANUARY 28, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Himalaya-Vartha-Prabha-28th-Jan-2017-Pg3.pdf"
  },
  {
    img: apisNews42,
    name: NewsName6,
    desc: "Himalaya Suvarana Times Of Karnataka",
    date:"JANUARY 28, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/2.pdf"
  },
  {
    img: apisNews43,
    name: NewsName6,
    desc: "Himalaya-Sanjevani",
    date:"JANUARY 27, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Himalaya-Sanjevani-27th-Jan-2017-Pg7.pdf"
  },
  {
    img: apisNews44,
    name: NewsName6,
    desc: "Himalaya-Sanjesamachara",
    date:"JANUARY 27, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Himalaya-Sanjesamachara-27th-Jan-2017-Pg4.pdf"
  },
  {
    img: apisNews45,
    name: NewsName6,
    desc: "Business India Edition",
    date:"JANUARY, 2017 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Business-India-January-Edition.pdf"
  },
  {
    img: apisNews46,
    name: NewsName6,
    desc: "Economic Times",
    date:"DECEMBER, 2016 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/Press-Economic-Times.pdf"
  },
  {
    img: apisNews47,
    name: NewsName6,
    desc: "India.com",
    date:"DECEMBER, 2016 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/indiapress.pdf"
  },
  {
    img: apisNews48,
    name: NewsName6,
    desc: "Business Standard",
    date:" DECEMBER, 2016 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/businessstandardspress.pdf"
  },
  {
    img: apisNews48,
    name: NewsName6,
    desc: "India Live Today",
    date:" DECEMBER, 2016 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/indialivetodaypress.pdf"
  },
  {
    img: apisNews13,
    name: NewsName6,
    desc: "India Times",
    date:" DECEMBER, 2016 / PRESS RELEASES",
    link:"https://apisindia.com/pdf/indiatimespress.pdf"
  }
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
            <div className="w-[140px] md:w-[180px]">
              <Image src={itm.name} alt="News Name" />
            </div>
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
        <p className="font-medium text-center text-[#585858] text-sm  md:text-xl">
          DISCOVER OUR LATEST EVENTS
        </p>
        <p className="font-bold text-[20px] text-center text-[#9F7B49] md:text-[40px]">
          Media Gallery
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
                    <div className="mx-3 border">
                      <Image
                        src={itm?.img}
                        alt="header-logo"
                        className="w-[250px] md:w-[400px] h-[250px] md:h-[345px]"
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
      <div className="relative flex w-full bg-[#FFF9F0]">
        <Image
          src={Ring1}
          className="hidden md:inline absolute left-0 top-0 h-[300px] w-[298px] rotate-animation border-4"
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
      </div>


      {/* Modal Section */}
    </>
  );
}

Media.propTypes = {
  initialData: PropTypes.object,
};
