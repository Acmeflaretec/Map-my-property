"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
  dark?: boolean;
}

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Search" },
  { path: "/blogs", label: "Blogs" },
  { path: "/#emi-calculator", label: "EMI Calculator" },
  { path: "/contact", label: "Connect Us" },
];
const helperLinks = [
  { path: "/projects", label: "Upcomming Projects" },
  { path: "/projects", label: "Cities" },
  { path: "/projects", label: "New Launch" },
  { path: "/projects", label: "Luxury Homes" },
  { path: "/projects", label: "Apartments" },
  { path: "/projects", label: "Villas" },
  { path: "/projects", label: "Plots" },
  { path: "/projects", label: "Farm Plots" },
];

const CustomLink: React.FC<CustomLinkProps> = ({ path, children, dark }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`
      ${pathname === path && (dark ? "text-black" : "text-stone-300")}
      ${dark ? "hover:text-black" : "hover:text-stone-300"}
      `}
      href={path}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 z-50 font-bricolage bg-white backdrop-blur-lg flex flex-col items-center w-full bg-opacity-55 ">
      <div className="flex h-16 px-4 md:px-8 xl:max-w-screen-xl justify-between w-full items-center border-b">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={48}
            height={56}
            className="w-full h-10"
          />
        </Link>
        <nav className="hidden lg:flex gap-8 text-base text-stone-500">
          {navLinks.slice(0, 5).map(({ path, label }, idx) => (
            <CustomLink key={idx} path={path} dark>
              {label}
            </CustomLink>
          ))}
        </nav>
        <Image
          src="/assets/login.svg"
          width={40}
          height={40}
          alt="menu"
          className="w-10 h-10 lg:hidden cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="hidden md:flex px-4 md:px-8 gap-8 border-b py-1 text-xs lg:text-base text-stone-500 xl:max-w-screen-xl justify-end w-full items-center">
        {helperLinks.map(({ path, label }, idx) => (
          <CustomLink key={idx} path={path} dark>
            {label}
          </CustomLink>
        ))}
      </div>
      {isMenuOpen && (
        <div className="fixed bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] text-white top-0 right-0 w-64 xs:w-72 sm:w-80 md:w-96 lg:w-104 backdrop-blur-lg overflow-hidden rounded-l-2xl p-2 shadow-md">
          <div className="flex justify-between p-8">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <Icons.close />
            </button>
          </div>
          <nav className="relative flex flex-col justify-center pb-20 px-8 gap-3 text-base font-bricolage">
            {navLinks.map(({ path, label }) => (
              <CustomLink key={path} path={path}>
                {label}
              </CustomLink>
            ))}
          </nav>
          <p className="text-xs text-center p-4 text-stone-300">
            © {new Date().getFullYear()}{" "}
            <Link href="/companies" className="hover:underline">
              Infinite Group of Companies
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
