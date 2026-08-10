"use client";

import { useState } from "react";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pencapaian", label: "Pencapaian" },
  { href: "#fokus", label: "Fokus Kerja" },
  { href: "#galeri", label: "Galeri" },
  { href: "#media", label: "Media" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-pill">
        <div className="brand">
          <div className="brand-mark">
            <img src="/logo-nav.png" alt="emwahib.id" />
          </div>
        </div>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="https://wa.me/6281281132758" target="_blank" rel="noopener noreferrer">
          Hubungi
        </a>
        <button className="nav-burger" aria-label="Buka menu" onClick={() => setOpen(true)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-drawer-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <div className={`nav-drawer${open ? " open" : ""}`}>
        <div className="nav-drawer-head">
          <div className="brand-mark">
            <img src="/logo-nav.png" alt="emwahib.id" style={{ height: 40, width: "auto" }} />
          </div>
          <button className="nav-drawer-close" aria-label="Tutup menu" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
        <div className="nav-drawer-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="https://wa.me/6281281132758" target="_blank" rel="noopener noreferrer">
          Hubungi
        </a>
      </div>
    </nav>
  );
}
