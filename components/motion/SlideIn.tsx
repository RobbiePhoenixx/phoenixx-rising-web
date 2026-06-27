"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
  distance?: number;
  className?: string;
}

export default function SlideIn({
  children,
  from = "bottom",
  delay = 0,
  distance = 50,
  className,
}: Props) {
  const axis = from === "left" || from === "right" ? "x" : "y";
  const sign = from === "right" || from === "bottom" ? 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, [axis]: sign * distance }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
