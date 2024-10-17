"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
// import ImageBanner from '../..';
import Banner from '@/assets/images/our-blog/blogMain.png';
import {Blog_Data} from '@/lib/constants'



console.log("BlogData",Blog_Data);


// This should be replaced with your actual blog data or API call
const BlogDetailPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // In a real application, you would fetch the blog data from an API here
        const blogPost = Blog_Data?.find(post => post.id === parseInt(id));
        console.log("blogpost",blogPost);
        setBlog(blogPost);
    }, [id]);

    console.log(blog,"blogblog");
    

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* <ImageBanner banner={Banner} /> */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
                <div className="mb-8">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="prose max-w-none font-jost"
                dangerouslySetInnerHTML={{__html: blog?.contentData}}
                
                >
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;
