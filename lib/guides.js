// Reads the markdown files in content/guides/ at build time.
// To add a guide: drop a new .md file in that folder with the same header block.
import fs from "fs";
import path from "path";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "guides");

function parseFrontmatter(raw) {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (/^".*"$/.test(val) || /^'.*'$/.test(val)) val = val.slice(1, -1);
    meta[key] = val;
  }
  return { meta, body: m[2] };
}

export function getAllGuides() {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(dir, f), "utf8"));
      const words = body.split(/\s+/).length;
      return {
        slug,
        title: meta.title || slug,
        summary: meta.summary || "",
        category: meta.category || "General",
        date: meta.date || "",
        order: Number(meta.order || 999),
        minutes: Math.max(1, Math.round(words / 220)),
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getGuide(slug) {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { meta, body } = parseFrontmatter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: meta.title || slug,
    summary: meta.summary || "",
    category: meta.category || "General",
    date: meta.date || "",
    html: marked.parse(body),
  };
}
