import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { useRef } from "react";
import { Comp, compAtoms, isDeleteModeAtom, isDraggingAtom, registryComps, splitCompAtoms } from "@/atoms/comps";
import { useKeyPress, useLongPress } from "ahooks";
import { ClarityRemoveSolid } from "@/icons/RemoveIcon";

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
  const [, setComps] = useAtom(compAtoms)
  const ref = useRef<HTMLDivElement>(null)
  const { element, width, height, row, col } = comp
  const [{ unit, gap }] = useAtom(layoutConfigAtom)
  const Element = registryComps[element].Element
  const [isDragging, setIsDragging] = useAtom(isDraggingAtom)
  const [isDeleteMode, setIsDeleteMode] = useAtom(isDeleteModeAtom)

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

  useLongPress(() => {
    if (isDragging) return
    console.log('long press')
    setIsDeleteMode(true)
    setIsDragging(true)
  },
    ref,
    {
      delay: 1000
    })
  const animations = {
    normal: {
      x: (unit + gap) * col,
      y: (unit + gap) * row,
      rotate: 0,
      width: unit * width + ((width - 1) * gap),
      height: unit * height + ((height - 1) * gap),
    },
    shake: {
      x: (unit + gap) * col,
      y: (unit + gap) * row,
      width: unit * width + ((width - 1) * gap),
      height: unit * height + ((height - 1) * gap),
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
      },
    },
  }
  useKeyPress('esc', () => {
    setIsDeleteMode(false)
  });
  function deleteComp() {
    console.log('delete')
    setComps((comps) => comps.filter(c => c.id !== comp.id))
  }
  return (
    <motion.div
      ref={ref}
      onDragStart={() => setIsDragging(true)}
      onDragTransitionEnd={updateCompPosition}
      onMouseUp={() => setIsDragging(false)}
      // onMouseDown={() => {
      //   if (isDeleteMode) {
      //     setIsDeleteMode(false)
      //     setIsDragging(true)
      //   }
      // }}
      initial={{
        x: 0,
        y: 0,
      }}
      variants={animations}
      animate={isDeleteMode ? 'shake' : 'normal'}
      // animate={{
      //   x: (unit + gap) * col,
      //   y: (unit + gap) * row,
      //   width: unit * width + ((width - 1) * gap),
      //   height: unit * height + ((height - 1) * gap),
      // }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
    >
      <Element compAtom={compAtom} />
      {isDeleteMode &&
        <ClarityRemoveSolid
          className="absolute right-0 top-0"
          onClick={deleteComp}
        />
      }
    </motion.div>
  )
}
