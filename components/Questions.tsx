import Image from 'next/image';
import me from '../public/me.jpg';
import { faqs } from '../lib/site';

// A chat thread: visitor asks on the right, Ren answers on the left.
// Text is the same text emitted as FAQPage JSON-LD; edit it in lib/site.ts.
export default function Questions() {
  return (
    <section id="questions" aria-labelledby="questions-title" className="mx-auto max-w-page px-4 py-24 sm:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="questions-title" className="h2">
            Questions people ask
          </h2>
          <p className="mt-4 text-lg text-muted">Straight answers to what recruiters and clients usually ask first.</p>
        </div>
        <div className="space-y-5 md:col-span-8">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group">
              <summary className="ml-auto flex w-fit max-w-[85%] cursor-pointer list-none items-center gap-3 rounded-2xl rounded-br-sm bg-navy px-5 py-3.5 font-display text-base font-bold text-[#E6EAF0] transition-colors duration-300 [font-stretch:108%] hover:bg-cobalt md:text-lg dark:bg-navy-3 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="bubble-answer mt-3 flex max-w-[90%] items-end gap-3">
                <Image src={me} alt="" width={36} height={36} className="size-9 shrink-0 rounded-md object-cover" />
                <p className="rounded-2xl rounded-bl-sm border border-line bg-surface px-5 py-3.5 text-ink">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
