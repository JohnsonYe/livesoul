"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "For Souls", href: "#for-souls" },
  { label: "For Seekers", href: "#for-seekers" },
  { label: "Sign", href: "#sign" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-sm border-b border-mist shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif text-xl font-bold text-charcoal tracking-tight hover:text-amber transition-colors duration-200"
        >
          LiveSoul
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-stone hover:text-charcoal transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 text-charcoal"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-cream border-b border-mist px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }, index) => (
              <li key={href}>
                <a
                  href={href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-stone hover:text-charcoal transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
