import "@/app/globals.css";

import type { Metadata } from "next";
import { quattrocento, marcellus, poppins, dmsans } from "@lib/data/fonts";

export const metadata: Metadata = {
  title: "TT Tech Talent",
  description: "Boutique recruitment agency, focusing on technology in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quattrocento} ${marcellus} ${poppins} ${dmsans}`}>
        {children}
      </body>
    </html>
  );
}
