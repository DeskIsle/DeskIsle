import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import IFrameWidget, { IFrameWidgetProps } from "@/components/widgets/IFrameWidget";
import ImageWidget, { ImageWidgetProps } from "@/components/widgets/ImageWidget";
import LinkWidget, { LinkWidgetProps } from "@/components/widgets/LinkWidget";
import { cn } from "@/lib/utils";
import { DashboardIcon, DimensionsIcon, DragHandleDots2Icon, DropdownMenuIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useMouse } from "@uidotdev/usehooks";
import { motion, MotionProps } from "framer-motion";
import { useAtom } from "jotai";
import { useModalStack } from "rc-modal-sheet";
import React, { useEffect } from "react";
import { forwardRef, HTMLAttributes, useRef, useState } from "react";
import EditModal from "./modals/EditModal";
import ResizeButton from "@/components/common/ResizeButton";
import { compsAtom } from "@/atoms/comps";
import { Separator } from "@/components/ui/separator";
import NewModal from "./modals/NewModal";


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
        className={cn(className, "relative border p-4")}
      >
        <DragShadow ref={shadowRef} {...shadow} />
        {comps.map((item, index) => {
          return (
            <CompElement
              comp={item}
              key={index}
              onDrag={(e) => handleDrag(e as DragEvent, item)}
              onDragEnd={() => console.log('dragend')}
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
          height: unit*height+((height-1)*gap)
        }}
        className={`absolute bg-transparent rounded-lg border-2 border-slate-300`}
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
  const {width, height, row, col, title, tag, type, target} = comp
  const [{unit, gap}] = useAtom(layoutConfigAtom)
  const [{dragMode}] = useAtom(layoutConfigAtom)
  const { present } = useModalStack()
  const [comps, setComps] = useAtom(compsAtom)
  function openEditModal() {
    present({
      title: 'Edit',
      content: () => (
        <EditModal comp={comp}/>
      ),
    })
  }
  function openNewModal() {
    present({
      title: 'New',
      content: () => (
        <NewModal/>
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
      whileHover={{scale: 1.05}}
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
          <CompHandler type={type} target={target} />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem className="focus:bg-transparent">
            <Separator className="my-1"/>
          </ContextMenuItem>
          <ContextMenuItem onClick={openEditModal} className="flex gap-2">
            <Pencil2Icon/>
            <span>Edit</span>
          </ContextMenuItem>
          <div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
            <div className="flex gap-2">
              <DimensionsIcon/>
              <span>Resize</span>
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
          <ContextMenuItem onClick={openNewModal} className="flex gap-2">
            <DashboardIcon/>
            <span>New</span>
          </ContextMenuItem>
          <ContextMenuItem onClick={deleteComp} className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]">
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