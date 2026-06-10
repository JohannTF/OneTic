import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Button } from "@/components/ui/buttons/Button";
import { FadeIn } from "@/components/ui/interactions/FadeIn";
import type { PortadaStat } from "@/types/portada";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats: PortadaStat[];
  cta: { label: string; href: string };
};

export function Hero({ eyebrow, title, description, stats, cta }: HeroProps) {
  return (
    <div className="flex flex-col gap-9">
      <FadeIn>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      </FadeIn>

      <FadeIn delay={0.07}>
        <h1 className="font-display text-text-primary max-w-[18ch] text-balance text-[32px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-[40px] lg:text-[46px] xl:text-[52px]">
          {title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.13}>
        <p className="text-text-secondary max-w-[52ch] text-[16px] leading-[1.8] lg:text-[17px]">
          {description}
        </p>
      </FadeIn>

      <FadeIn delay={0.19}>
        <div className="flex items-stretch divide-x divide-border-subtle">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 px-6 first:pl-0 last:pr-0">
              <span className="font-display text-text-primary text-[32px] font-bold leading-none tracking-[-0.03em]">
                {s.value}
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <Button href={cta.href} variant="hero">
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Button>
      </FadeIn>
    </div>
  );
}
