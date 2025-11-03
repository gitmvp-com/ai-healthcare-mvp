import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { MedicationForm } from "@/components/medications/medication-form";
import { MedicationList } from "@/components/medications/medication-list";

export default async function MedicationsPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={user} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Medication Management</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <MedicationForm />
          <MedicationList />
        </div>
      </main>
    </div>
  );
}
