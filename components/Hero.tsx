import Image from 'next/image';
import type { CSSProperties } from 'react';
import me from '../public/me.jpg';
import { site } from '../lib/site';
import ManilaClock from './ManilaClock';
import PointerArea from './PointerArea';
import Shapes from './Shapes';
import Typewriter from './Typewriter';

const delay = (s: number) => ({ '--delay': `${s}s` }) as CSSProperties;
const roles = ['Software developer.', 'AI automation.', 'Claude Code.', 'n8n workflows.', 'Hermes Agent.', 'DevOps.', 'Deployments.', 'Funnel design.', 'CRM.', 'GoHighLevel.', 'Social media.'];
const facts = ['Computer Science graduate', 'AI & automation', 'Funnels & CRM', 'Cross-time-zone teams'];

export default function Hero() {
  return (
    <PointerArea className="relative overflow-hidden">
      <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-24 pt-32 text-center">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <Shapes />

        <p className="pop-in relative inline-flex items-center gap-2.5 rounded-md border border-line bg-surface/85 px-4 py-2 text-sm font-medium text-muted backdrop-blur" style={delay(0)}>
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
            <span className="relative size-2 rounded-full bg-emerald-500" />
          </span>
          Open to new roles
          <span aria-hidden className="h-3.5 w-px bg-line" />
          <ManilaClock />
        </p>

        <h1 id="hero-title" className="relative mt-8 max-w-6xl font-display text-[clamp(2.6rem,9vw,7.25rem)] font-black leading-[0.92] tracking-[-0.04em] [font-stretch:115%]">
          <span className="pop-in block" style={delay(0.1)}>
            Hi, I&apos;m{' '}
            <span className="relative inline-block size-[0.82em] overflow-hidden rounded-[0.16em] border-[0.05em] border-surface align-[-0.06em] shadow-[0_14px_30px_-10px_rgba(13,27,42,0.6)]">
              <Image src={me} alt="Portrait of Renato Mission" fill priority sizes="140px" className="object-cover" placeholder="blur" />
            </span>{' '}
            Ren.
          </span>
          <span className="pop-in mt-3 block bg-gradient-to-r from-steel via-cobalt to-cobalt-deep bg-clip-text pb-[0.06em] text-transparent dark:from-[#C9D3DF] dark:via-cobalt dark:to-[#7FA6FF]" style={delay(0.25)}>
            <Typewriter phrases={roles} />
          </span>
        </h1>

        <p className="pop-in relative mt-8 max-w-[46ch] text-lg text-muted md:text-xl" style={delay(0.4)}>
          I&apos;m Renato Mission, a software developer in the Philippines who builds with AI. I make business web apps and AI automations with Claude, n8n and Hermes Agent, deploy on Vercel and AWS, design funnels, run CRMs like GoHighLevel and manage social media.
        </p>

        <div className="pop-in relative mt-10 flex flex-wrap justify-center gap-3" style={delay(0.55)}>
          <a href="#work" className="btn bg-ink text-bg shadow-[0_14px_28px_-12px_rgba(13,27,42,0.7)] hover:bg-cobalt hover:text-white">
            View my work
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn border border-ink/30 bg-surface hover:border-ink">
            Download résumé
          </a>
        </div>

        <ul className="pop-in relative mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted" style={delay(0.7)}>
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" className="size-4 text-brass" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a href="#about" aria-label="Scroll to about" className="bob absolute bottom-7 left-1/2 -translate-x-1/2 rounded-md border border-line p-2 text-muted hover:text-ink">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </a>
      </section>
    </PointerArea>
  );
}
