# emwahib.id — Dashboard Admin

Website profil Dr. H. M. Wahib dengan dashboard admin untuk mengedit konten tanpa coding.

## Struktur

- **Halaman publik** (`/`) — menampilkan profil, dibaca langsung dari database.
- **Dashboard admin** (`/admin`) — login dengan satu password admin, lalu edit di `/admin/dashboard`.
- **Data yang bisa diedit lewat dashboard:** Hero (nama, headline, foto, statistik), Tentang (judul, 6 foto, narasi), Pendidikan, Pencapaian (Menjabat/Program/Training/Sertifikasi), Fokus Kerja, Kutipan, dan Kontak.
- **Belum masuk dashboard** (masih statis di kode, bisa ditambahkan nanti kalau dibutuhkan): Galeri foto, Publikasi Media, link Video.

## Deploy ke Vercel — langkah demi langkah

### 1. Push kode ini ke GitHub

```bash
cd emwahib-app
git init
git add .
git commit -m "Initial commit"
```
Buat repo baru di GitHub, lalu:
```bash
git remote add origin <url-repo-kamu>
git push -u origin main
```

### 2. Import ke Vercel

1. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repo GitHub tadi.
2. Framework Preset otomatis terdeteksi sebagai **Next.js**. Klik **Deploy** dulu (nanti akan error karena env var belum diisi — itu wajar, lanjut ke langkah berikut).

### 3. Tambahkan Database (Postgres)

1. Di halaman project Vercel → tab **Storage** → **Create Database** → pilih **Postgres** (biasanya via Neon).
2. Ikuti wizard-nya, lalu **Connect** ke project ini.
3. Vercel otomatis mengisi env var `POSTGRES_URL` — tidak perlu diisi manual.

### 4. Tambahkan Blob Storage (untuk upload foto)

1. Masih di tab **Storage** → **Create Database** → pilih **Blob**.
2. **Connect** ke project ini.
3. Vercel otomatis mengisi env var `BLOB_READ_WRITE_TOKEN`.

### 5. Set env var admin

Di **Project Settings → Environment Variables**, tambahkan:

| Nama | Nilai |
|---|---|
| `ADMIN_PASSWORD` | Password pilihan kamu untuk login ke `/admin` |
| `AUTH_SECRET` | String acak panjang. Generate dengan `openssl rand -hex 32` (atau situs random string generator manapun) |

### 6. Redeploy

Kembali ke tab **Deployments** → klik titik tiga pada deployment terakhir → **Redeploy**. Setelah selesai, database akan otomatis terisi dengan konten awal (hasil migrasi dari situs lama) saat pertama kali halaman diakses.

### 7. Selesai

- Situs publik: `https://<project-kamu>.vercel.app` (atau domain `emwahib.id` kalau sudah dihubungkan di tab **Domains**)
- Dashboard admin: `https://<project-kamu>.vercel.app/admin`, login pakai `ADMIN_PASSWORD` yang kamu set tadi.

## Menghubungkan domain emwahib.id

Di tab **Domains** pada project Vercel, tambahkan `emwahib.id`, lalu ikuti instruksi untuk mengarahkan DNS domain (biasanya menambahkan record `A` atau `CNAME` di pengelola domain kamu).

## Pengembangan lokal

```bash
npm install
cp .env.example .env.local   # lalu isi nilainya
npm run dev
```
Untuk development lokal, `POSTGRES_URL` bisa memakai database Postgres lokal atau tetap connect ke Postgres yang sama di Vercel (ambil connection string dari dashboard Vercel).

## Catatan keamanan / lanjutan

- Autentikasi admin sengaja dibuat sederhana (satu password, satu sesi) karena hanya dipakai satu admin. Kalau nanti butuh multi-user dengan role berbeda, perlu ditambahkan sistem user & login yang lebih lengkap.
- `npm audit` masih menandai 2 kerentanan level "high" bawaan dari Next.js 14 — sudah dipatch ke versi terbaru di jalur 14.x (14.2.35), tapi beberapa isu baru selesai total di Next 15/16 (perubahan besar pada App Router). Untuk situs profil sederhana yang di-host di Vercel (yang menangani proxy/edge layer secara terkelola), risikonya rendah, tapi upgrade ke Next 15+ disarankan sebagai langkah pengerasan berikutnya kalau ada waktu.
- Galeri foto & Publikasi Media belum bisa diedit dari dashboard (sesuai prioritas awal: profil tokoh dulu). Kalau nanti mau ditambahkan, pola yang sama (tabel `profile` di Postgres + upload ke Blob) tinggal direplikasi.
