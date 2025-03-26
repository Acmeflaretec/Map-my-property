"use client";
import Image from "next/image";
import { generateImageUrl } from "@/utils/generateImageUrl";
import React, { useState } from "react";

const BlogBannerImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const [imageSrc, setImageSrc] = useState<string>(generateImageUrl(src));
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageSrc("/assets/banner.png");
  };

  return (
    <Image
      src={imageSrc}
      alt="Blog Banner Image"
      onError={handleImageError}
      className={className}
      width={4920}
      height={3080}
    />
  );
};

export default BlogBannerImage;
