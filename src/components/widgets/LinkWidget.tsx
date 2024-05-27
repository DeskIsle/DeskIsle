import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { useLongPress } from "@uidotdev/usehooks";
import { useAtom } from "jotai";
import React from "react";

export interface LinkWidgetProps {
  link: string,
  icon?: Icon,
  iconColor?: string,
  bgColor?: string,
}

type Icon = string | React.ReactNode

export default function LinkWidget({link, icon, iconColor, bgColor}: LinkWidgetProps) {
  const [{dragMode}] = useAtom(layoutConfigAtom)
  function openBrowser() {
    if (dragMode) return
    window.open(link)
  }
  return (
    <div 
      onClick={openBrowser} 
      style={{
        backgroundColor: bgColor,
        color: iconColor
      }}
      className={`w-full h-full select-none flex justify-center items-center hover:cursor-pointer`}>
      {icon}
    </div>
  )
}