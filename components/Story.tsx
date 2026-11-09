const text =
  "I'm a Computer Science graduate who learned both front-end and back-end web development. Now I work with AI tools like Claude, Claude Code, ChatGPT, Perplexity and MCP, build automations in n8n and Hermes Agent, handle DevOps and deployments on Vercel, AWS, Supabase and Neon, and run funnels, CRMs like GoHighLevel and social media. I've worked with small and large, specialised and cross-functional teams across different time zones.";

const values = ['Flexibility', 'Clarity', 'Collaboration'];

// Words light up one by one as they scroll into view (where scroll timelines are supported).
export default function Story() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-page px-4 py-24 sm:px-8 md:py-36">
      <h2 id="about-title" className="font-display text-base font-bold text-cobalt [font-stretch:115%]">
        About me
      </h2>
      <p className="mt-6 font-display text-[clamp(1.6rem,4vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.025em] [font-stretch:108%]">
        {text.split(' ').map((w, i) => (
          <span key={i} className="word">
            {w}{' '}
          </span>
        ))}
      </p>
      <p className="mt-12 text-lg text-muted">My working style leans towards</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {values.map((v) => (
          <li
            key={v}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface px-5 py-4 font-display text-lg font-bold [font-stretch:112%] transition duration-300 ease-out hover:-translate-y-1 hover:border-cobalt hover:shadow-[0_18px_30px_-18px_rgba(47,107,255,0.6)]"
          >
            <span aria-hidden className="size-2 rotate-45 bg-brass" />
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
}
