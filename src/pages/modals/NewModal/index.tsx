import { compsAtom, linkWidgetAtom } from "@/atoms/comps";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAtom, useAtomValue } from "jotai";
import React, { useState } from "react";
import Card from "@/components/common/Card";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useResetAtom } from "jotai/utils";
import { ChatBubbleIcon, EnvelopeOpenIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { iconsAtom } from "@/atoms/icons";

export default function NewModal() {
  const [comps, setComps] = useAtom(compsAtom)
  const containerVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  }
  const itemVariant = {
    hidden: {y: 20, opacity: 0},
    visible: {y: 0, opacity: 1}
  }
  // const { present } = useModalStack()
  // function newLinkWidget() {
  //   present({
  //     title: 'New',
  //     content: () => (
  //       <div>LinkWidget</div>
  //     ),
  //   })
  // }
  const [type, setType] = useState('')
  return (
    <div className="relative w-[20vw] h-[40vh] overflow-hidden">
      <motion.ul 
        variants={containerVariant}
        initial="hidden"
        animate="visible" 
        className="absolute p-4 grid grid-cols-2 gap-1.5 w-full h-full"
      >
        <motion.li variants={itemVariant}><Card onClick={() => setType('LinkWidget')} className="w-40 h-40">网址导航</Card></motion.li>
        <motion.li variants={itemVariant}><Card onClick={() => setType('ImageWidget')} className="w-40 h-40">图像小组件</Card></motion.li>
        <motion.li variants={itemVariant}><Card onClick={() => setType('IFrameWidget')} className="w-40 h-40">iFrame组件</Card></motion.li>
      </motion.ul>
      {type !== '' && 
        <AnimatePresence mode="wait">
          <motion.div
            key={type}
            initial={{x: 0, y: 50, borderRadius: 50, opacity: 0}}
            animate={{x: 0, y: 0, borderRadius: 10, opacity: 1}}
            transition={{duration: 0.3}}
            className="absolute flex flex-col gap-2 px-4 py-2 items-start justify-between w-full h-full border shadow bg-white"
          >
            <NewHandler type={type} setType={setType}/>
          </motion.div>
        </AnimatePresence>
      }
    </div>
  )
}

interface NewHandlerProps {
  type: string
  setType: (v: string) => void
}

export function NewHandler({type, setType}: NewHandlerProps) {
  if (type === 'LinkWidget') {
    const [linkWidget, setLinkWidget] = useAtom(linkWidgetAtom)
    const reset = useResetAtom(linkWidgetAtom)
    const icons = useAtomValue(iconsAtom)
    function save() {
      // reset()
      setType('')
    }
    function selectIcon(icon: React.ReactNode) {
      setLinkWidget({...linkWidget, target: {...linkWidget.target, icon}})
    }
    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor="link">网址</Label>
        <Input id="link" placeholder="link" value={linkWidget.target.link} onChange={(v) => setLinkWidget({...linkWidget, target: {...linkWidget.target, link: v.target.value}})} />
        <Label htmlFor="icon">Icon</Label>
        <div className="grid grid-cols-6">
          {icons.map((icon, index) => <div key={index} onClick={e => selectIcon(icon)} className={`p-2 rounded-sm ${icon === linkWidget.target.icon ? 'bg-accent' : ''} hover:bg-accent`}>{icon}</div>)}
        </div>
        <Button onClick={save}>保存</Button>
      </div>
    )
  }
}
