"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BlogDetailPage = () => {
  const searchParams = useSearchParams();
  const blogTitle = searchParams.get("blogTitle");
  const blogImage = searchParams.get("blogImage");
  const contentData = searchParams.get("contentData");

  const [parsedContent, setParsedContent] = useState("");

  useEffect(() => {
    // Decode the content data to handle encoded special characters
    setParsedContent(decodeURIComponent(contentData || ""));
  }, [contentData]);

  if (!blogTitle || !blogImage || !contentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1>
      <div className="mb-8">
        <Image
          src={blogImage}
          alt={blogTitle}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div
        className="prose max-w-none font-jost"
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      ></div>
    </div>
  );
};

export default BlogDetailPage;
