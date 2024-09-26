import { type BaseComponentMeta, componentsRegistry } from "@/atoms/components";
import { RadixIconsDimensions } from "@/icons/radix";
import { type PrimitiveAtom, useAtom } from "jotai";
import type React from "react";
import { ContextMenuItem } from "../ui/context-menu";
import { ResizeButton } from "./button";

interface ResizeMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
}
export function ResizeMenuItem({ componentAtom }: ResizeMenuItemProps) {
	const [component] = useAtom(componentAtom);
	const sizes = componentsRegistry[component.element].optionalSizes;

	return (
		<div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
			<div className="flex gap-2 items-center">
				<RadixIconsDimensions className="text-md" />
				<span>布局</span>
			</div>
			<div className="grid grid-cols-3 gap-1">
				{sizes.map((size, index) => (
					<ContextMenuItem key={`${size.w}-${size.h}-${index}`} className="p-0">
						<ResizeButton width={size.w} height={size.h} componentAtom={componentAtom} />
					</ContextMenuItem>
				))}
			</div>
		</div>
	);
}