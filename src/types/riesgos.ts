export type NivelCriticidad = "I" | "II" | "III" | "IV" | "V";
export type NivelRiesgo = "Bajo" | "Medio" | "Alto" | "Crítico";
export type Clasificacion = "Baja" | "Media" | "Alta";

// Activo de información con valoración
export type ActivoValorado = {
  idProceso: string;
  idActivo: string;
  nombre: string;
  areaGeografica: number;
  periodoAfectacion: number;
  impacto: number;
  cantidadIcAfectadas: number;
  camposAfectados: number;
  interdependencia: number;
  criticidad: NivelCriticidad;
  infraestructurasCriticas: string;
  gradoCriticidad: string;
  controlesImplementar: string;
};

// Escala de referencia (para Severidad, Exposición, etc.)
export type EscalaValor = {
  valor: 1 | 2 | 3;
  descripcion: string;
};

export type Escala = {
  nombre: "Severidad" | "Exposición" | "Capacidad" | "Motivación";
  valores: EscalaValor[];
};

// Análisis completo con vulnerabilidades y amenazas
export type AnalisRiesgo = {
  idProceso: string;
  idActivo: string;
  nombre: string;
  confidencialidad: number;
  integridad: number;
  disponibilidad: number;
  totalValor: number;
  valor1: string;
  valor2: number;
  vulnerabilidades: string;
  amenazas: string;
  eventoAmenaza: string;
  controles: string;
};
