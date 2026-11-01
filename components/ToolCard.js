import Link from "next/link";

// status: "live" (opens tool.url), "soon" (no link), or "soon" + url (coming
// soon, but links to an info page). badge overrides the badge text.
export default function ToolCard({ tool }) {
  const live = tool.status === "live" && tool.url;
  const info = tool.status === "soon" && tool.url;
  const inner = (
    <>
      <span className={`badge ${live ? "" : "badge-soon"}`} style={{ alignSelf: "flex-start" }}>
        {tool.badge || (live ? "Free · Live" : "Coming soon")}
      </span>
      <span className="tool-kicker">{tool.kicker}</span>
      <h3>{tool.name}</h3>
      <p>{tool.blurb}</p>
      <div className="card-foot">
        <span className={`btn btn-sm ${live ? "btn-primary" : "btn-outline"}`} aria-disabled={!live && !info}>
          {live ? "Open tool →" : info ? "Learn more →" : "In the works"}
        </span>
      </div>
    </>
  );
  if (live) return <a className="card tool-card" href={tool.url}>{inner}</a>;
  if (info) return <Link className="card tool-card" href={tool.url}>{inner}</Link>;
  return <div className="card tool-card soon">{inner}</div>;
}
