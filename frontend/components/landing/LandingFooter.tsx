import { CuriousLogo } from "@/components/brand/CuriousLogo";

export function LandingFooter() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <CuriousLogo size={18} />
        <p className="text-xs text-ink-faint">
          Built for MAKAUT B.Tech Students.
        </p>
      </div>
    </footer>
  );
}
