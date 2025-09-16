"use client";
import { useTranslation } from "../lib/i18n";

export default function Features() {
  const { t } = useTranslation();
  return (
  <section id="features" className="py-24 lg:py-32 bg-white" aria-label="Features section">
      <div className="site-container">
        <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">{t('features.title')}</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 features-grid">
          {/** EMERGENCY AID REQUEST FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            {/* Emergency Aid Request Image */}
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/emergency-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/emergency-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/emergency-768.jpeg" alt="Emergency Aid Request" width={180} height={96} className="max-w-full max-h-full object-contain" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-black">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.emergency.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2"></span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.emergency.desc')}</p>
          </div>

          {/** REAL-TIME VOLUNTEER TRACKING FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/tracking-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/tracking-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/tracking-768.jpeg" alt="Real-time Volunteer Tracking" width={180} height={96} className="max-w-full max-h-full object-contain" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><path d="M20 13a7 7 0 0 1 7 7c0 4.5-7 10-7 10s-7-5.5-7-10a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#fff"/></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.tracking.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2"></span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.tracking.desc')}</p>
          </div>

          {/** MULTI-LANGUAGE SUPPORT FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/language-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/language-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/language-768.jpeg" alt="Multi-language Support" width={180} height={96} className="max-w-full max-h-full object-contain" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-black">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><text x="50%" y="55%" textAnchor="middle" fill="#000000" fontSize="12" fontFamily="Arial" dy=".3em">अ</text></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.multi.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2">{t('feature.multi.title') === 'Multi-language Support' ? 'Coming Soon' : ''}</span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.multi.desc')}</p>
          </div>

          {/** OFFLINE MAPS FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/map-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/map-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/map-768.jpeg" alt="Offline Maps" width={180} height={96} className="max-w-full max-h-full object-contain" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-black">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><rect x="12" y="14" width="16" height="12" rx="2" fill="#fff"/><path d="M12 20h16" stroke="#FF6B35" strokeWidth="2"/></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.offline.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2">{t('feature.offline.title') === 'Offline Maps' ? 'Coming Soon' : ''}</span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.offline.desc')}</p>
          </div>

          {/** COMMUNITY CHAT FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/chat-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/chat-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/chat-768.jpeg" alt="Community Chat" width={180} height={96} className="max-w-full max-h-full object-contain invert-colors" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue text-white">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><rect x="13" y="15" width="14" height="8" rx="2" fill="#fff"/><path d="M13 23l-2 4" stroke="#4A90E2" strokeWidth="2"/><circle cx="17" cy="19" r="1" fill="#4A90E2"/><circle cx="21" cy="19" r="1" fill="#4A90E2"/><circle cx="25" cy="19" r="1" fill="#4A90E2"/></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.chat.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2">{t('feature.chat.title') === 'Community Chat' ? 'Coming Soon' : ''}</span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.chat.desc')}</p>
          </div>

          {/** SAFE ZONE ALERTS FEATURE */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-56 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <div className="bg-white p-4 rounded-lg w-full h-full flex items-center justify-center">
                <picture>
                  <source srcSet="/assets/images/optimized/safe-768.avif" type="image/avif" />
                  <source srcSet="/assets/images/optimized/safe-768.webp" type="image/webp" />
                  <img src="/assets/images/optimized/safe-768.jpeg" alt="Safe Zone Alerts" width={180} height={96} className="max-w-full max-h-full object-contain invert-colors" loading="lazy" />
                </picture>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><rect x="15" y="15" width="10" height="10" rx="2" fill="#fff"/><path d="M20 18v4" stroke="#FF6B35" strokeWidth="2"/><circle cx="20" cy="22" r="1" fill="#FF6B35"/></svg>
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-black">{t('feature.safe.title')}</h3>
                <span className="inline-block bg-accent text-black px-2 py-1 rounded-full text-xs font-semibold mt-2">{t('feature.safe.title') === 'Safe Zone Alerts' ? 'Coming Soon' : ''}</span>
              </div>
            </div>
            <p className="text-black text-sm mt-auto">{t('feature.safe.desc')}</p>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .features-grid .feature-card {
            min-height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}