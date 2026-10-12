import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)" }}>Wrong venue.</h1>
        <p className="lead" style={{ margin: "0 auto 24px" }}>That page doesn't exist. Load-in is around back.</p>
        <Link className="btn btn-primary" href="/">Home</Link>
      </div>
    </section>
  );
}
