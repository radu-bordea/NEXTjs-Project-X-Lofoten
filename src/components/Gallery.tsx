"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/config/site";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  // Index of the currently opened image (null = modal closed)
  const [index, setIndex] = useState<number | null>(null);

  const images = SITE.gallery;

  // Close modal
  const close = () => setIndex(null);

  // Show previous image (wrap around with modulo)
  const prev = () =>
    setIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : i));

  // Show next image (wrap around with modulo)
  const next = () =>
    setIndex((i) => (i !== null ? (i + 1) % images.length : i));

  // Keyboard shortcuts: ESC closes, arrow keys navigate
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (index === null) return; // do nothing if modal closed
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  return (
    <section id="gallery" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <p className="mt-2 text-gray-600">
        A glimpse of the house and surroundings.
      </p>

      {/* Thumbnail grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)} // open modal with clicked image
            className="relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Modal overlay (only shown when index !== null) */}
      {index !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close} // clicking outside closes modal
        >
          <div
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()} // stop overlay close if clicking inside
          >
            {/* Large image */}
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
              priority
            />

            {/* Close button (top-right corner) */}
            <button
              onClick={close}
              className="absolute top-3 right-3 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            >
              <X size={24} />
            </button>

            {/* Prev / Next arrows */}
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
