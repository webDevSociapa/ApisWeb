"use client"
import React, { useState } from 'react';
import ImageBanner from '../../Layout/Banner';
import Banner from '@/assets/images/our-blog/blogMain.png';
import Blog1 from '@/assets/images/our-blog/ourblog1.png';
import Image from 'next/image';
import { NextButton, PrevButton } from '../../Carousel/EmblaCarouselArrowButtons';

const OurBlogPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const BlogData = [
        {
            title: "Embrace the Spirit of Ramadan with Apis",
            desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus […]",
            img: Blog1,
            date: "23-07-2022"
        },
        {
            title: "Embrace the Spirit of Ramadan with Apis",
            desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus […]",
            img: Blog1,
            date: "23-07-2022"
        },
        {
            title: "Embrace the Spirit of Ramadan with Apis",
            desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus […]",
            img: Blog1,
            date: "23-07-2022"
        },
        {
            title: "Embrace the Spirit of Ramadan with Apis",
            desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus […]",
            img: Blog1,
            date: "23-07-2022"
        },
        // Add more blog entries as needed...
    ];

    return (
        <>
            <ImageBanner banner={Banner} />
            <div className="flex flex-col items-center justify-center mt-10">
                <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
                    The Blog
                </p>
                <p className="text-sm w-[95%] md:text-xl md:w-[70%] md:leading-8 mt-3 md:mt-6 text-center">
                    Welcome to the Apis India blog, your go-to resource for all things related to health, nutrition, and culinary inspiration. Here, we share expert tips, delicious recipes, and the latest trends to help you make the most of our premium products. Our blog is designed to inform and inspire. Stay tuned for regular updates that will keep you engaged and empowered on your journey to better health and wellness with Apis India.
                </p>
            </div>

            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto px-4 xl: w-[60%]">
                {BlogData.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-3 divide-rgba(159, 123, 73, 1)" style={{border:"1px solid #9F7B49"}}>
                        <Image
                            src={blog.img}
                            alt={blog.title}
                            className="rounded-t-lg object-cover xl:w-[600] md:w-[600]"
                            width={600}
                            height={400}
                        />
                        <div className="p-0">
                            <p className="font-semibold text-xl mb-2 p-0">
                                {blog.title}
                            </p>
                            <span className="text-gray-500 text-sm">{blog.date}</span>
                            <p className="text-gray-700 mt-4 text-justify line-clamp-5 p-0">
                                {blog.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
        {
          <PrevButton
            onClick={() => {
              onPrevButtonClick();
              handleNumberClick(currentIndex - 1);
            }}
            disabled={currentIndex === 0}
          />
        }
        <div className="flex items-center justify-center">
          {BlogData.map((_, index) => (
            <p
              key={index}
              // onClick={() => handleNumberClick(index)}
              
              className={`text-base md:text-3xl  border-black px-2 md:px-6 ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"} ${index === 0 ? "" : "border-l"}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </p>
          ))}
        </div>
        <NextButton
          onClick={() => {
            handleNumberClick(currentIndex + 1);
            onNextButtonClick();
          }}
          disabled={currentIndex + 1 === BlogData.length}
        />
      </div>
        </>
    );
};

export default OurBlogPage;
