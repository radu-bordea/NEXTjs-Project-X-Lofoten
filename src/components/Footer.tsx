import { SITE } from "@/config/site";
import { VscArrowCircleUp } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.brand}
        </p>
        <div className="flex gap-4">
          <a href="#top" className="hover:underline">
            <VscArrowCircleUp className="text-xl text-amber-600"/>
          </a>
          <a
            href={SITE.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-amber-600"
          >
            Book on Airbnb
          </a>
        </div>
      </div>
    </footer>
  );
}
