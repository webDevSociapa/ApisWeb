"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/Investors/Investors.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ImageBanner from "../../Layout/Banner";
import { WORLD_APPERIENCE, CORPORATE_GOVERNANACE, CODE_OF_CONDUCT, ANNUAL_REPORTS, BOARD_MEETING_FINACIALRESULTS, shareholdingPatterns, corporateDisclosures, financialsSheet } from '@/lib/constants';

const auditCommitteeMembers = [
  { name: "MRS. MENIKA GARG", designation: "CHAIRMAN" },
  { name: "MRS. SHALINI MALIK", designation: "MEMBER" },
  { name: "MR. KARAN AHOOJA", designation: "MEMBER" },
];


const DUMMY_DATA = {
  1: {
    "Associates": financialsSheet.associates,
    "Subsidiary Financials": financialsSheet.subsidiaryFinancials
  },
  2: {
    "Board Associates": auditCommitteeMembers,
    "Board Subsidiary Financials": ["Board Subsidiary Financials Data"]
  },
  3: {
    "Corporate Associates": CORPORATE_GOVERNANACE,
    "Subsidiary": [],
    "Corporate Financials": []
  },
  4: {
    "Conduct": CODE_OF_CONDUCT,
    "Subsidiary Conduct": [],
    "Subsidiary": [],
    "Subsidiary-Pride": []
  },
  5: {
    "Associates Results": BOARD_MEETING_FINACIALRESULTS,
    "Subsidiary Financial": []
  },
  6: {
    "Report": ANNUAL_REPORTS,
    "Annual Financials": [],
    "Results": []
  },
  7: {
    "Associates": shareholdingPatterns,
  }
};

const INVESTER_TABS = [
  { id: 1, title: "Financials", types: ["Associates", "Subsidiary Financials"] },
  { id: 2, title: "Board Committees", types: ["Board Associates", "Board Subsidiary Financials"] },
  { id: 3, title: "Corporate Governance", types: ["Corporate Associates", "Subsidiary", "Corporate Financials"] },
  { id: 4, title: "Code Of Conduct", types: ["Conduct", "Subsidiary Conduct", "Subsidiary", "Subsidiary-Pride"] },
  { id: 5, title: "Financial Results", types: ["Associates Results", "Subsidiary Financial"] },
  { id: 6, title: "Annual Report", types: ["Report", "Annual Financials", "Results"] },
  { id: 7, title: "Share Holding Information", types: ["Associates"] }
];

export default function Investors() {
  const [selectedTab, setSelectedTab] = useState(INVESTER_TABS[0].id); 
  const [selectedType, setSelectedType] = useState(INVESTER_TABS[0].types[0]); 

  useEffect(() => {
    const firstType = INVESTER_TABS.find(tab => tab.id === selectedTab)?.types[0];
    setSelectedType(firstType);
  }, [selectedTab]);

  const getDataForSelectedType = () => {
    return DUMMY_DATA[selectedTab]?.[selectedType] || ["No data available"];
  };

 
  const AuditCommittee =() =>{
    return (
      <div className="audit-committee">
      <h2 className="font-bold text-xl mb-4">Audit Committee</h2>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-b-2 border-[#AE844A] text-left">DIRECTOR NAME</th>
            <th className="border-b-2 border-[#AE844A] text-left">DESIGNATION</th>
          </tr>
        </thead>
        <tbody>
          {auditCommitteeMembers.map((member, index) => (
            <tr key={index} className={`border-b border-[#AE844A] ${member.designation === "CHAIRMAN" ? "font-bold" : ""}`}>
              <td className="py-2">{member.name}</td>
              <td className="py-2">{member.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }

  return (
    <div className="w-full h-full mt-4">
      {/* Tabs */}
      <div className="flex flex-col z-50 xs:flex-row w-full overflow-auto px-[0.5px]">
        {INVESTER_TABS.map((itm) => (
          <p
            key={itm.id}
            className={`w-full flex items-center relative justify-center min-w-max cursor-pointer text-sm md:text-lg 2xl:text-xl border border-[#AE844A] ${selectedTab === itm.id ? "bg-[#AE844A] font-bold text-white shadow-[0px_4px_6px_rgba(0,0,0,0.2)]" : "text-[#3F3F3F] bg-[#FFFBF6]"}`}
            onClick={() => setSelectedTab(itm.id)}
          >
            <span className="p-2 px-3 md:p-4 md:px-5">{itm.title}</span>
            <div className={`${selectedTab === itm.id ? "shadow-md" : ""} h-full absolute w-full`} />
          </p>
        ))}
      </div>

      <div className="relative">
        <div className="sm:absolute flex flex-col gap-[0.5px] h-h-full top-0 z-10">
          {/* Types within the selected tab */}
          {INVESTER_TABS.find((itm) => itm.id === selectedTab).types.map((item) => (
            <div className="relative" key={item}>
              <p
                className={`rectangle tri-selected z-10 rounded-e-xl font-jost ps-3 md:ps-5 py-3 md:py-6 cursor-pointer shadow-md text-sm md:text-lg 2xl:text-xl w-[400px] ${selectedType === item ? "bg-[#AE844A] text-white" : "bg-white text-black"}`}
                onClick={() => setSelectedType(item)}
              >
                {item}
              </p>
              <span
                className="absolute -top-[3px] right-[1px] w-0 h-0 border-b-[35px] border-t-white z-10 border-r-[35px] rotate-[-8deg] border-r-transparent"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
                }}
              />
            </div>
          ))}
        </div>

        {/* Banner */}
        <ImageBanner banner={Banner} />

        {/* Content based on selected type */}
        <div className="p-4 md:p-8 py-4 md:py-16 md:!pb-10 w-full">
          <p className="font-bold text-[#9F7B49] md:text-[40px] text-[20px] mb-4">
            Data for {selectedType}
          </p>
          <div className="flex flex-wrap w-full gap-4">
            {getDataForSelectedType().map((item, index) => (
              <div
                key={index}
                className="border w-full border-[#AE844A] rounded-[20px] bg-[#FFFBF6] py-3 px-4"
              >
                <div className="flex items-center justify-between">
                  {/* Rendering specific object properties */}
                  <p className="text-black text-xs md:text-lg">{item.name || item}</p> 
                  <div className="me-4">
                    <a
                      href={item.path || "#"} 
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
    </div>
  );
}

Investors.propTypes = {
  initialData: PropTypes.object,
};
