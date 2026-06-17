export type Riesgo = {
  id: string;
  nombre: string;
  amenaza: string;
  vulnerabilidad: string;
  relacion: string;
};

export type PersonalItem = {
  perfil: string;
  numero: number;
  tipoContratacion: string;
  responsabilidades: string;
};

export type TerminoGlosario = {
  termino: string;
  definicion: string;
};

export type Beneficio = {
  numero: number;
  titulo: string;
  descripcion: string;
};

export type HistoriaEvolucion = {
  periodo: string;
  titulo: string;
  descripcion: string[];
};
