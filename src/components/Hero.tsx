"use client";
import { useTranslation } from "../lib/i18n";

export default function Hero() {
  const { t } = useTranslation();
  return (
  <section id="hero" className="relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 text-center bg-gradient-to-br from-[#FFF9F0] via-[#FFF4E6] to-[#FFF9F0] overflow-hidden" aria-label="Hero section">
      {/* Sacred geometry animated background (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <circle cx="50%" cy="50%" r="180" fill="#FFD23F" fillOpacity="0.08" />
        <circle cx="50%" cy="50%" r="120" fill="#FF6B35" fillOpacity="0.06" />
        <circle cx="50%" cy="50%" r="60" fill="#4A90E2" fillOpacity="0.04" />
      </svg>
      <div className="relative z-10 w-full">
        <div className="site-container grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6">
        <div className="md:col-span-6 lg:col-span-7 text-center md:text-left">
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-black mb-6 leading-tight">{t('hero.headline')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-6 md:mb-8 max-w-xl">{t('hero.subheadline')}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-6">
            <a
              href="#download"
              data-cursor="black"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#1dbe3a] text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#16a32b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1dbe3a]/30 transition"
              aria-label="Download for Android"
            >
              {/* Android icon */}
              <img src="/assets/images/android.png" alt="" width="18" height="18" className="flex-shrink-0" aria-hidden="true" />
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
              <img src="/assets/images/apple.png" alt="" width="18" height="18" className="flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">iOS</span>
              <span>{t('download.ios') ?? 'Download for iOS'}</span>
            </a>
          </div>
        </div>
        {/* Hero illustration */}
        <div className="md:col-span-6 lg:col-span-5 flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white p-6 lg:p-8">
              <div className="w-full rounded-lg overflow-hidden bg-gray-50">
                <img
                  src="/assets/images/hero.png"
                  alt="Pilgrims and volunteers collaborating at Mahakumbh"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-sm md:text-base text-black">The Mahakumbh of Ujjain.</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}