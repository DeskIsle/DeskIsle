import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { atom, PrimitiveAtom, useAtom } from "jotai";
import React, { memo, useRef } from "react";
import { Comp, compAtoms, isDraggingAtom, registryComps, splitCompAtoms } from "@/atoms/comps";
export const AppLayout = () => {
  console.log('AppLayout render')
  const [compSplitAtoms] = useAtom(splitCompAtoms)
  const [comps] = useAtom(compAtoms)
  const [layoutConfig] = useAtom(layoutConfigAtom)
  const { unit, gap } = layoutConfig
  const layoutRef = useRef<HTMLDivElement>(null)

  const modifyTargetForGridLayout = (target: number) => {
    return Math.round(target / (unit + gap)) * (unit + gap)
  }
  return (
    <div
      ref={layoutRef}
      className="relative w-full h-full"
    >
      {compSplitAtoms.map((atom, index) => {
        return (
          <CompElement
            compAtom={atom}
            key={comps[index].id}
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

interface CompProps extends MotionProps {
  compAtom: PrimitiveAtom<Comp>
  className?: string,
}

const CompElement = memo(function CompElement({ compAtom, className, ...props }: CompProps) {
  console.log('CompElement render')
  const [comp, setComp] = useAtom(compAtom)
  const ref = useRef<HTMLDivElement>(null)
  const { element, width, height, row, col } = comp
  const [{ unit, gap }] = useAtom(layoutConfigAtom)
  const Element = registryComps[element].Element
  const [isDragging, setIsDragging] = useAtom(isDraggingAtom)

  function updateCompPosition() {
    const targetElement = ref.current
    if (targetElement) {
      const reg = /\d+(\.\d+)?/g
      const matchRes = targetElement.style.transform.match(reg)
      const [x, y] = matchRes ?? [0, 0]
      const newRow = Math.floor(Number(y) / (unit + gap))
      const newCol = Math.floor(Number(x) / (unit + gap))
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
      onDragStart={() => setIsDragging(true)}
      onDragTransitionEnd={updateCompPosition}
      onMouseUpCapture={(e) => {
        if (isDragging) {
          setIsDragging(false)
          e.stopPropagation()
        }
      }}
      animate={{
        x: (unit + gap) * col,
        y: (unit + gap) * row,
        width: unit * width + ((width - 1) * gap),
        height: unit * height + ((height - 1) * gap),
      }}
      className={cn(className, `absolute bg-transparent rounded-lg flex justify-center items-center`)}
      {...props}
    >
      <Element compAtom={compAtom} />
    </motion.div>
  )
})
