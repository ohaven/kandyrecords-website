import Link from "next/link";
import { signalLock as sl } from "@/data/signal-lock";
import SignalLockNav, { AppStoreBadge } from "@/components/SignalLockNav";

export const metadata = {
  title: "Support",
  description: `Help with the ${sl.name} tuner, metronome, microphone permissions, and Signal Lock Pro purchases.`,
};

function Q({ q, children }) {
  return (
    <details className="sl-faq">
      <summary>{q}</summary>
      <div>{children}</div>
    </details>
  );
}

export default function SignalLockSupport() {
  const email = sl.supportEmail;
  const subject = encodeURIComponent(`${sl.name} support`);
  const body = encodeURIComponent(`iPhone model:\niOS version:\nSignal Lock version: ${sl.version}\nWhat happened:\n`);
  return (
    <>
      <SignalLockNav current="support" />
      <section className="page-head">
        <div className="container">
          <span className="kicker">{sl.name} {sl.byline}</span>
          <h1>Support</h1>
          <p className="lead">Common fixes first. If none of them work, email us; a person reads every message.</p>
          <p className="small muted">Version {sl.version} · {sl.device} · Requires {sl.requires}</p>
        </div>
      </section>

      <div className="container sl-support">
        <h2>Tuner</h2>
        <Q q="The tuner shows “--” or doesn't react when I play">
          <ol>
            <li>Check that {sl.name} has microphone access: iOS Settings → Privacy &amp; Security → Microphone → {sl.name} must be on. The tuner is silent without it.</li>
            <li>Play one string at a time and let it ring. Chords and muted notes won't read.</li>
            <li>Turn up your instrument's volume, or move the phone closer to the guitar or amp.</li>
            <li>Make sure you're on the TUNER tab. The meter at the top reads LISTENING when the mic is active.</li>
          </ol>
        </Q>
        <Q q="It shows the wrong string or note">
          <p>Check the preset at the top of the tuner (Standard, Drop D, Drop C, Drop C#, Half Step Down, Whole Step Down). If you're in a tuning that isn't listed, switch to CHROMATIC on the CONFIG tab, which shows the nearest note without assuming a string.</p>
          <p>Also check the reference pitch (440 Hz is standard; 432 Hz is a toggle on the CONFIG tab).</p>
        </Q>
        <Q q="Can I plug my guitar in instead of using the mic?">
          <p>Yes. With a guitar interface connected to your iPhone, the meter reads LINE IN instead of MIC and the tuner listens to the interface. The interface must be one your iPhone can power or that has its own power; some need a powered adapter.</p>
        </Q>

        <h2>Microphone permissions</h2>
        <Q q="How do I turn microphone access on or off?">
          <p>iOS Settings → Privacy &amp; Security → Microphone → find {sl.name} and switch it on or off. If you tapped “Don't Allow” the first time, this is the only place to change it; the app won't ask again.</p>
          <p>With access off, the metronome, setlist, and drum machine all still work. Only the tuner needs the microphone.</p>
        </Q>
        <Q q="What does the app do with the microphone?">
          <p>It listens for pitch while the tuner screen is open, on the phone, and nothing is recorded or sent anywhere. Details are in the <Link href="/signal-lock/privacy">privacy policy</Link>.</p>
        </Q>

        <h2>Metronome</h2>
        <Q q="I can't hear the click">
          <ol>
            <li>Check the ring/silent switch on the side of the phone and the volume buttons.</li>
            <li>Check the volume slider on the METRO screen.</li>
            <li>If headphones or a speaker are connected by Bluetooth, the click plays there, not from the phone.</li>
            <li>Try a different click sound on the CONFIG tab; some cut through better on small speakers.</li>
          </ol>
        </Q>
        <Q q="The metronome keeps playing after I lock the phone">
          <p>That's on purpose, so you can keep time with the phone in your pocket. Tap STOP before locking, or open the app and stop it. The app releases the audio session as soon as nothing is playing.</p>
        </Q>
        <Q q="Setlist mode: how do I move between songs?">
          <p>Turn on SETLIST MODE on the METRO screen, add songs with +, and set each song's tempo and time signature. Swipe or use the arrows to move to the next song; the metronome switches instantly. Setlist mode is free. Setlist and drum modes don't run at the same time.</p>
        </Q>

        <h2>{sl.name} Pro</h2>
        <Q q="What's in Pro and what does it cost?">
          <p>{sl.name} Pro is a {sl.proPrice} one-time purchase (US price; your local App Store sets other currencies). It unlocks the Industrial Outlaw and Vintage Ivory instrument finishes and the eight-groove drum machine. The tuner, metronome, setlist, and the two Digital looks stay free. No subscription, no ads.</p>
        </Q>
        <Q q="How do I buy it?">
          <p>Tap any item marked PRO (a locked finish in the appearance picker, or the DRUMS button), or open CONFIG → {sl.name} Pro. Tap UNLOCK PRO and confirm with Apple. Pro unlocks immediately.</p>
        </Q>
        <Q q="I bought Pro but it's locked again (new phone, reinstall, or family device)">
          <p>Open CONFIG → {sl.name} Pro → RESTORE PURCHASES. Restore Purchases is also on the Pro screen itself. You must be signed in to the same Apple ID you bought it with.</p>
          <p>“Nothing to restore” means Apple found no {sl.name} Pro purchase on this Apple ID; check which account is signed in under iOS Settings → App Store. “Could not reach the App Store” means the phone is offline or Apple's servers didn't answer; try again on a connection.</p>
          <p>Pro is tied to your Apple ID, not to the phone, so a new phone on the same Apple ID can restore it free.</p>
        </Q>
        <Q q="Can I get a refund?">
          <p>Refunds for in-app purchases are handled by Apple, not by us. Go to <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>, sign in, and request a refund for the {sl.name} Pro purchase.</p>
        </Q>

        <h2>Compatibility</h2>
        <Q q="Which devices and iOS versions work?">
          <p>{sl.name} version {sl.version} runs on iPhone with {sl.requires}. It is an iPhone app; it is not designed for iPad, Mac, or Apple Watch.</p>
        </Q>

        <h2>Contact</h2>
        <div className="card">
          <h3>Still stuck?</h3>
          <p>Email <a href={`mailto:${email}`}>{email}</a> and include your iPhone model, iOS version, and what happened (a screenshot helps). The button below starts an email with those lines filled in.</p>
          <div className="card-foot" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary btn-sm" href={`mailto:${email}?subject=${subject}&body=${body}`}>Email support</a>
            <AppStoreBadge size="sm" />
          </div>
        </div>
        <div style={{ height: 56 }} />
      </div>
    </>
  );
}
