"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/Investors/Investors.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import { useState } from "react";
import { useEffect } from "react";
import ImageBanner from "../../Layout/Banner";
import CustomDropdown from "../../CustomDropdown";

const INVESTER_TABS = [
  {
    id: 1,
    title: "Financials",
    types: ["Associates", "Subsidiary Financials"],
  },
  {
    id: 2,
    title: "Board Committees",
    types: ["Board Associates", "Board Subsidiary Financials"],
  },
  {
    id: 3,
    title: "Corporate Governance",
    types: ["Corporate Associates", "Subsidiary", "Corporate Financials"],
  },
  {
    id: 4,
    title: "Code Of Conduct",
    types: ["Conduct", "Subsidiary Conduct", "Subsidiary", "Subsidiary-Pride"],
  },
  {
    id: 5,
    title: "Financial Results",
    types: ["Ass<Banociates Results", "Subsidiary Financial"],
  },
  {
    id: 6,
    title: "Annual Report",
    types: ["Report", "Annual Financials", "Results"],
  },
];

const WORLD_APPERIENCE = [
  " Donsectetur ltrngreices, nunc nisl.pdf",
  " Honsectetur ltrices, nunc hvbnl nisl.pdf ",
  " Monsect mnbvcetur ltrices, nunc nisl.pdf ",
  " Ronsecfvr bymfgbtetur lices, nunc nisl.pdf ",
  " Donsectetur ltrngreices, nunc nisl.pdf",
  " Honsectetur ltrices, nunc hvbnl nisl.pdf ",
  " Monsect mnbvcetur ltrices, nunc nisl.pdf ",
  " Ronsecfvr bymfgbtetur lices, nunc nisl.pdf ",
];

export default function Investors() {
  const [selectedOption, setSelectedOption] = useState("2022 - 2023");
  const [selectedTab, setSelectedTab] = useState(INVESTER_TABS[0].id);
  const [selectedType, setSeletedType] = useState(INVESTER_TABS[0].types[0]);

  useEffect(() => {
    setSeletedType(
      INVESTER_TABS.find((itm) => itm.id === selectedTab)?.types[0]
    );
  }, [selectedTab]);

  return (
    <div className="w-full h-full mt-4">
      <div className="flex flex-col z-50 xs:flex-row w-full overflow-auto px-[0.5px]">
        {INVESTER_TABS.map((itm) => (
          <p
            key={itm.id}
            className={`w-full flex items-center relative justify-center min-w-max cursor-pointer text-sm md:text-lg 2xl:text-xl border border-[#AE844A] ${selectedTab === itm.id ? "bg-[#AE844A] font-bold text-white shadow-[0px_4px_6px_rgba(0,0,0,0.2)]" : "text-[#3F3F3F] bg-[#FFFBF6]"}`}
            onClick={() => setSelectedTab(itm.id)}
          >
            <span className=" p-2 px-3 md:p-4 md:px-5">{itm.title}</span>
            <div
              className={`${selectedTab === itm.id ? "shadow-md" : ""} h-full absolute w-full`}
            />
          </p>
        ))}
      </div>

      <div className="relative">
        <div className="sm:absolute flex flex-col gap-[0.5px] h-h-full top-0 z-10">
          {INVESTER_TABS.find((itm) => itm.id === selectedTab).types.map(
            (item) => {
              return (
                <div className="relative">
                  <p
                    className={`rectangle tri-selected z-10 rounded-e-xl font-jost ps-3 md:ps-5 py-3 md:py-6 cursor-pointer shadow-md text-sm md:text-lg 2xl:text-xl w-[400px] ${selectedType === item ? "bg-[#AE844A] text-white" : "bg-white text-black"}`}
                    onClick={() => {
                      setSeletedType(item);
                    }}
                  >
                    {item}
                  </p>
                  <span
                    className="absolute -top-[3px] right-[1px] w-0 h-0 border-b-[35px] border-t-white z-10 border-r-[35px] rotate-[-8deg] border-r-transparent"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                    }}
                  >
                    <div className="relative w-[30px] h-[35px]">
                      <div className="absolute bg-none shadow-custom-primary z-50 w-[10px] bottom-0"></div>
                    </div>
                  </span>
                </div>
              );
            }
          )}
        </div>
        <ImageBanner banner={Banner} />
        <div className="bg-[#FFFBF6] flex items-center justify-center py-4  lg:py-12 border border-t-0 border-[#9F7B49] bg-opacity-80 sm:absolute w-full  bottom-0">
          <div className="text-xs md:text-base lg:text-xl text-center w-[94%]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui{" "}
          </div>
        </div>
      </div>
      <div className="p-4  md:p-8 py-4 md:py-16 md:!pb-10 w-full">
        <p className="font-bold text-[#9F7B49] md:text-[40px] text-[20px]">
          Apis World Appearance
        </p>
        <div className="my-4 md:my-10">
          <CustomDropdown
            options={["2020 - 2021", "2021 - 2022", "2022 - 2023"]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="flex flex-wrap w-full  gap-4">
          {WORLD_APPERIENCE.map((itm) => {
            return (
              <div className="border w-full border-[#AE844A] rounded-[20px] bg-[#FFFBF6] py-3 px-4">
                <div className="flex items-center justify-between">
                  <p className="text-black text-xs md:text-lg">{itm}</p>
                  <div className="me-4">
                    <div className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] border border-[#AE844A] rounded-full flex items-center justify-center cursor-pointer text-[#AE844A] hover:text-white hover:bg-[#AE844A]">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs md:text-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Investors.propTypes = {
  initialData: PropTypes.object,
};
