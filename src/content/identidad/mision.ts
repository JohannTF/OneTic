import type { DeclaracionPillar } from "@/types/identidad";

export const mision = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Misión",
  statement:
    "Proporcionar servicios profesionales de soporte técnico IT a PyMEs del área metropolitana, garantizando la disponibilidad, estabilidad y continuidad operativa de su infraestructura tecnológica mediante mantenimiento preventivo, atención oportuna de incidentes y gestión estructurada de activos.",

  pillars: [
    {
      label: "Profesionalismo",
      description:
        "Cada intervención sigue protocolos estandarizados y queda documentada en reportes firmados.",
    },
    {
      label: "Disponibilidad",
      description:
        "Compromisos de respuesta claros bajo SLAs definidos: máx. 4 hrs remoto, 24 hrs presencial crítico.",
    },
    {
      label: "Continuidad",
      description:
        "Minimizamos el tiempo de inactividad de los activos tecnológicos críticos de cada cliente.",
    },
  ] satisfies DeclaracionPillar[],
};
