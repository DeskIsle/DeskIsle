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
  if (!iconColor) iconColor = 'text-white'
  if (!bgColor) bgColor = 'bg-gradient-to-r from-purple-500 to-pink-500'
  return (
    <div onClick={openBrowser} className={`${bgColor} ${iconColor} w-full h-full select-none flex justify-center items-center hover:cursor-pointer`}>
      {icon}
    </div>
  )
}