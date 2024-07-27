import React, { useRef } from "react";
import { ContextMenuContent, ContextMenuItem } from "../ui/context-menu";
import { Separator } from "../ui/separator";
import { TrashIcon } from "@radix-ui/react-icons";
import { PrimitiveAtom, useAtom } from "jotai";
import { Comp, compAtoms } from "@/atoms/comps";
import ResizeMenuItem from "./ResizeMenuItem";

interface BaseContextMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  compAtom: PrimitiveAtom<Comp>
}

export default function BaseContextMenuContent(props: BaseContextMenuContentProps) {
  const { compAtom, children } = props
  const [, setComps] = useAtom(compAtoms)

  const deleteComp = () => {
    setComps((comps) => comps.filter((comp) => comp.id !== comp.id))
  }
  const ref = useRef<HTMLDivElement>(null)
  return (
    <ContextMenuContent ref={ref}>
      <ContextMenuItem className="focus:bg-transparent">
        <Separator className="my-1" />
      </ContextMenuItem>
      {children}
      <ResizeMenuItem compAtom={compAtom} />
      <ContextMenuItem onClick={deleteComp} className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]">
        <TrashIcon />
        <span>Delete</span>
      </ContextMenuItem>
    </ContextMenuContent>
  )
}