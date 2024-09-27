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
// import DSD from "@/assets/images/Investors/Outcome-of-Board-Meeting091123"

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
    { "id": 1, "name": "Outcome of Board Meeting : November-09-2023", "path": "https://apisindia.com/pdf/2023/Outcome-of-Board-Meeting091123.pdf",type:"1" },
    { "id": 2, "name": "Notice of Board Meeting : October-31-2023", "path": "https://apisindia.com/pdf/2023/Notice-of-Board-Meeting311023.pdf" ,type:"1"},
    { "id": 3, "name": "Outcome of Board Metting : August-13-2022", "path": "https://apisindia.com/pdf/2022/Outcome-of-board-meeting-082022.pdf" ,type:"1"},
    { "id": 4, "name": "Covering Letter January-04-2021", "path": "https://apisindia.com/pdf/2020/Covering_Letter_2021.pdf",type:"2" },
    { "id": 5, "name": "Disclosure under Reg.30 Appt of Director January-15-2021", "path": "https://apisindia.com/pdf/2020/DISCLOSURE-UNDER-REG-30-APPT-OF-DIRECTOR.pdf" ,type:"2"},
    { "id": 6, "name": "Notice of BM in Newspaper February-03-21", "path": "https://apisindia.com/pdf/2020/NOTICE_OF_BM_IN_NEWSPAPAR-2021.pdf",type:"2" },
    { "id": 7, "name": "Outcome of the Board Meeting February-13-21", "path": "https://apisindia.com/pdf/2020/Outcome_of_the_Board_Meeting--2021.pdf" ,type:"2"},
    { "id": 8, "name": "Notice of Board Meeting Stock Exchange February-02-21", "path": "https://apisindia.com/pdf/2020/Notice_of_Board_Meeting_Stock_Exchange-2021.pdf",type:"2" },
    { "id": 9, "name": "Outcome of Board Meeting : 15th September, 2020", "path": "https://apisindia.com/pdf/2020/Outcome%20of%20the%20Board%20Meeting%20-%2015ht%20September.pdf",type:"2" },
    { "id": 10, "name": "FINANCIAL RESULTS (2019-2020) Q1 Results", "path": "https://apisindia.com/pdf/AGM%20Results.pdf",type:"2" },
    { "id": 11, "name": "Q2 Results", "path": "https://apisindia.com/pdf/newupdates/Outcome%20of%20Board%20Meeting.pdf",type:"2" },
    { "id": 12, "name": "Q3 Results", "path": "https://apisindia.com/pdf/newupdates/Outcome_of_the_Board_Meeting.pdf" },
    { "id": 13, "name": "Q4 Results", "path": "https://apisindia.com/pdf/2020/Outcome%20of%20Board%20Meeting-final.pdf" ,type:"2"},
    { "id": 14, "name": "Outcome of Board Meeting : Date 14th Feb, 2020", "path": "https://apisindia.com/pdf/newupdates/Outcome_of_the_Board_Meeting.pdf",type:"2" },
    { "id": 15, "name": "Outcome of Board Meeting, 14th Nov., 2019", "path": "https://apisindia.com/pdf/newupdates/Outcome%20of%20Board%20Meeting.pdf" },
    { "id": 16, "name": "Outcome of 37th General Meeting", "path": "https://apisindia.com/pdf/AGM%20Results.pdf" },
    { "id": 17, "name": "Outcome + Audited Financial Results: 31st March 2019", "path": "https://apisindia.com/pdf/Outcome_of_the_Board_Meeting_final.pdf" },
    { "id": 18, "name": "FINANCIAL RESULTS (AUDITED RESULTS - 2018-2019) Q1 Results", "path": "https://apisindia.com/investorelation-pdf/2019/Results-June.pdf" },
    { "id": 19, "name": "Q2 Results", "path": "https://apisindia.com/investorelation-pdf/2019/Results_September.pdf" },
    { "id": 20, "name": "Q3 Results", "path": "https://apisindia.com/investorelation-pdf/2019/Results_December.pdf" },
    { "id": 21, "name": "Revised Final Financial Results 2017-18", "path": "https://apisindia.com/investorelation-pdf/2018/Revised-Fianncial-Results_31%20March_2018.pdf" },
    { "id": 27, "name": "Audited Final Financial Report 2016-2017", "path": "https://apisindia.com/investorelation-pdf/2016/AUDITED-Financial-Report-2016-17.pdf" },
    { "id": 22, "name": "FINANCIAL RESULTS AUDITED APRIL 2017 Q1 LLR ApisIndia", "path": "https://apisindia.com/investorelation-pdf/2016/Q1_LLR_apisIndia.pdf" },
    { "id": 23, "name": "Q1 UFR June 2016", "path": "https://apisindia.com/investorelation-pdf/2016/Q1_UFR_JUNE2016.pdf" },
    { "id": 24, "name": "Q2 Results", "path": "https://apisindia.com/investorelation-pdf/2016/Q2.pdf" },
    { "id": 25, "name": "Q2 UFR September 2016", "path": "https://apisindia.com/investorelation-pdf/2016/Q2_UFR_September_2016.pdf" },
    { "id": 31, "name": "Q4 Audited FR March 2016", "path": "https://apisindia.com/investorelation-pdf/2015/Q4_Audited-FR_March-2016.pdf" },
    { "id": 26, "name": "Q3 Report of UAFR, Dec 2016", "path": "https://apisindia.com/investorelation-pdf/2016/Q3-Report-of-UAFR-(Dec-2016).pdf" },
    { "id": 28, "name": "FINANCIAL RESULTS (AUDITED MARCH 2015-16) Q1 UFR June 2015", "path": "https://apisindia.com/investorelation-pdf/2015/Q1-UFR_June-2015.pdf" },
    { "id": 29, "name": "Q2 September 2015", "path": "https://apisindia.com/investorelation-pdf/2015/Q2_September-2015.pdf" },
    { "id": 30, "name": "Q3 December 2015", "path": "https://apisindia.com/investorelation-pdf/2015/Q3_December-2015.pdf" },
    { "id": 32, "name": "FINANCIAL RESULTS (AUDITED MARCH 2014-15) Q1 UFR June 2014", "path": "https://apisindia.com/investorelation-pdf/2014/Q1_UFR_June-2014.pdf" },
    { "id": 35, "name": "Q4 Audited FR March 2015", "path": "https://apisindia.com/investorelation-pdf/2014/Q4_Audited-FR_March2015.pdf" },
    { "id": 33, "name": "Q2 UFR September 2014", "path": "https://apisindia.com/investorelation-pdf/2014/Q2_UFR_September-2014.pdf" },
    { "id": 34, "name": "Q3 UFR December 2014", "path": "https://apisindia.com/investorelation-pdf/2014/Q3_UFR_December-2014.pdf" },
    { "id": 39, "name": "Q4 Financial Audited Result March, 2014", "path": "https://apisindia.com/investorelation-pdf/2013/Q4_Financial-Audited-Result_March-2014.pdf"},
    { "id": 36, "name": "FINANCIAL RESULTS (AUDITED MARCH 2013-14) Q1 UFR June 2013", "path": "https://apisindia.com/investorelation-pdf/2013/Q1_UFR_June-2013.pdf" },
    { "id": 37, "name": "Q2 UFR Sep 2013", "path": "https://apisindia.com/investorelation-pdf/2013/Q2_UFR_Sep_2013.pdf"},
    { "id": 38, "name": "Q3 Limited Review report Q3 (11th Feb, 2013)", "path": "https://apisindia.com/investorelation-pdf/2013/Q3_Limited-Review-report-Q3-(11th=Feb-2013.pdf"},
];



// const optionData = [
//   {"value":"2020 - 2021","type":"2"},
//   {"value":"2022 - 2023","type":"1"},
// 
//   // ["2020 - 2021", "2021 - 2022", "2022 - 2023"

// ]

export default function Investors() {
  const [selectedOption, setSelectedOption] = useState("2022 - 2023");
  const [selectedTab, setSelectedTab] = useState(INVESTER_TABS[0].id);
  const [selectedType, setSeletedType] = useState(INVESTER_TABS[0].types[0]);

  // console.log(selectedType,"selectedType");
  


  // const handleChange = ()=>{

  // }

  // const filteredDocs = WORLD_APPERIENCE.filter(doc => doc.type === selectedOption.type);
  

  

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
        {/* <div className="bg-[#FFFBF6] flex items-center justify-center py-4  lg:py-12 border border-t-0 border-[#9F7B49] bg-opacity-80 sm:absolute w-full  bottom-0">
          <div className="text-xs md:text-base lg:text-xl text-center w-[94%]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui{" "}
          </div>
        </div> */}
      </div>
      <div className="p-4  md:p-8 py-4 md:py-16 md:!pb-10 w-full">
        <p className="font-bold text-[#9F7B49] md:text-[40px] text-[20px] mb-4">
          Apis World Appearance
        </p>
        {/* <div className="my-4 md:my-10">
          <CustomDropdown
            options={optionData.map((item)=> item.value)}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div> */}
        <div className="flex flex-wrap w-full gap-4">
          {WORLD_APPERIENCE.map((itm, index) => (
            <div
              key={index}
              className="border w-full border-[#AE844A] rounded-[20px] bg-[#FFFBF6] py-3 px-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-black text-xs md:text-lg">{itm.name}</p>
                <div className="me-4">
                  <a
                    href={`${itm.path}`} // Ensure this path is correct
                    target="_blank"
                    className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] border border-[#AE844A] rounded-full flex items-center justify-center cursor-pointer text-[#AE844A] hover:text-white hover:bg-[#AE844A]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs md:text-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

Investors.propTypes = {
  initialData: PropTypes.object,
};
