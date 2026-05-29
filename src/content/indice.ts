import { nav } from "@/content/nav";
import type { IndiceChapter } from "@/types/indice";

const descriptions: Record<string, string> = {
  "01": "Bases conceptuales: introducción, objetivo, descripción, misión, visión y valores que definen el servicio.",
  "02": "Alineación con el marco de gobierno COBIT: metas corporativas, metas IT, cascada y mapa estratégico BSC.",
  "03": "Soportes formales del servicio: caso de negocio completo y cédula de servicio bajo marco ITIL.",
  "04": "Identificación y gestión: inventario consolidado de activos y matriz de riesgos bajo ISO 27000.",
  "05": "Resiliencia operativa: BIA táctico por proceso, BIA operacional y plan de continuidad consolidado.",
};

export const indiceChapters: IndiceChapter[] = nav.map((chapter) => ({
  ...chapter,
  description: descriptions[chapter.id] ?? "",
}));

export const totalSections = nav.reduce((sum, ch) => sum + ch.items.length, 0);
