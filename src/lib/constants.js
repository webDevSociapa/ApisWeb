import Honey from "@/assets/images/OurBrands/Honey.png";
import CoolingPaste from "@/assets/images/OurBrands/CoolingPaste.png";
import Flakes from "@/assets/images/OurBrands/Flakes.png";
import GreenTea from "@/assets/images/OurBrands/GreenTea.png";
import Jam from "@/assets/images/OurBrands/Jam.png";
import Macroni from "@/assets/images/OurBrands/Macroni.png";
import Saffron from "@/assets/images/OurBrands/Saffron.png";
import SoyaChunks from "@/assets/images/OurBrands/SoyaChunks.png";
import Spread from "@/assets/images/OurBrands/Spread.png";
import Vermicelli from "@/assets/images/OurBrands/Vermiceilli.png";
import Brands from "@/assets/images/OurBrands/Brands.png";
import OrganicHoney from "@/assets/images/OurBrands/OrganicHoney.png";
import Dates from "@/assets/images/OurBrands/Dates.png";
import JamBg from "@/assets/images/OurBrands/JamBg.png";
import FlakesBg from "@/assets/images/OurBrands/FlakesBg.png";
import VermiBg from "@/assets/images/OurBrands/VermiBg.png";
import MacroniBg from "@/assets/images/OurBrands/MacroniBg.png";
import SpreadBg from "@/assets/images/OurBrands/SpreadBg.png";
import SoyaChunksBg from "@/assets/images/OurBrands/SoyaChunksBg.png";
import SaffronBg from "@/assets/images/OurBrands/SaffronBg.png";
import GreenTeaBg from "@/assets/images/OurBrands/GreenTeaBg.png";
import HoneyBg from "@/assets/images/OurBrands/HoneyBg.png";
import TrustSlide1 from "@/assets/images/home-banner-section/trust-slide-1.png";
import DatesProduct from "@/assets/images/OurBrands/DatesProduct.png";
import JamProduct from "@/assets/images/OurBrands/JamProduct.png";
import FlakesProduct from "@/assets/images/OurBrands/FlakesProduct.png";
import VermiProduct from "@/assets/images/OurBrands/VermiProduct.png";
import MacroniProduct from "@/assets/images/OurBrands/MacroniProduct.png";
import SpreadProduct from "@/assets/images/OurBrands/SpreadProduct.png";
import SoyaChunksProduct from "@/assets/images/OurBrands/SoyaChunksProduct.png";
import SaffronProduct from "@/assets/images/OurBrands/SaffronProduct.png";
import GreenTeaProduct from "@/assets/images/OurBrands/GreenTeaProduct.png";
import HoneyProduct from "@/assets/images/OurBrands/HoneyProduct.png";

export const PRODUCT_NAME = "APIS India";

export const PRIVATE_ROUTES = [
  {
    url: "/account",
  },
  {
    url: "/manage-address",
  },
  {
    url: "/my-orders",
  },
  {
    url: "/change-password",
  },
  {
    url: "/products",
  },
];

export const PATH_DATA = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about-us",
    name: "About Us",
  },
  {
    url: "/our-brand",
    name: "Our Brand",
  },
  {
    url: "/investors",
    name: "Investors",
  },
  {
    url: "/careers",
    name: "Careers",
  },
  {
    url: "/media",
    name: "Media",
  },
  {
    url: "/sustainability",
    name: "Sustainability",
  },
  {
    url: "/contact-us",
    name: "Contact Us",
  },
];

export const STATUS_CODE = {
  EMAIL_NOT_VERIFIED: -1,
  SUCCESS: 1,
  FAIL: 0,
  WARNING: 2,
};

export const PRODUCT_DATA = [
  {
    id: 1,
    title: "Health & Wellness",
    products: [
      {
        id: 1,
        name: "Honey",
        img: Honey,
        back_img: OrganicHoney,
        rect_color: "bg-[#FFC660]",
        title_color: "text-[#9F7B49]",
        desc_color: "text-black",
        title: "Apis Organic Honey",
        title_desc:
          "Discover The Purest Organic Honey From The Enchanting Valleys Of Kashmir",
        product_desc:
          "At Apis India, we are dedicated to delivering high-quality FMCG products that enhance your everyday life. With a focus on freshness, innovation, and reliability, our diverse range of products reflects our commitment to excellence and customer satisfaction. Discover the difference with Apis India.",
        product_img_1: TrustSlide1,
        customer_says:
          "I’ve tried many honeys, but Apis Organic Honey stands out for its authentic taste and quality. It’s perfect for my tea, baking, and even just a spoonful for a quick energy boost! APIs Honey truly stands out for its purity. It’s evident that they prioritize the natural essence of honey without any additives or artificial processing. The flavor is rich, smooth, and genuinely delightful, reflecting the untouched quality of the nectar.",
        health_benefits:
          "Honey is packed with antioxidants that boost your immune system and help fight off illnesses. Regular consumption of honey can strengthen your body’s defenses and promote overall health.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 2,
        name: "Dates",
        img: Brands,
        rect_color: "bg-[#162D13]",
        title_color: "",
        desc_color: "",
        back_img: Dates,
        title: "",
        title_desc: "",
        product_desc:
          "Purity is the essence of our dates. We carefully select only the finest dates, ensuring that each one is naturally sweet and rich in flavor without any additives or preservatives. Our commitment to purity means that every bite delivers the authentic taste and texture of fresh, high-quality dates. By maintaining strict quality standards and using minimal processing, we preserve the natural goodness and nutritional benefits of our dates.",
        product_img_1: DatesProduct,
        customer_says:
          "I recently tried APIs Dates, and I’m absolutely thrilled with them! The dates are incredibly fresh, naturally sweet, and bursting with rich flavor. It’s clear that APIs prioritizes purity, as there are no additives or preservatives, just pure, high-quality dates. The texture is perfect—soft and moist, making them a delicious and wholesome snack on their own or a fantastic addition to recipes. I love that I’m enjoying a product that’s both nutritious and free from artificial ingredients. APIs Dates have quickly become a favorite in my pantry, and I highly recommend them to anyone seeking top-notch, pure dates.",
        health_benefits:
          "Dates are rich in essential nutrients like fiber, potassium, magnesium, and vitamins B6 and K. These nutrients support various bodily functions, including bone health, muscle function, and energy metabolism.",
        primary_color: "",
        secondary_color: "",
      },
    ],
  },
  {
    id: 2,
    title: "Breakfast Range",
    products: [
      {
        id: 1,
        name: "Jam",
        img: Jam,
        back_img: JamBg,
        rect_color: "bg-[#7F0416]",
        title_color: "text-[#7F0416]",
        desc_color: "text-[#505050]",
        title: "Apis Jam",
        title_desc:
          "Discover The Purest fruits flavours handpicked for apis jam creation.",
        product_desc:
          "Just as our honey exemplifies nature's finest, our jams uphold the same unwavering commitment to quality. We carefully select the freshest fruits, ensuring that each jar delivers a burst of genuine flavor without artificial additives or preservatives. Our meticulous process preserves the natural taste and nutritional benefits of the fruit, offering a delightful and wholesome experience with every spoonful. When you choose APIs jams, you’re savoring purity in its most authentic form, making each bite a true celebration of natural goodness.",
        product_img_1: JamProduct,
        customer_says:
          "I recently tried APIs Jam, and I’m absolutely delighted with the experience! The flavor is truly exceptional—rich, vibrant, and bursting with genuine fruit goodness. You can taste the quality in every spoonful, with no artificial aftertaste or additives. The texture is perfectly smooth, making it a versatile addition to everything from toast to desserts. I also appreciate the thoughtful packaging that preserves freshness and highlights the commitment to purity. APIs Jam has quickly become a staple in my kitchen, and I wholeheartedly recommend it to anyone looking for a premium, authentic jam that delivers on both taste and quality.",
        health_benefits:
          "Jam is an excellent option for a quick energy boost due to its high sugar content. The sugars in jam, primarily glucose and fructose, are simple carbohydrates that are rapidly absorbed into the bloodstream. This leads to a quick rise in blood sugar levels, providing a rapid source of energy.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 2,
        name: "Flakes",
        img: Flakes,
        back_img: FlakesBg,
        rect_color: "bg-[#CC5500]",
        title_color: "text-[#442C1A]",
        desc_color: "text-[#442C1A]",
        title: "Apis Flakes",
        title_desc:
          "Experience pure, crunchy delight with every bite of our perfectly crisp flakes.",
        product_desc:
          "Purity is the essence of our flakes. We meticulously craft each batch using the highest quality ingredients, ensuring that every flake embodies the true taste of nature. Our commitment to purity means no artificial additives or preservatives—just simple, wholesome goodness in every bite. The result is a crisp, clean flavor that stands out in every dish, delivering a natural crunch that enhances your meals. With APIs flakes, you're not just enjoying a product; you're savoring the essence of purity in food, made with care and integrity from start to finish.",
        product_img_1: FlakesProduct,
        customer_says:
          "Best experience ever !!!! yes its for APIs Flakes and am thoroughly impressed! The flakes are incredibly crisp and full of natural flavor, adding a delightful crunch to my breakfasts and snacks. What stands out is the purity of the product—no artificial additives or preservatives, just wholesome, high-quality ingredients. Each bite is fresh and satisfying, making them perfect for both sweet and savory dishes. The packaging is also well-designed, keeping the flakes fresh and crisp. APIs Flakes have quickly become a favorite in my pantry, and I highly recommend them to anyone seeking a premium, delicious, and natural option for their meals.",
        health_benefits:
          "Flakes, particularly whole grain varieties, are high in dietary fiber. Fiber aids digestion by promoting regular bowel movements and can help prevent constipation. It also supports heart health by reducing cholesterol levels and stabilizing blood sugar.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 3,
        name: "Vermicelli",
        img: Vermicelli,
        back_img: VermiBg,
        rect_color: "bg-[#D38030]",
        title_color: "text-[#D38030]",
        desc_color: "text-[#FCC42B]",
        title: "Apis Vermicelli",
        title_desc:
          "Delight in the perfect texture and taste with our premium vermicelli",
        product_desc:
          "Purity is deeply embedded in our vermicelli. We prioritize selecting the finest ingredients and employing meticulous processes to ensure that every strand embodies true quality. Our vermicelli is crafted without artificial additives or preservatives, allowing its natural flavor and texture to shine through in every dish. This commitment to purity means that you experience a clean, wholesome taste and consistent quality that enhances your culinary creations. When you choose APIs Vermicelli, you’re not just getting a product; you’re embracing a philosophy where purity is our guiding principle, ensuring excellence in every bite.",
        product_img_1: VermiProduct,
        customer_says:
          "I recently tried APIs Vermicelli, and I am thoroughly impressed! The texture is perfectly light and airy, making it a fantastic base for both savory and sweet dishes. It cooks evenly and retains its shape beautifully, which is a testament to its high quality. I appreciate that APIs Vermicelli is made with care, resulting in a clean, wholesome taste without any artificial additives. Whether used in a traditional dish or a creative recipe, it adds a wonderful touch to every meal. APIs Vermicelli has quickly become a pantry staple for me, and I highly recommend it to anyone seeking top-notch, versatile pasta.",
        health_benefits:
          "Vermicelli, a type of thin rice or wheat noodle, is typically low in calories, making it a suitable option for weight management. It provides a filling meal without adding excessive caloric intake.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 4,
        name: "Macaroni",
        img: Macroni,
        back_img: MacroniBg,
        rect_color: "bg-[#D1A870]",
        title_color: "",
        desc_color: "",
        title: "",
        title_desc: "",
        product_desc:
          "Purity is integral to our macaroni. We start with premium durum wheat, ensuring that every piece of macaroni embodies authentic taste and superior texture. Our meticulous production process is free from artificial additives and preservatives, preserving the natural essence and wholesome quality of the pasta. This dedication to purity ensures that each bite of APIs Macaroni delivers a clean, satisfying flavor that enhances any dish. When you choose APIs, you're selecting macaroni that exemplifies our commitment to purity, offering a true taste of quality and excellence in every meal.",
        product_img_1: MacroniProduct,
        customer_says:
          "I’m extremely impressed! The quality is outstanding—the macaroni cooks to a perfect al dente texture and holds up beautifully in all my dishes. The flavor is rich and clean, with no artificial aftertaste or fillers. It’s clear that APIs is committed to purity and excellence, as each bite showcases the genuine, wholesome taste of premium durum wheat. Whether I’m making a classic mac and cheese or a hearty pasta salad, APIs Macaroni consistently delivers. It has quickly become a favorite in my kitchen, and I highly recommend it to anyone looking for top-notch, delicious pasta.",
        health_benefits:
          "Macaroni, primarily composed of carbohydrates, provides a significant energy boost. The complex carbs in macaroni are gradually broken down into glucose, supplying a steady source of energy for daily activities and exercise.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 5,
        name: "Spread",
        img: Spread,
        back_img: SpreadBg,
        rect_color: "bg-[#6D2C0B]",
        title_color: "text-[#6D2C0B]",
        desc_color: "text-white",
        title: "Apis Spread",
        title_desc:
          "Elevate every bite with the rich, pure flavor of our premium spread",
        product_desc:
          "At APIs, purity is the cornerstone of our spreads. We meticulously select high-quality ingredients to ensure that every jar reflects our commitment to natural, unadulterated flavors. Our spreads are crafted without artificial additives, preservatives, or unnecessary fillers, preserving the authentic taste and nutritional value of the ingredients. This dedication to purity means each spread offers a wholesome, rich flavor that enhances your meals with genuine goodness. Whether enjoyed on toast, as a cooking ingredient, or as a dip, APIs Spreads bring a touch of pure excellence to every bite, embodying our promise of quality and integrity in every jar.",
        product_img_1: SpreadProduct,
        customer_says:
          "I recently started using APIs Spread, and I’m thoroughly impressed with its quality! The flavor is incredibly rich and authentic, without any artificial aftertaste or fillers. It’s clear that APIs prioritizes purity, as the spread has a natural taste and smooth texture that enhances every meal. Whether I use it on toast, in sandwiches, or as a dip, it consistently adds a delightful touch of flavor. The absence of artificial additives makes it a healthier choice that I can feel good about. APIs Spread has quickly become a staple in my kitchen, and I highly recommend it to anyone looking for a premium, delicious spread.",
        health_benefits:
          "Aside from being a flavor-filled chocolaty spread, it is also a source of calcium &amp; iron. As such, Apis Chocolate Spread also carries the benefits drawn from these minerals. The spread can be used in addition to any healthy meal for more satisfaction.",
        primary_color: "",
        secondary_color: "",
      },
    ],
  },
  {
    id: 3,
    title: "Kitchen Mix",
    products: [
      {
        id: 1,
        name: "Cooking Paste",
        img: CoolingPaste,
        back_img: HoneyBg,
        rect_color: "bg-[#FFC660]",
        title_color: "text-[#9F7B49]",
        desc_color: "text-black",
        title: "",
        title_desc: "",
        product_desc:
          "At Apis India, we are dedicated to delivering high-quality FMCG products that enhance your everyday life. With a focus on freshness, innovation, and reliability, our diverse range of products reflects our commitment to excellence and customer satisfaction. Discover the difference with Apis India.",
        product_img_1: HoneyProduct,
        customer_says:
          "APIs Himalayan Honey, and it’s exceptional! The honey has a rich, deep flavor with delightful floral undertones that truly reflects its Himalayan origins. Its purity is evident in both taste and texture—smooth and golden without any added sugars or artificial ingredients. I love the natural sweetness it adds to my tea and yogurt, and it’s perfect for drizzling over toast. The packaging is also top-notch, preserving the honey’s freshness. APIs Himalayan Honey has quickly become a staple in my kitchen, and I highly recommend it to anyone looking for high-quality, pure honey with an authentic, flavorful profile.",
        health_benefits:
          "Honey has been used for aesthetic purposes especially to return vigour and beauty to skin. When applied together with milk, honey creates a smooth, flawless skin. Real honey is also used for softening hair texture and for glowing skin.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 2,
        name: "Soya Chunk",
        img: SoyaChunks,
        back_img: SoyaChunksBg,
        rect_color: "bg-[#F0A20A]",
        title_color: "text-[#9F7B49]",
        desc_color: "text-black",
        title: "",
        title_desc: "",
        product_desc:
          "Purity is the cornerstone of our soya chunks. We start with premium soybeans, ensuring that each chunk is packed with natural goodness and robust flavor. Our production process is designed to preserve the integrity of the soybeans, avoiding any artificial additives or preservatives. This commitment to purity means that every bite of APIs Soya Chunks offers a clean, wholesome taste and a satisfying texture that holds up perfectly in various dishes. Whether you’re incorporating them into a savory stir-fry or a hearty stew, APIs Soya Chunks reflect our dedication to delivering pure, high-quality ingredients in every bite.",
        product_img_1: SoyaChunksProduct,
        customer_says:
          "I recently tried APIs Soya Chunks, and I’m thoroughly impressed! The chunks are of excellent quality, with a firm texture that holds up beautifully in various dishes. They’re easy to prepare and absorb flavors exceptionally well, making them a versatile addition to my meals. I appreciate that they are made from high-quality soybeans without any unnecessary additives or preservatives. The taste is clean and satisfying, making them a fantastic meat alternative. APIs Soya Chunks have quickly become a staple in my kitchen, and I highly recommend them to anyone seeking a nutritious, delicious, and pure option for their recipes.",
        health_benefits:
          "Soya is an excellent plant-based protein source, providing all essential amino acids required for muscle growth, repair, and overall bodily functions. It’s a valuable alternative to animal proteins, especially for vegetarians and vegans.",
        primary_color: "",
        secondary_color: "",
      },
      {
        id: 3,
        name: "Saffron",
        img: Saffron,
        back_img: SaffronBg,
        rect_color: "bg-[#C62A05]",
        title_color: "text-[#C62A05]",
        desc_color: "text-white",
        title: "Apis Saffron",
        title_desc:
          "Elevate your dishes with the exquisite richness and vibrant color of our premium saffron",
        product_desc:
          "Purity defines our saffron. We meticulously source only the finest saffron threads, ensuring that each strand delivers unparalleled richness and vibrant color. Our saffron is free from additives and artificial enhancements, preserving its natural essence and aromatic depth. This commitment to purity means that every pinch of APIs Saffron adds an authentic, luxurious touch to your culinary creations. Whether enhancing a dish or crafting a delicate infusion, you can trust that our saffron embodies the true essence of purity, elevating your recipes with its exceptional quality and flavor.",
        product_img_1: SaffronProduct,
        customer_says:
          "I’m absolutely thrilled with the quality! The saffron threads are vibrant and fragrant, infusing my dishes with a rich, authentic flavor and beautiful color. The purity of the product is evident, with no artificial additives or fillers—just pure, high-quality saffron. It adds a luxurious touch to both savory and sweet recipes, enhancing them with its unique aroma and depth. APIs Saffron has quickly become a staple in my kitchen, and I highly recommend it to anyone looking for premium saffron that truly delivers on both flavor and purity.",
        health_benefits:
          "Saffron contains compounds like crocin and safranal, which have been shown to positively affect mood and may help alleviate symptoms of depression and anxiety. Regular consumption can contribute to improved emotional well-being.",
        primary_color: "",
        secondary_color: "",
      },
    ],
  },
  {
    id: 4,
    title: "Beverage",
    products: [
      {
        id: 1,
        name: "Green Tea",
        img: GreenTea,
        back_img: GreenTeaBg,
        rect_color: "bg-[#474C14]",
        title_color: "text-[#474C14]",
        desc_color: "text-white",
        title: "Apis Green Tea",
        title_desc:
          "Discover The Purest fruits flavours handpicked for apis jam creation.",
        product_desc:
          "Purity is at the heart of our green tea. We meticulously select the finest leaves, ensuring that every cup delivers a taste of true nature. Our green tea is crafted with a commitment to purity, free from artificial additives or preservatives, so you can enjoy an authentic, refreshing experience with every sip. The result is a clean, smooth flavor that highlights the natural essence of the tea leaves. When you choose APIs Green Tea, you're savoring more than just a beverage—you're embracing a product where purity is not just a promise but a fundamental presence in every cup.",
        product_img_1: GreenTeaProduct,
        customer_says:
          "I’m thoroughly impressed with APIs Green Tea! From the moment I brewed my first cup, I could tell it was high-quality. The flavor is incredibly fresh and smooth, with a perfect balance of earthy and subtly sweet notes. What I appreciate most is its purity—no artificial flavors or additives, just pure, natural tea that makes each sip enjoyable and invigorating. The aroma is calming and soothing, making it a wonderful way to start the day or unwind in the evening. APIs Green Tea has become my go-to choice, and I highly recommend it to anyone seeking a genuinely refreshing and wholesome tea experience.",
        health_benefits:
          "Green tea is rich in antioxidants, particularly catechins like EGCG, which help combat oxidative stress and neutralize harmful free radicals. These antioxidants support overall health by reducing inflammation and protecting cells from damage.",
        primary_color: "",
        secondary_color: "",
      },
    ],
  },
];
