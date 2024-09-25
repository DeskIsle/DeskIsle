import type { Comp } from "@/atoms/comps";
import { type PrimitiveAtom, useAtom } from "jotai";
import { Button } from "../ui/button";

interface LayoutButtonProps {
	width: number;
	height: number;
	compAtom: PrimitiveAtom<Comp>;
}

export default function ResizeButton({ width, height, compAtom }: LayoutButtonProps) {
	const [comp, setComp] = useAtom(compAtom);
	function handleClick() {
		setComp({
			...comp,
			width: width,
			height: height,
		});
	}
	return (
		<Button variant='outline' className="w-full h-full p-2 h-[2rem]" type="button" onMouseDown={handleClick}>
			{width}x{height}
		</Button>
	);
}
