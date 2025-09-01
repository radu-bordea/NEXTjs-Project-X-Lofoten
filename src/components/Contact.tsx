import { SITE } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Contact & Booking</h2>
      <p className="mt-2 text-gray-600">
        For availability and reservations, book via Airbnb or contact us
        directly.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a
          href={`mailto:${SITE.contact.email}`}
          className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50"
        >
          <span className="block text-sm text-gray-500">Email</span>
          {SITE.contact.email}
        </a>

        <a
          href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`}
          className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50"
        >
          <span className="block text-sm text-gray-500">Phone</span>
          {SITE.contact.phone}
        </a>

        <a
          href={SITE.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50"
        >
          <span className="block text-sm text-gray-500">Airbnb</span>
          Book on Airbnb
        </a>
      </div>

      {SITE.socials?.length ? (
        <div className="mt-6 flex flex-wrap gap-4">
          {SITE.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
