import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { AiChatInterface } from "@/components/ai-chat/ai-chat-interface";

export default async function AiChatPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav user={user} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Health Assistant</h1>
        <AiChatInterface />
      </main>
    </div>
  );
}
