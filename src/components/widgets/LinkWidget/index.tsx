import { Comp, isDraggingAtom } from "@/atoms/comps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconShop from "@/components/common/IconShop"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataUrlIcon from "@/icons/DataUrlIcon";
import { PrimitiveAtom, useAtom } from "jotai";
import React, { MouseEventHandler, useState } from "react";
import { DotsHorizontalIcon, ExternalLinkIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { HexColorPicker } from "react-colorful";
import Modal from "@/components/common/Modal";
import { ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { ContextMenu, ContextMenuItem } from "@/components/ui/context-menu";
import BaseContextMenuContent from "@/components/common/BaseContextMenuContent";
import { RadixIconsPencil2 } from "@/icons/RadixIcons";
import { Button } from "@/components/ui/button";
import { iconsAtom } from "@/atoms/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface LinkWidgetProps {
  compAtom: PrimitiveAtom<Comp>
}

export default function LinkWidget({ compAtom }: LinkWidgetProps) {
  const [comp] = useAtom(compAtom)
  const { link, icon, bgColor } = comp.elementProps
  const [modalVisible, setModalVisible] = useState(false)
  const openBrowser: MouseEventHandler = (e) => {
    if (e.button === 0) {
      window.open(link)
    }
  }

  return (
    <>
      <ContextMenu modal={false}>
        <ContextMenuTrigger className="w-full h-full">
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
        </ContextMenuTrigger>
        <BaseContextMenuContent compAtom={compAtom}>
          <ContextMenuItem onClick={() => setModalVisible(true)} className="flex gap-2">
            <RadixIconsPencil2 />
            <span>编辑</span>
          </ContextMenuItem>
        </BaseContextMenuContent>
      </ContextMenu>
      <Modal visible={modalVisible} closeModal={() => setModalVisible(false)} >
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
  const [icons, setIcons] = useAtom(iconsAtom)

  function updateIcon(icon: string) {
    setComp({ ...comp, elementProps: { ...comp.elementProps, icon } })
  }
  async function openFileDialog() {
    const path = await window.electronAPI.openFile()
    if (path) {
      setComp({ ...comp, elementProps: { ...comp.elementProps, link: path } })
    }
  }
  async function openIconDialog() {
    const path = await window.electronAPI.openFile()
    if (path) {
      updateIcon(path)
    }
  }
  function collectToIconStore() {
    if (!icons.includes(comp.elementProps.icon)) {
      setIcons([...icons, comp.elementProps.icon])
    } else {
      setIcons(icons.filter((i) => i !== comp.elementProps.icon))
    }
  }

  return (
    <div className="grid grid-cols-5 items-center gap-2">
      <Label className="col-span-1" htmlFor="link">路径</Label>
      <div className="col-span-4 grid grid-cols-4 gap-2">
        <Input className="col-span-3" id="link" value={comp.elementProps.link} onChange={(v) => setComp({ ...comp, elementProps: { ...comp.elementProps, link: v.target.value } })} />
        <Button onClick={openFileDialog} variant='outline' size='icon'>
          <DotsHorizontalIcon />
        </Button>
      </div>
      <Label className="col-span-1" htmlFor="icon">图标</Label>
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
          <div className="grid grid-cols-4 gap-2">
            <Input className="col-span-3" id="icon" value={comp.elementProps.icon} onChange={(v) => updateIcon(v.target.value)} />
            <div className="flex flex-row gap-1">
              <Button onClick={openIconDialog} variant='outline' size='icon'>
                <DotsHorizontalIcon />
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button onClick={collectToIconStore} variant='outline' size='icon'>
                      {icons.includes(comp.elementProps.icon) ? <StarFilledIcon /> : <StarIcon />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {icons.includes(comp.elementProps.icon) ? <p>取消收藏</p> : <p>收藏到图标商店</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Label className="row-span-2" htmlFor="bgColor">背景色</Label>
      <HexColorPicker className="col-span-4 mt-4" id="bgColor" color={comp.elementProps.bgColor} onChange={(c) => setComp({ ...comp, elementProps: { ...comp.elementProps, bgColor: c } })} />
      <Input className="col-span-2" value={comp.elementProps.bgColor} onChange={(c) => setComp({ ...comp, elementProps: { ...comp.elementProps, bgColor: c.target.value } })} />

    </div >
  )
}
