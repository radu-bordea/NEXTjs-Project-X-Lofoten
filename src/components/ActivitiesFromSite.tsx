// components/ActivitiesFromSite.tsx
import { SITE } from "@/config/site";

type Activity = {
  name: string;
  short?: string;
  description?: string;
  season?: string;
  duration?: string;
  difficulty?: "easy" | "medium" | "hard";
  meetAt?: { mapUrl?: string; city?: string };
  bookingUrl?: string;
  phone?: string;
};

export default function ActivitiesFromSite() {
  const activities: Activity[] = SITE.activities ?? [];
  if (activities.length === 0) return null;

  return (
    <section id="activities" className="container mx-auto px-4 py-12 text-gray-600">
      <h2 className="text-2xl font-semibold">Activities</h2>

      <ul className="mt-6 space-y-4">
        {activities.map((a) => (
          <li key={a.name} className="rounded-xl border border-gray-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold">{a.name}</h3>
              <div className="text-xs text-gray-500">
                {[a.season, a.duration, a.difficulty]
                  .filter(Boolean)
                  .join(" • ")}
              </div>
            </div>

            {a.short && <p className="mt-1 text-gray-600">{a.short}</p>}
            {a.description && (
              <p className="mt-2 text-sm text-gray-700">{a.description}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {a.bookingUrl && (
                <a
                  href={a.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Book / info
                </a>
              )}
              {a.meetAt?.mapUrl && (
                <a
                  href={a.meetAt.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Meeting point
                </a>
              )}
              {a.phone && (
                <a
                  href={`tel:${a.phone.replace(/\s+/g, "")}`}
                  className="underline"
                >
                  Call
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
