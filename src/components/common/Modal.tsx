import { Cross2Icon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { Separator } from "../ui/separator"

interface ModalProps {
  children: ReactNode
  visible: boolean
  closeModal: () => void
}

const Modal = ({children, visible, closeModal}: ModalProps) => {
  const ref = useRef(null)
  const [dragConstraints, setDragConstraints] = useState({top: 0, left: 0, right: 0, bottom: 0})
  useEffect(() => {
    if (!ref.current) return
    const refElement = ref.current as HTMLElement
    const newDragConstraints = {
      top: 20,
      left: 20,
      right: document.body.offsetWidth - refElement.offsetWidth - 20,
      bottom: document.body.offsetHeight - refElement.offsetWidth - 20,
    }
    setDragConstraints(newDragConstraints)
  })
  const modal = createPortal(
    <motion.div 
      ref={ref} 
      drag 
      dragConstraints={dragConstraints}
      className="absolute top-0 left-0 flex flex-col gap-2 bg-white p-4 px-4 rounded-lg">
      <div className="flex flex-row-reverse">
        <Cross2Icon onClick={() => closeModal()} className="w-6 h-6 p-1 rounded-sm hover:bg-slate-200"/>
      </div>
      <Separator />
      {children}
    </motion.div>,
    document.body
  )
  return <div>{visible && modal}</div>
}

export default React.memo(Modal)