import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{site.name}</h4>
            <p>{site.tagline}</p>
            <p className="small">Independent label and DIY toolkit. Farmington, New Mexico.</p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/venues">Venues &amp; Promoters</Link></li>
              <li><Link href="/about">The Label</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={site.flagship.url}>{site.flagship.name}</a></li>
              {socials.map((s) => (
                <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>
              ))}
              <li><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. Free to use, always.</span>
          <span><Link href="/privacy">Privacy</Link></span>
        </div>
      </div>
    </footer>
  );
}
