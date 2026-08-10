import { getProfile } from "@/lib/db";
import { partnerLogos, galleryImages, mediaArticles } from "@/lib/static-content";
import Nav from "@/components/Nav";
import AchievementTabs from "@/components/AchievementTabs";
import { LightboxProvider, LightboxTrigger } from "@/components/Lightbox";

export const revalidate = 0;

export default async function HomePage() {
  const profile = await getProfile();

  return (
    <LightboxProvider>
      <Nav />

      <div className="hero-outer">
        <div className="hero-panel">
          <img className="hero-bg-photo" src={profile.heroPhoto} alt={profile.name} />
          <div className="hero-scrim" />
          <div className="hero-dots" />
          <div className="hero-main">
            <div className="hero-text">
              <h1>
                {profile.heroHeadline} <span className="hl">{profile.heroHeadlineHighlight}</span>
              </h1>
              <p className="lede">{profile.heroLede}</p>
              <div className="cta-row">
                <a className="btn btn-lime" href="#pencapaian">
                  Lihat Pencapaian
                </a>
                <a className="btn btn-outline-dark" href="#kontak">
                  Hubungi Beliau
                </a>
              </div>
            </div>
          </div>

          <div className="stats-bar">
            {profile.heroStats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="stats-note">{profile.heroStatsNote}</p>
      </div>

      <div className="partner-marquee">
        <div className="partner-track">
          {[...partnerLogos, ...partnerLogos].map((p, i) => (
            <div className="partner-item" key={i}>
              <img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>

      <section id="tentang">
        <div className="wrap">
          <div className="about-frame">
            <div className="frame-photos frame-left">
              <img src={profile.aboutPhotos[0]} alt="Dokumentasi kegiatan 1" className="fp fp-a" />
              <img src={profile.aboutPhotos[1]} alt="Dokumentasi kegiatan 2" className="fp fp-b" />
              <img src={profile.aboutPhotos[2]} alt="Dokumentasi kegiatan 3" className="fp fp-c" />
            </div>
            <div className="frame-center">
              <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
                Tentang
              </div>
              <h2>{profile.aboutHeading}</h2>
            </div>
            <div className="frame-photos frame-right">
              <img src={profile.aboutPhotos[3]} alt="Dokumentasi kegiatan 4" className="fp fp-a" />
              <img src={profile.aboutPhotos[4]} alt="Dokumentasi kegiatan 5" className="fp fp-b" />
              <img src={profile.aboutPhotos[5]} alt="Dokumentasi kegiatan 6" className="fp fp-c" />
            </div>
          </div>

          <div className="about-narrative">
            {profile.aboutNarrative.map((n, i) => (
              <div className="narrative-col" key={i}>
                <div className="narrative-label">{n.label}</div>
                <p>{n.text}</p>
                <div className="narrative-tag">{n.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pendidikan" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Perjalanan Akademik</div>
            <h2>Pendidikan</h2>
          </div>
          <div className="edu-grid">
            {profile.education.map((e) => (
              <div className="edu-card" key={e.key}>
                <div className="edu-logo">
                  <img src={e.logo} alt={e.name} />
                </div>
                <div className="edu-info">
                  <div className="yr">{e.year}</div>
                  <div className="nm">{e.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fokus">
        <div className="focus-wrap">
          <div className="eyebrow on-dark">Fokus Kerja</div>
          <h2>{profile.focusHeading}</h2>
          <div className="focus-grid">
            <ul className="focus-list">
              {profile.focusItems.map((f, i) => (
                <li className="focus-item" key={i}>
                  <div className="n">{i + 1}</div>
                  <div>
                    <div className="t">{f.title}</div>
                    <div className="d">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="focus-visual">
              <img src={profile.focusPhoto} alt={profile.name} />
              <div className="focus-cta-badge">{profile.focusBadge}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-strip">
        <span>Amanah</span>
        <span className="sep">✦</span>
        <span>Kolaboratif</span>
        <span className="sep">✦</span>
        <span>Berdampak</span>
      </div>

      <section id="pencapaian" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Rekam Jejak</div>
            <h2>
              Pencapaian &amp; <span className="pill">Kompetensi</span>
            </h2>
          </div>
          <AchievementTabs groups={profile.achievements} />
        </div>
      </section>

      <section>
        <div className="quote-wrap">
          <div className="eyebrow on-dark">Prinsip Kerja</div>
          <h2>Dua Sisi dari Satu Tujuan</h2>
          <div className="quote-grid">
            <div className="quote-card">
              <p>&ldquo;{profile.quote1}&rdquo;</p>
              <div className="who">
                <div className="av">W</div>
                {profile.quote1Who}
              </div>
            </div>
            <div className="quote-card">
              <p>&ldquo;{profile.quote2}&rdquo;</p>
              <div className="who">
                <div className="av">W</div>
                {profile.quote2Who}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri">
        <div className="wrap">
          <div className="section-head section-head-center">
            <div className="eyebrow" style={{ margin: "0 auto 14px" }}>
              Dokumentasi
            </div>
            <h2>
              Galeri &amp; <span className="pill">Aktivitas</span>
            </h2>
            <p style={{ color: "var(--ink-soft)", marginTop: 10, fontWeight: 500 }}>
              Rekam jejak kegiatan lapangan, kolaborasi program, dan momen bersama komunitas.
            </p>
          </div>

          <div className="gallery-arc-frame">
            <div className="gallery-arc-wrap">
              <div className="gallery-arc">
                {[...galleryImages, ...galleryImages].map((g, i) => (
                  <div className="arc-item" key={i}>
                    <LightboxTrigger src={g.src} alt={g.alt} className="arc-card arc-big">
                      <img src={g.src} alt={g.alt} />
                    </LightboxTrigger>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="video-card">
            <div className="vc-text">
              <div className="vc-icon">&#9654;</div>
              <div>
                <h3>Video Dokumentasi</h3>
                <p>Rekaman kegiatan dan profil singkat — segera hadir setelah tautan video ditautkan.</p>
              </div>
            </div>
            <a className="btn btn-lime" href="#">
              Tonton Video
            </a>
          </div>
        </div>
      </section>

      <section id="media">
        <div className="media-wrap">
          <div className="wrap">
            <div className="media-head">
              <div className="eyebrow on-dark">Liputan</div>
              <h2>
                Artikel &amp; <span className="hl">Berita</span>
              </h2>
              <p>Ikuti perkembangan program dan kegiatan ZISWAF CT ARSA dalam membantu masyarakat Indonesia.</p>
            </div>

            <div className="media-feature-grid">
              <a className="media-feature" href={mediaArticles[0].url} target="_blank" rel="noopener noreferrer">
                <img src={mediaArticles[0].image} alt={mediaArticles[0].outlet} />
                <span className="media-tag media-tag-float">{mediaArticles[0].tag}</span>
                <div className="media-feature-text">
                  <div className="media-feature-title">{mediaArticles[0].title}</div>
                  <div className="media-feature-meta">
                    {mediaArticles[0].outlet} &middot; {mediaArticles[0].date}
                  </div>
                </div>
              </a>

              <div className="media-side-list">
                {mediaArticles.slice(1, 5).map((a, i) => (
                  <a className="media-side-item" href={a.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <img src={a.image} alt={a.outlet} />
                    <div className="media-side-text">
                      <span className="media-tag">{a.tag}</span>
                      <div className="media-side-title">{a.title}</div>
                      <div className="media-side-date">{a.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="media-table">
              {mediaArticles.slice(5).map((a, i) => (
                <a className="media-row" href={a.url} target="_blank" rel="noopener noreferrer" key={i}>
                  <div className="media-outlet">{a.outlet}</div>
                  <div className="media-title">{a.title}</div>
                  <div className="media-meta">
                    {a.date} <span className="arrow">&#8599;</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontak">
        <div className="cta-panel">
          <div>
            <div className="eyebrow">Kontak</div>
            <h2>Siap Berkolaborasi untuk Program Kemanusiaan?</h2>
            <p>
              Untuk kerja sama program kebencanaan, pengelolaan ZISWAF, atau undangan sebagai narasumber — hubungi
              langsung melalui kanal berikut.
            </p>
            <div className="hero-card-cta">
              <a className="btn btn-lime" href={`https://wa.me/${profile.contactPhone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp
              </a>
              <a className="btn btn-outline" href={`mailto:${profile.contactEmail}`}>
                Kirim Email
              </a>
            </div>
          </div>
          <div className="cta-visual">
            <img src={profile.contactPhoto} alt={profile.name} />
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">emwahib.id</div>
            <p style={{ fontSize: "0.88rem", maxWidth: "32ch", margin: 0, fontWeight: 600, opacity: 0.85 }}>
              {profile.titles}.
            </p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul>
              <li>
                <a href="#tentang">Tentang</a>
              </li>
              <li>
                <a href="#pendidikan">Pendidikan</a>
              </li>
              <li>
                <a href="#pencapaian">Pencapaian</a>
              </li>
              <li>
                <a href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Portfolio</h4>
            <ul>
              <li>PBNU / LPBI&ndash;PBNU</li>
              <li>MUI Pusat</li>
              <li>LAZIS PBNU</li>
              <li>ZISWAF CT ARSA</li>
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
              </li>
              <li>
                <a href={`https://wa.me/${profile.contactPhone.replace(/[^0-9]/g, "")}`}>{profile.contactPhone}</a>
              </li>
              <li>{profile.contactAddress}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 World Gate Project &mdash; emwahib.id</div>
          <div>Dibangun dengan amanah</div>
        </div>
      </footer>
    </LightboxProvider>
  );
}
