"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const semesters = [3, 4, 5, 6, 7, 8];

export function SemesterSwitcher({ program, semester, university }: { program: string; semester: number; university: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(semester);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded border border-line px-3.5 py-2 text-left hover:border-ink/20"
      >
        <div>
          <p className="text-sm font-medium text-ink">{program}</p>
          <p className="text-xs text-ink-faint">Semester {current} · {university}</p>
        </div>
        <ChevronDown size={15} className="text-ink-faint" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Change semester">
        <div className="grid grid-cols-3 gap-2">
          {semesters.map((s) => (
            <button
              key={s}
              onClick={() => {
                setCurrent(s);
                setOpen(false);
              }}
              className={`rounded border px-3 py-2.5 text-sm ${
                s === current ? "border-accent bg-accent-soft text-accent-deep" : "border-line text-ink-soft hover:border-ink/25"
              }`}
            >
              Semester {s}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
}
