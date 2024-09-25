import type { Comp } from "@/atoms/comps"
import BaseContextMenu from "@/components/common/BaseContextMenu"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"
import DataUrlIcon from "@/icons/DataUrlIcon"
import { type PrimitiveAtom, useAtom } from "jotai"
import type { LinkWidgetElementProps } from "../LinkWidget"

export interface FolderWidgetProps {
  compAtom: PrimitiveAtom<Comp>
}

interface FolderWidgetElementProps {
  comps: Comp[]
}

export const FolderWidget = ({ compAtom }: FolderWidgetProps) => {
  const [comp] = useAtom(compAtom)
  const { comps } = comp.elementProps as FolderWidgetElementProps
  return (
    <>
      <ContextMenu modal={false}>
        <ContextMenuTrigger className="w-full h-full">
          <div className={`w-full h-full grid grid-cols-2 grid-rows-2 gap-${comp.width} p-${comp.width} hover:cursor-pointer bg-black/25 rounded-lg`}>
            {comps.map((comp) => {
              const { icon, bgColor } = comp.elementProps as LinkWidgetElementProps
              return (
                <div
                  key={comp.id}
                  style={{
                    backgroundColor: bgColor,
                  }}
                  className={
                    "w-full h-full rounded-sm text-5xl select-none flex justify-center items-center"
                  }
                >
                  <DataUrlIcon className="w-3/4 h-3/4" src={icon} />
                </div>
              )
            })}
          </div>
        </ContextMenuTrigger>
        <BaseContextMenu compAtom={compAtom}>
        </BaseContextMenu>
      </ContextMenu>
    </>
  )

}
