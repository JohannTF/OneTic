import { HeroSection } from "@/components/sections/portada/HeroSection";
import { EquipoGrid } from "@/components/sections/portada/EquipoGrid";
import { ContextoAcademico } from "@/components/sections/portada/ContextoAcademico";
import { portada } from "@/content/portada/portada";
import { nav } from "@/content/nav";
import { equipo } from "@/content/portada/equipo";
import { academico } from "@/content/portada/academico";

export default function PortadaPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-32">
      <HeroSection portada={portada} chapters={nav} />
      <EquipoGrid members={equipo} />
      <ContextoAcademico data={academico} />
    </div>
  );
}
