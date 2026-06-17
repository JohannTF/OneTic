import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ProcesosRelacion } from "@/components/sections/activos/ProcesosRelacion";
import { ActivosTable } from "@/components/sections/activos/ActivosTable";
import { SectionNav } from "@/components/sections/identidad/SectionNav";

export const metadata = {
  title: "Inventario de Activos — OneTic",
};

export default function InventarioPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero
        eyebrow="Cap. 04 · Activos y Riesgos"
        title="Inventario de Activos de Información"
        lead="Identificación y clasificación de los activos de información vinculados a cada proceso del servicio: mantenimiento, mesa de ayuda e inventario tecnológico, con sus relaciones de dependencia."
      />

      <ProcesosRelacion />

      <ActivosTable />

      <SectionNav currentHref="/activos/inventario" chapterIndex={3} />
    </div>
  );
}
