import { useEffect, useState } from 'react';

// Types each phrase, holds, deletes, then moves to the next. Reduced motion: shows the first phrase only.
export default function Typewriter({ phrases }: { phrases: string[] }) {
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
      <span aria-hidden>
        {phrases[i].slice(0, len)}
        <span className="ml-[0.04em] inline-block h-[0.8em] w-[0.06em] translate-y-[0.06em] animate-pulse bg-cobalt motion-reduce:hidden" />
      </span>
    </>
  );
}
