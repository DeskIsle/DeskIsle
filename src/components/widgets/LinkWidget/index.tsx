import { Comp, compsAtom, isDraggingAtom } from "@/atoms/comps";
import { iconsAtom } from "@/atoms/icons";
import { layoutConfigAtom } from "@/atoms/layoutConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import IconShop from "@/components/common/IconShop"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataUrlIcon from "@/icons/DataUrlIcon";
import { motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { HexColorInput, HexColorPicker } from "react-colorful";

export interface LinkWidgetProps {
  link: string,
  icon: string,
  bgColor: string,
}


export default function LinkWidget({link, icon, bgColor}: LinkWidgetProps) {
  const [isDragging] = useAtom(isDraggingAtom)
  function openBrowser() {
    if (isDragging) return
    window.open(link)
  }
  return (
    <div 
      onMouseUp={openBrowser} 
      style={{
        backgroundColor: bgColor,
      }}
      className={`w-full h-full text-5xl select-none flex justify-center items-center hover:cursor-pointer`}>
      <DataUrlIcon 
        className="w-3/4 h-3/4" 
        src={icon} />
    </div>
  )
}

interface LinkWidgetEditorProps {
  comp: Comp,
  dismissTop: () => void
}

export const LinkWidgetEditor = ({comp: oldComp, dismissTop}: LinkWidgetEditorProps) => {
  const [comp, setComp] = useState<Comp>({
    ...oldComp,
    elementProps: {
      ...oldComp.elementProps
    } as LinkWidgetProps
  })
  const [comps, setComps] = useAtom(compsAtom)
  const [{unit, gap}] = useAtom(layoutConfigAtom)

  function save() {
    const newComps = comps.map(item => item.id === comp.id ? comp : item)
    setComps(newComps)
    dismissTop()
  }
  function updateIcon(icon: string) {
    setComp({...comp, elementProps: {...comp.elementProps, icon}})
  }
  return (
    <div className="grid grid-cols-5 items-center gap-2">
      <Label htmlFor="link">网址</Label>
      <Input className="col-span-4" id="link" value={comp.elementProps.link} onChange={(v) => setComp({...comp, elementProps: {...comp.elementProps, link: v.target.value}})} />
      
      <Label htmlFor="icon">图标</Label>
      <Tabs className="col-span-4" defaultValue="icon-shop">
        <TabsList>
          <TabsTrigger value="icon-shop">图标商店</TabsTrigger>
          <TabsTrigger className="flex gap-1" value="icon-url">
            <span>图标URL</span> 
            <ExternalLinkIcon onClick={() => window.open('https://icones.js.org/')} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="icon-shop">
          <IconShop onSelect={(icon: string) => updateIcon(icon)}/>
        </TabsContent>
        <TabsContent value="icon-url">
          <Input id="icon" value={comp.elementProps.icon} onChange={(v) => updateIcon(v.target.value)} />
        </TabsContent>
      </Tabs>
      
      <Label className="row-span-2" htmlFor="bgColor">背景色</Label>
      <HexColorPicker className="col-span-4 mt-4" id="bgColor" color={comp.elementProps.bgColor} onChange={(c) => setComp({...comp, elementProps: {...comp.elementProps, bgColor: c}})} />
      <Input className="col-span-2" value={comp.elementProps.bgColor} onChange={(c) => setComp({...comp, elementProps: {...comp.elementProps, bgColor: c.target.value}})} />
      <Separator className="col-span-5" />

      <Label className="row-span-2">预览</Label>
      <motion.div
        whileHover={{scale: 1.05}}
        style={{
          width: (unit*comp.width+((comp.width-1)*gap)), 
          height: (unit*comp.height+((comp.height-1)*gap)),
        }} 
        className="row-span-2 border bg-transparent col-span-4 rounded-lg shadow-lg overflow-hidden">
        <LinkWidget {...comp.elementProps} />
      </motion.div>
      <Button className="col-start-3" onClick={save}>保存</Button>
    </div>
  )
}
