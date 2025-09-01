import Image from "next/image";
import { SITE } from "@/config/site";
import Link from "next/link";

export default function Home() {
  const heroImage = SITE.gallery[0]?.src || "/gallery/1.jpg";

  return (
    <section
      className="
    relative w-full
    h-[50vh]        /* mobile: shorter (50% of viewport height) */
    sm:h-[60vh]     /* small screens and up */
    md:h-[70vh]     /* medium screens */
    lg:h-[80vh]     /* large screens */
  "
    >
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-sky-100/50" />

      {/* Content on top of image */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-gray-700 px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">{SITE.title}</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold">{SITE.description}</p>
          <Link
            href={SITE.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full px-6 py-3 text-lg font-medium bg-red-400 hover:bg-red-500 border border-red-300 text-gray-100 hover:text-gray-200 hover:shadow-md transition"
          >
            Book on Airbnb
          </Link>
        </div>
      </div>
    </section>
  );
}
