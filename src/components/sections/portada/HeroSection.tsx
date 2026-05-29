import { Hero } from "@/components/sections/portada/Hero";
import { IndiceDocumental } from "@/components/sections/portada/IndiceDocumental";
import type { NavChapter } from "@/types/nav";
import type { Portada } from "@/types/portada";

type HeroSectionProps = {
  portada: Portada;
  chapters: NavChapter[];
};

export function HeroSection({ portada, chapters }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px] lg:items-start">
      <Hero
        eyebrow={portada.eyebrow}
        title={portada.title}
        description={portada.description}
        stat={portada.stat}
        cta={portada.cta}
      />
      <IndiceDocumental chapters={chapters} />
    </section>
  );
}
