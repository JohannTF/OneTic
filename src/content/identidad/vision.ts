import type { DeclaracionPillar } from "@/types/identidad";

export const vision = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Visión",
  statement:
    "Ser el proveedor de referencia en soporte técnico IT para PyMEs en el área metropolitana, reconocido por la calidad proactiva de nuestras intervenciones, la confianza que generamos en cada cliente y nuestro compromiso con la continuidad operativa de su negocio.",
  
    pillars: [
    {
      label: "Referente regional",
      description:
        "Posicionarnos como aliado tecnológico de confianza en el ecosistema PyME del área metropolitana.",
    },
    {
      label: "Soporte proactivo",
      description:
        "Evolucionar de la atención reactiva hacia el monitoreo y mantenimiento predictivo de activos.",
    },
    {
      label: "Escalabilidad",
      description:
        "Expandir la cartera de clientes manteniendo los estándares de calidad en cada intervención.",
    },
  ] satisfies DeclaracionPillar[],
};
