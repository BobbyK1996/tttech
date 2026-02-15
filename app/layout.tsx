import "@/app/globals.css";

import type { Metadata } from "next";

import {
  Marcellus,
  Poppins,
  Quattrocento_Sans,
  DM_Sans,
} from "next/font/google";

import { quattrocento, marcellus, poppins, dmsans } from "@lib/data/fonts";

export const metadata: Metadata = {
  title: "TT Tech Talent",
  description: "Boutique recruitment agency, focusing on technology in London",
};

const marcellusFont = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const quattrocentoFont = Quattrocento_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quattrocento_sans",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellusFont.variable} ${quattrocentoFont.variable} ${poppinsFont.variable} relative -z-10 flex min-h-screen w-full flex-col overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
