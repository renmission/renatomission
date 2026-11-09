import type { StaticImageData } from 'next/image';
import selah from '../public/selah.png';
import n8nFeedback from '../public/n8n-feedback.png';
import winnerChurch from '../public/winner-church.png';
import adsPaint from '../public/ads-paint.png';
import fgHomes from '../public/fg-homes.png';

// Single source for visible copy and JSON-LD, so search/AI answers match the page.
export const site = {
  url: 'https://renatomission.vercel.app',
  name: 'Renato Mission',
  short: 'Ren',
  role: 'Software Developer & AI Automation Specialist',
  location: 'Philippines',
  email: 'renato.jr.mission@gmail.com',
  resume: '/resume',
  title: 'Renato Mission – Software Developer & AI Automation, Philippines',
  description:
    'Ren Mission, a software developer and AI automation specialist in the Philippines, builds business web apps (ordering, POS, inventory) and n8n workflows.',
  social: {
    github: 'https://github.com/renmission',
    linkedin: 'https://www.linkedin.com/in/renmission/',
    twitter: 'https://twitter.com/ren_mission',
  },
};

export type Project = {
  title: string;
  summary: string;
  image: StaticImageData;
  stack: string[];
  repo?: string;
  demo?: string;
  // Show the screenshot whole at its own aspect ratio instead of cropping to 16:10.
  contain?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Selah',
    summary:
      'Website and shop tools for a specialty coffee house in Tanauan, Batangas: online menu and pickup ordering, plus a staff area with a live order board, counter POS and a digital stamp card.',
    image: selah,
    contain: true,
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    repo: 'https://github.com/renmission/selah',
    demo: 'https://selah-smoky-rho.vercel.app',
  },
  {
    title: 'Winner Church',
    summary:
      'A church website with a full management system behind it: members and families, finances and online giving, events with RSVP, duty and worker scheduling, school enrollment and grades, documents, a page builder and custom reports.',
    image: winnerChurch,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon Postgres', 'Stripe'],
    contain: true,
  },
  {
    title: 'ADS Paint Center',
    summary:
      'An online shop and management system for a paint retailer in Sto. Tomas, Batangas: product catalog and quotes for customers, plus POS and billing, inventory with low-stock alerts, staff roles, reports and automatic SMS notifications.',
    image: adsPaint,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'Neon Postgres', 'SMS API'],
    repo: 'https://github.com/renmission/ads-paint-center',
    demo: 'https://ads-paint-center.vercel.app',
    contain: true,
  },
  {
    title: 'Feedback workflow automation',
    summary:
      "An n8n workflow that runs a customer feedback loop: it logs sent and incoming feedback emails from Gmail into Google Sheets, sends follow-ups to customers who haven't replied, asks happy customers for a Google review, and tracks which reviews come in. New 5-star feedback triggers a review request in real time.",
    image: n8nFeedback,
    stack: ['n8n', 'Gmail API', 'Google Sheets', 'JavaScript'],
    contain: true,
  },
  {
    title: 'FG Homes',
    summary:
      'An internal management platform for a home builder and construction supplier: inventory, payroll and delivery tracking, behind role-based sign-in.',
    image: fgHomes,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'Neon Postgres'],
    repo: 'https://github.com/renmission/fg-home',
    demo: 'https://fg-homes-builders.vercel.app',
    contain: true,
  },
];

export const stack = {
  'Front end': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  'Back end': ['Node.js', 'PostgreSQL', 'Prisma', 'Drizzle ORM', 'GraphQL', 'MongoDB'],
  'DevOps & cloud': ['Vercel', 'AWS', 'Supabase', 'Neon', 'Deployments'],
  'AI & automation': ['Claude', 'Claude Code', 'ChatGPT', 'Perplexity', 'MCP', 'n8n', 'Hermes Agent'],
  Marketing: ['Funnel design', 'CRM', 'GoHighLevel', 'Social media management'],
};

export const faqs = [
  {
    q: 'Who is Renato Mission?',
    a: 'Renato (Ren) Mission is a software developer based in the Philippines who builds web apps and management systems for small businesses, such as online ordering, point of sale (POS), inventory, payroll and membership tools. Ren is a Computer Science graduate and also works on AI automation (n8n, Claude, Claude Code, MCP), deployment on Vercel, AWS, Supabase and Neon, and funnels and CRM with GoHighLevel.',
  },
  {
    q: 'Is Ren available for hire?',
    a: `Yes. Ren is open to AI automation, DevOps, funnel and CRM work as well as developer roles. The fastest way to reach Ren is by email at ${site.email}.`,
  },
  {
    q: 'What technologies does Ren use?',
    a: `Ren works mostly with ${Object.values(stack).flat().join(', ')}.`,
  },
  {
    q: 'Can Ren work with teams in other time zones?',
    a: 'Yes. Ren has worked with small and large, specialised and cross-functional teams across different time zones, and works in Philippine time (UTC+8).',
  },
  {
    q: 'What has Ren built?',
    a: `Recent work: ${projects.map((p) => `${p.title}. ${p.summary}`).join(' ')}`,
  },
  {
    q: 'Can Ren build a POS or management system for my business?',
    a: `Yes. Ren has built ordering, POS, inventory, payroll and membership systems for a coffee house, a paint retailer, a construction supplier and a church in the Philippines, using Next.js, TypeScript and PostgreSQL (Neon or Supabase), deployed on Vercel. Email ${site.email} with what your business needs.`,
  },
  {
    q: 'Does Ren build n8n and AI automations?',
    a: 'Yes. Ren builds n8n workflows that connect Gmail, Google Sheets and other tools. One example is a customer feedback loop that logs feedback emails, sends follow-ups and asks happy customers for a Google review automatically. Ren also works with Claude, Claude Code and MCP.',
  },
];

// Résumé content for /resume (printed to PDF from the browser).
export const experience = [
  {
    role: 'Software Developer & AI Automation Specialist',
    org: 'Freelance',
    period: '2023 – Present',
    points: [
      'Build business web apps and management systems for small businesses: online ordering, POS, inventory, payroll and membership.',
      'Build n8n and AI automations with Claude, Claude Code and MCP; deploy on Vercel, AWS, Supabase and Neon.',
      'Set up funnels and CRM with GoHighLevel and manage social media for clients.',
    ],
  },
  {
    role: 'Software Engineer & QA Project Manager',
    org: 'Cauld & Clark Information Technology Solutions',
    period: 'Oct 2021 – 2023',
    points: [
      'Front-end and back-end development with React, GraphQL, TypeScript, Node.js, NestJS, MongoDB and Docker.',
      'Led QA: manual testing and Cypress test automation.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'CampaignTracker',
    period: 'Dec 2021 – 2023',
    points: ['Front-end development with React, GraphQL and TypeScript.'],
  },
  {
    role: 'QA Engineer',
    org: 'Fiddle.io',
    period: 'Jan 2021 – 2023',
    points: ['Manual and automated testing with Cypress.'],
  },
  {
    role: 'Web Developer / SEO / Graphic Artist',
    org: 'St. Frances Cabrini Medical Center, Inc.',
    period: 'Apr 2018 – Jan 2022',
    points: [
      'Built and maintained the hospital website with HTML, CSS, JavaScript, Node.js, PHP, MySQL and MongoDB.',
      'Ran SEO and Google Analytics to grow search traffic.',
      'Designed web and social media graphics in Photoshop and Illustrator.',
    ],
  },
  {
    role: 'Web Designer',
    org: 'Personiv',
    period: 'Oct 2017 – Jan 2018',
    points: [],
  },
];

export const education = [
  { school: 'Tanauan Institute', detail: "Bachelor's degree, Computer Science", period: '2012 – 2015' },
  { school: 'Inventive Media', detail: 'Search Engine Optimization training', period: '2019' },
];
