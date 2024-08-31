import { type Comp, compAtoms } from "@/atoms/comps";
import { type PrimitiveAtom, useAtom } from "jotai";
import React from "react";

interface LayoutButtonProps {
	width: number;
	height: number;
	compAtom: PrimitiveAtom<Comp>;
}

export default function ResizeButton({
	width,
	height,
	compAtom,
}: LayoutButtonProps) {
	const [comp, setComp] = useAtom(compAtom);
	function handleClick() {
		setComp({
			...comp,
			width: width,
			height: height,
		});
	}
	return (
		<button onClick={handleClick}>
			{width}x{height}
		</button>
	);
}
