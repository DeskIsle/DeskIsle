import { Cross2Icon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState, ReactNode } from "react"
import { createPortal } from "react-dom"
import { Separator } from "../ui/separator"

interface ModalProps {
  children: ReactNode
  visible: boolean
  closeModal: () => void
  header?: ReactNode,
}

const Modal = ({children, visible, closeModal, header}: ModalProps) => {
  const ref = useRef(null)
  const [canDrag, setCanDrag] = useState(true)
  const [dragConstraints, setDragConstraints] = useState({top: 0, left: 0, right: 0, bottom: 0})
  useEffect(() => {
    if (!ref.current) return
    const refElement = ref.current as HTMLElement
    const newDragConstraints = {
      top: 20,
      left: 20,
      right: document.body.offsetWidth - refElement.offsetWidth - 20,
      bottom: document.body.offsetHeight - refElement.offsetHeight - 20,
    }
    setDragConstraints(newDragConstraints)
  }, [children])
  const modal = createPortal(
    <motion.div
      ref={ref}
      drag={canDrag}
      dragConstraints={dragConstraints}
      className="absolute top-5 left-5 flex flex-col gap-2 bg-white p-4 px-4 rounded-lg">
      <div
        onMouseEnter={() => setCanDrag(true)}
        className="flex flex-row-reverse justify-between"
      >
        <Cross2Icon onClick={() => closeModal()} className="w-6 h-6 p-1 rounded-sm hover:bg-slate-200"/>
        {header}
      </div>
      <Separator />
      <div onMouseEnter={() => setCanDrag(false)}>
        {children}
      </div>
    </motion.div>,
    document.body
  )
  return <div>{visible && modal}</div>
}

export default React.memo(Modal)