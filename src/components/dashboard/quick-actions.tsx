"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Pill, Brain, MessageSquare } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Track Symptoms
          </CardTitle>
          <CardDescription>
            Log your current symptoms and monitor patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard/symptoms">
            <Button className="w-full">Log Symptom</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5" />
            Manage Medications
          </CardTitle>
          <CardDescription>
            Add and track your medication schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard/medications">
            <Button className="w-full">Add Medication</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Mental Wellness
          </CardTitle>
          <CardDescription>
            Track your mood, sleep, and stress levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard/wellness">
            <Button className="w-full">Log Wellness</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            AI Health Assistant
          </CardTitle>
          <CardDescription>
            Chat with AI for health insights and guidance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/dashboard/ai-chat">
            <Button className="w-full">Start Chat</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
