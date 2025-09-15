export default function Hero() {
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
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-black mb-6 leading-tight">Your Trusted Companion for Mahakumbh Mela</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-6 md:mb-8 max-w-xl">Connecting pilgrims and volunteers for a safe, spiritual, and seamless experience at Mahakumbh, Ujjain.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-6">
            <a
              href="#download"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#1dbe3a] text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#16a32b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1dbe3a]/30 transition"
              aria-label="Download for Android"
            >
              {/* Android icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M5 8.5c0 0.828 0.672 1.5 1.5 1.5h11c0.828 0 1.5-0.672 1.5-1.5V7H5v1.5z" fill="#fff" opacity="0.0" />
                <path d="M7.5 7.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 11.5v6A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5v-6" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">Android</span>
              <span>Download for Android</span>
            </a>

            <a
              href="#download"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#1f6feb] text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#145ec7] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1f6feb]/30 transition"
              aria-label="Download for iOS"
            >
              {/* Apple icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M16.365 1.43c-.695.84-1.692 1.47-2.74 1.56-.06-.73.14-1.51.54-2.13-.89.05-1.81.55-2.43 1.21-.9.92-1.28 2.49-.92 3.77C9.8 6.77 8.7 7.2 7.5 7.2c-1.18 0-2.25-.49-3.1-1.24C2.6 9.03 3.12 12.46 5.3 14.12c1.24.95 2.74 1.41 4.4 1.41 1.25 0 2.38-.25 3.35-.75 1.03-.54 1.94-1.33 2.66-2.3.82-1.07 1.22-2.33 1.22-3.68 0-1.16-.28-2.2-.8-3.09-.1-.17-.18-.34-.28-.5-.32.08-.64.12-.96.12-.38 0-.76-.05-1.13-.15z" fill="rgba(255,255,255,0.95)" />
              </svg>
              <span className="sr-only">iOS</span>
              <span>Download for iOS</span>
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
              <div className="mt-4 text-sm md:text-base text-gray-500">The Mahakumbh of Ujjain.</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}