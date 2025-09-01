"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  /** Close with a short fade animation, then run an optional callback */
  const closeWithFade = (after?: () => void) => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      after?.();
    }, 180); // keep in sync with duration-300-ish
  };

  /** Toggle the mobile drawer (no void-chaining) */
  const handleToggle = () => {
    if (open) {
      closeWithFade();
    } else {
      setOpen(true);
    }
  };

  /** Smooth-scroll to ID; optionally close drawer first on mobile */
  const smoothScrollTo = (id: string, closeFirst = false) => {
    const action = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    closeFirst ? closeWithFade(action) : action();
  };

  const linkBase = "text-gray-900 hover:text-blue-600 transition-colors";

  const NavLinks = ({ mobile }: { mobile?: boolean }) => (
    <>
      <Link
        href="#about"
        className={linkBase}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("about", !!mobile);
        }}
      >
        About
      </Link>
      <Link
        href="#gallery"
        className={linkBase}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("gallery", !!mobile);
        }}
      >
        Gallery
      </Link>
      <Link
        href="#location"
        className={linkBase}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("location", !!mobile);
        }}
      >
        Location
      </Link>
      <Link
        href="#contact"
        className={linkBase}
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("contact", !!mobile);
        }}
      >
        Contact
      </Link>
    </>
  );

  const drawerOpen = open && !closing;
  const drawerClasses =
    "md:hidden absolute left-0 right-0 top-full " +
    "border-t border-gray-200 bg-white px-4 py-3 " +
    "transition-all duration-300 ease-out " +
    (drawerOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-4 pointer-events-none");

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-neutral-50 border-b border-gray-200 backdrop-blur text-gray-900 p-2 relative">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          className="
            text-lg md:text-xl font-semibold tracking-tight
            bg-gradient-to-r from-gray-600 to-red-400
            bg-clip-text text-transparent
          "
        >
          {SITE.brand}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <Link
            href={SITE.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium border border-red-300 text-red-400 hover:text-red-500 hover:shadow-md"
          >
            Book on Airbnb
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 md:hidden hover:bg-gray-100"
          onClick={handleToggle}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {drawerOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer (overlayed) */}
      <div className={drawerClasses} aria-hidden={!drawerOpen}>
        <div className="flex flex-col items-center gap-6">
          <NavLinks mobile />
          <div className="flex justify-center">
            <Link
              href={SITE.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-4 py-2 text-sm font-medium border border-red-300 text-red-400 hover:text-red-500 hover:shadow-md"
              onClick={() => closeWithFade()}
            >
              Book on Airbnb
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
