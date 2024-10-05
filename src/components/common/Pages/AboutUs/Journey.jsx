"use client";

import React, { useState } from "react";
import Image from "next/image";
import JR2015 from '@/assets/images/AboutUs/1.jpg'
import JR2016 from '@/assets/images/AboutUs/2.jpg'
import JR2017 from '@/assets/images/AboutUs/3.jpg'
import JR2018 from '@/assets/images/AboutUs/4.jpg'
import JR2019 from '@/assets/images/AboutUs/5.jpg'
import JR2020 from '@/assets/images/AboutUs/6.jpg'
import JR2021 from '@/assets/images/AboutUs/7.jpg'
import JR2022 from '@/assets/images/AboutUs/8.jpg'
import JR2023 from '@/assets/images/AboutUs/9.jpg'
import JR2024 from '@/assets/images/AboutUs/10.jpg'

const Journey = () => {
  const JOURNEY_DATA = [
    { year: "Year 2015", title: "2015", desc: "In 2015, AIL crossed 15ML USD in Export Sales", img: JR2015 },
    { year: "Year 2016", title: "2016", desc: "In 2016, AIL crossed 15ML USD in Export Sales", img: JR2016 },
    { year: "Year 2017", title: "2017", desc: "In 2017, AIL crossed 15ML USD in Export Sales", img: JR2017 },
    { year: "Year 2018", title: "2018", desc: "In 2018, AIL crossed 15ML USD in Export Sales", img: JR2018 },
    { year: "Year 2019", title: "2019", desc: "In 2019, AIL crossed 15ML USD in Export Sales", img: JR2019 },
    { year: "Year 2020", title: "2020", desc: "In 2020, AIL crossed 15ML USD in Export Sales", img: JR2020 },
    { year: "Year 2021", title: "2021", desc: "In 2021, AIL crossed 15ML USD in Export Sales", img: JR2021 },
    { year: "Year 2022", title: "2022", desc: "In 2022, AIL crossed 15ML USD in Export Sales", img: JR2022 },
    { year: "Year 2023", title: "2023", desc: "In 2023, AIL crossed 15ML USD in Export Sales", img: JR2023 },
    { year: "Year 2024", title: "2024", desc: "In 2024, AIL crossed 15ML USD in Export Sales", img: JR2024 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedData = JOURNEY_DATA[selectedIndex];

  function openCity(index) {
    setSelectedIndex(index);
  }

  return (
    <div 
      className="w-full flex bg-no-repeat bg-center bg-cover"
      style={{ 
        backgroundImage: `url(${selectedData.img.src})`, 
        marginTop: "20px",
        backgroundSize:"100% 110%",
        height: "60vh", // Default height for mobile
      }}
    >
       <style jsx>{`
        @media (min-width: 768px) {
          div {
            height: 90vh !important;
          }
        }
      `}</style>
{/* 
<div
  className="w-full flex h-full xl:h-[100vh] md:h-[50vh] sm:bg-[length:100%_90%] bg-[length:100%_100%] bg-no-repeat bg-center"
  style={{
    backgroundImage: `url(${selectedData.img.src})`,
    marginTop: "20px",
    minHeight: "34vh", // Ensure height for mobile is 34vh
    ? in hovered showiing tostup data-already  mobile view amnd sekhtop view full responsiveness
  }}
> */}

      <div className="sidebar p-0 absolute py-4 xl:px-2 grid gap-2 xl:w-[350px] xl:h-[550px] sm:w-[80px] md:w-[120px]">
        {JOURNEY_DATA.map((itm, ind) => {
          return (
            <button
              key={ind}
              className={`tablinks shadow-xl border border-[#9F7B49] text-xl  rounded-[15px] ${selectedIndex === ind ? "bg-[#9F7B49] text-white font-bold" : "bg-[#FFF9F0E5] text-black"} 
                xl:w-[350px] xl:h-[70px] md:w-[120px] md:h-[50px] sm:h-[40px] px-2`}
              onClick={() => openCity(ind)}
            >
              {itm.year}
            </button>
          );
        })}
      </div>

      {/* <div className="p-3 absolute bottom-10 left-10 text-white">
      
        <h1 className="text-4xl font-semibold">{selectedData.title}</h1>
        <p className="text-2xl mt-2">{selectedData.desc}</p>
      </div> */}
    </div>
  );
};

export default Journey;
