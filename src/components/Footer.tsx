"use client";
import { useTranslation } from "../lib/i18n";

export default function Footer() {
  const { t } = useTranslation();
  return (
  <footer className="bg-black text-white py-8 mt-8" aria-label="Footer">
  <div className="site-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">{t('footer.quick') ?? 'Quick Links'}</h4>
          <ul className="space-y-1">
            <li><a href="#features" data-cursor="orange" className="hover:underline">{t('features.title') ?? 'Features'}</a></li>
            <li><a href="#how-it-works" data-cursor="orange" className="hover:underline">{t('how.title') ?? 'How It Works'}</a></li>
            <li><a href="#trust" data-cursor="orange" className="hover:underline">{t('trust.title') ?? 'Trust & Safety'}</a></li>
            <li><a href="#community" data-cursor="orange" className="hover:underline">{t('community.title') ?? 'Community Impact'}</a></li>
            <li><a href="#download" data-cursor="orange" className="hover:underline">{t('download.title') ?? 'Download'}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Social Media</h4>
          <ul className="flex gap-4 mt-2">
            <li>
              <a href="#" data-cursor="orange" aria-label="Instagram" className="hover:opacity-80">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="6" fill="#FFD23F"/><circle cx="14" cy="14" r="6" fill="#FF6B35"/><circle cx="20" cy="8" r="2" fill="#4A90E2"/></svg>
              </a>
            </li>
            <li>
              <a href="#" data-cursor="orange" aria-label="Twitter" className="hover:opacity-80">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="6" fill="#4A90E2"/><path d="M8 18c4 0 8-4 8-8v-1l2 1c-1 2-3 3-5 3" stroke="#FFD23F" strokeWidth="2"/></svg>
              </a>
            </li>
            <li>
              <a href="#" data-cursor="orange" aria-label="Facebook" className="hover:opacity-80">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="6" fill="#FF6B35"/><rect x="12" y="10" width="4" height="8" fill="#fff"/><rect x="14" y="14" width="2" height="4" fill="#4A90E2"/></svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">{t('footer.contact') ?? 'Contact Info'}</h4>
          <ul className="space-y-1">
            <li>Email: dhruvalbhinsara460@gmail.com</li>
            <li>Phone: +91-9510517172</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">{t('footer.news') ?? 'Newsletter Signup'}</h4>
          <form className="flex flex-col gap-2" aria-label="Newsletter Signup">
            <input type="email" placeholder="Your email" className="px-2 py-1 rounded text-black bg-white" required aria-label="Email address" />
            <button type="submit" data-cursor="black" className="bg-[#FF6B35] text-white px-4 py-2 rounded font-semibold">{t('footer.subscribe') ?? 'Subscribe'}</button>
            <span className="text-xs mt-1 text-black">{t('footer.privacy') ?? 'We respect your privacy.'}</span>
          </form>
        </div>
      </div>
  <div className="text-center text-xs mt-8 text-black bg-white py-2">{t('footer.copyright') ?? `© ${new Date().getFullYear()} BandhuConnect+. All rights reserved.`}</div>
    </footer>
  );
}