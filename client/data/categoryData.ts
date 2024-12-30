interface CategoryData {
  title: string;
  subtitle: string;
  image: string;
  background: string;
  className: string;
}

export const categoryData: CategoryData[] = [
  {
    title: "Residential Flats",
    subtitle: "320+ properties",
    image: "/assets/categories/image-1.png",
    background: "bg-[#F0F9FF]",
    className: "h-4/5 w-4/5 bottom-0 left-12",
  },
  {
    title: "Private Residences",
    subtitle: "320+ properties",
    image: "/assets/categories/image-2.png",
    background: "bg-[#FFF5E4]",
    className: "h-2/3 w-full bottom-0 left-0",
  },
  {
    title: "Land Parcels",
    subtitle: "320+ properties",
    image: "/assets/categories/image-3.png",
    background: "bg-[#D7F2E3]",
    className: "h-2/5 w-full bottom-0 left-0",
  },
  {
    title: "Planned Communites",
    subtitle: "320+ properties",
    image: "/assets/categories/image-4.png",
    background: "bg-[#F0F9FF]",
    className: "h-2/3 w-full bottom-0 left-0",
  },
];
