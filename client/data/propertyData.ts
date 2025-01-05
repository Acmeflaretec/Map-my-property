export interface TestimonialData {
   title: string;
   description: string;
   author: string;
   image: string;
}
export interface SpecData {
   text: string
   helpertext: string
   icon: string
}

export interface PropertyData {
   title: string;
   images: string[];
   price: string;
   desc: string;
   specifications: SpecData[];
   location: string
   builder_image: string;
   builder_name: string;
   builder_helpertext: string;
   href: string;
   testimonials: TestimonialData[]
}

export const propertyData: PropertyData =
{
   title: "Subha Belgravia Villas at Subha Ecocity",
   images: [
      "/assets/properties/image-1.png",
      "/assets/properties/image-2.png",
      "/assets/properties/image-3.png",
   ],
   price: "INR 2.35 Cr to 6.85 Cr",
   desc: "Explore the best properties with ease - personalized serches, real-time updates, and expert guidance all in one place",
   location: "Chandapura, Bangalore",
   specifications: [
      { text: "Bedrooms", helpertext: "Four | Three", icon: "bedroom" },
      { text: "Area", helpertext: "800 sq/m", icon: "area" },
      { text: "Parking", helpertext: "Four | Two", icon: "parking" },
      { text: "Bathroom", helpertext: "Three | Two", icon: "bathroom" },
      { text: "Balcony", helpertext: "Two | Three", icon: "balcony" },
   ],
   builder_image: "/assets/properties/image-2.png",
   builder_name: "Shuba",
   builder_helpertext: "Quality Home Builders",
   href: "/property/Subha-Belgravia-Villas",
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
   ]
} 