import { cn } from "@/lib/utils";
import type React from "react";
import {} from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./drawer";
import { useModal } from "./use-modal";
import type { ModalState } from "./use-modal";

export interface ModalProps {
	type?: "dialog" | "drawer";
	body: React.ReactNode;
	title: string;
	description?: string;
}

export function Modal() {
	const { modals } = useModal();

	return (
		<>
			{modals.map((modal) =>
				modal.type === "drawer" ? <DrawerModal key={modal.id} {...modal} /> : <DialogModal key={modal.id} {...modal} />,
			)}
		</>
	);
}

function DialogModal({ open, onOpenChange, ...props }: ModalState) {
	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className={"sm:max-w-[425px]"}>
					<DialogHeader>
						<DialogTitle>{props.title}</DialogTitle>
						<DialogDescription className={cn(props.description ? "block" : "hidden")}>
							{props.description || props.title}
						</DialogDescription>
					</DialogHeader>
					{props.body}
				</DialogContent>
			</Dialog>
		</>
	);
}

function DrawerModal({ open, onOpenChange, ...props }: ModalState) {
	return (
		<>
			<Drawer open={open} onOpenChange={onOpenChange} direction={"right"}>
				<DrawerContent className="left-auto">
					<DrawerHeader>
						<DrawerTitle>{props.title}</DrawerTitle>
						<DrawerDescription className={cn(props.description ? "block" : "hidden")}>
							{props.description || props.title}
						</DrawerDescription>
					</DrawerHeader>
					{props.body}
				</DrawerContent>
			</Drawer>
		</>
	);
}
