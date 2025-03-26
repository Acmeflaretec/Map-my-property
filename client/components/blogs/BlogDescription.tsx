"use client";
import { formatDescription } from "@/utils/formatDescription";
import React, { useState, useEffect } from "react";

const BlogDescription = ({ data }: { data: string }) => {
  const [htmlContent, setHtmlContent] = useState<{ __html: string }>({
    __html: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHtmlContent(formatDescription(data));
    }
  }, [data]);

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={htmlContent}
    />
  );
};

export default BlogDescription;
