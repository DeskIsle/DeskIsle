import { motion } from "framer-motion";
import type React from "react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { useModal } from "./use-modal";
import type { ModalState } from "./use-modal";

export interface ModalProps {
	body: React.ReactNode;
	title: string;
	description?: string;
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
	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{props.title}</DialogTitle>
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
					<DialogFooter>
						<Button type="button" onClick={() => onOpenChange(false)}>
							Okey
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
