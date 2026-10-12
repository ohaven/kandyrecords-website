import Link from "next/link";

export const metadata = { title: "Thanks" };

export default function Thanks() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
        <span className="kicker">Got it</span>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)" }}>Thanks for the assist.</h1>
        <p className="lead" style={{ margin: "0 auto 24px" }}>We review every submission by hand. If it checks out it'll be up within a few days.</p>
        <Link className="btn btn-primary" href="/venues">Back to venues</Link>
      </div>
    </section>
  );
}
