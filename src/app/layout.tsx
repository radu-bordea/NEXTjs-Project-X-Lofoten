// app/layout.tsx
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const siteUrl = "https://www.panorama-x-lofoten.com";
const ogImage = "/og.jpg"; // ensure this exists (1200x630)
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE } from "@/config/site";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

// const ogImage = SITE.gallery?.[0]?.src || "/og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Panorama X Lofoten – Seaside house in Sørvågen",
  description:
    "Cozy waterfront house with sea and mountain views in Sørvågen, Lofoten. Photos, amenities and booking info.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Panorama X Lofoten",
    description: "Waterfront house with sea & mountain views in Sørvågen.",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panorama X Lofoten",
    description: "Waterfront house with sea & mountain views in Sørvågen.",
    images: [ogImage],
  },
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
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
