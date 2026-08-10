"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Főoldal" },
  { href: "/irodatechnika", label: "Irodatechnika" },
  { href: "/szerviz", label: "Szolgáltatások" },
  { href: "/technolit", label: "Technolit" },
  { href: "/keramia-kesek", label: "Kerámia kések" },
  { href: "/kapcsolat", label: "Kapcsolat" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Digytall Office Kft. • Irodatechnika • Szerviz • Webshop</span>
          <div className="topbar-links">
            <a href="tel:+3612380021">+36 1 238 0021</a>
            <a href="mailto:info@doky.hu">info@doky.hu</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="DOKY főoldal">
            <span className="brand-orbit">D</span>
            <span className="brand-copy"><strong>DIGYTALL OFFICE</strong><small>IRODATECHNIKA • SZERVIZ • WEBSHOP</small></span>
          </Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
            <span /><span /><span /><span className="sr-only">Menü megnyitása</span>
          </button>
          <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Fő navigáció">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Link className="nav-cta" href="/kapcsolat" onClick={() => setOpen(false)}>Ajánlatot kérek</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
