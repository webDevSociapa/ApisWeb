"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CareerGallery5 from '@/assets/images/Careers/cgallary5.png';
import CareerGallery2 from '@/assets/images/Careers/cgallary2.png';
import CareerGallery1 from '@/assets/images/Careers/cgallary1.png';
import CareerGallery4 from '@/assets/images/Careers/cgallary4.png';
import CareerGallery3 from '@/assets/images/Careers/cgallary3.png';
import CareerGallery10 from '@/assets/images/Careers/cgallary10.png';
import HrMeet1 from '@/assets/images/Careers/hrMeet1.jpg';
import HrMeet2 from '@/assets/images/Careers/hrMeet2.jpg';
import HrMeet3 from '@/assets/images/Careers/hrMeet3.jpg';
import Engagement1 from '@/assets/images/Careers/engageMent1.webp';
import Engagement2 from '@/assets/images/Careers/engagement02.webp';
import Engagement3 from '@/assets/images/Careers/engagement03.webp';
import Engagement4 from '@/assets/images/Careers/engagement04.webp';
import Engagement5 from '@/assets/images/Careers/engagement05.webp';
import Engagement6 from '@/assets/images/Careers/engagement06.webp';

import BirthdayCelebration from '@/assets/images/Careers/birthdayCelebration.png';
import BirthdayCelebration1 from '@/assets/images/Careers/birthdayCelebration2.jpg';
import BirthdayCelebration2 from '@/assets/images/Careers/birthdayCelebration3.jpg';
import { useSearchParams } from "next/navigation";

const TABS = [
  { id: 1, title: "Employee Award", content: [CareerGallery5, CareerGallery2, CareerGallery1, CareerGallery4, CareerGallery3, CareerGallery10] },
  { id: 2, title: "Meet & Greet", content: [HrMeet1,HrMeet2 ,HrMeet3 ,] },
  { id: 3, title: "Engagements", content: [Engagement1, Engagement2, Engagement3, Engagement4, Engagement6,Engagement6,Engagement6] },
  { id: 4, title: "Celebrations", content: [BirthdayCelebration, BirthdayCelebration1, BirthdayCelebration2] },
];

// Modal component
const Modal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <Image
          src={image}
          alt="Modal image"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default function Album() {
  const searchParams = useSearchParams()
  const title = searchParams.get("title");
  const titleImage = searchParams.get("titleImage");
  const imageGroup = searchParams.get("imageGroup");
  const gallery = searchParams.get("gallery");

  console.log("title",imageGroup);
  
  
  
  const [activeTab, setActiveTab] = useState(parseInt(gallery) || 1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSet,setImageSet] = useState ([imageGroup])

  useEffect(() => {
    if (gallery) {
      setActiveTab(parseInt(gallery));
    }
  }, [gallery]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentTab = TABS.find(tab => tab.id === activeTab);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Life @Apis
        </p>
        <p className="text-sm w-[95%] md:text-xl md:w-[70%] md:leading-8 mt-3 md:mt-6 text-center font-jost">
          At Apis India, we foster a collaborative and innovative work culture
          where every team member's ideas are valued, and growth opportunities
          are embraced with enthusiasm.
        </p>
      </div>

      {/* <div className="flex justify-center mt-4 space-x-4 w-[100%] sm:w-[80%] text-nowrap overflow-x-auto">
        {TABS.map((tab) => (
          <div
            key={tab.id}
            className={`px-6 py-2 border-2 cursor-pointer ${activeTab === tab.id ? "bg-[#9F7B49] text-white" : ""}`}
            style={{ borderColor: 'rgba(133, 103, 61, 1)' }}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div> */}

<p className="text-center mt-10 font-bold text-[#9F7B49] text-3xl py-4 sm:py-4 sm:mt-2 font-literata">{title}</p>


      {/* {currentTab && (
        <p className="text-center mt-10 font-bold text-[#9F7B49] text-3xl py-4 sm:py-4 sm:mt-2 font-literata">{title}</p>
      )} */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
        {imageSet?.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden cursor-pointer"
               onClick={() => handleImageClick(image)}>
            <Image 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              width={300} 
              height={300} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
            />
          </div>
        ))}
      </div>

      {/* {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )} */}
    </>
  );
}
