import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { FadeIn } from "@/components/ui/interactions/FadeIn";

type IdentidadHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export function IdentidadHero({ eyebrow, title, lead }: IdentidadHeroProps) {
  return (
    <header className="flex flex-col gap-6 border-b border-border-subtle pb-12">
      <FadeIn>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent-primary" />
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      </FadeIn>

      <FadeIn delay={0.07}>
        <h1 className="font-display text-text-primary max-w-[18ch] text-balance text-[36px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
          {title}
        </h1>
      </FadeIn>

      {lead && (
        <FadeIn delay={0.13}>
          <p className="text-text-secondary max-w-[58ch] text-[17px] leading-[1.8]">{lead}</p>
        </FadeIn>
      )}
    </header>
  );
}
