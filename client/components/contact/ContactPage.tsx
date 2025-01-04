import React from "react";
import ContactCard from "../common/ContactCard";
import { Icons } from "../common/Icons";
import Link from "next/link";

const ContactPage: React.FC = () => {
   return (
      <div className="flex flex-col lg:flex-row gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between p-2 md:p-8">
         <div className="flex flex-col w-full mx-auto xl:w-2/3 gap-4 xl:gap-8 p-2">
            <h1 className="font-bold text-base md:text-2xl">Get In Touch With Us</h1>
            <p className="max-w-lg text-sm md:text-base">We&apos;re here to help you navigate your journey to the perfect property.
               Whether you have a question, need assistance, or want to explore opportunities,
               we&apos;d love to hear from you!
            </p>
            <h1 className="font-bold text-base md:text-xl">Contact Information</h1>
            <div className="flex flex-col gap-2">
               <Link
                  href={"tel:+911234567890"}
                  target="_blank"
                  className="flex gap-4 items-center text-sm md:text-base"
               >
                  <Icons.phone />
                  +91 123 456 7890
               </Link>
               <Link
                  href={"mailto:info@mapmyproperty.com"}
                  className="flex gap-4 items-center text-sm md:text-base"
               >
                  <Icons.email />
                  info@mapmyproperty.com
               </Link>
               <Link
                  href={
                     "https://www.google.com/maps"
                  }
                  target="_blank"
                  className="flex gap-4 text-sm md:text-base"
               >
                  <Icons.location />
                  P.O. BOX : 118467,<br />
                  105-9, 1st Floor Al Fajjer Complex Umm Hurair,<br />
                  Oud Metha, Dubai - UAE
               </Link>
            </div>
            <div className="flex flex-col">
               <h1 className="font-bold text-sm md:text-lg">Follow us</h1>
               <p className="text-xs md:text-sm">Stay updated with the latest trends and properties</p>
               <div className="flex gap-6 items-center py-4">
                  <Link
                     href={
                        "https://www.facebook.com/"
                     }
                     target="_blank"
                  >
                     <Icons.facebook />
                  </Link>
                  <Link
                     href={"https://www.linkedin.com/"}
                     target="_blank"
                  >
                     <Icons.linkedIn />
                  </Link>
                  <Link href={"https://www.google.com/search?q=map+my+property&rlz=1C1PNFE_enIN1112IN1112&oq=map+my+pro&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPNIBCDcxMjZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"} target="_blank">
                     <Icons.google />
                  </Link>
                  <Link
                     href={
                        "https://www.instagram.com/"
                     }
                     target="_blank"
                  >
                     <Icons.instagram />
                  </Link>
               </div>
            </div>
         </div>
         <div className="w-full xl:w-1/3">
            <ContactCard />
         </div>
      </div>
   );
};

export default ContactPage;
