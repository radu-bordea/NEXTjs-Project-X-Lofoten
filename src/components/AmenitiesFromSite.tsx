// components/AmenitiesFromSite.tsx
import { SITE, type AmenityGroup } from "@/config/site";

export default function AmenitiesFromSite() {
  const grouped =
    (SITE.amenities as AmenityGroup[] | undefined)?.filter(
      (g): g is AmenityGroup =>
        !!g &&
        typeof g.label === "string" &&
        Array.isArray(g.items) &&
        g.items.length > 0
    ) ?? [];

  const simple =
    (SITE.amenitiesSimple as string[] | undefined)?.filter(
      (s): s is string => typeof s === "string" && s.trim().length > 0
    ) ?? [];

  if (grouped.length === 0 && simple.length === 0) return null;

  return (
    <section id="amenities" className="container mx-auto px-4 py-12 text-gray-600">
      <h2 className="text-2xl font-semibold">Amenities</h2>

      {/* Collapsible container */}
      <details className="group mt-4">
        <summary
          className="
            cursor-pointer text-blue-600 hover:underline select-none text-sm
            list-none [&::-webkit-details-marker]:hidden
          "
        >
          <span className="group-open:hidden">Show all amenities</span>
          <span className="hidden group-open:inline">Hide amenities</span>
        </summary>

        {/* Content shows only when opened */}
        <div className="mt-4">
          {grouped.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {grouped.map((g) => (
                <div
                  key={g.label}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <h3 className="font-semibold">{g.label}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                    {g.items.map((it) => (
                      <li key={`${g.label}-${it}`} className="break-words">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid gap-2 sm:grid-cols-2">
              {simple.map((a) => (
                <li
                  key={a}
                  className="rounded-xl border border-gray-200 p-3 text-sm break-words"
                >
                  {a}
                </li>
              ))}
            </ul>
          )}
        </div>
      </details>
    </section>
  );
}
