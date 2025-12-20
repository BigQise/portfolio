"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut" },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <a href={"#bio"}>
      <ChevronDown 
        className="w-8 h-8 text-foreground opacity-70 hover:opacity-100 transition-opacity" 
        strokeWidth={2}
      />
      </a>
    </motion.div>
  );
}
