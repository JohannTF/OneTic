import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Button } from "@/components/ui/buttons/Button";
import { FadeIn } from "@/components/ui/interactions/FadeIn";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  cta: { label: string; href: string };
};

export function Hero({ eyebrow, title, description, stat, cta }: HeroProps) {
  return (
    <div className="flex flex-col gap-8">
      <FadeIn>
        <Eyebrow>{eyebrow}</Eyebrow>
      </FadeIn>

      <FadeIn delay={0.06}>
        <h1 className="font-display text-text-primary text-[28px] leading-[1.2] font-bold tracking-[-0.03em] sm:text-[36px] lg:text-[40px] lg:leading-[1.15] xl:text-[56px] xl:leading-[1.1]">
          {title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.12}>
        <p className="text-text-secondary max-w-130 text-[17px] leading-[1.75]">
          {description}
        </p>
      </FadeIn>

      <FadeIn delay={0.18}>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-text-primary text-4xl font-bold">{stat.value}</span>
          <span className="text-text-tertiary text-sm">{stat.label}</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.24}>
        <Button href={cta.href} variant="hero">
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Button>
      </FadeIn>
    </div>
  );
}
