"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export function ProgressBar({
  value,
  className,
  trackClassName,
}: {
  value: number;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div className={clsx("tick-bar", trackClassName)}>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={className}
      />
    </div>
  );
}
