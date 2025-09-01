import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SITE } from "@/config/site";

// Helper: pick first gallery image or a fallback
const ogImage = SITE.gallery?.[0]?.src || "/og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl), // ensures relative paths resolve absolute
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    // relative path will be resolved using metadataBase -> absolute URL
    images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.title }],
    type: "website",
    siteName: SITE.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
