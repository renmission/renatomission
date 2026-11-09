const nav = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Stack', '#stack'],
  ['FAQ', '#questions'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5">
      <div className="relative mx-auto flex max-w-3xl items-center justify-between gap-4 overflow-hidden rounded-xl border border-line bg-surface/80 py-2 pl-5 pr-2 shadow-[0_12px_32px_-14px_rgba(13,27,42,0.35)] backdrop-blur-xl">
        <a href="#top" className="font-display text-base font-extrabold tracking-tight [font-stretch:120%]">
          RM<span className="text-brass">.</span>
        </a>
        <nav aria-label="Sections" className="hidden sm:block">
          <ul className="flex gap-1 font-display text-sm font-semibold">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="rounded-md px-3 py-2 text-muted transition-colors hover:bg-ink/5 hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn bg-cobalt px-5 py-2.5 text-white hover:bg-cobalt-deep">
          Hire me
        </a>
        <span aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cobalt to-brass" />
      </div>
    </header>
  );
}
