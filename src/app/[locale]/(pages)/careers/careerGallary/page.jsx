"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const TABS = [
  { id: 1, title: "Employee Award", content: [] }, // Dummy content
  { id: 2, title: "Meet & Greet", content: [] }, // Dummy content
  { id: 3, title: "Engagements", content: [] }, // Dummy content
  { id: 4, title: "Celebrations", content: [] }, // Dummy content
];

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
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imageGroup = searchParams.get("imageGroup");
  const gallery = searchParams.get("gallery");

  // Parse the comma-separated image URLs into an array
  const [activeTab, setActiveTab] = useState(parseInt(gallery) || 1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSet, setImageSet] = useState(imageGroup ? imageGroup.split(",") : []);
  
  useEffect(() => {
    if (gallery) {
      setActiveTab(parseInt(gallery));
    }
  }, [gallery]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentTab = TABS.find((tab) => tab.id === activeTab);

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

      <p className="text-center mt-10 font-bold text-[#9F7B49] text-3xl py-4 sm:py-4 sm:mt-2 font-literata">
        {title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
        {imageSet?.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={image}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </>
  );
}
