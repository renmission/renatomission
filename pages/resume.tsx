import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { site, projects, stack, experience, education } from '../lib/site';

const contacts = [
  [site.email, `mailto:${site.email}`],
  [site.url.replace('https://', ''), site.url],
  ['github.com/renmission', site.social.github],
  ['linkedin.com/in/renmission', site.social.linkedin],
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="break-after-avoid border-b border-[#D0D7E0] pb-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-cobalt-deep [font-stretch:115%]">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Fixed light colours so the page and the saved PDF look the same in dark mode.
export default function Resume() {
  return (
    <div className="min-h-screen bg-[#ECEFF3] px-4 py-8 text-navy sm:py-12 print:min-h-0 print:bg-white print:p-0">
      <Head>
        <title>{`Résumé – ${site.name}`}</title>
        <meta name="description" content={`Résumé of ${site.name}, ${site.role} in the ${site.location}.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${site.url}/resume`} />
        <style>{"@page { size: A4; margin: 14mm; } @media print { body { background: #fff !important; } }"}</style>
      </Head>

      <div className="mx-auto mb-4 flex max-w-[210mm] justify-between gap-3 print:hidden">
        <Link href="/" className="btn border border-navy/30 bg-white px-4 py-2.5 text-navy hover:border-navy">
          ← Back to site
        </Link>
        <button type="button" onClick={() => window.print()} className="btn bg-cobalt px-4 py-2.5 text-white hover:bg-cobalt-deep">
          Download PDF
        </button>
      </div>

      <main className="mx-auto max-w-[210mm] bg-white p-6 text-[0.8rem] leading-[1.5] shadow-[0_18px_40px_-20px_rgba(13,27,42,0.45)] sm:p-12 print:max-w-none print:p-0 print:shadow-none">
        <header>
          <h1 className="font-display text-3xl font-extrabold tracking-tight [font-stretch:115%]">{site.name}</h1>
          <p className="mt-1 text-sm font-semibold text-cobalt-deep">{site.role}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[#546275]">
            <li>{site.location}</li>
            {contacts.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="underline-offset-2 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <Section title="Summary">
          <p className="mt-2">
            Computer Science graduate and software developer with 8+ years in web development, QA and SEO. I build
            business web apps and management systems (ordering, POS, inventory, payroll, membership) with Next.js,
            TypeScript and PostgreSQL, and AI automations with n8n, Claude, Claude Code and MCP. Experienced with small
            and large, cross-functional teams across time zones.
          </p>
        </Section>

        <Section title="Experience">
          {experience.map((e) => (
            <div key={e.role + e.org} className="mt-3 break-inside-avoid">
              <div className="flex flex-wrap justify-between gap-x-4">
                <h3 className="font-bold">
                  {e.role} <span className="font-normal text-[#546275]">· {e.org}</span>
                </h3>
                <span className="text-[#546275]">{e.period}</span>
              </div>
              {e.points.length > 0 && (
                <ul className="mt-1 list-disc pl-5">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section title="Selected projects">
          {projects.map((p) => (
            <div key={p.title} className="mt-3 break-inside-avoid">
              <h3 className="font-bold">
                {p.title}
                {p.demo && (
                  <a href={p.demo} className="ml-2 font-normal text-cobalt-deep underline-offset-2 hover:underline">
                    {p.demo.replace('https://', '')}
                  </a>
                )}
              </h3>
              <p>{p.summary}</p>
              <p className="text-[#546275]">{p.stack.join(' · ')}</p>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <dl className="mt-2 grid gap-y-1 sm:grid-cols-[9rem_1fr] print:grid-cols-[9rem_1fr]">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="contents">
                <dt className="font-bold">{group}</dt>
                <dd>{items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <div key={e.school} className="mt-2 flex flex-wrap justify-between gap-x-4">
              <p>
                <span className="font-bold">{e.school}</span> · {e.detail}
              </p>
              <span className="text-[#546275]">{e.period}</span>
            </div>
          ))}
        </Section>
      </main>
    </div>
  );
}
