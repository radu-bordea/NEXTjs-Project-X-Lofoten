// src/components/Contact.tsx (no "use client")
import { SITE } from "@/config/site";

import { client as sanity } from "@/sanity/lib/client";

const propertyQuery = `*[_type=="property"][0]{ 
  brand, title, airbnbUrl,
  contacts[]{email,phone},
  gallery[]{asset->, alt}
}`;

type Contact = { email: string; phone: string };

export default async function Contact() {
  let contacts: Contact[] = SITE.contacts;
  try {
    const data = await sanity.fetch(propertyQuery);
    if (data?.contacts?.length) contacts = data.contacts as Contact[];
  } catch {
    // ignore and use fallback
  }

  return (
    <section
      id="contact"
      className="container mx-auto px-4 py-12 text-gray-600"
    >
      <h2 className="text-2xl font-semibold">Contact & Booking</h2>
      <p className="mt-2 text-gray-600">
        For availability and reservations, book via Airbnb or contact us
        directly.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {contacts.map((c) => (
          <div
            key={c.email}
            className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50"
          >
            <a
              href={`mailto:${c.email}`}
              className="block text-blue-600 hover:underline"
            >
              {c.email}
            </a>
            <a
              href={`tel:${(c.phone || "").replace(/\s/g, "")}`}
              className="block mt-1 text-gray-700 hover:underline"
            >
              {c.phone}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
