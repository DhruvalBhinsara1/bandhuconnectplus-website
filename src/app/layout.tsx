"use client";
import React, { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const cursorMap = [
      // invert mapping: dark text/background -> orange cursor; brand orange/gold -> black cursor
      {
        classNames: ['text-black', 'bg-black'],
        className: 'cursor-orange',
      },
      { classNames: ['bg-[#4A90E2]', 'text-[#4A90E2]'], className: 'cursor-blue' },
      {
        classNames: ['bg-[#FF6B35]', 'text-[#FF6B35]', 'bg-[#FFD23F]', 'text-[#FFD23F]'],
        className: 'cursor-black',
      },
    ];

    function closestWithClass(start: HTMLElement | null, classNames: string[]) {
      let node: HTMLElement | null = start;
      while (node) {
        if (node.classList) {
          for (const cls of classNames) {
            if (node.classList.contains(cls)) return node;
          }
        }
        node = node.parentElement;
      }
      return null;
    }

    // throttle updates via requestAnimationFrame
    let rafId: number | null = null;
  function updateCursorForTarget(target: HTMLElement | null, x?: number, y?: number) {
      // prefer explicit data-cursor attribute on target or ancestors
      const elWithAttr = target ? target.closest('[data-cursor]') as HTMLElement | null : null;
      const siteCursor = typeof document !== 'undefined' ? document.getElementById('site-cursor') : null;
      if (elWithAttr && elWithAttr.dataset && elWithAttr.dataset.cursor) {
        const val = elWithAttr.dataset.cursor;
        document.body.classList.remove('cursor-orange', 'cursor-blue', 'cursor-yellow', 'cursor-black');
        document.body.classList.add(`cursor-${val}`);
        if (siteCursor && typeof x === 'number' && typeof y === 'number') {
          siteCursor.style.left = `${x}px`;
          siteCursor.style.top = `${y}px`;
        }
        return;
      }

      let applied = false;
      for (const { classNames, className } of cursorMap) {
        const el = closestWithClass(target, classNames);
        if (el) {
          document.body.classList.remove('cursor-orange', 'cursor-blue', 'cursor-yellow', 'cursor-black');
          document.body.classList.add(className);
          applied = true;
          break;
        }
      }

      if (!applied) {
        document.body.classList.remove('cursor-blue', 'cursor-yellow', 'cursor-black');
        document.body.classList.add('cursor-orange');
      }

      if (siteCursor && typeof x === 'number' && typeof y === 'number') {
        siteCursor.style.left = `${x}px`;
        siteCursor.style.top = `${y}px`;
      }
    }

    function handleMouseMove(e: MouseEvent) {
      let target = e.target as HTMLElement | null;
      if (target && target.nodeType !== 1) target = target.parentElement as HTMLElement | null;

      const x = (e as MouseEvent).clientX;
      const y = (e as MouseEvent).clientY;

      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateCursorForTarget(target, x, y);
        rafId = null;
      });
    }
    // enable the visual site-cursor and hide native cursor
    document.body.classList.add('use-site-cursor');
    document.body.classList.add('cursor-orange');
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="site-cursor" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
