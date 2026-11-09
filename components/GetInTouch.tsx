import { site } from '../lib/site';
import CopyEmail from './CopyEmail';

const links = [
  ['GitHub', site.social.github],
  ['LinkedIn', site.social.linkedin],
  ['Twitter', site.social.twitter],
  ['Résumé', site.resume],
];

export default function GetInTouch() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-page overflow-hidden rounded-3xl bg-gradient-to-br from-navy-3 via-navy to-navy px-6 py-20 text-[#E6EAF0] sm:px-12 md:py-28">
        <div aria-hidden className="grid-bg absolute inset-0 opacity-50 [--ink:230_234_240]" />
        <span aria-hidden className="metal-sphere absolute -right-8 -top-10 size-36 md:size-52" />
        <span aria-hidden className="metal-ring absolute -bottom-14 right-[18%] hidden size-40 md:block" />
        <div className="relative">
          <h2 id="contact-title" className="h2">
            Let&apos;s work together
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg text-[#B8C4D3] md:text-xl">
            Have a job opportunity or a project you&apos;d like to discuss? Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 block break-all font-display text-[clamp(1.4rem,5vw,4rem)] font-extrabold leading-tight tracking-[-0.03em] text-white underline decoration-brass/50 decoration-2 underline-offset-[0.2em] transition-colors [font-stretch:110%] hover:decoration-brass"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn bg-cobalt text-white hover:bg-cobalt-deep">
              Send an email
            </a>
            <CopyEmail email={site.email} />
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-display text-sm font-semibold">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer me" className="text-[#B8C4D3] transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
