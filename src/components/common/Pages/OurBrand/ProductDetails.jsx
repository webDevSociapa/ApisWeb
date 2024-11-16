"use client";
import React, { useEffect, useState } from "react";
import ImageBanner from "../../Layout/Banner";
import EmblaCarousel from "../../Carousel/Carousel";
import Ring1 from "@/assets/images/OurBrands/Ring-1.png";
import Ring2 from "@/assets/images/OurBrands/Ring-2.png";
import Ring3 from "@/assets/images/OurBrands/Ring-3.png";
import Ring4 from "@/assets/images/OurBrands/Ring-4.png";
import Comma from "@/assets/images/OurBrands/Comma.png";
import HandDrawnHoney from "@/assets/images/OurBrands/HandDrawnHoney.png";
import Image from "next/image";
import CheckReportBanner from '@/assets/images/OurBrands/ProductBanner.png'
import HimalayaHoney from "@/assets/images/OurBrands/himalayaHoney.png"
import { useSearchParams } from "next/navigation";
import { PRODUCT_DATA } from "@/lib/constants";
import Link from "next/link";


import { LATEST_SLIDES, SLIDES, HEALTH_BENEFITS, HEALTH_DATE, HEALTH_JAM, HEALTH_FLAKES, HEALTH_VERNACALLI, HEALTH_MACRONI, HEALTH_SPEARD, COOKING_PASTE, SOYA_CHUNK, SAFFRON, GREEN_TEA, RECIPIES_DATA1, AVAILABILITY_SLIDE, GLIMPSES_SLIDES } from "@/lib/constants";
import axios from "axios";

const OPTIONS = { loop: true };
const ProductDetails = () => {
  const searchParams = useSearchParams()
  const productData  = searchParams.get("productData ");
  const product_id  = searchParams.get("product_id ");

  // const router = useRouter();
  console.log("product_id",product_id);


  
  // const searchParams = useSearchParams();
  // const itm = searchParams.get('itm')
  // console.log("item", itm);
  // const title = searchParams.get('title')
  // console.log("title", title);


  const [healthBenefit, sethealthBenefit] = useState()
  const [selectedContent, setSelectedContent] = useState(null);
  // Hold the selected health benefit content
  // const [selectedContent, setSelectedContent] = useState(HEALTH_BENEFITS[0].id);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  // State to hold the current video URL
  const [hoveredId, setHoveredId] = useState(false);
  // State to track the hovered item
  const [productBanner, setProductBanner] = useState([])
  const [customerReview, setCustomerReview] = useState([])


  // useEffect(()=>{
  //     // try {
  //       const fetchData = async()=>{
  //         const response = await axios.get('/api/our-Brands/productDetails')
  //         setProductData(response.data)
  //         console.log("response1111",response.data);

  //       }
  //     // } catch (error) {
  //     //   console.log("error"); 
  //     // }
  //     fetchData()
  // },[])
  const openModal = (video) => {

    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleImageClick = (content) => {
    setSelectedContent(content);
    setHoveredId(content.id)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo('');
  };

  // const selectedBrand = itm?.find(
  //   (itm) => itm?._id == searchParams?.get("brand_id")
  // );
  // const selectedProduct = itm.products?.find(
  //   (itm) => itm?._id == searchParams?.get("product_id")
  // );


  // const renderBenefits = (benefits) => {
  //   return benefits?.map((itm) => (
  //     <div key={itm.id} className="flex flex-col w-1/2 items-center justify-center">
  //       {/* <div
  //         className={`h-[110px] flex items-center justify-center w-[110px] border-2 border-[#9F7B49] rounded-full`}
  //       > */}
  //       <div
  //         className={`h-[110px] flex items-center justify-center w-[110px] border-2 border-[#9F7B49] rounded-full 
  //                 ${hoveredId === itm.id ? 'shadow-lg' : ''} transition-shadow duration-200`} // Change shadow based on state
  //       >
  //         <Image
  //           src={itm?.img}
  //           width={65}
  //           height={65}
  //           alt="header-logo"
  //           className="h-[65px] w-[65px] cursor-pointer"
  //           onClick={() => handleImageClick(itm)} // Set the clicked item as the selected content
  //         />
  //       </div>
  //       <p className="text-center text-xs md:text-base my-4">
  //         {itm?.title}
  //       </p>
  //     </div>
  //   ));
  // };
  // useEffect(() => {
  //   // When the component mounts, set the initial content from the first benefit
  //   let benefits = null;

  //   if (selectedBrand?.id === 1 && selectedProduct?.id === 1) {
  //     benefits = HEALTH_BENEFITS;
  //   } else if (selectedBrand?.id === 1 && selectedProduct?.id === 3) {
  //     benefits = HEALTH_DATE;
  //   } else if (selectedBrand?.id === 2 && selectedProduct?.id === 1) {
  //     benefits = HEALTH_JAM;
  //   } else if (selectedBrand?.id === 2 && selectedProduct?.id === 2) {
  //     benefits = HEALTH_FLAKES;
  //   } else if (selectedBrand?.id === 2 && selectedProduct?.id === 3) {
  //     benefits = HEALTH_VERNACALLI;
  //   } else if (selectedBrand?.id === 2 && selectedProduct?.id === 4) {
  //     benefits = HEALTH_MACRONI;
  //   } else if (selectedBrand?.id === 2 && selectedProduct?.id === 5) {
  //     benefits = HEALTH_SPEARD;
  //   } else if (selectedBrand?.id === 3 && selectedProduct?.id === 1) {
  //     benefits = COOKING_PASTE;
  //   } else if (selectedBrand?.id === 3 && selectedProduct?.id === 2) {
  //     benefits = SOYA_CHUNK;
  //   }
  //   else if (selectedBrand?.id === 3 && selectedProduct?.id === 3) {
  //     benefits = SAFFRON;
  //   }
  //   else if (selectedBrand?.id === 4 && selectedProduct?.id === 1) {
  //     benefits = GREEN_TEA;
  //   }

  //   // Set the first health benefit as the selected content on page render
  //   if (benefits && benefits.length > 0) {
  //     setSelectedContent(benefits[0]);
  //   }
  // }, [selectedBrand, selectedProduct]); // Re-run when selectedBrand or selectedProduct changes

  // if (!selectedBrand || !selectedProduct) return <p>Product or Brand not found</p>;

  // // const selectedObj = renderBenefits(`${}`).find((itm) => itm.id === selectedContent);


  // useEffect(() => {
  //   const fetchBanner = async () => {
  //     try {
  //       const response = await axios.get("/api/our-Brands/products/banner");
  //       setProductBanner(response?.data?.bannerImage)
  //     } catch (error) {
  //       console.log("Error");

  //     }
  //   }
  //   fetchBanner()

  //   const fetchCustomerReviews = async () => {
  //     try {
  //       const response = await axios.get("/api/our-Brands/customerReviews");
  //       setCustomerReview(response.data[0])

  //     } catch (error) {
  //     }
  //   }
  //   fetchCustomerReviews()
  // }, [])




  // console.log(renderBenefits(benefits),"renderBenefits");

  return (
    <>
    
    </>
  );
};

export default ProductDetails;
