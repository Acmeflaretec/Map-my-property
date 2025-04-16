import React from "react";
import type { ImageProps } from "next/image";

const CustomImage = (props: ImageProps) => {
  const { src, ...rest } = props;
  return <img src={src as string} {...rest} />;
};

export default CustomImage;
