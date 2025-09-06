export type SocialLink = { label: string; href: string };
export type GalleryImage = { src: string; alt: string };

export const SITE = {
  brand: "Project X Lofoten",
  title: "Project X Lofoten",
  description:
    "Cozy house in Lofoten with mountain and sea views. Photos, amenities, and booking info.",
  airbnbUrl: "https://airbnb.com/rooms/YOUR_LISTING_ID",
  contact: {
    email: "host@example.com",
    phone: "+47 12 34 56 78",
  },
  address: {
    line1: "Moskenesveien 865, 8392 Sørvågen",
    city: "Sørvågen",
    country: "Norway",
  },
  map: {
    embedSrc: "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE",
  },
  socials: <SocialLink[]>[
    { label: "Instagram", href: "https://www.instagram.com/panoramaxlofoten/" },
    { label: "Facebook", href: "https://facebook.com/yourpage" },
  ],
  gallery: <GalleryImage[]>[
    { src: "/gallery/1.jpg", alt: "Living room" },
    { src: "/gallery/2.png", alt: "Kitchen" },
    { src: "/gallery/3.png", alt: "Bedroom" },
    { src: "/gallery/4.png", alt: "View" },
    { src: "/gallery/5.png", alt: "Bathroom" },
    { src: "/gallery/6.png", alt: "Exterior" },
  ],
  amenities: [
    "2 bedrooms, 1 bathroom",
    "Full kitchen",
    "High-speed Wi-Fi",
    "Free private parking",
    "Mountain & sea views",
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // gallery stays as you have it
} as const;
