import React from "react";
import type { ImageProps } from "next/image";

const CustomImage = (props: ImageProps) => {
  const { src, alt, width, height, style, ...rest } = props;
  return (
    <img
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      style={{
        objectFit:
          (props.objectFit as React.CSSProperties["objectFit"]) || "cover",
        ...style,
      }}
      {...rest}
    />
  );
};

export default CustomImage;
