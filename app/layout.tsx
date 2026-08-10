import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "emwahib.id — Dr. H. M. Wahib",
  description:
    "Dr. H. M. Wahib, MH, M.Si., CWC — Direktur Lembaga ZISWAF CT ARSA dan Wakil Ketua Lembaga Penanggulangan Bencana MUI Pusat.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon-180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
