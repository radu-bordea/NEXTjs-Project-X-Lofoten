// /config/site.ts

export type SocialLink = { label: string; href: string };

export type Address = {
  line1?: string;
  city?: string;
  postalCode?: string;
  region?: string;
  country?: string;
  lat?: number;
  lng?: number;
  mapUrl?: string; // google maps place/share link
};

export type Link = { label: string; href: string };

export type Activity = {
  name: string;
  short?: string;
  description?: string;
  season?: string; // e.g. "Jun–Sep"
  duration?: string; // e.g. "2h"
  difficulty?: "easy" | "medium" | "hard";
  meetAt?: Address;
  bookingUrl?: string;
  phone?: string;
};

export type Place = {
  name: string;
  category: "store" | "restaurant" | "cafe" | "bar";
  address?: Address;
  phone?: string;
  url?: string;
  notes?: string;
};

export type AmenityGroup = {
  label: string;
  items: string[];
};

export type GalleryImage = { src: string; alt: string };

export type SiteConfig = {
  brand: string;
  title: string;
  description: string;
  siteUrl: string;
  airbnbUrl: string;
  contact: { email: string; phone: string };
  address: Address;
  map: { embedSrc: string };
  nearby: {
    airport?: Link;
    ferry?: Link;
    visitorCenter?: Link;
    bus?: Link;
    taxis?: Link[]; // we’ll show phone as plain text in UI
  };
  socials: SocialLink[];
  gallery: GalleryImage[];
  amenitiesSimple: string[];
  amenities: AmenityGroup[];
  places: {
    stores: Place[];
    restaurants: Place[];
  };
  activities: Activity[];
  infoLinks: Link[];
};

export const SITE: SiteConfig = {
  brand: "Project X Lofoten",
  title: "Project X Lofoten",
  description:
    "Cozy house in Lofoten with mountain and sea views. Photos, amenities, and booking info.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  airbnbUrl:
    "https://www.airbnb.com/rooms/51008064?source_impression_id=p3_1757333159_P3Dn2wasQT4u_azd",

  contact: {
    email: "jontrygveekern@gmail.com",
    phone: "+47 915 84 016",
  },

  address: {
    line1: "Besselvågveien 119, 8392 Sørvågen",
    city: "Sørvågen",
    country: "Norway",
    mapUrl:
      "https://maps.google.com/?q=Besselv%C3%A5gveien+119,+8392+S%C3%B8rv%C3%A5gen",
  },

  map: {
    embedSrc:
      "https://www.google.com/maps?q=Besselv%C3%A5gveien+119,+8392+S%C3%B8rv%C3%A5gen&z=16&output=embed",
  },

  nearby: {
    airport: {
      label: "Leknes Airport (LKN)",
      href: "https://avinor.no/en/airport/leknes-airport/",
    },
    ferry: {
      label: "Bodø–Værøy–Røst–Moskenes ferry (Torghatten Nord)",
      href: "https://www.torghatten.no/en/our-routes/18-782",
    },
    visitorCenter: {
      label: "Visit Lofoten – Tourist Information",
      href: "https://visitlofoten.com/en/tourist-information-in-lofoten/",
    },
    bus: {
      label: "Bus (Reis Nordland)",
      href: "https://reisnordland.no/",
    },
    taxis: [
      {
        label: "Local taxi (Moskenes/Sørvågen area)",
        href: "tel:+47 909 09 190",
      },
    ],
  },

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/panoramaxlofoten/" },
    { label: "Facebook", href: "https://facebook.com/" },
    {
      label: "TripAdvisor",
      href: "https://www.tripadvisor.se/Hotel_Review-g1175194-d12279951-Reviews-Lofoten_Panorama-Stamsund_Vestvagoy_Lofoten_Islands_Nordland_Northern_Norway.html",
    },
  ],

  gallery: [
    { src: "/gallery/1.jpg", alt: "Living room" },
    { src: "/gallery/2.png", alt: "Kitchen" },
    { src: "/gallery/3.png", alt: "Bedroom" },
    { src: "/gallery/4.png", alt: "View" },
    { src: "/gallery/5.png", alt: "Bathroom" },
    { src: "/gallery/6.png", alt: "Exterior" },
  ],

  amenitiesSimple: [
    "Waterfront with sea & mountain views",
    "Fast Wi-Fi",
    "Free parking on-site",
    "Self check-in (lockbox)",
    "Washer in unit",
    "Fully equipped kitchen",
    "Single-level (no stairs)",
    "Family-friendly (crib & high chair)",
  ],

  amenities: [
    {
      label: "Scenic Views",
      items: ["Sea view", "Mountain view", "Harbor view", "Bay/Marina view"],
    },
    {
      label: "Bathroom",
      items: [
        "Shower",
        "Hot water",
        "Hair dryer",
        "Shampoo, conditioner & body soap",
        "Shower gel",
        "Cleaning products",
      ],
    },
    {
      label: "Bedroom & Laundry",
      items: [
        "Free washer — in unit",
        "Essentials (towels, bed sheets, soap, toilet paper)",
        "Cotton bed linens",
        "Extra pillows & blankets",
        "Room-darkening shades",
        "Clothing storage (closet)",
        "Drying rack for clothing",
        "Hangers",
        "Safe",
      ],
    },
    {
      label: "Entertainment",
      items: ["TV with Chromecast", "Books & reading material"],
    },
    {
      label: "Family",
      items: [
        "Crib (with sheets)",
        "Pack ’n play / travel crib",
        "Standalone high chair",
      ],
    },
    {
      label: "Heating & Cooling",
      items: ["Air conditioning", "Central heating"],
    },
    {
      label: "Home Safety",
      items: ["Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher"],
    },
    {
      label: "Internet & Office",
      items: ["Wi-Fi"],
    },
    {
      label: "Kitchen & Dining",
      items: [
        "Fully equipped kitchen",
        "Refrigerator & freezer",
        "Dishwasher",
        "Induction stove",
        "Oven",
        "Microwave",
        "Hot water kettle",
        "Drip coffee maker",
        "Coffee",
        "Pots & pans",
        "Cooking basics (oil, salt, pepper)",
        "Dishes & silverware",
        "Wine glasses",
        "Baking sheet",
        "Dining table",
      ],
    },
    {
      label: "Location Features",
      items: [
        "Waterfront (right next to the water)",
        "Private entrance (separate street/building)",
      ],
    },
    {
      label: "Outdoor",
      items: [
        "Private patio or balcony",
        "Private backyard (grass)",
        "Outdoor furniture",
        "Outdoor dining area",
      ],
    },
    {
      label: "Parking & Access",
      items: [
        "Free parking on premises",
        "Single-level home (no stairs)",
        "Self check-in (lockbox)",
      ],
    },
    {
      label: "Services",
      items: ["Long-term stays allowed (28+ days)"],
    },
  ],

  places: {
    stores: [
      {
        name: "Joker Sørvågen",
        category: "store",
        address: {
          city: "Sørvågen",
          mapUrl: "https://maps.google.com/?q=Joker+Sørvågen",
        },
        url: "https://joker.no/",
        notes: "Small grocery; walkable from the house.",
      },
      {
        name: "Matkroken Reine",
        category: "store",
        address: {
          city: "Reine",
          mapUrl: "https://maps.google.com/?q=Matkroken+Reine",
        },
        url: "https://matkroken.no/",
        notes: "Grocery in Reine (short drive).",
      },
    ],

    restaurants: [
      {
        name: "Havet Restaurant & Bar (The Tide Hotel, Sørvågen)",
        category: "restaurant",
        address: {
          city: "Sørvågen",
          mapUrl: "https://maps.google.com/?q=The+Tide+Hotel+Sørvågen",
        },
        url: "https://www.havetrestaurant.no/",
        notes:
          "Fine dining at The Tide Hotel, seasonal menu with local ingredients.",
      },
      {
        name: "Maren Anna (Sørvågen)",
        category: "restaurant",
        address: {
          city: "Sørvågen",
          mapUrl: "https://maps.google.com/?q=Maren+Anna+Sørvågen",
        },
        url: "https://marenanna.com/",
        notes: "Popular waterfront restaurant with seafood and local dishes.",
      },
      {
        name: "Holmen (Sørvågen)",
        category: "restaurant",
        address: {
          city: "Sørvågen",
          mapUrl: "https://maps.google.com/?q=Holmen+Restaurant+Sørvågen",
        },
        url: "https://www.holmenlofoten.no/",
        notes:
          "Boutique restaurant and lodge; creative seasonal tasting menus.",
      },
      {
        name: "Tapperiet Bistro (Reine)",
        category: "restaurant",
        address: {
          city: "Reine",
          mapUrl: "https://maps.google.com/?q=Tapperiet+Bistro+Reine",
        },
        url: "https://www.facebook.com/tapperietbistro/",
        notes: "Casual bistro & bar with views of Reinebringen.",
      },
      {
        name: "Anita’s Sjømat (Sakrisøy)",
        category: "restaurant",
        address: {
          city: "Sakrisøy",
          mapUrl: "https://maps.google.com/?q=Anita%27s+Sjømat",
        },
        url: "https://anitasseafood.no/",
        notes: "Famous fish burgers & seafood.",
      },
      {
        name: "Underhuset (Reine)",
        category: "restaurant",
        address: {
          city: "Reine",
          mapUrl: "https://maps.google.com/?q=Underhuset+Reine",
        },
        url: "https://reinerorbuer.no/en/restaurant/",
      },
    ],
  },

  activities: [
    {
      name: "Kayak in Reinefjorden",
      short: "Beginner-friendly guided kayaking",
      description:
        "Paddle among rorbuer and bridges in Reinefjorden. Great photo stops; all gear included.",
      season: "Jun–Sep",
      duration: "2–3h",
      difficulty: "easy",
      bookingUrl:
        "https://reinepaddling.no/en/book-paddling-booking-kayaktrip-lofoten/",
      meetAt: { city: "Reine", mapUrl: "https://maps.google.com/?q=Reine" },
    },
    {
      name: "RIB boat safari (Sørvågen → Maelstrom)",
      short: "Fast-boat nature safari with seabirds & sea stacks",
      description:
        "Daily departures (weather permitting). Warm suits & lifejackets included.",
      season: "May–Sep",
      duration: "2–3h",
      difficulty: "easy",
      bookingUrl:
        "https://visitlofoten.com/en/activity/rib-safari/rib-safari-in-the-maelstrom-2/",
      meetAt: {
        city: "Sørvågen",
        mapUrl: "https://maps.google.com/?q=Sørvågen",
      },
    },
  ],

  infoLinks: [
    {
      label: "Visit Lofoten – Official guide",
      href: "https://visitlofoten.com/en/",
    },
    {
      label: "Ferry timetables (Bodø–Moskenes)",
      href: "https://visitlofoten.com/en/topic/ferry-and-express-boat-timetables-to-lofoten/",
    },
    {
      label: "Leknes Airport (departures/arrivals)",
      href: "https://avinor.no/en/airport/leknes-airport/",
    },
    {
      label: "Bus schedules (Reis Nordland)",
      href: "https://reisnordland.no/",
    },
  ],
};
