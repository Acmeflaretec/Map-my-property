import { BuilderType } from "@/utils/interface";
import { propertyData } from "./propertyData";

export const builderData: BuilderType = {
  _id: "123",
  title: "Subha Constructions",
  subtitle: "Builders & Developers",
  description:
    "In 1986, we began as a team of five, operating out of a small site office on our first project, with our sole focus being property development. Today, we number well over 500 and operate from plush offices across two floors at the prestigious World Trade Center Bangalore.",
  image: "/assets/properties/image-1.png",
  logo: "/assets/banner.png",
  vision:
    "Our team of Brigadiers—based in several major cities in South India, Dubai and San Francisco—work across a diverse portfolio of domains and projects, and draw upon a national and international pool of professional associates. To date, we have completed over 100 buildings; worked on numerous interesting projects and initiatives, many of which inhabit realms unrelated to our business; and engaged with the community through a variety of CSR initiatives. In the process, we have earned important certifications, won prestigious awards and created urban landmarks.",
  location: "Chandapura, Bangalore",
  url:"subha-constructions",
  features: [
    { text: "10+ Projects", helpertext: "Ongoing" },
    { text: "70+ Projects", helpertext: "Completed" },
    { text: "20+ Projects", helpertext: "Upcomming" },
  ],
  projects: [propertyData, propertyData, propertyData],
  testimonials: [
    {
      rating: "4.5",
      review:
        "Map My Property made finding my dream apartment so easy! Their platform is user-friendly, and the team provided excellent support throughout the process. I highly recommend them for anyone looking for a new home.",
      name: "Amal Verma",
      image: "avatar-male.png",
    },
    {
      rating: "4.5",
      review:
        "As a developer, I needed help acquiring land for a new project. Map My Property's expertise and network saved me time and money. Their professional approach and knowledge of local regulations were invaluable.",
      name: "Rahul Desai",
      image: "avatar-male.png",
    },
    {
      rating: "4.5",
      review:
        "Our planned community project was a success, thanks to Map My Property. Their insights into zoning, property management, and land use were top-notch. They are the ideal partner for real estate development.",
      name: "Sarah Al-Harbi",
      image: "avatar-female.png",
    },
    {
      rating: "4.5",
      review:
        "Managing multiple rental properties used to be overwhelming, but Map My Property changed that. Their efficient solutions and excellent team have made property management stress-free and profitable for me.",
      name: "Nabeel Ahmed",
      image: "avatar-male.png",
    },
    {
      rating: "4.5",
      review:
        "Buying my first plot of land was a daunting task, but Map My Property guided me every step of the way. Their transparency, market knowledge, and friendly service gave me the confidence to make the right decision.",
      name: "Priya Shah",
      image: "avatar-female.png",
    },
  ],
};
