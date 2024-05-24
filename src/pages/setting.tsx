import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import React from "react";

export default function SettingPage() {
  const [layoutConfig, setLayoutConfig] = useAtom(layoutConfigAtom)
  return (
    <div className="p-4 flex flex-col items-start gap-1.5 bg-white w-[20vw] h-[40vh] border rounded-lg shadow-sm">
      <Label htmlFor="unit">单位长度</Label>
      <Input id="unit" placeholder="unit" value={layoutConfig.unit} onChange={(v) => setLayoutConfig({...layoutConfig, unit: Number(v.target.value)})}/>
      <Label htmlFor="gap">间隔</Label>
      <Input id="gap" placeholder="gap" value={layoutConfig.gap} onChange={(v) => setLayoutConfig({...layoutConfig, gap: Number(v.target.value)})}/>
      <Label htmlFor="dragMode">拖拽模式</Label>
      <Switch id="dragMode" checked={layoutConfig.dragMode} onCheckedChange={(c: boolean) => setLayoutConfig({...layoutConfig, dragMode: c})} />
    </div>
  )
}