"use client";

import { motion } from "framer-motion";

export function UnitWeightage({ data }: { data: { unit: string; weight: number }[] }) {
  return (
    <div className="flex h-8 w-full overflow-hidden rounded-full border border-line">
      {data.map((d, i) => (
        <motion.div
          key={d.unit}
          initial={{ width: 0 }}
          animate={{ width: `${d.weight}%` }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
          className="flex items-center justify-center text-[0.65rem] font-medium text-white"
          style={{
            backgroundColor: i % 2 === 0 ? "#1B2430" : "#C1791F",
          }}
          title={`${d.unit} — ${d.weight}%`}
        >
          {d.weight >= 12 ? `${d.weight}%` : ""}
        </motion.div>
      ))}
    </div>
  );
}
