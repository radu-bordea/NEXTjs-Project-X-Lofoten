type Props = {
  /** Google Maps iframe src.
   * Get it from Google Maps → Share → Embed a map → copy the src attribute. */
  mapSrc: string;
  address?: string;
  nearby?: { label: string; value: string }[];
};

export default function Location({ mapSrc, address, nearby }: Props) {
  return (
    <section id="location" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Location</h2>
      <p className="mt-2 text-gray-600">
        Located in beautiful Lofoten—close to hikes, beaches, and fishing
        villages.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="font-medium">Address</p>
          <p className="text-gray-700">
            {address ?? "Street xx, Lofoten, Norway"}
          </p>

          {nearby && nearby.length > 0 && (
            <div className="mt-4 space-y-2">
              {nearby.map((n) => (
                <div key={n.label}>
                  <span className="font-medium">{n.label}: </span>
                  <span className="text-gray-700">{n.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <iframe
            src={mapSrc}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map"
          />
        </div>
      </div>
    </section>
  );
}
