import type { ObjetivoItem } from "@/types/identidad";

export const objetivos = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Objetivo",
  lead: "Garantizar el correcto funcionamiento y la disponibilidad de los equipos tecnológicos mediante la implementación de servicios de soporte técnico integral.",

  general:
    "Garantizar el correcto funcionamiento y la disponibilidad de los diferentes equipos tecnológicos mediante la implementación de servicios de soporte técnico integral.",

  especificos: [
    {
      id: "OE-01",
      title: "Gestión de incidentes",
      description:
        "Implementar un sistema organizado de gestión de tickets que permita registrar, atender y dar seguimiento estructurado a cada solicitud de soporte técnico.",
    },
    {
      id: "OE-02",
      title: "Mantenimiento preventivo",
      description:
        "Realizar intervenciones periódicas de mantenimiento preventivo y correctivo en los activos tecnológicos que requieran soporte, con el fin de reducir la probabilidad de fallas, garantizar su disponibilidad y prolongar su vida útil.",
    },
    {
      id: "OE-03",
      title: "Atención oportuna",
      description:
        "Atender de manera oportuna los incidentes técnicos que se presenten durante el uso de los equipos en las instalaciones del cliente.",
    },
    {
      id: "OE-04",
      title: "Registro de activos",
      description:
        "Mantener un registro actualizado del estado de los equipos y de las intervenciones técnicas realizadas para cada empresa cliente.",
    },
  ] satisfies ObjetivoItem[],
};
