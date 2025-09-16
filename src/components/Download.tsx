"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "../lib/i18n";

export default function Download() {
  const { t } = useTranslation();
  const [isHighContrast, setIsHighContrast] = useState(false);
  
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
    <section id="download" className="py-16 bg-white" aria-label="Download section">
      <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">{t('download.title') ?? 'Download BandhuConnect+ App'}</h2>
      <div className="flex flex-col items-center gap-4">
        {/* App store badges as SVG */}
        <div className="flex gap-4">
          <a href="#" data-cursor="black" className="flex items-center gap-2 bg-[#1dbe3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#16a32b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1dbe3a]/30 transition" aria-label="Download for Android">
            <picture>
              <source srcSet="/assets/images/optimized/android-320.avif" type="image/avif" />
              <source srcSet="/assets/images/optimized/android-320.webp" type="image/webp" />
              <img src="/assets/images/optimized/android-320.jpeg" alt="" width={24} height={24} className={`flex-shrink-0 ${isHighContrast ? 'android-logo-hc' : ''}`} aria-hidden />
            </picture>
            {t('download.android') ?? 'Android'}
          </a>
          <a href="#" data-cursor="black" className="flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1741a6] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb]/30 transition" aria-label="Download for iOS">
            <picture>
              <source srcSet="/assets/images/optimized/apple-320.avif" type="image/avif" />
              <source srcSet="/assets/images/optimized/apple-320.webp" type="image/webp" />
              <img src="/assets/images/optimized/apple-320.jpeg" alt="" width={24} height={24} className="flex-shrink-0" aria-hidden />
            </picture>
            {t('download.ios') ?? 'iOS'}
          </a>
        </div>
        <div className="flex flex-col items-center mt-4">
          <picture>
            <source srcSet="/assets/images/optimized/donation_qr-480.avif" type="image/avif" />
            <source srcSet="/assets/images/optimized/donation_qr-480.webp" type="image/webp" />
            <img src="/assets/images/optimized/donation_qr-480.jpeg" alt="Donation QR Code" width={224} height={224} loading="lazy" className="w-56 h-56 object-contain rounded-lg shadow-md border border-gray-200" />
          </picture>
          <span className="text-xs text-gray-500 mt-1">Scan to support BandhuConnect+</span>
        </div>
  <p className="text-sm text-gray-700 mt-2 italic text-center sm:text-left">{t('download.inprogress') ?? 'App build is in progress. The app will be available for download soon.'}</p>
        <p className="text-black mt-2 font-medium">{t('download.support') ?? 'Supported devices: Android & iOS | Free to use'}</p>
        <div className="mt-2 text-sm text-black">{t('download.requirements') ?? 'System requirements: Android 8.0+, iOS 13+'}</div>
      </div>
    </section>
  );
}