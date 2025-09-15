"use client";
import { useTranslation } from "../lib/i18n";

export default function TrustSafety() {
  const { t } = useTranslation();
  return (
  <section id="trust" className="py-24 lg:py-32 bg-white" aria-label="Trust & Safety section">
      <div className="site-container">
        <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">{t('trust.title') ?? 'Security & Trust Framework'}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: planned badges */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#FF6B35"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="text-sm text-black font-semibold">{t('trust.verification') ?? 'Volunteer Verification (Planned)'}</span>
            </div>

            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#FFD23F"/><path d="M12 8v4l3 2" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="text-sm text-black font-semibold">{t('trust.support') ?? '24/7 Support System (Planned)'}</span>
            </div>

            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#4A90E2"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/><path d="M12 12v2" stroke="#4A90E2" strokeWidth="2"/></svg>
              </span>
              <span className="text-sm text-black font-semibold">{t('trust.privacy') ?? 'Privacy & Data Protection (Planned)'}</span>
            </div>
          </div>

          {/* Middle: message / quote */}
          <div className="bg-white shadow rounded-lg p-8 min-h-[200px]">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold text-black" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><path d="M20 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="#fff"/></svg>
              </span>
              <div>
                <blockquote className="italic text-black text-left mb-2 font-bold">{t('trust.message') ?? 'Our development team is implementing robust security measures and trust protocols to ensure safe interactions between pilgrims and volunteers.'}</blockquote>
                <span className="text-sm text-black font-semibold">{t('trust.signature') ?? '— BandhuConnect+ Development Team'}</span>
              </div>
            </div>
          </div>

          {/* Right: protocol summary */}
          <div className="bg-white shadow rounded-lg p-8 min-h-[200px]">
            <h3 className="font-bold text-lg mb-3 text-black inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#4A90E2"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/><path d="M12 12v2" stroke="#4A90E2" strokeWidth="2"/></svg>
              </span>
              {t('trust.framework') ?? 'Emergency Response Framework'}
            </h3>
            <ul className="list-disc pl-5 text-black text-sm font-medium">
              <li>{t('trust.bullet.encryption') ?? 'Data encryption and privacy policy implementation'}</li>
              <li>{t('trust.bullet.verification') ?? 'Volunteer background verification system'}</li>
              <li>{t('trust.bullet.support') ?? '24/7 emergency support coordination'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}