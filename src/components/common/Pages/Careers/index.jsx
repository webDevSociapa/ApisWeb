"use client";

import PropTypes from "prop-types";
import Banner from "@/assets/images/Careers/Careers.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Award from "@/assets/images/Careers/Award.png";
// import Celebrations from "@/assets/images/Careers/Celebrations.png";
import Engagements from "@/assets/images/Careers/Engagements.png";
// import TrainingSession from "@/assets/images/Careers/Training&Session.png";
import CareerGallery3 from '@/assets/images/Careers/cgallary3.png'
import BirthDayCelebration3 from '@/assets/images/Careers/birthdayCelebration3.jpg'
import Engage from '@/assets/images/Careers/engage.png';
import Celebrations from '@/assets/images/Careers/celebrationss.png'
import TrainningSession from '@/assets/images/Careers/trainningSession.png'
import CareerGallery1 from '@/assets/images/Careers/cgallary1.png'
import MeetGreet1 from '@/assets/images/Careers/hrMeet1.jpg'
import EngageMent1 from '@/assets/images/Careers/engageMent1.webp'
import ImageBanner from "../../Layout/Banner";
import Image from "next/image";
import Link from "next/link";
import {useRouter } from "next/navigation"

const CAREER_DATA = [
  {     
    img: CareerGallery3,
    title: "Employ Award",
    type: 0,
    gallery: 1
  },
  {
    img: Engage,
    title: "Meet & Greet",
    type: 0,
    gallery: 2

  },
  {
    img: EngageMent1,
    title: "Engagements",
    type: 1,
    gallery: 3

  },
  {
    img: BirthDayCelebration3,
    title: "Celebrations",
    type: 1,
    gallery: 4

  },
];


export default function Careers() {
  const router = useRouter();

  
  const handleImageClick = (item) => {
    router.push(`/careers/careerGallary?title=${encodeURIComponent(item.title)}&gallery=${item.gallery}`);
  };
  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
          Life @Apis
        </p>
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center">
          At Apis India, we foster a collaborative and innovative work culture
          where every team member's ideas are valued, and growth opportunities
          are embraced with enthusiasm.
        </p>
      </div>
     {/* <Link href={"/careers/careerGallary"}> */}
     <div className="flex mt-7 md:mt-14 flex-wrap items-center justify-center gap-5 md:gap-10 w-[80%] m-auto">
        {CAREER_DATA.map((itm, index) => (
          <div key={index} className="border p-2 md:p-3 px-1 border-[#85673D]" onClick={() => handleImageClick(itm)}>
            {itm.type === 1 && (
              <div className="p-3 pt-0 text-[#85673D] font-bold text-sm md:text-2xl pb-5">
                <p>{itm.title}</p>
              </div>
            )}
            <div>
              <Image
                src={itm.img}
                alt={itm.title}
                width={495}
                height={443}
                className="object-cover h-[260px] w-[290px] md:w-[495px] md:h-[443px] cursor-pointer"
              />
            </div>
            {itm.type === 0 && (
              <div className="p-3 pb-0 text-[#85673D] font-bold text-sm md:text-2xl pt-5">
                <p>{itm.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
     {/* </Link> */}
      <div className="w-full mt-14 flex flex-col items-center justify-center">
        <div className="bg-[#9F7B49] flex flex-col items-center justify-center w-[96%] p-2 md:p-5">
          <div className="bg-[#FFFBF6] w-full py-6 md:py-12 overflow-hidden flex flex-col items-center gap-6 md:gap-12 justify-center relative">
            <div className="flex flex-col items-center justify-center">
              <p className="text-center font-bold text-[20px] md:text-[40px] text-[#9F7B49]">
                Join Us
              </p>
              <p className="text-center text-xs  md:text-lg text-[#353535] mt-4 w-[90%] md:w-[80%]">
                Join us at Apis India and become part of a dynamic team where
                innovation, collaboration, and personal growth are at the heart
                of everything we do
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-sm md:text-[19px] font-bold">
                Job Role
              </p>
              <p className="text-center text-xs md:text-lg text-[#353535] mt-2 w-[90%] md:w-[80%]">
                Senior Manager ,Assitant Manager, Executive{" "}
              </p>
              <div>
                <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 mt-4 md:mt-8 font-bold text-white">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-sm md:text-[19px] font-bold">
                Job Role
              </p>
              <p className="text-center text-xs md:text-lg text-[#353535] mt-2 w-[90%] md:w-[80%]">
              Senior Manager ,Assitant Manager, Executive{" "}

              </p>
              <div>
                <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 mt-4 md:mt-8 font-bold text-white">
                  Apply Now
                </button>
              </div>
            </div>
            <Image src={Ring1} className="hidden md:inline absolute -left-20 -bottom-32 h-[300px] w-[298px] rotate-animation" />
          </div>
        </div>
      </div>
    </>
  );
}

Careers.propTypes = {
  initialData: PropTypes.object,
};
