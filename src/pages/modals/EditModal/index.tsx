import { Comp, compAtoms } from "@/atoms/comps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";

interface EditModalProps {
  comp: Comp
}

export default function EditModal({comp}: EditModalProps) {
  const [comps, setComps] = useAtom(compAtoms)
  const [compState, setCompState] = useState<any>(comp)
  useEffect(() => {
    const newComps = comps.map((item) => {
      if (item.id === comp.id) {
        return compState
      }
      return item
    })
    setComps(newComps)
  }, [compState])
  return (
    <div className="p-4 flex flex-col items-start gap-1.5 w-[20vw] h-[40vh]">
      <Label htmlFor="width">宽度</Label>
      <Input id="width" placeholder="width" value={compState.width} onChange={(v) => setCompState({...compState, width: Number(v.target.value)})} />
      <Label htmlFor="height">长度</Label>
      <Input id="height" placeholder="height" value={compState.height} onChange={(v) => setCompState({...compState, height: Number(v.target.value)})}/>
    </div>
  )
}