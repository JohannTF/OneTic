import type { MetaItem } from "@/types/estrategia";

export const metasCorporativas = {
  eyebrow: "Capítulo 02 · Estrategia COBIT",
  title: "Metas Corporativas",
  lead: "Las metas corporativas definen los objetivos estratégicos que OneTic busca alcanzar como organización, estableciendo la dirección general del negocio en términos de rentabilidad, posicionamiento, calidad del servicio y desarrollo del capital humano.",

  intro:
    "Estas metas responden a la pregunta central de qué resultados debe producir la empresa para garantizar su viabilidad, crecimiento y competitividad dentro del segmento de soporte técnico. Son independientes de cualquier tecnología o herramienta específica, y sirven como marco de referencia para la toma de decisiones a nivel directivo.",

  items: [
    {
      dimension: "Financiera",
      meta: "Reducir el costo operativo por incidente en un 20 % para el cierre del segundo trimestre de 2026, mediante la sustitución del modelo reactivo (break/fix) por un esquema de mantenimiento preventivo planificado.",
    },
    {
      dimension: "Cliente",
      meta: "Reducir el tiempo de atención a incidentes en un 30 % respecto a la línea base inicial, para el cierre del segundo trimestre de 2026.",
    },
    {
      dimension: "Procesos Internos",
      meta: "Estandarizar e implementar los tres procesos de servicio bajo el marco normativo de ITIL, logrando que todas las intervenciones cuenten con un registro estructurado.",
    },
    {
      dimension: "Aprendizaje y Crecimiento",
      meta: "Desarrollar y ejecutar un programa de capacitación bimestral para el equipo técnico enfocado en procedimientos de intervención segura, uso de la plataforma ITSM y gestión de activos tecnológicos.",
    },
  ] satisfies MetaItem[],
};
