"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SITE } from "@/config/site";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { client as sanity } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Query returns width/height so we can render without cropping
const propertyQuery = `*[_type=="property"][0]{
  gallery[]{
    alt,
    asset->{
      _id,
      metadata{ dimensions{ width, height, aspectRatio } }
    }
  }
}`;

type LocalImg = { src: string; alt: string; width: number; height: number };
type SanityImg = {
  alt?: string;
  asset?: {
    _id: string;
    metadata?: {
      dimensions?: { width: number; height: number; aspectRatio: number };
    };
  };
};

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [sanityImages, setSanityImages] = useState<SanityImg[] | null>(null);

  // Fetch from Sanity once
  useEffect(() => {
    let mounted = true;
    sanity
      .fetch(propertyQuery)
      .then((data) => {
        if (!mounted) return;
        const imgs: SanityImg[] = data?.gallery || [];
        setSanityImages(imgs.length ? imgs : null);
      })
      .catch(() => setSanityImages(null));
    return () => {
      mounted = false;
    };
  }, []);

  // Build a unified array that preserves native aspect ratio
  const images = useMemo<LocalImg[]>(() => {
    if (sanityImages && sanityImages.length) {
      return sanityImages
        .map((img) => {
          const dims = img.asset?.metadata?.dimensions;
          if (!img.asset || !dims) return null;

          // Generate a URL at “max” fit (no hard crop). We can cap width per column.
          // For 2–3 columns, ~1200px wide srcs are plenty; browser will downscale via `sizes`.
          const src = urlFor(img.asset as unknown as SanityImageSource)
            .fit("max") // <-- keep entire image (no crop)
            .auto("format") // <-- webp/avif when possible
            .width(1200)
            .url();

          return {
            src,
            alt: img.alt || "Photo",
            width: Math.max(1, Math.round(dims.width)),
            height: Math.max(1, Math.round(dims.height)),
          };
        })
        .filter(Boolean) as LocalImg[];
    }

    // Fallback to your static SITE.gallery (no known dims). Assume 4:3 so layout stays stable.
    // If some are portrait, you can optionally add real dims in SITE later.
    return SITE.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      width: 1200,
      height: 900,
    }));
  }, [sanityImages]);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : i
      ),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i !== null ? (i + 1) % images.length : i)),
    [images.length]
  );

  // ESC / arrows
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, close, prev, next]);

  return (
    <section
      id="gallery"
      className="container mx-auto px-4 py-12 text-gray-600"
    >
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <p className="mt-2">A glimpse of the house and surroundings.</p>

      {/* Masonry using CSS columns. Each tile keeps native aspect ratio. */}
      <div className="mt-6 columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setIndex(i)}
            className="mb-3 md:mb-4 block w-full overflow-hidden rounded-xl focus:outline-none break-inside-avoid"
            title={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              // Stretch to column width, keep aspect ratio
              className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              // priority can remain false; the hero handles LCP
            />
          </button>
        ))}
      </div>

      {/* Modal keeps object-contain so mixed orientations display full */}
      {index !== null && images[index] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
              priority
            />
            <button
              onClick={close}
              className="absolute top-3 right-3 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            >
              <X size={24} />
            </button>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
