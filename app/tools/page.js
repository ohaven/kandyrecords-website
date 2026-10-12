import { site } from "@/data/site";
import ToolCard from "@/components/ToolCard";

export const metadata = { title: "Tools", description: "Free flyer maker, stage plot designer, and more for DIY bands." };

export default function Tools() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Tools</span>
          <h1>Free. No login. No watermark.</h1>
          <p className="lead">Each tool opens in its own tab and runs in your browser. Nothing you make gets uploaded to us.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="grid grid-2">
            {site.tools.map((t) => <ToolCard key={t.slug} tool={t} />)}
          </div>
          <p className="muted small" style={{ marginTop: 28 }}>
            Got an idea for a tool bands actually need? <a href="/contact">Tell us.</a>
          </p>
        </div>
      </section>
    </>
  );
}
