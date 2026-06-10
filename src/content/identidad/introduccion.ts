import type { TimelineStep, BrechaItem } from "@/types/identidad";

export const introduccion = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Introducción",
  lead: "En un entorno donde la tecnología es el eje operativo de cualquier organización, las PyMEs enfrentan una paradoja crítica: dependen de su infraestructura IT, pero carecen de estructuras formales para mantenerla.",

  context:
    "La tecnología de la información ha dejado de ser un recurso auxiliar para convertirse en el centro operativo de casi cualquier organización. En el segmento PyME, que representa la mayor parte del tejido empresarial latinoamericano, la gestión del hardware recae frecuentemente en personal no especializado, carece de procedimientos formales o se atiende de manera reactiva: cuando la falla ya ha impactado la operación.",

  timeline: [
    {
      era: "Años 90",
      title: "Help Desk & ITIL",
      description:
        "HP centraliza el soporte técnico en 1984 como punto único de contacto. Surgen los primeros sistemas de tickets e ITIL como marco estandarizado de gestión de incidentes.",
    },
    {
      era: "Años 2000",
      title: "Servicios gestionados",
      description:
        "Del modelo reactivo break/fix al enfoque proactivo. Las herramientas RMM y los SLAs medibles definen nuevos estándares de calidad y eficiencia operativa.",
    },
    {
      era: "Años 2010",
      title: "Cloud & Automatización",
      description:
        "Azure y AWS redefinen el soporte. Portales de autoservicio, BYOD y soporte multicanal amplían el alcance del servicio hacia entornos híbridos.",
    },
    {
      era: "Actualidad",
      title: "IA & Soporte predictivo",
      description:
        "Machine Learning para clasificar tickets, Zero Trust en ciberseguridad y habilitación de resiliencia operativa en entornos de fuerza laboral híbrida.",
    },
  ] satisfies TimelineStep[],

  brecha: {
    title: "La brecha operativa en PyMEs",
    description:
      "Mientras las grandes corporaciones profesionalizaron su gestión de TI, las PyMEs operan bajo el modelo break-fix: arreglar cuando se rompe. Esto genera un círculo vicioso de fallas no planificadas, tiempos de inactividad imprevistos y costos operativos elevados.",
    items: [
      {
        title: "Sin controles sistemáticos",
        description:
          "Sin mantenimiento preventivo, problemas como sobrecalentamiento o polvo acumulado acortan drásticamente la vida útil del hardware.",
      },
      {
        title: "Gestión de activos deficiente",
        description:
          "La falta de inventario actualizado impide planificar mantenimientos y tomar decisiones estratégicas de renovación tecnológica.",
      },
    ] satisfies BrechaItem[],
  },

  justificacion:
    "La oferta de un servicio que combine mantenimiento preventivo, soporte correctivo eficiente y gestión estructurada de activos no es un lujo: es una respuesta directa a una necesidad operacional crítica en las PyMEs.",
};
