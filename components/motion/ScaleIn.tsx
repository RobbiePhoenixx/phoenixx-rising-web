"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, mass: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
