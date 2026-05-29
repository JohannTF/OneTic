"use client";

import { motion } from "motion/react";
import { ease, duration } from "@/lib/motion";
import { cn } from "@/lib/cn";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Animación al montar — para contenido above-fold. Below-fold: usar Reveal.
export function FadeIn({ children, delay = 0, y = 24, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
