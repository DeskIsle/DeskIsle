import { iconsAtom } from "@/atoms/icons"
import DataUrlIcon from "@/icons/DataUrlIcon"
import { useAtomValue } from "jotai"
import React from "react"

interface IconShopProps {
  onSelect: (icon: string) => void
}

export default function IconShop({onSelect}: IconShopProps) {
  const icons = useAtomValue(iconsAtom)
  return (
    <div className="flex flex-wrap gap-2">
      {icons.map((icon, index) => 
        <div 
          key={index} 
          onClick={() => onSelect(icon)} 
          className={`flex justify-center items-center w-8 h-8 p-1 rounded-sm hover:bg-slate-200`}>
            <DataUrlIcon className="w-3/4 h-3/4" src={icon} />
        </div>
      )}
    </div>
  )
}