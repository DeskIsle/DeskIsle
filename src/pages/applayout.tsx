import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";
import { Comp, compAtoms, isDraggingAtom, registryComps, splitCompAtoms } from "@/atoms/comps";

interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
}

export const AppLayout = forwardRef<HTMLDivElement, AppLayoutProps>(
  ({className, children, ...props}, ref) => {
    const [compAtoms, dispatch] = useAtom(splitCompAtoms)
    const [{unit, gap}] = useAtom(layoutConfigAtom)
    const [shadow, setShadow] = useState<DragShadowProps>()
    const shadowRef = useRef<HTMLDivElement>(null)
    const layoutRef = useRef<HTMLDivElement>(null)
    const [mouse, setMouse] = useState({elementX: 0, elementY: 0})
    const [isDragging, setIsDragging] = useAtom(isDraggingAtom)
    const [layoutConfig] = useAtom(layoutConfigAtom)
    function handleDragStart(e: DragEvent) {
      setIsDragging(true)
      setMouse({elementX: e.clientX, elementY: e.clientY})
    }
    function handleDragEnd(e: DragEvent) {
      setIsDragging(false)  
    }
    function handleDrag(e: DragEvent, item: Comp) {
      const anchor = {
        x: mouse.elementX, y: mouse.elementY
      }
      if (mouse.elementX < gap) anchor.x = gap
      if (mouse.elementY < gap) anchor.y = gap
      if (mouse.elementX > layoutRef.current!.offsetWidth - gap) anchor.x = layoutRef.current!.offsetWidth
      if (mouse.elementY > layoutRef.current!.offsetHeight - gap) anchor.y = layoutRef.current!.offsetHeight

      let newRow = Math.floor((anchor.y - gap) / (unit + gap))
      let newCol = Math.floor((anchor.x - gap) / (unit + gap))
      const maxRow = (layoutRef.current!.offsetHeight) / (unit + gap) - item.height
      const maxCol = (layoutRef.current!.offsetWidth) / (unit + gap) - item.width
      if (newRow + item.height > maxRow) newRow = maxRow
      if (newCol + item.width > maxCol) newCol = maxCol
      setMouse({elementX: e.clientX, elementY: e.clientY})
      setShadow({row: newRow, col: newCol, width: item.width, height: item.height})
      console.log(mouse)
    }

    useEffect(() => {
      // compute layoutRef width and height
      const layoutSize = {
        width: layoutRef.current!.parentElement!.offsetWidth,
        height: layoutRef.current!.parentElement!.offsetHeight
      }
      layoutSize.width -= layoutSize.width % (unit + gap)
      layoutSize.height -= layoutSize.height % (unit + gap)
      layoutRef.current!.style.width = `${layoutSize.width}px`
      layoutRef.current!.style.height = `${String(layoutSize.height)}px`
    }, [])
    return (
      <div 
        ref={layoutRef} 
        className={cn(className, "relative p-4")}
      >
        <DragShadow ref={shadowRef} {...shadow} />
        {compAtoms.map((atom, index) => {
          const [item] = useAtom(atom)
          return (
            <CompElement
              compAtom={atom}
              key={index}
              drag={layoutConfig.editMode}
              onDrag={(e) => handleDrag(e as DragEvent, item)}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragConstraints={shadowRef}
            />
          )
        })}
      </div>
    )
  }
)

AppLayout.displayName = 'AppLayout'

export default AppLayout

interface DragShadowProps extends HTMLAttributes<HTMLDivElement> {
  row?: number,
  col?: number,
  width?: number,
  height?: number,
  className?: string
}

const DragShadow = forwardRef<HTMLDivElement, DragShadowProps>(
  ({row = 0, col = 0, width = 0, height = 0, className, ...props}, ref) => {
    const [{unit, gap}] = useAtom(layoutConfigAtom)
    return (
      <div
        ref={ref}
        style={{
          top: unit*row + (row+1)*gap, 
          left: unit*col + (col+1)*gap,
          width: unit*width+((width-1)*gap),
          height: unit*height+((height-1)*gap),
        }}
        className={`absolute opacity-0`}
        {...props}
      >
      </div>
    )
  }
)

DragShadow.displayName = 'DragShadow'

interface CompProps extends MotionProps {
  compAtom: PrimitiveAtom<Comp>
  className?: string,
}

export function CompElement({compAtom, className, ...props}: CompProps) {
  console.log('CompElement: render')
  const [comp, setComp] = useAtom(compAtom)
  const { element, width, height, row, col} = comp
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const Element = registryComps[element].Element
  
  return (
    <motion.div
      // whileHover={{y: -5, transition: {duration: 0.1}}}
      style={{
        top: unit*row + (row+1)*gap,
        left: unit*col + (col+1)*gap,
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
