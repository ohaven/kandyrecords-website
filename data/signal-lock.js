// ============================================================
//  SIGNAL LOCK — PRODUCT SETTINGS
//  Everything the Signal Lock pages show lives here.
//  Edit the text between the quotes. Leave the quotes alone.
// ============================================================

export const signalLock = {
  name: "Signal Lock",
  byline: "by Kandy Records",
  headline: "Tune. Practice. Perform.",
  tagline: "An iPhone musician's toolkit from Kandy Records.",
  description:
    "Signal Lock is a free guitar and bass tuner, metronome, and setlist tool for iPhone, with a one-time Pro upgrade for premium finishes and a drum machine. No ads, no subscription, no account.",

  // ---------- Release status ----------
  // Leave appStoreUrl empty until the app is live. The pages show
  // "Coming Soon to the App Store" until this has a real link.
  appStoreUrl: "",
  version: "1.0",
  requires: "iOS 16.6 or later",
  device: "iPhone",

  // ---------- Pro ----------
  proPrice: "$2.99",
  proProductId: "com.orlandohaven.SignalLock.pro",

  // ---------- Contact / legal ----------
  // Support and privacy questions go here. Switch to support@kandyrecords.com
  // once forwarding is set up and verified.
  supportEmail: "signal99haven@gmail.com",
  // Name of the app operator as it will appear on the Apple developer account.
  // CONFIRM SPELLING before deploy.
  operatorName: "Orlando Haven",
  privacyEffectiveDate: "November 1, 2026",

  // ---------- Images (in public/images/signal-lock/) ----------
  icon: "/images/signal-lock/icon.png",
  screenshots: [
    { src: "/images/signal-lock/tuner-digital.jpg", alt: "Signal Lock tuner in the Digital Dark look, showing an in-tune low E", caption: "Digital Dark · free" },
    { src: "/images/signal-lock/tuner-outlaw.jpg", alt: "Signal Lock tuner in the Industrial Outlaw finish with a brass needle gauge", caption: "Industrial Outlaw · Pro" },
    { src: "/images/signal-lock/tuner-ivory.jpg", alt: "Signal Lock tuner in the Vintage Ivory finish", caption: "Vintage Ivory · Pro" },
    { src: "/images/signal-lock/drums-digital.jpg", alt: "Signal Lock drum machine with the eight practice grooves", caption: "Drum machine · Pro" },
  ],

  // ---------- Feature copy ----------
  free: [
    { title: "Tuner", text: "Fast, accurate detection down to drop-tuned low strings. Shows which string you're on and which way to turn, with haptic feedback that speeds up as you get close. Presets for Standard, Drop D, Drop C, Drop C#, Half Step Down, and Whole Step Down, plus a chromatic mode. 440 Hz or 432 Hz reference. Works with the built-in mic or a guitar interface." },
    { title: "Metronome", text: "40–240 BPM with a tap-tempo dial you can hit with your thumb. Time signatures 4/4, 3/4, 6/8, 2/4, 5/4, and 7/8. Six click sounds including kick, snare, and cowbell. Accented beat one, haptics on every beat, and it keeps playing with the screen locked." },
    { title: "Setlist mode", text: "Save a tempo and time signature for every song in the set. Tap or swipe to the next song between numbers and the metronome switches instantly. Unlimited songs, edit on the fly." },
    { title: "Two free looks", text: "Digital Dark and Digital Light: high-contrast originals built for dark stages and daylight." },
  ],
  pro: [
    { title: "Industrial Outlaw", text: "A dark premium instrument finish: brass gauges, needle dial, riveted panels." },
    { title: "Vintage Ivory", text: "A light premium instrument finish in the same brass-and-needle style." },
    { title: "Drum machine", text: "Eight practice grooves: Rock, Half-Time, Four on the Floor, Punk, Metal 16ths, Shuffle, Waltz, and 6/8. Same tempo controls as the metronome." },
  ],
};
