import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import IFrameWidget, { IFrameWidgetProps } from "@/components/widgets/IFrameWidget";
import ImageWidget, { ImageWidgetProps } from "@/components/widgets/ImageWidget";
import LinkWidget, { LinkWidgetProps } from "@/components/widgets/LinkWidget";
import { cn } from "@/lib/utils";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useLongPress, useMouse } from "@uidotdev/usehooks";
import { motion, MotionProps } from "framer-motion";
import { atom, useAtom } from "jotai";
import { useModalStack } from "rc-modal-sheet";
import React, { useLayoutEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";
import EditModal from "./modals/edit-modal";


interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
  comps: Comp[]
}

export const AppLayout = forwardRef<HTMLDivElement, AppLayoutProps>(
  ({comps, className, children, ...props}, ref) => {
    const [{unit, gap}] = useAtom(layoutConfigAtom)
    const [shadow, setShadow] = useState<DragShadowProps>()
    const [compsValue, setCompsValue] = useState(comps)
    const shadowRef = useRef<HTMLDivElement>(null)
    const [mouse, layoutRef] = useMouse<HTMLDivElement>()

    function handleDrag(e: DragEvent, item: Comp) {
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
            <CompElement
              comp={item}
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

export interface Comp {
  id: number,
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
    const [{unit, gap}] = useAtom(layoutConfigAtom)
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

interface CompProps extends MotionProps {
  comp: Comp,
  className?: string,
}

export function CompElement({comp, className, ...props}: CompProps) {
  const {width, height, row, col, title, tag, type, target} = comp
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const [{dragMode}] = useAtom(layoutConfigAtom)
  const { present } = useModalStack()
  function openEditModal() {
    present({
      title: 'Edit',
      content: () => (
        <EditModal comp={comp}/>
      ),
    })
  }
  return (
    <motion.div
      initial={{
        width: unit*width+((width-1)*gap), 
        height: unit*height+((height-1)*gap),
      }}
      drag={dragMode}
      whileHover={{scale: 1.05}}
      style={{
        top: unit*row + (row+1)*gap,
        left: unit*col + (col+1)*gap
      }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger className="w-full h-full">
          <CompHandler type={type} target={target} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={openEditModal} className="flex gap-2">
            <Pencil2Icon/>
            <span>Edit</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex gap-2 text-[#FF0000]">
            <TrashIcon/>
            <span>Delete</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
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