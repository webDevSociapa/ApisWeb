"use client";
import React, { useEffect, useState } from "react";
import ImageBanner from "../../Layout/Banner";
import Banner from "@/assets/images/our-blog/blogBannerMain1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NextButton, PrevButton } from "../../Carousel/EmblaCarouselArrowButtons";
import axios from "axios";

const OurBlogPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const [blogs, setBlogs] = useState([]);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    const currentPosition = window.pageYOffset;
    setCurrentPage(newPage);
    setTimeout(() => window.scrollTo(0, currentPosition), 0);
  };

  const currentItems = blogs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleImageClick = (blog) => {
    const { _id, blogTitle, blogImage, contentData } = blog; // Destructure all necessary properties
    router.push(
      `/our-blog/blog-details?id=${encodeURIComponent(_id)}&blogTitle=${encodeURIComponent(blogTitle)}&blogImage=${encodeURIComponent(blogImage)}&contentData=${encodeURIComponent(contentData)}`
    );
  };
  

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await axios.get("/api/blogs");
        console.log("response", response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogsData();
  }, []);

  const BlogCard = ({ blog, onClick }) => (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden p-3 cursor-pointer"
      style={{ border: "1px solid #9F7B49" }}
      onClick={() => onClick(blog)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderTopLeftRadius: "19%",
          borderTopRightRadius: "2%",
          borderBottomLeftRadius: "0%",
        }}
      >
        <Image
          src={blog.blogImage}
          alt={blog.blogTitle}
          className="object-cover w-full h-[300px]"
          width={600}
          height={400}
        />
      </div>
      <div className="p-0">
        <p className="font-semibold text-xl mb-2 font-jost">
          {blog.blogTitle}
        </p>
        <span className="text-gray-500 text-sm font-jost">{blog.blogDate}</span>
        <p className="text-gray-700 mt-4 text-justify line-clamp-5 font-jost">
          {blog.desc}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49]">
          The Blogs
        </p>
        <p className="text-sm w-[95%] md:text-xl md:w-[70%] md:leading-8 mt-3 md:mt-6 text-center font-jost">
          Welcome to the Apis India blog, your go-to resource for all things related to health, nutrition, and culinary inspiration. Here, we share expert tips, delicious recipes, and the latest trends to help you make the most of our premium products.
        </p>
      </div>

      <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto px-4 xl:w-[65%]">
        {currentItems.map((blog) => (
          <BlogCard key={blog._id} blog={blog} onClick={handleImageClick} />
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
