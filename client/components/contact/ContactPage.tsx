import React from "react";
import ContactCard from "../common/ContactCard";
import { Icons } from "../common/Icons";
import Link from "next/link";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-20 md:mt-28 lg:mt-32 mb-12 w-full justify-between p-2 md:p-8">
      <div className="flex flex-col w-full mx-auto xl:w-2/3 gap-4 xl:gap-8 p-2">
        <h1 className="font-bold text-base md:text-2xl">
          Get In Touch With Us
        </h1>
        <p className="max-w-lg text-sm md:text-base">
          We&apos;re here to help you navigate your journey to the perfect
          property. Whether you have a question, need assistance, or want to
          explore opportunities, we&apos;d love to hear from you!
        </p>
        <h1 className="font-bold text-base md:text-xl">Contact Information</h1>
        <div className="flex flex-col gap-2">
          <Link
            href={"tel:+916363692124"}
            target="_blank"
            className="flex gap-4 items-center text-sm md:text-base"
          >
            <Icons.phone />
            +91 6363692124
          </Link>
          <Link
            href={"mailto:info@mapmyproperty.in"}
            className="flex gap-4 items-center text-sm md:text-base"
          >
            <Icons.email />
            info@mapmyproperty.in
          </Link>
          <Link
            href={"https://www.google.com/maps"}
            target="_blank"
            className="flex gap-4 text-sm md:text-base"
          >
            <Icons.location />
            7th Cross Rd, <br />
            6th Phase, KR Layout, J. P. Nagar, <br />
            Bengaluru, Karnataka 560078, India
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-sm md:text-lg">Follow us</h1>
          <p className="text-xs md:text-sm">
            Stay updated with the latest trends and properties
          </p>
          <div className="flex gap-6 items-center py-4">
            <Link
              href={
                "https://www.facebook.com/people/Map-My-Property/100095114943706/"
              }
              target="_blank"
            >
              <Icons.facebook />
            </Link>
            <Link href={"https://www.linkedin.com/"} target="_blank">
              <Icons.linkedIn />
            </Link>
            <Link href={"https://g.co/kgs/3nyVvrn"} target="_blank">
              <Icons.google />
            </Link>
            <Link
              href={"https://www.instagram.com/map_my_property"}
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
