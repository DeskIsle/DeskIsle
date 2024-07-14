import { Comp, compAtoms } from "@/atoms/comps"
import React, { useState } from "react"
import { useAtom } from "jotai"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import CitySelector from "@/components/common/CitySelector"

interface ClimaWidgetEditorProps {
  comp: Comp,
  dismissTop: () => void
}

export function ClimaWidgetEditor({comp: oldComp, dismissTop}: ClimaWidgetEditorProps) {
  const [comp] = useState<Comp>({
    ...oldComp,
    elementProps: {
      ...oldComp.elementProps
    }
  })
  const [comps, setComps] = useAtom(compAtoms)
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