"use client"
import React, { useState } from "react";
import CareerGallery5 from '@/assets/images/Careers/cgallary5.png';
import CareerGallery2 from '@/assets/images/Careers/cgallary2.png';
import CareerGallery1 from '@/assets/images/Careers/cgallary1.png';
import CareerGallery4 from '@/assets/images/Careers/cgallary4.png';
import CareerGallery3 from '@/assets/images/Careers/cgallary3.png';
import CareerGallery10 from '@/assets/images/Careers/cgallary10.png';

const TABS = [
  { id: 1, title: "Employee Award", content: [CareerGallery5, CareerGallery2, CareerGallery1,CareerGallery4, CareerGallery3, CareerGallery10] },
  { id: 2, title: "Meet & Greet", content: [CareerGallery5, CareerGallery2, CareerGallery1,CareerGallery4, CareerGallery3, CareerGallery10] },
  { id: 3, title: "Engagements", content: [CareerGallery5, CareerGallery2, CareerGallery1,CareerGallery4, CareerGallery3, CareerGallery10] },
  { id: 4, title: "Celebrations", content: [CareerGallery4, CareerGallery3, CareerGallery10] },
];

export default function Album({searchParams }) {
  console.log(searchParams.name,"name");
  
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentTab = TABS.find(tab => tab.id === activeTab);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
          Life @Apis
        </p>
        {/* */}
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center">
          At Apis India, we foster a collaborative and innovative work culture
          where every team member's ideas are valued, and growth opportunities
          are embraced with enthusiasm.
        </p>
      </div>

      {/* Tabs */}
      {/*  */}
      <div className="flex justify-center mt-4 space-x-4 w-[100%] sm:w-[80%] text-nowrap">
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
      </div>

      {/* Display Active Tab Title */}
      {currentTab && (
        <p className="text-center mt-10 font-bold text-[#9F7B49] text-3xl py-4 sm:py-4 sm: mt-2">{currentTab.title}</p>
      )}

      {/* Gallery */}
      <div className="flex flex-wrap justify-center mx-auto w-full max-w-[1320px] p-2 pt-0">
        {currentTab?.content.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 p-0">
            <img className="w-full h-auto" src={image.src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
}
