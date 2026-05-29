"use client";

import { motion } from "motion/react";
import { ease, duration } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ScaleInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Entrada por scroll con escala — para tarjetas y contenedores visuales destacados.
export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: duration.normal, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
