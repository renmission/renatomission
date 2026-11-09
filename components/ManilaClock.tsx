import { useSyncExternalStore } from 'react';

const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' });

const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 15_000);
  return () => clearInterval(id);
};
// Minute bucket: stable between ticks, as useSyncExternalStore requires.
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

export default function ManilaClock() {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  if (minute === null) return <span>Philippines, UTC+8</span>;
  const now = new Date(minute * 60_000);
  return (
    <span>
      <time dateTime={now.toISOString()}>{fmt.format(now).toLowerCase()}</time> in Manila
    </span>
  );
}
