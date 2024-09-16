import { type Comp, registryComps } from "@/atoms/comps";
import { RadixIconsDimensions } from "@/icons/RadixIcons";
import { type PrimitiveAtom, useAtom } from "jotai";
import type React from "react";
import { ContextMenuItem } from "../ui/context-menu";
import ResizeButton from "./ResizeButton";

interface ResizeMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
	compAtom: PrimitiveAtom<Comp>;
}
export default function ResizeMenuItem({ compAtom }: ResizeMenuItemProps) {
	const [comp] = useAtom(compAtom);
	const sizes = registryComps[comp.element].optionalSizes;

	return (
		<div className="relative flex gap-1 flex-col cursor-default select-none justify-center rounded-sm px-2 py-1.5 text-sm outline-none">
			<div className="flex gap-2 items-center">
				<RadixIconsDimensions className="text-md" />
				<span>布局</span>
			</div>
			<div className="grid grid-cols-3 gap-1">
				{sizes.map((size) => (
					<ContextMenuItem key={String(size)} className="rounded-md border shadow-sm">
						<ResizeButton width={size.w} height={size.h} compAtom={compAtom} />
					</ContextMenuItem>
				))}
			</div>
		</div>
	);
}
