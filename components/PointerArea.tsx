import { useRef, type ReactNode } from 'react';

// Exposes the mouse position as --x/--y (0..1) for CSS-driven tilt, parallax and magnetic effects.
export default function PointerArea({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const set = (x: number, y: number) => {
    ref.current?.style.setProperty('--x', x.toFixed(3));
    ref.current?.style.setProperty('--y', y.toFixed(3));
  };
  return (
    <div
      ref={ref}
      className={`pointer-area ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        set((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => set(0.5, 0.5)}
    >
      {children}
    </div>
  );
}
