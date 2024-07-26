import { Comp, isDraggingAtom } from "@/atoms/comps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconShop from "@/components/common/IconShop"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataUrlIcon from "@/icons/DataUrlIcon";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { MouseEventHandler, useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { HexColorPicker } from "react-colorful";
import Modal from "@/components/common/Modal";

export interface LinkWidgetProps {
  compAtom: PrimitiveAtom<Comp>
}

export default function LinkWidget({ compAtom }: LinkWidgetProps) {
  const [comp] = useAtom(compAtom)
  const { link, icon, bgColor } = comp.elementProps
  const [isDragging] = useAtom(isDraggingAtom)
  const [modalVisible, setModalVisible] = useState(false)
  const openBrowser: MouseEventHandler = (e) => {
    if (isDragging) return
    if (e.button === 0) {
      if (e.ctrlKey) {
        setModalVisible(true)
      } else {
        window.open(link)
      }
    }
  }

  return (
    <>
      <div
        onMouseUp={openBrowser}
        style={{
          backgroundColor: bgColor,
        }}
        className={`w-full h-full rounded-lg text-5xl select-none flex justify-center items-center hover:cursor-pointer`}>

        <DataUrlIcon
          className="w-3/4 h-3/4"
          src={icon} />
      </div>
      <Modal header="导航组件" visible={modalVisible} closeModal={() => setModalVisible(false)}>
        <LinkWidgetEditor compAtom={compAtom} />
      </Modal>
    </>
  )
}

{/* <ContextMenuItem className="focus:bg-transparent">
            <Separator className="my-1"/>
          </ContextMenuItem>
          <ContextMenuItem onClick={openEditModal} className="flex gap-2">
            <RadixIconsPencil2/>
            <span>编辑</span>
          </ContextMenuItem>
          <div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
            <div className="flex gap-2 items-center">
              <RadixIconsDimensions className="text-md"/>
              <span>布局</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={1} height={1} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={1} height={2} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={2} height={2} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={3} height={3} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={4} height={4} comp={comp}/>
              </ContextMenuItem>
              <ContextMenuItem className="rounded-lg border shadow-sm">
                <ResizeButton width={5} height={5} comp={comp}/>
              </ContextMenuItem>
            </div>
          </div>
              <ContextMenuItem onClick={deleteComp} className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]">
                <RadixIconsTrash />
                <span>删除</span>
              </ContextMenuItem> */}
export interface LinkWidgetEditorProps {
  compAtom: PrimitiveAtom<Comp>
}

export const LinkWidgetEditor = ({ compAtom }: LinkWidgetEditorProps) => {
  const [comp, setComp] = useAtom(compAtom)

  function updateIcon(icon: string) {
    setComp({ ...comp, elementProps: { ...comp.elementProps, icon } })
  }
  return (
    <div className="grid grid-cols-5 items-center gap-2">
      <Label htmlFor="link">网址</Label>
      <Input className="col-span-4" id="link" value={comp.elementProps.link} onChange={(v) => setComp({ ...comp, elementProps: { ...comp.elementProps, link: v.target.value } })} />

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
          <IconShop onSelect={(icon: string) => updateIcon(icon)} />
        </TabsContent>
        <TabsContent value="icon-url">
          <Input id="icon" value={comp.elementProps.icon} onChange={(v) => updateIcon(v.target.value)} />
        </TabsContent>
      </Tabs>

      <Label className="row-span-2" htmlFor="bgColor">背景色</Label>
      <HexColorPicker className="col-span-4 mt-4" id="bgColor" color={comp.elementProps.bgColor} onChange={(c) => setComp({ ...comp, elementProps: { ...comp.elementProps, bgColor: c } })} />
      <Input className="col-span-2" value={comp.elementProps.bgColor} onChange={(c) => setComp({ ...comp, elementProps: { ...comp.elementProps, bgColor: c.target.value } })} />


      {/* <Label className="row-span-2">预览</Label>
    <motion.div
    whileHover={{scale: 1.05}}
    style={{
      width: (unit*comp.width+((comp.width-1)*gap)), 
      height: (unit*comp.height+((comp.height-1)*gap)),
    }} 
    className="row-span-2 border bg-transparent col-span-4 rounded-lg shadow-lg overflow-hidden">
    <LinkWidget {...comp.elementProps} />
  </motion.div> */}
      {/* <Button className="col-start-3" onClick={save}>保存</Button> */}
    </div>
  )
}
