export default function ToolCard({ tool }) {
  const live = tool.status === "live" && tool.url;
  const inner = (
    <>
      <span className={`badge ${live ? "" : "badge-soon"}`} style={{ alignSelf: "flex-start" }}>
        {live ? "Free · Live" : "Coming soon"}
      </span>
      <span className="tool-kicker">{tool.kicker}</span>
      <h3>{tool.name}</h3>
      <p>{tool.blurb}</p>
      <div className="card-foot">
        <span className={`btn btn-sm ${live ? "btn-primary" : "btn-outline"}`} aria-disabled={!live}>
          {live ? "Open tool →" : "In the works"}
        </span>
      </div>
    </>
  );
  return live ? (
    <a className="card tool-card" href={tool.url}>{inner}</a>
  ) : (
    <div className="card tool-card soon">{inner}</div>
  );
}
