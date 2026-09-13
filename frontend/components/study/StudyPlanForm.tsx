"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function StudyPlanForm({ onGenerate }: { onGenerate: (input: { examDate: string; hours: number; level: string }) => void }) {
  const [examDate, setExamDate] = useState("2026-10-02");
  const [hours, setHours] = useState(3);
  const [level, setLevel] = useState("intermediate");

  return (
    <form
      className="grid gap-4 rounded-md border border-line bg-surface p-5 sm:grid-cols-3"
      onSubmit={(e) => {
        e.preventDefault();
        onGenerate({ examDate, hours, level });
      }}
    >
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Exam date</span>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Hours per day</span>
        <input
          type="number"
          min={1}
          max={10}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Current level</span>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <div className="sm:col-span-3">
        <Button type="submit">Generate study plan</Button>
      </div>
    </form>
  );
}
