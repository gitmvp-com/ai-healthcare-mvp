"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function SymptomForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Symptom logged successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log a Symptom</CardTitle>
        <CardDescription>Record your current symptoms</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="symptom">Symptom Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select symptom" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="HEADACHE">Headache</SelectItem>
                <SelectItem value="NAUSEA">Nausea</SelectItem>
                <SelectItem value="FATIGUE">Fatigue</SelectItem>
                <SelectItem value="DIZZINESS">Dizziness</SelectItem>
                <SelectItem value="MUSCLE_PAIN">Muscle Pain</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="intensity">Intensity (1-10)</Label>
            <Input id="intensity" type="number" min="1" max="10" placeholder="5" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="frequency">Frequency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DAILY">Daily</SelectItem>
                <SelectItem value="WEEKLY">Weekly</SelectItem>
                <SelectItem value="MONTHLY">Monthly</SelectItem>
                <SelectItem value="RARELY">Rarely</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Log Symptom</Button>
        </form>
      </CardContent>
    </Card>
  );
}
