import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { TbAddressBook, TbBrandOpenai, TbChartArrowsVertical, TbChartFunnel, TbRobot, TbRocket, TbShare2, TbWebhook } from 'react-icons/tb';
import {
  SiAnthropic, SiClaude, SiCss, SiDrizzle, SiPostgresql, SiPrisma, SiGraphql, SiModelcontextprotocol, SiNeon, SiPerplexity, SiSupabase, SiVercel, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import { stack } from '../lib/site';

const icons: Record<string, IconType> = {
  HTML: SiHtml5, CSS: SiCss, JavaScript: SiJavascript, TypeScript: SiTypescript, React: SiReact,
  'Next.js': SiNextdotjs, 'Tailwind CSS': SiTailwindcss, 'Node.js': SiNodedotjs, GraphQL: SiGraphql, MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql, Prisma: SiPrisma, 'Drizzle ORM': SiDrizzle,
  AWS: FaAws, Vercel: SiVercel, Supabase: SiSupabase, Neon: SiNeon,
  Claude: SiAnthropic, 'Claude Code': SiClaude, Perplexity: SiPerplexity, MCP: SiModelcontextprotocol,
  // No brand icons exist for n8n, Hermes Agent or GoHighLevel; these are the closest generic ones.
  ChatGPT: TbBrandOpenai, n8n: TbWebhook, 'Hermes Agent': TbRobot, Deployments: TbRocket,
  'Funnel design': TbChartFunnel, CRM: TbAddressBook, GoHighLevel: TbChartArrowsVertical, 'Social media management': TbShare2,
};

const layout: Record<string, [string, string]> = {
  'Front end': ['md:col-span-8', 'sm:grid-cols-3'],
  'Back end': ['md:col-span-4', 'sm:grid-cols-3 md:grid-cols-2'],
  'DevOps & cloud': ['md:col-span-12', 'sm:grid-cols-3 md:grid-cols-5'],
  'AI & automation': ['md:col-span-8', 'sm:grid-cols-3'],
  Marketing: ['md:col-span-4', 'sm:grid-cols-2 md:grid-cols-1'],
};

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="mx-auto max-w-page px-4 py-24 sm:px-8 md:py-32">
      <h2 id="stack-title" className="h2">
        What I work with
      </h2>
      <p className="mt-4 max-w-[48ch] text-lg text-muted">The tools I use to build and deploy web apps, automate work with AI, and run funnels and CRMs.</p>
      <div className="mt-14 grid gap-12 md:grid-cols-12">
        {Object.entries(stack).map(([group, items]) => (
          <div key={group} className={layout[group][0]}>
            <h3 className="border-b border-line pb-3 font-display text-base font-bold [font-stretch:115%]">{group}</h3>
            <ul className={`mt-5 grid grid-cols-2 gap-3 ${layout[group][1]}`}>
              {items.map((name) => {
                const Icon = icons[name];
                return (
                  <li
                    key={name}
                    className="group flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-4 font-medium transition duration-300 ease-out hover:-translate-y-1 hover:border-cobalt hover:shadow-[0_18px_30px_-18px_rgba(47,107,255,0.6)]"
                  >
                    {Icon && <Icon aria-hidden className="size-5 shrink-0 text-muted transition-colors group-hover:text-cobalt" />}
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
