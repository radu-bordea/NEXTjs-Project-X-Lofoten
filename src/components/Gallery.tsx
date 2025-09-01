import Image from "next/image";
import { SITE } from "@/config/site";

export default function Gallery() {
  return (
    <section id="gallery" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <p className="mt-2 text-gray-600">
        A glimpse of the house and surroundings.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {SITE.gallery.map((img) => (
          <div
            key={img.src}
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={img.src} // ✅ comes from SITE.gallery
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
