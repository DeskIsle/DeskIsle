import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { HTMLAttributes } from "react";

export default function Card({children, className, onClick}: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{scale: 1.02}}
      drag
      className={cn("rounded-xl border shadow cursor-pointer flex justify-center items-center bg-white", className)}>
      {children}
    </motion.div>
  )
}