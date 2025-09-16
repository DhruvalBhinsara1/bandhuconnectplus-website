"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "../lib/i18n";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();
  const [isHighContrast, setIsHighContrast] = useState(false);
  
  // set CSS variable --header-height so hero can fill the remaining viewport
  useEffect(() => {
    function setHeaderHeight() {
      const header = document.querySelector('header');
      const h = header ? header.getBoundingClientRect().height : 64;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  // Detect high contrast mode
  useEffect(() => {
    const checkHighContrast = () => {
      setIsHighContrast(document.body.classList.contains('high-contrast'));
    };
    
    checkHighContrast();
    
    // Listen for changes to the body class
    const observer = new MutationObserver(checkHighContrast);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  return (
  <section id="hero" className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 text-center bg-gradient-to-br from-[#FFF9F0] via-[#FFF4E6] to-[#FFF9F0] overflow-hidden" aria-label="Hero section">
      {/* Sacred geometry animated background (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <circle cx="50%" cy="50%" r="180" fill="#FFD23F" fillOpacity="0.08" />
        <circle cx="50%" cy="50%" r="120" fill="#FF6B35" fillOpacity="0.06" />
        <circle cx="50%" cy="50%" r="60" fill="#4A90E2" fillOpacity="0.04" />
      </svg>

      {/* Abstract blobs (Luxe accent) */}
  <svg className="hero-blob absolute pointer-events-none -right-5 top-[15%]" width="800" height="600" viewBox="0 0 800 600" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#4CE687" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.06" />
          </linearGradient>
          <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>
        <g filter="url(#f1)">
          <ellipse cx="420" cy="260" rx="220" ry="160" fill="url(#g1)" />
          <ellipse cx="520" cy="340" rx="140" ry="100" fill="#FFD23F" fillOpacity="0.04" />
        </g>
      </svg>
  <div className="relative z-10 w-full pointer-events-auto">
        <div className="site-container grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6">
  <div className="md:col-span-6 lg:col-span-5 text-center md:text-left">
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-black mb-6 leading-tight">
            {/* highlight the brand word with accent using React elements */}
            {(() => {
              const raw = t('hero.headline');
              const marker = 'BandhuConnect+';
              if (raw.includes(marker)) {
                const parts = raw.split(marker);
                return (
                  <>
                    {parts[0]}
                    <span className="accent-highlight">{marker}</span>
                    {parts.slice(1).join(marker)}
                  </>
                );
              }
              return raw;
            })()}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-6 md:mb-8 max-w-xl">{t('hero.subheadline')}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-6">
            <a
              href="#download"
              data-cursor="black"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#1dbe3a] text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#16a32b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1dbe3a]/30 transition"
              aria-label="Download for Android"
            >
              {/* Android icon */}
              <Image 
                src="/assets/images/android.png" 
                alt="" 
                width={18} 
                height={18} 
                className={`flex-shrink-0 ${isHighContrast ? 'android-logo-hc' : ''}`} 
                aria-hidden 
              />
              <span className="sr-only">Android</span>
              <span>{t('download.android') ?? 'Download for Android'}</span>
            </a>

            <a
              href="#download"
              data-cursor="black"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#1f6feb] text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#145ec7] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1f6feb]/30 transition"
              aria-label="Download for iOS"
            >
              {/* Apple icon */}
              <Image src="/assets/images/apple.png" alt="" width={18} height={18} className="flex-shrink-0" aria-hidden />
              <span className="sr-only">iOS</span>
              <span>{t('download.ios') ?? 'Download for iOS'}</span>
            </a>
          </div>
          {/* Floating badges for social proof */}
      <div className="floating-badges">
        <div className="floating-badge">{t('hero.target.volunteers')}</div>
        <div className="floating-badge">{t('hero.target.people')}</div>
      </div>
          </div>
        {/* Hero illustration */}
        <div className="md:col-span-6 lg:col-span-7 flex items-center justify-center">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white p-0 mx-auto">
              {/* Full-bleed image area (no inner padding) - wrapper aspect increased for larger presence */}
              <div className="w-full rounded-t-2xl overflow-hidden bg-gray-50 aspect-[16/9] md:aspect-[1400/760] flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/hero-1366.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/hero-1366.webp" type="image/webp" />
                  <img
                    src="/assets/images/optimized/hero-1366.jpeg"
                    alt="Pilgrims and volunteers collaborating at Mahakumbh"
                    className="w-full h-full object-cover object-center"
                    width={1400}
                    height={760}
                    loading="eager"
                  />
                </picture>
              </div>
              {/* Caption area with padding */}
              <div className="p-6 lg:p-8">
                <div className="mt-0 text-sm md:text-base text-black text-center">The grand spectacle of Mahakumbh in Ujjain, where millions gather on the sacred banks to take a holy dip, offer prayers, and witness the divine Ganga Aarti in an atmosphere filled with devotion and light.</div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <style>{`
        /* Make hero fill initial viewport beneath the sticky header */
        #hero {
          /* default: subtract header height so hero fits exactly in viewport under header */
          min-height: calc(100vh - var(--header-height, 64px));
        }

        /* Keep taller presence on very large screens but still respect header height */
        @media (min-width: 1024px) {
          #hero {
            min-height: calc(100vh - var(--header-height, 64px));
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }
        @media (min-width: 1280px) {
          #hero {
            min-height: calc(100vh - var(--header-height, 64px));
          }
        }

        /* Abstract blob styling and gentle animation */
        .hero-blob {
          z-index: 0;
          opacity: 0.9;
          transform-origin: center;
          animation: hero-blob-anim 18s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes hero-blob-anim {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-blob {
            animation: none;
            transition: none;
            transform: none;
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}