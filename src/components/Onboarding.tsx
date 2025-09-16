import React from "react";
import Link from 'next/link';

type Theme = "dark" | "light";

interface OnboardingProps {
  theme?: Theme;
  className?: string;
}

const PilgrimIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="8" r="3" fill="#FFD166" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VolunteerIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="6" y="4" width="12" height="12" rx="3" fill="#06D6A0" />
    <path d="M12 16v4" stroke="#073B4C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 20h6" stroke="#073B4C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Onboarding({ theme = "light", className = "" }: OnboardingProps) {
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-[#101214] text-white" : "bg-[#FCF6EC] text-[#0F172A]";
  const cardBg = isDark ? "bg-[#0F1726]/[0.06] backdrop-blur-sm" : "bg-white";

  return (
    <section
      aria-labelledby="onboarding-heading"
      className={`w-full ${containerBg} py-16 flex items-center justify-center ${className}`}
    >
      <div className="max-w-6xl w-full px-6">
        <div className="text-center mb-8">
          <h1 id="onboarding-heading" className="text-2xl md:text-5xl font-bold">
            Get started with BandhuConnect+
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-90 max-w-3xl mx-auto">
            Choose how you&apos;d like to participate — find help or join our volunteers. Both paths are fast and secure.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Pilgrim Card */}
          <article
            className={`w-full md:w-1/2 max-w-md ${cardBg} rounded-xl shadow-lg p-6 md:p-8 border border-transparent hover:shadow-2xl transition-shadow duration-200`}
            role="group"
            aria-labelledby="pilgrim-title"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-[#FFF3CD]">
                <PilgrimIcon />
              </div>
              <div>
                <h3 id="pilgrim-title" className="text-lg font-semibold">
                  Pilgrim Onboarding
                </h3>
                <p className="mt-1 text-sm opacity-80">Quickly request help or connect with nearby services.</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium shadow-sm text-[#0F172A] bg-[#FFD166] hover:bg-[#ffcf5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD166]"
                role="button"
                aria-label="Start pilgrim onboarding"
              >
                Get Help
              </a>

              <Link href="#faq" className="text-sm opacity-80 underline hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD166]" aria-label="Learn more and view FAQs">
                Learn more
              </Link>
            </div>
          </article>

          {/* Volunteer Card */}
          <article
            className={`w-full md:w-1/2 max-w-md ${cardBg} rounded-xl shadow-lg p-6 md:p-8 border border-transparent hover:shadow-2xl transition-shadow duration-200`}
            role="group"
            aria-labelledby="volunteer-title"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-[#DFF7EE]">
                <VolunteerIcon />
              </div>
              <div>
                <h3 id="volunteer-title" className="text-lg font-semibold">
                  Volunteer Onboarding
                </h3>
                <p className="mt-1 text-sm opacity-80">Sign up, verify, and start helping pilgrims in need near you.</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium shadow-sm text-white bg-[#06D6A0] hover:bg-[#05c58b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06D6A0]"
                role="button"
                aria-label="Start volunteer onboarding"
              >
                Join as Volunteer
              </a>

              <Link href="#faq" className="text-sm opacity-80 underline hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06D6A0]" aria-label="View frequently asked questions">
                Volunteer FAQ
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
