import { getAllGuides } from "@/lib/guides";
import GuideCard from "@/components/GuideCard";

export const metadata = { title: "Guides", description: "Plain-spoken guides on booking, flyers, stage plots, merch, and touring for independent bands." };

export default function Guides() {
  const guides = getAllGuides();
  const cats = [...new Set(guides.map((g) => g.category))];
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Guides</span>
          <h1>Indie tips from the van.</h1>
          <p className="lead">Short, practical, and written by people who have loaded in through the kitchen. New ones go up as we learn them.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          {cats.map((cat) => (
            <div key={cat} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.6rem" }}>{cat}</h2>
              <div className="grid grid-3">
                {guides.filter((g) => g.category === cat).map((g) => <GuideCard key={g.slug} guide={g} />)}
              </div>
            </div>
          ))}
          {guides.length === 0 && <div className="empty">Guides are on the way.</div>}
        </div>
      </section>
    </>
  );
}
