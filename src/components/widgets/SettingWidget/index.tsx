import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import React from "react";

export default function SettingWidget() {
  const [layoutConfig, setLayoutConfig] = useAtom(layoutConfigAtom)
  function handleWheel(event: React.WheelEvent<HTMLInputElement>) {
    event.preventDefault()
    const input = event.target as HTMLInputElement
    const delta = event.deltaY || event.detail
    if (delta > 0) {
      input.stepDown()
    } else {
      input.stepUp()
    }
    const newLayoutConfig = { ...layoutConfig, [input.id]: Number(input.value) }
    setLayoutConfig(newLayoutConfig)
  }
  return (
    <div className="p-4 flex flex-col items-start gap-1.5">
      <Label htmlFor="unit">单位长度</Label>
      <Input
        id="unit"
        type="number"
        placeholder="unit"
        min={0}
        value={layoutConfig.unit}
        onWheel={handleWheel}
        onChange={(v) => setLayoutConfig({ ...layoutConfig, unit: Number(v.target.value) })}
      />
      <Label htmlFor="gap">间隔</Label>
      <Input
        id="gap"
        type="number"
        placeholder="gap"
        min={0}
        value={layoutConfig.gap}
        onWheel={handleWheel}
        onChange={(v) => setLayoutConfig({ ...layoutConfig, gap: Number(v.target.value) })}
      />
    </div>
  )
}