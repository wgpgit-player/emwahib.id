"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Profile } from "@/lib/profile-types";
import ImageUploader from "@/components/ImageUploader";

export default function ProfileEditor({ initialProfile }: { initialProfile: Profile }) {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setProfile((p) => ({ ...p, [key]: value }));
    setSaved(false);
  }

  async function onSave() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Gagal menyimpan.");
        return;
      }
      setSaved(true);
      router.refresh();
    } catch {
      setError("Gagal menyimpan, periksa koneksi internet.");
    } finally {
      setSaving(false);
    }
  }

  async function onLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <div className="admin-header">
        <div>
          <h1>Dashboard Profil</h1>
          <div className="sub">emwahib.id — kelola konten profil tokoh</div>
        </div>
        <button className="admin-logout" onClick={onLogout}>
          Keluar
        </button>
      </div>

      <div className="admin-body">
        {error && <div className="admin-error">{error}</div>}
        {saved && <div className="admin-success">Tersimpan.</div>}

        {/* ---------- Identitas & Hero ---------- */}
        <section className="admin-section">
          <h2>Identitas &amp; Hero</h2>
          <div className="hint">Nama, headline, dan foto besar di bagian atas halaman.</div>

          <div className="admin-field">
            <label>Nama lengkap</label>
            <input value={profile.name} onChange={(e) => update("name", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Jabatan / titel (ditampilkan di footer)</label>
            <input value={profile.titles} onChange={(e) => update("titles", e.target.value)} />
          </div>

          <div className="admin-grid-2">
            <div className="admin-field">
              <label>Headline hero</label>
              <input value={profile.heroHeadline} onChange={(e) => update("heroHeadline", e.target.value)} />
            </div>
            <div className="admin-field">
              <label>Headline hero (bagian berwarna)</label>
              <input
                value={profile.heroHeadlineHighlight}
                onChange={(e) => update("heroHeadlineHighlight", e.target.value)}
              />
            </div>
          </div>

          <div className="admin-field">
            <label>Deskripsi singkat (di bawah headline)</label>
            <textarea value={profile.heroLede} onChange={(e) => update("heroLede", e.target.value)} />
          </div>

          <div className="admin-field">
            <label>Foto hero (background besar)</label>
            <ImageUploader value={profile.heroPhoto} onChange={(url) => update("heroPhoto", url)} label="Foto hero" />
          </div>

          <div className="admin-field">
            <label>Statistik hero (4 angka)</label>
            {profile.heroStats.map((s, i) => (
              <div className="admin-repeat-item" key={i}>
                <div className="admin-grid-2">
                  <div className="admin-field">
                    <label>Angka</label>
                    <input
                      value={s.num}
                      onChange={(e) => {
                        const next = [...profile.heroStats];
                        next[i] = { ...next[i], num: e.target.value };
                        update("heroStats", next);
                      }}
                    />
                  </div>
                  <div className="admin-field">
                    <label>Label</label>
                    <input
                      value={s.label}
                      onChange={(e) => {
                        const next = [...profile.heroStats];
                        next[i] = { ...next[i], label: e.target.value };
                        update("heroStats", next);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-field">
            <label>Catatan di bawah statistik</label>
            <input value={profile.heroStatsNote} onChange={(e) => update("heroStatsNote", e.target.value)} />
          </div>
        </section>

        {/* ---------- Tentang ---------- */}
        <section className="admin-section">
          <h2>Tentang</h2>
          <div className="hint">Judul, 6 foto (3 kiri, 3 kanan), dan 3 kolom narasi singkat.</div>

          <div className="admin-field">
            <label>Judul section</label>
            <input value={profile.aboutHeading} onChange={(e) => update("aboutHeading", e.target.value)} />
          </div>

          <div className="admin-field">
            <label>6 Foto (urutan: kiri 1-3, kanan 4-6)</label>
            <div className="admin-grid-2">
              {profile.aboutPhotos.map((src, i) => (
                <ImageUploader
                  key={i}
                  value={src}
                  onChange={(url) => {
                    const next = [...profile.aboutPhotos];
                    next[i] = url;
                    update("aboutPhotos", next);
                  }}
                  label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="admin-field">
            <label>Narasi (3 kolom)</label>
            {profile.aboutNarrative.map((n, i) => (
              <div className="admin-repeat-item" key={i}>
                <div className="admin-field">
                  <label>Label</label>
                  <input
                    value={n.label}
                    onChange={(e) => {
                      const next = [...profile.aboutNarrative];
                      next[i] = { ...next[i], label: e.target.value };
                      update("aboutNarrative", next);
                    }}
                  />
                </div>
                <div className="admin-field">
                  <label>Teks</label>
                  <textarea
                    value={n.text}
                    onChange={(e) => {
                      const next = [...profile.aboutNarrative];
                      next[i] = { ...next[i], text: e.target.value };
                      update("aboutNarrative", next);
                    }}
                  />
                </div>
                <div className="admin-field">
                  <label>Tag kecil (mis. &quot;Sejak 1974&quot;)</label>
                  <input
                    value={n.tag}
                    onChange={(e) => {
                      const next = [...profile.aboutNarrative];
                      next[i] = { ...next[i], tag: e.target.value };
                      update("aboutNarrative", next);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Pendidikan ---------- */}
        <section className="admin-section">
          <h2>Pendidikan</h2>
          <div className="hint">Daftar riwayat pendidikan beserta logo institusi.</div>

          {profile.education.map((edu, i) => (
            <div className="admin-repeat-item" key={edu.key}>
              <button
                type="button"
                className="admin-remove"
                onClick={() => update("education", profile.education.filter((_, idx) => idx !== i))}
                aria-label="Hapus"
              >
                &times;
              </button>
              <div className="admin-grid-2">
                <div className="admin-field">
                  <label>Tahun</label>
                  <input
                    value={edu.year}
                    onChange={(e) => {
                      const next = [...profile.education];
                      next[i] = { ...next[i], year: e.target.value };
                      update("education", next);
                    }}
                  />
                </div>
                <div className="admin-field">
                  <label>Nama institusi</label>
                  <input
                    value={edu.name}
                    onChange={(e) => {
                      const next = [...profile.education];
                      next[i] = { ...next[i], name: e.target.value };
                      update("education", next);
                    }}
                  />
                </div>
              </div>
              <div className="admin-field">
                <label>Logo</label>
                <ImageUploader
                  value={edu.logo}
                  onChange={(url) => {
                    const next = [...profile.education];
                    next[i] = { ...next[i], logo: url };
                    update("education", next);
                  }}
                  label={edu.name}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="admin-add-btn"
            onClick={() =>
              update("education", [
                ...profile.education,
                { key: `edu-${Date.now()}`, year: "", name: "", logo: "" },
              ])
            }
          >
            + Tambah riwayat pendidikan
          </button>
        </section>

        {/* ---------- Pencapaian ---------- */}
        <section className="admin-section">
          <h2>Pencapaian</h2>
          <div className="hint">Empat kelompok: Menjabat, Pengelolaan Program, Training, Sertifikasi.</div>

          {profile.achievements.map((group, gi) => (
            <div key={group.key} style={{ marginBottom: 22 }}>
              <div className="admin-field">
                <label>Label kelompok</label>
                <input
                  value={group.label}
                  onChange={(e) => {
                    const next = [...profile.achievements];
                    next[gi] = { ...next[gi], label: e.target.value };
                    update("achievements", next);
                  }}
                />
              </div>
              {group.items.map((item, ii) => (
                <div className="admin-repeat-item" key={ii}>
                  <button
                    type="button"
                    className="admin-remove"
                    onClick={() => {
                      const next = [...profile.achievements];
                      next[gi] = { ...next[gi], items: next[gi].items.filter((_, idx) => idx !== ii) };
                      update("achievements", next);
                    }}
                    aria-label="Hapus"
                  >
                    &times;
                  </button>
                  <textarea
                    value={item}
                    onChange={(e) => {
                      const next = [...profile.achievements];
                      const items = [...next[gi].items];
                      items[ii] = e.target.value;
                      next[gi] = { ...next[gi], items };
                      update("achievements", next);
                    }}
                  />
                </div>
              ))}
              <button
                type="button"
                className="admin-add-btn"
                onClick={() => {
                  const next = [...profile.achievements];
                  next[gi] = { ...next[gi], items: [...next[gi].items, ""] };
                  update("achievements", next);
                }}
              >
                + Tambah item {group.label}
              </button>
            </div>
          ))}
        </section>

        {/* ---------- Fokus Kerja ---------- */}
        <section className="admin-section">
          <h2>Fokus Kerja</h2>
          <div className="hint">Judul section, daftar ranah pengabdian, dan foto pendukung.</div>

          <div className="admin-field">
            <label>Judul section</label>
            <input value={profile.focusHeading} onChange={(e) => update("focusHeading", e.target.value)} />
          </div>

          {profile.focusItems.map((f, i) => (
            <div className="admin-repeat-item" key={i}>
              <button
                type="button"
                className="admin-remove"
                onClick={() => update("focusItems", profile.focusItems.filter((_, idx) => idx !== i))}
                aria-label="Hapus"
              >
                &times;
              </button>
              <div className="admin-field">
                <label>Judul</label>
                <input
                  value={f.title}
                  onChange={(e) => {
                    const next = [...profile.focusItems];
                    next[i] = { ...next[i], title: e.target.value };
                    update("focusItems", next);
                  }}
                />
              </div>
              <div className="admin-field">
                <label>Deskripsi</label>
                <input
                  value={f.desc}
                  onChange={(e) => {
                    const next = [...profile.focusItems];
                    next[i] = { ...next[i], desc: e.target.value };
                    update("focusItems", next);
                  }}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="admin-add-btn"
            onClick={() => update("focusItems", [...profile.focusItems, { title: "", desc: "" }])}
          >
            + Tambah ranah pengabdian
          </button>

          <div className="admin-field" style={{ marginTop: 16 }}>
            <label>Foto pendukung</label>
            <ImageUploader value={profile.focusPhoto} onChange={(url) => update("focusPhoto", url)} label="Foto fokus kerja" />
          </div>
          <div className="admin-field">
            <label>Teks badge di atas foto</label>
            <input value={profile.focusBadge} onChange={(e) => update("focusBadge", e.target.value)} />
          </div>
        </section>

        {/* ---------- Kutipan ---------- */}
        <section className="admin-section">
          <h2>Kutipan / Prinsip Kerja</h2>
          <div className="admin-field">
            <label>Kutipan 1</label>
            <textarea value={profile.quote1} onChange={(e) => update("quote1", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Sumber kutipan 1</label>
            <input value={profile.quote1Who} onChange={(e) => update("quote1Who", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Kutipan 2</label>
            <textarea value={profile.quote2} onChange={(e) => update("quote2", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Sumber kutipan 2</label>
            <input value={profile.quote2Who} onChange={(e) => update("quote2Who", e.target.value)} />
          </div>
        </section>

        {/* ---------- Kontak ---------- */}
        <section className="admin-section">
          <h2>Kontak</h2>
          <div className="admin-field">
            <label>Foto kontak</label>
            <ImageUploader value={profile.contactPhoto} onChange={(url) => update("contactPhoto", url)} label="Foto kontak" />
          </div>
          <div className="admin-field">
            <label>Email</label>
            <input value={profile.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Nomor WhatsApp (format: +62 812 ...)</label>
            <input value={profile.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} />
          </div>
          <div className="admin-field">
            <label>Alamat</label>
            <textarea value={profile.contactAddress} onChange={(e) => update("contactAddress", e.target.value)} />
          </div>
        </section>
      </div>

      <div className="admin-save-bar">
        {error && <span style={{ color: "#a32020", fontSize: "0.85rem", fontWeight: 600 }}>{error}</span>}
        {saved && <span style={{ color: "var(--teal-deep)", fontSize: "0.85rem", fontWeight: 700 }}>Tersimpan ✓</span>}
        <button className="admin-btn" style={{ width: "auto", padding: "13px 32px" }} onClick={onSave} disabled={saving}>
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
}
