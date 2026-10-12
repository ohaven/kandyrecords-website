import { site } from "@/data/site";

export const metadata = { title: "The Label", description: "Kandy Records: an independent label out of Farmington, New Mexico, and the home of Signal 99." };

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">The label</span>
          <h1>Small label. Big mouth.</h1>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div className="prose">
              {site.about.map((p, i) => <p key={i} className={i === 0 ? "lead" : ""}>{p}</p>)}
            </div>
            <div className="card">
              <span className="kicker">Flagship</span>
              <h3>{site.flagship.name}</h3>
              <p>{site.flagship.blurb}</p>
              <div className="listen-row">
                {site.flagship.listen.map((l) => (
                  <a key={l.name} className="btn btn-outline btn-sm" href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
                ))}
              </div>
              <div className="card-foot"><a className="btn btn-primary btn-sm" href={site.flagship.url}>Visit sig99.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Catalog</span>
          <h2>Released under Kandy Records</h2>
          <div style={{ maxWidth: 640 }}>
            {site.releases.map((r) => (
              <a key={r.title} className="release" href={r.url} target="_blank" rel="noopener noreferrer">
                <span className="release-disc" aria-hidden="true" />
                <span>
                  <span className="release-title">{r.title}</span>
                  <br />
                  <span className="release-meta">{r.artist}{r.year ? ` · ${r.year}` : ""}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker">Shows</span>
          <h2>Kandy Records presents</h2>
          <p className="lead">We've put on shows under the Kandy Records name for years. If you're booking a bill in the Four Corners and want a hand, or a band on it, <a href="/contact">get in touch</a>.</p>
        </div>
      </section>
    </>
  );
}
