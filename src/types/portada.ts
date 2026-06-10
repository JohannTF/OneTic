export type PortadaStat = {
  value: string;
  label: string;
};

export type Portada = {
  eyebrow: string;
  title: string;
  description: string;
  stats: PortadaStat[];
  cta: { label: string; href: string };
};
