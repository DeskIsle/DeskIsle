import { AppLayout } from "@/pages/applayout";
import { Toaster } from "@/components/ui/toaster";
import React, { useState } from "react";
import Modal from "@/components/common/Modal";
import StoreWidget from "@/components/widgets/StoreWidget";
import SettingWidget from "@/components/widgets/SettingWidget";

export function Desk() {
  const [storeWidgetVisible, setStoreWidgetVisible] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)
  window.electronAPI.onOpenWidgetStore((value: boolean) => {
    setStoreWidgetVisible(value)
  })
  window.electronAPI.onOpenSettings((value: boolean) => {
    setSettingsVisible(value)
  })
  return (
    <div className="w-screen h-screen p-4 rounded-sm flex flex-col overflow-hidden">
      <AppLayout />
      <Toaster />
      <Modal header="组件商店" visible={storeWidgetVisible} closeModal={() => setStoreWidgetVisible(false)}>
        <StoreWidget />
      </Modal>
      <Modal header="设置" visible={settingsVisible} closeModal={() => setSettingsVisible(false)}>
        <SettingWidget />
      </Modal>
    </div>
  )
}