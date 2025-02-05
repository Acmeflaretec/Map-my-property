import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomToaster from "@/components/ui/CustomToaster";
import { Suspense } from "react";

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Map My Property",
  description:
    "Unlocking Your Properties Full Potential | Map My Property test",
  keywords:
    "property mapping, land survey, property measurement, real estate mapping, property documentation, land mapping services, property survey",
  authors: [{ name: "Map My Property" }],
  creator: "Map My Property",
  publisher: "Map My Property",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://www.mapmyproperty.in",
    languages: {
      en: "https://www.mapmyproperty.in",
    },
  },
  openGraph: {
    title: "Map My Property",
    description: "Unlocking Your Properties Full Potential | Map My Property",
    url: "https://www.mapmyproperty.in",
    siteName: "Map My Property",
    images: [
      {
        url: "https://www.mapmyproperty.in/logo-primary.svg",
        width: 800,
        height: 600,
        alt: "Map My Property Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Map My Property",
    description: "Unlocking Your Properties Full Potential | Map My Property",
    creator: "@mapmyproperty",
    images: ["https://www.mapmyproperty.in/logo-primary.svg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "property mapping",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Map My Property",
    statusBarStyle: "black-translucent",
  },
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
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
