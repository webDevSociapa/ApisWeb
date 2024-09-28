"use client";

import React, { useEffect } from "react";
import Banner from "@/assets/images/OurBrands/OrganicHoney.png";
import ImageBanner from "../../Layout/Banner";
import EmblaCarousel from "../../Carousel/Carousel";
import Ring1 from "@/assets/images/OurBrands/Ring-1.png";
import Ring2 from "@/assets/images/OurBrands/Ring-2.png";
import Ring3 from "@/assets/images/OurBrands/Ring-3.png";
import Ring4 from "@/assets/images/OurBrands/Ring-4.png";
import Comma from "@/assets/images/OurBrands/Comma.png";
import Apple from "@/assets/images/OurBrands/Apple.png";
import Berry from "@/assets/images/OurBrands/Berry.png";
import HoneyShield from "@/assets/images/OurBrands/honeyShield.png";
import HandDrawnHoney from "@/assets/images/OurBrands/HandDrawnHoney.png";
import TrustSlide1 from "@/assets/images/home-banner-section/trust-slide-1.png";
import TrustSlide2 from "@/assets/images/home-banner-section/trust-slide-2.png";
import TrustSlide3 from "@/assets/images/home-banner-section/trust-slide-3.png";
import Image from "next/image";
import CheckReportBanner from '@/assets/images/OurBrands/ProductBanner.png'
import AmazonLogo from "@/assets/images/home-banner-section/amazon.png";
import JioMart from "@/assets/images/home-banner-section/jiomart.png";
import JioMart2 from "@/assets/images/home-banner-section/jio-mart.png";
import DMart from "@/assets/images/home-banner-section/d-mart.png";
import BlinkIt from "@/assets/images/home-banner-section/blink-it.png";
import BigBasket from "@/assets/images/home-banner-section/big-basket.png";
import Glimpse1 from "@/assets/images/OurBrands/Glimpse-1.png";
import Glimpse2 from "@/assets/images/OurBrands/Glimpse-2.png";
import Glimpse3 from "@/assets/images/OurBrands/Glimpse-3.png";
import Content from "@/assets/images/OurBrands/Content.png";
import Rectangle1 from "@/assets/images/OurBrands/Rectangle-1.png";
import Rectangle2 from "@/assets/images/OurBrands/Rectangle-2.png";
import Skin from '@/assets/images/OurBrands/skin.png';
import Sustain from "@/assets/images/OurBrands/sustain.png";
import Minrella from '@/assets/images/OurBrands/minrella.png'
import VitaminSource from '@/assets/images/OurBrands/vitaminSource.png'
import Ingrediant from '@/assets/images/OurBrands/ingrediant.png'
import EnergyBoost from '@/assets/images/OurBrands/energyBoost.png'
import AidsDigestion from "@/assets/images/OurBrands/AidsDigestion.png"
import Psychology from "@/assets/images/OurBrands/psychology.png"
import FiberRich from "@/assets/images/OurBrands/fiberRich.png"
import Nutrient from "@/assets/images/OurBrands/nutrient.png"
import LowClories from "@/assets/images/OurBrands/lowClories.png"
import Digestive from "@/assets/images/OurBrands/digestive.png"
import Versatile from "@/assets/images/OurBrands/versatile.png"
import VersatileMeals from "@/assets/images/OurBrands/versatileMile.png"
import NoArtificial from "@/assets/images/OurBrands/noArtificial.png"
import Calcium from "@/assets/images/OurBrands/calcium.png"
import Delious from "@/assets/images/OurBrands/delious.png"
import SkinCare from "@/assets/images/OurBrands/skinCare.png"
import WeightLoss from "@/assets/images/OurBrands/weightLoss.png"
import WoundHealing from "@/assets/images/OurBrands/woundHealing.png"
import ProteinSource from "@/assets/images/OurBrands/proteinSource.png"
import BoneStrength from "@/assets/images/OurBrands/BoneStrength.png"
import HarmoneBalance from "@/assets/images/OurBrands/HarmoneBalance.png"
import MoodEnhance from "@/assets/images/OurBrands/moodEnhance.png"
import BrainFunction from "@/assets/images/OurBrands/BrainFunction.png"
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCT_DATA } from "@/lib/constants";
import Link from "next/link";

const AVAILABILITY_SLIDE = [
  { img: AmazonLogo },
  { img: JioMart },
  { img: BigBasket },
  { img: BlinkIt },
  { img: JioMart2 },
  { img: DMart },
];

const OPTIONS = { loop: true };

const SLIDES = [
  {
    img: TrustSlide1,
    content: "Nature`s golden nectar, pure and organic",
    title: "Organic Honey",
  },
  {
    img: TrustSlide2,
    content: "Spread the joy with rich, velvety chocolate",
    title: "Chocolate Spread",
  },
  {
    img: TrustSlide3,
    content: "Delightful strands of culinary tradition for meals",
    title: "Vermicelli",
  },
  {
    img: TrustSlide1,
    content: "Nature`s golden nectar, pure and organic.",
    title: "Organic Honey",
  },
  {
    img: TrustSlide2,
    content: "Spread the joy with rich, velvety chocolate",
    title: "Chocolate Spread",
  },
  {
    img: TrustSlide3,
    content: "Delightful strands of culinary tradition for meals",
    title: "Vermicelli",
  },
];

const GLIMPSES_SLIDES = [
  {
    img: Glimpse1,
    content: "Nature`s golden nectar, pure and organic",
    title: "Organic Honey",
  },
  {
    img: Glimpse2,
    content: "Spread the joy with rich, velvety chocolate",
    title: "Chocolate Spread",
  },
  {
    img: Glimpse3,
    content: "Delightful strands of culinary tradition for meals",
    title: "Vermicelli",
  },
  {
    img: Glimpse1,
    content: "Nature`s golden nectar, pure and organic",
    title: "Organic Honey",
  },
  {
    img: Glimpse2,
    content: "Spread the joy with rich, velvety chocolate",
    title: "Chocolate Spread",
  },
];

const LATEST_SLIDES = [
  {
    video:
      "https://www.youtube.com/embed/U0P5fV9IF1c?si=pDY2Wt5HVtS0Hffe&amp;start=1",
  },
  {
    video:
      "https://www.youtube.com/embed/mDAY0a94MZU?si=BeiAtbDMKqXN9lJF&amp;start=1",
  },
  {
    video:
      "https://www.youtube.com/embed/W-JTHS3025w?si=tcTpC8J1Cddo0ybE&amp;start=1",
  },
  {
    video:
      "https://www.youtube.com/embed/kGOJpsTJNI8?si=TUKuH3NxLa3kEz9j&amp;start=1",
  },
  {
    video: "https://www.youtube.com/embed/NDDaneL4K8s?si=Tx_7ZixWDpHJzQHf",
  },
];

const HEALTH_BENEFITS = [
  {
    id: 1,
    title: "Boosts Immunity",
    name:"Boosts Immunity",
    desc: "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
    img: HoneyShield,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Skin Elixir",
    name:"Boosts Immunity",
    desc: "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
    img: Skin,
    shadowClass: "shadow-custom-darkGreen",
    color: "bg-[#39412D]",
  },
  {
    id: 3,
    title: "Sustainability",
    name:"Boosts Immunity",
    desc: "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
    img: Sustain,
    shadowClass: "shadow-custom-rama",
    color: "bg-[#416E7C]",
  },
  {
    id: 4,
    title: "Aids Digestion",
    name:"Boosts Immunity",
    desc: "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
    img: AidsDigestion,
    shadowClass: "shadow-custom-pink",
    color: "bg-[#E09384]",
  },
];
const HEALTH_DATE = [
  {
    id: 1,
    title: "Nutrient Dense",
    name:"Benefits",
    desc: "Dates are rich in essential nutrients like fiber, potassium, magnesium, and vitamins B6 and K. These nutrients support various bodily functions, including bone health, muscle function, and energy metabolism.",
    img: Nutrient,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Digestive Health",
    name:"Benefits",
    desc: "Dates are rich in essential nutrients like fiber, potassium, magnesium, and vitamins B6 and K. These nutrients support various bodily functions, including bone health, muscle function, and energy metabolism.",
    img: Digestive,
    shadowClass: "shadow-custom-darkGreen",
    color: "bg-[#39412D]",
  },
  {
    id: 3,
    title: "Energy Boost",
    name:"Benefits",
    desc: "Dates are rich in essential nutrients like fiber, potassium, magnesium, and vitamins B6 and K. These nutrients support various bodily functions, including bone health, muscle function, and energy metabolism.",
    img: EnergyBoost,
    shadowClass: "shadow-custom-rama",
    color: "bg-[#416E7C]",
  },
  {
    id: 4,
    title: "Heart Health",
    name:"Benefits",
    desc: "Dates are rich in essential nutrients like fiber, potassium, magnesium, and vitamins B6 and K. These nutrients support various bodily functions, including bone health, muscle function, and energy metabolism.",
    img: Psychology,
    shadowClass: "shadow-custom-pink",
    color: "bg-[#E09384]",
  },
];

const HEALTH_JAM = [
  {
    id: 1,
    title: "Energy Boost",
    name:"Benefits",
    desc: "Jam is an excellent option for a quick energy boost due to its high sugar content. The sugars in jam, primarily glucose and fructose, are simple carbohydrates that are rapidly absorbed into the bloodstream. This leads to a quick rise in blood sugar levels, providing a rapid source of energy.",
    img: EnergyBoost,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Versatile Ingredient",
    name:"Benefits",
    desc: "Jam is an excellent option for a quick energy boost due to its high sugar content. The sugars in jam, primarily glucose and fructose, are simple carbohydrates that are rapidly absorbed into the bloodstream. This leads to a quick rise in blood sugar levels, providing a rapid source of energy.",
    img: Ingrediant,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Vitamin Source",
    name:"Benefits",
    desc: "Jam is an excellent option for a quick energy boost due to its high sugar content. The sugars in jam, primarily glucose and fructose, are simple carbohydrates that are rapidly absorbed into the bloodstream. This leads to a quick rise in blood sugar levels, providing a rapid source of energy.",
    img: VitaminSource,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Contain Minerals",
    name:"Benefits",
    desc: "Jam is an excellent option for a quick energy boost due to its high sugar content. The sugars in jam, primarily glucose and fructose, are simple carbohydrates that are rapidly absorbed into the bloodstream. This leads to a quick rise in blood sugar levels, providing a rapid source of energy.",
    img: Minrella,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const HEALTH_FLAKES = [
  {
    id: 1,
    title: "Fiber-Rich",
    name:"Benefits",
    desc: "Flakes, particularly whole grain varieties, are high in dietary fiber. Fiber aids digestion by promoting regular bowel movements and can help prevent constipation. It also supports heart health by reducing cholesterol levels and stabilizing blood sugar.",
    img: FiberRich,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Low Calories",
    name:"Benefits",

    desc: "Flakes, particularly whole grain varieties, are high in dietary fiber. Fiber aids digestion by promoting regular bowel movements and can help prevent constipation. It also supports heart health by reducing cholesterol levels and stabilizing blood sugar.",
    img: Psychology,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Nutrient Dense",
    name:"Benefits",

    desc: "Flakes, particularly whole grain varieties, are high in dietary fiber. Fiber aids digestion by promoting regular bowel movements and can help prevent constipation. It also supports heart health by reducing cholesterol levels and stabilizing blood sugar.",
    img: Nutrient,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Heart Health",
    name:"Benefits",

    desc: "Flakes, particularly whole grain varieties, are high in dietary fiber. Fiber aids digestion by promoting regular bowel movements and can help prevent constipation. It also supports heart health by reducing cholesterol levels and stabilizing blood sugar.",
    img: LowClories,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const HEALTH_VERNACALLI = [
  {
    id: 1,
    title: "Low Calories",
    name:"Benefits",
    desc: "Vermicelli, a type of thin rice or wheat noodle, is typically low in calories, making it a suitable option for weight management. It provides a filling meal without adding excessive caloric intake.",
    img: LowClories,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Digestive Health",
    name:"Benefits",
    desc: "Vermicelli, a type of thin rice or wheat noodle, is typically low in calories, making it a suitable option for weight management. It provides a filling meal without adding excessive caloric intake.",
    img: Digestive,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Energy Source",
    name:"Benefits",
    desc: "Vermicelli, a type of thin rice or wheat noodle, is typically low in calories, making it a suitable option for weight management. It provides a filling meal without adding excessive caloric intake.",
    img: EnergyBoost,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Versatile Use",
    name:"Benefits",
    desc: "Vermicelli, a type of thin rice or wheat noodle, is typically low in calories, making it a suitable option for weight management. It provides a filling meal without adding excessive caloric intake.",
    img: Versatile,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]

const HEALTH_MACRONI = [
  {
    id: 1,
    title: "Energy Boost",
    name:"Benefits",

    desc: "Macaroni, primarily composed of carbohydrates, provides a significant energy boost. The complex carbs in macaroni are gradually broken down into glucose, supplying a steady source of energy for daily activities and exercise.",
    img: EnergyBoost,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Digestive Health",
    name:"Benefits",
    desc: "Macaroni, primarily composed of carbohydrates, provides a significant energy boost. The complex carbs in macaroni are gradually broken down into glucose, supplying a steady source of energy for daily activities and exercise.",
    img: Digestive,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Nutrient Rich",
    name:"Benefits",
    desc: "Macaroni, primarily composed of carbohydrates, provides a significant energy boost. The complex carbs in macaroni are gradually broken down into glucose, supplying a steady source of energy for daily activities and exercise.",
    img: Nutrient,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Versatile Meals",
    name:"Benefits",
    desc: "Macaroni, primarily composed of carbohydrates, provides a significant energy boost. The complex carbs in macaroni are gradually broken down into glucose, supplying a steady source of energy for daily activities and exercise.",
    img: VersatileMeals,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const HEALTH_SPEARD = [
  {
    id: 1,
    title: "Fiber-Rich",
    name:"Benefits",

    desc: "Aside from being a flavor-filled chocolaty spread, it is also a source of calcium &amp; iron. As such, Apis Chocolate Spread also carries the benefits drawn from these minerals. The spread can be used in addition to any healthy meal for more satisfaction.",
    img: Calcium,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Low Calories",
    name:"Benefits",

    desc: "Aside from being a flavor-filled chocolaty spread, it is also a source of calcium &amp; iron. As such, Apis Chocolate Spread also carries the benefits drawn from these minerals. The spread can be used in addition to any healthy meal for more satisfaction.",
    img: FiberRich,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Nutrient Dense",
    name:"Benefits",

    desc: "Aside from being a flavor-filled chocolaty spread, it is also a source of calcium &amp; iron. As such, Apis Chocolate Spread also carries the benefits drawn from these minerals. The spread can be used in addition to any healthy meal for more satisfaction.",
    img: Delious,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Heart Health",
    name:"Benefits",

    desc: "Aside from being a flavor-filled chocolaty spread, it is also a source of calcium &amp; iron. As such, Apis Chocolate Spread also carries the benefits drawn from these minerals. The spread can be used in addition to any healthy meal for more satisfaction.",
    img: NoArtificial,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const COOKING_PASTE = [
  {
    id: 1,
    title: "As a Skin Care Solution",
    name:"Benefits",
    desc: "Honey has been used for aesthetic purposes especially to return vigour and beauty to skin. When applied together with milk, honey creates a smooth, flawless skin. Real honey is also used for softening hair texture and for glowing skin.",
    img: SkinCare,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "For Weight Loss",
    name:"Benefits",

    desc: "Honey has been used for aesthetic purposes especially to return vigour and beauty to skin. When applied together with milk, honey creates a smooth, flawless skin. Real honey is also used for softening hair texture and for glowing skin.",
    img: WeightLoss,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "For Wound Healing",
    name:"Benefits",

    desc: "Honey has been used for aesthetic purposes especially to return vigour and beauty to skin. When applied together with milk, honey creates a smooth, flawless skin. Real honey is also used for softening hair texture and for glowing skin.",
    img: WoundHealing,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Energy and performance",
    name:"Benefits",

    desc: "Honey has been used for aesthetic purposes especially to return vigour and beauty to skin. When applied together with milk, honey creates a smooth, flawless skin. Real honey is also used for softening hair texture and for glowing skin.",
    img: EnergyBoost,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const SOYA_CHUNK = [
  {
    id: 1,
    title: "Protein Source",
    name:"Benefits",

    desc: "Soya is an excellent plant-based protein source, providing all essential amino acids required for muscle growth, repair, and overall bodily functions. It’s a valuable alternative to animal proteins, especially for vegetarians and vegans.",
    img: ProteinSource,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Heart Health",
    name:"Benefits",

    desc: "Soya is an excellent plant-based protein source, providing all essential amino acids required for muscle growth, repair, and overall bodily functions. It’s a valuable alternative to animal proteins, especially for vegetarians and vegans.",
    img: Psychology,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Bone Strength",
    name:"Benefits",

    desc: "Soya is an excellent plant-based protein source, providing all essential amino acids required for muscle growth, repair, and overall bodily functions. It’s a valuable alternative to animal proteins, especially for vegetarians and vegans.",
    img: BoneStrength,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Hormone Balance",
    name:"Benefits",

    desc: "Soya is an excellent plant-based protein source, providing all essential amino acids required for muscle growth, repair, and overall bodily functions. It’s a valuable alternative to animal proteins, especially for vegetarians and vegans.",
    img: HarmoneBalance,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const SAFFRON = [
  {
    id: 1,
    title: "Mood Enhancement",
    name:"Benefits",

    desc: "Saffron contains compounds like crocin and safranal, which have been shown to positively affect mood and may help alleviate symptoms of depression and anxiety. Regular consumption can contribute to improved emotional well-being.",
    img: MoodEnhance,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Antioxidant Properties",
    name:"Benefits",

    desc: "Saffron contains compounds like crocin and safranal, which have been shown to positively affect mood and may help alleviate symptoms of depression and anxiety. Regular consumption can contribute to improved emotional well-being.",
    img: Calcium,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Digestive Health",
    name:"Benefits",

    desc: "Saffron contains compounds like crocin and safranal, which have been shown to positively affect mood and may help alleviate symptoms of depression and anxiety. Regular consumption can contribute to improved emotional well-being.",
    img: Digestive,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title: "Skin Benefits",
    name:"Benefits",

    desc: "Saffron contains compounds like crocin and safranal, which have been shown to positively affect mood and may help alleviate symptoms of depression and anxiety. Regular consumption can contribute to improved emotional well-being.",
    img: SkinCare,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const GREEN_TEA = [
  {
    id: 1,
    title: "Antioxidant Boost",
    name:"Benefits",

    desc: "Green tea is rich in antioxidants, particularly catechins like EGCG, which help combat oxidative stress and neutralize harmful free radicals. These antioxidants support overall health by reducing inflammation and protecting cells from damage.",
    img: Calcium,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 2,
    title: "Heart Health",
    name:"Benefits",

    desc: "Green tea is rich in antioxidants, particularly catechins like EGCG, which help combat oxidative stress and neutralize harmful free radicals. These antioxidants support overall health by reducing inflammation and protecting cells from damage.",
    img: Psychology,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 3,
    title: "Metabolism Aid",
    name:"Benefits",

    desc: "Green tea is rich in antioxidants, particularly catechins like EGCG, which help combat oxidative stress and neutralize harmful free radicals. These antioxidants support overall health by reducing inflammation and protecting cells from damage.",
    img: Digestive,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
  {
    id: 4,
    title:"Brain Function",
    name:"Benefits",

    desc: "Green tea is rich in antioxidants, particularly catechins like EGCG, which help combat oxidative stress and neutralize harmful free radicals. These antioxidants support overall health by reducing inflammation and protecting cells from damage.",
    img: BrainFunction,
    shadowClass: "shadow-custom-yellow",
    color: "bg-[#FFC660]",
  },
]
const RECIPIES_DATA = [
  {
    img: Apple,
    title: "Honey Apple Fruit Chat",
    time: "Prep 10 min",
    descreption: "Nature's golden nectar, pure and organic",
  },
  {
    img: Berry,
    title: "Honey Berry Fruit Pan Cake",
    time: "Prep 10 min",
    descreption: "Nature's golden nectar, pure and organic",
  },
  {
    img: Apple,
    title: "Honey Apple Fruit Chat",
    time: "Prep 10 min",
    descreption: "Nature's golden nectar, pure and organic",
  },
  {
    img: Berry,
    title: "Honey Apple Fruit Chat",
    time: "Prep 10 min",
    descreption: "Nature's golden nectar, pure and organic",
  },
];
const ProductDetails = () => {
  const searchParams = useSearchParams();
  const [healthBenefit,sethealthBenefit] = useState()
  const [selectedContent, setSelectedContent] = useState(null); // Hold the selected health benefit content
  // const [selectedContent, setSelectedContent] = useState(HEALTH_BENEFITS[0].id);
  const selectedBrand = PRODUCT_DATA.find(
    (itm) => itm.id == searchParams.get("brand_id")
  );
  const selectedProduct = selectedBrand.products.find(
    (itm) => itm.id == searchParams.get("product_id")
  );
  console.log("selectedContent",selectedContent);
  const renderBenefits = (benefits) => {
    return benefits.map((itm) => (
      <div key={itm.id} className="flex flex-col w-1/2 items-center justify-center">
        <div
          className={`h-[110px] flex items-center justify-center w-[110px] border-2 border-[#9F7B49] rounded-full`}
        >
          <Image
            src={itm?.img}
            width={65}
            height={65}
            alt="header-logo"
            className="h-[65px] w-[65px]"
          />
        </div>
        <p className="text-center text-xs md:text-base my-4">
          {itm?.title}
        </p>
      </div>
    ));
  };
  useEffect(() => {
    // When the component mounts, set the initial content from the first benefit
    let benefits = null;

    if (selectedBrand?.id === 1 && selectedProduct?.id === 1) {
      benefits = HEALTH_BENEFITS;
    } else if (selectedBrand?.id === 1 && selectedProduct?.id === 2) {
      benefits = HEALTH_DATE;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 1) {
      benefits = HEALTH_JAM;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 2) {
      benefits = HEALTH_FLAKES;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 3) {
      benefits = HEALTH_VERNACALLI;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 4) {
      benefits = HEALTH_MACRONI;
    } else if (selectedBrand?.id === 2 && selectedProduct?.id === 5) {
      benefits = HEALTH_SPEARD;
    } else if(selectedBrand?.id === 3 && selectedProduct?.id === 1) {
      benefits = COOKING_PASTE;
    } else if(selectedBrand?.id === 3 && selectedProduct?.id === 2) {
      benefits = SOYA_CHUNK;
    }
    else if(selectedBrand?.id === 3 && selectedProduct?.id === 3) {
      benefits = SAFFRON;
    }
    else if(selectedBrand?.id === 4 && selectedProduct?.id === 1) {
      benefits = GREEN_TEA;
    }

    // Set the first health benefit as the selected content on page render
    if (benefits && benefits.length > 0) {
      setSelectedContent(benefits[0]);
    }
  }, [selectedBrand, selectedProduct]); // Re-run when selectedBrand or selectedProduct changes

  if (!selectedBrand || !selectedProduct) return <p>Product or Brand not found</p>;

  // const selectedObj = renderBenefits(`${}`).find((itm) => itm.id === selectedContent);


  // console.log(renderBenefits(benefits),"renderBenefits");

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <ImageBanner banner={selectedProduct?.back_img} />
      <div className="w-full flex justify-end items-center absolute end-0 top-2 lg:top-16">
        <div className="w-[450px] ps-2 md:ps-0">
          <p
            className={`${selectedProduct?.title_color} text-shadow text-[20px] md:text-[40px] font-bold`}
          >
            {selectedProduct.title}
          </p>
          <p
            className={`${selectedProduct?.desc_color} text-xs font-jost xs:text-sm md:text-2xl font-medium mt-2`}
          >
            {selectedProduct.title_desc}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full w-[80%] capitalize">
        <p className="w-[90%] text-[20px] md:text-[40px] font-bold text-center text-[#84663C]">
          Purity is our presence in food
        </p>
        <p className="text-[#454545] w-[80%] text-sm md:text-2xl text-center mt-4 font-jost md:mt-8">
          {selectedProduct.product_desc}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={selectedProduct.product_img_1}
          // width={266}
          height={280}
          alt="header-logo"
          className="h-[180px] mt-8 w-auto md:h-[280px]"
        />
        <Link href={"/our-brand/product-details/certificate"}>
          <button className="border mt-8 border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            Available on
          </button>
        </Link>
      </div>
      
      <div className="w-[90%] border border-[#AE844A] rounded-[10px] flex mt-8 md:mt-20 items-center flex-col gap-4 md:gap-12">
        <div className="bg-white rounded-[10px] w-full h-[23px] md:h-[65px] flex items-center justify-between px-3 md:pt-2 pt-1 avaibility">
          <EmblaCarousel options={OPTIONS} autoScroll>
            {AVAILABILITY_SLIDE.map((img) => {
              return (
                <div className="embla__slide w-[55px] md:w-auto">
                  <Image
                    src={img?.img}
                    height={60}
                    alt="header-logo"
                    className="h-[18px] w-[50px] md:w-auto md:h-[60px] embla__slide__number"
                  />
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
      </div>
     {/* <a href={'/about-us'}> */}
     <div className="w-[80%]">
        <Image src={CheckReportBanner}
        height={340}
        // width={1335}
        className="mt-8 w-[100%]"
        />
        <a href={'/our-brand/product-details/certificate'}>
        <button className="absolute left-[65%] top-[30%] border mt-2 border-[#9F7B49] bg-[#9F7B49] px-2 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">Check Report</button>
        </a>
      </div>
     {/* </a> */}

      <p className="text-[20px] md:text-[40px] py-4 md:py-10 font-bold text-[#9F7B49]">
        Content
      </p>
      <div className="bg-[#FFF9F0] relative w-full">
        <Image
          src={Ring1}
          width={150}
          height={150}
          alt="header-logo"
          className="h-[150px] hidden lg:inline absolute top-0 left-0  w-[150px]"
        />
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pb-56 px-8 flex xs:justify-center items-center">
            <div
              className={`${selectedProduct?.rect_color} relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 mt-24 z-50 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div
                className="bg-custom-radial-gradient  absolute bottom-4 md:bottom-8 z-50 left-4   md:left-8 backdrop-blur-lg 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]"
              ></div>
              {/* <Image
                src={Rectangle1}
                alt="header-logo"
                className="h-[250px] absolute bottom-8 left-8 w-[230px] md:w-[360px] z-20"
              /> */}
              <Image
                src={selectedProduct.img}
                height={350}
                alt="header-logo"
                className="h-[350px] md:h-[400px] z-50 absolute w-[620px] -right-16  -bottom-1 z-20"
              />
              <div className="relative h-full w-full">
                <Image
                  src={Ring4}
                  height={200}
                  alt="header-logo"
                  className="h-[225px] w-[225px] rotate-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative md:px-14 px-2 flex flex-col gap-4 md:gap-8 items-center mt-12">
            <p className="text-xl md:text-[30px] relative text-center font-light">
              Look what our customer say
              {/* <Image
                src={Comma}
                width={60}
                height={60}
                alt="header-logo"
                className="h-[60px] hidden lg:inline  -top-2 absolute -right-14 w-[60px]"
              />
              <Image
                src={Comma}
                width={60}
                height={60}
                alt="header-logo"
                className="h-[60px] hidden lg:inline -top-2 absolute -right-24 w-[60px]"
              /> */}
            </p>
            <p className="text-sm font-jost font-light md:text-xl text-center font-light">
              “{selectedProduct.customer_says}”
            </p>
            <Image
              src={Ring3}
              width={80}
              height={250}
              alt="header-logo"
              className="h-[250px] hidden lg:inline absolute top-16 right-0 w-[60px]"
            />
          </div>
        </div>
        <Image
          src={HandDrawnHoney}
          width={200}
          height={200}
          alt="header-logo"
          className="h-[180px] hidden lg:inline absolute bottom-0 right-0 w-[180px]"
        />
      </div>
      <div className="bg-[#FFF9F0] relative w-full rounded-tl-[0px] rounded-tr-[0px] rounded-br-[0px] md:rounded-bl-[200px] rounded-bl-[80px] pb-20">
        <p className="text-base md:text-[26px] py-8 lg:pb-20 text-center">
          Health Benefits
        </p>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-wrap">
          {selectedBrand?.id === 1 && selectedProduct?.id === 1 ? (
            renderBenefits(HEALTH_BENEFITS)
          ) : selectedBrand?.id === 1 && selectedProduct?.id === 2 ? (
            renderBenefits(HEALTH_DATE)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 1 ? (
            renderBenefits(HEALTH_JAM)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 2 ? (
            renderBenefits(HEALTH_FLAKES)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 3 ? (
            renderBenefits(HEALTH_VERNACALLI)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 4 ? (
            renderBenefits(HEALTH_MACRONI)
          ) : selectedBrand?.id === 2 && selectedProduct?.id === 5 ? (
            renderBenefits(HEALTH_SPEARD)
          ) : selectedBrand?.id === 3 && selectedProduct?.id === 1 ? (
            renderBenefits(COOKING_PASTE)
          ): selectedBrand?.id === 3 && selectedProduct?.id === 2 ? (
            renderBenefits(SOYA_CHUNK)
          ): selectedBrand?.id === 3 && selectedProduct?.id === 3 ? (
            renderBenefits(SAFFRON)
          ) : selectedBrand?.id === 4 && selectedProduct?.id === 1 ? (
            renderBenefits(GREEN_TEA)
          ):""
          }
          </div>
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0 px-0 md:px-8 flex justify-center items-center">
            <div
              className={`${selectedProduct?.rect_color} relative 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]`}
            >
              <div
                className="bg-custom-radial-gradient  absolute bottom-4 md:bottom-8 left-4   md:left-8 backdrop-blur-lg 2xl:rounded-tl-[157px] 2xl:rounded-tr-[71px] 2xl:rounded-br-[122px] 2xl:rounded-bl-0
            rounded-tl-[60px] rounded-tr-[30px] rounded-br-[60px] rounded-bl-0 h-[175px] md:h-[250px] w-[280px] md:w-[380px]"
              ></div>
              <Image
                src={Ring2}
                height={200}
                alt="header-logo"
                className="h-[135px] absolute hidden lg:inline -top-7 -right-7 z-0 ms w-[185px]"
              />
              <p className="z-20 absolute w-full text-center text-lg md:text-[24px] left-6 font-bold">
                {selectedContent?.name}
              </p>
              <p className="z-20 absolute font-jost w-[90%] text-center text-xs md:text-base top-12 left-6 md:left-12">
                {selectedContent?.desc}
              </p>
              <div className="w-1/2 relative px-14 flex flex-col gap-8 items-center mt-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full pt-10 md:pt-20 items-center justify-center flex-col">
        <p className="text-[#9F7B49] text-center text-[20px] md:text-[40px] font-bold">
          GLIMPSES OF
        </p>
        <p className="text-[#9F7B49] text-center w-[90%] text-[20px] md:text-[40px] font-bold">
          ORGANIC HONEY LAUNCH
        </p>
        <p className=" w-[90%] text-center text-sm md:text-[22px] left-4 md:leading-7 mt-2 md:mt-6 xl:w-[45%] sm:w-[90%] md:w-[80%]">
          Launch Event was organized on 9th Jan, 2024 at The Lalit, New Delhi.
          Sanya Malhotra and our Managing Director Mr. Amit Anand Unveiled Our
          New Organic Honey.
        </p>
        <div className="w-full py-6 md:py-20 flex flex-col items-center justify-center">
          <div className="w-[90%] flex items-center justify-center">
            <EmblaCarousel options={OPTIONS}>
              {GLIMPSES_SLIDES.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number border w-[176px] p-2 h-[256px] md:!h-[456px] cursor-pointer !rounded-none md:w-[286px] border-[#9F7B49]">
                    <Image
                      src={itm?.img}
                      width={310}
                      height={470}
                      alt="header-logo"
                      className="h-[240px] md:h-[440px] w-[172px] md:w-[270px] max-w-max bg-opacity-40"
                    />
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
        <div className="w-full py-6 md:py-20 bg-[#FFF9F0] flex flex-col items-center justify-center">
          <p className="text-sm text-center md:text-[22px] font-medium text-[#585858]">
            Get to know more about Apis from our customers
          </p>
          <Link href={"/our-brand/product-details/blog"}>
            <p className="text-[20px] md:text-[40px] font-bold text-[#9F7B49] py-2">
              Our Social Reviews
            </p>
          </Link>
          <p className="text-sm md:text-[22px] font-medium text-center text-[#585858]">
            Intentions may lay the foundation, but it's our actions that build
            the world we live in.
          </p>
          <div className="w-[90%] pt-6 md:pt-16 flex items-center justify-center">
            <EmblaCarousel options={OPTIONS}>
              {LATEST_SLIDES.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <iframe
                      width="300px"
                      height="385px"
                      className="rounded w-full sm:w-[300px] w-[170px] h-[260px] sm:h-[385px]"
                      src={itm?.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 sm:gap-10 px-4 lg:px-36 pb-0 pt-6 md:py-6">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
            <p className="text-center text-[14px] md:text-[22px] uppercase text-[#585858]" style={{paddingTop:"30px"}}>
              day-to-day choices that weave the most profound stories of
              character & growth.
            </p>
            <h3 className="text-[20px] md:text-[40px] font-bold text-[#9F7B49]">
              Similar Products
            </h3>
          </div>
        </div>
        <div className="pb-6 md:pb-40 w-[90%] flex items-center justify-center">
          <EmblaCarousel>
            {SLIDES.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number !h-[240px] w-full">
                  <Image
                    src={itm?.img}
                    width={240}
                    height={240}
                    alt="header-logo"
                    className="h-[240px] w-auto max-w-max bg-opacity-40"
                  />
                </div>
                <div className="border-2 border-[hsl(35,37%,45%)] mt-4 lg:mt-10 flex flex-col gap-1 lg:gap-3 py-3 lg:py-6 px-2 lg:px-4">
                  <p className="text-sm  lg:text-xl font-bold text-[#373737]">
                    {itm?.title}
                  </p>
                  <p className="text-[#666666] text-xs lg:text-sm">
                    {itm?.content}
                  </p>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
      <div className="bg-[#FFF9F0] py-10 w-full flex flex-col items-center">
        <p className="text-[20px] md:text-[40px] text-[#9F7B49] font-bold">
          Recipies
        </p>
        <div className="w-[90%] gap-10 py-10 flex items-center justify-center media-apis">
          <EmblaCarousel options={OPTIONS} autoScroll>
            {RECIPIES_DATA.map((itm) => {
              return (
                <div className="embla__slide">
                  <div className="w-full">
                    <div className="w-full">
                      <Image
                        src={itm.img}
                        alt="header-logo"
                        className="bg-opacity-40 w-full max-h-[363px] max-w-[514px]"
                      />
                    </div>
                    <div className="border-2 max-w-[514px] bg-white border-[hsl(35,37%,45%)] mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3 py-3 px-2 lg:px-4">
                      <p className="text-sm lg:text-xl font-bold text-[#373737]">
                        {itm?.title}
                      </p>
                      <p className="text-sm lg:text-xl font-normal text-[#373737]">
                        {itm?.time}
                      </p>
                      <p className="text-[#666666] text-xs lg:text-sm">
                        {itm?.descreption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </EmblaCarousel>
        </div>
        <Link href={"/our-brand/product-details/recipies"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
