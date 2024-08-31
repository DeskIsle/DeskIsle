import type { Comp } from "@/atoms/comps";
import { type PrimitiveAtom, useAtom } from "jotai";

export interface ImageWidgetProps {
	compAtom: PrimitiveAtom<Comp>;
}

export default function ImageWidget({ compAtom }: ImageWidgetProps) {
	const [comp] = useAtom(compAtom);
	const { img } = comp.elementProps;
	return (
		<img
			className="object-cover w-full h-full"
			draggable={false}
			src={img}
			alt=""
		/>
	);
}
