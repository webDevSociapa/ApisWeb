"use client"

import Image from "next/image";
import MissionBanner from "@/assets/images/AboutUs/missionVission.png";
import { useEffect, useState } from "react";
import Curv from "@/assets/images/AboutUs/Curv.png";
import axios from "axios";


export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");
  const [ourValues, setOurValues] = useState([])
  const [apisDataNumber, setApisDataNumber] = useState()
  
    const renderContent = () => {
        switch (activeTab) {
          case "vision":
            return `${ourValues?.visionContent}`
          case "mission":
            return `${ourValues?.missionContent}`
          case "values":
            return `${ourValues?.valuesContent}`
          default:
            return "";
        }
      };
      useEffect(()=>{
        const fetchMisionData = async()=>{
            try {
              const response = await axios.get("/api/AboutUs/ourValues");              
              setOurValues(response.data[0]);
              
            } catch (error) { 
            }
          }
          fetchMisionData()
      },[])

  return (
    <div id="mission-values" className="relative mt-14 flex flex-col items-center justify-center w-full">
    <Image src={MissionBanner} width={1440} className="object-cover w-full h-100" />

    <div className="w-full flex justify-end items-center absolute end-0 top-0">
      <div className="bg-opacity-80 p-2 md:p-8 rounded-md w-full flex flex-col">
        <div className="flex flex-row justify-between items-center gap-2 md:gap-10">
          {["vision", "mission", "values"].map((tab) => (
            <button
              key={tab}
              className={`text-black text-center text-shadow-lg font-literata font-bold leading-normal ${activeTab === tab ? "text-lg md:text-4xl text-shadow underline" : "text-sm md:text-3xl"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative w-full flex justify-center mt-12 xs:mt-12 md:mt-20">
          <div
            key={activeTab}  // Change key to re-render and trigger animation
            className="md:p-8 pb-2 rounded-xl w-[90%] lg:w-[70%] shadow-lg animate-slideInLeft"
          >
            <p className="text-black text-center font-jost text-xs sm:text-base md:text-2xl font-medium">
              {renderContent()}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="lg:absolute bottom-4 w-full">
      <Image src={Curv} alt="Banner Image" className="object-cover hidden lg:inline w-full h-auto max-h-[670px]" />
      <div className="relative">
        <div className="lg:absolute z-10 bottom-[124px] left-0 right-0 flex gap-4 flex-wrap justify-around items-center mt-10 text-center p-4 2xl:py-10 curvonLegacyData">
          {apisDataNumber?.map((item) => (
            <div key={item.key} className="w-[130px] lg:w-[200px] xl:w-[275px] h-[110px] xl:h-[170px] flex-shrink-0 border rounded-[1.875rem] border-[#9F7B49] bg-transparent shadow-md flex items-center justify-center">
              <div className="flex gap-3 items-center justify-center flex-col">
                <p className="text-[14px] lg:text-[20px] xl:text-[34px] text-center spaced-words font-bold ms-4 text-[#9F7B49]">
                  {counts[item.key]}+
                </p>
                <p className="text-[#131313] text-[12px] lg:text-base xl:text-[24px] font-semibold font-jost">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}