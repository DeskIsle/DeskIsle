import { compsAtom } from "@/atoms/comps";
import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import React, { ChangeEvent, useState } from "react";

export default function SettingPage() {
  const [layoutConfig, setLayoutConfig] = useAtom(layoutConfigAtom)
  const [comps, setComps] = useAtom(compsAtom)
  const [value, setValue] = useState(comps[0].width)
  function changeComp(v: ChangeEvent<HTMLInputElement>) {
    const newComps = comps.map((item) => {
      if (item.id === 0) {
        setValue(Number(v.target.value))
        return {...item, width: Number(v.target.value)}
      }
      return item
    })
    setComps(newComps)
  }
  return (
    <motion.div drag className="p-4 flex flex-col items-start gap-1.5 bg-white w-[20vw] h-[40vh] border rounded-lg shadow-sm">
      <Label htmlFor="unit">单位长度</Label>
      <Input id="unit" placeholder="unit" value={layoutConfig.unit} onChange={(v) => setLayoutConfig({...layoutConfig, unit: Number(v.target.value)})}/>
      <Label htmlFor="gap">间隔</Label>
      <Input id="gap" placeholder="gap" value={layoutConfig.gap} onChange={(v) => setLayoutConfig({...layoutConfig, gap: Number(v.target.value)})}/>
      <Label htmlFor="dragMode">拖拽模式</Label>
      <Switch id="dragMode" checked={layoutConfig.dragMode} onCheckedChange={(c: boolean) => setLayoutConfig({...layoutConfig, dragMode: c})} />
      <Input id="comp" placeholder="comp" value={value} onChange={(v) => changeComp(v)} />
      <StateBar />
    </motion.div>
  )
}

export function StateBar() {
  const [comps, setComps] = useAtom(compsAtom)
  return (
    <div>width: {comps[0].width}</div>
  )
}