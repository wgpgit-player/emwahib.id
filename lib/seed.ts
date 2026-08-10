import type { Profile } from "./profile-types";

/**
 * Initial profile content, migrated from the original static site.
 * This is written to the database once, the first time the app runs
 * (see lib/db.ts -> getProfile). After that, everything is edited
 * through /admin and lives in Postgres — this file is never read again.
 */
export const seedProfile: Profile = {
  name: "Dr. H. M. Wahib, MH, M.Si., CWC",
  titles: "Direktur Lembaga ZISWAF CT ARSA · Wakil Ketua LPB MUI Pusat",
  heroHeadline: "Mengabdi Untuk Umat Lewat",
  heroHeadlineHighlight: "Aksi & Amanah",
  heroLede:
    "Dr. H. M. Wahib, MH, M.Si., CWC — Direktur Lembaga ZISWAF CT ARSA dan Wakil Ketua Lembaga Penanggulangan Bencana MUI Pusat.",
  heroPhoto: "/images/hero.jpg",
  heroStats: [
    { num: "20+", label: "Tahun di Kebencanaan" },
    { num: "6", label: "Jabatan Strategis" },
    { num: "7", label: "Sertifikasi Profesional" },
    { num: "8+", label: "Program Terlaksana" },
  ],
  heroStatsNote: "Dipercaya PBNU, MUI Pusat, dan komunitas di berbagai wilayah Indonesia",

  aboutHeading: "Dari Lampung ke Panggung Kebijakan Nasional",
  aboutPhotos: [
    "/images/about-1.jpg",
    "/images/about-2.jpg",
    "/images/about-3.jpg",
    "/images/about-4.jpg",
    "/images/about-5.jpg",
    "/images/about-6.jpg",
  ],
  aboutNarrative: [
    {
      label: "Pendidikan",
      text: "Lahir di Lampung, 22 April 1974, Dr. H. M. Wahib menempuh pendidikan pesantren hingga meraih gelar doktor di Universitas Islam Nusantara (UNINUS) pada 2025 — perpaduan yang membentuk cara pandangnya dalam kebencanaan dan filantropi Islam.",
      tag: "Sejak 1974",
    },
    {
      label: "Ojolali Ngaji",
      text: "Di Grogol Selatan, beliau menjabat Ketua Tanfidziyah Ranting NU dan mengasuh Ojolali Ngaji, majelis pengajian untuk pengemudi ojek online di bawah Yayasan Ojolali Berkah Nusantara — dakwah yang menjangkau jalanan, bukan hanya mimbar.",
      tag: "Ranting NU Grogol Selatan",
    },
    {
      label: "ZISWAF CT ARSA",
      text: "Kini beliau memimpin pengelolaan ZISWAF melalui Lembaga ZISWAF CT ARSA, menjembatani gotong royong umat dengan tata kelola filantropi yang profesional. Berdomisili di Kebayoran Lama, Jakarta Selatan.",
      tag: "Direktur, sekarang",
    },
  ],

  education: [
    { key: "mi-nu", year: "Awal", name: "MI NU Lampung", logo: "/images/edu-mi-nu.png" },
    { key: "mts-nu", year: "1990", name: "MTs NU Lampung", logo: "/images/edu-mts-nu.png" },
    { key: "ma-asshiddiqiyah", year: "1993", name: "MA Asshiddiqiyah, Jakarta", logo: "/images/edu-ma-asshiddiqiyah.jpg" },
    { key: "s1-uin", year: "2003", name: "S1 UIN Syarif Hidayatullah", logo: "/images/edu-s1-uin.jpg" },
    { key: "s2-ui", year: "2007", name: "S2 Universitas Indonesia", logo: "/images/edu-s2-ui.webp" },
    { key: "s3-uninus", year: "2025", name: "S3 UNINUS", logo: "/images/edu-s3-uninus.webp" },
  ],

  achievements: [
    {
      key: "jabatan",
      label: "Menjabat",
      items: [
        "Direktur Tanggap Darurat, Rehabilitasi dan Rekonstruksi, LPBI–PBNU",
        "Ketua PP LAZIS PBNU, 2021",
        "Ketua Tanfidziyah PRNU Grogol Selatan, Kebayoran Lama, 2022–2026",
        "Direktur Lembaga ZISWAF CT ARSA — sekarang",
        "Wakil Ketua Lembaga Penanggulangan Bencana MUI Pusat",
        "Wakil Ketua Bidang Pemberdayaan Ekonomi PD MUI DKI Jakarta",
      ],
    },
    {
      key: "program",
      label: "Pengelolaan Program",
      items: [
        "Strengthening the Capacity of Local Governments and Communities to Conduct Disaster Preparedness and Emergency Response Efforts Quickly and Effectively, 2016–2018",
        "Disaster Institutional Strengthening Program di 4 kabupaten, Jawa Timur, 2014–2015",
        "Disaster Advocacy Program di 8 kabupaten, Jawa Timur, 2011–2014",
      ],
    },
    {
      key: "training",
      label: "Training",
      items: [
        "Community Based Disaster Risk Reduction",
        "Participatory Disaster Risk Assessment (PDRA)",
        "Emergency Response Training",
        "SPHERE Project",
        "Emergency First Aid",
        "Community Organizer and Facilitator for Disaster Management",
      ],
    },
    {
      key: "sertifikasi",
      label: "Sertifikasi",
      items: [
        "Professional Certification of Disaster Management, BNPB (2017)",
        "Australia Award in Indonesia: Disaster Management and Humanitarian Action, University of Queensland (2019)",
        "National NGO Capacity Strengthening Project, Asia Regional Workshop, Kuala Lumpur (2019)",
        "Professional Certification of Nazhir Waqf (2022)",
        "Professional Certification of Amil Zakat (2023)",
        "Assessor Certification (2024)",
        "Professional Wakaf Certification (2026)",
      ],
    },
  ],

  focusHeading: "Empat Ranah Pengabdian",
  focusItems: [
    { title: "Tanggap Darurat & Rekonstruksi", desc: "Respons cepat pasca-bencana bersama LPBI–PBNU dan LPB MUI Pusat" },
    { title: "Zakat, Infak, Sedekah & Wakaf", desc: "Pengelolaan ZISWAF CT ARSA dengan standar akuntabilitas" },
    { title: "Pemberdayaan Ekonomi Umat", desc: "Penguatan kapasitas komunitas dan pemerintah daerah" },
    { title: "Advokasi & Kebijakan", desc: "Mendorong kebijakan kesiapsiagaan bencana yang inklusif" },
  ],
  focusPhoto: "/images/focus.jpg",
  focusBadge: "Siap berkolaborasi untuk program kemanusiaan berikutnya →",

  quote1:
    "Kesiapsiagaan bencana dan pengelolaan zakat–wakaf adalah dua sisi dari satu tujuan: memastikan umat tidak berjalan sendiri saat menghadapi kesulitan.",
  quote1Who: "Dr. H. M. Wahib — ZISWAF CT ARSA",
  quote2:
    "Filantropi yang kuat lahir dari data yang akurat, kepercayaan publik, dan kerja lapangan yang konsisten.",
  quote2Who: "Dr. H. M. Wahib — LPBI PBNU",

  contactPhoto: "/images/contact.jpg",
  contactEmail: "m.wahib.mh@ziswafctarsa.id",
  contactPhone: "+62 812 8132 758",
  contactAddress:
    "Komplek Ditjen Bina Marga, Jl. Kangkung No. 69 RT 14/11, Grogol Selatan, Kebayoran Lama, Jakarta Selatan 12220",
};
