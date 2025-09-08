// components/StoresFromSite.tsx
import { SITE, type Place } from "@/config/site";

export default function StoresFromSite() {
  const stores: Place[] = SITE.places?.stores ?? [];
  if (stores.length === 0) return null;

  return (
    <section id="stores" className="container mx-auto px-4 py-12 text-gray-600">
      <h2 className="text-2xl font-semibold">Stores</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {stores.map((p) => (
          <div key={p.name} className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {p.category}
              </span>
            </div>

            {p.address?.city && (
              <p className="text-gray-600">{p.address.city}</p>
            )}

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Website
                </a>
              )}
              {p.address?.mapUrl && (
                <a
                  href={p.address.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Map
                </a>
              )}
              {p.phone && (
                <a
                  href={`tel:${p.phone.replace(/\s+/g, "")}`}
                  className="underline"
                >
                  Call
                </a>
              )}
            </div>

            {p.notes && <p className="mt-2 text-sm text-gray-500">{p.notes}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
