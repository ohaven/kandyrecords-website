import { signalLock as sl } from "@/data/signal-lock";
import SignalLockNav from "@/components/SignalLockNav";

export const metadata = {
  title: "Privacy Policy",
  description: `${sl.name} does not collect, store, or share personal information. How the microphone, settings, and purchases work.`,
};

export default function SignalLockPrivacy() {
  const email = sl.supportEmail;
  return (
    <>
      <SignalLockNav current="privacy" />
      <section className="page-head">
        <div className="container">
          <span className="kicker">{sl.name} {sl.byline}</span>
          <h1>Privacy Policy</h1>
          <p className="muted">Effective {sl.privacyEffectiveDate} · Applies to {sl.name} version {sl.version} for iPhone</p>
        </div>
      </section>

      <div className="container">
        <article className="prose">
          <p className="lead">
            {sl.name} is published by {sl.operatorName} under the Kandy Records name. The short version: <strong>the app does not collect, store, or share any personal information.</strong> Here is the longer version.
          </p>

          <h2>Microphone</h2>
          <p>
            {sl.name} asks for microphone access the first time you open the tuner. The microphone is used only to detect the pitch of your instrument. Audio is analysed in memory on your iPhone while the tuner screen is active. It is never recorded, never saved to your phone, and never sent anywhere.
          </p>
          <p>
            When you switch to the metronome or leave the app, the app stops listening. You can turn microphone access on or off at any time in iOS Settings → Privacy &amp; Security → Microphone. If access is off, the metronome and setlist still work; only the tuner needs the microphone.
          </p>

          <h2>Settings and setlists stored on your phone</h2>
          <p>
            Your tuning preset, appearance choice, reference pitch, setlist, and similar preferences are saved only on your phone, in the app's own storage. The app does not send them to us or to any server, and we have no way to see them. They are not personal information that we collect; they are your settings, kept on your device.
          </p>
          <p>
            Deleting the app removes this data from your phone. If you use iCloud Backup or a computer backup, Apple's backup system may hold a copy as part of that backup, under Apple's privacy terms, not ours.
          </p>

          <h2>Purchases</h2>
          <p>
            {sl.name} Pro is a one-time in-app purchase. The purchase itself is processed entirely by Apple through the App Store. We do not receive or store your name, payment details, or Apple ID. Apple provides us only with anonymous, aggregated sales information through its developer tools.
          </p>
          <p>
            The app keeps a single on-device record of whether Pro is unlocked so it works offline. Restoring a purchase uses Apple's standard Restore Purchases feature, which checks your purchase history with Apple, not with us.
          </p>

          <h2>No analytics, no tracking, no third parties</h2>
          <p>
            {sl.name} contains no analytics, advertising, or crash-reporting software and no third-party code. It makes no network connections of its own. The only communication with any server is Apple's App Store handling the Pro purchase, which happens through Apple's own framework.
          </p>
          <p>
            Apple may collect diagnostic and usage data about apps on your iPhone at the operating-system level, depending on your iPhone's Analytics &amp; Improvements settings. That is Apple's practice, covered by Apple's privacy policy, and is separate from this app.
          </p>

          <h2>Children</h2>
          <p>{sl.name} is rated 4+ and does not knowingly collect information from anyone, of any age.</p>

          <h2>Changes</h2>
          <p>If a future version of the app changes any of this, this page will be updated and the effective date above will change.</p>

          <h2>Contact</h2>
          <p>Questions about privacy: <a href={`mailto:${email}`}>{email}</a></p>
        </article>
        <div style={{ height: 56 }} />
      </div>
    </>
  );
}
