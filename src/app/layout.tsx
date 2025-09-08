// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE } from "@/config/site";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const ogImage = SITE.gallery?.[0]?.src || "/og.jpg";

export const metadata: Metadata = {
  /* ...your same metadata... */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space.variable}>
      <body
        className="
          bg-gray-50 text-gray-800 antialiased
          font-[var(--font-space)]
          text-[17px] md:text-[18px]   /* bump base text size */
        "
      >
        <Navbar />
        <main

        >
          {children}
        </main>
      </body>
    </html>
  );
}
