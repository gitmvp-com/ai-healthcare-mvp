"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MedicationList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Medications</CardTitle>
        <CardDescription>Your current medication list</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-muted-foreground">
          No medications added yet. Start tracking to manage your medications.
        </div>
      </CardContent>
    </Card>
  );
}
