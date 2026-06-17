export type NivelSeveridad = "CRÍTICO" | "ALTO" | "MEDIO";

export type ERICRole = "Coordinador" | "Responsable Técnico" | "Responsable Operativo" | "Responsable Administrativo";

export type ERICMember = {
  rol: ERICRole;
  nombre: string;
  cargo: string;
  contacto: string;
  responsabilidades: string[];
};

export type CriterioActivacion = {
  escenario: string;
  procesosAfectados: string[];
  umbral: string;
  nivel: NivelSeveridad;
};

export type PasoProcedimiento = {
  paso: number;
  accion: string;
  responsable: string;
  tiempoMaximo: string;
};

export type ProcedimientoPorProceso = {
  idProceso: string;
  nombre: string;
  rto: string;
  mtpod: string;
  mbco: string;
  pasos: PasoProcedimiento[];
};

export type ControlISO = {
  id: string;
  nombre: string;
  descripcion: string;
  activosProtegidos: string[];
  implementacion: string;
  responsable: string;
};

export type InfraestructuraCritica = {
  id: string;
  nombre: string;
  criticidad: string;
  amenaza: string;
  riesgoTotal: number;
  fases: {
    nombre: string;
    accion: string;
    tiempoObjetivo: string;
  }[];
};

export type PruebaMantenimiento = {
  tipo: string;
  frecuencia: string;
  alcance: string;
  responsable: string;
  evidencia: string;
};
