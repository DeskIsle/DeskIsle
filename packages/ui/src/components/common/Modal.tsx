import { Cross2Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { type ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Separator } from "../ui/separator";

interface ModalProps {
	children: ReactNode;
	showModal: boolean;
	hideModal: () => void;
	header?: ReactNode;
}

const Modal = ({ children, showModal, hideModal, header }: ModalProps) => {
	const ref = useRef(null);
	const [canDrag, setCanDrag] = useState(true);
	const rootDiv = document.getElementById("root");
	const rootRef = useRef(rootDiv);
	const modal = createPortal(
		<motion.div
			ref={ref}
			drag={canDrag}
			dragConstraints={rootRef}
			className="absolute h-[500px] w-[500px] border border-slate-200 top-0 left-0 right-0 bottom-0 m-auto flex flex-col gap-2 bg-white p-4 px-4 rounded-lg"
		>
			<div onMouseEnter={() => setCanDrag(true)} className="flex flex-row-reverse justify-between">
				<Cross2Icon onClick={() => hideModal()} className="w-6 h-6 p-1 rounded-sm hover:bg-slate-200" />
				{header}
			</div>
			<Separator />
			<div onMouseEnter={() => setCanDrag(false)}>{children}</div>
		</motion.div>,
		rootDiv ?? document.body,
	);
	return <div>{showModal && modal}</div>;
};

export default Modal;
