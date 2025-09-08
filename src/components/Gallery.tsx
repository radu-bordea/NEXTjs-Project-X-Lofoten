"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/config/site";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const images = SITE.gallery;

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : i));
  const next = () =>
    setIndex((i) => (i !== null ? (i + 1) % images.length : i));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  return (
    <section
      id="gallery"
      className="container mx-auto px-4 py-12 text-gray-600"
    >
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <p className="mt-2">
        A glimpse of the house and surroundings.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
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

      {index !== null && (
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
