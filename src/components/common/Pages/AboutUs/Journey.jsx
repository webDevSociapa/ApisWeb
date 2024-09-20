"use client";

import React from "react";
import { useState } from "react";
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
  function openCity(ind) {
    setSelectedIndex(ind);
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += " active";
  }
  

  const JOURNEY_DATA = [
    {
      year: "Year 2015",
      title: "2015",
      desc: "In 2015, AIL crossed 15ML USD in Export Sales",
      img: JR2015,
    },
    {
      year: "Year 2016",
      title: "2016",
      desc: "In 2016, AIL crossed 15ML USD in Export Sales",
      img: JR2016,
    },
    {
      year: "Year 2017",
      title: "2017",
      desc: "In 2017, AIL crossed 15ML USD in Export Sales",
      img: JR2017,
    },
    {
      year: "Year 2018",
      title: "2018",
      desc: "In 2018, AIL crossed 15ML USD in Export Sales",
      img: JR2018,
    },
    {
      year: "Year 2019",
      title: "2019",
      desc: "In 2019, AIL crossed 15ML USD in Export Sales",
      img: JR2019,
    },
    {
      year: "Year 2020",
      title: "2020",
      desc: "In 2020, AIL crossed 15ML USD in Export Sales",
      img: JR2020,
    },
    {
      year: "Year 2021",
      title: "2021",
      desc: "In 2021, AIL crossed 15ML USD in Export Sales",
      img: JR2021,
    },
    {
      year: "Year 2022",
      title: "2022",
      desc: "In 2022, AIL crossed 15ML USD in Export Sales",
      img: JR2022,
    },
    {
      year: "Year 2023",
      title: "2023",
      desc: "In 2023, AIL crossed 15ML USD in Export Sales",
      img: JR2023,
    },
    {
      year: "Year 2024",
      title: "2024",
      desc: "In 2024, AIL crossed 15ML USD in Export Sales",
      img: JR2024,
    },
  ];

  const [selectedIntex, setSelectedIndex] = useState(0);
  const selectedData = JOURNEY_DATA.find((_, ind) => ind === selectedIntex);

  console.log("selectedData",selectedData.img.src)

  return (
    <>
    <div className="w-full flex h-full" style={{backgroundImage: `url(${selectedData.img.src})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
      <div class="tab flex w-[386px]">
        <div class="sidebar p-2 py-4 w-full">
          {JOURNEY_DATA.map((itm, ind) => {
            return (
              <button
                className={`tablinks shadow-xl border border-[#9F7B49] w-[386px] h-[70px]  text-xl rounded-[15px] ${selectedIntex === ind ? "bg-[#9F7B49] text-white font-bold" : "bg-[#FFF9F0E5] text-black"} `}
                onClick={(e) => openCity(ind)}
              >
                {itm.year}
              </button>
            );
          })}
        </div>
      </div>
      {/* <div class="tabcontent"> */}
        {/* <div class="p-3">
          <div class="row p-md-5 p-3 justify-content-center row-mod">
            <div class="col-md-6 col-12 d-flex align-items-between fade-in-left justify-content-start flex-column p-2 paracontent">
              <div class="head">
                <ul>
                  <li className="text-6xl font-semibold">{selectedData.title}</li>
                  <li className="text-3xl mt-2 font-jost">{selectedData.desc}</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
     </div>
     
    </>
  );
};

export default Journey;
