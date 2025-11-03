import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { SymptomForm } from "@/components/symptoms/symptom-form";
import { SymptomList } from "@/components/symptoms/symptom-list";

export default async function SymptomsPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={user} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Symptom Tracking</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <SymptomForm />
          <SymptomList />
        </div>
      </main>
    </div>
  );
}
