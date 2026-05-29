"use client";

import { motion } from "motion/react";
import { ease, duration } from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Animación por scroll — para secciones y bloques below-fold.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: duration.slow, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
