"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/venues", label: "Venues" },
  { href: "/about", label: "The Label" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo /> Kandy Records
        </Link>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={`nav ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <a className="nav-cta" href="https://flyers.kandyrecords.com">Make a Flyer</a>
        </nav>
      </div>
    </header>
  );
}
