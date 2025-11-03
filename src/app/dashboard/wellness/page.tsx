import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { WellnessForm } from "@/components/wellness/wellness-form";
import { WellnessHistory } from "@/components/wellness/wellness-history";

export default async function WellnessPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={user} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mental Wellness</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <WellnessForm />
          <WellnessHistory />
        </div>
      </main>
    </div>
  );
}
