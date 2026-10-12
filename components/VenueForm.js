"use client";
import { site } from "@/data/site";
import { states } from "@/lib/states";

// Submissions go to Formspree (if site.formspreeId is set) or fall back to
// an email draft. Either way they land in your inbox for review; approved
// venues get added to data/venues.json by hand.
export default function VenueForm() {
  const useFormspree = Boolean(site.formspreeId);

  function onSubmit(e) {
    if (useFormspree) return; // let the browser post to Formspree
    e.preventDefault();
    const f = new FormData(e.target);
    const lines = [...f.entries()].filter(([k]) => !k.startsWith("_")).map(([k, v]) => `${k}: ${v}`);
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Venue submission: " + (f.get("Venue name") || ""))}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form
      className="form"
      action={useFormspree ? `https://formspree.io/f/${site.formspreeId}` : undefined}
      method="POST"
      onSubmit={onSubmit}
    >
      {useFormspree && (
        <>
          <input type="hidden" name="_subject" value="New venue submission — Kandy Records" />
          <input type="hidden" name="_next" value={`${site.url}/thanks`} />
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
        </>
      )}
      <div className="form-row">
        <div className="field"><label>Venue / promoter name *</label><input name="Venue name" required /></div>
        <div className="field"><label>Type</label>
          <select name="Type" defaultValue="Bar / Club">
            <option>Bar / Club</option><option>Music venue</option><option>DIY / House show</option><option>Brewery</option><option>Festival</option><option>Promoter</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label>City *</label><input name="City" required /></div>
        <div className="field"><label>State *</label>
          <select name="State" required defaultValue="NM">
            {states.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label>Capacity (rough)</label><input name="Capacity" placeholder="150" /></div>
        <div className="field"><label>Ages</label>
          <select name="Ages" defaultValue="21+"><option>21+</option><option>18+</option><option>All ages</option><option>Varies</option></select>
        </div>
      </div>
      <div className="field"><label>Genres that do well there</label><input name="Genres" placeholder="Rock, metal, punk, hip-hop…" /></div>
      <div className="form-row">
        <div className="field"><label>How does it pay?</label><input name="Pays" placeholder="Door split, guarantee, tips, bar %…" /></div>
        <div className="field"><label>Sound</label><input name="Sound" placeholder="House PA + engineer, bring your own…" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label>Backline</label><input name="Backline" placeholder="Shared drums, none, full…" /></div>
        <div className="field"><label>Load-in</label><input name="Load-in" placeholder="Back alley, front door, stairs…" /></div>
      </div>
      <div className="field"><label>How to book it</label><input name="Booking" placeholder="Email, Instagram DM, booker's name…" /><div className="hint">Don't post private phone numbers.</div></div>
      <div className="field"><label>Website or social link</label><input name="Website" type="url" placeholder="https://" /></div>
      <div className="field"><label>Anything the next band should know</label><textarea name="Notes" placeholder="Parking, crowd, the good and the bad…" /></div>
      <div className="form-row">
        <div className="field"><label>Your band / name *</label><input name="Submitted by" required /></div>
        <div className="field"><label>Your email *</label><input name="email" type="email" required /><div className="hint">Only used if we have a question. Never posted.</div></div>
      </div>
      <div><button className="btn btn-primary" type="submit">Submit for review</button></div>
    </form>
  );
}
