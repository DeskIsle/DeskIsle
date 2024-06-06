import { Comp, compsAtom } from "@/atoms/comps"
import { ClimaWidgetProps } from './index'
import { useState } from "react"
import { useAtom } from "jotai"
import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CitySelector from "@/components/common/CitySelector"

interface ClimaWidgetEditorProps {
  comp: Comp,
  dismissTop: () => void
}

export function ClimaWidgetEditor({comp: oldComp, dismissTop}: ClimaWidgetEditorProps) {
  const [comp, setComp] = useState<Comp>({
    ...oldComp,
    elementProps: {
      ...oldComp.elementProps
    } as ClimaWidgetProps
  })
  const [comps, setComps] = useAtom(compsAtom)
  function save() {
    const newComps = comps.map(item => item.id === comp.id ? comp : item)
    setComps(newComps)
    dismissTop()
  }
  return ( 
    <div className="grid grid-cols-5 items-center gap-2">
      <Label htmlFor="location">地区</Label>
      <CitySelector />
      <Button className="col-start-3" onClick={save}>保存</Button>
    </div>
  )
}