import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Activity, Brain, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="font-bold text-xl">AI Healthcare</span>
          </div>
          <div className="flex gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Healthcare
            <br />
            <span className="text-primary">At Your Fingertips</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track symptoms, manage medications, monitor mental wellness, and chat with AI for personalized health insights.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="gap-2">
              Start Your Health Journey <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-blue-500" />}
            title="Symptom Tracking"
            description="Log and monitor your symptoms with detailed tracking"
          />
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-red-500" />}
            title="Medication Management"
            description="Keep track of your medications and adherence"
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-purple-500" />}
            title="Mental Wellness"
            description="Monitor your mood, sleep, and stress levels"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-green-500" />}
            title="AI Diagnostics"
            description="Get AI-powered health insights and recommendations"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
