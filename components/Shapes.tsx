import type { CSSProperties } from 'react';

type Shape = {
  kind: 'sphere' | 'ring' | 'bar' | 'cube' | 'nut';
  className: string; // position + size
  d: number; // parallax depth in px
  t: string; // float duration
  scatter: [string, string, string]; // where it drifts on scroll: x, y, rotation
};

// Hero decoration. Positions are % of the hero so they frame the headline at any width.
const shapes: Shape[] = [
  { kind: 'sphere', className: 'left-[5%] top-[16%] size-16 md:size-24', d: 40, t: '6s', scatter: ['-30vw', '-10vh', '-40deg'] },
  { kind: 'ring', className: 'right-[6%] top-[12%] size-24 md:size-32', d: 60, t: '7s', scatter: ['25vw', '-15vh', '90deg'] },
  { kind: 'cube', className: 'left-[10%] bottom-[14%] hidden sm:block', d: 30, t: '6.5s', scatter: ['-20vw', '30vh', '60deg'] },
  { kind: 'bar', className: 'right-[9%] bottom-[18%] h-10 w-32 rotate-[-28deg] md:h-12 md:w-44', d: 50, t: '5.5s', scatter: ['30vw', '25vh', '-60deg'] },
  { kind: 'nut', className: 'left-[29%] top-[12%] hidden size-12 md:block', d: 80, t: '5s', scatter: ['10vw', '-30vh', '180deg'] },
];

function Body({ kind }: { kind: Shape['kind'] }) {
  if (kind === 'cube')
    return (
      <span className="metal-cube relative block size-[var(--s)]" style={{ '--s': '4.25rem' } as CSSProperties}>
        {Array.from({ length: 6 }, (_, i) => <span key={i} />)}
      </span>
    );
  if (kind === 'nut')
    return (
      <svg viewBox="0 0 24 24" className="size-full drop-shadow-[0_12px_14px_rgba(13,27,42,0.45)]">
        <defs>
          <linearGradient id="nut-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1f4f8" />
            <stop offset=".55" stopColor="#9aa8b8" />
            <stop offset="1" stopColor="#4a5868" />
          </linearGradient>
        </defs>
        <path fill="url(#nut-g)" fillRule="evenodd" d="M12 1.5l9.1 5.25v10.5L12 22.5l-9.1-5.25V6.75L12 1.5zm0 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    );
  return <span className={`metal-${kind} block size-full`} />;
}

export default function Shapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {shapes.map((s) => (
        <div
          key={s.kind}
          className={`shape scatter absolute ${s.className}`}
          style={{ '--d': s.d, '--sx': s.scatter[0], '--sy': s.scatter[1], '--sr': s.scatter[2] } as CSSProperties}
        >
          <div className="float size-full" style={{ '--t': s.t } as CSSProperties}>
            <Body kind={s.kind} />
          </div>
        </div>
      ))}
    </div>
  );
}
