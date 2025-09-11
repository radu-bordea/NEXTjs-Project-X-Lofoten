// src/lib/sanity.ts
export { client as sanity } from "@/sanity/lib/client";
export { urlFor } from "@/sanity/lib/image";

// GROQ for your “property” document
export const propertyQuery = `*[_type=="property"][0]{
  brand, title, airbnbUrl,
  contacts[]{email, phone},
  gallery[]{asset->, alt}
}`;
