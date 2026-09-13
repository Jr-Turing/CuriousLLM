"use client";

import { useRouter, usePathname } from "next/navigation";
import { subjects } from "@/lib/mock-data/subjects";

export function SubjectPicker({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={current}
      onChange={(e) => router.push(`${pathname}?subject=${e.target.value}`)}
      className="rounded border border-line bg-surface px-3.5 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
      aria-label="Choose subject"
    >
      {subjects.map((s) => (
        <option key={s.id} value={s.id}>
          {s.name}
        </option>
      ))}
    </select>
  );
}
