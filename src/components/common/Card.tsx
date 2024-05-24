import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement>{
}
export default function Card({children, className, onClick, ...props}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{scale: 1.2}}
      drag
      className={cn("rounded-xl border shadow cursor-pointer flex justify-center items-center bg-white", className)}>
      {children}
    </motion.div>
  )
}