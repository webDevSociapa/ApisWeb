"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/Investors/Investors.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ImageBanner from "../../Layout/Banner";
import { WORLD_APPERIENCE, CORPORATE_GOVERNANACE, CODE_OF_CONDUCT, ANNUAL_REPORTS, BOARD_MEETING_FINACIALRESULTS, shareholdingPatterns, corporateDisclosures, financialsSheet,Corporate_Annoucement } from '@/lib/constants';

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
    "Board Subsidiary Financials": []
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
  },
  // 8: {
  //   "Corporate Announcement": Corporate_Annoucement,
  // }
};

const INVESTER_TABS = [
  { id: 1, title: "Financials", types: ["Associates", "Subsidiary Financials"] },
  { id: 2, title: "Board Committees", types: ["Board Associates", "Board Subsidiary Financials"] },
  { id: 3, title: "Corporate Governance", types: ["Corporate Associates", "Subsidiary", "Corporate Financials"] },
  { id: 4, title: "Code Of Conduct", types: ["Conduct", "Subsidiary Conduct", "Subsidiary", "Subsidiary-Pride"] },
  { id: 5, title: "Financial Results", types: ["Associates Results", "Subsidiary Financial"] },
  { id: 6, title: "Annual Report", types: ["Report", "Annual Financials", "Results"] },
  { id: 7, title: "Share Holding Information", types: ["Associates"] },
  { id: 8, title: "GreenInitiative",types: ["Green Initiative"] },
  // { id: 9, title: "Corporate Announcement",types: ["Corporate Announcement"] },


];
export default function Investors() {
  const [selectedTab, setSelectedTab] = useState(INVESTER_TABS[0].id); 
  const [selectedType, setSelectedType] = useState(INVESTER_TABS[0].types[0]); 

  useEffect(() => {
    const firstType = INVESTER_TABS.find(tab => tab.id === selectedTab)?.types[0];
    setSelectedType(firstType);
  }, [selectedTab]);


console.log("selectedTab",DUMMY_DATA);



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
  const RenderGreenInitiative = () => {
    const greenInitiativeData = {
      title: "Defining Our Love For Nature",
      introduction: "Dear Sir/Madam,",
      message: `
        Pursuant to SEBI directions and the Green Initiative by the Ministry of Corporate Affairs (MCA), we propose to send all future shareholder communication, such as Notice, Explanatory Statement, Annual Report, and other documents, through electronic mode. This, you will appreciate, would facilitate fast, secured communication and contribute towards an improved environment.
      `,
      instructions: [
        "Shareholders with electronic holdings should register or update their email addresses with their Depository Participants.",
        "Shareholders with physical shares should fill and send the ‘E-Communication Registration Form’ to the Company or its Registrar & Transfer Agent.",
        "The Company will also display electronically sent documents on its website for easy reference.",
      ],
      contactInfo: {
        registrarAddress: `
          Skyline Financial Services Private Limited,
          D – 153A, 1st Floor, Okhla Industrial Area, Phase-I,
          New Delhi – 110 020
        `,
        registrarEmail: "contact@skylinerta.com",
        companyEmail: "greeninitiative@apisindia.com",
      },
      closing: {
        text: "Thanking You,",
        signature: "For and on behalf of the Company",
        director: "Vimal Anand",
        position: "(Managing Director)",
      },
      downloadLink: "/path/to/E-Communication-Registration-Form.pdf",
      investorEmail: "investor.relations@apisindia.com"
    };
  
    return (
      <div className="green-initiative p-6 bg-[#FFFBF6] border-2 border-[#9F7B49] rounded-md font-jost">
        <h2 className="text-[#9F7B49] text-2xl font-semibold mb-4 font-literata">{greenInitiativeData.title}</h2>
        <p className="text-base md:text-xl mb-4">{greenInitiativeData.introduction}</p>
        <p className="text-base md:text-xl mb-4">{greenInitiativeData.message}</p>
        <ul className="list-disc list-inside mb-4 space-y-2 text-base">
          {greenInitiativeData.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <div className="mb-4">
          <p><strong>Registrar & Transfer Agent Address:</strong></p>
          <p>{greenInitiativeData.contactInfo.registrarAddress}</p>
          <p><strong>Email:</strong> <a href={`mailto:${greenInitiativeData.contactInfo.registrarEmail}`} className="text-[#9F7B49]">{greenInitiativeData.contactInfo.registrarEmail}</a></p>
        </div>
        <p className="font-bold mb-4">
          <a href={greenInitiativeData.downloadLink} download className="flex items-center gap-2 text-[#9F7B49]">
            Download ‘E-Communication Registration Form’
          </a>
        </p>
        <p className="font-bold mb-4">
          For investor-related queries, email us at:{" "}
          <a href={`mailto:${greenInitiativeData.investorEmail}`} className="text-blue-600">
            {greenInitiativeData.investorEmail}
          </a>
        </p>
        <div className="mt-6">
          <p>{greenInitiativeData.closing.text}</p>
          <p>{greenInitiativeData.closing.signature}</p>
          <p>{greenInitiativeData.closing.director}</p>
          <p>{greenInitiativeData.closing.position}</p>
        </div>
      </div>
    );
  };
  


  const getDataForSelectedType = () => {
    if (selectedTab === 2 && selectedType === "Board Committees") {
        return <AuditCommittee />;
    }
    else if(selectedTab === 8 && selectedType === "GreenInitiative"){
      return <RenderGreenInitiative />
    }
    return DUMMY_DATA[selectedTab]?.[selectedType] || []; 
  };

  console.log("getDataForSelectedType",DUMMY_DATA);
  
  return (
    <div className="w-full h-full mt-4">
      {/* Tabs */}
      <div className="flex flex-col z-50 xs:flex-row w-full overflow-auto px-[0.5px]">
        {INVESTER_TABS.map((itm) => (
          <p
            key={itm.id}
            className={`w-full flex items-center relative justify-center min-w-max cursor-pointer text-sm md:text-lg 2xl:text-xl border border-[#AE844A] ${selectedTab === itm.id ? "bg-[#AE844A] font-bold text-white shadow-[0px_4px_6px rgba(0,0,0,0.2)]" : "text-[#3F3F3F] bg-[#FFFBF6]"}`}
            onClick={() => {
              setSelectedTab(itm.id);
              if (itm.id === 2) { // If the second tab is clicked
                setSelectedType("Board Associates"); // Set the type to "Board Associates"
              } else {
                setSelectedType(INVESTER_TABS.find(tab => tab.id === itm.id)?.types[0]); // Set to the first type of the selected tab
              }
            }}
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
        <div className="bg-[#FFFBF6] flex items-center justify-center py-4  lg:py-12 border border-t-0 border-[#9F7B49] bg-opacity-80 sm:absolute w-full  bottom-0">
          <div className="text-xs md:text-base lg:text-xl text-center w-[94%] font-jost">
          At Apis India, we are committed to driving growth and delivering value for our investors through a blend of innovation, quality, and strategic expansion. Our diverse product portfolio, including premium honey, health-focused spreads, and staple food items, is designed to meet the evolving needs of consumers worldwide. With a solid track record of profitability and a vision for sustainable growth, we are focused on leveraging market trends and operational efficiencies to maximize returns. Your investment in Apis India is an investment in a future of robust growth and industry leadership.
          </div>
        </div>
        </div>
        {/* Content based on selected type */}
        <div className="p-4 md:p-8 py-4 md:py-16 md:!pb-10 w-full">
        {selectedTab === 2 ? (
          <AuditCommittee />
        ) : selectedTab === 8 ? (
          <RenderGreenInitiative />
        ) : (
            <>
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
                      <p className="text-black text-xs md:text-lg">{item.name || "No Name"}</p> 
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
            </>
          )}
        </div>
    </div>
  );
}

Investors.propTypes = {
  initialData: PropTypes.object,
};
