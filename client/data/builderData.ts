import { ProjectData } from "./projectData";

export interface TestimonialData {
  title: string;
  description: string;
  author: string;
  image: string;
}

export interface FeatureType {
  text: string;
  helpertext: string;
}

export interface BuilderType {
  title: string;
  helpertext: string;
  desc: string;
  logo: string;
  image: string;
  vision: string;
  features: FeatureType[];
  location: string;
  projects: ProjectData[];
  testimonials: TestimonialData[];
}

export const builderData: BuilderType = {
  title: "Subha Constructions",
  helpertext: "Builders & Developers",
  desc: "In 1986, we began as a team of five, operating out of a small site office on our first project, with our sole focus being property development. Today, we number well over 500 and operate from plush offices across two floors at the prestigious World Trade Center Bangalore.",
  image: "/assets/properties/image-1.png",
  logo: "/assets/banner.png",
  vision:
    "Our team of Brigadiers—based in several major cities in South India, Dubai and San Francisco—work across a diverse portfolio of domains and projects, and draw upon a national and international pool of professional associates. To date, we have completed over 100 buildings; worked on numerous interesting projects and initiatives, many of which inhabit realms unrelated to our business; and engaged with the community through a variety of CSR initiatives. In the process, we have earned important certifications, won prestigious awards and created urban landmarks.",
  location: "Chandapura, Bangalore",
  features: [
    { text: "10+ Projects", helpertext: "Ongoing" },
    { text: "70+ Projects", helpertext: "Completed" },
    { text: "20+ Projects", helpertext: "Upcomming" },
  ],
  projects: [
    {
      name: "Subha Belgravia Villas at Subha Ecocity",
      image: "/assets/properties/image-1.png",
      price: "INR 2.35 Cr to 6.85 Cr",
      description: "2, 3, 4 BHK Flats | 750 Sq. Ft. to 2000 Sq. Ft. (Carpet)",
      location: "Chandapura, Bangalore",
      builder_image: "/assets/properties/image-2.png",
      builder_name: "Shuba",
      builder_helpertext: "Quality Home Builders",
      href: "/property/Subha-Belgravia-Villas",
    },
    {
      name: "Godrej Splendour",
      image: "/assets/properties/image-2.png",
      price: "INR 1.2 Cr Onwards",
      description: "2, 3 BHK Apartments | 900 Sq. Ft. Onwards",
      location: "Whitefield, Bangalore",
      builder_image: "/assets/properties/image-3.png",
      builder_name: "Godrej Properties",
      builder_helpertext: "Trusted Real Estate",
      href: "/property/godrej-splendour",
    },
    {
      name: "Prestige Lakeside Habitat",
      image: "/assets/properties/image-4.png",
      price: "INR 1.8 Cr Onwards",
      description: "2, 3, 4 BHK Apartments | 1000 Sq. Ft. Onwards",
      location: "Varthur Road, Bangalore",
      builder_image: "/assets/properties/image-1.png",
      builder_name: "Prestige Group",
      builder_helpertext: "Luxury Living Spaces",
      href: "/property/prestige-lakeside-habitat",
    },
    {
      name: "Sobha Sentosa",
      image: "/assets/properties/image-1.png",
      price: "INR 4 Cr Onwards",
      description: "4, 5 BHK Villas | 3000 Sq. Ft. Onwards",
      location: "Electronic City, Bangalore",
      builder_image: "/assets/properties/image-2.png",
      builder_name: "Sobha",
      builder_helpertext: "Luxury Homes Built",
      href: "/property/sobha-sentosa",
    },
    {
      name: "Salarpuria Sattva Serene",
      image: "/assets/properties/image-3.png",
      price: "INR 3.5 Cr Onwards",
      description: "4, 5 BHK Villas | 4000 Sq. Ft. Onwards",
      location: "Sarjapur Road, Bangalore",
      builder_image: "/assets/properties/image-4.png",
      builder_name: "Salarpuria Sattva",
      builder_helpertext: "Lifestyle Creators",
      href: "/property/salarpuria-sattva-serene",
    },
    {
      name: "Purvankara Provident Park",
      image: "/assets/properties/image-4.png",
      price: "INR 40 Lakhs Onwards",
      description: "2, 3 BHK Apartments | 800 Sq. Ft. Onwards",
      location: "Whitefield, Bangalore",
      builder_image: "/assets/properties/image-1.png",
      builder_name: "Purvankara",
      builder_helpertext: "Building Trust Since",
      href: "/property/purvankara-provident-park",
    },
  ],
  testimonials: [
    {
      title: "Hassle-Free Property Search",
      description:
        "Map My Property made finding my dream apartment so easy! Their platform is user-friendly, and the team provided excellent support throughout the process. I highly recommend them for anyone looking for a new home.",
      author: "Amal Verma",
      image: "avatar-male.png",
    },
    {
      title: "Expert Land Acquisition Assistance",
      description:
        "As a developer, I needed help acquiring land for a new project. Map My Property's expertise and network saved me time and money. Their professional approach and knowledge of local regulations were invaluable.",
      author: "Rahul Desai",
      image: "avatar-male.png",
    },
    {
      title: "Seamless Community Planning Services",
      description:
        "Our planned community project was a success, thanks to Map My Property. Their insights into zoning, property management, and land use were top-notch. They are the ideal partner for real estate development.",
      author: "Sarah Al-Harbi",
      image: "avatar-female.png",
    },
    {
      title: "Efficient Property Management Solutions",
      description:
        "Managing multiple rental properties used to be overwhelming, but Map My Property changed that. Their efficient solutions and excellent team have made property management stress-free and profitable for me.",
      author: "Nabeel Ahmed",
      image: "avatar-male.png",
    },
    {
      title: "Trusted Real Estate Partner",
      description:
        "Buying my first plot of land was a daunting task, but Map My Property guided me every step of the way. Their transparency, market knowledge, and friendly service gave me the confidence to make the right decision.",
      author: "Priya Shah",
      image: "avatar-female.png",
    },
  ],
};
