import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="border-b border-line bg-navy py-16 text-white md:py-20">
      <div className="mx-auto max-w-content px-5 text-center md:px-8">
        <h2 className="font-serif text-2xl md:text-[1.9rem]">Your next semester exam is closer than you think.</h2>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] text-white/70">
          Upload what you already have. CuriousLLM will tell you what matters most.
        </p>
        <div className="mt-7">
          <LinkButton href="/dashboard" size="md" className="gap-2 bg-accent text-white hover:bg-accent-deep">
            Start preparing <ArrowRight size={16} />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
