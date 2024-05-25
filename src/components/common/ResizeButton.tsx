import { compsAtom } from "@/atoms/comps";
import { Comp } from "@/pages/applayout";
import { atom, useAtom } from "jotai";
import React from "react";

interface LayoutButtonProps {
  width: number,
  height: number,
  comp: Comp
}

export default function ResizeButton({width, height, comp}: LayoutButtonProps) {
  const [comps, setComps] = useAtom(compsAtom)
  function handleClick() {
    const newComps = comps.map((item) => {
      if (item.id === comp.id) return {...item, width, height}
      else return item
    })
    console.log(newComps)
    setComps(newComps)
  }
  return (
    <button 
      onClick={handleClick}
    >
      {width}x{height}
    </button>
  )
}