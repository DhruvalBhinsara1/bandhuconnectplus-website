"use client";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <>
  <header id="site-header" className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50/30 to-accent/10 shadow-sm overflow-visible backdrop-blur-sm border-b border-accent/20" role="banner">
        <div className="site-container px-6 py-4 flex items-center justify-between">
          {/* Skip link for keyboard users */}
          <a href="#download" className="skip-link">
            Skip to download
          </a>
          {/* Logo */}
          <div className="flex items-center gap-2">
          <a href="#top" data-cursor="black" className="font-bold text-2xl text-brand-blue hover:text-brand-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
            BandhuConnect+
          </a>
          <div className="hidden md:block w-2 h-2 bg-gradient-to-r from-accent to-brand-gold rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            <a href="#features" className="text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:bg-accent hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">How It Works</a>
            <a href="#trust" className="text-gray-700 hover:bg-brand-orange hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Trust & Safety</a>
            <a href="#community" className="text-gray-700 hover:bg-brand-gold hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Community Impact</a>
            <a href="#faq" className="text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">FAQ</a>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-accent via-brand-blue to-accent text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:bg-brand-gold focus:bg-brand-gold hover:text-black focus:text-black hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 border-2 border-white/20 hover:border-white/40"
              aria-label="Download the BandhuConnect+ app"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 21H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Download App</span>
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            </a>
            <div className="relative z-50">
              <LanguageSelector />
            </div>
            <button
              id="toggle-high-contrast"
              className="ml-2 px-2 py-1 border rounded text-sm"
              aria-label="Toggle high contrast"
              tabIndex={0}
              data-cursor="black"
              onClick={() => {
                try {
                  const body = document.body;
                  const on = body.classList.toggle('high-contrast');
                  window.localStorage.setItem('highContrast', on ? 'true' : 'false');
                  const button = document.getElementById('toggle-high-contrast');
                  if (button) {
                    if (on) {
                      button.classList.add('high-contrast-active');
                      button.setAttribute('aria-pressed', 'true');
                    } else {
                      button.classList.remove('high-contrast-active');
                      button.setAttribute('aria-pressed', 'false');
                    }
                  }
                  const mobileBtn = document.getElementById('toggle-high-contrast-mobile');
                  if (mobileBtn) mobileBtn.setAttribute('aria-pressed', String(on));
                  try {
                    const ann = document.getElementById('a11y-announcer');
                    if (ann) ann.textContent = on ? 'High contrast enabled' : 'High contrast disabled';
                  } catch {}
                } catch {}
              }}
            >
              HC
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <nav id="mobile-nav" className="md:hidden hidden flex-col bg-gradient-to-b from-white to-blue-50/30 shadow-lg absolute top-16 left-0 w-full z-40 border-t border-accent/20" aria-label="Mobile navigation">
        <a href="#features" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-200 font-medium" data-cursor="black">Features</a>
        <a href="#how-it-works" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-accent hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 font-medium" data-cursor="black">How It Works</a>
        <a href="#trust" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-brand-orange hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all duration-200 font-medium" data-cursor="black">Trust & Safety</a>
        <a href="#community" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-brand-gold hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-200 font-medium" data-cursor="black">Community Impact</a>
  <a href="#faq" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-200 font-medium" data-cursor="black">FAQ</a>

        <div className="flex gap-2 px-6 py-3 items-center">
          <a href="#download" className="bg-gradient-to-r from-accent via-brand-blue to-accent text-black px-4 py-2 rounded-full font-semibold hover:bg-brand-gold focus:bg-brand-gold hover:text-black focus:text-black hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40" data-cursor="black">Download App</a>
          <div className="relative z-50">
            <LanguageSelector />
          </div>
          <button
            id="toggle-high-contrast-mobile"
            className="ml-2 px-2 py-1 border rounded text-sm"
            aria-label="Toggle high contrast"
            onClick={() => {
              try {
                const body = document.body;
                const on = body.classList.toggle('high-contrast');
                window.localStorage.setItem('highContrast', on ? 'true' : 'false');
                const button = document.getElementById('toggle-high-contrast-mobile');
                if (button) {
                  if (on) {
                    button.classList.add('high-contrast-active');
                    button.setAttribute('aria-pressed', 'true');
                  } else {
                    button.classList.remove('high-contrast-active');
                    button.setAttribute('aria-pressed', 'false');
                  }
                }
                const desktopBtn = document.getElementById('toggle-high-contrast');
                if (desktopBtn) desktopBtn.setAttribute('aria-pressed', String(on));
                try {
                  const ann = document.getElementById('a11y-announcer');
                  if (ann) ann.textContent = on ? 'High contrast enabled' : 'High contrast disabled';
                } catch {}
              } catch {}
            }}
          >HC</button>
        </div>
      </nav>
    </>
  );
}