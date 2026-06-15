import { ChapterHero } from "@/components/sections/shared/ChapterHero";
import { ChapterLayout } from "@/components/sections/shared/ChapterLayout";
import { BiaTacticoMAN01 } from "@/components/sections/continuidad/BiaTacticoMAN01";
import { SectionNav } from "@/components/sections/identidad/SectionNav";
import type { TocItem } from "@/components/sections/shared/OnThisPage";

export const metadata = {
  title: "BIA Táctico — OneTic",
};

const TOC: TocItem[] = [
  { id: "man01",                   label: "MAN_01 · Mantenimiento"    },
  { id: "man01-identificacion",    label: "Identificación del proceso" },
  { id: "man01-impacto",           label: "Tabla de impacto"          },
  { id: "man01-mtpod-rto",         label: "MTPoD y RTO"               },
  { id: "man01-mbco",              label: "MBCO"                      },
  { id: "man01-continuidad",       label: "Continuidad operacional"   },
  { id: "man01-interdependencias", label: "Interdependencias"         },
];

export default function BiaTacticoPage() {
  return (
    <ChapterLayout toc={TOC}>
      <ChapterHero
        eyebrow="Cap. 05 · Continuidad del Negocio · ISO 22301"
        title="BIA Táctico"
        lead="Análisis de impacto al negocio por proceso: evaluación de consecuencias operativas, determinación del MTPoD y RTO, y documentación de opciones de continuidad bajo la norma ISO 22301."
      />

      <div id="man01" className="scroll-mt-24">
        <BiaTacticoMAN01 />
      </div>

      <SectionNav currentHref="/continuidad/bia-tactico" chapterIndex={4} />
    </ChapterLayout>
  );
}
