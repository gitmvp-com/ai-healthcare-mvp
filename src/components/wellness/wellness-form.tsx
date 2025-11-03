"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function WellnessForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Wellness entry logged successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Mental Wellness</CardTitle>
        <CardDescription>Track your mental health</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mood">Mood</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="HAPPY">Happy</SelectItem>
                <SelectItem value="SAD">Sad</SelectItem>
                <SelectItem value="ANXIOUS">Anxious</SelectItem>
                <SelectItem value="STRESSED">Stressed</SelectItem>
                <SelectItem value="NEUTRAL">Neutral</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="happiness">Happiness Level (1-10)</Label>
            <Input id="happiness" type="number" min="1" max="10" placeholder="7" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sleep">Sleep Quality</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select sleep quality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GOOD">Good</SelectItem>
                <SelectItem value="AVERAGE">Average</SelectItem>
                <SelectItem value="BAD">Bad</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="stress">Stress Level</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select stress level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STRESSED">Not Stressed</SelectItem>
                <SelectItem value="SLIGHTLY">Slightly Stressed</SelectItem>
                <SelectItem value="MODERATELY">Moderately Stressed</SelectItem>
                <SelectItem value="HIGHLY">Highly Stressed</SelectItem>
                <SelectItem value="EXTREMELY">Extremely Stressed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Log Wellness</Button>
        </form>
      </CardContent>
    </Card>
  );
}
