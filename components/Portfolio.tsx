import Image from 'next/image';
import { projects } from '../lib/site';
import PointerArea from './PointerArea';

const accents = ['bg-cobalt', 'bg-brass', 'bg-steel'];

// Cards are sticky at staggered offsets, so each one slides over the last as you scroll.
export default function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-page px-4 py-24 sm:px-8 md:py-32">
      <h2 id="work-title" className="h2">
        Selected work
      </h2>
      <p className="mt-4 max-w-[48ch] text-lg text-muted">Web apps and automations I&apos;ve built for small businesses in the Philippines, with live demos and source code where they&apos;re public.</p>

      <ul className="mt-14">
        {projects.map((p, i) => (
          <li key={p.title} className="sticky pb-10 md:pb-16" style={{ top: `calc(6rem + ${i * 1.25}rem)` }}>
            <article className="relative grid items-center gap-8 overflow-hidden rounded-2xl border border-navy-3 bg-gradient-to-br from-navy-2 to-navy p-6 text-[#E6EAF0] shadow-[0_40px_70px_-35px_rgba(13,27,42,0.8)] sm:p-10 md:grid-cols-12 md:gap-12 md:p-12">
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${accents[i % accents.length]}`} />
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl font-extrabold tracking-tight [font-stretch:115%] md:text-[2.75rem] md:leading-none">{p.title}</h3>
                <p className="mt-4 text-lg text-[#B8C4D3]">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn bg-cobalt text-white hover:bg-cobalt-deep">
                      Visit live site<span className="sr-only">: {p.title}</span>
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn border border-white/25 hover:border-white">
                      Read the code<span className="sr-only">: {p.title}</span>
                    </a>
                  )}
                </div>
              </div>
              <PointerArea className="tilt md:col-span-7">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
                  <Image src={p.image} alt={`Screenshot of ${p.title}`} sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className={`w-full ${p.contain ? 'h-auto' : 'aspect-[16/10] object-cover object-top'}`} />
                </div>
              </PointerArea>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
