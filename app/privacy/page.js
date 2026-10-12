import { site } from "@/data/site";

export const metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <span className="kicker">Privacy</span>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)" }}>Short version: we don't want your data.</h1>
        <p><strong>Tools.</strong> The flyer maker and stage plot designer run entirely in your browser. What you build stays on your device unless you download or share it yourself.</p>
        <p><strong>Forms.</strong> Venue submissions and contact messages are delivered to our inbox by a form service (Formspree) or by your own email app. We use your email only to follow up on your submission and never post it.</p>
        <p><strong>Mailing list.</strong> Handled by MailChimp. Every email has an unsubscribe link.</p>
        <p><strong>Cookies and tracking.</strong> None of ours. The site is hosted on Vercel, which keeps standard server logs.</p>
        <p>Questions: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
      </div>
    </section>
  );
}
