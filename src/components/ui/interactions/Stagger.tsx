"use client";

import { motion } from "motion/react";
import { ease, duration } from "@/lib/motion";
import { cn } from "@/lib/cn";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: duration.normal, ease } },
};

type ContainerAs = "div" | "ul" | "ol" | "section";
type ItemAs = "div" | "li" | "article" | "section";

const containerElements: Record<ContainerAs, React.ElementType> = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  section: motion.section,
};

const itemElements: Record<ItemAs, React.ElementType> = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ContainerAs;
};

// Contenedor que anima sus hijos en cascada por scroll.
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Container = containerElements[as] as React.ElementType;
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      className={cn(className)}
    >
      {children}
    </Container>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: ItemAs;
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Item = itemElements[as] as React.ElementType;
  return (
    <Item variants={itemVariants} className={cn(className)}>
      {children}
    </Item>
  );
}
