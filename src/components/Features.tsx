"use client";
import { useTranslation } from "../lib/i18n";

export default function Features() {
  const { t } = useTranslation();
  return (
  <section id="features" className="py-24 lg:py-32 bg-white" aria-label="Features section">
      <div className="site-container">
        <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">{t('features.title')}</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 features-grid">
          {/** Card pattern: consistent size, padding, and icon */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            {/* Placeholder image - replace with real image later */}
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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

          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start h-full feature-card" role="listitem">
            <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4 flex items-center justify-center" aria-hidden="true">
              <svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect width="180" height="96" rx="8" fill="#F3F4F6" />
                <g transform="translate(16,18)" fill="#E5E7EB">
                  <rect x="0" y="0" width="44" height="44" rx="6" />
                  <rect x="54" y="0" width="110" height="44" rx="6" />
                  <rect x="0" y="52" width="164" height="12" rx="6" />
                </g>
              </svg>
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
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}