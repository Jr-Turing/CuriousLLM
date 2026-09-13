"use client";

import Link from "next/link";
import { CuriousLogo } from "@/components/brand/CuriousLogo";
import { LinkButton } from "@/components/ui/Button";

export function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8">
        <Link href="/">
          <CuriousLogo size={24} />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#exam-intelligence" className="hover:text-ink">Exam intelligence</a>
        </nav>
        <div className="flex items-center gap-3">
          <LinkButton href="/dashboard" variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </LinkButton>
          <LinkButton href="/dashboard" variant="primary" size="sm">
            Start preparing
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
