export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type NavChapter = {
  id: string;
  label: string;
  items: NavItem[];
};

export const nav: NavChapter[] = [
  {
    id: "01",
    label: "Identidad del Servicio",
    items: [
      { id: "01", label: "Introducción", href: "/identidad/introduccion" },
      { id: "02", label: "Objetivo", href: "/identidad/objetivo" },
      { id: "03", label: "Descripción", href: "/identidad/descripcion" },
      { id: "04", label: "Misión", href: "/identidad/mision" },
      { id: "05", label: "Visión", href: "/identidad/vision" },
      { id: "06", label: "Valores", href: "/identidad/valores" },
    ],
  },
  {
    id: "02",
    label: "Estrategia COBIT",
    items: [
      { id: "07", label: "Metas Corporativas", href: "/estrategia/metas-corporativas" },
      { id: "08", label: "Metas IT", href: "/estrategia/metas-it" },
      { id: "09", label: "Cascada de Metas", href: "/estrategia/cascada-de-metas" },
      { id: "10", label: "Mapa Estratégico", href: "/estrategia/mapa-estrategico" },
    ],
  },
  {
    id: "03",
    label: "Documentación de Servicio",
    items: [
      { id: "11", label: "Caso de Negocio", href: "/documentacion/caso-de-negocio" },
      { id: "12", label: "Cédula de Servicio", href: "/documentacion/cedula-de-servicio" },
    ],
  },
  {
    id: "04",
    label: "Activos y Riesgos",
    items: [
      { id: "13", label: "Inventario de Activos", href: "/activos/inventario" },
      { id: "14", label: "Matriz de Riesgos", href: "/activos/matriz-de-riesgos" },
    ],
  },
  {
    id: "05",
    label: "Continuidad del Negocio",
    items: [
      { id: "15", label: "BIA Táctico", href: "/continuidad/bia-tactico" },
      { id: "16", label: "BIA Operacional", href: "/continuidad/bia-operacional" },
      { id: "17", label: "Plan de Continuidad", href: "/continuidad/plan-de-continuidad" },
    ],
  },
];
