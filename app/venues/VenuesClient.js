"use client";
import { useMemo, useState } from "react";
import { states, stateName } from "@/lib/states";

function Fact({ label, value }) {
  if (!value) return null;
  return (
    <div><strong>{label}</strong>{value}</div>
  );
}

export default function VenuesClient({ venues }) {
  const [q, setQ] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");

  const types = useMemo(() => [...new Set(venues.map((v) => v.type).filter(Boolean))].sort(), [venues]);
  const usedStates = useMemo(() => [...new Set(venues.map((v) => v.state).filter(Boolean))].sort(), [venues]);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return venues
      .filter((v) => !state || v.state === state)
      .filter((v) => !type || v.type === type)
      .filter((v) => !needle || [v.name, v.city, v.genres, v.notes].join(" ").toLowerCase().includes(needle))
      .sort((a, b) => (a.state + a.city + a.name).localeCompare(b.state + b.city + b.name));
  }, [venues, q, state, type]);

  return (
    <>
      <div className="filters">
        <input type="search" placeholder="Search name, city, genre…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search venues" />
        <select value={state} onChange={(e) => setState(e.target.value)} aria-label="Filter by state">
          <option value="">All states</option>
          {states.filter(([c]) => usedStates.includes(c)).map(([c, n]) => <option key={c} value={c}>{n}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type">
          <option value="">All types</option>
          {types.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {list.length === 0 ? (
        <div className="empty">No venues match yet. Be the first to <a href="#add">add one</a>.</div>
      ) : (
        <div className="grid grid-2">
          {list.map((v) => (
            <div className="card venue-card" key={v.id}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                <div>
                  <h3>{v.name}</h3>
                  <div className="muted small">{v.city}, {stateName(v.state)}{v.type ? ` · ${v.type}` : ""}{v.capacity ? ` · cap. ${v.capacity}` : ""}</div>
                </div>
                {v.allAges && <span className="badge badge-muted">{v.allAges}</span>}
              </div>
              <div className="venue-facts">
                <Fact label="Pays" value={v.pays} />
                <Fact label="Sound" value={v.sound} />
                <Fact label="Backline" value={v.backline} />
                <Fact label="Load-in" value={v.loadIn} />
                <Fact label="Genres" value={v.genres} />
                <Fact label="Booking" value={v.booking} />
              </div>
              {v.notes && <p style={{ marginTop: 6 }}>{v.notes}</p>}
              <div className="card-foot small muted" style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <span>{v.submittedBy ? `Submitted by ${v.submittedBy}` : ""}{v.updated ? ` · ${v.updated}` : ""}</span>
                {v.website && <a href={v.website} target="_blank" rel="noopener noreferrer">Website →</a>}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
