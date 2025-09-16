// Client-only helper to initialize the visual site cursor behavior.
// This file is dynamically imported from `layout.tsx` so the logic is
// parsed/executed only on user devices after the initial render.
export function initSiteCursor(): () => void {
  if (typeof window === 'undefined' || !document.body) return () => {};

  const cursorMap = [
    { classNames: ['text-black', 'bg-black'], className: 'cursor-orange' },
    { classNames: ['bg-[#4A90E2]', 'text-[#4A90E2]'], className: 'cursor-blue' },
    { classNames: ['bg-[#FF6B35]', 'text-[#FF6B35]', 'bg-[#FFD23F]', 'text-[#FFD23F]'], className: 'cursor-black' },
  ];

  function closestWithClass(start: HTMLElement | null, classNames: string[]): HTMLElement | null {
    let node: HTMLElement | null = start;
    while (node) {
      if (node.classList) {
        for (const cls of classNames) if (node.classList.contains(cls)) return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  let rafId: number | null = null;

  function updateCursorForTarget(target: HTMLElement | null, x?: number, y?: number) {
    const elWithAttr = target ? target.closest('[data-cursor]') as HTMLElement | null : null;
    const siteCursor = document.getElementById('site-cursor');
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

    try {
      const exempt = target && (
        target.closest('input, textarea, select, [contenteditable="true"]') ||
        target.closest('.use-native-cursor')
      );
      if (!exempt) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = '';
      }
    } catch {}
  }

  function handleMouseMove(e: MouseEvent) {
    let target = e.target as HTMLElement | null;
    if (target && target.nodeType !== 1) target = target.parentElement as HTMLElement | null;
    const x = e.clientX;
    const y = e.clientY;
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

  // return cleanup
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (rafId !== null) cancelAnimationFrame(rafId);
    try {
      document.body.classList.remove('use-site-cursor', 'cursor-orange', 'cursor-blue', 'cursor-black', 'cursor-yellow');
      document.body.style.cursor = '';
    } catch {}
  };
}
