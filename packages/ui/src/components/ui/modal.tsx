import { cn } from "@/lib/utils";
import type React from "react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./drawer";
import { Input } from "./input";
import { useModal } from "./use-modal";
import type { ModalState } from "./use-modal";

export interface ModalProps {
	type?: "dialog" | "drawer";
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
			{modals.map((modal) =>
				modal.type === "drawer" ? <DrawerModal key={modal.id} {...modal} /> : <DialogModal key={modal.id} {...modal} />,
			)}
		</>
	);
}

function DialogModal({ open, onOpenChange, ...props }: ModalState) {
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
