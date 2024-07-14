import React from "react";
import { compAtoms, registryComps } from "@/atoms/comps"
import Card from "@/components/common/Card";
import { useAtom } from "jotai";

export default function StoreWidget() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.keys(registryComps).map((key, index) => {
        const k = key as keyof typeof registryComps
        return (
          <WidgetItem key={index} k={k}></WidgetItem>
        )
      })}
    </div>
  )
}

function WidgetItem({ k }: { k: keyof typeof registryComps }) {
  const { name, Element, defaultProps } = registryComps[k]
  const [comps, setComps] = useAtom(compAtoms)
  function addWidget() {
    setComps([...comps, {
      id: comps.length + 1,
      row: 0,
      col: 0,
      width: defaultProps.width,
      height: defaultProps.height,
      element: k,
      elementProps: defaultProps.elementProps
    }])
  }
  return (
    <Card onClick={addWidget} className="p-4">
      {name}
    </Card>
  )
}