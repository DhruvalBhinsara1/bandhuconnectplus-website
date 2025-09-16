"use client";

import React from "react";
import { useTranslation } from "../lib/i18n";

const features = [
  {
    titleKey: "why.feature1.title",
    descKey: "why.feature1.desc",
  },
  {
    titleKey: "why.feature2.title",
    descKey: "why.feature2.desc",
  },
  {
    titleKey: "why.feature3.title",
    descKey: "why.feature3.desc",
  },
];

export default function WhyBandhuConnect() {
  const { t } = useTranslation();
  return (
    <section className="why-section bg-gray-50 py-16">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <h2 className="why-title text-center text-4xl font-extrabold leading-tight mb-10">
          {t('why.title') ?? 'Why BandhuConnect+'}
        </h2>
        <div className="why-bandhu-grid grid grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={feature.titleKey} className="why-col flex flex-col items-start text-left min-h-[180px] relative px-3">
              <h3 className="why-col-title text-lg font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="why-col-desc text-base text-gray-700">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
