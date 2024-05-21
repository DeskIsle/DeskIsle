import { cn } from "@/lib/utils";
import React from "react";

export default function Card({children, className}: {children?: React.ReactNode, className: string}) {
  return (
    <button className={cn("rounded-xl border shadow", className)}>
      {children}
    </button>
  )
}