// ============================================================
//  KANDY RECORDS — SITE SETTINGS
//  Everything you'd normally want to tweak lives here.
//  Edit the text between the quotes. Leave the quotes alone.
// ============================================================

export const site = {
  name: "Kandy Records",
  tagline: "Free tools and straight talk for DIY bands.",
  description:
    "Kandy Records is an independent label out of Farmington, New Mexico, and a free toolkit for DIY bands: flyer maker, stage plot designer, booking guides, and a band-reviewed venue list.",
  url: "https://kandyrecords.com",

  // Where contact and venue-submission emails go.
  contactEmail: "signal99haven@gmail.com",

  // Formspree form ID (free account at https://formspree.io).
  // Create a form, copy the ID from the endpoint URL (https://formspree.io/f/XXXXXXXX)
  // and paste it here. Until you do, the forms fall back to opening an email.
  formspreeId: "",

  // MailChimp embedded-form action URL (Audience → Signup forms → Embedded forms).
  // Currently shares the Signal 99 audience. Make a "Kandy Records" audience
  // or tag later if you want to keep the lists separate.
  mailchimpFormAction:
    "https://facebook.us12.list-manage.com/subscribe/post?u=6d498b37e931acf0609bcde3d&id=9650f09d77&f_id=00dcdfe8f0",

  socials: [
    { name: "Instagram", url: "" },
    { name: "Facebook", url: "" },
    { name: "YouTube", url: "https://www.youtube.com/user/sig99" },
  ],

  // ---------- The label ----------
  about: [
    "Kandy Records started as the name on the back of our own albums. We released records under it, ran shows sponsored by it, and learned every lesson the hard way: booking, flyers, stage plots, merch tables, long drives, short pay.",
    "This site is where that experience goes. The tools are free. The guides are plain-spoken. The venue list is written by bands, for bands. No premium tier, no login, no upsell.",
    "Our flagship act is Signal 99. Everything here was built for them first and then opened up to everyone.",
  ],

  // ---------- Flagship ----------
  flagship: {
    name: "Signal 99",
    blurb:
      "Hard rock and metal punk out of Farmington, New Mexico. Gas masks, war paint, heavy bass, and a message of hope for the poverty-stricken corners of the Southwest.",
    url: "https://sig99.com",
    listen: [
      { name: "Spotify", url: "https://open.spotify.com/artist/2zr9iuzp25jP9j2gTs9Yqb" },
      { name: "Apple Music", url: "https://music.apple.com/us/artist/signal-99/415111018" },
      { name: "Bandcamp", url: "https://signal99.bandcamp.com" },
      { name: "YouTube", url: "https://www.youtube.com/user/sig99" },
    ],
  },

  // ---------- Catalog (releases under the Kandy Records name) ----------
  releases: [
    { artist: "Signal 99", title: "I Hate Biscuits", year: "", url: "https://signal99.bandcamp.com" },
    { artist: "Signal 99", title: "Armed & Dangerous Vol 1", year: "", url: "https://signal99.bandcamp.com/album/armed-and-dangerous" },
    { artist: "Signal 99", title: "The Gospel", year: "", url: "https://signal99.bandcamp.com" },
    { artist: "Signal 99", title: "American Monster", year: "2017", url: "https://signal99.bandcamp.com" },
  ],

  // ---------- Tools ----------
  // Add a tool: copy a line, change the words. "status" is "live" or "soon".
  tools: [
    {
      slug: "flyers",
      name: "StapleGun",
      kicker: "Flyer Maker",
      blurb: "Build a show flyer in minutes. Add bands, date, venue, and artwork; download for print or socials, QR code included.",
      url: "https://flyers.kandyrecords.com",
      status: "live",
    },
    {
      slug: "stageplot",
      name: "RigPlot",
      kicker: "Stage Plot Designer",
      blurb: "Drag your amps, drums, mics, and monitors onto a stage, add your input list, and send the sound engineer a clean PDF.",
      url: "https://stageplot.kandyrecords.com",
      status: "live",
    },
    {
      slug: "signal-lock",
      name: "Signal Lock",
      kicker: "iPhone App",
      badge: "Coming soon · iPhone",
      blurb: "Tune. Practice. Perform. A free guitar and bass tuner, metronome, and setlist tool for iPhone, with an optional one-time Pro upgrade.",
      url: "/signal-lock",
      status: "soon",
    },
    {
      slug: "setlist",
      name: "Setlist Builder",
      kicker: "Coming Soon",
      blurb: "Timed setlists with tuning notes and a printable stage copy.",
      url: "",
      status: "soon",
    },
    {
      slug: "budget",
      name: "Tour Budget",
      kicker: "Coming Soon",
      blurb: "Gas, lodging, guarantees, and merch math on one sheet so you know before you leave.",
      url: "",
      status: "soon",
    },
  ],
};
