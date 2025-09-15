"use client";
import React from "react";
import type { Locale } from "../lib/i18n";
import { useTranslation } from "../lib/i18n";

export default function LanguageSelector() {
  const { locale, setLocale } = useTranslation();
  return (
    <select
      value={locale}
  onChange={(e) => setLocale(e.target.value as Locale)}
      className="ml-2 border rounded px-2 py-1 text-sm"
      aria-label="Select language"
      data-cursor="black"
    >
      <option value="en">EN</option>
      <option value="hi">HI</option>
      <option value="bn">BN</option>
      <option value="mr">MR</option>
      <option value="te">TE</option>
      <option value="ta">TA</option>
      <option value="gu">GU</option>
      <option value="ur">UR</option>
      <option value="kn">KN</option>
      <option value="or">OR</option>
      <option value="ml">ML</option>
    </select>
  );
}
