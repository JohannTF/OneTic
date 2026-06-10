import type { Subservicio } from "@/types/identidad";

export const descripcion = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Descripción",
  lead: "OneTic ofrece un servicio profesional de soporte técnico y mantenimiento para la infraestructura tecnológica de PyMEs en el área metropolitana, estructurado en tres líneas de servicio integradas.",

  subservicios: [
    {
      id: "SS-01",
      title: "Mantenimiento preventivo y correctivo",
      description:
        "Mantenimiento preventivo y correctivo de activos tecnológicos, incluyendo limpieza técnica, revisión de componentes, diagnóstico y reparación para garantizar su correcto funcionamiento y prolongar su vida útil.",
      detail:
        "Intervenciones periódicas programadas bajo protocolo estandarizado para mitigar el desgaste físico, reducir fallas imprevistas y maximizar el ciclo de vida del hardware.",
    },
    {
      id: "SS-02",
      title: "Mesa de ayuda y sistema de tickets",
      description:
        "Registro, clasificación, asignación y resolución de incidentes TI mediante plataforma ITSM con SLAs definidos y trazabilidad completa.",
      detail:
        "Respuesta remota en máx. 4 hrs hábiles. Atención presencial en máx. 24 hrs para incidentes críticos y 48 hrs para mantenimiento programado.",
    },
    {
      id: "SS-03",
      title: "Gestión de inventario tecnológico",
      description:
        "Levantamiento, registro, actualización y análisis del ciclo de vida de activos TI de cada empresa cliente.",
      detail:
        "Control actualizado del estado, características y ubicación de cada activo para facilitar la planificación de mantenimientos y decisiones de renovación tecnológica.",
    },
  ] satisfies Subservicio[],

  alcance: {
    incluye: [
      "Activos tecnológicos de las organizaciones",
      "Levantamiento de inventario inicial",
      "Intervenciones preventivas periódicas",
      "Diagnóstico y reparación correctiva",
      "Gestión continua del inventario tecnológico",
      "Reportes de intervención documentados",
    ],
    excluye: [
      "Servidores e infraestructura de red",
      "Gestión de servicios en la nube",
      "Recuperación forense de datos",
      "Suministro masivo de consumibles",
    ],
  },

  usuarios: [
    "Empleados operativos dentro de las PyMEs",
    "Gerentes de área y directivos de empresas PyME",
  ],
};
