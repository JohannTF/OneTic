import type { ValorItem } from "@/types/identidad";

export const valores = {
  eyebrow: "Capítulo 01 · Identidad del Servicio",
  title: "Valores",
  lead: "Los principios que guían cada intervención, cada decisión operativa y cada relación con nuestros clientes.",

  items: [
    {
      id: "V-01",
      name: "Proactividad",
      description:
        "Anticipamos fallas antes de que ocurran. Nuestro enfoque preventivo minimiza interrupciones y maximiza la disponibilidad operativa de cada cliente.",
    },
    {
      id: "V-02",
      name: "Confiabilidad",
      description:
        "Operamos bajo SLAs claros y cumplimos lo que prometemos. Cada compromiso de respuesta es una garantía, no una estimación.",
    },
    {
      id: "V-03",
      name: "Confidencialidad",
      description:
        "La información de nuestros clientes es inviolable. Todo el personal firma NDA y los accesos se revocan al término de cada intervención.",
    },
    {
      id: "V-04",
      name: "Calidad técnica",
      description:
        "Cada intervención sigue protocolos estandarizados. Ninguna visita concluye sin su reporte documentado, verificado y firmado.",
    },
    {
      id: "V-05",
      name: "Compromiso",
      description:
        "Nos involucramos con la continuidad operativa de cada cliente como si fuera la nuestra. No cerramos un ticket sin confirmar que el problema esté resuelto.",
    },
    {
      id: "V-06",
      name: "Transparencia",
      description:
        "Documentamos todo lo que hacemos. Los clientes tienen visibilidad completa del estado de sus activos, intervenciones e incidentes en todo momento.",
    },
  ] satisfies ValorItem[],
};
