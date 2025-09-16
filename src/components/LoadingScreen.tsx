"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // hide after a short delay so the animation is visible on fast connections
    const t = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex items-center gap-4">
        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFD23F] animate-pulse-shadow shadow-2xl flex items-center justify-center overflow-hidden">
          <Link href="/" onClick={() => setShow(false)} aria-label="Go to homepage">
            <picture>
              <source srcSet="/assets/images/optimized/logo-768.avif" type="image/avif" />
              <source srcSet="/assets/images/optimized/logo-768.webp" type="image/webp" />
              {/* Use the transparent PNG fallback without a white background so alpha shows through */}
              <img src="/assets/images/logo.png" alt="BandhuConnect+" loading="eager" className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain" />
            </picture>
          </Link>
        </div>
      </div>
      <style>{`
        .animate-pulse-shadow { animation: pulseShadow 1.2s infinite ease-in-out; }
        @keyframes pulseShadow { 0% { transform: translateY(0) scale(1); box-shadow: 0 6px 30px rgba(0,0,0,0.08);} 50% { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 50px rgba(0,0,0,0.12);} 100% { transform: translateY(0) scale(1); box-shadow: 0 6px 30px rgba(0,0,0,0.08);} }
      `}</style>
    </div>
  );
}
