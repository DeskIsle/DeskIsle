import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
      <Alert className="mt-4">
        <AlertTitle>💡 小技巧 1</AlertTitle>
        <AlertDescription>
          导航组件编辑快捷键: Ctrl+鼠标左键
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertTitle>💡 小技巧 2</AlertTitle>
        <AlertDescription>
          删除组件: 长按保持1s进入删除模式
        </AlertDescription>
      </Alert>
    </div>
  )
}