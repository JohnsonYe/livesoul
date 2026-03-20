const NAV_LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "For Souls", href: "#for-souls" },
  { label: "For Seekers", href: "#for-seekers" },
  { label: "Sign", href: "#sign" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Top row — wordmark + tagline */}
        <div className="mb-12">
          <a
            href="#"
            className="font-serif text-2xl font-black text-amber tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            LiveSoul
          </a>
          <p className="font-sans text-sm text-stone mt-2 leading-relaxed">
            Still Human. Be Here. Together.
          </p>
        </div>

        {/* Mid row — nav + newsletter blurb */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone/60 mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm text-stone hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-stone/60 mb-4">
              The Human Frequency
            </p>
            <p className="font-sans text-sm text-stone leading-loose max-w-sm">
              Our occasional dispatch on connection, culture, and what it means
              to be here. No algorithms, no noise — just words worth reading.
            </p>
          </div>
        </div>

        {/* Founding cities */}
        <p className="font-sans text-xs tracking-widest uppercase text-stone/60 mb-12">
          Launching in{" "}
          <span className="text-amber">Lisbon</span>
          {" · "}
          <span className="text-amber">Seoul</span>
          {" · "}
          <span className="text-amber">Austin</span>
        </p>

        {/* Divider */}
        <div className="border-t border-stone/20 mb-8" aria-hidden="true" />

        {/* Bottom row — copyright + social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-sans text-xs text-stone/50">
              © 2026 LiveSoul. All rights reserved.
            </p>
            <p className="font-sans text-xs text-stone/40 mt-1">
              For Humans, By Humans.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="LiveSoul on Instagram"
              className="font-sans text-xs text-stone hover:text-cream transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="LiveSoul on X / Twitter"
              className="font-sans text-xs text-stone hover:text-cream transition-colors duration-200"
            >
              X / Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
