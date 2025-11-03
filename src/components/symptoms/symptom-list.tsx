"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SymptomList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Symptoms</CardTitle>
        <CardDescription>Your symptom history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-muted-foreground">
          No symptoms logged yet. Start tracking to see your history.
        </div>
      </CardContent>
    </Card>
  );
}
