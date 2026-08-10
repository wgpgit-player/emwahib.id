import { getProfile } from "@/lib/db";
import ProfileEditor from "@/components/ProfileEditor";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const profile = await getProfile();
  return <ProfileEditor initialProfile={profile} />;
}
