import { Comp } from "@/atoms/comps";
import { PrimitiveAtom, useAtom } from "jotai";
import React from "react";

export interface ImageWidgetProps {
  compAtom: PrimitiveAtom<Comp>
}

export default function ImageWidget({ compAtom }: ImageWidgetProps) {
  const [comp] = useAtom(compAtom)
  const { img } = comp.elementProps
  return (
    <img
      className="object-cover w-full h-full"
      draggable={false}
      src={img}
      alt=''
    />
  )
}