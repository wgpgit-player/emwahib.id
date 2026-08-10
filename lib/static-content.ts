// Gallery + media content — not yet part of the admin dashboard (out of scope for v1,
// which focuses on the "profil tokoh" fields). Wire these into the DB later the same
// way profile.ts is, if/when gallery & media management get prioritized.

export const partnerLogos = [
  { slug: "lpbi-nu", alt: "LPBI NU" },
  { slug: "majelis-ulama-indonesia", alt: "Majelis Ulama Indonesia" },
  { slug: "nu-care-lazisnu", alt: "NU Care - LAZISNU" },
  { slug: "ziswaf-ct-arsa", alt: "ZISWAF CT ARSA" },
  { slug: "ranting-nu-grogol-selatan", alt: "Ranting NU Grogol Selatan" },
  { slug: "ojolali-berkah-nusantara", alt: "Ojolali Berkah Nusantara" },
  { slug: "bpkh", alt: "BPKH" },
  { slug: "lazismu", alt: "LAZISMU" },
  { slug: "santri-siaga-bencana", alt: "Santri Siaga Bencana" },
  { slug: "urc-lintas-kebayoran", alt: "URC Lintas Kebayoran" },
  { slug: "ecoclean-lestari-indonesia", alt: "Ecoclean Lestari Indonesia" },
].map((p) => ({ ...p, src: `/images/partner-${p.slug}.png` }));

export const galleryImages = Array.from({ length: 21 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/images/gallery-${n}.jpg`, alt: `Dokumentasi kegiatan ${i + 1}` };
});

export const mediaArticles = [
  {
    outlet: "CNN Indonesia",
    tag: "Nasional",
    title: "Ziswaf CT ARSA Luncurkan “Ramadan Seru”, Permudah Berbuat Baik",
    date: "27 Feb 2025",
    url: "https://www.cnnindonesia.com/gaya-hidup/20250227143913-284-1203130/ziswaf-ct-arsa-luncurkan-ramadan-seru-permudah-berbuat-baik",
    image: "/images/media-featured.jpg",
  },
  {
    outlet: "CNN Indonesia",
    tag: "Ekonomi",
    title: "CT Arsa Luncurkan Ziswaf, Lembaga Amil Zakat yang Berizin Resmi",
    date: "18 Apr 2023",
    url: "https://www.cnnindonesia.com/ekonomi/20230418155802-83-939414/ct-arsa-luncurkan-ziswaf-lembaga-amil-zakat-yang-berizin-resmi",
    image: "/images/media-side-1.jpg",
  },
  {
    outlet: "detikcom",
    tag: "Nasional",
    title: "CT Arsa Luncurkan Ziswaf, Bayar Zakat 100 Persen Transparan Tanpa Potongan",
    date: "detiknews",
    url: "https://news.detik.com/berita/d-6680315/ct-arsa-luncurkan-ziswaf-bayar-zakat-100-persen-transparan-tanpa-potongan",
    image: "/images/media-side-2.jpg",
  },
  {
    outlet: "detikcom",
    tag: "Nasional",
    title: "Kemenag Berikan Izin Operasional Lembaga Amil Zakat CT ARSA Foundation",
    date: "detiknews",
    url: "https://news.detik.com/berita/d-6256327/kemenag-berikan-izin-operasional-lembaga-amil-zakat-ct-arsa-foundation",
    image: "/images/media-side-3.jpg",
  },
  {
    outlet: "detikcom",
    tag: "Khazanah",
    title: "ZISWAF CTARSA dan Muslimat NU Salurkan Bantuan untuk Korban Kebakaran Manggarai",
    date: "detikHikmah",
    url: "https://www.detik.com/hikmah/khazanah/d-7594533/ziswaf-ctarsa-dan-muslimat-nu-salurkan-bantuan-untuk-korban-kebakaran-manggarai",
    image: "/images/media-side-4.jpg",
  },
  {
    outlet: "detikcom",
    tag: "Ziswaf",
    title: "Sedekah Tanpa Potongan, Bonus Tambahan dari Ziswaf CT ARSA dan Allo Bank",
    date: "detikHikmah",
    url: "https://www.detik.com/hikmah/ziswaf/d-7798668/sedekah-tanpa-potongan-bonus-tambahan-dari-ziswaf-ct-arsa-dan-allo-bank",
  },
  {
    outlet: "detikcom",
    tag: "Ziswaf",
    title: "Kolaborasi Aksi Kebaikan, Ratusan Anak CT ARSA Dapat Perlindungan Asuransi",
    date: "detikHikmah",
    url: "https://www.detik.com/hikmah/ziswaf/d-8355348/kolaborasi-aksi-kebaikan-ratusan-anak-ct-arsa-dapat-perlindungan-asuransi",
  },
  {
    outlet: "Editor.id",
    tag: "Nasional",
    title: "LAZ CT ARSA Kantongi SK Izin Kemenag dalam Mengumpulkan dan Mendistribusikan Zakat di Indonesia",
    date: "Editor.id",
    url: "https://editor.id/laz-ct-arsa-kantongi-sk-izin-kemenag-dalam-mengumpulkan-dan-mendistribusikan-zakat-di-indonesia/",
  },
];
