import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomToaster from "@/components/ui/CustomToaster";

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Map My Property",
  description: "Unlocking Your Properties Full Potential | Map My Property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} antialiased font-questrial flex flex-col items-center w-screen overflow-x-hidden`}
      >
        <CustomToaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
