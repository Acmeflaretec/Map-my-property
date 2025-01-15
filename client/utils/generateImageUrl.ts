export const generateImageUrl = (src: string) => {
  const imagePath =
    process.env.NEXT_PUBLIC_DATA_SOURCE === "server"
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${src}`
      : src;
  return imagePath;
};
