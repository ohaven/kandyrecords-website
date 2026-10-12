import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllGuides, getGuide } from "@/lib/guides";

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const g = getGuide(params.slug);
  return g ? { title: g.title, description: g.summary } : {};
}

export default function GuidePage({ params }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const others = getAllGuides().filter((x) => x.slug !== g.slug).slice(0, 3);
  return (
    <>
      <section className="guide-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/guides">Guides</Link> / {g.category}</div>
          <h1>{g.title}</h1>
          {g.summary && <p className="lead" style={{ marginBottom: 0 }}>{g.summary}</p>}
        </div>
      </section>
      <div className="container">
        <article className="prose" dangerouslySetInnerHTML={{ __html: g.html }} />
        {others.length > 0 && (
          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
            <h3>Keep reading</h3>
            <ul>
              {others.map((o) => <li key={o.slug}><Link href={`/guides/${o.slug}`}>{o.title}</Link></li>)}
            </ul>
          </div>
        )}
      </div>
      <div style={{ height: 48 }} />
    </>
  );
}
