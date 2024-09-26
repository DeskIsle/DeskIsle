import type { BaseComponentMeta } from "@/atoms/components";
import { type PrimitiveAtom, useAtom } from "jotai";
import { Button } from "../ui/button";

interface LayoutButtonProps {
	width: number;
	height: number;
	componentAtom: PrimitiveAtom<BaseComponentMeta>;
}

export function ResizeButton({ width, height, componentAtom }: LayoutButtonProps) {
	const [component, setComponent] = useAtom(componentAtom);
	function handleClick() {
		setComponent({
			...component,
			width: width,
			height: height,
		});
	}
	return (
		<Button variant="outline" className="w-full p-2 h-[2rem]" type="button" onMouseDown={handleClick}>
			{width}x{height}
		</Button>
	);
}