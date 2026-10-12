import Link from "next/link";

export default function GuideCard({ guide }) {
  return (
    <Link className="card guide-card" href={`/guides/${guide.slug}`}>
      <div className="guide-meta">
        <span className="badge badge-muted">{guide.category}</span>
        <span>{guide.minutes} min read</span>
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.summary}</p>
      <div className="card-foot"><span className="btn btn-ghost btn-sm">Read →</span></div>
    </Link>
  );
}
