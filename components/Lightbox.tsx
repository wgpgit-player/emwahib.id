"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LightboxCtx {
  open: (src: string, alt: string) => void;
}

const Ctx = createContext<LightboxCtx | null>(null);

export function useLightbox() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLightbox must be used inside LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Ctx.Provider value={{ open: (src, alt) => setImg({ src, alt }) }}>
      {children}
      <div className={`lightbox${img ? " open" : ""}`} onClick={() => setImg(null)}>
        <button className="lightbox-close" aria-label="Tutup" onClick={() => setImg(null)}>
          &times;
        </button>
        {img && <img src={img.src} alt={img.alt} />}
      </div>
    </Ctx.Provider>
  );
}

export function LightboxTrigger({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useLightbox();
  return (
    <div className={className} onClick={() => open(src, alt)} role="button" tabIndex={0}>
      {children}
    </div>
  );
}
