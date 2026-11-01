import Link from "next/link";
import { signalLock as sl } from "@/data/signal-lock";
import SignalLockNav, { AppStoreBadge } from "@/components/SignalLockNav";

export const metadata = { title: `${sl.name} — ${sl.headline}` };

export default function SignalLockPage() {
  return (
    <>
      <SignalLockNav current="overview" />

      <section className="sl-hero">
        <div className="container sl-hero-inner">
          <img className="sl-icon" src={sl.icon} alt={`${sl.name} app icon`} width="160" height="160" />
          <div>
            <span className="kicker">{sl.name} {sl.byline}</span>
            <h1>{sl.headline}</h1>
            <p className="lead">{sl.tagline} A free guitar and bass tuner, metronome, and setlist tool. One optional upgrade. No ads, no subscription, no account.</p>
            <div className="hero-actions">
              <AppStoreBadge />
              <a className="btn btn-outline" href="#pro">See what's in Pro</a>
            </div>
            <p className="small muted" style={{ marginTop: 14 }}>Version {sl.version} · {sl.device} · Requires {sl.requires}</p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="sl-shots">
            {sl.screenshots.map((s) => (
              <figure key={s.src}>
                <img src={s.src} alt={s.alt} loading="lazy" width="660" height="1434" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Free</span>
              <h2>Everything you need on stage. Free.</h2>
            </div>
          </div>
          <div className="grid grid-2">
            {sl.free.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="pro">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Signal Lock Pro</span>
              <h2>{sl.proPrice}. One time. That's it.</h2>
            </div>
            <span className="badge">No subscription · No ads</span>
          </div>
          <p className="lead">Unlock once and keep it. Pro adds two premium instrument finishes and the drum machine. The free tuner, metronome, and setlist stay free.</p>
          <div className="grid grid-3">
            {sl.pro.map((f) => (
              <div className="card" key={f.title}>
                <span className="badge" style={{ alignSelf: "flex-start" }}>Pro</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <p className="small muted" style={{ marginTop: 20 }}>
            Purchased through Apple's App Store. Restore Purchases is built in for a new phone or a reinstall. Price shown in US dollars; your local App Store sets the price in other regions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <span className="kicker">Privacy</span>
              <h3>Nothing leaves your phone.</h3>
              <p>The microphone is used only to hear your instrument while the tuner is open, and audio is never recorded or sent anywhere. Settings and setlists are saved on your phone. No analytics, no tracking, no third-party code.</p>
              <div className="card-foot"><Link className="btn btn-outline btn-sm" href="/signal-lock/privacy">Read the privacy policy</Link></div>
            </div>
            <div className="card">
              <span className="kicker">Support</span>
              <h3>Something not working?</h3>
              <p>Tuner not hearing you, metronome silent, Pro not showing up after a reinstall: the support page covers the common fixes, and a human reads the inbox.</p>
              <div className="card-foot"><Link className="btn btn-outline btn-sm" href="/signal-lock/support">Get support</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ textAlign: "center" }}>
          <AppStoreBadge />
        </div>
      </section>
    </>
  );
}
