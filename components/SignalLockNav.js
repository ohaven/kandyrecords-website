import Link from "next/link";
import { signalLock as sl } from "@/data/signal-lock";

// Small sub-navigation shared by the three Signal Lock pages.
export default function SignalLockNav({ current }) {
  const items = [
    { href: "/signal-lock", label: "Overview", key: "overview" },
    { href: "/signal-lock/support", label: "Support", key: "support" },
    { href: "/signal-lock/privacy", label: "Privacy", key: "privacy" },
  ];
  return (
    <div className="sl-nav">
      <div className="container sl-nav-inner">
        <Link href="/signal-lock" className="sl-nav-brand">
          <img src={sl.icon} alt="" width="28" height="28" />
          <span>{sl.name} <span className="muted">{sl.byline}</span></span>
        </Link>
        <nav aria-label="Signal Lock pages">
          {items.map((i) => (
            <Link key={i.key} href={i.href} aria-current={current === i.key ? "page" : undefined}>{i.label}</Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function AppStoreBadge({ size = "lg" }) {
  if (sl.appStoreUrl) {
    return <a className={`btn btn-primary ${size === "sm" ? "btn-sm" : ""}`} href={sl.appStoreUrl}>Download on the App Store</a>;
  }
  return <span className={`sl-soon ${size === "sm" ? "sl-soon-sm" : ""}`}>Coming Soon to the App Store</span>;
}
