"use client";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
        <div className="site-container px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <a href="#top" data-cursor="black" className="font-bold text-2xl text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
            BandhuConnect+
          </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            <a href="#features" className="text-black hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0} data-cursor="black">Features</a>
            <a href="#how-it-works" className="text-black hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0} data-cursor="black">How It Works</a>
            <a href="#trust" className="text-black hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0} data-cursor="black">Trust & Safety</a>
            <a href="#community" className="text-black hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0} data-cursor="black">Community Impact</a>
            <a href="#faq" className="text-black hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0} data-cursor="black">FAQ</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button aria-label="Open menu" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" onClick={() => {
              const nav = document.getElementById('mobile-nav');
              if (nav) nav.classList.toggle('hidden');
            }}>
              <svg width="24" height="24" fill="none" stroke="#FF6B35" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>

          {/* CTAs, Language, Accessibility */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="#download"
              data-cursor="black"
              className="inline-flex items-center gap-3 bg-accent text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:bg-accent/90 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
              aria-label="Download the BandhuConnect+ app"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M12 3v12" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11l4 4 4-4" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 21H4" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Download App</span>
            </a>
            <LanguageSelector />
            <button className="ml-2 px-2 py-1 border rounded text-sm" aria-label="Toggle high contrast" tabIndex={0} data-cursor="black">A</button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <nav id="mobile-nav" className="md:hidden hidden flex-col bg-white shadow-lg absolute top-16 left-0 w-full z-40" aria-label="Mobile navigation">
        <a href="#features" className="block px-6 py-3 border-b text-black hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" data-cursor="black">Features</a>
        <a href="#how-it-works" className="block px-6 py-3 border-b text-black hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" data-cursor="black">How It Works</a>
        <a href="#trust" className="block px-6 py-3 border-b text-black hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" data-cursor="black">Trust & Safety</a>
        <a href="#community" className="block px-6 py-3 border-b text-black hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" data-cursor="black">Community Impact</a>
  <a href="#faq" className="block px-6 py-3 border-b text-black hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" data-cursor="black">FAQ</a>

        <div className="flex gap-2 px-6 py-3 items-center">
          <a href="#download" className="bg-accent text-black px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition" data-cursor="black">Download App</a>
          <select className="ml-2 border rounded px-2 py-1 text-sm" aria-label="Select language" data-cursor="black">
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <button className="ml-2 px-2 py-1 border rounded text-sm" aria-label="Toggle high contrast">A</button>
        </div>
      </nav>
    </>
  );
}