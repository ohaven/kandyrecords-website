# Kandy Records — kandyrecords.com

Independent label site and free DIY-band toolkit. Next.js on Vercel, zero backend, $0/month.

## Edit the site (no coding needed)

| Want to change… | Edit this file |
| --- | --- |
| Text, links, tools list, catalog, email, Formspree ID, MailChimp | `data/site.js` |
| Venues & promoters list | `data/venues.json` (one `{ … }` block per venue) |
| Guides / articles | `content/guides/*.md` (add a new `.md` file = new guide) |
| Colors and fonts | top of `app/globals.css` |
| Logo | `components/Logo.js` (or drop a file in `public/images/`) |

Push to GitHub → Vercel rebuilds in about a minute.

## Adding a guide

Create `content/guides/my-new-guide.md`:

```
---
title: "How to Do the Thing"
summary: "One sentence that shows up on the card."
category: "Booking"
order: 10
---

Write the guide in Markdown here. ## Headings, - bullets, **bold** all work.
```

The file name becomes the web address: `kandyrecords.com/guides/my-new-guide`.

## Adding a venue

Submissions arrive by email (or Formspree once `formspreeId` is set in `data/site.js`).
Copy the block from `data/venues.json`, fill it in, give it a unique `id`, push. Delete the `example-venue` entry when you add the first real one.

## Subdomains

- `flyers.kandyrecords.com` → Vercel project **staple-gun** (same app as staplegun.sig99.com)
- `stageplot.kandyrecords.com` → Vercel project **rigplot** (same app as rigplot.sig99.com)

## Run locally

```
npm install
npm run dev
```
Then open http://localhost:3000
