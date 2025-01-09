import { builderData, BuilderType } from "./builderData";

export interface TestimonialData {
  title: string;
  description: string;
  author: string;
  image: string;
}
export interface FaqData {
  title: string;
  content: string;
}
export interface FeatureItem {
  text: string;
  helpertext: string;
  icon: string;
}
export interface Feature {
  title: string;
  items: FeatureItem[];
}
export interface PricingType {
  unit: string;
  area: string;
  price: string;
}
export interface PlanType {
  title: string;
  desc: string;
  image: string;
}
export interface PropertyData {
  title: string;
  images: string[];
  price: string;
  desc: string;
  features: Feature[];
  pricing: PricingType[];
  masterPlan: PlanType;
  plans: PlanType[];
  location: string;
  builder: BuilderType;
  href: string;
  faqs: FaqData[];
  expertOpinions: string[];
  testimonials: TestimonialData[];
}

export const propertyData: PropertyData = {
  title: "Subha Belgravia Villas at Subha Ecocity",
  images: [
    "/assets/banner.png",
    "/assets/properties/image-2.png",
    "/assets/properties/image-3.png",
  ],
  price: "INR 2.35 Cr to 6.85 Cr",
  desc: "Explore the best properties with ease - personalized serches, real-time updates, and expert guidance all in one place",
  location: "Chandapura, Bangalore",
  features: [
    {
      title: "Specifications",
      items: [
        { text: "Bedrooms", helpertext: "Four | Three", icon: "bedroom" },
        { text: "Area", helpertext: "800 sq/m", icon: "area" },
        { text: "Parking", helpertext: "Four | Two", icon: "parking" },
        { text: "Bathroom", helpertext: "Three | Two", icon: "bathroom" },
        { text: "Balcony", helpertext: "Two | Three", icon: "balcony" },
      ],
    },
    {
      title: "Apartment Amenities",
      items: [
        { text: "Gymnasium", helpertext: "25,000 sq/ft", icon: "gymnasium" },
        {
          text: "Indoor Games",
          helpertext: "15,068 sq/ft",
          icon: "indoorGames",
        },
        { text: "Multi-Courts", helpertext: "Available", icon: "games" },
        { text: "Visitor Parking", helpertext: "Available", icon: "parking" },
        { text: "Jogging Track", helpertext: "1.3 km", icon: "jogging" },
        { text: "Yoga Zone", helpertext: "Available", icon: "yoga" },
        { text: "Lift", helpertext: "Three", icon: "lift" },
        {
          text: "Swimming Pool",
          helpertext: "25,000 sq/ft",
          icon: "swimmingPool",
        },
        { text: "Pets Park", helpertext: "Available", icon: "petsPark" },
        { text: "Landscaped", helpertext: "Available", icon: "landscape" },
      ],
    },
    {
      title: "Location Advantages",
      items: [
        {
          text: "Education Institute",
          helpertext: `Poorna Prajna Public School (3.3 km)\n Dav Public School  (3.6 km)`,
          icon: "education",
        },
        { text: "Church", helpertext: "Dav Church (3.6 km)", icon: "church" },
        {
          text: "Transportation Hub",
          helpertext: `Airport  (9.4km)\n Railway  (3.4km)\n Bus Stop  (3 m)`,
          icon: "transport",
        },
        {
          text: "Shopping Center",
          helpertext: `Poorna Prajna Public School (3.3 km)\n Dav Public School  (3.6 km)`,
          icon: "shoppingCart",
        },
      ],
    },
  ],
  pricing: [
    {
      unit: "3 BHK | Pooja Room | Family Room",
      area: "1200 - 1500 sq/ft",
      price: "Rs. 78 Lacs Onwards",
    },
    {
      unit: "3 BHK | Pooja Room | Family Room",
      area: "1200 - 1500 sq/ft",
      price: "Rs. 78 Lacs Onwards",
    },
    {
      unit: "3 BHK | Pooja Room | Family Room",
      area: "1200 - 1500 sq/ft",
      price: "Rs. 78 Lacs Onwards",
    },
    {
      unit: "3 BHK | Pooja Room | Family Room | Garden",
      area: "1200 - 1500 sq/ft",
      price: "Rs. 78 Lacs Onwards",
    },
  ],
  masterPlan: {
    title: "Master Plan of Subha Belgravia Villas",
    desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    image: "/assets/master-plan.png",
  },
  plans: [
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-1.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-2.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-1.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-2.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-1.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-2.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-1.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
    {
      title: "1 BHK 1T Type 1A",
      image: "/assets/plan-2.png",
      desc: "This master plan is a conceptual layout that guides the future growth and development of an area. It can involve land use, infrastructure, and spatial organization.",
    },
  ],
  builder: builderData,
  href: "/property/Subha-Belgravia-Villas",
  faqs: [
    {
      title: "What is the carpet area of the flat?",
      content:
        "The carpet area refers to the actual usable area within the walls of the flat, excluding the thickness of the walls, balconies, and common areas. It's important to verify this with the builder or property owner.",
    },
    {
      title: "Are there any maintenance charges for the flat?",
      content:
        "Most residential flats have monthly or annual maintenance charges to cover the upkeep of common areas, security, and other facilities. Make sure to ask about the amount and what it covers.",
    },
    {
      title: "Is the flat ready-to-move-in or under construction?",
      content:
        "Check whether the flat is ready for possession or still under construction. If under construction, inquire about the expected completion date and ensure it matches your timeline.",
    },
    {
      title: "What amenities are included in the building?",
      content:
        "Residential flats often come with amenities like parking, a gym, a swimming pool, or a clubhouse. Confirm which amenities are available and whether they are included in the cost.",
    },
    {
      title: "What is the parking situation for residents?",
      content:
        "Find out whether the flat includes a dedicated parking space, if it's covered or open, and if there are any additional charges for parking.",
    },
    {
      title: "Is the property RERA-registered?",
      content:
        "The Real Estate (Regulation and Development) Act (RERA) requires builders to register their projects. Verify the RERA registration number to ensure transparency and avoid future disputes.",
    },
  ],
  expertOpinions: [
    "Luxury 3 & 4 BHK homes by Sumadhura with 73% open spaces, no towers facing each other, expansive landscaped gardens, and 20+ premium amenities.",
    "Excellent location right on Hope Farm junction with Close Proximity to ITPL, Hoodi, Kadugodi, multiple Metro stations in Whitefield as well as existing communities of residents with health facitities, schools, and amenities in the immediate vicinity",
    "East Bangalore and specifically this part of Whitefield is one of the most highly sought-after areas in Bangalore with multiple major infrastructure projects coming up in the vicinity of the Project which makes it great for Investment purpose and Self-use",
    "Some major Traffic Bottlenecks during peak hours while accessing other parts of Whitefield, Marathahalli, Varthur, KR Puram, and parts of North Bangalore.",
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
