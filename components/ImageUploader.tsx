"use client";

import { useRef, useState } from "react";

export default function ImageUploader({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Upload gagal.");
        return;
      }
      onChange(data.url);
    } catch {
      setError("Upload gagal, coba lagi.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <div className="admin-image-row">
        {value ? (
          <img src={value} alt={label ?? "preview"} className="admin-image-preview" />
        ) : (
          <div className="admin-image-preview" />
        )}
        <button
          type="button"
          className="admin-upload-btn"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Mengunggah..." : "Ganti Foto"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = "";
          }}
        />
      </div>
      {error && <div className="admin-error">{error}</div>}
    </div>
  );
}
