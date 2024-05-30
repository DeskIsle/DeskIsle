import React, { useState } from "react";
import Card from "@/components/common/Card";
import { AnimatePresence, motion } from "framer-motion";

export default function WidgetShop() {
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
  const [type, setType] = useState('')
  return (
    <div className="relative w-[20vw] h-[40vh] overflow-hidden">
      <motion.ul 
        variants={containerVariant}
        initial="hidden"
        animate="visible" 
        className="absolute p-4 grid grid-cols-2 gap-2 w-full h-full"
      >
        <motion.li variants={itemVariant}><Card onClick={() => setType('LinkWidget')} className="w-40 h-40">网址导航</Card></motion.li>
        <motion.li variants={itemVariant}><Card onClick={() => setType('ImageWidget')} className="w-40 h-40">图像小组件</Card></motion.li>
        <motion.li variants={itemVariant}><Card onClick={() => setType('IFrameWidget')} className="w-40 h-40">iFrame组件</Card></motion.li>
      </motion.ul>
      <NewHandler type={type}/>
    </div>
  )
}

interface NewHandlerProps {
  type: string
}

export function NewHandler({type}: NewHandlerProps) {
  let editor = null
  if (type === '') return null
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type}
        initial={{x: 0, y: 50, borderRadius: 50, opacity: 0}}
        animate={{x: 0, y: 0, borderRadius: 10, opacity: 1}}
        transition={{duration: 0.3}}
        className="absolute flex flex-col gap-2 px-4 py-2 items-start justify-between w-full h-full border shadow bg-white"
      >
        {editor}
      </motion.div>
    </AnimatePresence>
  )
}
