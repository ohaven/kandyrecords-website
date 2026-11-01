import { signalLock as sl } from "@/data/signal-lock";

// Wraps every Signal Lock page in the .sl class so the product gets its own
// accent color (the tuner's signal green) without touching the rest of the site.
export const metadata = {
  title: { default: `${sl.name} — ${sl.headline}`, template: `%s | ${sl.name}` },
  description: sl.description,
  openGraph: { title: `${sl.name} ${sl.byline}`, description: sl.headline, images: [sl.icon] },
};

export default function SignalLockLayout({ children }) {
  return <div className="sl">{children}</div>;
}
