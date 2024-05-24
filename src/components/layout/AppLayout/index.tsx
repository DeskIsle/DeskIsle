import IFrameWidget, { IFrameWidgetProps } from "@/components/widgets/IFrameWidget";
import ImageWidget, { ImageWidgetProps } from "@/components/widgets/ImageWidget";
import LinkWidget, { LinkWidgetProps } from "@/components/widgets/LinkWidget";
import { cn } from "@/lib/utils";
import { useMouse } from "@uidotdev/usehooks";
import { motion, MotionProps } from "framer-motion";
import { atom, useAtom } from "jotai";
import React, { useLayoutEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";


interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
  comps: Comp[]
  unit: number,
  gap: number,
}

export const AppLayout = forwardRef<HTMLDivElement, AppLayoutProps>(
  ({comps, unit, gap, className, children, ...props}, ref) => {
    const [shadow, setShadow] = useState<DragShadowProps>()
    const [compsValue, setCompsValue] = useState(comps)
    const shadowRef = useRef<HTMLDivElement>(null)
    const [mouse, layoutRef] = useMouse<HTMLDivElement>()
    
    function handleDrag(e: DragEvent, item: CompProps) {
      const n = Math.floor((mouse.elementY - gap) / (unit + gap))
      const m = Math.floor((mouse.elementX - gap) / (unit + gap))
      setShadow({row: n, col: m, width: item.width, height: item.height})
    }
    return (
      <div 
        ref={layoutRef} 
        className={cn(className, "relative w-full h-full m-10")}
      >
        <DragShadow ref={shadowRef} {...shadow} />
        {compsValue.map((item, index) => {
          return (
            <Comp
              {...item}
              key={index}
              onDrag={(e) => handleDrag(e as DragEvent, item)}
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

const layoutConfig = atom({
  unit: 50,
  gap: 20
})

export interface Comp {
  row: number,
  col: number,
  width: number,
  height: number,
  tag: string,
  title: string,
  type: string,
  target: WidgetProps
}

export type WidgetProps = LinkWidgetProps | ImageWidgetProps | IFrameWidgetProps

interface DragShadowProps extends MotionProps {
  row?: number,
  col?: number,
  width?: number,
  height?: number,
  className?: string
}

const DragShadow = forwardRef<HTMLDivElement, DragShadowProps>(
  ({row = 0, col = 0, width = 0, height = 0, className, ...props}, ref) => {
    const [{unit, gap}] = useAtom(layoutConfig)
    return (
      <motion.div
        ref={ref}
        style={{
          top: unit*row + (row+1)*gap, 
          left: unit*col + (col+1)*gap,
          width: unit*width+((width-1)*gap),
          height: unit*height+((height-1)*gap)
        }}
        className={`absolute bg-transparent rounded-lg border`}
        {...props}
      >
      </motion.div>
    )
  }
)

DragShadow.displayName = 'DragShadow'

interface CompProps extends MotionProps, Comp {
  className?: string,
}

export function Comp({width, height, row, col, className, title, tag, type, target, ...props}: CompProps) {
  const [{unit, gap}] = useAtom(layoutConfig)
  return (
    <motion.div
      initial={{
        width: unit*width+((width-1)*gap), 
        height: unit*height+((height-1)*gap),
      }}
      drag
      whileHover={{scale: 1.05}}
      style={{
        top: unit*row + (row+1)*gap,
        left: unit*col + (col+1)*gap
      }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
    >
      <CompHandler type={type} target={target}/>
    </motion.div>
  )
}

interface CompHandlerProps {
  type: Comp['type']
  target: Comp['target']
}

export function CompHandler({ type, target }: CompHandlerProps) {
  if (type === 'LinkWidget') {
    return (
      <LinkWidget {...target as LinkWidgetProps}/>
    )
  } else if (type === 'ImageWidget') {
    return (
      <ImageWidget {...target as ImageWidgetProps}/>
    )
  } else if (type === 'IFrameWidget') {
    return (
      <IFrameWidget {...target as IFrameWidgetProps}/>
    )
  } else {
    return (
      <div className="w-full h-full"></div>
    )
  }
}