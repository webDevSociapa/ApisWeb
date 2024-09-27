"use strict"
import CareerGallery from '@/assets/images/Careers/cgallary.png'
import CareerGallery1 from '@/assets/images/Careers/cgallary1.png'
import CareerGallery2 from '@/assets/images/Careers/cgallary2.png'
import CareerGallery3 from '@/assets/images/Careers/cgallary3.png'
import CareerGallery4 from '@/assets/images/Careers/cgallary4.png'
import CareerGallery5 from '@/assets/images/Careers/cgallary5.png'
import CareerGallery6 from '@/assets/images/Careers/cgallary6.png'
import CareerGallery7 from '@/assets/images/Careers/cgallary7.png'
import CareerGallery8 from '@/assets/images/Careers/cgallary8.png'
import CareerGallery10 from '@/assets/images/Careers/cgallary10.png'
import CareerGallery11 from '@/assets/images/Careers/cgallary11.png'
import ImageBanner from '@/components/common/Layout/Banner'
import Banner from "@/assets/images/Careers/Careers.png";


export default function Album() {
    
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
      <div className="album">
        <div className="bg flex flex-wrap justify-between mx-auto w-full max-w-[1320px] p-2 pt-20">
          <div className="img-cont flex flex-col w-full md:w-1/3 h-full">
            <img
              className="w-full mb-5 w-[450px] h-[246px]"
              src={CareerGallery5.src}
            />
            <img
              className="w-full mb-5"
              src={CareerGallery2.src}
            />
            <img
              className="w-full mb-5 img-last"
              src={CareerGallery1.src}
            />
          </div>
          <div className="img-cont flex flex-col w-full md:w-1/3 h-full">
            <img
              className="w-full mb-4 h-[50%] img-big"
              src={CareerGallery4.src}
            />
            <img
              className="w-full mb-4 h-[50%] img-big img-last"
              src={CareerGallery3.src}
            />
            <img
              className="w-full mb-4 h-[50%] img-big img-last"
              src={CareerGallery10.src}
            />
          </div>
          <div className="img-cont flex flex-col w-full md:w-1/3 h-full">
            <img
              className="w-full mb-5"
              src={CareerGallery7.src}
            />
            <img
              className="w-full mb-5 h-[350px]"
              src={CareerGallery8.src}
            />
            {/* <img
              className="w-full mb-5"
              src={CareerGallery6.src}
            /> */}
            <img
              className="w-full mb-5"
              src={CareerGallery11.src}
            />
          </div>
        </div>
      </div>
      </>
    );
  }
  