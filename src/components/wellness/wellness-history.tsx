"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WellnessHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wellness History</CardTitle>
        <CardDescription>Your mental wellness journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-muted-foreground">
          No wellness entries yet. Start logging to track your mental health.
        </div>
      </CardContent>
    </Card>
  );
}
