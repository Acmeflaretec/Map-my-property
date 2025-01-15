import { SectionType } from "@/utils/interface";
import { propertyData } from "./propertyData";
import { builderData } from "./builderData";

export const sectionData: SectionType[] = [
  {
    title: "Fast-Moving Properties",
    projects: [
      {
        ...propertyData,
        title: "Mantri Alpyra",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        price: "INR 5 Cr Onwards",
        description: "4, 5 BHK Villas | 5000 Sq. Ft. Onwards",
        location: "Bannerghatta Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Mantri Developers",
          helpertext: "Luxury Living Experts",
        },
        href: "/property/mantri-alpyra",
      },
      {
        ...propertyData,
        title: "Prestige Golfshire Estates",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        price: "INR 8 Cr Onwards",
        description: "5, 6 BHK Villas | 8000 Sq. Ft. Onwards",
        location: "Off Sarjapur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Prestige Group",
          helpertext: "Luxury Living Spaces",
        },
        href: "/property/prestige-golfshire-estates",
      },
      {
        ...propertyData,
        title: "Sobha Windsor",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        price: "INR 6 Cr Onwards",
        description: "4, 5 BHK Villas | 6000 Sq. Ft. Onwards",
        location: "Bannerghatta Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Sobha",
          helpertext: "Luxury Homes Built",
        },
        href: "/property/sobha-windsor",
      },
      {
        ...propertyData,
        title: "L&T Raintree Boulevard",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        price: "INR 7 Cr Onwards",
        description: "5, 6 BHK Villas | 7000 Sq. Ft. Onwards",
        location: "Varthur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "L&T Realty",
          helpertext: "Engineering Excellence",
        },
        href: "/property/lnt-raintree-boulevard",
      },
      {
        ...propertyData,
        title: "DLF Park Place",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        price: "INR 10 Cr Onwards",
        description: "5, 6 BHK Villas | 10000 Sq. Ft. Onwards",
        location: "Begur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "DLF Limited",
          helpertext: "World-Class Living",
        },
        href: "/property/dlf-park-place",
      },
    ],
  },
  {
    title: "Luxury Properties",
    projects: [
      {
        ...propertyData,
        title: "Subha Belgravia Villas at Subha Ecocity",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        price: "INR 2.35 Cr to 6.85 Cr",
        description: "2, 3, 4 BHK Flats | 750 Sq. Ft. to 2000 Sq. Ft. (Carpet)",
        location: "Chandapura, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Shuba",
          helpertext: "Quality Home Builders",
        },
        href: "/property/Subha-Belgravia-Villas",
      },
      {
        ...propertyData,
        title: "Godrej Splendour",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        price: "INR 1.2 Cr Onwards",
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Godrej Properties",
          helpertext: "Trusted Real Estate",
        },
        href: "/property/godrej-splendour",
      },
      {
        ...propertyData,
        title: "Prestige Lakeside Habitat",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        price: "INR 1.8 Cr Onwards",
        description: "2, 3, 4 BHK Apartments | 1000 Sq. Ft. Onwards",
        location: "Varthur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Prestige Group",
          helpertext: "Luxury Living Spaces",
        },
        href: "/property/prestige-lakeside-habitat",
      },
      {
        ...propertyData,
        title: "Sobha Sentosa",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-1.png",
          },
        ],
        price: "INR 4 Cr Onwards",
        description: "4, 5 BHK Villas | 3000 Sq. Ft. Onwards",
        location: "Electronic City, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Sobha",
          helpertext: "Luxury Homes Built",
        },
        href: "/property/sobha-sentosa",
      },
      {
        ...propertyData,
        title: "Salarpuria Sattva Serene",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        price: "INR 3.5 Cr Onwards",
        description: "4, 5 BHK Villas | 4000 Sq. Ft. Onwards",
        location: "Sarjapur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "Salarpuria Sattva",
          helpertext: "Lifestyle Creators",
        },
        href: "/property/salarpuria-sattva-serene",
      },
      {
        ...propertyData,
        title: "Purvankara Provident Park",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        price: "INR 40 Lakhs Onwards",
        description: "2, 3 BHK Apartments | 800 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-1.png",
          title: "Purvankara",
          helpertext: "Building Trust Since",
        },
        href: "/property/purvankara-provident-park",
      },
    ],
  },
  {
    title: "Affordable Homes",
    projects: [
      {
        ...propertyData,
        title: "Mahindra Lifespaces Luminare",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        price: "INR 4.5 Cr Onwards",
        description: "4, 5 BHK Villas | 4500 Sq. Ft. Onwards",
        location: "Kanakapura Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Mahindra Lifespaces",
          helpertext: "Rise. Reimagine. Live.",
        },
        href: "/property/mahindra-lifespaces-luminare",
      },
      {
        ...propertyData,
        title: "Tata Promont",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-3.png",
          },
        ],
        price: "INR 9 Cr Onwards",
        description: "6, 7 BHK Villas | 12000 Sq. Ft. Onwards",
        location: "Electronic City, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Tata Housing",
          helpertext: "Innovation in Living",
        },
        href: "/property/tata-promont",
      },
      {
        ...propertyData,
        title: "Purvankara Provident Park",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-4.png",
          },
        ],
        price: "INR 40 Lakhs Onwards",
        description: "2, 3 BHK Apartments | 800 Sq. Ft. Onwards",
        location: "Whitefield, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-2.png",
          title: "Purvankara",
          helpertext: "Building Trust Since",
        },
        href: "/property/purvankara-provident-park",
      },
      {
        ...propertyData,
        title: "Brigade Meadows",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        price: "INR 55 Lakhs Onwards",
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Hosur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-4.png",
          title: "Brigade Group",
          helpertext: "Urban Living Defined",
        },
        href: "/property/brigade-meadows",
      },
      {
        ...propertyData,
        title: "Brigade Meadows",
        imageGallery: [
          {
            title: "cover-image",
            desc: "",
            src: "/assets/properties/image-2.png",
          },
        ],
        price: "INR 55 Lakhs Onwards",
        description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
        location: "Hosur Road, Bangalore",
        builder: {
          ...builderData,
          image: "/assets/properties/image-3.png",
          title: "Brigade Group",
          helpertext: "Urban Living Defined",
        },
        href: "/property/brigade-meadows",
      },
    ],
  },
];
