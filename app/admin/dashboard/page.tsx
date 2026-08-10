import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getProfile } from "@/lib/db";
import { verifySessionToken, COOKIE_NAME } from "@/lib/auth";
import ProfileEditor from "@/components/ProfileEditor";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const token = cookies().get(COOKIE_NAME)?.value;
  const isValid = await verifySessionToken(token);
  if (!isValid) {
    redirect("/admin?next=/admin/dashboard");
  }

  const profile = await getProfile();
  return <ProfileEditor initialProfile={profile} />;
}
