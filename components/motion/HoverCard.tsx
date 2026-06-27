"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  lift?: number;
}

export default function HoverCard({ children, className, lift = 8 }: Props) {
  return (
    <motion.div
      whileHover={{ y: -lift, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
