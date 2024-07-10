import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";
import { Comp, isDraggingAtom, registryComps, splitCompAtoms } from "@/atoms/comps";

export const AppLayout = () => {
  const [compAtoms, dispatch] = useAtom(splitCompAtoms)
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const layoutRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useAtom(isDraggingAtom)
  const [layoutConfig] = useAtom(layoutConfigAtom)
  function handleDragStart(e: DragEvent) {
    setIsDragging(true)
  }
  function handleDragEnd(e: DragEvent) {
    setIsDragging(false)  
  }

  const modifyTargetForGridLayout = (target: number) => {
    return Math.round(target / (unit + gap)) * (unit + gap)
  }
  return (
    <div 
      ref={layoutRef} 
      className="relative w-full h-full"
    >
      {compAtoms.map((atom, index) => {
        return (
          <CompElement
            compAtom={atom}
            key={index}
            drag={layoutConfig.editMode}
            dragTransition={{
              timeConstant: 150,
              modifyTarget: target => modifyTargetForGridLayout(target)
            }}
            dragConstraints={layoutRef}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        )
      })}
    </div>
  )
}

AppLayout.displayName = 'AppLayout'

export default AppLayout

interface CompProps extends MotionProps {
  compAtom: PrimitiveAtom<Comp>
  className?: string,
}

export function CompElement({compAtom, className, ...props}: CompProps) {
  const [comp, setComp] = useAtom(compAtom)
  const { element, width, height, row, col} = comp
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const Element = registryComps[element].Element
  
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0, 
      }}
      animate={{
        x: (unit+gap)*col,
        y: (unit+gap)*row,
        width: unit*width+((width-1)*gap), 
        height: unit*height+((height-1)*gap),
      }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
      >
      <Element compAtom={compAtom}/>
    </motion.div>
  )
}
