import { stack } from '../lib/site';

const items = Object.values(stack).flat();

// Decorative band; the same list is readable in the stack section.
export default function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-7 font-display text-[clamp(1.5rem,3.4vw,2.5rem)] font-extrabold uppercase tracking-tight [font-stretch:125%]">{t}</span>
          <span className="size-2.5 rotate-45 bg-brass" />
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden className="ribbon overflow-hidden border-y border-navy-3 bg-navy py-6 text-[#E6EAF0]">
      <div className="ribbon-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
