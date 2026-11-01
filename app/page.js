import Link from "next/link";
import { site } from "@/data/site";
import { getAllGuides } from "@/lib/guides";
import venues from "@/data/venues.json";
import ToolCard from "@/components/ToolCard";
import GuideCard from "@/components/GuideCard";
import Signup from "@/components/Signup";
import { HeroArt } from "@/components/Logo";

export default function Home() {
  const guides = getAllGuides().slice(0, 3);
  const liveTools = site.tools.filter((t) => t.status === "live");
  const venueCount = venues.filter((v) => v.id !== "example-venue").length;

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="kicker">Independent label · Farmington, NM</span>
            <h1>
              Free tools and <em>straight talk</em> for DIY bands.
            </h1>
            <p className="lead">
              Make a flyer. Draw a stage plot. Learn how booking actually works. Built by a band that's been doing this since 2007, and free for anyone who's doing it now.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={liveTools[0]?.url || "/tools"}>Make a flyer</a>
              <a className="btn btn-outline" href={liveTools[1]?.url || "/tools"}>Build a stage plot</a>
              <Link className="btn btn-ghost" href="/guides">Read the guides →</Link>
            </div>
          </div>
          <div className="hero-art"><HeroArt /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Tools</span>
              <h2>Stuff you'd otherwise pay for.</h2>
            </div>
            <Link className="btn btn-outline btn-sm" href="/tools">All tools</Link>
          </div>
          <div className="grid grid-4">
            {site.tools.slice(0, 4).map((t) => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">Guides</span>
                <h2>Indie tips, no fluff.</h2>
              </div>
              <Link className="btn btn-outline btn-sm" href="/guides">All guides</Link>
            </div>
            <div className="grid grid-3">
              {guides.map((g) => <GuideCard key={g.slug} guide={g} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <span className="kicker">Venues &amp; promoters</span>
              <h3>A venue list written by bands.</h3>
              <p>
                Does it pay? Is there a sound engineer? Where's load-in? The stuff the big directories skip.
                {venueCount > 0 ? ` ${venueCount} venue${venueCount === 1 ? "" : "s"} listed so far.` : " Just getting started: add the rooms you've played."}
              </p>
              <div className="card-foot" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn btn-primary btn-sm" href="/venues">Browse venues</Link>
                <Link className="btn btn-outline btn-sm" href="/venues#add">Add a venue</Link>
              </div>
            </div>
            <div className="card">
              <span className="kicker">Flagship</span>
              <h3>{site.flagship.name}</h3>
              <p>{site.flagship.blurb}</p>
              <div className="card-foot" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-primary btn-sm" href={site.flagship.url}>Visit sig99.com</a>
                <Link className="btn btn-outline btn-sm" href="/about">About the label</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Signup />
    </>
  );
}
