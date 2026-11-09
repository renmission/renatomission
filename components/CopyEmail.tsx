import { useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    setTimeout(() => setStatus('idle'), 2200);
  };
  return (
    <button type="button" onClick={copy} className="btn border border-white/30 text-white hover:border-white">
      <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
        {status === 'copied' ? (
          <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" />
        ) : (
          <path d="M7 3a2 2 0 00-2 2v1H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1h1a2 2 0 002-2V5a2 2 0 00-2-2H7zm7 12V8a2 2 0 00-2-2H7V5h8v10h-1z" />
        )}
      </svg>
      <span aria-live="polite">{status === 'copied' ? 'Copied' : status === 'failed' ? 'Copy failed, select the address above' : 'Copy email'}</span>
    </button>
  );
}
