"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Locale =
  | "en"
  | "hi"
  | "bn"
  | "mr"
  | "te"
  | "ta"
  | "gu"
  | "ur"
  | "kn"
  | "or"
  | "ml";

type Translations = Record<string, string>;

const DEFAULT_LOCALE: Locale = "en";

const I18nContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (k) => k,
});

function loadLocaleData(locale: Locale): Promise<Translations> {
  // dynamic import of JSON files under ../locales
  switch (locale) {
    case "hi":
      return import("../locales/hi/common.json").then((m) => m.default);
    case "bn":
      return import("../locales/bn/common.json").then((m) => m.default);
    case "mr":
      return import("../locales/mr/common.json").then((m) => m.default);
    case "te":
      return import("../locales/te/common.json").then((m) => m.default);
    case "ta":
      return import("../locales/ta/common.json").then((m) => m.default);
    case "gu":
      return import("../locales/gu/common.json").then((m) => m.default);
    case "ur":
      return import("../locales/ur/common.json").then((m) => m.default);
    case "kn":
      return import("../locales/kn/common.json").then((m) => m.default);
    case "or":
      return import("../locales/or/common.json").then((m) => m.default);
    case "ml":
      return import("../locales/ml/common.json").then((m) => m.default);
    default:
      return import("../locales/en/common.json").then((m) => m.default);
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [messages, setMessages] = useState<Translations>({});

  useEffect(() => {
    let mounted = true;
    loadLocaleData(locale).then((data) => {
      if (!mounted) return;
      setMessages(data || {});
    });
    return () => {
      mounted = false;
    };
  }, [locale]);

  useEffect(() => {
    // read persisted locale from localStorage if present
    try {
      const saved = window.localStorage.getItem("locale") as Locale | null;
      if (saved) setLocaleState(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try {
      window.localStorage.setItem("locale", l);
    } catch (e) {}
  }

  function t(key: string) {
    return messages[key] ?? key;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
