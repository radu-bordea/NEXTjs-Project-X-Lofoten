import Location from "./Location";
import { SITE } from "@/config/site";

type NearbyItem = { label: string; value: string };

export default function LocationFromSite() {
  const addressLine = [
    SITE.address?.line1,
    SITE.address?.city,
    SITE.address?.country,
  ]
    .filter(Boolean)
    .join(", ");

  const nearby: NearbyItem[] = [];

  // helper to push link-type nearby items
  const pushLink = (link?: { label?: string; href?: string }) => {
    if (link?.label && link?.href) {
      nearby.push({ label: link.label, value: link.href });
    }
  };

  // links (clickable)
  pushLink(SITE.nearby?.visitorCenter);
  pushLink(SITE.nearby?.airport);
  pushLink(SITE.nearby?.ferry);
  pushLink(SITE.nearby?.bus); // ✅ Bus (Reis Nordland)

  // taxis -> plain text (no tel:)
  if (Array.isArray(SITE.nearby?.taxis)) {
    SITE.nearby!.taxis.forEach((t) => {
      if (t?.label && t?.href) {
        nearby.push({
          label: t.label,
          value: t.href.replace(/^tel:\s*/i, ""), // strip tel:
        });
      }
    });
  }

  return (
    <Location
      mapSrc={SITE.map?.embedSrc ?? ""}
      address={addressLine}
      nearby={nearby}
    />
  );
}
