"use client";
import React, { useState } from "react";
import { useTranslation } from "../lib/i18n";

export default function FAQ() {
  const { t } = useTranslation();
  const faqs = [
    {
      q: t("faq.q1.title"),
      a: t("faq.q1.answer"),
    },
    {
      q: t("faq.q2.title"),
      a: t("faq.q2.answer"),
    },
    {
      q: t("faq.q3.title"),
      a: t("faq.q3.answer"),
    },
    {
      q: t("faq.q4.title"),
      a: t("faq.q4.answer"),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="site-container py-16" data-cursor="black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t("faq.title")}</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-white"
              >
                <span className="font-medium">{item.q}</span>
                <span className="ml-4 text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div
                className={`px-4 py-3 bg-gray-50 text-gray-700 ${openIndex === i ? "block" : "hidden"}`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
