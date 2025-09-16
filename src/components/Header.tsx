"use client";
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelector from "./LanguageSelector";
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';

export default function Header() {
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        const toggle = document.getElementById('mobile-menu-toggle') as HTMLElement | null;
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        toggle?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
  <header id="site-header" className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50/30 to-accent/10 shadow-sm overflow-visible backdrop-blur-sm" role="banner">
  <div className="site-container px-6 py-1 flex items-center justify-between" style={{minHeight: '56px'}}>
          {/* Skip link for keyboard users */}
          <a href="#download" className="skip-link">
            Skip to download
          </a>
          {/* Logo */}
          <div className="flex items-center gap-2 h-full">
            <Link href="/" data-cursor="black" className="flex items-center justify-center h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent" aria-label="Go to homepage">
              {/* Use next/image edge-to-edge without extra background padding */}
              <div className="flex items-center justify-center h-full w-14 md:w-16 lg:w-20">
                <Image src="/assets/images/logo.png" alt="BandhuConnect+ logo" width={72} height={72} priority className="object-contain" />
              </div>
              {/* keep brand for screen readers but don't visually show text since logo conveys brand */}
              <span className="sr-only">BandhuConnect+</span>
            </Link>
            <div className="hidden md:block w-2 h-2 bg-gradient-to-r from-accent to-brand-gold rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            <a href="#features" className="text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Features</a>
            <a href="#trust" className="text-gray-700 hover:bg-brand-orange hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Trust & Safety</a>
            <a href="#community" className="text-gray-700 hover:bg-brand-gold hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">Community Impact</a>
            <a href="#faq" className="text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue font-medium shadow-sm hover:shadow-md" tabIndex={0} data-cursor="black">FAQ</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" onClick={(e) => {
              const nav = mobileNavRef.current;
              const btn = e.currentTarget as HTMLElement;
              if (!nav) return;
              const next = !isOpen;
              setIsOpen(next);
              btn.setAttribute('aria-expanded', String(next));
              // show/hide handled by className bound to isOpen
              if (next) {
                setTimeout(() => {
                  const focusable = nav.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
                  if (focusable.length) {
                    (focusable[0] as HTMLElement).focus();
                  }
                }, 50);
              } else {
                // returning focus to toggle
                setTimeout(() => btn.focus(), 0);
              }
            }}>
              <span className={`hamburger ${isOpen ? 'open' : ''}`} aria-hidden>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
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
  <nav ref={mobileNavRef} id="mobile-nav" className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col bg-white/95 shadow-lg absolute top-16 left-0 w-full z-40 border-t border-accent/20 backdrop-blur-sm`} aria-label="Mobile navigation" aria-hidden={!isOpen}>
        <FocusLock disabled={!isOpen} returnFocus>
        <div className="flex items-center justify-between px-4 py-2 border-b border-accent/10">
          <div className="font-bold">Menu</div>
          <div aria-hidden className="w-10" />
        </div>
  <a href="#features" className="block px-6 py-3 border-b border-accent/10 text-gray-700 hover:bg-brand-blue hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-200 font-medium" data-cursor="black">Features</a>
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
        </FocusLock>
      </nav>
    </>
  );
}