import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Input } from "./input";
import { useModal } from "./use-modal";
import type { ModalState } from "./use-modal";

export interface ModalProps {
	body: React.ReactNode;
	title: string;
	description?: string;
	dialogContentClassName?: string;
	onTitleChange?: (title: string) => void;
}

export function Modal() {
	const { modals } = useModal();

	return (
		<>
			{modals.map((modal) => (
				<ModalDialog key={modal.id} {...modal} />
			))}
		</>
	);
}

function ModalDialog({ open, onOpenChange, ...props }: ModalState) {
	const [title, setTitle] = useState(props.title);
	useEffect(() => {
		props.onTitleChange?.(title);
	}, [title, props.onTitleChange]);
	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className={cn("sm:max-w-[425px]", props.dialogContentClassName)}>
					<DialogHeader>
						<DialogTitle>
							{props.onTitleChange ? (
								<Input
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="w-fit h-fit focus-visible:ring-none focus-visible:ring-transparent text-lg p-0 border-none"
								/>
							) : (
								<div className="text-lg">{title}</div>
							)}
						</DialogTitle>
						<DialogDescription>{props.description}</DialogDescription>
					</DialogHeader>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.2,
							type: "spring",
						}}
					>
						{props.body}
					</motion.div>
				</DialogContent>
			</Dialog>
		</>
	);
}
