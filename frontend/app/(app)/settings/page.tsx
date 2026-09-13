"use client";

import { PageContainer, PageHeader } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeProvider";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <PageContainer className="max-w-[720px]">
      <PageHeader title="Settings" description="Manage your profile, program and preferences." />

      <div className="space-y-6">
        <Card className="p-5">
          <h2 className="mb-4 font-serif text-lg text-ink">Profile</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Full name</span>
              <input
                defaultValue="Arvind Kumar"
                className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Email</span>
              <input
                defaultValue="arvind.kumar@curiousllm.in"
                className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
              />
            </label>
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="mb-4 font-serif text-lg text-ink">Program</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Program</span>
              <input
                defaultValue="B.Tech CSE-CS"
                className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">Semester</span>
              <input
                defaultValue="7"
                className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">University</span>
              <input
                defaultValue="MAKAUT"
                className="w-full rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-ink/30 focus:outline-none"
              />
            </label>
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="mb-4 font-serif text-lg text-ink">Appearance</h2>
          <div className="flex items-center justify-between gap-4 text-sm text-ink-soft">
            <span>Choose how CuriousLLM looks on this device.</span>
            <ThemeToggle />
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="mb-4 font-serif text-lg text-ink">Notifications</h2>
          <div className="space-y-3">
            {["Daily study reminder", "Weak topic alerts", "New PYQ pattern updates"].map((label) => (
              <label key={label} className="flex items-center justify-between text-sm text-ink-soft">
                {label}
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-accent" />
              </label>
            ))}
          </div>
        </Card>

        <div className="flex justify-end">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => router.push("/")}
              className="text-warn hover:text-warn"
            >
              <LogOut size={15} />
              Sign out
            </Button>
            <Button>Save changes</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
