"use client";
import { useTranslation } from "../lib/i18n";

export default function CommunityImpact() {
  const { t } = useTranslation();
  return (
  <section id="community" className="py-24 lg:py-32 bg-[#4A90E2]/10" aria-label="Community Impact section">
      <div className="site-container">
        <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">{t('community.title') ?? 'Community Impact Goals'}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column: targets */}
          <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow p-6 min-w-[220px] min-h-[120px]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-black"> 
                  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="#FFD23F"/><path d="M18 9a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c-5 0-10 3-10 6v3h20v-3c0-3-5-6-10-6z" fill="#FF6B35"/></svg>
                </span>
                <span className="font-semibold text-black">{t('community.target.pilgrims') ?? 'Target: 10,000+ Pilgrims Helped'}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 min-h-[120px]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white"> 
                  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="#4A90E2"/><rect x="12" y="12" width="12" height="12" rx="2" fill="#FFD23F"/></svg>
                </span>
                <span className="font-semibold text-black">{t('community.target.volunteers') ?? 'Target: 2,000+ Volunteers'}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 min-h-[120px]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white"> 
                  <svg width="18" height="18" viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="#FF6B35"/><rect x="10" y="10" width="16" height="16" rx="3" fill="#FFD23F"/></svg>
                </span>
                <span className="font-semibold text-black">{t('community.target.events') ?? 'Target: 50+ Events Supported'}</span>
              </div>
            </div>
          </div>

          {/* Middle column: status / message */}
          <div className="bg-white rounded-lg shadow p-8 min-h-[220px]">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-black" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 44 44" fill="none" aria-hidden="true"><circle cx="22" cy="22" r="22" fill="#FFD23F"/><path d="M22 14a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 13c-5 0-10 3-10 6v3h20v-3c0-3-5-6-10-6z" fill="#fff"/></svg>
              </span>
              <div>
                <blockquote className="italic text-black text-left mb-2">{t('community.message') ?? "We're currently in development phase, building the foundation for safe and connected pilgrim experiences at Mahakumbh Mela."}</blockquote>
                <span className="text-sm text-black font-semibold">{t('community.signature') ?? '— BandhuConnect+ Team'}</span>
              </div>
            </div>
          </div>

          {/* Right column: map / roadmap */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-4 min-h-[260px]">
            <h3 className="font-bold text-lg">{t('community.map.title') ?? 'Interactive Impact Map'}</h3>
            <p className="text-black text-sm">{t('community.map.desc') ?? 'Coming soon - Track volunteer locations and safe zones in real-time'}</p>
            <div className="mt-4 bg-gray-50 rounded border border-gray-200 h-36 flex items-center justify-center">Map placeholder</div>
            <h4 className="font-bold mt-4">{t('community.roadmap.title') ?? 'Development Roadmap'}</h4>
            <p className="text-black text-sm">{t('community.roadmap.desc') ?? 'Planning partnerships with local organizers to establish safe-zone booths and volunteer coordination centers across the Mela grounds.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}