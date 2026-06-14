import type { MetaItem } from "@/types/estrategia";

export const metasIt = {
  eyebrow: "Capítulo 02 · Estrategia COBIT",
  title: "Metas IT",
  lead: "Las metas de IT traducen los objetivos corporativos al plano tecnológico y operativo, definiendo qué debe lograr la infraestructura, las plataformas y el equipo técnico de OneTic para hacer posible el cumplimiento de las metas de negocio.",

  intro:
    "A diferencia de las metas corporativas, estas se expresan en términos concretos de sistemas, procesos técnicos, estándares y capacidades del equipo, respondiendo a la pregunta de cómo la tecnología habilita la estrategia organizacional.",

  items: [
    {
      dimension: "Financiera",
      meta: "Optimizar el costo de operación de la plataforma ITSM en un 15 % para el cuarto trimestre de 2026, consolidando las licencias activas según la carga real de tickets gestionados mensualmente.",
    },
    {
      dimension: "Cliente",
      meta: "Reducir los incidentes relacionados con indisponibilidad de equipos en las empresas cliente en un 40 % durante el primer trimestre de operación, mediante la ejecución sistemática del programa de mantenimiento preventivo (MAN_01) y la gestión oportuna de tickets (SOP_02).",
    },
    {
      dimension: "Procesos Internos",
      meta: "Asegurar que el 100 % de los activos tecnológicos registrados en el ITSM cuenten con respaldo de datos periódico y un historial de intervenciones actualizado.",
    },
    {
      dimension: "Aprendizaje y Crecimiento",
      meta: "Lograr que al menos el 80 % del equipo técnico obtenga competencia verificada en administración de la plataforma ITSM, procedimientos de mantenimiento preventivo/correctivo y gestión de inventario tecnológico para el tercer bimestre de 2026.",
    },
  ] satisfies MetaItem[],
};
