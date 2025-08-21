"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingShapeProps = {
  className?: string;
  variant: Variants;
};

export function FloatingShape({ className, variant }: FloatingShapeProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variant}
      animate="animate"
    />
  );
}
