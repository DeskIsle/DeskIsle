import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export default function Card({children, className}: {children?: React.ReactNode, className: string}) {
  return (
    <motion.div
      whileHover={{scale: 1.2}}
      drag
      className={cn("rounded-xl border shadow cursor-pointer", className)}>
      {children}
    </motion.div>
  )
}