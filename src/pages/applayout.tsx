import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { useMouse } from "@uidotdev/usehooks";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useAtom } from "jotai";
import { useModalStack } from "rc-modal-sheet";
import React, { useEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";
import ResizeButton from "@/components/common/ResizeButton";
import { Comp, compsAtom } from "@/atoms/comps";
import { Separator } from "@/components/ui/separator";
import WidgetShop from "./modals/WidgetShop";
import { RadixIconsDashboard, RadixIconsDimensions, RadixIconsPencil2, RadixIconsTrash } from "@/icons/RadixIcons";


interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
}

export const AppLayout = forwardRef<HTMLDivElement, AppLayoutProps>(
  ({className, children, ...props}, ref) => {
    const [comps, setComps] = useAtom(compsAtom)
    const [{unit, gap}] = useAtom(layoutConfigAtom)
    const [shadow, setShadow] = useState<DragShadowProps>()
    const shadowRef = useRef<HTMLDivElement>(null)
    const [mouse, layoutRef] = useMouse<HTMLDivElement>()
    function handleDrag(e: DragEvent, item: Comp) {
      const anchor = {
        x: mouse.elementX, y: mouse.elementY
      }
      if (mouse.elementX < gap) anchor.x = gap
      if (mouse.elementY < gap) anchor.y = gap
      if (mouse.elementX > layoutRef.current.offsetWidth - gap) anchor.x = layoutRef.current.offsetWidth
      if (mouse.elementY > layoutRef.current.offsetHeight - gap) anchor.y = layoutRef.current.offsetHeight

      let newRow = Math.floor((anchor.y - gap) / (unit + gap))
      let newCol = Math.floor((anchor.x - gap) / (unit + gap))
      const maxRow = (layoutRef.current.offsetHeight) / (unit + gap) - item.height
      const maxCol = (layoutRef.current.offsetWidth) / (unit + gap) - item.width
      if (newRow + item.height > maxRow) newRow = maxRow
      if (newCol + item.width > maxCol) newCol = maxCol
      setShadow({row: newRow, col: newCol, width: item.width, height: item.height})
    }

    useEffect(() => {
      // compute layoutRef width and height
      const layoutSize = {
        width: layoutRef.current.parentElement!.offsetWidth,
        height: layoutRef.current.parentElement!.offsetHeight
      }
      layoutSize.width -= layoutSize.width % (unit + gap)
      layoutSize.height -= layoutSize.height % (unit + gap)
      layoutRef.current.style.width = `${layoutSize.width}px`
      layoutRef.current.style.height = `${String(layoutSize.height)}px`
    }, [])
    return (
      <div 
        ref={layoutRef} 
        className={cn(className, "relative p-4")}
      >
        <DragShadow ref={shadowRef} {...shadow} />
        {comps.map((item, index) => {
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
  comp: Comp,
  className?: string,
}

export function CompElement({comp, className, ...props}: CompProps) {
  const { Element, ElementEditor, ...compAllProps } = comp
  const {width, height, row, col, elementProps} = compAllProps
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const [{dragMode}] = useAtom(layoutConfigAtom)
  const { present, dismissTop } = useModalStack()
  const [comps, setComps] = useAtom(compsAtom)
  function openEditModal() {
    present({
      title: '编辑',
      content: () => (
        <ElementEditor dismissTop={dismissTop} comp={comp}/>
      ),
    })
  }
  function deleteComp() {
    const newComps = comps.filter(item => item.id !== comp.id)
    setComps(newComps)
  }
  return (
    <motion.div
      drag={dragMode}
      whileHover={{scale: 1.1}}
      style={{
        top: unit*row + (row+1)*gap,
        left: unit*col + (col+1)*gap,
        width: unit*width+((width-1)*gap), 
        height: unit*height+((height-1)*gap),
      }}
      className={cn(className, `absolute bg-transparent rounded-lg shadow-sm flex justify-center items-center overflow-hidden`)}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger className="w-full h-full">
          <Element {...elementProps}/>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem className="focus:bg-transparent">
            <Separator className="my-1"/>
          </ContextMenuItem>
          <ContextMenuItem onClick={openEditModal} className="flex gap-2">
            <RadixIconsPencil2/>
            <span>编辑</span>
          </ContextMenuItem>
          <div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
            <div className="flex gap-2 items-center">
              <RadixIconsDimensions className="text-md"/>
              <span>布局</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={1} height={1} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={1} height={2} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={2} height={2} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={3} height={3} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={4} height={4} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={5} height={5} comp={comp}/>
              </ContextMenuItem>
            </div>
          </div>
          <ContextMenuItem onClick={deleteComp} className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]">
            <RadixIconsTrash />
            <span>删除</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </motion.div>
  )
}
