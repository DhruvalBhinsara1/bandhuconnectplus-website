"use client";
import React, { useEffect } from "react";
import { I18nProvider } from "../lib/i18n";
import LoadingScreen from "../components/LoadingScreen";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // restore high-contrast preference if present
    try {
      const hc = typeof window !== 'undefined' ? window.localStorage.getItem('highContrast') : null;
      if (hc === 'true') {
        document.body.classList.add('high-contrast');
        // Also update button states and aria-pressed for screen readers
        const desktopButton = document.getElementById('toggle-high-contrast');
        const mobileButton = document.getElementById('toggle-high-contrast-mobile');
        if (desktopButton) {
          desktopButton.classList.add('high-contrast-active');
          desktopButton.setAttribute('aria-pressed', 'true');
        }
        if (mobileButton) {
          mobileButton.classList.add('high-contrast-active');
          mobileButton.setAttribute('aria-pressed', 'true');
        }
      } else {
        // ensure aria-pressed defaults to false if not set
        const desktopButton = document.getElementById('toggle-high-contrast');
        const mobileButton = document.getElementById('toggle-high-contrast-mobile');
        if (desktopButton) desktopButton.setAttribute('aria-pressed', 'false');
        if (mobileButton) mobileButton.setAttribute('aria-pressed', 'false');
      }
    } catch {}

    // site-cursor behavior and class mapping moved to `src/lib/siteCursor` to reduce initial bundle size

    // Defer site-cursor initialization to a dynamically imported module to
    // reduce initial bundle size. The module returns a cleanup function.
    let cleanup: (() => void) | null = null;
    import('../lib/siteCursor').then((mod) => {
      try {
        cleanup = mod.initSiteCursor();
      } catch {
        cleanup = null;
      }
    }).catch(() => {
      // silent failure; cursor is an enhancement only
    });
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <div id="site-cursor" aria-hidden="true"></div>
  <LoadingScreen />
        {/* ARIA live region for announcements (language changes already announced in I18nProvider) */}
        <div id="a11y-announcer" aria-live="polite" className="sr-only"></div>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
