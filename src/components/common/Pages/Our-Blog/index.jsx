"use client"
import React, { useState } from 'react';
import ImageBanner from '../../Layout/Banner';
import Banner from '@/assets/images/our-blog/blogMain.png';
import Image from 'next/image';
import Blog1 from '@/assets/images/our-blog/Blog01.jpg';
import Blog2 from '@/assets/images/our-blog/blog02.jpg';
import Blog3 from '@/assets/images/our-blog/blog03.jpg';
import Blog4 from '@/assets/images/our-blog/blog04.jpg';
import Blog5 from '@/assets/images/our-blog/blog05.jpg';
import Blog6 from '@/assets/images/our-blog/blog06.jpg';
import Blog7 from '@/assets/images/our-blog/blog07.jpg';
import { useRouter } from 'next/navigation';
import { NextButton, PrevButton } from '../../Carousel/EmblaCarouselArrowButtons';
import Link from 'next/link';

const BlogData = [
    {
        id: 1,
        title: "Embrace the Spirit of Ramadan with Apis",
        desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it's a great opportunity to focus […]",
        img: Blog1,
        date: "April 12, 2023"
    },
    {
        id: 2,
        title: "The Benefits of Dates in Ramadan Nutrition, Tradition and Spirituality",
        desc: "Muslims worldwide observe Ramadan as the sacred month of fasting and prayer. It is a time of spiritual reflection, self-discipline, and strengthening one’s faith and connection with Allah. It is also a time of social gatherings and celebrations, with families and friends coming together to break their fasts and share meals during Iftar. The Muslim […]",
        img: Blog2,
        date: "23-07-2022"
    },
    { 
        id: 3,
        title: "The Sweetest Superfood: Exploring the Health Benefits of Dates",
        desc: "Dates are the fruit of the date palm trees. Grown in many tropical regions around the world, dates are majorly consumed as a staple in the Islamic community.  As the holy month of Ramadan approaches, Muslims around the world have started to prepare for a time of spiritual reflection and prayer. During this month, they […]",
        img: Blog3,
        date: "23-07-2022"
    },
    { 
        id: 4,
        title: "Apis campaign for Ramadan speaks of personal well-being",
        desc: "Apis India has launched a campaign during the holy month of Ramadan. The campaign, titled “Ibaadat Ke Iss Mahine Rakhein Sehat Ka Saath”, aims to promote individual well-being by blending the spiritual and personal aspects of Ramadan through Apis India’s range of dates clubbed with other relevant products consumed in the month of Ramadan. Beyond […]",
        img: Blog4,
        date: "23-07-2022"
    },
    {
        id: 5,
        title: "Embrace the Spirit of Ramadan with Apis",
        desc: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty. Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus […]",
        img: Blog5,
        date: "April 12, 2023"
    },
    
    {
        id: 6,
        title: "The Sweetest Superfood: Exploring the Health Benefits of Dates",
        desc: "Dates are the fruit of the date palm trees. Grown in many tropical regions around the world, dates are majorly consumed as a staple in the Islamic community.  As the holy month of Ramadan approaches, Muslims around the world have started to prepare for a time of spiritual reflection and prayer. During this month, they […]",
        img: Blog6,
        date: "23-07-2022"
    },
    {
        id: 7,
        title: "Apis campaign for Ramadan speaks of personal well-being",
        desc: "Apis India has launched a campaign during the holy month of Ramadan. The campaign, titled “Ibaadat Ke Iss Mahine Rakhein Sehat Ka Saath”, aims to promote individual well-being by blending the spiritual and personal aspects of Ramadan through Apis India’s range of dates clubbed with other relevant products consumed in the month of Ramadan. Beyond […]",
        img: Blog7,
        date: "23-07-2022"
    },
    // Add more blog entries as needed...
];

const BlogCard = ({ blog, onClick }) => (
    <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden p-3 divide-rgba(159, 123, 73, 1) cursor-pointer" 
        style={{border:"1px solid #9F7B49"}} 
        onClick={() => onClick(blog)}
    >
        <div className="relative overflow-hidden" style={{
            borderTopLeftRadius: '19%',
            borderBottomRightRadius: '19%',
            borderTopRightRadius: '2%',
            borderBottomLeftRadius: '0%'
        }}>
            <Image
                src={blog.img}
                alt={blog.title}
                className="object-cover w-full h-[300px]"
                width={600}
                height={400}
            />
        </div>
        <div className="p-0">
            <p className="font-semibold text-xl mb-2 p-0 font-jost">
                {blog.title}
            </p>
            <span className="text-gray-500 text-sm">{blog.date}</span>
            <p className="text-gray-700 mt-4 text-justify line-clamp-5 p-0 font-jost">
                {blog.desc}
            </p>
        </div>
    </div>
);

const OurBlogPage = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const pageCount = Math.ceil(BlogData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        const currentPosition = window.pageYOffset;
        setCurrentPage(newPage);
        setTimeout(() => window.scrollTo(0, currentPosition), 0);
    };

    const currentItems = BlogData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleImageClick = (blog) => {
        router.push(`/our-blog/blog-details?id=${encodeURIComponent(blog.id)}&gallery=${blog.title}`);
    };

    return (
        <>
            <ImageBanner banner={Banner} />
            <div className="flex flex-col items-center justify-center mt-10">
                <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
                    The Blog
                </p>
                <p className="text-sm w-[95%] md:text-xl md:w-[70%] md:leading-8 mt-3 md:mt-6 text-center font-jost">
                    Welcome to the Apis India blog, your go-to resource for all things related to health, nutrition, and culinary inspiration. Here, we share expert tips, delicious recipes, and the latest trends to help you make the most of our premium products. Our blog is designed to inform and inspire. Stay tuned for regular updates that will keep you engaged and empowered on your journey to better health and wellness with Apis India.
                </p>
            </div>

            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto px-4 xl:w-[65%] border-dotted">
                {currentItems.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} onClick={handleImageClick} />
                ))}
            </div>

            <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
                <PrevButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                />
                <div className="flex items-center justify-center">
                    {Array.from({ length: pageCount }, (_, index) => (
                        <p
                            key={index}
                            className={`text-base md:text-3xl border-black px-2 md:px-6 ${
                                index === currentPage ? "font-bold" : "font-normal text-gray-600"
                            } ${index === 0 ? "" : "border-l"}`}
                            aria-label={`Go to page ${index + 1}`}
                        >
                            {index + 1}
                        </p>
                    ))}
                </div>
                <NextButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pageCount - 1}
                />
            </div>
        </>
    );
};

export default OurBlogPage;