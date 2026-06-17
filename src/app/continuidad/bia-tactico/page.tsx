import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { BiaTacticoView } from "@/components/sections/continuidad/BiaTacticoView";

export const metadata = {
  title: "BIA Táctico — OneTic",
};

export default function BiaTacticoPage() {
  return (
    <div className="flex flex-col gap-20">
      <ChapterHero
        eyebrow="Cap. 05 · Continuidad del Negocio · ISO 22301"
        title="BIA Táctico"
        lead="Análisis de impacto al negocio por proceso: evaluación de consecuencias operativas, determinación del MTPoD y RTO, y documentación de opciones de continuidad bajo la norma ISO 22301."
      />

      <BiaTacticoView />
    </div>
  );
}
