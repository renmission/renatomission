import type { ReactNode } from 'react';
import Head from 'next/head';
import { site, projects, faqs, stack } from '../lib/site';

const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  alternateName: 'Ren Mission',
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/me.jpg`,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressCountry: 'PH' },
  knowsAbout: [
    ...Object.values(stack).flat(),
    'Web application development',
    'Point of sale (POS) systems',
    'Inventory management systems',
    'Business process automation',
  ],
  sameAs: Object.values(site.social),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, inLanguage: 'en' },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { '@id': `${site.url}/#website` },
      mainEntity: { '@id': `${site.url}/#person` },
    },
    person,
    {
      '@type': 'ItemList',
      name: `Projects by ${site.name}`,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        // Only projects with public code are SoftwareSourceCode; the rest are plain CreativeWork.
        item: {
          '@type': p.repo ? 'SoftwareSourceCode' : 'CreativeWork',
          name: p.title,
          description: p.summary,
          image: `${site.url}${p.image.src}`,
          keywords: p.stack.join(', '),
          ...(p.repo && { codeRepository: p.repo, programmingLanguage: p.stack }),
          ...(p.demo && { url: p.demo }),
          author: { '@id': `${site.url}/#person` },
        },
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function AppContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={site.name} />
        <link rel="canonical" href={site.url} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={`${site.url}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Renato Mission, software developer in the Philippines" />
        <meta property="profile:first_name" content="Renato" />
        <meta property="profile:last_name" content="Mission" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ren_mission" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={`${site.url}/og.png`} />
        <script
          type="application/ld+json"
          // JSON.stringify output is trusted static content; escape "<" so it can't close the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </Head>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper">
        Skip to content
      </a>
      {children}
    </>
  );
}
