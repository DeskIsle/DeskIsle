import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { useRef } from "react";
import { Comp, isDraggingAtom, registryComps, splitCompAtoms } from "@/atoms/comps";

export const AppLayout = () => {
  const [compAtoms] = useAtom(splitCompAtoms)
  const [{ unit, gap }] = useAtom(layoutConfigAtom)
  const layoutRef = useRef<HTMLDivElement>(null)
  const [layoutConfig] = useAtom(layoutConfigAtom)

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
          />
        )
      })}
    </div>
  )
}

AppLayout.displayName = 'AppLayout'

interface CompProps extends MotionProps {
  compAtom: PrimitiveAtom<Comp>
  className?: string,
}

export function CompElement({ compAtom, className, ...props }: CompProps) {
  const [comp, setComp] = useAtom(compAtom)
  const ref = useRef<HTMLDivElement>(null)
  const { element, width, height, row, col } = comp
  const [{ unit, gap }] = useAtom(layoutConfigAtom)
  const Element = registryComps[element].Element
  const [, setIsDragging] = useAtom(isDraggingAtom)
  function handleDragStart() {
    setIsDragging(true)
  }
  function handleDragEnd() {
    setIsDragging(false)
  }

  function updateCompPosition() {
    const targetElement = ref.current
    if (targetElement) {
      const reg = /\d+(\.\d+)?/g
      const matchRes = targetElement.style.transform.match(reg)
      const [x, y] = matchRes ?? [0, 0]
      const newRow = Math.floor(Number(y) / (unit + gap))
      const newCol = Math.floor(Number(x) / (unit + gap))
      console.log(newRow, newCol)
      setComp({
        ...comp,
        row: newRow,
        col: newCol
      })
    }
  }

  return (
    <motion.div
      ref={ref}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragTransitionEnd={updateCompPosition}
      initial={{
        x: 0,
        y: 0,
      }}
      animate={{
        x: (unit + gap) * col,
        y: (unit + gap) * row,
        width: unit * width + ((width - 1) * gap),
        height: unit * height + ((height - 1) * gap),
      }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
    >
      <Element compAtom={compAtom} />
    </motion.div>
  )
}
