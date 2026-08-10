import { sql } from "@vercel/postgres";
import type { Profile } from "./profile-types";
import { seedProfile } from "./seed";

let initialized = false;

async function ensureTable() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS profile (
      id INT PRIMARY KEY DEFAULT 1,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT single_row CHECK (id = 1)
    );
  `;
  initialized = true;
}

/** Reads the profile row, seeding it with the original site content on first run. */
export async function getProfile(): Promise<Profile> {
  await ensureTable();
  const { rows } = await sql`SELECT data FROM profile WHERE id = 1;`;
  if (rows.length === 0) {
    await sql`INSERT INTO profile (id, data) VALUES (1, ${JSON.stringify(seedProfile)}::jsonb);`;
    return seedProfile;
  }
  return rows[0].data as Profile;
}

export async function updateProfile(next: Profile): Promise<void> {
  await ensureTable();
  await sql`
    INSERT INTO profile (id, data, updated_at)
    VALUES (1, ${JSON.stringify(next)}::jsonb, now())
    ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = now();
  `;
}
