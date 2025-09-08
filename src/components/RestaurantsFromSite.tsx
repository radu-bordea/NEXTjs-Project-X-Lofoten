// components/RestaurantsFromSite.tsx
import { SITE } from "@/config/site";

type Place = {
  name: string;
  category: "restaurant" | "store" | "cafe" | "bar";
  address?: { city?: string; mapUrl?: string };
  phone?: string;
  url?: string;
  notes?: string;
};

export default function RestaurantsFromSite() {
  const restaurants = (SITE as any)?.places?.restaurants as Place[] | undefined;
  if (!restaurants || restaurants.length === 0) return null;

  return (
    <section
      id="restaurants"
      className="container mx-auto px-4 py-12 text-gray-600"
    >
      <h2 className="text-2xl font-semibold">Restaurants</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {restaurants.map((p) => (
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
