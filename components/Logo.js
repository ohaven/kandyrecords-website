// Kandy Records mark: a record with a candy-pink label.
// Swap this for a real logo file later: put it in public/images/ and
// replace the <svg> below with <img src="/images/logo.svg" alt="Kandy Records" />.
export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#1a1618" stroke="#342d30" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#2b2527" strokeWidth="2" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="#2b2527" strokeWidth="2" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="#2b2527" strokeWidth="2" />
      <circle cx="50" cy="50" r="18" fill="#ff3d7f" />
      <circle cx="50" cy="50" r="4" fill="#0f0d0e" />
      <path d="M50 32 a18 18 0 0 1 18 18" fill="none" stroke="#ffb3cd" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function HeroArt() {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="vinyl" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2426" />
          <stop offset="100%" stopColor="#141113" />
        </radialGradient>
        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#vinyl)" stroke="#3a3235" strokeWidth="3" />
      {[170, 150, 130, 110, 92].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#2f292b" strokeWidth="2" />
      ))}
      <circle cx="200" cy="200" r="70" fill="#ff3d7f" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="#ffb3cd" strokeWidth="2" strokeDasharray="4 8" />
      <text x="200" y="192" textAnchor="middle" fontFamily="Anton, Impact, sans-serif" fontSize="30" fill="#fff" letterSpacing="2">KANDY</text>
      <text x="200" y="220" textAnchor="middle" fontFamily="Work Sans, sans-serif" fontSize="13" fill="#fff" letterSpacing="4" fontWeight="700">RECORDS</text>
      <circle cx="200" cy="200" r="7" fill="#0f0d0e" />
      <circle cx="200" cy="200" r="190" fill="url(#shine)" />
    </svg>
  );
}
