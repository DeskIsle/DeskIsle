import { type BaseComponentMeta, componentsAtoms } from "@/atoms/components";
import { TrashIcon } from "@radix-ui/react-icons";
import { type PrimitiveAtom, useAtom } from "jotai";
import type React from "react";
import { useRef } from "react";
import { ContextMenuContent, ContextMenuItem } from "../ui/context-menu";
import { Separator } from "../ui/separator";
import { ResizeMenuItem } from "./menu-item";

interface BaseContextMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
}

export function BaseContextMenu(props: BaseContextMenuContentProps) {
	const { componentAtom, children } = props;
	const [component] = useAtom(componentAtom);
	const [, setComponents] = useAtom(componentsAtoms);

	const deleteComp = () => {
		setComponents((components) => components.filter((c) => c.id !== component.id));
	};
	const ref = useRef<HTMLDivElement>(null);
	return (
		<ContextMenuContent ref={ref}>
			<ContextMenuItem className="focus:bg-transparent">
				<Separator className="my-1" />
			</ContextMenuItem>
			{children}
			<ResizeMenuItem componentAtom={componentAtom} />
			<ContextMenuItem
				onClick={deleteComp}
				className="flex gap-2 text-[#FF0000] focus:text-[#FF0000] focus:bg-[#FFDBDC]"
			>
				<TrashIcon />
				<span>Delete</span>
			</ContextMenuItem>
		</ContextMenuContent>
	);
}
