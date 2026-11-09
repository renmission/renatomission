import { useEffect, useState } from 'react';

// Types each phrase, holds, deletes, then moves to the next. Reduced motion: shows the first phrase only.
// className styles the typed line; bg-clip-text must sit there, since Chrome mis-paints it through a transformed child.
export default function Typewriter({ phrases, className = '' }: { phrases: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [len, setLen] = useState(phrases[0].length); // full text on first render, so SSR matches
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const full = phrases[i].length;
    const done = !deleting && len === full;
    const t = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (deleting && len === 0) {
          setDeleting(false);
          return setI((i + 1) % phrases.length);
        }
        setLen(len + (deleting ? -1 : 1));
      },
      done ? 1800 : deleting ? 40 : 85,
    );
    return () => clearTimeout(t);
  }, [i, len, deleting, phrases]);

  return (
    <>
      <span className="sr-only">{phrases[0]}</span>
      {/* All phrases sit invisibly in one grid cell so the box fits the tallest. The typed line is
          centered with a transform, not text-align, so its text never moves in layout (no CLS). */}
      <span aria-hidden className="grid grid-cols-1">
        {phrases.map((p) => (
          <span key={p} className={`invisible [grid-area:1/1] ${className}`}>
            {p}
          </span>
        ))}
        <span className={`relative left-1/2 w-max max-w-full -translate-x-1/2 [grid-area:1/1] ${className}`}>
          {phrases[i].slice(0, len)}
          <span className="ml-[0.04em] inline-block h-[0.8em] w-[0.06em] translate-y-[0.06em] animate-pulse bg-cobalt motion-reduce:hidden" />
        </span>
      </span>
    </>
  );
}
