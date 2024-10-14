"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Blog1 from '@/assets/images/our-blog/Blog01.jpg';
import { useSearchParams } from 'next/navigation';
// import ImageBanner from '../..';
import Banner from '@/assets/images/our-blog/blogMain.png';

// This should be replaced with your actual blog data or API call
const BlogData = [
    {
        id: 1,
        title: "Embrace the Spirit of Ramadan with Apis",
        desc1: "Preparations amongst the Islamic community have begun as the month of Ramadan approaches. The holiest month in the Islamic calendar, Ramadan is considered as a time of worship, self-reflection and devotion to the Almighty.Ramadan is a time for spiritual reflection, self-improvement and celebration. As the holy month approaches, it’s a great opportunity to focus on healthy eating and nourishing the body with wholesome foods. Conveying the importance of health and wellness, Apis avails its consumers of a host of healthy foods and ingredients to prepare delicious and nutritious recipes that will help make Ramadan special.Since adherents are allowed to consume only two meals a day, they tend to make it their best meal. They have everything on their table including soft drinks to appetisers, main course to delicious sweet &savouries, yet the first bite of every meal is that of dates. Apart from dates, a few staples in their diet are vermicelli, honey and Kesar. All of these ingredients can also be used to make a common yet tasty sweet dish which goes by the name Seviyan.Apis has a wide selection of healthy products, including the above-mentioned items, that add a touch of sweet indulgence to favourite Ramadan meals while keeping the body and mind healthy during this holy month.",
        desc2: "Due to the religious & cultural history, dates are mandatory in the Ramadan diet. It is believed that the prophet broke his fast with the fruit of the date palm tree and hence, dates carry a certain significance among the community.Apis offers you a wide range of dates of superior quality. Royal Zahidi, Nayab dates and Arabian Pearls are some of the most popular among the same. Alongside various cultural reasons, eating dates do have scientific importance as well. Apis dates are rich in energy-boosting nutrients which keep you energised during your fast. These are also rich in antioxidants which keep your heart functions maintained.Apart from eating dates during sehri and iftar, dates are a symbol of goodness and generosity, people of the Islamic faith gift each other dates as an expression of love and respect.",
        desc3: "When it comes to natural sweeteners, honey stands out as one of the healthiest options available. Apis Honey, in particular, has gained a reputation for its purity and high nutritional value. It is widely regarded as one of the best honey brands in the market.Not only is it carefully harvested and packaged, but it also undergoes rigorous quality control measures to ensure that it remains pure and unadulterated. Apis honey can be added in sweets and savouries, it’s not only a healthier option than refined sugar but also adds flavour to all favourite delicacies.",
        desc4: "Apis also offers a range of vermicelli products that are perfect for making delicious and nutritious dishes. These vermicelli products are made from high-quality ingredients and are free from any harmful additives. They are a great source of energy and are perfect for those who are looking to maintain a healthy diet.In addition to these, Apis also offers a range of other products that are perfect for making delicious and nutritious dishes. These products are made from high-quality ingredients and are free from any harmful additives. They are a great source of energy and are perfect for those who are looking to maintain a healthy diet.",
        img: Blog1,
        date: "April 12, 2023",
        fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    // Add more blog entries as needed...
];

const BlogDetailPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // In a real application, you would fetch the blog data from an API here
        const blogPost = BlogData.find(post => post.id === parseInt(id));
        setBlog(blogPost);
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* <ImageBanner banner={Banner} /> */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-600 mb-4">{blog.date}</p>
                <div className="mb-8">
                    <Image
                        src={blog.img}
                        alt={blog.title}
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="prose max-w-none">
                    <p className="mb-4">{blog.desc1}</p>

                    <h2 className="text-2xl font-bold mb-2">Apis Dates</h2>
                    <p className="mb-4">{blog.desc}</p>

                    <h2 className="text-2xl font-bold mb-2">Main Content</h2>
                    <p className="mb-4">{blog.fullContent}</p>

                    <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
                    <p className="mb-4">As we conclude our discussion on {blog.title}, we hope this article has provided valuable insights and information. Stay tuned for more updates and articles on similar topics.</p>
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;