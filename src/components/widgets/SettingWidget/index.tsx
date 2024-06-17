import { compsAtom, isDraggingAtom } from "@/atoms/comps";
import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import DataUrlIcon from "@/icons/DataUrlIcon";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import { useModalStack } from "rc-modal-sheet";
import React, { MouseEventHandler } from "react";

export default function SettingWidget() {
  const { present } = useModalStack()
  const [isDragging] = useAtom(isDraggingAtom)
  
  const openSettingEditorModal: MouseEventHandler<HTMLDivElement> = (event) => {
    if (isDragging) return
    if (event.button === 0) {
      present({
        title: '系统设置',
        content: () => (
          <SettingWidgetEditor />
        ),
      })
    }
  }
  return (
    <div
      onMouseUp={openSettingEditorModal}
      className={`bg-white w-full h-full text-5xl select-none flex justify-center items-center hover:cursor-pointer`}>
      <DataUrlIcon 
        className="w-3/4 h-3/4" 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNCNEFDQkMiIGQ9Ik0xMi44NDcgMy44MzRBMiAyIDAgMCAxIDE0Ljg0IDJoMi4zMmEyIDIgMCAwIDEgMS45OTMgMS44MzRsLjIzNSAyLjgyNWEuNS41IDAgMCAwIC44MjEuMzRsMi4xNjQtMS44MzFhMiAyIDAgMCAxIDIuNzA2LjExMmwxLjY0IDEuNjRhMiAyIDAgMCAxIC4xMTMgMi43MDdsLTEuODMgMi4xNjNhLjUuNSAwIDAgMCAuMzQuODIybDIuODI0LjIzNUEyIDIgMCAwIDEgMzAgMTQuODR2Mi4zMmEyIDIgMCAwIDEtMS44MzQgMS45OTNsLTIuODI1LjIzNWEuNS41IDAgMCAwLS4zNC44MjFsMS44MzEgMi4xNjRhMiAyIDAgMCAxLS4xMTIgMi43MDZsLTEuNjQgMS42NGEyIDIgMCAwIDEtMi43MDcuMTEzbC0yLjE2NC0xLjgzYS41LjUgMCAwIDAtLjgyLjM0bC0uMjM2IDIuODI0QTIgMiAwIDAgMSAxNy4xNiAzMGgtMi4zMmEyIDIgMCAwIDEtMS45OTMtMS44MzRsLS4yMzUtMi44MjVhLjUuNSAwIDAgMC0uODIyLS4zNGwtMi4xNjMgMS44MzFhMiAyIDAgMCAxLTIuNzA2LS4xMTJsLTEuNjQtMS42NGEyIDIgMCAwIDEtLjExMy0yLjcwN2wxLjgzLTIuMTY0YS41LjUgMCAwIDAtLjM0LS44MmwtMi44MjQtLjIzNkEyIDIgMCAwIDEgMiAxNy4xNnYtMi4zMmEyIDIgMCAwIDEgMS44MzQtMS45OTNsMi44MjUtLjIzNWEuNS41IDAgMCAwIC4zNC0uODIyTDUuMTY4IDkuNjI4QTIgMiAwIDAgMSA1LjI4IDYuOTJsMS42NC0xLjY0YTIgMiAwIDAgMSAyLjcwNy0uMTEzbDIuMTYzIDEuODNhLjUuNSAwIDAgMCAuODIyLS4zNHpNMjEgMTZhNSA1IDAgMSAwLTEwIDBhNSA1IDAgMCAwIDEwIDAiLz48cGF0aCBmaWxsPSIjOTk4RUE0IiBkPSJNMjQgMTZhOCA4IDAgMSAxLTE2IDBhOCA4IDAgMCAxIDE2IDBtLTMuNSAwYTQuNSA0LjUgMCAxIDAtOSAwYTQuNSA0LjUgMCAwIDAgOSAwIi8+PHBhdGggZmlsbD0iI0NEQzRENiIgZD0iTTEwLjUgMTZhNS41IDUuNSAwIDEgMSAxMSAwYTUuNSA1LjUgMCAwIDEtMTEgME0yMSAxNmE1IDUgMCAxIDAtMTAgMGE1IDUgMCAwIDAgMTAgMCIvPjwvZz48L3N2Zz4=" />
    </div>
  )
}

export function SettingWidgetEditor() {
  const [layoutConfig, setLayoutConfig] = useAtom(layoutConfigAtom)
  return (
    <div className="p-4 flex flex-col items-start gap-1.5">
      <Label htmlFor="unit">单位长度</Label>
      <Input id="unit" placeholder="unit" value={layoutConfig.unit} onChange={(v) => setLayoutConfig({...layoutConfig, unit: Number(v.target.value)})}/>
      <Label htmlFor="gap">间隔</Label>
      <Input id="gap" placeholder="gap" value={layoutConfig.gap} onChange={(v) => setLayoutConfig({...layoutConfig, gap: Number(v.target.value)})}/>
      {/* <Label htmlFor="dragMode">编辑模式</Label>
      <Switch id="dragMode" checked={layoutConfig.editMode} onCheckedChange={toggleEditMode} /> */}
    </div>
  )
}